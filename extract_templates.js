const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (stat.isFile() && fullPath.endsWith('.component.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');

      // Simple regex to find template: `...` but considering potential line breaks inside the template
      // Match from `template: \`` until `\`,`

      const regex = /template:\s*`([\s\S]*?)`[,\s]/;
      const match = regex.exec(content);
      if (match) {
        const templateContent = match[1];

        // Find component html name
        const htmlFileName = path.basename(fullPath).replace('.ts', '.html');
        const htmlFullPath = path.join(path.dirname(fullPath), htmlFileName);

        fs.writeFileSync(htmlFullPath, templateContent, 'utf8');
        console.log('Created ' + htmlFullPath);

        const newContent = content.replace(regex, `templateUrl: './${htmlFileName}',\n`);
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDir('c:/Praveen/Personal-repo/Duplicate/AngularGround/src/app/demos');
