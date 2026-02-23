const fs = require('fs');

function extractComponent(tsPath, htmlPath, scssPath) {
  let content = fs.readFileSync(tsPath, 'utf8').replace(/\r\n/g, '\n');

  const templateStart = content.indexOf('  template: `');
  const stylesStartStr = '  styles: [\n    `';
  const stylesStart = content.indexOf(stylesStartStr);
  const stylesEnd = content.lastIndexOf('    `,\n  ],\n})');

  if (templateStart === -1 || stylesStart === -1 || stylesEnd === -1) {
    console.log(`No inline template/styles found in ${tsPath}`);
    return;
  }

  // Extract HTML (template between template: ` and styles: [)
  const htmlRaw = content.substring(templateStart + '  template: `'.length, stylesStart);
  // Trim the trailing `,\n  ` that closes the template property
  const htmlContent = htmlRaw.replace(/`,\s*$/, '').trim();
  fs.writeFileSync(htmlPath, htmlContent + '\n', 'utf8');

  // Extract SCSS
  const scssContent = content.substring(stylesStart + stylesStartStr.length, stylesEnd);
  fs.writeFileSync(scssPath, scssContent.trim() + '\n', 'utf8');

  // Replace template + styles with external file URLs
  let newTs = content.substring(0, templateStart);
  newTs += `  templateUrl: '${htmlPath.split('/').pop()}',\n  styleUrl: '${scssPath.split('/').pop()}',\n`;
  newTs += content.substring(stylesEnd + '    `,\n  ],\n'.length);
  fs.writeFileSync(tsPath, newTs, 'utf8');

  console.log(`✅ Extracted: ${tsPath}`);
}

// Extract documentation.component.ts
extractComponent(
  'src/app/pages/documentation/documentation.component.ts',
  'src/app/pages/documentation/documentation.component.html',
  'src/app/pages/documentation/documentation.component.scss',
);

// Extract component-documentation.component.ts
extractComponent(
  'src/app/pages/component-documentation/component-documentation.component.ts',
  'src/app/pages/component-documentation/component-documentation.component.html',
  'src/app/pages/component-documentation/component-documentation.component.scss',
);
