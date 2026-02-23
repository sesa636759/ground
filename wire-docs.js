/**
 * Script to wire ComponentDocumentationComponent into all demo pages
 * that still show the placeholder docs content.
 *
 * Run: node wire-docs.js
 */
const fs = require('fs');
const path = require('path');

const DEMOS_DIR = path.join(__dirname, 'src/app/demos');
const DOC_IMPORT_PATH = '../../pages/component-documentation/component-documentation.component';
const DOC_CLASS = 'ComponentDocumentationComponent';

// Mapping: demo folder name → componentId in ComponentDocsService
// Only include demos that HAVE a matching service entry
const DEMO_MAP = {
  // app-* demos
  'app-accordian':           'accordion',
  'app-aside':               'aside-panel',
  'app-avatar':              'avatar',
  'app-avatar-group':        'avatar-group',
  'app-badge':               'badge',
  'app-bar-chart':           'bar-chart',
  'app-breadcrumb':          'breadcrumb',
  'app-cascade-select':      'cascade-select',
  'app-chart':               'app-chart',
  'app-chip':                'chip',
  'app-context-menu':        'context-menu',
  'app-dialog-box':          'dialog-box',
  'app-divider':             'divider',
  'app-dock':                'dock',
  'app-dropdown':            'dropdown',
  'app-knob':                'knob',
  'app-layout-manager':      'layout-manager',
  'app-meter-group':         'meter-group',
  'app-pagination':          'pagination',
  'app-pattern-input':       'pattern-input',
  'app-picklist':            'picklist',
  'app-pill':                'pill',
  'app-range-slider':        'range-slider',
  'app-rating':              'rating',
  'app-scroll-top':          'scroll-top',
  'app-smart-stepper':       'smart-stepper',
  'app-speed-dial':          'speed-dial',
  'app-speedometer':         'speedometer',
  'app-split-button':        'split-button',
  'app-stepper':             'stepper',
  'app-switch':              'switch',
  'app-tabs':                'tabs',
  'app-tag':                 'tag',
  'app-timeline':            'timeline',
  'app-timer':               'timer',
  'app-transfer-list':       'transfer-list',
  'app-tree-list':           'tree-list',
  'app-advanced-data-table': 'advanced-data-table',

  // set-* demos
  'set-avatar':              'avatar',
  'set-avatar-group':        'avatar-group',
  'set-carousel':            'carousel',
  'set-checkbox':            'checkbox',
  'set-code-editor':         'code-editor',
  'set-context-menu':        'context-menu',
  'set-input':               'input',
  'set-otp-input':           'otp-input',
  'set-progress':            'progress',
  'set-stepper':             'stepper',
  'set-tab-stack':           'tabs',
  'set-tabs':                'tabs',
  'set-timeline':            'timeline',
  'set-toggle':              'toggle',
  'set-tooltip':             'tooltip',
  'set-tree':                'tree',
};

// The standard replacement for the docs slot
function makeDocsSlot(componentId) {
  return `    <div slot="docs">
      <app-component-documentation componentId="${componentId}"></app-component-documentation>
    </div>`;
}

// Matches the entire <div slot="docs">...</div> block (placeholder version)
// Handles both pattern A (with sidebar) and pattern B (simpler)
const DOCS_SLOT_REGEX = /\s*<div slot="docs">[\s\S]*?<\/div>\s*\n(\s*<\/demo-tabs>)/g;

let totalHtmlUpdated = 0;
let totalTsUpdated = 0;

