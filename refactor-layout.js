const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const targetDir = path.resolve('c:/Praveen/Personal-repo/Duplicate/AngularGround/src/app/demos');

// Helper to get balanced tag content
function extractTagRegex(content, tag) {
  const regexp = new RegExp(`<${tag}[^>]*>`, 'g');
  let match;
  let results = [];
  while ((match = regexp.exec(content)) !== null) {
    let openCount = 1;
    let p = match.index + match[0].length;
    let lastP = p;
    while (openCount > 0 && p < content.length) {
      let nextOpen = content.indexOf(`<${tag}`, p);
      let nextClose = content.indexOf(`</${tag}>`, p);

      if (nextClose === -1) break; // malformed!

      // Adjust if tag is e.g. `<div` and we find another `<div`
      // Wait, nextOpen could be `<divider` which starts with `<div` ! So use `\\b`!
      let openRegex = new RegExp(`<${tag}\\b[^>]*>`, 'g');
      openRegex.lastIndex = p;
      let mOpen = openRegex.exec(content);
      let nextValidOpen = mOpen ? mOpen.index : -1;

      if (nextValidOpen !== -1 && nextValidOpen < nextClose) {
        openCount++;
        p = nextValidOpen + mOpen[0].length;
      } else {
        openCount--;
        p = nextClose + `</${tag}>`.length;
      }
    }

    let fullMatch = content.substring(match.index, p);
    let innerHtml = content.substring(match.index + match[0].length, p - `</${tag}>`.length);
    results.push({
      full: fullMatch,
      inner: innerHtml,
      start: match.index,
      end: p,
      tagString: match[0],
    });
  }
  return results;
}

function processFile(filePath) {
  let original = fs.readFileSync(filePath, 'utf8');
  let modified = original;

  // We only care about modifying the HTML template structure
  // Find the playground-controls block
  let controlsMatches = extractTagRegex(modified, 'div');
  let controlsBlock = controlsMatches.find((m) =>
    m.tagString.includes('class="playground-controls"'),
  );
  let previewBlock = controlsMatches.find((m) =>
    m.tagString.includes('class="playground-preview"'),
  );

  if (!controlsBlock || !previewBlock) return; // Cannot safely modify

  // Check if controls are already inside <ui-accordion>
  if (controlsBlock.inner.includes('<ui-accordion')) {
    // Already processed partially or manually, but maybe we need to fix code preview
  } else {
    // Wrap innards in accordion
    let newInner = `
    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      <div slot="content-config">
        ${controlsBlock.inner}
      </div>
    </ui-accordion>`;

    modified =
      modified.substring(0, controlsBlock.start) +
      controlsBlock.tagString +
      newInner +
      '</div>' +
      modified.substring(controlsBlock.end);
  }

  // Refresh indices after modification
  controlsMatches = extractTagRegex(modified, 'div');
  controlsBlock = controlsMatches.find((m) => m.tagString.includes('class="playground-controls"'));
  previewBlock = controlsMatches.find((m) => m.tagString.includes('class="playground-preview"'));

  // Find code preview anywhere in the template (either wrapped in div.code-output or just ui-code-preview)
  let codePreviewRegex = /<ui-code-preview[\s\S]*?<\/ui-code-preview>/;
  let matchCode = modified.match(codePreviewRegex);

  if (matchCode) {
    let codeHtml = matchCode[0];

    // Let's see if there is a wrapper
    let codeOutputMatches = extractTagRegex(modified, 'div');
    let wrapper = codeOutputMatches.find(
      (m) => m.tagString.includes('class="code-output"') && m.inner.includes('<ui-code-preview'),
    );

    let removalStart, removalEnd, blockToMove;
    if (wrapper && wrapper.full.includes(codeHtml)) {
      removalStart = wrapper.start;
      removalEnd = wrapper.end;
      blockToMove = wrapper.full;
    } else {
      removalStart = modified.indexOf(codeHtml);
      removalEnd = removalStart + codeHtml.length;
      blockToMove = codeHtml;
    }

    // if the code preview is already inside playground-preview, where is it?
    // We want it at the very bottom of playground-preview.
    if (removalStart >= previewBlock.start && removalEnd <= previewBlock.end) {
      // It's inside preview. Is it at the end?
      // Let's just remove and re-append to ensure it evaluates last.
      // Actually, if it's already in preview, maybe it's fine?
      // But the user complained "must come below the example". Thus we should pull it out and append it at the END of playground preview.

      let tempMod = modified.substring(0, removalStart) + modified.substring(removalEnd);

      // Re-evaluate preview block
      let tMatches = extractTagRegex(tempMod, 'div');
      let tPreview = tMatches.find((m) => m.tagString.includes('class="playground-preview"'));

      modified =
        tempMod.substring(0, tPreview.end - 6) +
        `\n      ${blockToMove}\n    ` +
        '</div>' +
        tempMod.substring(tPreview.end);
    } else {
      // It's outside preview (e.g. in controls). Move it to the bottom of playground-preview
      let tempMod = modified.substring(0, removalStart) + modified.substring(removalEnd);

      let tMatches = extractTagRegex(tempMod, 'div');
      let tPreview = tMatches.find((m) => m.tagString.includes('class="playground-preview"'));

      modified =
        tempMod.substring(0, tPreview.end - 6) +
        `\n      ${blockToMove}\n    ` +
        '</div>' +
        tempMod.substring(tPreview.end);
    }
  }

  if (original !== modified) {
    fs.writeFileSync(filePath, modified, 'utf8');
    console.log('Processed', filePath);
  }
}

walkDir(targetDir, function (filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.html')) {
    processFile(filePath);
  }
});

console.log('Done structural refactoring.');
