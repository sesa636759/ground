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
let c = 0;

filesTS.forEach((fTS) => {
  let tsContent = fs.readFileSync(fTS, 'utf8');

  const oldTS = tsContent;

  // It looks like:
  //    DemoHeaderComponent,
  //  , DemoSidebarComponent],
  // So there's an extra comma because p1 had a trailing comma and I added another comma.
  tsContent = tsContent.replace(
    /,(\s*),\s*DemoSidebarComponent\]/g,
    ',\n    DemoSidebarComponent\n  ]',
  );

  if (tsContent !== oldTS) {
    fs.writeFileSync(fTS, tsContent, 'utf8');
    c++;
  }
});
console.log('Fixed ' + c + ' files.');