for (const [demoFolder, componentId] of Object.entries(DEMO_MAP)) {
  const demoPath = path.join(DEMOS_DIR, demoFolder);
  if (!fs.existsSync(demoPath)) {
    console.warn(`⚠️  Folder not found: ${demoFolder}`);
    continue;
  }

  // Find the main demo HTML file
  const files = fs.readdirSync(demoPath);
  const htmlFile = files.find(f => f.endsWith('demo.component.html'));
  const tsFile = files.find(f => f.endsWith('demo.component.ts'));

  if (!htmlFile) {
    console.warn(`⚠️  No HTML file in: ${demoFolder}`);
    continue;
  }

  const htmlPath = path.join(demoPath, htmlFile);
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Check if this file has the placeholder text
  if (!htmlContent.includes('documentation for this component')) {
    console.log(`✅ Already done (HTML): ${demoFolder}`);
    continue;
  }

  // Replace the docs slot block
  // Strategy: find <div slot="docs"> ... </div> immediately before </demo-tabs>
  // Use a non-greedy approach to find the docs slot
  const docsSlotStart = htmlContent.indexOf('<div slot="docs">');
  if (docsSlotStart === -1) {
    console.warn(`⚠️  No slot="docs" found in: ${demoFolder}`);
    continue;
  }

  // Find the matching </div> for the docs slot
  // Count open/close divs to find the end
  let depth = 0;
  let i = docsSlotStart;
  let docsSlotEnd = -1;
  while (i < htmlContent.length) {
    if (htmlContent.startsWith('<div', i)) {
      depth++;
      i += 4;
    } else if (htmlContent.startsWith('</div>', i)) {
      depth--;
      if (depth === 0) {
        docsSlotEnd = i + 6; // after </div>
        break;
      }
      i += 6;
    } else {
      i++;
    }
  }

  if (docsSlotEnd === -1) {
    console.warn(`⚠️  Could not find end of docs slot in: ${demoFolder}`);
    continue;
  }

  const newDocsSlot = makeDocsSlot(componentId);
  htmlContent = htmlContent.substring(0, docsSlotStart) + newDocsSlot + '\n' + htmlContent.substring(docsSlotEnd);
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`✅ Updated HTML: ${demoFolder} → componentId="${componentId}"`);
  totalHtmlUpdated++;

  // Now handle the TS file
  if (!tsFile) {
    console.warn(`⚠️  No TS file in: ${demoFolder}`);
    continue;
  }

  const tsPath = path.join(demoPath, tsFile);
  let tsContent = fs.readFileSync(tsPath, 'utf8');

  if (tsContent.includes(DOC_CLASS)) {
    console.log(`  ↳ TS import already present: ${demoFolder}`);
    continue;
  }

  // Add import statement before the @Component decorator
  const componentDecoratorIdx = tsContent.indexOf('@Component(');
  if (componentDecoratorIdx === -1) {
    console.warn(`⚠️  No @Component found in: ${tsFile}`);
    continue;
  }

  // Find the last import line before @Component
  const beforeDecorator = tsContent.substring(0, componentDecoratorIdx);
  const lastImportEnd = beforeDecorator.lastIndexOf("';");
  if (lastImportEnd === -1) {
    console.warn(`⚠️  Could not find last import in: ${tsFile}`);
    continue;
  }

  const insertPos = lastImportEnd + 2; // after the ';
  const importLine = `\nimport { ${DOC_CLASS} } from '${DOC_IMPORT_PATH}';`;
  tsContent = tsContent.substring(0, insertPos) + importLine + tsContent.substring(insertPos);

  // Add to imports array
  // Find the imports: [ array and add before the closing ]
  const importsArrayMatch = tsContent.match(/imports:\s*\[([^\]]*)\]/s);
  if (!importsArrayMatch) {
    console.warn(`⚠️  No imports array found in: ${tsFile}`);
    fs.writeFileSync(tsPath, tsContent, 'utf8');
    continue;
  }

  // Find the position of the closing ] of the imports array
  const importsStart = tsContent.indexOf('imports:');
  let importsDepth = 0;
  let importsEnd = -1;
  let j = importsStart;
  while (j < tsContent.length) {
    if (tsContent[j] === '[') {
      importsDepth++;
    } else if (tsContent[j] === ']') {
      importsDepth--;
      if (importsDepth === 0) {
        importsEnd = j;
        break;
      }
    }
    j++;
  }

  if (importsEnd === -1) {
    console.warn(`⚠️  Could not find end of imports array in: ${tsFile}`);
    fs.writeFileSync(tsPath, tsContent, 'utf8');
    continue;
  }

  // Find the indent level of the imports array entries
  // Look at the line before the closing ]
  const beforeClose = tsContent.substring(0, importsEnd);
  const lastNewline = beforeClose.lastIndexOf('\n');
  const lastLine = beforeClose.substring(lastNewline + 1);
  const indent = lastLine.match(/^(\s*)/)[1];

  // Insert ComponentDocumentationComponent before the ]
  const insertStr = `\n${indent}${DOC_CLASS},`;
  tsContent = tsContent.substring(0, importsEnd) + insertStr + tsContent.substring(importsEnd);

  fs.writeFileSync(tsPath, tsContent, 'utf8');
  console.log(`  ↳ Updated TS: added import + imports[] entry`);
  totalTsUpdated++;
}

console.log(`\n📊 Summary:`);
console.log(`   HTML files updated: ${totalHtmlUpdated}`);
console.log(`   TS files updated:   ${totalTsUpdated}`);
console.log(`   Total demos processed: ${Object.keys(DEMO_MAP).length}`);
