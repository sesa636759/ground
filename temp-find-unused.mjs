import fs from 'fs';
import path from 'path';

function findFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(findFiles(file));
    } else {
      if (file.endsWith('demo.component.ts') && !file.includes('playground')) results.push(file);
    }
  });
  return results;
}

const files = findFiles('c:/Praveen/Personal-repo/Duplicate/AngularGround/src/app/demos');
let output = [];
for (const f of files) {
  const tsContent = fs.readFileSync(f, 'utf-8');
  const htmlFile = f.replace('.ts', '.html');
  if (!fs.existsSync(htmlFile)) continue;
  const htmlContent = fs.readFileSync(htmlFile, 'utf-8');

  const componentsToCheck = [
    { tag: '<app-demo-header', name: 'DemoHeaderComponent' },
    { tag: '<app-example-section', name: 'ExampleSectionComponent' },
    { tag: '<ui-code-preview', name: 'UiCodePreviewComponent' },
    { tag: '<demo-section', name: 'DemoSectionComponent' },
    { tag: '<demo-tabs', name: 'DemoTabsComponent' },
    { tag: '<app-component-documentation', name: 'ComponentDocumentationComponent' },
  ];

  for (const comp of componentsToCheck) {
    if (tsContent.includes(comp.name) && !htmlContent.includes(comp.tag)) {
      output.push(`Unused ${comp.name} in: ${path.basename(f)}`);
    }
  }
}
fs.writeFileSync('unused-utf8.txt', output.join('\n'), 'utf-8');
