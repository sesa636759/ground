const cheerio = require('cheerio');
const fs = require('fs');

let tpl = `<div class="playground-layout">
  <div class="playground-controls">
    <div class="control-grid">
      <app-input [(ngModel)]="val" type="text" />
    </div>
    <div class="code-output">
      <ui-code-preview *ngIf="showCode" [htmlCode]="generatedCode()" label="Generated Code"></ui-code-preview>
    </div>
  </div>
  <div class="playground-preview" [class.hello]="true">
    <div class="preview-stage"><app-test></app-test></div>
  </div>
</div>`;

const $ = cheerio.load(tpl, { xmlMode: true, decodeEntities: false });

let controls = $('.playground-controls');
let preview = $('.playground-preview');
let codeOutput = $('.code-output').length ? $('.code-output') : $('ui-code-preview').parent();
if (codeOutput[0] && codeOutput[0].name !== 'div') codeOutput = $('ui-code-preview');

// wrap controls
let originalControlsContent = controls.html();
controls.empty();
controls.append(`
    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      <div slot="content-config">
        ${originalControlsContent}
      </div>
    </ui-accordion>
`);

// move code
if (codeOutput.length) {
  let cloned = codeOutput.clone();
  codeOutput.remove();
  preview.append(cloned);
}

console.log($.html().replace(/&apos;/g, "'"));
