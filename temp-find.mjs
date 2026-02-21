import fs from 'fs';
import path from 'path';

function findFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(file));
    } else {
      if (file.endsWith('.html')) results.push(file);
    }
  });
  return results;
}

const files = findFiles('c:/Praveen/Personal-repo/Duplicate/AngularGround/src/app/demos');
for (let f of files) {
  const content = fs.readFileSync(f, 'utf-8');
  let index = content.indexOf('slot="playground"');
  if (index === -1) {
    index = content.indexOf("slot='playground'");
  }
  if (index === -1) {
    // console.log("NO PLAYGROUND", f);
    continue;
  }

  // Find start of the div
  const startDiv = content.lastIndexOf('<div', index);
  if (startDiv === -1) continue;

  // Quick hack: count divs
  let currentPos = startDiv;
  let depth = 0;
  let foundEnd = -1;
  const regex = /<\/?div\b/g;
  regex.lastIndex = startDiv;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[0] === '<div') {
      depth++;
    } else if (match[0] === '</div') {
      depth--;
      if (depth === 0) {
        foundEnd = match.index;
        break;
      }
    }
  }
  if (foundEnd !== -1) {
    const inside = content.substring(content.indexOf('>', startDiv) + 1, foundEnd).trim();
    if (!inside.startsWith('<app-') && !inside.startsWith('<!--')) {
      console.log('Needs refactoring:', path.basename(f));
      console.log(inside.substring(0, 50));
    }
  }
}
