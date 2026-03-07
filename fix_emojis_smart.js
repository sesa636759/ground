const fs = require('fs');
const path = require('path');
const replacements = {
  'ðŸŽ®': '🎮',
  'ðŸŽ¯': '🎯',
  'ðŸŽ¨': '🎨',
  'ðŸ“ ': '📏',
  'ðŸ ·ï¸ ': '🏷️',
  'âš™ï¸ ': '⚙️',
  'ðŸ›’': '🛒',
  'ðŸ” ': '🔍',
  'ðŸ‘¤': '👤',
  'ðŸš€': '🚀',
  'ðŸŒ™': '🌙',
  'ðŸŒ¿': '🌿',
  'ðŸ’™': '💙',
  'ðŸ‘ ï¸ ': '👁️',
  'ðŸ”„': '🔄',
  'ðŸ””': '🔔',
  'ðŸ“§': '📧',
  'ðŸŸ¢': '🟢',
  'â˜€ï¸ ': '☀️',
  'ðŸ”Š': '🔊',
  'ðŸ”‡': '🔇',
  'ðŸ…°ï¸ ': '🅰️',
  'ðŸ––': '🖖',
  'ðŸ”¥': '🔥',
  'ðŸ’Ž': '💎',
  'ðŸ§Š': '🧱',
  'ðŸ“±': '📱',
  'ðŸŽ¬': '🎬',
  'ðŸ‘”': '👔',
  'ðŸ’»': '💻',
  'ðŸ§ª': '🧪',
  'ðŸ“£': '📣',
  'ðŸ“¢': '📢',
  'ðŸ’°': '💰',
  'ðŸ“Š': '📊',
  'ðŸ“‚': '📁',
  'ðŸ“„': '📄',
  'ðŸŒ ': '🌍',
  'ðŸ–¼ï¸ ': '🖼️',
  'ðŸ“¦': '📦',
  'ðŸ’…': '💅',
  'ðŸ ˜': '🐘',
  'ðŸ›¡ï¸ ': '🛡️',
  'ðŸ‡ºðŸ‡¸': '🇺🇸',
  'ðŸ‡ªðŸ‡¸': '🇪🇸',
};

function run(dir) {
  fs.readdirSync(dir).forEach((f) => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) run(p);
    else if (p.endsWith('.ts') || p.endsWith('.html') || p.endsWith('.scss')) {
      let src = fs.readFileSync(p, 'utf8');
      let modified = src;
      for (let key in replacements) {
        modified = modified.split(key).join(replacements[key]);
      }
      if (modified !== src) {
        fs.writeFileSync(p, modified, 'utf8');
        console.log('Fixed emojis in', p);
      }
    }
  });
}
run('./src/app');
