const fs = require('fs');
const glob = require('glob');
const path = require('path');

const srcDir = path.resolve('src/app/demos').replace(/\\/g, '/');
const targetPath = path.resolve('src/app/shared/components/app-playground/playground.constants');
const baseTarget = path.resolve(
  'src/app/shared/components/app-playground/base-playground.component',
);

let updatedCount = 0;

const files = glob.sync(srcDir + '/**/*.ts');
console.log(`Found ${files.length} ts files`);

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  let relPath = path.relative(path.dirname(file), targetPath).replace(/\\/g, '/');
  if (!relPath.startsWith('.')) relPath = './' + relPath;

  content = content.replace(
    /import\s*\{\s*PLAYGROUND_IMPORTS\s*\}\s*from\s*['"][^'"]+['"]\s*;?/g,
    `import { PLAYGROUND_IMPORTS } from '${relPath}';`,
  );

  let baseRel = path.relative(path.dirname(file), baseTarget).replace(/\\/g, '/');
  if (!baseRel.startsWith('.')) baseRel = './' + baseRel;

  content = content.replace(
    /import\s*\{\s*BasePlaygroundComponent\s*\}\s*from\s*['"][^'"]+['"]\s*;?/g,
    `import { BasePlaygroundComponent } from '${baseRel}';`,
  );

  if (content !== original) {
    fs.writeFileSync(file, content);
    updatedCount++;
  }
});
console.log('Total fixed:', updatedCount);
