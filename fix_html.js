import fs from 'fs';
const path =
  'c:/Praveen/Personal-repo/Duplicate/AngularGround/src/app/demos/sets/set-animate-on-scroll/set-animate-on-scroll-demo.component.html';
let content = fs.readFileSync(path, 'utf8');

// Fix the malformed tags from previous failed attempt
content = content.replace(/<div class=" preview-box\\/g, '<div class="preview-box"');
content = content.replace(/<preview-box/g, '<div class="preview-box"');
content = content.replace(/<\/preview-box>/g, '</div>');

// Also fix the case where we might have double class attributes now
content = content.replace(/<div class="preview-box"(\s+)class="/g, '<div class="preview-box ');

fs.writeFileSync(path, content);
