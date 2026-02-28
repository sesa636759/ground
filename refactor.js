const fs = require('fs');
const glob = require('glob');
const path = require('path');

const srcFiles = glob.sync(
  'c:/Praveen/Personal-repo/Duplicate/AngularGround/src/app/demos/**/*-playground.component.{ts,html,scss}',
);

let count = 0;

function resolveAppPlaygroundImportPath(filePath) {
  const parts = filePath.split('/');
  // Usually the path looks like: src/app/demos/set-radio/components/radio-playground/radio-playground.component.ts
  // The goal is to get to: src/app/shared/components/app-playground/app-playground.component
  // The distance depends on how deep we are in `src/app/`.

  // Find 'app' index
  const appIndex = parts.indexOf('app');
  if (appIndex === -1) return '';

  const depth = parts.length - appIndex - 2; // -1 for filename, -1 for app
  let relativePath = '';
  for (let i = 0; i < depth; i++) {
    relativePath += '../';
  }
  return relativePath + 'shared/components/app-playground/app-playground.component';
}

srcFiles.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  if (file.endsWith('.scss')) {
    if (content.includes('.playground-layout')) {
      content = content.replace(/\.playground-layout\s*{([^}]*)}/, '');
      content = content.replace(/\.playground-controls\s*{([^}]*)}/, '');
      content = content.replace(/\.playground-preview\s*{([^}]*)}/, '');
      content = content.replace(/\.code-output\s*{([^}]*)}/, '');
    }
  } else if (file.endsWith('.html') || file.endsWith('.ts')) {
    if (content.includes('playground-layout')) {
      // 1. imports
      if (file.endsWith('.ts') && content.includes('@Component')) {
        const importPath = resolveAppPlaygroundImportPath(file);
        if (importPath && !content.includes('AppPlaygroundComponent')) {
          content = `import { AppPlaygroundComponent } from '${importPath}';\n` + content;
          content = content.replace(/imports: \[([\s\S]*?)\]/, (match, p1) => {
            if (p1.endsWith(',')) return `imports: [${p1}\n    AppPlaygroundComponent,\n]`;
            else return `imports: [${p1},\n    AppPlaygroundComponent,\n]`;
          });
        }
      }

      // 2. Replacements inside template
      // <div class="playground-layout">
      //   <div class="playground-controls">
      //     <ui-accordion items='[{"id":"config","title":"Configuration","icon":"⚙️"}]' defaultOpen='["config"]' multiple>
      //       <div slot="content-config">
      content = content.replace(
        /<div class="playground-layout">\s*<div class="playground-controls">\s*<ui-accordion items='(.*?)' defaultOpen='(.*?)'( multiple)?>\s*<div slot="([^"]*)">/g,
        `<app-playground accordionItems='$1' defaultOpen='$2'>\n      <div slot="$4">`,
      );

      content = content.replace(
        /<div class="playground-layout">\s*<div class="playground-controls">\s*<ui-accordion items="([^"]*)" defaultOpen="([^"]*)"( multiple)?>\s*<div slot="([^"]*)">/g,
        `<app-playground accordionItems='$1' defaultOpen='$2'>\n      <div slot="$4">`,
      );

      content = content.replace(
        /<\/div>\s*<\/div>\s*<\/ui-accordion>\s*<\/div>\s*<div class="playground-preview">/g,
        `</div>\n      </div>\n      <div preview style="width: 100%; display: flex; justify-content: center; align-items: center;">`,
      );

      content = content.replace(
        /<\/div>\s*<\/ui-accordion>\s*<\/div>\s*<div class="playground-preview">/g,
        `</div>\n      <div preview style="width: 100%; display: flex; justify-content: center; align-items: center;">`,
      );

      content = content.replace(
        /<div class="code-output">\s*(<ui-code-preview[\s\S]*?)<\/ui-code-preview>\s*<\/div>\s*<\/div>\s*<\/div>/g,
        (match, p1) => {
          let inner = p1;
          if (!inner.includes('code'))
            inner = inner.replace('<ui-code-preview', '<ui-code-preview code');
          return `${inner}</ui-code-preview>\n    </app-playground>`;
        },
      );

      // another variant for code-output
      content = content.replace(
        /<div class="code-output">\s*(<ui-code-preview[\s\S]*?)<\/ui-code-preview>\s*<\/div>/g,
        (match, p1) => {
          let inner = p1;
          if (!inner.includes('code'))
            inner = inner.replace('<ui-code-preview', '<ui-code-preview code');
          return `${inner}</ui-code-preview>`;
        },
      );

      content = content.replace(
        /<\/div>\s*<\/div>\s*<\/div>\s*`/g,
        `</div>\n    </app-playground>\n  \``,
      );
      content = content.replace(/<\/div>\s*<\/div>\s*`/g, `</app-playground>\n  \``); // Sometimes the div is closed differently
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log('Modified', file);
  }
});

console.log('Modified files count: ', count);
