const fs = require('fs');
const path = require('path');

const basePath = 'c:/Praveen/Personal-repo/angular/ground/';

const libraries = [
  {
    name: 'app-ui-library',
    path: path.join(basePath, 'node_modules/app-ui-library/dist/types/components'),
    prefix: 'ui'
  },
  {
    name: 'set-ui-lib',
    path: path.join(basePath, 'node_modules/set-ui-lib/dist/types/components'),
    prefix: 'set'
  }
];

const outputDir = path.join(basePath, 'src/assets/docs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function parseFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const props = [];
  const events = [];
  let currentComment = '';
  let insideClass = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Check for start of JSDoc
    if (line.startsWith('/**')) {
      currentComment = '';
      // ongoing comment collection
      // Handle one-liner
      if (line.endsWith('*/')) {
         currentComment = line.replace(/^\/\*\*\s?/, '').replace(/\s?\*\/$/, '').trim();
         // If it's pure comment, we look at next line for prop
         continue; 
      }
      
      while (!line.endsWith('*/') && i < lines.length - 1) {
        if (line !== '/**' && !line.startsWith('/**')) {
           currentComment += line.replace(/^\s*\*\s?/, '') + ' ';
        }
        i++;
        line = lines[i].trim();
      }
       // Last line of comment
      if (line.endsWith('*/') && line !== '*/') {
          currentComment += line.replace(/^\s*\*\s?/, '').replace(/\*\/$/, '') + ' ';
      }
      currentComment = currentComment.trim();
      continue;
    }

    if (line.startsWith('export declare class')) {
      insideClass = true;
      continue;
    }
    
    if (line.startsWith('}')) {
        insideClass = false;
        continue;
    }

    if (!insideClass) continue;

    // Check for Event Emitter matching: eventName: EventEmitter<Type>;
    const eventMatch = line.match(/^(\w+):\s*EventEmitter<([^>]+)>;/);
    if (eventMatch) {
      events.push({
        name: eventMatch[1],
        type: eventMatch[2],
        description: currentComment
      });
      currentComment = '';
      continue;
    }
    
    // Check for Props matching: propName(?:): type;
    // We try to capture up to the semicolon.
    const propMatch = line.match(/^(\w+)(\??):\s*([^;]+);/);
    
    if (propMatch) {
       const name = propMatch[1];
       const type = propMatch[3];
       
       // Filter out likely internal methods
       if (!name.startsWith('private') && !name.includes('(') && !type.includes('=>') && name !== 'el' && name !== 'element' && name !== 'render') {
            props.push({
                name: name,
                type: type,
                description: currentComment
            });
       }
       currentComment = '';
       continue;
    }
    
    // Reset comment if line is not relevant
    if (line !== '' && !line.startsWith('*')) {
        currentComment = '';
    }
  }
  
  return { props, events };
}

function generateMarkdown(componentName, data, prefix) {
  const tagName = `${prefix}-${componentName}`; 
  
  let md = `# ${tagName}\n\n`;
  
  md += `## Properties\n\n`;
  if (data.props.length > 0) {
    md += `| Property | Type | Description |\n`;
    md += `| --- | --- | --- |\n`;
    data.props.forEach(prop => {
      let desc = prop.description || '';
      // naive markdown escape
      const safeType = prop.type.replace(/\|/g, '\\|').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      md += `| **${prop.name}** | \`${safeType}\` | ${desc} |\n`;
    });
  } else {
    md += `No properties found.\n`;
  }
  
  md += `\n## Events\n\n`;
  if (data.events.length > 0) {
    md += `| Event | Detail Type | Description |\n`;
    md += `| --- | --- | --- |\n`;
    data.events.forEach(evt => {
        let desc = evt.description || '';
        const safeType = evt.type.replace(/\|/g, '\\|').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        md += `| **${evt.name}** | \`${safeType}\` | ${desc} |\n`;
    });
  } else {
    md += `No events found.\n`;
  }
  
  md += `\n## Usage Example\n\n`;
  md += `\`\`\`html\n`;
  
  // Construct a more realistic example
  let exampleLines = [];
  exampleLines.push(`<${tagName}`);
  
  // Add some props
  data.props.slice(0, 3).forEach(p => {
    if (p.type.includes('boolean')) {
        exampleLines.push(`  ${p.name}`);
    } else if (p.type.includes('string')) {
        exampleLines.push(`  ${p.name}="value"`);
    } else {
        exampleLines.push(`  [${p.name}]="value"`);
    }
  });
  
  // Add some events
  if (data.events.length > 0) {
      exampleLines.push(`  (${data.events[0].name})="handleEvent($event)"`);
  }
  
  exampleLines.push(`></${tagName}>`);
  md += exampleLines.join('\n') + `\n`;
  md += `\`\`\`\n`;
  
  return md;
}

libraries.forEach(lib => {
    if (!fs.existsSync(lib.path)) {
        console.log(`Library path not found: ${lib.path}`);
        return;
    }
    
    // Read subdirectories
    let componentDirs;
    try {
        componentDirs = fs.readdirSync(lib.path, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
    } catch(e) {
        console.log(`Error reading dir ${lib.path}: ${e.message}`);
        return;
    }

    componentDirs.forEach(compName => {
        // Assume d.ts file name matches component dir name logic
        // For app-ui-library: accordion -> accordion.d.ts
        const dtsPath = path.join(lib.path, compName, `${compName}.d.ts`);
        
        if (fs.existsSync(dtsPath)) {
            try {
                const data = parseFile(dtsPath);
                // Ensure we got something
                if (data.props.length > 0 || data.events.length > 0) {
                    const md = generateMarkdown(compName, data, lib.prefix);
                    fs.writeFileSync(path.join(outputDir, `${lib.prefix}-${compName}.md`), md);
                    console.log(`Generated ${lib.prefix}-${compName}.md`);
                }
            } catch (err) {
                 console.log(`Failed to process ${compName}: ${err.message}`);
            }
        }
    });
});

console.log('Documentation generation complete.');
