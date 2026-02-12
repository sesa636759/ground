const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'src', 'app', 'demos');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (file.endsWith('-demo.component.html')) results.push(filePath);
    }
  });
  return results;
}

const files = walk(root);

files.forEach((file) => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Extract Header
        const h1Match = content.match(/<h1>([\s\S]*?)<\/h1>/);
        const introMatch = content.match(/<p class="(intro-text|demo-intro)">([\s\S]*?)<\/p>/);
        
        let header = "";
        if (h1Match) {
            let h1Inner = h1Match[1].trim();
            h1Inner = h1Inner.replace(/<span class="header-icon">([\s\S]*?)<\/span>/g, '$1').trim();
            const emojiRegex = /^([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|.)/u;
            const emojiMatch = h1Inner.match(emojiRegex);
            if (emojiMatch && (emojiMatch[0].length > 1 || h1Inner.charCodeAt(0) > 127)) {
                const emoji = emojiMatch[0];
                const rest = h1Inner.substring(emoji.length).trim();
                header += `<h1><span class="header-icon">${emoji}</span> ${rest}</h1>\n`;
            } else {
                header += `<h1>${h1Inner}</h1>\n`;
            }
        }
        if (introMatch) {
            header += `<p class="intro-text">${introMatch[2] ? introMatch[2].trim() : introMatch[1].trim()}</p>\n`;
        }

        // 2. Extract Sections
        const sections = [];
        const sectionRegex = /<section class="demo-section"[\s\S]*?<\/section>/g;
        let m;
        while ((m = sectionRegex.exec(content)) !== null) {
            const s = m[0];
            if (s.includes('📖 Documentation') || s.includes('compiled. Please refer to')) continue;
            sections.push(s);
        }

        let playContent = "";
        let exContentArr = [];
        let playgroundFound = false;

        sections.forEach(s => {
            if ((s.includes('id="playground"') || s.includes('Interactive Playground') || s.includes('Playground')) && !playgroundFound) {
                playContent = s;
                playgroundFound = true;
            } else {
                exContentArr.push(s);
            }
        });

        if (!playContent && sections.length > 0) {
            playContent = sections[0];
            exContentArr = sections.slice(1);
        }
        
        let exContent = exContentArr.join("\n\n");

        // 3. Handle Variants (Sidebar)
        // Check if component has 'variants' by looking at the HTML for *ngFor="let variant of variants"
        const hasVariants = content.includes('*ngFor="let variant of variants"');

        let examplesSlot = "";
        if (hasVariants) {
            examplesSlot = `
      <div class="examples-container">
        <aside class="variants-sidebar">
          <h3>Component Variants</h3>
          <ui-anchor
            auto-gen-container=".examples-content"
            scroll-container=".js-scroll-container"
            marker-style="line"
            show-numbers="false"
          ></ui-anchor>
        </aside>
        <div class="examples-content">
          ${exContent.trim() || '<!-- Examples content -->'}
        </div>
      </div>`;
        } else {
            examplesSlot = `
      <div class="demo-container">
        ${exContent.trim() || '<!-- Examples content -->'}
      </div>`;
        }

        const final = `<!-- Auto-wrapped by scripts/wrap-demos.js -->
<div class="demo-container header-only">
  ${header.trim()}
</div>

<demo-tabs>
  <div slot="playground">
    <div class="demo-container">
      ${playContent.trim() || '<!-- Playground content -->'}
    </div>
  </div>

  <div slot="examples">
    ${examplesSlot}
  </div>

  <div slot="docs">
    <div class="demo-container">
      <section class="demo-section">
        <div class="section-header">
          <h2>📖 Documentation</h2>
          <p>Links, API references, and detailed usage notes</p>
        </div>
        <div class="demo-card" style="padding: 24px;">
          <p>The documentation for this component is currently being compiled. Our technical writers are working to provide comprehensive API references, accessibility guidelines, and best practices.</p>
          <p>In the meantime, please explore the <strong>Playground</strong> for interactive testing and the <strong>Examples</strong> tab for common implementation patterns.</p>
        </div>
      </section>
    </div>
  </div>
</demo-tabs>
`;

        fs.writeFileSync(file, final, 'utf8');
    } catch (e) {
        console.error('Error processing', file, e.message);
    }
});
console.log('Final Perfect Standardized Refinement Done');
