import{a as O}from"./chunk-R2YD6KR3.js";import{a as D}from"./chunk-UNFGGHML.js";import{a as P}from"./chunk-WEU4O2QF.js";import{a as M}from"./chunk-WNRMHU5R.js";import"./chunk-HH4MHJTR.js";import"./chunk-6HCD6EDC.js";import{d as _,g as E,q as C}from"./chunk-ZNAQIODT.js";import"./chunk-QQX6WBI3.js";import{Ca as a,Db as g,Eb as c,Fb as u,Pa as f,Ta as x,Za as y,ca as p,db as r,eb as t,fb as e,gb as l,mb as s,qc as w,vc as v,yb as n,zb as S}from"./chunk-42JY3SOC.js";import"./chunk-RINRXYSM.js";function F(b,A){if(b&1&&(t(0,"div",31),n(1),e()),b&2){let m=A.$implicit;a(),S(m)}}var k=(()=>{class b{pgConfig={animation:"fade-in",direction:"up",duration:600,delay:0,offset:100,easing:"ease",repeat:!1,once:!0,mirror:!1,threshold:.1,blurAmount:0,perspective:1e3,rotateX:0,rotateY:0,rotateZ:0,scale:1,stagger:0,scrub:!1,textMode:"none"};animationOptions=[{label:"Fade In",value:"fade-in"},{label:"Fade Out",value:"fade-out"},{label:"Slide Up",value:"slide-up"},{label:"Slide Down",value:"slide-down"},{label:"Slide Left",value:"slide-left"},{label:"Slide Right",value:"slide-right"},{label:"Zoom In",value:"zoom-in"},{label:"Zoom Out",value:"zoom-out"},{label:"Bounce",value:"bounce"},{label:"Flip",value:"flip"},{label:"Flip In",value:"flip-in"},{label:"Rotate 3D",value:"rotate-3d"},{label:"Shake",value:"shake"},{label:"Scrub",value:"scrub"},{label:"Text Reveal",value:"text-reveal"}];directionOptions=[{label:"Up",value:"up"},{label:"Down",value:"down"},{label:"Left",value:"left"},{label:"Right",value:"right"}];easingOptions=[{label:"Ease",value:"ease"},{label:"Ease In",value:"ease-in"},{label:"Ease Out",value:"ease-out"},{label:"Ease In Out",value:"ease-in-out"},{label:"Linear",value:"linear"},{label:"Elastic",value:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}];textModeOptions=[{label:"None",value:"none"},{label:"Character",value:"char"},{label:"Word",value:"word"}];eventLog=p([]);generatedCode=p("");ngOnInit(){this.updateConfig()}updateConfig(){let m=`<app-animate-on-scroll
`;m+=`  animation="${this.pgConfig.animation}"
`,this.pgConfig.direction!=="up"&&(m+=`  direction="${this.pgConfig.direction}"
`),m+=`  duration="${this.pgConfig.duration}"
`,this.pgConfig.delay>0&&(m+=`  delay="${this.pgConfig.delay}"
`),this.pgConfig.offset!==100&&(m+=`  offset="${this.pgConfig.offset}"
`),m+=`  easing="${this.pgConfig.easing}"
`,this.pgConfig.threshold!==.1&&(m+=`  threshold="${this.pgConfig.threshold}"
`),this.pgConfig.blurAmount>0&&(m+=`  blur-amount="${this.pgConfig.blurAmount}"
`),this.pgConfig.perspective!==1e3&&(m+=`  perspective="${this.pgConfig.perspective}"
`),this.pgConfig.rotateX!==0&&(m+=`  rotate-x="${this.pgConfig.rotateX}"
`),this.pgConfig.rotateY!==0&&(m+=`  rotate-y="${this.pgConfig.rotateY}"
`),this.pgConfig.rotateZ!==0&&(m+=`  rotate-z="${this.pgConfig.rotateZ}"
`),this.pgConfig.scale!==1&&(m+=`  scale="${this.pgConfig.scale}"
`),this.pgConfig.stagger>0&&(m+=`  stagger="${this.pgConfig.stagger}"
`),this.pgConfig.repeat&&(m+=`  repeat="true"
`),this.pgConfig.once||(m+=`  once="false"
`),this.pgConfig.mirror&&(m+=`  mirror="true"
`),this.pgConfig.scrub&&(m+=`  scrub="true"
`),this.pgConfig.textMode!=="none"&&(m+=`  text-mode="${this.pgConfig.textMode}"
`),m+=`>
  <div>Your content here</div>
</app-animate-on-scroll>`,this.generatedCode.set(m)}onAnimate(m){this.logEvent(`Animation triggered: ${this.pgConfig.animation}`)}logEvent(m){let h=new Date().toLocaleTimeString();this.eventLog.update(i=>[`[${h}] ${m}`,...i.slice(0,9)])}copyCode(){navigator.clipboard.writeText(this.generatedCode())}static \u0275fac=function(h){return new(h||b)};static \u0275cmp=f({type:b,selectors:[["app-animate-on-scroll-playground"]],decls:95,vars:45,consts:[["accordionItems",'[{"id":"config","title":"Configuration","icon":"\u2699\uFE0F"}]',"defaultOpen",'["config"]'],["slot","content-config"],[1,"section-title"],[1,"control-grid"],[1,"control-group"],[3,"ngModelChange","ngModel","options"],["type","number","min","100","max","3000","step","100",3,"ngModelChange","ngModel"],["type","number","min","0","max","2000","step","100",3,"ngModelChange","ngModel"],["type","number","min","0","max","500","step","10",3,"ngModelChange","ngModel"],["type","number","min","0","max","1","step","0.1",3,"ngModelChange","ngModel"],["type","number","min","0","max","50","step","1",3,"ngModelChange","ngModel"],["type","number","min","500","max","2000","step","100",3,"ngModelChange","ngModel"],["type","number","min","-180","max","180","step","15",3,"ngModelChange","ngModel"],["type","number","min","-360","max","360","step","15",3,"ngModelChange","ngModel"],["type","number","min","0.1","max","3","step","0.1",3,"ngModelChange","ngModel"],["type","number","min","0","max","500","step","50",3,"ngModelChange","ngModel"],[1,"checkbox-grid"],[1,"checkbox-item"],["label","Repeat",3,"ngModelChange","ngModel"],["label","Once",3,"ngModelChange","ngModel"],["label","Mirror",3,"ngModelChange","ngModel"],["label","Scrub",3,"ngModelChange","ngModel"],["preview","",2,"width","100%","display","flex","justify-content","center","align-items","center"],[1,"event-log-container"],[1,"log-items"],["class","log-item",4,"ngFor","ngForOf"],[1,"preview-stage","scrollable-stage"],[1,"spacer"],[3,"animate"],[1,"animated-content"],["activeLang","html","expanded","true",3,"htmlCode","label"],[1,"log-item"]],template:function(h,i){h&1&&(t(0,"app-playground",0)(1,"div",1)(2,"h4",2),n(3,"Basic Animation"),e(),t(4,"div",3)(5,"div",4)(6,"label"),n(7,"Animation"),e(),t(8,"ui-dropdown",5),u("ngModelChange",function(o){return c(i.pgConfig.animation,o)||(i.pgConfig.animation=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(9,"div",4)(10,"label"),n(11,"Direction"),e(),t(12,"ui-dropdown",5),u("ngModelChange",function(o){return c(i.pgConfig.direction,o)||(i.pgConfig.direction=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(13,"div",4)(14,"label"),n(15,"Duration (ms)"),e(),t(16,"app-input",6),u("ngModelChange",function(o){return c(i.pgConfig.duration,o)||(i.pgConfig.duration=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(17,"div",4)(18,"label"),n(19,"Delay (ms)"),e(),t(20,"app-input",7),u("ngModelChange",function(o){return c(i.pgConfig.delay,o)||(i.pgConfig.delay=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(21,"div",4)(22,"label"),n(23,"Offset (px)"),e(),t(24,"app-input",8),u("ngModelChange",function(o){return c(i.pgConfig.offset,o)||(i.pgConfig.offset=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(25,"div",4)(26,"label"),n(27,"Easing"),e(),t(28,"ui-dropdown",5),u("ngModelChange",function(o){return c(i.pgConfig.easing,o)||(i.pgConfig.easing=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(29,"div",4)(30,"label"),n(31,"Threshold"),e(),t(32,"app-input",9),u("ngModelChange",function(o){return c(i.pgConfig.threshold,o)||(i.pgConfig.threshold=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()()(),t(33,"h4",2),n(34,"3D & Effects"),e(),t(35,"div",3)(36,"div",4)(37,"label"),n(38,"Blur Amount"),e(),t(39,"app-input",10),u("ngModelChange",function(o){return c(i.pgConfig.blurAmount,o)||(i.pgConfig.blurAmount=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(40,"div",4)(41,"label"),n(42,"Perspective"),e(),t(43,"app-input",11),u("ngModelChange",function(o){return c(i.pgConfig.perspective,o)||(i.pgConfig.perspective=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(44,"div",4)(45,"label"),n(46,"Rotate X (deg)"),e(),t(47,"app-input",12),u("ngModelChange",function(o){return c(i.pgConfig.rotateX,o)||(i.pgConfig.rotateX=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(48,"div",4)(49,"label"),n(50,"Rotate Y (deg)"),e(),t(51,"app-input",12),u("ngModelChange",function(o){return c(i.pgConfig.rotateY,o)||(i.pgConfig.rotateY=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(52,"div",4)(53,"label"),n(54,"Rotate Z (deg)"),e(),t(55,"app-input",13),u("ngModelChange",function(o){return c(i.pgConfig.rotateZ,o)||(i.pgConfig.rotateZ=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(56,"div",4)(57,"label"),n(58,"Scale"),e(),t(59,"app-input",14),u("ngModelChange",function(o){return c(i.pgConfig.scale,o)||(i.pgConfig.scale=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(60,"div",4)(61,"label"),n(62,"Stagger (ms)"),e(),t(63,"app-input",15),u("ngModelChange",function(o){return c(i.pgConfig.stagger,o)||(i.pgConfig.stagger=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(64,"div",4)(65,"label"),n(66,"Text Mode"),e(),t(67,"ui-dropdown",5),u("ngModelChange",function(o){return c(i.pgConfig.textMode,o)||(i.pgConfig.textMode=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()()(),t(68,"h4",2),n(69,"Options"),e(),t(70,"div",16)(71,"label",17)(72,"app-checkbox",18),u("ngModelChange",function(o){return c(i.pgConfig.repeat,o)||(i.pgConfig.repeat=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(73,"label",17)(74,"app-checkbox",19),u("ngModelChange",function(o){return c(i.pgConfig.once,o)||(i.pgConfig.once=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(75,"label",17)(76,"app-checkbox",20),u("ngModelChange",function(o){return c(i.pgConfig.mirror,o)||(i.pgConfig.mirror=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()(),t(77,"label",17)(78,"app-checkbox",21),u("ngModelChange",function(o){return c(i.pgConfig.scrub,o)||(i.pgConfig.scrub=o),o}),s("ngModelChange",function(){return i.updateConfig()}),e()()()(),t(79,"div",22)(80,"div",23)(81,"strong"),n(82,"Event Log"),e(),t(83,"div",24),x(84,F,2,1,"div",25),e()(),t(85,"div",26),l(86,"div",27),t(87,"app-animate-on-scroll",28),s("animate",function(o){return i.onAnimate(o)}),t(88,"div",29)(89,"h3"),n(90,"Scroll to Animate"),e(),t(91,"p"),n(92,"This content will animate when scrolled into view"),e()()(),l(93,"div",27),e(),l(94,"ui-code-preview",30),e()()),h&2&&(a(8),g("ngModel",i.pgConfig.animation),r("options",i.animationOptions),a(4),g("ngModel",i.pgConfig.direction),r("options",i.directionOptions),a(4),g("ngModel",i.pgConfig.duration),a(4),g("ngModel",i.pgConfig.delay),a(4),g("ngModel",i.pgConfig.offset),a(4),g("ngModel",i.pgConfig.easing),r("options",i.easingOptions),a(4),g("ngModel",i.pgConfig.threshold),a(7),g("ngModel",i.pgConfig.blurAmount),a(4),g("ngModel",i.pgConfig.perspective),a(4),g("ngModel",i.pgConfig.rotateX),a(4),g("ngModel",i.pgConfig.rotateY),a(4),g("ngModel",i.pgConfig.rotateZ),a(4),g("ngModel",i.pgConfig.scale),a(4),g("ngModel",i.pgConfig.stagger),a(4),g("ngModel",i.pgConfig.textMode),r("options",i.textModeOptions),a(5),g("ngModel",i.pgConfig.repeat),a(2),g("ngModel",i.pgConfig.once),a(2),g("ngModel",i.pgConfig.mirror),a(2),g("ngModel",i.pgConfig.scrub),a(6),r("ngForOf",i.eventLog()),a(3),y("animation",i.pgConfig.animation)("direction",i.pgConfig.direction)("duration",i.pgConfig.duration)("delay",i.pgConfig.delay)("offset",i.pgConfig.offset)("easing",i.pgConfig.easing)("threshold",i.pgConfig.threshold)("blur-amount",i.pgConfig.blurAmount>0?i.pgConfig.blurAmount:null)("perspective",i.pgConfig.perspective!==1e3?i.pgConfig.perspective:null)("rotate-x",i.pgConfig.rotateX!==0?i.pgConfig.rotateX:null)("rotate-y",i.pgConfig.rotateY!==0?i.pgConfig.rotateY:null)("rotate-z",i.pgConfig.rotateZ!==0?i.pgConfig.rotateZ:null)("scale",i.pgConfig.scale!==1?i.pgConfig.scale:null)("stagger",i.pgConfig.stagger>0?i.pgConfig.stagger:null)("text-mode",i.pgConfig.textMode!=="none"?i.pgConfig.textMode:null)("repeat",i.pgConfig.repeat)("once",i.pgConfig.once)("mirror",i.pgConfig.mirror)("scrub",i.pgConfig.scrub),a(7),r("htmlCode",i.generatedCode())("label","Generated Code"))},dependencies:[v,w,C,_,E,D,O],styles:[`.playground-layout{display:flex;gap:var(--space-2xl);height:100%}@media(max-width:1200px){.playground-layout{flex-direction:column}}.playground-controls{flex:1;background:var(--surface-elevated);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-controls:hover{box-shadow:var(--shadow-md);border-color:var(--border-strong)}.playground-controls .control-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-lg);margin-bottom:var(--space-xl)}.playground-controls .control-group{display:flex;flex-direction:column;gap:var(--space-xs)}.playground-controls .control-group label{font-size:.875rem;font-weight:600;color:var(--text-secondary);letter-spacing:-.01em}.playground-controls .control-group select,.playground-controls .control-group input[type=text],.playground-controls .control-group input[type=number],.playground-controls .control-group app-input,.playground-controls .control-group ui-dropdown{width:100%;display:block}.playground-controls .control-group app-input{min-height:40px;box-sizing:border-box}.playground-controls .control-group select,.playground-controls .control-group input[type=text],.playground-controls .control-group input[type=number]{padding:var(--space-sm) var(--space-md);background:var(--surface-1);border:1px solid var(--border-color);border-radius:var(--radius-md);color:var(--text-primary);font-size:.875rem;transition:all var(--transition-fast)}.playground-controls .control-group select:focus,.playground-controls .control-group input[type=text]:focus,.playground-controls .control-group input[type=number]:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-glow)}.playground-controls .checkbox-grid,.playground-controls .checkbox-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:var(--space-md)}.playground-controls .checkbox-grid .checkbox-item,.playground-controls .checkbox-group .checkbox-item{display:flex;align-items:center;gap:var(--space-sm);font-size:.9rem;cursor:pointer;color:var(--text-primary)}.playground-controls .checkbox-grid .checkbox-item app-checkbox,.playground-controls .checkbox-group .checkbox-item app-checkbox{display:inline-flex}.playground-preview{flex:1.5;display:flex;flex-direction:column;gap:var(--space-xl);min-width:0;min-height:300px;background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:var(--space-xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-preview .event-log,.playground-preview .event-log-container{background:var(--surface-2);padding:var(--space-md) var(--space-lg);border-radius:var(--radius-lg);font-family:var(--font-mono);font-size:.85rem;border-left:4px solid var(--primary);color:var(--text-primary);box-shadow:var(--shadow-inner);max-height:150px;overflow-y:auto}.playground-preview .event-log strong,.playground-preview .event-log-container strong{display:block;margin-bottom:var(--space-xs);color:var(--text-secondary);font-size:.75rem;text-transform:uppercase;letter-spacing:.05em}.playground-preview .event-log .log-items,.playground-preview .event-log-container .log-items{max-height:100px;overflow-y:auto}.playground-preview .event-log .log-item,.playground-preview .event-log-container .log-item{padding:.25rem 0;border-bottom:1px solid var(--border-light)}.playground-preview .event-log .log-item:last-child,.playground-preview .event-log-container .log-item:last-child{border-bottom:none}.playground-preview .preview-stage{min-height:300px;background:var(--surface-elevated);border-radius:var(--radius-2xl);border:2px dashed var(--border-color);display:flex;justify-content:center;align-items:center;padding:var(--space-2xl);position:relative;box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-preview .preview-stage:hover{border-color:var(--border-strong);box-shadow:var(--shadow-md)}.playground-preview ui-code-preview{width:100%;border-radius:var(--radius-xl);overflow:hidden;border:1px solid var(--border-color);box-shadow:var(--shadow-md)}.custom-slot-content{padding:var(--space-lg);display:flex;flex-direction:column;gap:var(--space-md);min-width:250px}.custom-slot-content p{margin:0;font-weight:700;font-size:.95rem}.custom-slot-content app-input{width:100%}.custom-slot-content .slot-actions{display:flex;gap:var(--space-sm);margin-top:var(--space-sm)}.custom-slot-content .slot-actions button,.custom-slot-content .slot-actions ui-button{flex:1}.custom-slot-content .slot-actions .btn-confirm{background:var(--primary);color:#fff;border:none}.custom-slot-content .slot-actions .btn-cancel{background:var(--surface-2);border:1px solid var(--border-color);color:var(--text-primary)}
`],encapsulation:2})}return b})();var $=(()=>{class b{exampleVariants=[{id:"fade-in-basic",title:"Fade In",icon:"sunrise",iconLibrary:"lucide"},{id:"fade-out-basic",title:"Fade Out",icon:"sunset",iconLibrary:"lucide"},{id:"slide-up",title:"Slide Up",icon:"arrow-up",iconLibrary:"lucide"},{id:"slide-down",title:"Slide Down",icon:"arrow-down",iconLibrary:"lucide"},{id:"slide-left",title:"Slide Left",icon:"arrow-left",iconLibrary:"lucide"},{id:"slide-right",title:"Slide Right",icon:"arrow-right",iconLibrary:"lucide"},{id:"zoom-in",title:"Zoom In",icon:"zoom-in",iconLibrary:"lucide"},{id:"zoom-out",title:"Zoom Out",icon:"zoom-out",iconLibrary:"lucide"},{id:"bounce",title:"Bounce",icon:"zap",iconLibrary:"lucide"},{id:"flip",title:"Flip",icon:"refresh-cw",iconLibrary:"lucide"},{id:"blur-entrance",title:"Blur Entrance",icon:"sparkles",iconLibrary:"lucide"},{id:"glassmorphic-blur",title:"Glassmorphic Blur",icon:"clapperboard",iconLibrary:"lucide"},{id:"elastic-easing",title:"Elastic Easing",icon:"activity",iconLibrary:"lucide"},{id:"flip-in-3d",title:"Flip In 3D",icon:"dice-3",iconLibrary:"lucide"},{id:"rotate-3d",title:"Rotate 3D",icon:"rotate-3d",iconLibrary:"lucide"},{id:"perspective-depth",title:"Perspective Depth",icon:"mountain",iconLibrary:"lucide"},{id:"stagger-children",title:"Stagger Children",icon:"music",iconLibrary:"lucide"},{id:"stagger-fast",title:"Stagger Fast",icon:"zap",iconLibrary:"lucide"},{id:"stagger-slow",title:"Stagger Slow",icon:"turtle",iconLibrary:"lucide"},{id:"scroll-trigger",title:"Scroll Trigger",icon:"target",iconLibrary:"lucide"},{id:"scroll-scrubbing",title:"Scroll Scrubbing",icon:"sliders",iconLibrary:"lucide"},{id:"scrub-rotate",title:"Scrub Rotate",icon:"refresh-cw",iconLibrary:"lucide"},{id:"scrub-scale",title:"Scrub Scale",icon:"ruler",iconLibrary:"lucide"},{id:"text-char",title:"Text Character",icon:"case-sensitive",iconLibrary:"lucide"},{id:"text-word",title:"Text Word",icon:"file-text",iconLibrary:"lucide"},{id:"text-stagger",title:"Text Stagger",icon:"pen-line",iconLibrary:"lucide"},{id:"shake-animation",title:"Shake",icon:"waves",iconLibrary:"lucide"},{id:"repeat-animation",title:"Repeat Animation",icon:"repeat",iconLibrary:"lucide"},{id:"mirror-effect",title:"Mirror Effect",icon:"flip-horizontal",iconLibrary:"lucide"},{id:"custom-threshold",title:"Custom Threshold",icon:"bar-chart-2",iconLibrary:"lucide"},{id:"delay-timing",title:"Delay Timing",icon:"timer",iconLibrary:"lucide"},{id:"duration-control",title:"Duration Control",icon:"hourglass",iconLibrary:"lucide"},{id:"combined-effects",title:"Combined Effects",icon:"palette",iconLibrary:"lucide"}];scrollToSection(m){let h=document.getElementById(m);h&&h.scrollIntoView({behavior:"smooth",block:"start"})}fadeInBasicCode=p(`<app-animate-on-scroll
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
</app-animate-on-scroll>`);static \u0275fac=function(h){return new(h||b)};static \u0275cmp=f({type:b,selectors:[["app-set-animate-on-scroll-demo"]],decls:561,vars:33,consts:[["slot","examples"],["id","fade-in-basic"],[1,"scrollable-preview",2,"min-height","600px","padding-top","300px"],["animation","fade-in","duration","600"],[1,"content-box",2,"padding","30px","background","var(--bg-secondary)","border-radius","12px","text-align","center"],[2,"margin","0 0 10px 0"],[2,"margin","0","opacity","0.8"],["activeLang","html",3,"htmlCode"],["id","fade-out-basic"],["animation","fade-out","duration","600"],["id","slide-up"],["animation","slide-up","duration","800","offset","100"],["id","slide-down"],["animation","slide-down","duration","800"],["id","slide-left"],["animation","slide-left","duration","800"],["id","slide-right"],["animation","slide-right","duration","800"],["id","zoom-in"],["animation","zoom-in","duration","700","scale","0.5"],["id","zoom-out"],["animation","zoom-out","duration","700","scale","1.5"],["id","bounce"],["animation","bounce","duration","1000"],["id","flip"],["animation","flip","duration","900"],["id","blur-entrance"],["animation","fade-in","blur-amount","10","duration","1000","easing","ease-out"],[1,"content-box",2,"padding","30px","background",`linear-gradient(
                    135deg,
                    rgba(99, 102, 241, 0.1),
                    rgba(139, 92, 246, 0.1)
                  )`,"backdrop-filter","blur(10px)","border-radius","12px","border","1px solid rgba(255, 255, 255, 0.2)","text-align","center"],["id","glassmorphic-blur"],["animation","fade-in","blur-amount","20","easing","cubic-bezier(0.68, -0.55, 0.265, 1.55)","duration","1200"],[1,"content-box",2,"padding","40px","background",`linear-gradient(
                    135deg,
                    rgba(99, 102, 241, 0.15),
                    rgba(139, 92, 246, 0.15)
                  )`,"backdrop-filter","blur(10px)","border-radius","16px","border","1px solid rgba(255, 255, 255, 0.3)","text-align","center"],[2,"margin","0","opacity","0.9"],["id","elastic-easing"],["animation","slide-up","easing","cubic-bezier(0.68, -0.55, 0.265, 1.55)","duration","1000"],["id","flip-in-3d"],[1,"scrollable-preview",2,"min-height","700px","padding-top","350px"],["animation","flip-in","perspective","1000","rotate-x","90","duration","800"],[1,"content-box",2,"padding","40px","background","linear-gradient(135deg, #667eea 0%, #764ba2 100%)","border-radius","12px","color","white","text-align","center"],[2,"margin","0 0 10px 0","color","white"],["id","rotate-3d"],["animation","rotate-3d","perspective","1500","rotate-y","180","duration","1000"],[1,"content-box",2,"padding","40px","background","linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","border-radius","12px","color","white","text-align","center"],["id","perspective-depth"],["animation","zoom-in","perspective","2000","rotate-x","45","rotate-y","45","duration","1200"],[1,"content-box",2,"padding","40px","background","linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","border-radius","12px","color","white","text-align","center"],["id","stagger-children"],[1,"scrollable-preview",2,"min-height","800px","padding-top","400px"],["animation","fade-in","stagger","100"],[2,"padding","20px","margin","10px 0","background","var(--bg-secondary)","border-radius","8px"],[2,"margin","5px 0 0 0","opacity","0.8"],["id","stagger-fast"],["animation","slide-up","stagger","50"],[2,"padding","15px","margin","8px 0","background","var(--bg-secondary)","border-radius","8px","text-align","center"],["id","stagger-slow"],["animation","fade-in","stagger","200"],[2,"padding","20px","margin","12px 0","background","var(--bg-secondary)","border-radius","8px","text-align","center"],["id","scroll-trigger"],[1,"scrollable-preview",2,"min-height","1200px"],[2,"display","flex","gap","20px"],[2,"flex","0 0 200px","position","sticky","top","20px","height","fit-content"],["animation","shake","trigger","#trigger-zone"],[2,"padding","20px","background","var(--bg-secondary)","border-radius","8px","text-align","center"],[2,"margin","10px 0 0 0","font-size","0.9em"],[2,"flex","1"],[2,"padding","40px","background","var(--bg-tertiary)","border-radius","8px","margin-bottom","20px"],["id","trigger-zone",2,"padding","60px","background","linear-gradient(135deg, #ffa500, #ff6347)","border-radius","8px","color","white","text-align","center","margin","400px 0"],[2,"margin","0"],[2,"padding","40px","background","var(--bg-tertiary)","border-radius","8px","margin-top","20px"],["id","scroll-scrubbing"],[1,"scrollable-preview",2,"min-height","1500px","padding-top","600px","padding-bottom","600px"],[2,"text-align","center"],["animation","scrub","scrub","true","rotate-z","360","scale","1.5"],[2,"width","150px","height","150px","margin","40px auto","background","linear-gradient(135deg, #667eea, #764ba2)","border-radius","20px","display","flex","align-items","center","justify-content","center","color","white","font-weight","bold"],["id","scrub-rotate"],["animation","scrub","scrub","true","rotate-z","720"],[2,"width","120px","height","120px","margin","40px auto","background","linear-gradient(135deg, #f093fb, #f5576c)","border-radius","16px","display","flex","align-items","center","justify-content","center","color","white","font-weight","bold","font-size","0.9em"],["id","scrub-scale"],["animation","scrub","scrub","true","scale","2"],[2,"width","100px","height","100px","margin","60px auto","background","linear-gradient(135deg, #4facfe, #00f2fe)","border-radius","12px","display","flex","align-items","center","justify-content","center","color","white","font-weight","bold","font-size","0.85em"],["id","text-char"],["animation","text-reveal","text-mode","char","stagger","50"],[2,"text-align","center","font-size","2.5em","margin","0"],["id","text-word"],["animation","text-reveal","text-mode","word","stagger","100"],[2,"text-align","center","font-size","1.5em","margin","0"],["id","text-stagger"],["animation","text-reveal","text-mode","char","stagger","30","duration","50"],[2,"text-align","center","font-size","3em","margin","0"],["id","shake-animation"],["animation","shake","duration","500"],["id","repeat-animation"],["animation","bounce","repeat","true","duration","1000"],["id","mirror-effect"],["animation","slide-up","mirror","true","duration","800"],["id","custom-threshold"],["animation","fade-in","threshold","0.5","duration","600"],["id","delay-timing"],["animation","fade-in","delay","500","duration","800"],["id","duration-control"],["animation","slide-up","duration","2000"],["id","combined-effects"],["animation","fade-in","blur-amount","15","perspective","1000","rotate-x","30","scale","0.8","duration","1200","easing","cubic-bezier(0.68, -0.55, 0.265, 1.55)"],[1,"content-box",2,"padding","40px","background",`linear-gradient(
                    135deg,
                    rgba(99, 102, 241, 0.2),
                    rgba(139, 92, 246, 0.2)
                  )`,"backdrop-filter","blur(10px)","border-radius","16px","border","1px solid rgba(255, 255, 255, 0.3)","text-align","center"],["slot","playground"],["slot","docs"],["componentId","animate-on-scroll"]],template:function(h,i){h&1&&(t(0,"demo-tabs")(1,"div",0)(2,"demo-section",1)(3,"section-header")(4,"h2"),n(5,"\u{1F305} Fade In"),e(),t(6,"p"),n(7,"Smooth fade entrance with configurable duration."),e()(),t(8,"demo-grid")(9,"demo-card")(10,"preview-box",2)(11,"app-animate-on-scroll",3)(12,"div",4)(13,"h3",5),n(14,"Fade In"),e(),t(15,"p",6),n(16,"Smooth fade entrance"),e()()()(),l(17,"ui-code-preview",7),e()()(),t(18,"demo-section",8)(19,"section-header")(20,"h2"),n(21,"\u{1F307} Fade Out"),e(),t(22,"p"),n(23,"Fade out effect triggered on scroll."),e()(),t(24,"demo-grid")(25,"demo-card")(26,"preview-box",2)(27,"app-animate-on-scroll",9)(28,"div",4)(29,"h3",5),n(30,"Fade Out"),e(),t(31,"p",6),n(32,"Fade out on scroll"),e()()()(),l(33,"ui-code-preview",7),e()()(),t(34,"demo-section",10)(35,"section-header")(36,"h2"),n(37,"\u2B06\uFE0F Slide Up"),e(),t(38,"p"),n(39,"Element slides up from bottom with smooth motion."),e()(),t(40,"demo-grid")(41,"demo-card")(42,"preview-box",2)(43,"app-animate-on-scroll",11)(44,"div",4)(45,"h3",5),n(46,"Slide Up"),e(),t(47,"p",6),n(48,"Slide up from bottom"),e()()()(),l(49,"ui-code-preview",7),e()()(),t(50,"demo-section",12)(51,"section-header")(52,"h2"),n(53,"\u2B07\uFE0F Slide Down"),e(),t(54,"p"),n(55,"Element slides down from top."),e()(),t(56,"demo-grid")(57,"demo-card")(58,"preview-box",2)(59,"app-animate-on-scroll",13)(60,"div",4)(61,"h3",5),n(62,"Slide Down"),e(),t(63,"p",6),n(64,"Slide down from top"),e()()()(),l(65,"ui-code-preview",7),e()()(),t(66,"demo-section",14)(67,"section-header")(68,"h2"),n(69,"\u2B05\uFE0F Slide Left"),e(),t(70,"p"),n(71,"Element slides from right to left."),e()(),t(72,"demo-grid")(73,"demo-card")(74,"preview-box",2)(75,"app-animate-on-scroll",15)(76,"div",4)(77,"h3",5),n(78,"Slide Left"),e(),t(79,"p",6),n(80,"Slide from right to left"),e()()()(),l(81,"ui-code-preview",7),e()()(),t(82,"demo-section",16)(83,"section-header")(84,"h2"),n(85,"\u27A1\uFE0F Slide Right"),e(),t(86,"p"),n(87,"Element slides from left to right."),e()(),t(88,"demo-grid")(89,"demo-card")(90,"preview-box",2)(91,"app-animate-on-scroll",17)(92,"div",4)(93,"h3",5),n(94,"Slide Right"),e(),t(95,"p",6),n(96,"Slide from left to right"),e()()()(),l(97,"ui-code-preview",7),e()()(),t(98,"demo-section",18)(99,"section-header")(100,"h2"),n(101,"\u{1F50D} Zoom In"),e(),t(102,"p"),n(103,"Scale up entrance effect from 50% to full size."),e()(),t(104,"demo-grid")(105,"demo-card")(106,"preview-box",2)(107,"app-animate-on-scroll",19)(108,"div",4)(109,"h3",5),n(110,"Zoom In"),e(),t(111,"p",6),n(112,"Scale up entrance"),e()()()(),l(113,"ui-code-preview",7),e()()(),t(114,"demo-section",20)(115,"section-header")(116,"h2"),n(117,"\u{1F50E} Zoom Out"),e(),t(118,"p"),n(119,"Scale down entrance effect from 150% to normal size."),e()(),t(120,"demo-grid")(121,"demo-card")(122,"preview-box",2)(123,"app-animate-on-scroll",21)(124,"div",4)(125,"h3",5),n(126,"Zoom Out"),e(),t(127,"p",6),n(128,"Scale down entrance"),e()()()(),l(129,"ui-code-preview",7),e()()(),t(130,"demo-section",22)(131,"section-header")(132,"h2"),n(133,"\u26A1 Bounce"),e(),t(134,"p"),n(135,"Bouncy, energetic entrance effect."),e()(),t(136,"demo-grid")(137,"demo-card")(138,"preview-box",2)(139,"app-animate-on-scroll",23)(140,"div",4)(141,"h3",5),n(142,"Bounce"),e(),t(143,"p",6),n(144,"Bouncy entrance effect"),e()()()(),l(145,"ui-code-preview",7),e()()(),t(146,"demo-section",24)(147,"section-header")(148,"h2"),n(149,"\u{1F504} Flip"),e(),t(150,"p"),n(151,"Classic flip animation effect."),e()(),t(152,"demo-grid")(153,"demo-card")(154,"preview-box",2)(155,"app-animate-on-scroll",25)(156,"div",4)(157,"h3",5),n(158,"Flip"),e(),t(159,"p",6),n(160,"Flip animation"),e()()()(),l(161,"ui-code-preview",7),e()()(),t(162,"demo-section",26)(163,"section-header")(164,"h2"),n(165,"\u{1F32B}\uFE0F Blur Entrance"),e(),t(166,"p"),n(167,"Starts blurry and becomes sharp for premium feel."),e()(),t(168,"demo-grid")(169,"demo-card")(170,"preview-box",2)(171,"app-animate-on-scroll",27)(172,"div",28)(173,"h3",5),n(174,"Blur Entrance"),e(),t(175,"p",6),n(176,"Starts blurry, becomes sharp"),e()()()(),l(177,"ui-code-preview",7),e()()(),t(178,"demo-section",29)(179,"section-header")(180,"h2"),n(181,"\u{1F3AC} Glassmorphic Blur"),e(),t(182,"p"),n(183,"20px Gaussian blur with elastic easing for native-app feel."),e()(),t(184,"demo-grid")(185,"demo-card")(186,"preview-box",2)(187,"app-animate-on-scroll",30)(188,"div",31)(189,"h3",5),n(190,"Premium Content"),e(),t(191,"p",32),n(192,"Glassmorphic blur with elastic easing"),e()()()(),l(193,"ui-code-preview",7),e()()(),t(194,"demo-section",33)(195,"section-header")(196,"h2"),n(197,"\u{1F3AA} Elastic Easing"),e(),t(198,"p"),n(199,"Bouncy, playful animation curve using cubic-bezier."),e()(),t(200,"demo-grid")(201,"demo-card")(202,"preview-box",2)(203,"app-animate-on-scroll",34)(204,"div",4)(205,"h3",5),n(206,"Elastic Easing"),e(),t(207,"p",6),n(208,"Bouncy, playful animation curve"),e()()()(),l(209,"ui-code-preview",7),e()()(),t(210,"demo-section",35)(211,"section-header")(212,"h2"),n(213,"\u{1F3B2} Flip In 3D"),e(),t(214,"p"),n(215,"Hardware-accelerated 3D flip along X-axis with perspective."),e()(),t(216,"demo-grid")(217,"demo-card")(218,"preview-box",36)(219,"app-animate-on-scroll",37)(220,"div",38)(221,"h3",39),n(222,"Flip In 3D"),e(),t(223,"p",32),n(224,"Rotates along X-axis with perspective"),e()()()(),l(225,"ui-code-preview",7),e()()(),t(226,"demo-section",40)(227,"section-header")(228,"h2"),n(229,"\u{1F300} Rotate 3D"),e(),t(230,"p"),n(231,"Complex 3D rotation from center point along Y-axis."),e()(),t(232,"demo-grid")(233,"demo-card")(234,"preview-box",36)(235,"app-animate-on-scroll",41)(236,"div",42)(237,"h3",39),n(238,"Rotate 3D"),e(),t(239,"p",32),n(240,"Complex 3D rotation from center"),e()()()(),l(241,"ui-code-preview",7),e()()(),t(242,"demo-section",43)(243,"section-header")(244,"h2"),n(245,"\u{1F3D4}\uFE0F Perspective Depth"),e(),t(246,"p"),n(247,"Deep 3D perspective with multiple rotation axes."),e()(),t(248,"demo-grid")(249,"demo-card")(250,"preview-box",36)(251,"app-animate-on-scroll",44)(252,"div",45)(253,"h3",39),n(254,"Perspective Depth"),e(),t(255,"p",32),n(256,"Deep 3D perspective with multiple axes"),e()()()(),l(257,"ui-code-preview",7),e()()(),t(258,"demo-section",46)(259,"section-header")(260,"h2"),n(261,"\u{1F3B5} Stagger Children"),e(),t(262,"p"),n(263,"Sequentially animate child elements with 100ms delay."),e()(),t(264,"demo-grid")(265,"demo-card")(266,"preview-box",47)(267,"app-animate-on-scroll",48)(268,"div",49)(269,"strong"),n(270,"Analytics"),e(),t(271,"p",50),n(272,"Track your metrics"),e()(),t(273,"div",49)(274,"strong"),n(275,"Security"),e(),t(276,"p",50),n(277,"Protected data"),e()(),t(278,"div",49)(279,"strong"),n(280,"Speed"),e(),t(281,"p",50),n(282,"Lightning fast"),e()(),t(283,"div",49)(284,"strong"),n(285,"Cloud"),e(),t(286,"p",50),n(287,"Always available"),e()()()(),l(288,"ui-code-preview",7),e()()(),t(289,"demo-section",51)(290,"section-header")(291,"h2"),n(292,"\u26A1 Stagger Fast"),e(),t(293,"p"),n(294,"Quick sequential animation with 50ms stagger delay."),e()(),t(295,"demo-grid")(296,"demo-card")(297,"preview-box",47)(298,"app-animate-on-scroll",52)(299,"div",53),n(300," Item 1 "),e(),t(301,"div",53),n(302," Item 2 "),e(),t(303,"div",53),n(304," Item 3 "),e(),t(305,"div",53),n(306," Item 4 "),e(),t(307,"div",53),n(308," Item 5 "),e()()(),l(309,"ui-code-preview",7),e()()(),t(310,"demo-section",54)(311,"section-header")(312,"h2"),n(313,"\u{1F40C} Stagger Slow"),e(),t(314,"p"),n(315,"Deliberate sequential animation with 200ms stagger."),e()(),t(316,"demo-grid")(317,"demo-card")(318,"preview-box",36)(319,"app-animate-on-scroll",55)(320,"div",56)(321,"strong"),n(322,"Step 1"),e()(),t(323,"div",56)(324,"strong"),n(325,"Step 2"),e()(),t(326,"div",56)(327,"strong"),n(328,"Step 3"),e()()()(),l(329,"ui-code-preview",7),e()()(),t(330,"demo-section",57)(331,"section-header")(332,"h2"),n(333,"\u{1F3AF} Scroll Trigger"),e(),t(334,"p"),n(335,"Animate one element based on another element's scroll position."),e()(),t(336,"demo-grid")(337,"demo-card")(338,"preview-box",58)(339,"div",59)(340,"div",60)(341,"app-animate-on-scroll",61)(342,"div",62)(343,"strong"),n(344,"Reactive Sidebar"),e(),t(345,"p",63),n(346,"Watching trigger..."),e()()()(),t(347,"div",64)(348,"div",65)(349,"p"),n(350,"Generic Content"),e()(),t(351,"div",66)(352,"h3",39),n(353,"TRIGGER ZONE"),e(),t(354,"p",67),n(355,"Scroll here to activate sidebar"),e()(),t(356,"div",68)(357,"p"),n(358,"Active Content Area"),e()()()()(),l(359,"ui-code-preview",7),e()()(),t(360,"demo-section",69)(361,"section-header")(362,"h2"),n(363,"\u{1F39B}\uFE0F Scroll Scrubbing"),e(),t(364,"p"),n(365,"Directly bind animation progress to scrollbar position."),e()(),t(366,"demo-grid")(367,"demo-card")(368,"preview-box",70)(369,"div",71)(370,"h3"),n(371,"SCRUB"),e(),t(372,"p"),n(373,"Scroll up and down to see me rotate and zoom!"),e(),t(374,"app-animate-on-scroll",72)(375,"div",73),n(376," SCRUB "),e()()()(),l(377,"ui-code-preview",7),e()()(),t(378,"demo-section",74)(379,"section-header")(380,"h2"),n(381,"\u{1F504} Scrub Rotate"),e(),t(382,"p"),n(383,"Double rotation (720 degrees) tied to scroll progress."),e()(),t(384,"demo-grid")(385,"demo-card")(386,"preview-box",70)(387,"div",71)(388,"app-animate-on-scroll",75)(389,"div",76),n(390," 720\xB0 ROTATE "),e()()()(),l(391,"ui-code-preview",7),e()()(),t(392,"demo-section",77)(393,"section-header")(394,"h2"),n(395,"\u{1F4CF} Scrub Scale"),e(),t(396,"p"),n(397,"Scale to 2x size based on scroll position."),e()(),t(398,"demo-grid")(399,"demo-card")(400,"preview-box",70)(401,"div",71)(402,"app-animate-on-scroll",78)(403,"div",79),n(404," 2x SCALE "),e()()()(),l(405,"ui-code-preview",7),e()()(),t(406,"demo-section",80)(407,"section-header")(408,"h2"),n(409,"\u{1F524} Text Character"),e(),t(410,"p"),n(411,"Reveal text character-by-character with 50ms stagger."),e()(),t(412,"demo-grid")(413,"demo-card")(414,"preview-box",47)(415,"app-animate-on-scroll",81)(416,"h2",82),n(417,"Start Building"),e()()(),l(418,"ui-code-preview",7),e()()(),t(419,"demo-section",83)(420,"section-header")(421,"h2"),n(422,"\u{1F4DD} Text Word"),e(),t(423,"p"),n(424,"Reveal text word-by-word with 100ms stagger."),e()(),t(425,"demo-grid")(426,"demo-card")(427,"preview-box",47)(428,"app-animate-on-scroll",84)(429,"p",85),n(430," Create amazing scroll experiences today "),e()()(),l(431,"ui-code-preview",7),e()()(),t(432,"demo-section",86)(433,"section-header")(434,"h2"),n(435,"\u270D\uFE0F Text Stagger"),e(),t(436,"p"),n(437,"Fast character reveal with 30ms stagger for dramatic effect."),e()(),t(438,"demo-grid")(439,"demo-card")(440,"preview-box",47)(441,"app-animate-on-scroll",87)(442,"h1",88),n(443,"Fast Character Reveal"),e()()(),l(444,"ui-code-preview",7),e()()(),t(445,"demo-section",89)(446,"section-header")(447,"h2"),n(448,"\u{1F4F3} Shake"),e(),t(449,"p"),n(450,"Attention-grabbing shake effect for notifications or alerts."),e()(),t(451,"demo-grid")(452,"demo-card")(453,"preview-box",2)(454,"app-animate-on-scroll",90)(455,"div",4)(456,"h3",5),n(457,"Shake"),e(),t(458,"p",6),n(459,"Attention-grabbing shake effect"),e()()()(),l(460,"ui-code-preview",7),e()()(),t(461,"demo-section",91)(462,"section-header")(463,"h2"),n(464,"\u{1F501} Repeat Animation"),e(),t(465,"p"),n(466,"Animation repeats every time element enters viewport."),e()(),t(467,"demo-grid")(468,"demo-card")(469,"preview-box",2)(470,"app-animate-on-scroll",92)(471,"div",4)(472,"h3",5),n(473,"Repeat"),e(),t(474,"p",6),n(475,"Animation repeats on every scroll"),e()()()(),l(476,"ui-code-preview",7),e()()(),t(477,"demo-section",93)(478,"section-header")(479,"h2"),n(480,"\u{1FA9E} Mirror Effect"),e(),t(481,"p"),n(482,"Animation reverses when scrolling up."),e()(),t(483,"demo-grid")(484,"demo-card")(485,"preview-box",2)(486,"app-animate-on-scroll",94)(487,"div",4)(488,"h3",5),n(489,"Mirror"),e(),t(490,"p",6),n(491,"Reverses when scrolling up"),e()()()(),l(492,"ui-code-preview",7),e()()(),t(493,"demo-section",95)(494,"section-header")(495,"h2"),n(496,"\u{1F4CA} Custom Threshold"),e(),t(497,"p"),n(498,"Trigger animation at 50% visibility instead of default."),e()(),t(499,"demo-grid")(500,"demo-card")(501,"preview-box",2)(502,"app-animate-on-scroll",96)(503,"div",4)(504,"h3",5),n(505,"Custom Threshold"),e(),t(506,"p",6),n(507,"Triggers at 50% visibility"),e()()()(),l(508,"ui-code-preview",7),e()()(),t(509,"demo-section",97)(510,"section-header")(511,"h2"),n(512,"\u23F1\uFE0F Delay Timing"),e(),t(513,"p"),n(514,"500ms delay before animation starts."),e()(),t(515,"demo-grid")(516,"demo-card")(517,"preview-box",2)(518,"app-animate-on-scroll",98)(519,"div",4)(520,"h3",5),n(521,"Delayed"),e(),t(522,"p",6),n(523,"500ms delay before animation"),e()()()(),l(524,"ui-code-preview",7),e()()(),t(525,"demo-section",99)(526,"section-header")(527,"h2"),n(528,"\u23F3 Duration Control"),e(),t(529,"p"),n(530,"Extended 2 second duration for dramatic slow-motion effect."),e()(),t(531,"demo-grid")(532,"demo-card")(533,"preview-box",2)(534,"app-animate-on-scroll",100)(535,"div",4)(536,"h3",5),n(537,"Slow Motion"),e(),t(538,"p",6),n(539,"2 second duration for dramatic effect"),e()()()(),l(540,"ui-code-preview",7),e()()(),t(541,"demo-section",101)(542,"section-header")(543,"h2"),n(544,"\u{1F3A8} Combined Effects"),e(),t(545,"p"),n(546,"Combines blur, 3D perspective, rotation, scale, and elastic easing."),e()(),t(547,"demo-grid")(548,"demo-card")(549,"preview-box",36)(550,"app-animate-on-scroll",102)(551,"div",103)(552,"h3",5),n(553,"Combined Effects"),e(),t(554,"p",32),n(555,"Blur + 3D + Scale + Elastic Easing"),e()()()(),l(556,"ui-code-preview",7),e()()()(),t(557,"div",104),l(558,"app-animate-on-scroll-playground"),e(),t(559,"div",105),l(560,"app-component-documentation",106),e()()),h&2&&(a(17),r("htmlCode",i.fadeInBasicCode()),a(16),r("htmlCode",i.fadeOutBasicCode()),a(16),r("htmlCode",i.slideUpCode()),a(16),r("htmlCode",i.slideDownCode()),a(16),r("htmlCode",i.slideLeftCode()),a(16),r("htmlCode",i.slideRightCode()),a(16),r("htmlCode",i.zoomInCode()),a(16),r("htmlCode",i.zoomOutCode()),a(16),r("htmlCode",i.bounceCode()),a(16),r("htmlCode",i.flipCode()),a(16),r("htmlCode",i.blurEntranceCode()),a(16),r("htmlCode",i.glassmorphicBlurCode()),a(16),r("htmlCode",i.elasticEasingCode()),a(16),r("htmlCode",i.flipIn3dCode()),a(16),r("htmlCode",i.rotate3dCode()),a(16),r("htmlCode",i.perspectiveDepthCode()),a(31),r("htmlCode",i.staggerChildrenCode()),a(21),r("htmlCode",i.staggerFastCode()),a(20),r("htmlCode",i.staggerSlowCode()),a(30),r("htmlCode",i.scrollTriggerCode()),a(18),r("htmlCode",i.scrollScrubbingCode()),a(14),r("htmlCode",i.scrubRotateCode()),a(14),r("htmlCode",i.scrubScaleCode()),a(13),r("htmlCode",i.textCharCode()),a(13),r("htmlCode",i.textWordCode()),a(13),r("htmlCode",i.textStaggerCode()),a(16),r("htmlCode",i.shakeAnimationCode()),a(16),r("htmlCode",i.repeatAnimationCode()),a(16),r("htmlCode",i.mirrorEffectCode()),a(16),r("htmlCode",i.customThresholdCode()),a(16),r("htmlCode",i.delayTimingCode()),a(16),r("htmlCode",i.durationControlCode()),a(16),r("htmlCode",i.combinedEffectsCode()))},dependencies:[v,C,k,P,M],styles:['.demo-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;overflow:hidden;box-sizing:border-box;max-width:90%;margin:0 auto;padding:var(--space-2xl) var(--space-xl);animation:fadeIn .5s cubic-bezier(.16,1,.3,1) forwards}.demo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.75rem;font-weight:800;background:linear-gradient(135deg,var(--text-primary) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:var(--space-sm);display:flex;align-items:center;gap:var(--space-md);letter-spacing:-.02em;line-height:1.2}.intro-text[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin-bottom:var(--space-2xl);line-height:1.7;font-weight:400}.variants-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:var(--space-sm);padding:var(--space-sm) var(--space-xs) var(--space-md) var(--space-xs);margin-bottom:var(--space-xl);scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--border-strong);border-radius:var(--radius-full);transition:background-color var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--text-tertiary)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]{flex-shrink:0;--ui-button-radius: var(--radius-full);transition:transform var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]::part(button){border-radius:var(--radius-full);font-weight:600;font-size:.875rem;padding:.625rem 1.25rem;color:#fff;white-space:nowrap;box-shadow:var(--shadow-sm);transition:all var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]::part(button):hover{box-shadow:var(--shadow-md)}.demo-section[_ngcontent-%COMP%]{margin-bottom:var(--space-2xl);scroll-margin-top:var(--space-xl);animation:slideInLeft .6s cubic-bezier(.16,1,.3,1) forwards;animation-delay:.1s;opacity:0}.section-header[_ngcontent-%COMP%]{margin-bottom:var(--space-xl)}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.875rem;font-weight:700;color:var(--text-primary);margin-bottom:var(--space-sm);letter-spacing:-.01em;line-height:1.3}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:var(--text-secondary);margin:0;line-height:1.6;max-width:700px}.demo-card[_ngcontent-%COMP%]{background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:var(--space-2xl);display:flex;flex-direction:column;gap:var(--space-2xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth);position:relative}.demo-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:var(--gradient-primary);opacity:0;transition:opacity var(--transition-smooth)}.demo-card[_ngcontent-%COMP%]:hover{box-shadow:var(--shadow-lg);border-color:var(--border-strong);transform:translateY(-2px)}.demo-card[_ngcontent-%COMP%]:hover:before{opacity:1}.pane-examples[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-examples[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-docs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-docs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%;min-height:0;box-sizing:border-box}.examples-split-layout[_ngcontent-%COMP%]{display:flex;gap:1rem;position:relative;height:100%;box-sizing:border-box;overflow:hidden;padding:1rem;background:#f4faf6}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]{width:226px;flex-shrink:0;height:100%;min-height:0;overflow-y:auto;overflow-x:hidden;background:#fff;padding:1.5rem 1rem;border-radius:16px;border:1px solid #d1fae5;box-shadow:0 2px 12px #16a34a12;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#16a34a transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#16a34a;border-radius:4px}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#15803d}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:#16a34a;margin-bottom:1rem;text-transform:uppercase;letter-spacing:.08em;padding-left:.5rem}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]   ui-anchor[_ngcontent-%COMP%]{--primary-color: #16a34a;--text-secondary: #4b5563;--hover-bg: #f0fdf4;--active-bg: #e6f8ec;--anchor-active-color: #16a34a}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]{flex:1;min-width:0;height:100%;overflow-y:auto;overflow-x:hidden;padding:2rem;background:#fff;border-radius:16px;border:1px solid #e2e8f0;box-shadow:0 2px 12px #0000000a;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#16a34a transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#16a34a;border-radius:4px}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#15803d}.demo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:var(--space-xl);margin-bottom:var(--space-xl)}.demo-grid.col-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.demo-grid.col-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.demo-flex-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--space-md);align-items:center}.demo-flex-wrap.column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.preview-box[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:var(--space-xl);display:flex;flex-direction:column;align-items:stretch;justify-content:center;min-height:160px;position:relative}.preview-box.glass-bg[_ngcontent-%COMP%]{background:var(--gradient-glass);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.full-width[_ngcontent-%COMP%]{width:100%!important}.preview-box[_ngcontent-%COMP%]{min-height:200px}.preview-box.scrollable[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto;align-items:flex-start}.animated-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#fff;padding:40px;border-radius:12px;font-size:1.2rem;font-weight:600;text-align:center;box-shadow:var(--shadow-lg)}']})}return b})();export{$ as SetAnimateOnScrollDemoComponent};
