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

    if (mod.includes('pgAccordionItems') && mod.includes(`id: 'config', title: 'Configuration'`)) {
      // Find the injected start
      let startToken = `<ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">\n      <div slot="content-config">`;
      if (!mod.includes(startToken)) {
        // Alternative whitespace
        startToken = `<ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">`;
      }

      // We will perform a more robust regex to remove the wrapper.
      // 1. Remove the opening injected accordion and its slot wrapper.
      mod = mod.replace(
        /<ui-accordion \[items\]="\[\{id: 'config'[^>]*>\s*<div slot="content-config">/,
        '',
      );

      // 2. Remove the closing injected accordion around the nested accordion
      // usually looks like:
      //     </ui-accordion>
      //         </div>
      //     </ui-accordion>
      //   </div>
      //   <div class="playground-preview">

      let pPreviewIdx = mod.indexOf('class="playground-preview"');
      if (pPreviewIdx > -1) {
        let chunk = mod.substring(pPreviewIdx - 200, pPreviewIdx + 50);
        let closingRegex =
          /<\/div>\s*<\/ui-accordion>\s*(<\/div>\s*<div[^>]*class="playground-preview")/;
        mod = mod.replace(closingRegex, `$1`);
      }
    }

    if (mod !== original) {
      fs.writeFileSync(filePath, mod, 'utf8');
      processed++;
      console.log('Fixed', filePath);
    }
  }
});

console.log('Fixed double accordions in', processed, 'files.');
