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
  let content = fs.readFileSync(file, 'utf8');
  
  // Skip if already wrapped
  if (content.includes('<!-- Auto-wrapped by scripts/wrap-demos.js -->')) {
      console.log('Skipping (already wrapped):', file);
      return;
  }

  // 1. Find the main demo-container
  const containerMatch = content.match(/<div class="demo-container">([\s\S]*)<\/div>/);
  if (!containerMatch) {
      console.log('Skipping (no demo-container found):', file);
      return;
  }

  const innerContent = containerMatch[1];

  // 2. Split into parts
  // We look for the first <section>
  const sectionSplitIndex = innerContent.indexOf('<section');
  if (sectionSplitIndex === -1) {
      console.log('Skipping (no sections found):', file);
      return;
  }

  const headerPart = innerContent.substring(0, sectionSplitIndex).trim();
  const restPart = innerContent.substring(sectionSplitIndex).trim();

  // 3. Find playground section
  // We'll split the rest into individual sections.
  // This is the tricky part. We look for top-level <section ...> ... </section>
  const sections = [];
  let balance = 0;
  let currentSectionStart = -1;
  const tokens = restPart.split(/(<\/section>|<section[^>]*>)/);
  
  let currentSection = "";
  let playground = "";
  let examples = "";
  let playgroundFound = false;

  // Simpler approach for top-level sections:
  // Split by <section and join back, but that's messy.
  // Let's use a regex that matches top-level sections only.
  // Since we know the structure is flat-ish.
  const sectionRegex = /<section class="demo-section"[\s\S]*?<\/section>/g;
  const matchedSections = restPart.match(sectionRegex) || [];

  matchedSections.forEach((s, idx) => {
      // If it contains playground ID or text, and we haven't found playground yet
      if ((s.includes('id="playground"') || s.includes('Playground')) && !playgroundFound) {
          playground = s;
          playgroundFound = true;
      } else {
          examples += s + "\n\n";
      }
  });

  // If no playground found by name, take the first one
  if (!playground && matchedSections.length > 0) {
      playground = matchedSections[0];
      examples = matchedSections.slice(1).join('\n\n');
  }

  // Any leftover non-section content at the top of restPart (like variants nav)
  // should go into Examples.
  const navMatch = headerPart.match(/<div class="variants-nav">[\s\S]*?<\/div>/);
  const h1Match = headerPart.match(/<h1>[\s\S]*?<\/h1>/);
  const introMatch = headerPart.match(/<p class="demo-intro">[\s\S]*?<\/p>/);

  let header = "";
  if (h1Match) {
      let h1 = h1Match[0];
      // Try to wrap emoji in span for gradient effect
      h1 = h1.replace(/<h1>(..|[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}])/, (match, p1) => {
          return `<h1><span class="header-icon">${p1}</span>`;
      });
      header += h1 + "\n";
  }
  if (introMatch) header += introMatch[0] + "\n";

  let nav = "";
  if (navMatch) {
      nav = navMatch[0];
  }

  const finalTemplate = `<!-- Auto-wrapped by scripts/wrap-demos.js -->
<div class="demo-container header-only">
  ${header.trim()}
</div>

<demo-tabs>
  <div slot="playground">
    <div class="demo-container">
      ${playground.trim() || '<!-- No playground section -->'}
    </div>
  </div>

  <div slot="examples">
    <div class="demo-container">
      ${nav}
      ${examples.trim() || '<!-- No example sections -->'}
    </div>
  </div>

  <div slot="docs">
    <div class="demo-container">
      <section class="demo-section">
        <div class="section-header">
          <h2>📖 Documentation</h2>
          <p>Links, API references, and detailed usage notes</p>
        </div>
        <div class="demo-card" style="padding: 24px;">
          <p>Documentation for this component is currently being compiled. Please refer to the playground and examples for implementation details.</p>
        </div>
      </section>
    </div>
  </div>
</demo-tabs>
`;

  fs.writeFileSync(file, finalTemplate, 'utf8');
  console.log('Wrapped:', file);
});

console.log('Done');
