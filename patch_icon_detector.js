const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'node_modules/app-ui-library/dist/components/icon.js');

if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// The auto-detection logic in icon.js
const autoDetectOld = '"default"===t&&(n.includes("fa-")||n.startsWith("fa ")?t="fontawesome":n.includes("la-")||n.startsWith("la ")?t="icons8":n.includes("bi-")||n.startsWith("bi ")?t="bootstrap":n.includes("ion-")||n.startsWith("ion ")?t="ionicons":n.includes("ri-")||n.startsWith("ri ")?t="remixicon":n.includes("iconoir-")?t="iconoir":(n.includes("material-symbols")||!1===this.isSvgPath(n)&&n.length>0&&/^[a-z_]+$/.test(n))&&(t="google"))';

// Improved auto-detection: if it's default and not a URL/path, prefer "lucide" if the icon is available or as a fallback for simple names
// Actually, let's just make it check if 'window.lucide' exists and use it as a fallback.
// But we're in the 'render' method of a minified file.

// Simplest fix: append :t="lucide" to the end of the chain if nothing else matched and it's a simple name
const autoDetectNew = '"default"===t&&(n.includes("fa-")||n.startsWith("fa ")?t="fontawesome":n.includes("la-")||n.startsWith("la ")?t="icons8":n.includes("bi-")||n.startsWith("bi ")?t="bootstrap":n.includes("ion-")||n.startsWith("ion ")?t="ionicons":n.includes("ri-")||n.startsWith("ri ")?t="remixicon":n.includes("iconoir-")?t="iconoir":(n.includes("material-symbols")||!1===this.isSvgPath(n)&&n.length>0&&/^[a-z_]+$/.test(n))?t="google":t="lucide")';

if (content.includes(autoDetectOld)) {
    content = content.replace(autoDetectOld, autoDetectNew);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully patched icon.js auto-detection to favor Lucide');
} else {
    console.log('No auto-detection logic found in icon.js to patch.');
}
