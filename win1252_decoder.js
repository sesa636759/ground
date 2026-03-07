const fs = require('fs');
const path = require('path');

const win1252ToByte = {
  '\u20AC': 0x80, // €
  '\u201A': 0x82, // ‚
  '\u0192': 0x83, // ƒ
  '\u201E': 0x84, // „
  '\u2026': 0x85, // …
  '\u2020': 0x86, // †
  '\u2021': 0x87, // ‡
  '\u02C6': 0x88, // ˆ
  '\u2030': 0x89, // ‰
  '\u0160': 0x8a, // Š
  '\u2039': 0x8b, // ‹
  '\u0152': 0x8c, // Œ
  '\u017D': 0x8e, // Ž
  '\u2018': 0x91, // ‘
  '\u2019': 0x92, // ’
  '\u201C': 0x93, // “
  '\u201D': 0x94, // ”
  '\u2022': 0x95, // •
  '\u2013': 0x96, // –
  '\u2014': 0x97, // —
  '\u02DC': 0x98, // ˜
  '\u2122': 0x99, // ™
  '\u0161': 0x9a, // š
  '\u203A': 0x9b, // ›
  '\u0153': 0x9c, // œ
  '\u017E': 0x9e, // ž
  '\u0178': 0x9f, // Ÿ
};

function strToWin1252Bytes(str) {
  const bytes = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let char = str[i];
    if (code < 0x80) {
      bytes[i] = code;
    } else if (code >= 0xa0 && code <= 0xff) {
      bytes[i] = code;
    } else if (win1252ToByte[char] !== undefined) {
      bytes[i] = win1252ToByte[char];
    } else if (code === 0x8d || code === 0x8f || code === 0x90 || code === 0x81) {
      // In node, sometimes these specific C1 control chars get preserved as themselves
      bytes[i] = code;
    } else {
      return null; // Characters not in windows-1252
    }
  }
  return bytes;
}

function fixMojibake(fileStr) {
  return fileStr.replace(/[^\x00-\x7F]+/g, (match) => {
    const bytes = strToWin1252Bytes(match);
    if (bytes) {
      try {
        const decoded = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
        // We only return decoded if it actually changed meaning it was mojibake
        return decoded;
      } catch (e) {
        return match;
      }
    }
    return match;
  });
}

function run(dir) {
  let fixes = [];
  fs.readdirSync(dir).forEach((f) => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) run(p);
    else if (p.endsWith('.ts') || p.endsWith('.html') || p.endsWith('.scss')) {
      let src = fs.readFileSync(p, 'utf8');
      let modified = fixMojibake(src);
      if (modified !== src) {
        fs.writeFileSync(p, modified, 'utf8');
        console.log('Fixed emojis in', p);
      }
    }
  });
}
run('./src/app');
