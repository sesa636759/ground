const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'src', 'app', 'demos');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (file.endsWith('-demo.component.ts')) results.push(filePath);
    }
  });
  return results;
}

const files = walk(root);
console.log('Found', files.length, 'demo ts files');

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('DemoTabsComponent')) {
    console.log('Skipping (already imported):', file);
    return;
  }

  // Add import statement
  const importLine = "import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';\n";
  content = importLine + content;

  // Add to imports array
  content = content.replace(/imports:\s*\[([^\]]*)\]/, (match, p1) => {
    const imports = p1.trim();
    if (imports.length > 0) {
      return `imports: [${imports}, DemoTabsComponent]`;
    } else {
      return `imports: [DemoTabsComponent]`;
    }
  });

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated imports for:', file);
});

console.log('Done');
