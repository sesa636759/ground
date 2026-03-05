import{a as W}from"./chunk-TN3HSCQR.js";import{a as B}from"./chunk-QCJOIEXX.js";import{a as L}from"./chunk-HZDGRT7B.js";import{a as I}from"./chunk-4UCJJDSN.js";import{a as z}from"./chunk-NSHZ5OQM.js";import{a as A}from"./chunk-AKJNVTLB.js";import{a as k}from"./chunk-SFGKLQNR.js";import{a as F}from"./chunk-YJ7UAZ3S.js";import{a as T}from"./chunk-RXMBJ7VN.js";import"./chunk-HVQVMUQZ.js";import{c as O,f as P,l as C}from"./chunk-LWLSY5JO.js";import"./chunk-G5OC2RX2.js";import{Dc as h,Fb as i,Gb as M,Ha as a,Kb as g,Lb as c,Mb as m,Rb as x,Sb as E,Ua as v,Xa as _,Ya as w,cb as S,fa as p,ia as y,ib as r,jb as t,kb as n,lb as f,tb as s,yc as D}from"./chunk-SRT4OEMB.js";import"./chunk-RINRXYSM.js";var U=()=>({id:"config",title:"Configuration",icon:"\u2699\uFE0F"}),Y=u=>[u],X=()=>["config"];function G(u,R){if(u&1&&(t(0,"div",31),i(1),n()),u&2){let d=R.$implicit;a(),M(d)}}var N=(()=>{class u{pgConfig={animation:"fade-in",direction:"up",duration:600,delay:0,offset:100,easing:"ease",repeat:!1,once:!0,mirror:!1,threshold:.1,blurAmount:0,perspective:1e3,rotateX:0,rotateY:0,rotateZ:0,scale:1,stagger:0,scrub:!1,textMode:"none"};animationOptions=[{label:"Fade In",value:"fade-in"},{label:"Fade Out",value:"fade-out"},{label:"Slide Up",value:"slide-up"},{label:"Slide Down",value:"slide-down"},{label:"Slide Left",value:"slide-left"},{label:"Slide Right",value:"slide-right"},{label:"Zoom In",value:"zoom-in"},{label:"Zoom Out",value:"zoom-out"},{label:"Bounce",value:"bounce"},{label:"Flip",value:"flip"},{label:"Flip In",value:"flip-in"},{label:"Rotate 3D",value:"rotate-3d"},{label:"Shake",value:"shake"},{label:"Scrub",value:"scrub"},{label:"Text Reveal",value:"text-reveal"}];directionOptions=[{label:"Up",value:"up"},{label:"Down",value:"down"},{label:"Left",value:"left"},{label:"Right",value:"right"}];easingOptions=[{label:"Ease",value:"ease"},{label:"Ease In",value:"ease-in"},{label:"Ease Out",value:"ease-out"},{label:"Ease In Out",value:"ease-in-out"},{label:"Linear",value:"linear"},{label:"Elastic",value:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}];textModeOptions=[{label:"None",value:"none"},{label:"Character",value:"char"},{label:"Word",value:"word"}];eventLog=p([]);generatedCode=p("");ngOnInit(){this.updateConfig()}updateConfig(){let d=`<app-animate-on-scroll
`;d+=`  animation="${this.pgConfig.animation}"
`,this.pgConfig.direction!=="up"&&(d+=`  direction="${this.pgConfig.direction}"
`),d+=`  duration="${this.pgConfig.duration}"
`,this.pgConfig.delay>0&&(d+=`  delay="${this.pgConfig.delay}"
`),this.pgConfig.offset!==100&&(d+=`  offset="${this.pgConfig.offset}"
`),d+=`  easing="${this.pgConfig.easing}"
`,this.pgConfig.threshold!==.1&&(d+=`  threshold="${this.pgConfig.threshold}"
`),this.pgConfig.blurAmount>0&&(d+=`  blur-amount="${this.pgConfig.blurAmount}"
`),this.pgConfig.perspective!==1e3&&(d+=`  perspective="${this.pgConfig.perspective}"
`),this.pgConfig.rotateX!==0&&(d+=`  rotate-x="${this.pgConfig.rotateX}"
`),this.pgConfig.rotateY!==0&&(d+=`  rotate-y="${this.pgConfig.rotateY}"
`),this.pgConfig.rotateZ!==0&&(d+=`  rotate-z="${this.pgConfig.rotateZ}"
`),this.pgConfig.scale!==1&&(d+=`  scale="${this.pgConfig.scale}"
`),this.pgConfig.stagger>0&&(d+=`  stagger="${this.pgConfig.stagger}"
`),this.pgConfig.repeat&&(d+=`  repeat="true"
`),this.pgConfig.once||(d+=`  once="false"
`),this.pgConfig.mirror&&(d+=`  mirror="true"
`),this.pgConfig.scrub&&(d+=`  scrub="true"
`),this.pgConfig.textMode!=="none"&&(d+=`  text-mode="${this.pgConfig.textMode}"
`),d+=`>
  <div>Your content here</div>
</app-animate-on-scroll>`,this.generatedCode.set(d)}onAnimate(d){this.logEvent(`Animation triggered: ${this.pgConfig.animation}`)}logEvent(d){let b=new Date().toLocaleTimeString();this.eventLog.update(e=>[`[${b}] ${d}`,...e.slice(0,9)])}copyCode(){navigator.clipboard.writeText(this.generatedCode())}static \u0275fac=function(b){return new(b||u)};static \u0275cmp=v({type:u,selectors:[["app-animate-on-scroll-playground"]],decls:95,vars:51,consts:[[3,"items","defaultOpen"],["slot","content-config"],[1,"section-title"],[1,"control-grid"],[1,"control-group"],[3,"ngModelChange","ngModel","options"],["type","number","min","100","max","3000","step","100",3,"ngModelChange","ngModel"],["type","number","min","0","max","2000","step","100",3,"ngModelChange","ngModel"],["type","number","min","0","max","500","step","10",3,"ngModelChange","ngModel"],["type","number","min","0","max","1","step","0.1",3,"ngModelChange","ngModel"],["type","number","min","0","max","50","step","1",3,"ngModelChange","ngModel"],["type","number","min","500","max","2000","step","100",3,"ngModelChange","ngModel"],["type","number","min","-180","max","180","step","15",3,"ngModelChange","ngModel"],["type","number","min","-360","max","360","step","15",3,"ngModelChange","ngModel"],["type","number","min","0.1","max","3","step","0.1",3,"ngModelChange","ngModel"],["type","number","min","0","max","500","step","50",3,"ngModelChange","ngModel"],[1,"checkbox-grid"],[1,"checkbox-item"],["label","Repeat",3,"ngModelChange","ngModel"],["label","Once",3,"ngModelChange","ngModel"],["label","Mirror",3,"ngModelChange","ngModel"],["label","Scrub",3,"ngModelChange","ngModel"],["preview","",2,"width","100%","display","flex","justify-content","center","align-items","center"],[1,"event-log-container"],[1,"log-items"],["class","log-item",4,"ngFor","ngForOf"],[1,"preview-stage","scrollable-stage"],[1,"spacer"],[3,"animate"],[1,"animated-content"],["activeLang","html","expanded","true",3,"htmlCode","label"],[1,"log-item"]],template:function(b,e){b&1&&(t(0,"app-playground",0)(1,"div",1)(2,"h4",2),i(3,"Basic Animation"),n(),t(4,"div",3)(5,"div",4)(6,"label"),i(7,"Animation"),n(),t(8,"ui-dropdown",5),m("ngModelChange",function(o){return c(e.pgConfig.animation,o)||(e.pgConfig.animation=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(9,"div",4)(10,"label"),i(11,"Direction"),n(),t(12,"ui-dropdown",5),m("ngModelChange",function(o){return c(e.pgConfig.direction,o)||(e.pgConfig.direction=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(13,"div",4)(14,"label"),i(15,"Duration (ms)"),n(),t(16,"ui-input",6),m("ngModelChange",function(o){return c(e.pgConfig.duration,o)||(e.pgConfig.duration=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(17,"div",4)(18,"label"),i(19,"Delay (ms)"),n(),t(20,"ui-input",7),m("ngModelChange",function(o){return c(e.pgConfig.delay,o)||(e.pgConfig.delay=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(21,"div",4)(22,"label"),i(23,"Offset (px)"),n(),t(24,"ui-input",8),m("ngModelChange",function(o){return c(e.pgConfig.offset,o)||(e.pgConfig.offset=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(25,"div",4)(26,"label"),i(27,"Easing"),n(),t(28,"ui-dropdown",5),m("ngModelChange",function(o){return c(e.pgConfig.easing,o)||(e.pgConfig.easing=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(29,"div",4)(30,"label"),i(31,"Threshold"),n(),t(32,"ui-input",9),m("ngModelChange",function(o){return c(e.pgConfig.threshold,o)||(e.pgConfig.threshold=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()()(),t(33,"h4",2),i(34,"3D & Effects"),n(),t(35,"div",3)(36,"div",4)(37,"label"),i(38,"Blur Amount"),n(),t(39,"ui-input",10),m("ngModelChange",function(o){return c(e.pgConfig.blurAmount,o)||(e.pgConfig.blurAmount=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(40,"div",4)(41,"label"),i(42,"Perspective"),n(),t(43,"ui-input",11),m("ngModelChange",function(o){return c(e.pgConfig.perspective,o)||(e.pgConfig.perspective=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(44,"div",4)(45,"label"),i(46,"Rotate X (deg)"),n(),t(47,"ui-input",12),m("ngModelChange",function(o){return c(e.pgConfig.rotateX,o)||(e.pgConfig.rotateX=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(48,"div",4)(49,"label"),i(50,"Rotate Y (deg)"),n(),t(51,"ui-input",12),m("ngModelChange",function(o){return c(e.pgConfig.rotateY,o)||(e.pgConfig.rotateY=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(52,"div",4)(53,"label"),i(54,"Rotate Z (deg)"),n(),t(55,"ui-input",13),m("ngModelChange",function(o){return c(e.pgConfig.rotateZ,o)||(e.pgConfig.rotateZ=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(56,"div",4)(57,"label"),i(58,"Scale"),n(),t(59,"ui-input",14),m("ngModelChange",function(o){return c(e.pgConfig.scale,o)||(e.pgConfig.scale=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(60,"div",4)(61,"label"),i(62,"Stagger (ms)"),n(),t(63,"ui-input",15),m("ngModelChange",function(o){return c(e.pgConfig.stagger,o)||(e.pgConfig.stagger=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(64,"div",4)(65,"label"),i(66,"Text Mode"),n(),t(67,"ui-dropdown",5),m("ngModelChange",function(o){return c(e.pgConfig.textMode,o)||(e.pgConfig.textMode=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()()(),t(68,"h4",2),i(69,"Options"),n(),t(70,"div",16)(71,"label",17)(72,"ui-checkbox",18),m("ngModelChange",function(o){return c(e.pgConfig.repeat,o)||(e.pgConfig.repeat=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(73,"label",17)(74,"ui-checkbox",19),m("ngModelChange",function(o){return c(e.pgConfig.once,o)||(e.pgConfig.once=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(75,"label",17)(76,"ui-checkbox",20),m("ngModelChange",function(o){return c(e.pgConfig.mirror,o)||(e.pgConfig.mirror=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()(),t(77,"label",17)(78,"ui-checkbox",21),m("ngModelChange",function(o){return c(e.pgConfig.scrub,o)||(e.pgConfig.scrub=o),o}),s("ngModelChange",function(){return e.updateConfig()}),n()()()(),t(79,"div",22)(80,"div",23)(81,"strong"),i(82,"Event Log"),n(),t(83,"div",24),w(84,G,2,1,"div",25),n()(),t(85,"div",26),f(86,"div",27),t(87,"app-animate-on-scroll",28),s("animate",function(o){return e.onAnimate(o)}),t(88,"div",29)(89,"h3"),i(90,"Scroll to Animate"),n(),t(91,"p"),i(92,"This content will animate when scrolled into view"),n()()(),f(93,"div",27),n(),f(94,"ui-code-preview",30),n()()),b&2&&(r("items",E(48,Y,x(47,U)))("defaultOpen",x(50,X)),a(8),g("ngModel",e.pgConfig.animation),r("options",e.animationOptions),a(4),g("ngModel",e.pgConfig.direction),r("options",e.directionOptions),a(4),g("ngModel",e.pgConfig.duration),a(4),g("ngModel",e.pgConfig.delay),a(4),g("ngModel",e.pgConfig.offset),a(4),g("ngModel",e.pgConfig.easing),r("options",e.easingOptions),a(4),g("ngModel",e.pgConfig.threshold),a(7),g("ngModel",e.pgConfig.blurAmount),a(4),g("ngModel",e.pgConfig.perspective),a(4),g("ngModel",e.pgConfig.rotateX),a(4),g("ngModel",e.pgConfig.rotateY),a(4),g("ngModel",e.pgConfig.rotateZ),a(4),g("ngModel",e.pgConfig.scale),a(4),g("ngModel",e.pgConfig.stagger),a(4),g("ngModel",e.pgConfig.textMode),r("options",e.textModeOptions),a(5),g("ngModel",e.pgConfig.repeat),a(2),g("ngModel",e.pgConfig.once),a(2),g("ngModel",e.pgConfig.mirror),a(2),g("ngModel",e.pgConfig.scrub),a(6),r("ngForOf",e.eventLog()),a(3),S("animation",e.pgConfig.animation)("direction",e.pgConfig.direction)("duration",e.pgConfig.duration)("delay",e.pgConfig.delay)("offset",e.pgConfig.offset)("easing",e.pgConfig.easing)("threshold",e.pgConfig.threshold)("blur-amount",e.pgConfig.blurAmount>0?e.pgConfig.blurAmount:null)("perspective",e.pgConfig.perspective!==1e3?e.pgConfig.perspective:null)("rotate-x",e.pgConfig.rotateX!==0?e.pgConfig.rotateX:null)("rotate-y",e.pgConfig.rotateY!==0?e.pgConfig.rotateY:null)("rotate-z",e.pgConfig.rotateZ!==0?e.pgConfig.rotateZ:null)("scale",e.pgConfig.scale!==1?e.pgConfig.scale:null)("stagger",e.pgConfig.stagger>0?e.pgConfig.stagger:null)("text-mode",e.pgConfig.textMode!=="none"?e.pgConfig.textMode:null)("repeat",e.pgConfig.repeat)("once",e.pgConfig.once)("mirror",e.pgConfig.mirror)("scrub",e.pgConfig.scrub),a(7),r("htmlCode",e.generatedCode())("label","Generated Code"))},dependencies:[k,h,D,C,O,P,A,L],styles:[`.playground-layout{display:flex;gap:var(--space-2xl);height:100%}@media(max-width:1200px){.playground-layout{flex-direction:column}}.playground-layout.layout-col{flex-direction:column}.playground-controls{flex:1;background:var(--surface-elevated);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-controls:hover{box-shadow:var(--shadow-md);border-color:var(--border-strong)}.playground-controls .control-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-lg);margin-bottom:var(--space-xl)}.playground-controls .control-group{display:flex;flex-direction:column;gap:var(--space-xs)}.playground-controls .control-group label{font-size:.875rem;font-weight:600;color:var(--text-secondary);letter-spacing:-.01em}.playground-controls .control-group select,.playground-controls .control-group input[type=text],.playground-controls .control-group input[type=number],.playground-controls .control-group ui-input,.playground-controls .control-group ui-dropdown{width:100%;display:block}.playground-controls .control-group ui-input{min-height:40px;box-sizing:border-box}.playground-controls .control-group select,.playground-controls .control-group input[type=text],.playground-controls .control-group input[type=number]{padding:var(--space-sm) var(--space-md);background:var(--surface-1);border:1px solid var(--border-color);border-radius:var(--radius-md);color:var(--text-primary);font-size:.875rem;transition:all var(--transition-fast)}.playground-controls .control-group select:focus,.playground-controls .control-group input[type=text]:focus,.playground-controls .control-group input[type=number]:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-glow)}.playground-controls .checkbox-grid,.playground-controls .checkbox-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:var(--space-md)}.playground-controls .checkbox-grid .checkbox-item,.playground-controls .checkbox-group .checkbox-item{display:flex;align-items:center;gap:var(--space-sm);font-size:.9rem;cursor:pointer;color:var(--text-primary)}.playground-controls .checkbox-grid .checkbox-item ui-checkbox,.playground-controls .checkbox-group .checkbox-item ui-checkbox{display:inline-flex}.playground-preview{flex:1.5;display:flex;flex-direction:column;gap:var(--space-xl);min-width:0;min-height:300px;background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:var(--space-xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-preview .event-log,.playground-preview .event-log-container{background:var(--surface-2);padding:var(--space-md) var(--space-lg);border-radius:var(--radius-lg);font-family:var(--font-mono);font-size:.85rem;border-left:4px solid var(--primary);color:var(--text-primary);box-shadow:var(--shadow-inner);max-height:150px;overflow-y:auto}.playground-preview .event-log strong,.playground-preview .event-log-container strong{display:block;margin-bottom:var(--space-xs);color:var(--text-secondary);font-size:.75rem;text-transform:uppercase;letter-spacing:.05em}.playground-preview .event-log .log-items,.playground-preview .event-log-container .log-items{max-height:100px;overflow-y:auto}.playground-preview .event-log .log-item,.playground-preview .event-log-container .log-item{padding:.25rem 0;border-bottom:1px solid var(--border-light)}.playground-preview .event-log .log-item:last-child,.playground-preview .event-log-container .log-item:last-child{border-bottom:none}.playground-preview .preview-stage{min-height:300px;background:var(--surface-elevated);border-radius:var(--radius-2xl);border:2px dashed var(--border-color);display:flex;justify-content:center;align-items:center;padding:var(--space-2xl);position:relative;box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-preview .preview-stage:hover{border-color:var(--border-strong);box-shadow:var(--shadow-md)}.playground-preview ui-code-preview{width:100%;border-radius:var(--radius-xl);overflow:hidden;border:1px solid var(--border-color);box-shadow:var(--shadow-md)}.custom-slot-content{padding:var(--space-lg);display:flex;flex-direction:column;gap:var(--space-md);min-width:250px}.custom-slot-content p{margin:0;font-weight:700;font-size:.95rem}.custom-slot-content ui-input{width:100%}.custom-slot-content .slot-actions{display:flex;gap:var(--space-sm);margin-top:var(--space-sm)}.custom-slot-content .slot-actions button,.custom-slot-content .slot-actions ui-button{flex:1}.custom-slot-content .slot-actions .btn-confirm{background:var(--primary);color:#fff;border:none}.custom-slot-content .slot-actions .btn-cancel{background:var(--surface-2);border:1px solid var(--border-color);color:var(--text-primary)}
`],encapsulation:2})}return u})();var fe=(()=>{class u extends W{exampleVariants=[{id:"fade-in-basic",title:"Fade In",icon:"sunrise",iconLibrary:"lucide"},{id:"fade-out-basic",title:"Fade Out",icon:"sunset",iconLibrary:"lucide"},{id:"slide-up",title:"Slide Up",icon:"arrow-up",iconLibrary:"lucide"},{id:"slide-down",title:"Slide Down",icon:"arrow-down",iconLibrary:"lucide"},{id:"slide-left",title:"Slide Left",icon:"arrow-left",iconLibrary:"lucide"},{id:"slide-right",title:"Slide Right",icon:"arrow-right",iconLibrary:"lucide"},{id:"zoom-in",title:"Zoom In",icon:"zoom-in",iconLibrary:"lucide"},{id:"zoom-out",title:"Zoom Out",icon:"zoom-out",iconLibrary:"lucide"},{id:"bounce",title:"Bounce",icon:"zap",iconLibrary:"lucide"},{id:"flip",title:"Flip",icon:"refresh-cw",iconLibrary:"lucide"},{id:"blur-entrance",title:"Blur Entrance",icon:"sparkles",iconLibrary:"lucide"},{id:"glassmorphic-blur",title:"Glassmorphic Blur",icon:"clapperboard",iconLibrary:"lucide"},{id:"elastic-easing",title:"Elastic Easing",icon:"activity",iconLibrary:"lucide"},{id:"flip-in-3d",title:"Flip In 3D",icon:"dice-3",iconLibrary:"lucide"},{id:"rotate-3d",title:"Rotate 3D",icon:"rotate-3d",iconLibrary:"lucide"},{id:"perspective-depth",title:"Perspective Depth",icon:"mountain",iconLibrary:"lucide"},{id:"stagger-children",title:"Stagger Children",icon:"music",iconLibrary:"lucide"},{id:"stagger-fast",title:"Stagger Fast",icon:"zap",iconLibrary:"lucide"},{id:"stagger-slow",title:"Stagger Slow",icon:"turtle",iconLibrary:"lucide"},{id:"scroll-trigger",title:"Scroll Trigger",icon:"target",iconLibrary:"lucide"},{id:"scroll-scrubbing",title:"Scroll Scrubbing",icon:"sliders",iconLibrary:"lucide"},{id:"scrub-rotate",title:"Scrub Rotate",icon:"refresh-cw",iconLibrary:"lucide"},{id:"scrub-scale",title:"Scrub Scale",icon:"ruler",iconLibrary:"lucide"},{id:"text-char",title:"Text Character",icon:"case-sensitive",iconLibrary:"lucide"},{id:"text-word",title:"Text Word",icon:"file-text",iconLibrary:"lucide"},{id:"text-stagger",title:"Text Stagger",icon:"pen-line",iconLibrary:"lucide"},{id:"shake-animation",title:"Shake",icon:"waves",iconLibrary:"lucide"},{id:"repeat-animation",title:"Repeat Animation",icon:"repeat",iconLibrary:"lucide"},{id:"mirror-effect",title:"Mirror Effect",icon:"flip-horizontal",iconLibrary:"lucide"},{id:"custom-threshold",title:"Custom Threshold",icon:"bar-chart-2",iconLibrary:"lucide"},{id:"delay-timing",title:"Delay Timing",icon:"timer",iconLibrary:"lucide"},{id:"duration-control",title:"Duration Control",icon:"hourglass",iconLibrary:"lucide"},{id:"combined-effects",title:"Combined Effects",icon:"palette",iconLibrary:"lucide"}];anchorLinks=JSON.stringify(this.exampleVariants.map(d=>({id:d.id,label:d.title,target:d.id,icon:d.icon})));fadeInBasicCode=p(`<app-animate-on-scroll
  animation="fade-in"
  duration="600"
>
  <div class="content-box">
    <h3>Fade In</h3>
    <p>Smooth fade entrance</p>
  </div>
</app-animate-on-scroll>`);fadeOutBasicCode=p(`<app-animate-on-scroll
  animation="fade-out"
  duration="600"
>
  <div class="content-box">
    <h3>Fade Out</h3>
    <p>Fade out on scroll</p>
  </div>
</app-animate-on-scroll>`);slideUpCode=p(`<app-animate-on-scroll
  animation="slide-up"
  duration="800"
  offset="100"
>
  <div class="content-box">
    <h3>Slide Up</h3>
    <p>Slide up from bottom</p>
  </div>
</app-animate-on-scroll>`);slideDownCode=p(`<app-animate-on-scroll
  animation="slide-down"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Down</h3>
    <p>Slide down from top</p>
  </div>
</app-animate-on-scroll>`);slideLeftCode=p(`<app-animate-on-scroll
  animation="slide-left"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Left</h3>
    <p>Slide from right to left</p>
  </div>
</app-animate-on-scroll>`);slideRightCode=p(`<app-animate-on-scroll
  animation="slide-right"
  duration="800"
>
  <div class="content-box">
    <h3>Slide Right</h3>
    <p>Slide from left to right</p>
  </div>
</app-animate-on-scroll>`);zoomInCode=p(`<app-animate-on-scroll
  animation="zoom-in"
  duration="700"
  scale="0.5"
>
  <div class="content-box">
    <h3>Zoom In</h3>
    <p>Scale up entrance</p>
  </div>
</app-animate-on-scroll>`);zoomOutCode=p(`<app-animate-on-scroll
  animation="zoom-out"
  duration="700"
  scale="1.5"
>
  <div class="content-box">
    <h3>Zoom Out</h3>
    <p>Scale down entrance</p>
  </div>
</app-animate-on-scroll>`);bounceCode=p(`<app-animate-on-scroll
  animation="bounce"
  duration="1000"
>
  <div class="content-box">
    <h3>Bounce</h3>
    <p>Bouncy entrance effect</p>
  </div>
</app-animate-on-scroll>`);flipCode=p(`<app-animate-on-scroll
  animation="flip"
  duration="900"
>
  <div class="content-box">
    <h3>Flip</h3>
    <p>Flip animation</p>
  </div>
</app-animate-on-scroll>`);blurEntranceCode=p(`<app-animate-on-scroll
  animation="fade-in"
  blur-amount="10"
  duration="1000"
  easing="ease-out"
>
  <div class="glass-card">
    <h3>Blur Entrance</h3>
    <p>Starts blurry, becomes sharp</p>
  </div>
</app-animate-on-scroll>`);glassmorphicBlurCode=p(`<app-animate-on-scroll
  animation="fade-in"
  blur-amount="20"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  duration="1200"
>
  <div class="glass-card premium">
    <h3>Premium Content</h3>
    <p>Glassmorphic blur with elastic easing</p>
  </div>
</app-animate-on-scroll>`);elasticEasingCode=p(`<app-animate-on-scroll
  animation="slide-up"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  duration="1000"
>
  <div class="content-box">
    <h3>Elastic Easing</h3>
    <p>Bouncy, playful animation curve</p>
  </div>
</app-animate-on-scroll>`);flipIn3dCode=p(`<app-animate-on-scroll
  animation="flip-in"
  perspective="1000"
  rotate-x="90"
  duration="800"
>
  <div class="card-3d">
    <h3>Flip In 3D</h3>
    <p>Rotates along X-axis with perspective</p>
  </div>
</app-animate-on-scroll>`);rotate3dCode=p(`<app-animate-on-scroll
  animation="rotate-3d"
  perspective="1500"
  rotate-y="180"
  duration="1000"
>
  <div class="card-3d">
    <h3>Rotate 3D</h3>
    <p>Complex 3D rotation from center</p>
  </div>
</app-animate-on-scroll>`);perspectiveDepthCode=p(`<app-animate-on-scroll
  animation="zoom-in"
  perspective="2000"
  rotate-x="45"
  rotate-y="45"
  duration="1200"
>
  <div class="card-3d">
    <h3>Perspective Depth</h3>
    <p>Deep 3D perspective with multiple axes</p>
  </div>
</app-animate-on-scroll>`);staggerChildrenCode=p(`<app-animate-on-scroll
  animation="fade-in"
  stagger="100"
>
  <div class="stagger-item">Analytics</div>
  <div class="stagger-item">Security</div>
  <div class="stagger-item">Speed</div>
  <div class="stagger-item">Cloud</div>
</app-animate-on-scroll>`);staggerFastCode=p(`<app-animate-on-scroll
  animation="slide-up"
  stagger="50"
>
  <div class="stagger-item">Item 1</div>
  <div class="stagger-item">Item 2</div>
  <div class="stagger-item">Item 3</div>
  <div class="stagger-item">Item 4</div>
  <div class="stagger-item">Item 5</div>
</app-animate-on-scroll>`);staggerSlowCode=p(`<app-animate-on-scroll
  animation="fade-in"
  stagger="200"
>
  <div class="stagger-item">Step 1</div>
  <div class="stagger-item">Step 2</div>
  <div class="stagger-item">Step 3</div>
</app-animate-on-scroll>`);scrollTriggerCode=p(`<!-- Element to animate -->
<app-animate-on-scroll
  animation="shake"
  trigger="#trigger-zone"
>
  <div class="sidebar">
    I shake when you scroll to the trigger!
  </div>
</app-animate-on-scroll>

<!-- Trigger element -->
<div id="trigger-zone" class="trigger-area">
  Trigger Zone - Scroll here
</div>`);scrollScrubbingCode=p(`<app-animate-on-scroll
  animation="scrub"
  scrub="true"
  rotate-z="360"
  scale="1.5"
>
  <div class="scrub-element">
    Scroll to rotate and zoom!
  </div>
</app-animate-on-scroll>`);scrubRotateCode=p(`<app-animate-on-scroll
  animation="scrub"
  scrub="true"
  rotate-z="720"
>
  <div class="scrub-element">
    Double rotation on scroll
  </div>
</app-animate-on-scroll>`);scrubScaleCode=p(`<app-animate-on-scroll
  animation="scrub"
  scrub="true"
  scale="2"
>
  <div class="scrub-element">
    Scale 2x on scroll
  </div>
</app-animate-on-scroll>`);textCharCode=p(`<app-animate-on-scroll
  animation="text-reveal"
  text-mode="char"
  stagger="50"
>
  <h2>Start Building</h2>
</app-animate-on-scroll>`);textWordCode=p(`<app-animate-on-scroll
  animation="text-reveal"
  text-mode="word"
  stagger="100"
>
  <p>Create amazing scroll experiences today</p>
</app-animate-on-scroll>`);textStaggerCode=p(`<app-animate-on-scroll
  animation="text-reveal"
  text-mode="char"
  stagger="30"
  duration="50"
>
  <h1>Fast Character Reveal</h1>
</app-animate-on-scroll>`);shakeAnimationCode=p(`<app-animate-on-scroll
  animation="shake"
  duration="500"
>
  <div class="content-box">
    <h3>Shake</h3>
    <p>Attention-grabbing shake effect</p>
  </div>
</app-animate-on-scroll>`);repeatAnimationCode=p(`<app-animate-on-scroll
  animation="bounce"
  repeat="true"
  duration="1000"
>
  <div class="content-box">
    <h3>Repeat</h3>
    <p>Animation repeats on every scroll</p>
  </div>
</app-animate-on-scroll>`);mirrorEffectCode=p(`<app-animate-on-scroll
  animation="slide-up"
  mirror="true"
  duration="800"
>
  <div class="content-box">
    <h3>Mirror</h3>
    <p>Reverses when scrolling up</p>
  </div>
</app-animate-on-scroll>`);customThresholdCode=p(`<app-animate-on-scroll
  animation="fade-in"
  threshold="0.5"
  duration="600"
>
  <div class="content-box">
    <h3>Custom Threshold</h3>
    <p>Triggers at 50% visibility</p>
  </div>
</app-animate-on-scroll>`);delayTimingCode=p(`<app-animate-on-scroll
  animation="fade-in"
  delay="500"
  duration="800"
>
  <div class="content-box">
    <h3>Delayed</h3>
    <p>500ms delay before animation</p>
  </div>
</app-animate-on-scroll>`);durationControlCode=p(`<app-animate-on-scroll
  animation="slide-up"
  duration="2000"
>
  <div class="content-box">
    <h3>Slow Motion</h3>
    <p>2 second duration for dramatic effect</p>
  </div>
</app-animate-on-scroll>`);combinedEffectsCode=p(`<app-animate-on-scroll
  animation="fade-in"
  blur-amount="15"
  perspective="1000"
  rotate-x="30"
  scale="0.8"
  duration="1200"
  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
>
  <div class="card-3d premium">
    <h3>Combined Effects</h3>
    <p>Blur + 3D + Scale + Elastic Easing</p>
  </div>
</app-animate-on-scroll>`);static \u0275fac=(()=>{let d;return function(e){return(d||(d=y(u)))(e||u)}})();static \u0275cmp=v({type:u,selectors:[["app-set-animate-on-scroll-demo"]],features:[_],decls:335,vars:34,consts:[[1,"demo-container"],["icon","\u2728","title","Animate on Scroll","description","Add stunning, hardware-accelerated scroll animations to any element with a single directive or component wrapper."],["slot","playground"],["slot","examples"],[1,"demo-split-layout"],[3,"links"],[1,"examples-content","scroll-spy-container"],["id","fade-in-basic","title","\u{1F305} Fade In","description","Smooth fade entrance with configurable duration.",3,"code"],[1,"demo-grid","col-1"],[1,"scrollable-preview",2,"min-height","600px","padding-top","300px"],["animation","fade-in","duration","600"],[1,"content-box",2,"padding","30px","background","var(--bg-secondary)","border-radius","12px","text-align","center"],[2,"margin","0 0 10px 0"],[2,"margin","0","opacity","0.8"],["id","fade-out-basic","title","\u{1F307} Fade Out","description","Fade out effect triggered on scroll.",3,"code"],["animation","fade-out","duration","600"],["id","slide-up","title","\u2B06\uFE0F Slide Up","description","Element slides up from bottom with smooth motion.",3,"code"],["animation","slide-up","duration","800","offset","100"],["id","slide-down","title","\u2B07\uFE0F Slide Down","description","Element slides down from top.",3,"code"],["animation","slide-down","duration","800"],["id","slide-left","title","\u2B05\uFE0F Slide Left","description","Element slides from right to left.",3,"code"],["animation","slide-left","duration","800"],["id","slide-right","title","\u27A1\uFE0F Slide Right","description","Element slides from left to right.",3,"code"],["animation","slide-right","duration","800"],["id","zoom-in","title","\u{1F50D} Zoom In","description","Scale up entrance effect from 50% to full size.",3,"code"],["animation","zoom-in","duration","700","scale","0.5"],["id","zoom-out","title","\u{1F50E} Zoom Out","description","Scale down entrance effect from 150% to normal size.",3,"code"],["animation","zoom-out","duration","700","scale","1.5"],["id","bounce","title","\u26A1 Bounce","description","Bouncy, energetic entrance effect.",3,"code"],["animation","bounce","duration","1000"],["id","flip","title","\u{1F504} Flip","description","Classic flip animation effect.",3,"code"],["animation","flip","duration","900"],["id","blur-entrance","title","\u{1F32B}\uFE0F Blur Entrance","description","Starts blurry and becomes sharp for premium feel.",3,"code"],["animation","fade-in","blur-amount","10","duration","1000","easing","ease-out"],[1,"content-box",2,"padding","30px","background",`linear-gradient(
                    135deg,
                    rgba(99, 102, 241, 0.1),
                    rgba(139, 92, 246, 0.1)
                  )`,"backdrop-filter","blur(10px)","border-radius","12px","border","1px solid rgba(255, 255, 255, 0.2)","text-align","center"],["id","glassmorphic-blur","title","\u{1F3AC} Glassmorphic Blur","description","20px Gaussian blur with elastic easing for native-app feel.",3,"code"],["animation","fade-in","blur-amount","20","easing","cubic-bezier(0.68, -0.55, 0.265, 1.55)","duration","1200"],[1,"content-box",2,"padding","40px","background",`linear-gradient(
                    135deg,
                    rgba(99, 102, 241, 0.15),
                    rgba(139, 92, 246, 0.15)
                  )`,"backdrop-filter","blur(10px)","border-radius","16px","border","1px solid rgba(255, 255, 255, 0.3)","text-align","center"],[2,"margin","0","opacity","0.9"],["id","elastic-easing","title","\u{1F3AA} Elastic Easing","description","Bouncy, playful animation curve using cubic-bezier.",3,"code"],["animation","slide-up","easing","cubic-bezier(0.68, -0.55, 0.265, 1.55)","duration","1000"],["id","flip-in-3d","title","\u{1F3B2} Flip In 3D","description","Hardware-accelerated 3D flip along X-axis with perspective.",3,"code"],[1,"scrollable-preview",2,"min-height","700px","padding-top","350px"],["animation","flip-in","perspective","1000","rotate-x","90","duration","800"],[1,"content-box",2,"padding","40px","background","linear-gradient(135deg, #667eea 0%, #764ba2 100%)","border-radius","12px","color","white","text-align","center"],[2,"margin","0 0 10px 0","color","white"],["id","rotate-3d","title","\u{1F300} Rotate 3D","description","Complex 3D rotation from center point along Y-axis.",3,"code"],["animation","rotate-3d","perspective","1500","rotate-y","180","duration","1000"],[1,"content-box",2,"padding","40px","background","linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","border-radius","12px","color","white","text-align","center"],["id","perspective-depth","title","\u{1F3D4}\uFE0F Perspective Depth","description","Deep 3D perspective with multiple rotation axes.",3,"code"],["animation","zoom-in","perspective","2000","rotate-x","45","rotate-y","45","duration","1200"],[1,"content-box",2,"padding","40px","background","linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","border-radius","12px","color","white","text-align","center"],["id","stagger-children","title","\u{1F3B5} Stagger Children","description","Sequentially animate child elements with 100ms delay.",3,"code"],[1,"scrollable-preview",2,"min-height","800px","padding-top","400px"],["animation","fade-in","stagger","100"],[2,"padding","20px","margin","10px 0","background","var(--bg-secondary)","border-radius","8px"],[2,"margin","5px 0 0 0","opacity","0.8"],["id","stagger-fast","title","\u26A1 Stagger Fast","description","Quick sequential animation with 50ms stagger delay.",3,"code"],["animation","slide-up","stagger","50"],[2,"padding","15px","margin","8px 0","background","var(--bg-secondary)","border-radius","8px","text-align","center"],["id","stagger-slow","title","\u{1F40C} Stagger Slow","description","Deliberate sequential animation with 200ms stagger.",3,"code"],["animation","fade-in","stagger","200"],[2,"padding","20px","margin","12px 0","background","var(--bg-secondary)","border-radius","8px","text-align","center"],["id","scroll-trigger","title","\u{1F3AF} Scroll Trigger","description","Animate one element based on another element's scroll position.",3,"code"],[1,"scrollable-preview",2,"min-height","1200px"],[2,"display","flex","gap","20px"],[2,"flex","0 0 200px","position","sticky","top","20px","height","fit-content"],["animation","shake","trigger","#trigger-zone"],[2,"padding","20px","background","var(--bg-secondary)","border-radius","8px","text-align","center"],[2,"margin","10px 0 0 0","font-size","0.9em"],[2,"flex","1"],[2,"padding","40px","background","var(--bg-tertiary)","border-radius","8px","margin-bottom","20px"],["id","trigger-zone",2,"padding","60px","background","linear-gradient(135deg, #ffa500, #ff6347)","border-radius","8px","color","white","text-align","center","margin","400px 0"],[2,"margin","0"],[2,"padding","40px","background","var(--bg-tertiary)","border-radius","8px","margin-top","20px"],["id","scroll-scrubbing","title","\u{1F39B}\uFE0F Scroll Scrubbing","description","Directly bind animation progress to scrollbar position.",3,"code"],[1,"scrollable-preview",2,"min-height","1500px","padding-top","600px","padding-bottom","600px"],[2,"text-align","center"],["animation","scrub","scrub","true","rotate-z","360","scale","1.5"],[2,"width","150px","height","150px","margin","40px auto","background","linear-gradient(135deg, #667eea, #764ba2)","border-radius","20px","display","flex","align-items","center","justify-content","center","color","white","font-weight","bold"],["id","scrub-rotate","title","\u{1F504} Scrub Rotate","description","Double rotation (720 degrees) tied to scroll progress.",3,"code"],["animation","scrub","scrub","true","rotate-z","720"],[2,"width","120px","height","120px","margin","40px auto","background","linear-gradient(135deg, #f093fb, #f5576c)","border-radius","16px","display","flex","align-items","center","justify-content","center","color","white","font-weight","bold","font-size","0.9em"],["id","scrub-scale","title","\u{1F4CF} Scrub Scale","description","Scale to 2x size based on scroll position.",3,"code"],["animation","scrub","scrub","true","scale","2"],[2,"width","100px","height","100px","margin","60px auto","background","linear-gradient(135deg, #4facfe, #00f2fe)","border-radius","12px","display","flex","align-items","center","justify-content","center","color","white","font-weight","bold","font-size","0.85em"],["id","text-char","title","\u{1F524} Text Character","description","Reveal text character-by-character with 50ms stagger.",3,"code"],["animation","text-reveal","text-mode","char","stagger","50"],[2,"text-align","center","font-size","2.5em","margin","0"],["id","text-word","title","\u{1F4DD} Text Word","description","Reveal text word-by-word with 100ms stagger.",3,"code"],["animation","text-reveal","text-mode","word","stagger","100"],[2,"text-align","center","font-size","1.5em","margin","0"],["id","text-stagger","title","\u270D\uFE0F Text Stagger","description","Fast character reveal with 30ms stagger for dramatic effect.",3,"code"],["animation","text-reveal","text-mode","char","stagger","30","duration","50"],[2,"text-align","center","font-size","3em","margin","0"],["id","shake-animation","title","\u{1F4F3} Shake","description","Attention-grabbing shake effect for notifications or alerts.",3,"code"],["animation","shake","duration","500"],["id","repeat-animation","title","\u{1F501} Repeat Animation","description","Animation repeats every time element enters viewport.",3,"code"],["animation","bounce","repeat","true","duration","1000"],["id","mirror-effect","title","\u{1FA9E} Mirror Effect","description","Animation reverses when scrolling up.",3,"code"],["animation","slide-up","mirror","true","duration","800"],["id","custom-threshold","title","\u{1F4CA} Custom Threshold","description","Trigger animation at 50% visibility instead of default.",3,"code"],["animation","fade-in","threshold","0.5","duration","600"],["id","delay-timing","title","\u23F1\uFE0F Delay Timing","description","500ms delay before animation starts.",3,"code"],["animation","fade-in","delay","500","duration","800"],["id","duration-control","title","\u23F3 Duration Control","description","Extended 2 second duration for dramatic slow-motion effect.",3,"code"],["animation","slide-up","duration","2000"],["id","combined-effects","title","\u{1F3A8} Combined Effects","description","Combines blur, 3D perspective, rotation, scale, and elastic easing.",3,"code"],["animation","fade-in","blur-amount","15","perspective","1000","rotate-x","30","scale","0.8","duration","1200","easing","cubic-bezier(0.68, -0.55, 0.265, 1.55)"],[1,"content-box",2,"padding","40px","background",`linear-gradient(
                    135deg,
                    rgba(99, 102, 241, 0.2),
                    rgba(139, 92, 246, 0.2)
                  )`,"backdrop-filter","blur(10px)","border-radius","16px","border","1px solid rgba(255, 255, 255, 0.3)","text-align","center"],["slot","docs"],["componentId","animate-on-scroll"]],template:function(b,e){b&1&&(t(0,"div",0),f(1,"app-demo-header",1),t(2,"demo-tabs")(3,"div",2),f(4,"app-animate-on-scroll-playground"),n(),t(5,"div",3)(6,"div",4),f(7,"app-demo-sidebar",5),t(8,"div",6)(9,"app-example-section",7)(10,"div",8)(11,"preview-box",9)(12,"app-animate-on-scroll",10)(13,"div",11)(14,"h3",12),i(15,"Fade In"),n(),t(16,"p",13),i(17,"Smooth fade entrance"),n()()()()()(),t(18,"app-example-section",14)(19,"div",8)(20,"preview-box",9)(21,"app-animate-on-scroll",15)(22,"div",11)(23,"h3",12),i(24,"Fade Out"),n(),t(25,"p",13),i(26,"Fade out on scroll"),n()()()()()(),t(27,"app-example-section",16)(28,"div",8)(29,"preview-box",9)(30,"app-animate-on-scroll",17)(31,"div",11)(32,"h3",12),i(33,"Slide Up"),n(),t(34,"p",13),i(35,"Slide up from bottom"),n()()()()()(),t(36,"app-example-section",18)(37,"div",8)(38,"preview-box",9)(39,"app-animate-on-scroll",19)(40,"div",11)(41,"h3",12),i(42,"Slide Down"),n(),t(43,"p",13),i(44,"Slide down from top"),n()()()()()(),t(45,"app-example-section",20)(46,"div",8)(47,"preview-box",9)(48,"app-animate-on-scroll",21)(49,"div",11)(50,"h3",12),i(51,"Slide Left"),n(),t(52,"p",13),i(53,"Slide from right to left"),n()()()()()(),t(54,"app-example-section",22)(55,"div",8)(56,"preview-box",9)(57,"app-animate-on-scroll",23)(58,"div",11)(59,"h3",12),i(60,"Slide Right"),n(),t(61,"p",13),i(62,"Slide from left to right"),n()()()()()(),t(63,"app-example-section",24)(64,"div",8)(65,"preview-box",9)(66,"app-animate-on-scroll",25)(67,"div",11)(68,"h3",12),i(69,"Zoom In"),n(),t(70,"p",13),i(71,"Scale up entrance"),n()()()()()(),t(72,"app-example-section",26)(73,"div",8)(74,"preview-box",9)(75,"app-animate-on-scroll",27)(76,"div",11)(77,"h3",12),i(78,"Zoom Out"),n(),t(79,"p",13),i(80,"Scale down entrance"),n()()()()()(),t(81,"app-example-section",28)(82,"div",8)(83,"preview-box",9)(84,"app-animate-on-scroll",29)(85,"div",11)(86,"h3",12),i(87,"Bounce"),n(),t(88,"p",13),i(89,"Bouncy entrance effect"),n()()()()()(),t(90,"app-example-section",30)(91,"div",8)(92,"preview-box",9)(93,"app-animate-on-scroll",31)(94,"div",11)(95,"h3",12),i(96,"Flip"),n(),t(97,"p",13),i(98,"Flip animation"),n()()()()()(),t(99,"app-example-section",32)(100,"div",8)(101,"preview-box",9)(102,"app-animate-on-scroll",33)(103,"div",34)(104,"h3",12),i(105,"Blur Entrance"),n(),t(106,"p",13),i(107,"Starts blurry, becomes sharp"),n()()()()()(),t(108,"app-example-section",35)(109,"div",8)(110,"preview-box",9)(111,"app-animate-on-scroll",36)(112,"div",37)(113,"h3",12),i(114,"Premium Content"),n(),t(115,"p",38),i(116,"Glassmorphic blur with elastic easing"),n()()()()()(),t(117,"app-example-section",39)(118,"div",8)(119,"preview-box",9)(120,"app-animate-on-scroll",40)(121,"div",11)(122,"h3",12),i(123,"Elastic Easing"),n(),t(124,"p",13),i(125,"Bouncy, playful animation curve"),n()()()()()(),t(126,"app-example-section",41)(127,"div",8)(128,"preview-box",42)(129,"app-animate-on-scroll",43)(130,"div",44)(131,"h3",45),i(132,"Flip In 3D"),n(),t(133,"p",38),i(134,"Rotates along X-axis with perspective"),n()()()()()(),t(135,"app-example-section",46)(136,"div",8)(137,"preview-box",42)(138,"app-animate-on-scroll",47)(139,"div",48)(140,"h3",45),i(141,"Rotate 3D"),n(),t(142,"p",38),i(143,"Complex 3D rotation from center"),n()()()()()(),t(144,"app-example-section",49)(145,"div",8)(146,"preview-box",42)(147,"app-animate-on-scroll",50)(148,"div",51)(149,"h3",45),i(150,"Perspective Depth"),n(),t(151,"p",38),i(152,"Deep 3D perspective with multiple axes"),n()()()()()(),t(153,"app-example-section",52)(154,"div",8)(155,"preview-box",53)(156,"app-animate-on-scroll",54)(157,"div",55)(158,"strong"),i(159,"Analytics"),n(),t(160,"p",56),i(161,"Track your metrics"),n()(),t(162,"div",55)(163,"strong"),i(164,"Security"),n(),t(165,"p",56),i(166,"Protected data"),n()(),t(167,"div",55)(168,"strong"),i(169,"Speed"),n(),t(170,"p",56),i(171,"Lightning fast"),n()(),t(172,"div",55)(173,"strong"),i(174,"Cloud"),n(),t(175,"p",56),i(176,"Always available"),n()()()()()(),t(177,"app-example-section",57)(178,"div",8)(179,"preview-box",53)(180,"app-animate-on-scroll",58)(181,"div",59),i(182," Item 1 "),n(),t(183,"div",59),i(184," Item 2 "),n(),t(185,"div",59),i(186," Item 3 "),n(),t(187,"div",59),i(188," Item 4 "),n(),t(189,"div",59),i(190," Item 5 "),n()()()()(),t(191,"app-example-section",60)(192,"div",8)(193,"preview-box",42)(194,"app-animate-on-scroll",61)(195,"div",62)(196,"strong"),i(197,"Step 1"),n()(),t(198,"div",62)(199,"strong"),i(200,"Step 2"),n()(),t(201,"div",62)(202,"strong"),i(203,"Step 3"),n()()()()()(),t(204,"app-example-section",63)(205,"div",8)(206,"preview-box",64)(207,"div",65)(208,"div",66)(209,"app-animate-on-scroll",67)(210,"div",68)(211,"strong"),i(212,"Reactive Sidebar"),n(),t(213,"p",69),i(214,"Watching trigger..."),n()()()(),t(215,"div",70)(216,"div",71)(217,"p"),i(218,"Generic Content"),n()(),t(219,"div",72)(220,"h3",45),i(221,"TRIGGER ZONE"),n(),t(222,"p",73),i(223,"Scroll here to activate sidebar"),n()(),t(224,"div",74)(225,"p"),i(226,"Active Content Area"),n()()()()()()(),t(227,"app-example-section",75)(228,"div",8)(229,"preview-box",76)(230,"div",77)(231,"h3"),i(232,"SCRUB"),n(),t(233,"p"),i(234,"Scroll up and down to see me rotate and zoom!"),n(),t(235,"app-animate-on-scroll",78)(236,"div",79),i(237," SCRUB "),n()()()()()(),t(238,"app-example-section",80)(239,"div",8)(240,"preview-box",76)(241,"div",77)(242,"app-animate-on-scroll",81)(243,"div",82),i(244," 720\xB0 ROTATE "),n()()()()()(),t(245,"app-example-section",83)(246,"div",8)(247,"preview-box",76)(248,"div",77)(249,"app-animate-on-scroll",84)(250,"div",85),i(251," 2x SCALE "),n()()()()()(),t(252,"app-example-section",86)(253,"div",8)(254,"preview-box",53)(255,"app-animate-on-scroll",87)(256,"h2",88),i(257,"Start Building"),n()()()()(),t(258,"app-example-section",89)(259,"div",8)(260,"preview-box",53)(261,"app-animate-on-scroll",90)(262,"p",91),i(263," Create amazing scroll experiences today "),n()()()()(),t(264,"app-example-section",92)(265,"div",8)(266,"preview-box",53)(267,"app-animate-on-scroll",93)(268,"h1",94),i(269,"Fast Character Reveal"),n()()()()(),t(270,"app-example-section",95)(271,"div",8)(272,"preview-box",9)(273,"app-animate-on-scroll",96)(274,"div",11)(275,"h3",12),i(276,"Shake"),n(),t(277,"p",13),i(278,"Attention-grabbing shake effect"),n()()()()()(),t(279,"app-example-section",97)(280,"div",8)(281,"preview-box",9)(282,"app-animate-on-scroll",98)(283,"div",11)(284,"h3",12),i(285,"Repeat"),n(),t(286,"p",13),i(287,"Animation repeats on every scroll"),n()()()()()(),t(288,"app-example-section",99)(289,"div",8)(290,"preview-box",9)(291,"app-animate-on-scroll",100)(292,"div",11)(293,"h3",12),i(294,"Mirror"),n(),t(295,"p",13),i(296,"Reverses when scrolling up"),n()()()()()(),t(297,"app-example-section",101)(298,"div",8)(299,"preview-box",9)(300,"app-animate-on-scroll",102)(301,"div",11)(302,"h3",12),i(303,"Custom Threshold"),n(),t(304,"p",13),i(305,"Triggers at 50% visibility"),n()()()()()(),t(306,"app-example-section",103)(307,"div",8)(308,"preview-box",9)(309,"app-animate-on-scroll",104)(310,"div",11)(311,"h3",12),i(312,"Delayed"),n(),t(313,"p",13),i(314,"500ms delay before animation"),n()()()()()(),t(315,"app-example-section",105)(316,"div",8)(317,"preview-box",9)(318,"app-animate-on-scroll",106)(319,"div",11)(320,"h3",12),i(321,"Slow Motion"),n(),t(322,"p",13),i(323,"2 second duration for dramatic effect"),n()()()()()(),t(324,"app-example-section",107)(325,"div",8)(326,"preview-box",42)(327,"app-animate-on-scroll",108)(328,"div",109)(329,"h3",12),i(330,"Combined Effects"),n(),t(331,"p",38),i(332,"Blur + 3D + Scale + Elastic Easing"),n()()()()()()()()(),t(333,"div",110),f(334,"app-component-documentation",111),n()()()),b&2&&(a(7),r("links",e.anchorLinks),a(2),r("code",e.fadeInBasicCode()),a(9),r("code",e.fadeOutBasicCode()),a(9),r("code",e.slideUpCode()),a(9),r("code",e.slideDownCode()),a(9),r("code",e.slideLeftCode()),a(9),r("code",e.slideRightCode()),a(9),r("code",e.zoomInCode()),a(9),r("code",e.zoomOutCode()),a(9),r("code",e.bounceCode()),a(9),r("code",e.flipCode()),a(9),r("code",e.blurEntranceCode()),a(9),r("code",e.glassmorphicBlurCode()),a(9),r("code",e.elasticEasingCode()),a(9),r("code",e.flipIn3dCode()),a(9),r("code",e.rotate3dCode()),a(9),r("code",e.perspectiveDepthCode()),a(9),r("code",e.staggerChildrenCode()),a(24),r("code",e.staggerFastCode()),a(14),r("code",e.staggerSlowCode()),a(13),r("code",e.scrollTriggerCode()),a(23),r("code",e.scrollScrubbingCode()),a(11),r("code",e.scrubRotateCode()),a(7),r("code",e.scrubScaleCode()),a(7),r("code",e.textCharCode()),a(6),r("code",e.textWordCode()),a(6),r("code",e.textStaggerCode()),a(6),r("code",e.shakeAnimationCode()),a(9),r("code",e.repeatAnimationCode()),a(9),r("code",e.mirrorEffectCode()),a(9),r("code",e.customThresholdCode()),a(9),r("code",e.delayTimingCode()),a(9),r("code",e.durationControlCode()),a(9),r("code",e.combinedEffectsCode()))},dependencies:[h,C,N,z,T,I,B,F],styles:['.demo-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;overflow:hidden;box-sizing:border-box;max-width:90%;margin:0 auto;padding:var(--space-2xl) var(--space-xl);animation:fadeIn .5s cubic-bezier(.16,1,.3,1) forwards}.demo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.75rem;font-weight:800;background:linear-gradient(135deg,var(--text-primary) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:var(--space-sm);display:flex;align-items:center;gap:var(--space-md);letter-spacing:-.02em;line-height:1.2}.intro-text[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin-bottom:var(--space-2xl);line-height:1.7;font-weight:400}.variants-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:var(--space-sm);padding:var(--space-sm) var(--space-xs) var(--space-md) var(--space-xs);margin-bottom:var(--space-xl);scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--border-strong);border-radius:var(--radius-full);transition:background-color var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--text-tertiary)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]{flex-shrink:0;--ui-button-radius: var(--radius-full);transition:transform var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]::part(button){border-radius:var(--radius-full);font-weight:600;font-size:.875rem;padding:.625rem 1.25rem;color:#fff;white-space:nowrap;box-shadow:var(--shadow-sm);transition:all var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]::part(button):hover{box-shadow:var(--shadow-md)}.demo-section[_ngcontent-%COMP%]{margin-bottom:var(--space-2xl);scroll-margin-top:var(--space-xl);animation:slideInLeft .6s cubic-bezier(.16,1,.3,1) forwards;animation-delay:.1s;opacity:0}.section-header[_ngcontent-%COMP%]{margin-bottom:var(--space-xl)}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.875rem;font-weight:700;color:var(--text-primary);margin-bottom:var(--space-sm);letter-spacing:-.01em;line-height:1.3}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:var(--text-secondary);margin:0;line-height:1.6;max-width:700px}.demo-card[_ngcontent-%COMP%]{background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:var(--space-2xl);display:flex;flex-direction:column;gap:var(--space-2xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth);position:relative}.demo-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:var(--gradient-primary);opacity:0;transition:opacity var(--transition-smooth)}.demo-card[_ngcontent-%COMP%]:hover{box-shadow:var(--shadow-lg);border-color:var(--border-strong);transform:translateY(-2px)}.demo-card[_ngcontent-%COMP%]:hover:before{opacity:1}.pane-examples[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-examples[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-docs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-docs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%;min-height:0;box-sizing:border-box}.examples-split-layout[_ngcontent-%COMP%]{display:flex;gap:1rem;position:relative;height:100vh;box-sizing:border-box;overflow:hidden;padding:1rem;background:#f4faf6}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]{width:226px;flex-shrink:0;height:100%;min-height:0;overflow-y:auto;overflow-x:hidden;background:#fff;padding:1.5rem 1rem;border-radius:16px;border:1px solid #d1fae5;box-shadow:0 2px 12px #16a34a12;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#16a34a transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#16a34a;border-radius:4px}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#15803d}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:#16a34a;margin-bottom:1rem;text-transform:uppercase;letter-spacing:.08em;padding-left:.5rem}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]   ui-anchor[_ngcontent-%COMP%]{--primary-color: #16a34a;--text-secondary: #4b5563;--hover-bg: #f0fdf4;--active-bg: #e6f8ec;--anchor-active-color: #16a34a}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]{flex:1;min-width:0;height:100%;overflow-y:auto;overflow-x:hidden;position:relative;padding:2rem;background:#fff;border-radius:16px;border:1px solid #e2e8f0;box-shadow:0 2px 12px #0000000a;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#16a34a transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#16a34a;border-radius:4px}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#15803d}.demo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:var(--space-xl);margin-bottom:var(--space-xl)}.demo-grid.col-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.demo-grid.col-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.demo-flex-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--space-md);align-items:center}.demo-flex-wrap.column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.preview-box[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:var(--space-xl);display:flex;flex-direction:column;align-items:stretch;justify-content:center;min-height:160px;position:relative}.preview-box.glass-bg[_ngcontent-%COMP%]{background:var(--gradient-glass);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.full-width[_ngcontent-%COMP%]{width:100%!important}.preview-box[_ngcontent-%COMP%]{min-height:200px}.preview-box.scrollable[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto;align-items:flex-start}.animated-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#fff;padding:40px;border-radius:12px;font-size:1.2rem;font-weight:600;text-align:center;box-shadow:var(--shadow-lg)}']})}return u})();export{fe as SetAnimateOnScrollDemoComponent};
