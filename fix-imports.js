/**
 * Fix script for TS files that were incorrectly modified by wire-docs.js
 * Cleans up the imports[] array formatting
 */
const fs = require('fs');
const path = require('path');

const DEMOS_DIR = path.join(__dirname, 'src/app/demos');
const DOC_CLASS = 'ComponentDocumentationComponent';
const DOC_IMPORT_PATH = '../../pages/component-documentation/component-documentation.component';

// The mapping of demos that need TS import
const DEMO_MAP = {
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

let fixed = 0;

for (const demoFolder of Object.keys(DEMO_MAP)) {
  const demoPath = path.join(DEMOS_DIR, demoFolder);
  if (!fs.existsSync(demoPath)) continue;

  const files = fs.readdirSync(demoPath);
  const tsFile = files.find(f => f.endsWith('demo.component.ts'));
  if (!tsFile) continue;

  const tsPath = path.join(demoPath, tsFile);
  let tsContent = fs.readFileSync(tsPath, 'utf8');

  // Check if this file has ComponentDocumentationComponent
  if (!tsContent.includes(DOC_CLASS)) continue;

  // Check if the imports array has any formatting issues
  // Pattern to look for: ComponentDocumentationComponent appears in the imports array
  // without proper comma on the preceding entry, or with misaligned closing bracket

  // Find the imports array
  const importsMatch = tsContent.match(/imports:\s*\[([\s\S]*?)\]/);
  if (!importsMatch) continue;

  const originalImportsBlock = importsMatch[0];

  // Fix the imports array:
  // 1. Get all import entries (trimmed, non-empty)
  let importsContent = importsMatch[1];
  
  // Split by comma, respecting possible nested brackets
  const entries = importsContent
    .split(',')
    .map(e => e.trim())
    .filter(e => e.length > 0);

  // Ensure ComponentDocumentationComponent is in the list
  if (!entries.includes(DOC_CLASS)) {
    // Try without the comma
    const allText = entries.join('');
    if (!allText.includes(DOC_CLASS)) {
      // Check for it with various surrounding whitespace
      const rawEntries = importsContent.split('\n').map(l => l.trim()).filter(l => l);
      const hasDoc = rawEntries.some(e => e.includes(DOC_CLASS));
      if (!hasDoc) continue;
    }
  }

  // Determine the indentation from the @Component decorator's imports array
  // Find what indent level is used for items
  // Look at the import array entries to find their indentation
  const importsStart = tsContent.indexOf('imports:');
  if (importsStart === -1) continue;

  // Find the opening [
  const openBracket = tsContent.indexOf('[', importsStart);
  if (openBracket === -1) continue;

  // Find a non-empty entry to get its indentation
  const afterBracket = tsContent.substring(openBracket + 1);
  const firstEntryMatch = afterBracket.match(/\n(\s+)\w/);
  const itemIndent = firstEntryMatch ? firstEntryMatch[1] : '    ';

  // Find the closing ] indent
  let depth = 0;
  let closeBracket = -1;
  for (let i = openBracket; i < tsContent.length; i++) {
    if (tsContent[i] === '[') depth++;
    else if (tsContent[i] === ']') {
      depth--;
      if (depth === 0) { closeBracket = i; break; }
    }
  }
  if (closeBracket === -1) continue;

  // Find the closing ] line to determine its indent
  const beforeClose = tsContent.substring(0, closeBracket);
  const closeLineStart = beforeClose.lastIndexOf('\n');
  const closeLine = beforeClose.substring(closeLineStart + 1);
  const closeIndent = closeLine.match(/^(\s*)/)[1];

  // Now reconstruct the imports array properly
  // Parse all items in the array
  const arrayContent = tsContent.substring(openBracket + 1, closeBracket);
  const items = arrayContent
    .split('\n')
    .map(l => l.trim().replace(/,$/, '')) // Remove trailing commas
    .filter(l => l.length > 0 && !l.startsWith('//'));

  // Ensure ComponentDocumentationComponent is in the list
  const hasDocComponent = items.some(item => item.includes(DOC_CLASS));
  if (!hasDocComponent) continue;

  // Rebuild the imports array
  const newArrayContent = items.map(item => `${itemIndent}${item},`).join('\n');
  const newImportsArray = `imports: [\n${newArrayContent}\n${closeIndent}]`;

  // Replace the original imports block
  const oldImportsArray = tsContent.substring(importsStart, closeBracket + 1);
  if (oldImportsArray !== newImportsArray) {
    tsContent = tsContent.substring(0, importsStart) + newImportsArray + tsContent.substring(closeBracket + 1);
    fs.writeFileSync(tsPath, tsContent, 'utf8');
    console.log(`✅ Fixed imports array in: ${tsFile}`);
    fixed++;
  } else {
    console.log(`  ✓ Already correct: ${tsFile}`);
  }
}

console.log(`\n📊 Fixed ${fixed} files`);
