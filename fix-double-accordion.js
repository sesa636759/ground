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

    // Detect if we injected our accordion
    if (mod.includes(`id: 'config', title: 'Configuration'`)) {
      // Are there TWO accordions now?
      // A common pattern for the double accordion is our wrapper starting with:
      // <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      //       <div slot="content-config">
      // and ending with:
      //       </div>
      //     </ui-accordion>

      // Check if the original pgAccordionItems exists:
      let hasDouble = mod.includes('pgAccordionItems') && mod.includes('<ui-accordion');

      if (hasDouble) {
        // Remove the outer accordion we added.
        mod = mod.replace(
          /<ui-accordion \[items\]="\[\{id: 'config'.*?>\s*<div slot="content-config">/,
          '',
        );
        // We also need to remove its matching closing tags.
        // It typically looks like:
        //       </div>
        //     </ui-accordion>
        //   </div>
        //
        //   <div class="playground-preview">
        //
        // So we replace `</div>\s*</ui-accordion>\s*</div>\s*<div class="playground-preview"`
        // with `</div>\s*<div class="playground-preview"`
        mod = mod.replace(
          /<\/div>\s*<\/ui-accordion>\s*<\/div>\s*<div([^>]*class="playground-preview"[^>]*)>/,
          `  </div>\n\n  <div$1>`,
        );
      }
    }

    if (mod !== original) {
      fs.writeFileSync(filePath, mod, 'utf8');
      processed++;
      console.log('Processed', filePath);
    }
  }
});

console.log('Modified', processed, 'files.');
