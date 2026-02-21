const fs = require('fs');
const path = require('path');

const srcDemos = 'c:/Praveen/Personal-repo/Duplicate/AngularGround/src/app/demos';

function crawl(dir) {
  let r = [];
  fs.readdirSync(dir).forEach((f) => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      r = r.concat(crawl(p));
    } else if (p.endsWith('-demo.component.ts')) {
      r.push(p);
    }
  });
  return r;
}

const filesTS = crawl(srcDemos);

filesTS.forEach((fTS) => {
  const fHTML = fTS.replace('.ts', '.html');
  if (!fs.existsSync(fHTML)) return;

  let htmlContent = fs.readFileSync(fHTML, 'utf8');
  let originalHtml = htmlContent;

  if (htmlContent.includes('<!-- Sidebar Navigation -->')) {
    // 1. Replace in HTML (Examples Tab)
    // Matches the sidebar starting right before the comment, up to but not including Main Content Area
    const htmlRegex =
      /([ \t]*)<!-- Sidebar Navigation -->[\s\S]*?([ \t]*)<!-- Main Content Area -->/;
    htmlContent = htmlContent.replace(htmlRegex, (match, p1, p2) => {
      return (
        p1 +
        '<!-- Sidebar Navigation -->\n' +
        p1 +
        '<app-demo-sidebar [variants]="exampleVariants"></app-demo-sidebar>\n\n' +
        p2 +
        '<!-- Main Content Area -->'
      );
    });

    // 2. Add Sidebar Navigation to Docs tab
    if (htmlContent.includes('<div slot="docs">')) {
      // Find the docs block up to the end of the file/demo-tabs
      // Let's replace the inner structure of "docs" slot.
      const docsRegex = /<div slot="docs">[\s\S]*?<\/demo-tabs>/;

      const newDocsInner = `<div slot="docs">
      <div class="examples-split-layout" style="height: auto; overflow: visible">
        <!-- Sidebar Navigation -->
       <app-demo-sidebar [variants]="exampleVariants" [useAnchor]="true"></app-demo-sidebar>

        <!-- Main Content Area -->
        <div class="examples-content">
          <div class="demo-container">
            <section class="demo-section">
              <div class="section-header">
                <h2>📖 Documentation</h2>
                <p>Links, API references, and detailed usage notes</p>
              </div>
              <div class="demo-card" style="padding: 24px">
                <p>
                  The documentation for this component is currently being compiled. Our technical
                  writers are working to provide comprehensive API references, accessibility guidelines,
                  and best practices.
                </p>
                <p>
                  In the meantime, please explore the <strong>Playground</strong> for interactive
                  testing and the <strong>Examples</strong> tab for common implementation patterns.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </demo-tabs>`;

      htmlContent = htmlContent.replace(docsRegex, newDocsInner);
    }

    if (htmlContent !== originalHtml) {
      fs.writeFileSync(fHTML, htmlContent, 'utf8');

      // 3. Update TS File Imports
      let tsContent = fs.readFileSync(fTS, 'utf8');
      if (!tsContent.includes('DemoSidebarComponent')) {
        const sharedDir =
          'c:/Praveen/Personal-repo/Duplicate/AngularGround/src/app/shared/components/demo-sidebar/demo-sidebar.component';
        const dirOfFile = path.dirname(fTS).replace(/\\/g, '/');
        let relativePath = path.relative(dirOfFile, sharedDir).replace(/\\/g, '/');
        if (!relativePath.startsWith('.')) relativePath = './' + relativePath;

        tsContent = tsContent.replace(
          /import { Component/,
          `import { DemoSidebarComponent } from '${relativePath}';\nimport { Component`,
        );

        tsContent = tsContent.replace(/imports:\s*\[([\s\S]*?)\]/m, (match, p1) => {
          return `imports: [${p1}, DemoSidebarComponent]`;
        });

        fs.writeFileSync(fTS, tsContent, 'utf8');
      }
    }
  }
});
console.log('Update finished.');
