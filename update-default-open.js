const fs = require('fs');
const path = require('path');
const demoDir = path.join(process.cwd(), 'src', 'app', 'demos');

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Regex for defaultOpen = JSON.stringify([...])
      const regex1 = /defaultOpen\s*=\s*JSON\.stringify\((\[.*?\])\)/g;
      if (regex1.test(content)) {
        content = content.replace(regex1, 'defaultOpen = $1');
        modified = true;
      }

      // Regex for accordionDefaultOpen = JSON.stringify([...])
      const regex2 = /accordionDefaultOpen\s*=\s*JSON\.stringify\((\[.*?\])\)/g;
      if (regex2.test(content)) {
        content = content.replace(regex2, 'accordionDefaultOpen = $1');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated ' + file);
      }
    }
  }
}
walk(demoDir);
console.log('Done unwrapping defaultOpen variables!');
