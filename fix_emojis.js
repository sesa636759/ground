const fs = require('fs');
const path = require('path');

function run(dir) {
  fs.readdirSync(dir).forEach((f) => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) run(p);
    else if (p.endsWith('.ts') || p.endsWith('.html') || p.endsWith('.scss')) {
      try {
        let b = fs.readFileSync(p);
        // The bytes are valid utf-8 for the mojibake.
        // We convert it to a string as if it was Windows-1252 to decode the original utf-8 bytes
        let baseUtf8str = b.toString('utf8');
        if (baseUtf8str.includes('ðŸ')) {
          const originalBytes = Buffer.from(baseUtf8str, 'latin1');
          const cleanText = originalBytes.toString('utf8');
          fs.writeFileSync(p, cleanText, 'utf8');
          console.log('Fixed', p);
        }
      } catch (e) {}
    }
  });
}
run('./src/app');
