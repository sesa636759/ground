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

let processed = 0;

walkDir(targetDir, function (filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.html')) {
    let original = fs.readFileSync(filePath, 'utf8');
    let mod = original;

    // We only want playground components
    if (!filePath.includes('-playground.component.')) return;

    // 1. Accordion mapping
    if (mod.includes('class="playground-controls"')) {
      let accMatch = mod.match(/<ui-accordion[^>]*>[\s\S]*?id:\s*'config'/);
      if (!accMatch) {
        let startCount = (mod.match(/<div[^>]*class="playground-controls"[^>]*>/g) || []).length;
        if (startCount === 1) {
          // Find <div class="playground-controls"> opening tag properly
          mod = mod.replace(
            /(<div[^>]*class="playground-controls"[^>]*>)/,
            `$1\n    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">\n      <div slot="content-config">`,
          );

          // Find closing </div> before <div class="playground-preview">
          let pPreviewRegex = /<\/div>\s*<div([^>]*class="playground-preview"[^>]*)>/;
          if (mod.match(pPreviewRegex)) {
            mod = mod.replace(
              pPreviewRegex,
              `      </div>\n    </ui-accordion>\n  </div>\n\n  <div$1>`,
            );
          } else {
            // It failed to find the closing div before playground-preview!
            // Let's revert and skip accordion if the template structure is wildly different.
            console.log('WARN: Could not wrap accordion properly for', filePath);
            mod = original;
          }
        }
      }
    }

    // 2. Extricate ui-code-preview and move to the end of playground-preview
    let codePreviewMatch = mod.match(
      /<div class="code-output">[\s\S]*?<ui-code-preview[\s\S]*?<\/ui-code-preview>[\s\S]*?<\/div>/,
    );
    let standalone = false;

    if (!codePreviewMatch) {
      codePreviewMatch = mod.match(/<ui-code-preview[^>]*>[\s\S]*?<\/ui-code-preview>/);
      standalone = true;
    }

    // We also want to skip if it's already properly at the end of the template (before the last two `</div>`s).
    // Let's just remove it from wherever it is and place it exactly.
    if (codePreviewMatch) {
      let snippet = codePreviewMatch[0];

      let tempMod = mod.replace(snippet, '');

      // Remove empty wrapper safely if it was standalone
      if (standalone) {
        tempMod = tempMod.replace(/<div class="code-output">[\s\n]*<\/div>/g, '');
      }

      // Put snippet at the end of playground-preview.
      // The playground-preview div encapsulates the example stage and the log.
      // We can just append the snippet right BEFORE the closing `</div>` of `playground-preview`.
      // How to find the closing `</div>` of `playground-preview`?
      // A simple heuristic: The `<div class="playground-layout">` closes with the last `</div>` before the end of the template literal or file.
      // So the `playground-preview` closes with the second to last `</div>`.
      // Or we can find `<div class="playground-preview">` and count div scopes.

      let resultAst = tempMod;
      let pidx = resultAst.indexOf('class="playground-preview"');
      if (pidx !== -1) {
        let startPreview = resultAst.lastIndexOf('<div', pidx);
        let p = startPreview + 4;
        let openCount = 1;
        while (openCount > 0 && p < resultAst.length) {
          let nextOpen = resultAst.indexOf('<div', p);
          let nextClose = resultAst.indexOf('</div>', p);

          if (nextClose === -1) break; // malformed!

          if (nextOpen !== -1 && nextOpen < nextClose) {
            openCount++;
            p = nextOpen + 4;
          } else {
            openCount--;
            p = nextClose + 6;
          }
        }

        // p is now the index right AFTER the `</div>` of playground-preview
        if (openCount === 0) {
          let endOfPreview = p - 6; // index of the exactly closing `</div>`
          resultAst =
            resultAst.substring(0, endOfPreview) +
            `\n      ${snippet}\n    ` +
            resultAst.substring(endOfPreview);
        }
      }
      mod = resultAst;
    }

    if (mod !== original) {
      fs.writeFileSync(filePath, mod, 'utf8');
      processed++;
      console.log('Processed', filePath);
    }
  }
});

console.log('Modified', processed, 'files.');
