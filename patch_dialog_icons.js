const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'node_modules/app-ui-library/dist/components/dialog-header.js');

if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// Replacement for Minimize Icon
const minimizeOld = 'a("ui-icon",{key:"252c2d565574d8ba01dcd4fddb4400db4fc5abdf",name:"minus",library:this.iconLibrary,size:"1.2em"})';
const minimizeNew = 'a("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{width:"16px",height:"16px"}},a("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))';

// Replacement for Maximize Icon
const maximizeOld = 'a("ui-icon",{key:"ede6b5f1ab03b1b7bb6e922b713ef25a450ce739",name:"maximize-2",library:this.iconLibrary,size:"1.2em"})';
const maximizeNew = 'a("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{width:"16px",height:"16px"}},a("path",{d:"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"}))';

// Replacement for Close Icon
const closeOld = 'a("ui-icon",{key:"ef4d20b05e000c1229e0bb2e3a95dc1bfc4388aa",name:"x",library:this.iconLibrary,size:"1.2em"})';
const closeNew = 'a("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{width:"16px",height:"16px"}},a("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))';

// Replacement for Menu Icon
const menuOld = 'a("ui-icon",{key:"6945c33fd473376287765c1c414b4bdf3d61def8",name:"more-horizontal",library:this.iconLibrary,size:"1.2em"})';
const menuNew = 'a("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{width:"16px",height:"16px"}},a("circle",{cx:"12",cy:"12",r:"1"}),a("circle",{cx:"19",cy:"12",r:"1"}),a("circle",{cx:"5",cy:"12",r:"1"}))';

let count = 0;
if (content.includes(minimizeOld)) { content = content.replace(minimizeOld, minimizeNew); count++; }
if (content.includes(maximizeOld)) { content = content.replace(maximizeOld, maximizeNew); count++; }
if (content.includes(closeOld)) { content = content.replace(closeOld, closeNew); count++; }
if (content.includes(menuOld)) { content = content.replace(menuOld, menuNew); count++; }

if (count > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully patched ${count} icons in dialog-header.js`);
} else {
    console.log('No icons found to patch. They might already be patched or the minified code changed.');
}
