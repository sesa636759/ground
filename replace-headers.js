/**
 * Replace <h1>ICON Title</h1> + <p class="intro-text">...</p>
 * with <app-demo-header icon="ICON" title="Title" description="...">
 * in all demo HTML files that still have the old pattern.
 * Also add DemoHeaderComponent import+imports[] to TS files missing it.
 */
const fs = require('fs');
const path = require('path');

const DEMOS_DIR = path.join(__dirname, 'src/app/demos');
const HEADER_IMPORT_PATH = '../../shared/components/demo-header/demo-header.component';
const HEADER_CLASS = 'DemoHeaderComponent';

// Extract leading emoji characters from a string
function extractEmoji(str) {
  // Match emoji sequences (including ZWJ sequences, variation selectors, etc.)
  const emojiRegex = /^([\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA9F}⚓⚡✨✅❌⭐▶️◀️↔️→←↕↗↘⬆⬇➡⬅⚠⚙⚽⚾⛳⛵⭐☀☁☂☃☄☎☑☒☓☔☕☖☗☘☙☚☛☜☝☞☟☠☡☢☣☤☥☦☧☨☩☪☫☬☭☮☯☰☱☲☳☴☵☶☷☸☹☺☻☼☽☾☿♀♁♂♃♄♅♆♇♈♉♊♋♌♍♎♏♐♑♒♓♔♕♖♗♘♙♚♛♜♝♞♟♠♡♢♣♤♥♦♧♨♩♪♫♬♭♮♯➖➡⬆⬇⬅⭐⭕💠🎯🎮]+[\uFE0F\u20E3]?)/u;
  const m = str.match(emojiRegex);
  return m ? m[1] : '';
}

// Split "🎯 Title Text" into {emoji, title}
function parseH1(h1Text) {
  h1Text = h1Text.trim();
  // Try to split on first space after emoji
  const spaceIdx = h1Text.search(/\s/);
  if (spaceIdx > 0) {
    const emoji = h1Text.substring(0, spaceIdx).trim();
    const title = h1Text.substring(spaceIdx).trim();
    return { emoji, title };
  }
  return { emoji: '', title: h1Text };
}

let htmlUpdated = 0;
let tsUpdated = 0;
let skipped = 0;

const demoFolders = fs.readdirSync(DEMOS_DIR);

for (const folder of demoFolders) {
  const folderPath = path.join(DEMOS_DIR, folder);
  if (!fs.statSync(folderPath).isDirectory()) continue;

  const files = fs.readdirSync(folderPath);
  const htmlFile = files.find(f => f.endsWith('demo.component.html'));
  const tsFile = files.find(f => f.endsWith('demo.component.ts'));

  if (!htmlFile) continue;

  const htmlPath = path.join(folderPath, htmlFile);
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Check if this file has the old h1 + intro-text pattern
  const headerPattern = /(<div class="demo-container">\s*)<h1>([^<]+)<\/h1>\s*<p class="intro-text">([\s\S]*?)<\/p>/;
  const match = htmlContent.match(headerPattern);

  if (!match) {
    // Check if already converted
    if (htmlContent.includes('app-demo-header')) {
      // Already done
    } else {
      // No match and no demo-header - skip
    }
    continue;
  }

  const h1Raw = match[2].trim();
  const descRaw = match[3].replace(/\s+/g, ' ').trim();
  const { emoji, title } = parseH1(h1Raw);

  const replacement = `<div class="demo-container">\n  <app-demo-header\n    icon="${emoji}"\n    title="${title}"\n    description="${descRaw}"\n  ></app-demo-header>`;

  htmlContent = htmlContent.replace(headerPattern, replacement);
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`✅ HTML: ${folder}  →  icon="${emoji}"  title="${title}"`);
  htmlUpdated++;

  // Now handle TS file
  if (!tsFile) continue;
  const tsPath = path.join(folderPath, tsFile);
  let tsContent = fs.readFileSync(tsPath, 'utf8');

  if (tsContent.includes(HEADER_CLASS)) {
    continue;
  }

  // Find last import line before @Component
  const componentDecoratorIdx = tsContent.indexOf('@Component(');
  if (componentDecoratorIdx === -1) continue;

  const beforeDecorator = tsContent.substring(0, componentDecoratorIdx);
  const lastSemicolon = beforeDecorator.lastIndexOf("';");
  if (lastSemicolon === -1) continue;

  const insertPos = lastSemicolon + 2;
  const importLine = `\nimport { ${HEADER_CLASS} } from '${HEADER_IMPORT_PATH}';`;
  tsContent = tsContent.substring(0, insertPos) + importLine + tsContent.substring(insertPos);

  // Add to imports array
  const importsStart = tsContent.indexOf('imports:');
  if (importsStart === -1) continue;

  let depth = 0, closeBracket = -1;
  for (let i = importsStart; i < tsContent.length; i++) {
    if (tsContent[i] === '[') depth++;
    else if (tsContent[i] === ']') { depth--; if (depth === 0) { closeBracket = i; break; } }
  }
  if (closeBracket === -1) continue;

  // Reconstruct imports array cleanly
  const openBracket = tsContent.indexOf('[', importsStart);
  const arrayContent = tsContent.substring(openBracket + 1, closeBracket);
  
  // Get indent from first entry
  const firstEntryMatch = arrayContent.match(/\n(\s+)\w/);
  const itemIndent = firstEntryMatch ? firstEntryMatch[1] : '    ';
  const beforeClose = tsContent.substring(0, closeBracket);
  const closeLineStart = beforeClose.lastIndexOf('\n');
  const closeIndent = beforeClose.substring(closeLineStart + 1).match(/^(\s*)/)[1];

  const items = arrayContent
    .split('\n')
    .map(l => l.trim().replace(/,$/, ''))
    .filter(l => l.length > 0 && !l.startsWith('//'));

  items.push(HEADER_CLASS);

  const newArrayContent = items.map(item => `${itemIndent}${item},`).join('\n');
  const newImportsArray = `imports: [\n${newArrayContent}\n${closeIndent}]`;
  
  tsContent = tsContent.substring(0, importsStart) + newImportsArray + tsContent.substring(closeBracket + 1);
  fs.writeFileSync(tsPath, tsContent, 'utf8');
  console.log(`  ↳ TS updated: ${tsFile}`);
  tsUpdated++;
}

console.log(`\n📊 HTML updated: ${htmlUpdated}, TS updated: ${tsUpdated}`);
