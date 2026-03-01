const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(
  __dirname,
  'src/app/demos/set-animate-on-scroll/set-animate-on-scroll-demo.component.html',
);
let content = fs.readFileSync(targetFile, 'utf8');

// The replacement was:
// content.replace(/<demo-card>/g, '<div class="preview-box">');
// content.replace(/<\/demo-card>/g, '</div>');

// Which resulted in
/*
      <div class="demo-grid col-1">
        <div class="preview-box">
          <preview-box class="scrollable-preview" style="min-height: ...">
            ...
          </preview-box>
          
        </div>
      </div>
*/

// Let's remove the wrapper <div class="preview-box"> that surrounds <preview-box class="scrollable-preview" ...> and its matching closing tag
content = content.replace(/<div class="preview-box">\s*<preview-box/g, '<preview-box');
content = content.replace(/<\/preview-box>\s*<\/div>/g, '</preview-box>');

fs.writeFileSync(targetFile, content);
console.log('File successfully updated!');
