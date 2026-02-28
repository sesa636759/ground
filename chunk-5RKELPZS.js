import"./chunk-L77FFNSL.js";import{a as ie}from"./chunk-UJ3R2BE4.js";import{a as ee}from"./chunk-TN3HSCQR.js";import{a as ae}from"./chunk-IQUGXYMD.js";import{a as Z}from"./chunk-CV6AHVA2.js";import{a as X}from"./chunk-R2YD6KR3.js";import{a as K}from"./chunk-UNFGGHML.js";import{a as $}from"./chunk-WEU4O2QF.js";import"./chunk-WNRMHU5R.js";import{a as Y}from"./chunk-HH4MHJTR.js";import"./chunk-6HCD6EDC.js";import{d as Q,g as q,q as T}from"./chunk-ZNAQIODT.js";import"./chunk-QQX6WBI3.js";import{Ca as o,Db as _,Eb as M,Fb as S,Ka as B,Kb as i,Lb as P,Mb as g,Nb as f,Ob as D,Pa as A,Pb as O,R as x,S as w,Sa as W,Za as z,ca as l,db as r,dc as J,eb as a,fa as U,fb as e,gb as d,kb as V,mb as y,rb as R,sb as H,tb as G,vc as N,yb as t}from"./chunk-42JY3SOC.js";import"./chunk-RINRXYSM.js";var ge=["sidebarElement"],fe=()=>["brand"],ne=(()=>{class s{cd;sidebarElement;pgConfig={brandName:"Set UI Lib",selectedId:"dashboard",accentColor:"#6366f1",userName:"John Doe",userRole:"Administrator",userAvatar:"https://i.pravatar.cc/100?img=11",collapsed:!1,theme:"light"};pgAccordionItems=[{id:"brand",title:"Brand & Identity",icon:"\u{1F3E2}"},{id:"user",title:"User Profile",icon:"\u{1F464}"},{id:"style",title:"Visual Style",icon:"\u{1F3A8}"}];themeOptions=[{label:"Light",value:"light"},{label:"Dark",value:"dark"}];accentColorOptions=[{label:"Indigo",value:"#6366f1"},{label:"Blue",value:"#3b82f6"},{label:"Green",value:"#10b981"},{label:"Teal",value:"#14b8a6"},{label:"Purple",value:"#8b5cf6"},{label:"Pink",value:"#ec4899"},{label:"Orange",value:"#f59e0b"},{label:"Red",value:"#ef4444"}];sidebarItems=[{id:"dashboard",label:"Dashboard",icon:"fas fa-home"},{id:"analytics",label:"Analytics",icon:"fas fa-chart-line",badge:3},{id:"projects",label:"Projects",icon:"fas fa-folder",badge:12,children:[{id:"active",label:"Active Projects",icon:"fas fa-circle",badge:8},{id:"paused",label:"Paused",icon:"fas fa-pause-circle",badge:2},{id:"completed",label:"Completed",icon:"fas fa-check-circle",badge:2}]},{id:"tasks",label:"Tasks",icon:"fas fa-tasks",badge:15,children:[{id:"active-tasks",label:"Active",icon:"fas fa-play",badge:10},{id:"pending",label:"Pending",icon:"fas fa-clock",badge:5}]},{id:"calendar",label:"Calendar",icon:"fas fa-calendar"},{id:"messages",label:"Messages",icon:"fas fa-envelope",badge:"New"},{id:"team",label:"Team",icon:"fas fa-users"},{id:"settings",label:"Settings",icon:"fas fa-cog",children:[{id:"profile",label:"Profile",icon:"fas fa-user"},{id:"security",label:"Security",icon:"fas fa-lock"},{id:"notifications",label:"Notifications",icon:"fas fa-bell"}]},{id:"help",label:"Help & Support",icon:"fas fa-question-circle"}];sidebarItemsJson=JSON.stringify(this.sidebarItems);eventLog=l([]);generatedCodeSignal=l("");showCode=!0;constructor(p){this.cd=p}ngOnInit(){}ngAfterViewInit(){this.updateConfig()}refreshCode(){setTimeout(()=>{this.showCode=!1,this.cd.detectChanges(),this.showCode=!0,this.cd.detectChanges()},0)}getCleanFormatedDom(){if(!this.sidebarElement)return"";let p=ie(this.sidebarElement.nativeElement,"app-modern-sidebar");return p=p.replace("></app-modern-sidebar>",`
  [items]="sidebarItems"
></app-modern-sidebar>`),p}updateConfig(){setTimeout(()=>{this.generatedCodeSignal.set(this.getCleanFormatedDom()),this.refreshCode()},50)}logEvent(p){let m=new Date().toLocaleTimeString();this.eventLog.update(n=>[`[${m}] ${p}`,...n.slice(0,9)])}onItemSelected(p){let m=p.detail;this.logEvent(`Item selected: ${m.label} (${m.id})`),this.pgConfig.selectedId=m.id,this.updateConfig()}onSidebarToggled(p){let m=p.detail,n=typeof m=="boolean"?m:m.collapsed;this.logEvent(`Sidebar ${n?"collapsed":"expanded"}`),this.pgConfig.collapsed=n,this.updateConfig()}onProfileClick(){this.logEvent("Profile clicked")}copyCode(){navigator.clipboard.writeText(this.generatedCodeSignal())}resetConfig(){this.pgConfig={brandName:"Set UI Lib",selectedId:"dashboard",accentColor:"#6366f1",userName:"John Doe",userRole:"Administrator",userAvatar:"https://i.pravatar.cc/100?img=11",collapsed:!1,theme:"light"},this.updateConfig()}static \u0275fac=function(m){return new(m||s)(B(J))};static \u0275cmp=A({type:s,selectors:[["app-modern-sidebar-playground"]],viewQuery:function(m,n){if(m&1&&R(ge,5),m&2){let C;H(C=G())&&(n.sidebarElement=C.first)}},decls:44,vars:22,consts:[["sidebarElement",""],[3,"reset","accordionItems","defaultOpen","code"],["slot","content-brand",1,"control-grid",2,"padding","16px"],[1,"control-group"],["type","text",3,"ngModelChange","ngModel"],["slot","content-user",1,"control-grid",2,"padding","16px"],["slot","content-style",1,"control-grid",2,"padding","16px"],[3,"ngModelChange","ngModel","options"],[1,"checkbox-group",2,"margin-top","16px"],[1,"checkbox-item"],[3,"ngModelChange","ngModel"],["preview","",1,"sidebar-wrapper"],[2,"display","block","height","100%",3,"itemSelected","sidebarToggled","profileClicked","items"],["preview","",1,"content-area-preview"],[1,"content-header-sim"],[1,"content-cards"],[1,"sim-card"]],template:function(m,n){if(m&1){let C=V();a(0,"app-playground",1),y("reset",function(){return n.resetConfig()}),a(1,"div",2)(2,"div",3)(3,"label"),t(4,"Brand Name"),e(),a(5,"app-input",4),S("ngModelChange",function(c){return x(C),M(n.pgConfig.brandName,c)||(n.pgConfig.brandName=c),w(c)}),y("ngModelChange",function(){return n.updateConfig()}),e()()(),a(6,"div",5)(7,"div",3)(8,"label"),t(9,"User Name"),e(),a(10,"app-input",4),S("ngModelChange",function(c){return x(C),M(n.pgConfig.userName,c)||(n.pgConfig.userName=c),w(c)}),y("ngModelChange",function(){return n.updateConfig()}),e()(),a(11,"div",3)(12,"label"),t(13,"User Role"),e(),a(14,"app-input",4),S("ngModelChange",function(c){return x(C),M(n.pgConfig.userRole,c)||(n.pgConfig.userRole=c),w(c)}),y("ngModelChange",function(){return n.updateConfig()}),e()(),a(15,"div",3)(16,"label"),t(17,"User Avatar URL"),e(),a(18,"app-input",4),S("ngModelChange",function(c){return x(C),M(n.pgConfig.userAvatar,c)||(n.pgConfig.userAvatar=c),w(c)}),y("ngModelChange",function(){return n.updateConfig()}),e()()(),a(19,"div",6)(20,"div",3)(21,"label"),t(22,"Theme"),e(),a(23,"ui-dropdown",7),S("ngModelChange",function(c){return x(C),M(n.pgConfig.theme,c)||(n.pgConfig.theme=c),w(c)}),y("ngModelChange",function(){return n.updateConfig()}),e()(),a(24,"div",3)(25,"label"),t(26,"Accent Color"),e(),a(27,"ui-dropdown",7),S("ngModelChange",function(c){return x(C),M(n.pgConfig.accentColor,c)||(n.pgConfig.accentColor=c),w(c)}),y("ngModelChange",function(){return n.updateConfig()}),e()(),a(28,"div",8)(29,"label",9)(30,"app-checkbox",10),S("ngModelChange",function(c){return x(C),M(n.pgConfig.collapsed,c)||(n.pgConfig.collapsed=c),w(c)}),y("ngModelChange",function(){return n.updateConfig()}),e(),t(31," Collapsed "),e()()(),a(32,"div",11)(33,"app-modern-sidebar",12,0),y("itemSelected",function(c){return n.onItemSelected(c)})("sidebarToggled",function(c){return n.onSidebarToggled(c)})("profileClicked",function(){return n.onProfileClick()}),e()(),a(35,"div",13)(36,"div",14)(37,"h3"),t(38,"Main Content Area"),e(),a(39,"p"),t(40,"Interact with the sidebar to see events logged in the Events tab."),e()(),a(41,"div",15),d(42,"div",16)(43,"div",16),e()()()}m&2&&(r("accordionItems",n.pgAccordionItems)("defaultOpen",i(21,fe))("code",n.generatedCodeSignal()),o(5),_("ngModel",n.pgConfig.brandName),o(5),_("ngModel",n.pgConfig.userName),o(4),_("ngModel",n.pgConfig.userRole),o(4),_("ngModel",n.pgConfig.userAvatar),o(5),_("ngModel",n.pgConfig.theme),r("options",n.themeOptions),o(4),_("ngModel",n.pgConfig.accentColor),r("options",n.accentColorOptions),o(3),_("ngModel",n.pgConfig.collapsed),o(3),r("items",n.sidebarItemsJson),z("brand-name",n.pgConfig.brandName)("selected-id",n.pgConfig.selectedId)("accent-color",n.pgConfig.accentColor)("user-name",n.pgConfig.userName)("user-role",n.pgConfig.userRole)("user-avatar",n.pgConfig.userAvatar)("collapsed",n.pgConfig.collapsed?"true":null)("theme",n.pgConfig.theme))},dependencies:[N,T,Q,q,K,X,Z],styles:[`.playground-layout{display:flex;gap:var(--space-2xl);height:100%}@media(max-width:1200px){.playground-layout{flex-direction:column}}.playground-controls{flex:1;background:var(--surface-elevated);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-controls:hover{box-shadow:var(--shadow-md);border-color:var(--border-strong)}.playground-controls .control-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-lg);margin-bottom:var(--space-xl)}.playground-controls .control-group{display:flex;flex-direction:column;gap:var(--space-xs)}.playground-controls .control-group label{font-size:.875rem;font-weight:600;color:var(--text-secondary);letter-spacing:-.01em}.playground-controls .control-group select,.playground-controls .control-group input[type=text],.playground-controls .control-group input[type=number],.playground-controls .control-group app-input,.playground-controls .control-group ui-dropdown{width:100%;display:block}.playground-controls .control-group app-input{min-height:40px;box-sizing:border-box}.playground-controls .control-group select,.playground-controls .control-group input[type=text],.playground-controls .control-group input[type=number]{padding:var(--space-sm) var(--space-md);background:var(--surface-1);border:1px solid var(--border-color);border-radius:var(--radius-md);color:var(--text-primary);font-size:.875rem;transition:all var(--transition-fast)}.playground-controls .control-group select:focus,.playground-controls .control-group input[type=text]:focus,.playground-controls .control-group input[type=number]:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-glow)}.playground-controls .checkbox-grid,.playground-controls .checkbox-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:var(--space-md)}.playground-controls .checkbox-grid .checkbox-item,.playground-controls .checkbox-group .checkbox-item{display:flex;align-items:center;gap:var(--space-sm);font-size:.9rem;cursor:pointer;color:var(--text-primary)}.playground-controls .checkbox-grid .checkbox-item app-checkbox,.playground-controls .checkbox-group .checkbox-item app-checkbox{display:inline-flex}.playground-preview{flex:1.5;display:flex;flex-direction:column;gap:var(--space-xl);min-width:0;min-height:300px;background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:var(--space-xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-preview .event-log,.playground-preview .event-log-container{background:var(--surface-2);padding:var(--space-md) var(--space-lg);border-radius:var(--radius-lg);font-family:var(--font-mono);font-size:.85rem;border-left:4px solid var(--primary);color:var(--text-primary);box-shadow:var(--shadow-inner);max-height:150px;overflow-y:auto}.playground-preview .event-log strong,.playground-preview .event-log-container strong{display:block;margin-bottom:var(--space-xs);color:var(--text-secondary);font-size:.75rem;text-transform:uppercase;letter-spacing:.05em}.playground-preview .event-log .log-items,.playground-preview .event-log-container .log-items{max-height:100px;overflow-y:auto}.playground-preview .event-log .log-item,.playground-preview .event-log-container .log-item{padding:.25rem 0;border-bottom:1px solid var(--border-light)}.playground-preview .event-log .log-item:last-child,.playground-preview .event-log-container .log-item:last-child{border-bottom:none}.playground-preview .preview-stage{min-height:300px;background:var(--surface-elevated);border-radius:var(--radius-2xl);border:2px dashed var(--border-color);display:flex;justify-content:center;align-items:center;padding:var(--space-2xl);position:relative;box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-preview .preview-stage:hover{border-color:var(--border-strong);box-shadow:var(--shadow-md)}.playground-preview ui-code-preview{width:100%;border-radius:var(--radius-xl);overflow:hidden;border:1px solid var(--border-color);box-shadow:var(--shadow-md)}.custom-slot-content{padding:var(--space-lg);display:flex;flex-direction:column;gap:var(--space-md);min-width:250px}.custom-slot-content p{margin:0;font-weight:700;font-size:.95rem}.custom-slot-content app-input{width:100%}.custom-slot-content .slot-actions{display:flex;gap:var(--space-sm);margin-top:var(--space-sm)}.custom-slot-content .slot-actions button,.custom-slot-content .slot-actions ui-button{flex:1}.custom-slot-content .slot-actions .btn-confirm{background:var(--primary);color:#fff;border:none}.custom-slot-content .slot-actions .btn-cancel{background:var(--surface-2);border:1px solid var(--border-color);color:var(--text-primary)}.section-title{font-size:.95rem;font-weight:700;color:var(--text-primary);margin:0 0 16px;padding-bottom:8px;border-bottom:2px solid var(--border-color)}.section-title:not(:first-child){margin-top:24px}.playground-controls .control-grid .full-width{grid-column:1/-1}.playground-preview .preview-stage{display:flex;height:600px;overflow:visible;padding:0;border-radius:var(--radius-xl);background:var(--surface-1);position:relative;border:1px solid var(--border-color)}.playground-preview .preview-stage .sidebar-wrapper{flex:0 0 auto;height:100%;border-right:1px solid var(--border-color);position:relative;z-index:20}.playground-preview .preview-stage .content-area-preview{flex:1;padding:40px;overflow-y:auto;background:var(--bg-primary)}.playground-preview .preview-stage .content-area-preview .content-header-sim{margin-bottom:30px}.playground-preview .preview-stage .content-area-preview .content-header-sim h3{margin:0 0 8px;color:var(--text-primary)}.playground-preview .preview-stage .content-area-preview .content-header-sim p{margin:0;color:var(--text-secondary)}.playground-preview .preview-stage .content-area-preview .sim-card{height:120px;background:var(--surface-2);border-radius:16px;margin-bottom:20px;border:1px dashed var(--border-color);opacity:.6}
`],encapsulation:2})}return s})();var u=()=>({id:"dashboard",label:"Dashboard",icon:"fas fa-home"}),he=()=>({id:"analytics",label:"Analytics",icon:"fas fa-chart-bar"}),k=()=>({id:"settings",label:"Settings",icon:"fas fa-cog"}),v=(s,F,p)=>[s,F,p],te=()=>({id:"home",label:"Home",icon:"fas fa-home"}),oe=()=>({id:"about",label:"About",icon:"fas fa-info-circle"}),ve=()=>({id:"contact",label:"Contact",icon:"fas fa-envelope"}),j=()=>({id:"projects",label:"Projects",icon:"fas fa-folder"}),re=()=>({id:"analytics",label:"Analytics",icon:"fas fa-chart-line"}),I=()=>({id:"team",label:"Team",icon:"fas fa-users"}),L=(s,F,p,m,n)=>[s,F,p,m,n],Ce=()=>({id:"active",label:"Active Projects",icon:"fas fa-circle"}),ye=()=>({id:"archived",label:"Archived",icon:"fas fa-archive"}),h=(s,F)=>[s,F],xe=s=>({id:"projects",label:"Projects",icon:"fas fa-folder",children:s}),de=()=>({id:"account",label:"Account",icon:"fas fa-user"}),le=()=>({id:"security",label:"Security",icon:"fas fa-lock"}),se=()=>({id:"notifications",label:"Notifications",icon:"fas fa-bell"}),ce=()=>({id:"privacy",label:"Privacy",icon:"fas fa-shield-alt"}),we=s=>({id:"preferences",label:"Preferences",icon:"fas fa-sliders-h",children:s}),_e=s=>({id:"settings",label:"Settings",icon:"fas fa-cog",children:s}),Me=()=>({id:"messages",label:"Messages",icon:"fas fa-envelope",badge:12}),Se=()=>({id:"notifications",label:"Notifications",icon:"fas fa-bell",badge:5}),Pe=()=>({id:"tasks",label:"Tasks",icon:"fas fa-tasks",badge:8}),E=(s,F,p,m)=>[s,F,p,m],pe=()=>({id:"inbox",label:"Inbox",icon:"fas fa-inbox",badge:42}),De=()=>({id:"updates",label:"Updates",icon:"fas fa-sync",badge:"New"}),Fe=()=>({id:"alerts",label:"Alerts",icon:"fas fa-exclamation-triangle",badge:"!"}),Ee=()=>({id:"archive",label:"Archive",icon:"fas fa-archive"}),ke=()=>({id:"projects",label:"Projects",icon:"fas fa-folder",badge:5}),Ae=()=>({id:"profile",label:"Profile",icon:"fas fa-user"}),Oe=()=>({id:"explore",label:"Explore",icon:"fas fa-compass"}),Ne=()=>({id:"projects",label:"Projects",icon:"fas fa-folder",badge:8}),Te=()=>({id:"terminal",label:"Terminal",icon:"fas fa-terminal"}),Ie=()=>({id:"data",label:"Data",icon:"fas fa-database"}),je=()=>({id:"eco",label:"Eco Dashboard",icon:"fas fa-leaf"}),Le=()=>({id:"creative",label:"Creative",icon:"fas fa-palette"}),Ue=()=>({id:"alerts",label:"Alerts",icon:"fas fa-bell",badge:3}),Be=()=>({id:"favorites",label:"Favorites",icon:"fas fa-heart"}),We=()=>({id:"launch",label:"Launch",icon:"fas fa-rocket"}),ze=()=>({id:"dashboard",label:"Dashboard",icon:"fas fa-tachometer-alt"}),Ve=()=>({id:"performance",label:"Performance",icon:"fas fa-bolt"}),Re=()=>({id:"chart",label:"Charts",icon:"fas fa-chart-pie"}),He=()=>({id:"users",label:"Users",icon:"fas fa-users"}),Ge=()=>({id:"dashboard",label:"Dashboard",icon:"fas fa-th-large"}),Je=()=>({id:"widgets",label:"Widgets",icon:"fas fa-cubes"}),Qe=()=>({id:"tools",label:"Tools",icon:"fas fa-wrench"}),qe=()=>({id:"analytics",label:"Analytics",icon:"fas fa-chart-line",badge:3}),Ye=()=>({id:"active-projects",label:"Active",icon:"fas fa-circle",badge:8}),Ke=()=>({id:"completed",label:"Completed",icon:"fas fa-check-circle"}),Xe=s=>({id:"projects",label:"Projects",icon:"fas fa-folder",badge:12,children:s}),Ze=()=>({id:"active-tasks",label:"Active",icon:"fas fa-play",badge:10}),$e=()=>({id:"pending",label:"Pending",icon:"fas fa-clock",badge:5}),ea=s=>({id:"tasks",label:"Tasks",icon:"fas fa-tasks",badge:15,children:s}),me=()=>({id:"overview",label:"Overview",icon:"fas fa-chart-pie"}),aa=()=>({id:"metrics",label:"Metrics",icon:"fas fa-tachometer-alt"}),ue=()=>({id:"reports",label:"Reports",icon:"fas fa-file-alt"}),ia=()=>({id:"users",label:"All Users",icon:"fas fa-users"}),na=()=>({id:"roles",label:"Roles & Permissions",icon:"fas fa-key"}),ta=s=>({id:"user-mgmt",label:"User Management",icon:"fas fa-users-cog",children:s}),oa=()=>({id:"system",label:"System",icon:"fas fa-server"}),ra=()=>({id:"overview",label:"Overview",icon:"fas fa-chart-line"}),da=()=>({id:"active",label:"Active",icon:"fas fa-play",badge:8}),la=()=>({id:"paused",label:"Paused",icon:"fas fa-pause",badge:2}),sa=()=>({id:"completed",label:"Completed",icon:"fas fa-check"}),ca=s=>({id:"projects",label:"Projects",icon:"fas fa-folder-open",badge:12,children:s}),pa=()=>({id:"direct",label:"Direct Messages",icon:"fas fa-comment",badge:12}),ma=()=>({id:"channels",label:"Channels",icon:"fas fa-hashtag",badge:5}),ua=()=>({id:"mentions",label:"Mentions",icon:"fas fa-at",badge:"New"}),ba=()=>({id:"dashboard",label:"Dashboard",icon:"fas fa-chart-line"}),ga=()=>({id:"orders",label:"Orders",icon:"fas fa-shopping-cart",badge:28}),fa=()=>({id:"products",label:"Products",icon:"fas fa-box"}),ha=()=>({id:"customers",label:"Customers",icon:"fas fa-users"}),va=()=>({id:"reports",label:"Reports",icon:"fas fa-file-invoice-dollar"}),Ca=()=>({id:"realtime",label:"Real-time",icon:"fas fa-bolt",badge:"Live"}),ya=()=>({id:"trends",label:"Trends",icon:"fas fa-chart-line"}),xa=()=>({id:"advanced",label:"Advanced",icon:"fas fa-sliders-h"}),Ya=(()=>{class s extends ee{variants=[{id:"basic-default",title:"Basic Default",icon:"\u{1F4CB}"},{id:"minimal-items",title:"Minimal Items",icon:"\u26A1"},{id:"collapsed-compact",title:"Collapsed/Compact",icon:"\u25C0\uFE0F"},{id:"expanded-full",title:"Expanded Full",icon:"\u25B6\uFE0F"},{id:"nested-navigation",title:"Nested Navigation",icon:"\u{1F500}"},{id:"nested-deep",title:"Deep Nesting (3 Levels)",icon:"\u{1F3D7}\uFE0F"},{id:"with-badges",title:"With Badges",icon:"\u{1F514}"},{id:"badges-mixed",title:"Mixed Badge Types",icon:"\u{1F522}"},{id:"user-profile",title:"User Profile",icon:"\u{1F464}"},{id:"user-with-avatar",title:"User with Avatar",icon:"\u{1F5BC}\uFE0F"},{id:"no-user-profile",title:"No User Profile",icon:"\u2B55"},{id:"theme-light",title:"Light Theme",icon:"\u2600\uFE0F"},{id:"theme-dark",title:"Dark Theme",icon:"\u{1F319}"},{id:"accent-indigo",title:"Accent: Indigo",icon:"\u{1F535}"},{id:"accent-green",title:"Accent: Green",icon:"\u{1F7E2}"},{id:"accent-purple",title:"Accent: Purple",icon:"\u{1F7E3}"},{id:"accent-orange",title:"Accent: Orange",icon:"\u{1F7E0}"},{id:"accent-pink",title:"Accent: Pink",icon:"\u{1FA77}"},{id:"brand-custom",title:"Custom Branding",icon:"\u{1F3F7}\uFE0F"},{id:"brand-icon",title:"Brand with Icon",icon:"\u{1F3A8}"},{id:"icons-fontawesome",title:"FontAwesome Icons",icon:"\u{1F3AF}"},{id:"icons-custom",title:"Custom Icons",icon:"\u2728"},{id:"full-featured",title:"Full Featured",icon:"\u{1F48E}"},{id:"dashboard-layout",title:"Dashboard Layout",icon:"\u{1F4CA}"},{id:"admin-panel",title:"Admin Panel",icon:"\u2699\uFE0F"},{id:"project-management",title:"Project Management",icon:"\u{1F4C1}"},{id:"messaging-app",title:"Messaging App",icon:"\u{1F4AC}"},{id:"ecommerce",title:"E-commerce Admin",icon:"\u{1F6D2}"},{id:"analytics-dashboard",title:"Analytics Dashboard",icon:"\u{1F4C8}"},{id:"settings-menu",title:"Settings Menu",icon:"\u{1F527}"}];get exampleVariants(){return this.variants}anchorLinks=JSON.stringify(this.variants.map(p=>({id:p.id,label:p.title,target:p.id,icon:p.icon})));ngOnInit(){}basicDefaultCode=l(`<app-modern-sidebar
  brand-name="My App"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-bar" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);minimalItemsCode=l(`<app-modern-sidebar
  brand-name="Simple App"
  selected-id="home"
  [items]='[
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "about", label: "About", icon: "fas fa-info-circle" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope" }
  ]'>
</app-modern-sidebar>`);collapsedCompactCode=l(`<app-modern-sidebar
  brand-name="Compact"
  selected-id="dashboard"
  collapsed="true"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);expandedFullCode=l(`<app-modern-sidebar
  brand-name="Full Width"
  selected-id="dashboard"
  collapsed="false"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-line" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "team", label: "Team", icon: "fas fa-users" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);nestedNavigationCode=l(`<app-modern-sidebar
  brand-name="Project Hub"
  selected-id="active"
  accent-color="#10b981"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    {
      id: "projects",
      label: "Projects",
      icon: "fas fa-folder",
      children: [
        { id: "active", label: "Active Projects", icon: "fas fa-circle" },
        { id: "archived", label: "Archived", icon: "fas fa-archive" }
      ]
    }
  ]'>
</app-modern-sidebar>`);nestedDeepCode=l(`<app-modern-sidebar
  brand-name="Deep Nesting"
  selected-id="notifications"
  accent-color="#ec4899"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    {
      id: "settings",
      label: "Settings",
      icon: "fas fa-cog",
      children: [
        { id: "account", label: "Account", icon: "fas fa-user" },
        { id: "security", label: "Security", icon: "fas fa-lock" },
        {
          id: "preferences",
          label: "Preferences",
          icon: "fas fa-sliders-h",
          children: [
            { id: "notifications", label: "Notifications", icon: "fas fa-bell" },
            { id: "privacy", label: "Privacy", icon: "fas fa-shield-alt" }
          ]
        }
      ]
    }
  ]'>
</app-modern-sidebar>`);withBadgesCode=l(`<app-modern-sidebar
  brand-name="Notification Hub"
  selected-id="messages"
  accent-color="#f59e0b"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "messages", label: "Messages", icon: "fas fa-envelope", badge: 12 },
    { id: "notifications", label: "Notifications", icon: "fas fa-bell", badge: 5 },
    { id: "tasks", label: "Tasks", icon: "fas fa-tasks", badge: 8 }
  ]'>
</app-modern-sidebar>`);badgesMixedCode=l(`<app-modern-sidebar
  brand-name="Mixed Badges"
  selected-id="inbox"
  accent-color="#3b82f6"
  [items]='[
    { id: "inbox", label: "Inbox", icon: "fas fa-inbox", badge: 42 },
    { id: "updates", label: "Updates", icon: "fas fa-sync", badge: "New" },
    { id: "alerts", label: "Alerts", icon: "fas fa-exclamation-triangle", badge: "!" },
    { id: "archive", label: "Archive", icon: "fas fa-archive" }
  ]'>
</app-modern-sidebar>`);userProfileCode=l(`<app-modern-sidebar
  brand-name="Enterprise App"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  user-name="Sarah Johnson"
  user-role="Product Manager"
  user-avatar="https://i.pravatar.cc/100?img=44"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "team", label: "Team", icon: "fas fa-users" }
  ]'>
</app-modern-sidebar>`);userWithAvatarCode=l(`<app-modern-sidebar
  brand-name="Team Hub"
  selected-id="projects"
  accent-color="#14b8a6"
  user-name="Alex Chen"
  user-role="Senior Developer"
  user-avatar="https://i.pravatar.cc/100?img=33"
  [items]='[
    { id: "projects", label: "Projects", icon: "fas fa-folder", badge: 5 },
    { id: "team", label: "Team", icon: "fas fa-users" },
    { id: "profile", label: "Profile", icon: "fas fa-user" }
  ]'>
</app-modern-sidebar>`);noUserProfileCode=l(`<app-modern-sidebar
  brand-name="Public App"
  selected-id="home"
  accent-color="#6366f1"
  [items]='[
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "explore", label: "Explore", icon: "fas fa-compass" },
    { id: "about", label: "About", icon: "fas fa-info-circle" }
  ]'>
</app-modern-sidebar>`);themeLightCode=l(`<app-modern-sidebar
  brand-name="Light Theme App"
  selected-id="dashboard"
  accent-color="#06b6d4"
  theme="light"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-line" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);themeDarkCode=l(`<app-modern-sidebar
  brand-name="Dark Mode App"
  selected-id="dashboard"
  accent-color="#3b82f6"
  theme="dark"
  user-name="Alex Smith"
  user-role="Developer"
  user-avatar="https://i.pravatar.cc/100?img=33"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder", badge: 8 },
    { id: "terminal", label: "Terminal", icon: "fas fa-terminal" }
  ]'>
</app-modern-sidebar>`);accentIndigoCode=l(`<app-modern-sidebar
  brand-name="Indigo App"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "data", label: "Data", icon: "fas fa-database" }
  ]'>
</app-modern-sidebar>`);accentGreenCode=l(`<app-modern-sidebar
  brand-name="Green Theme"
  selected-id="dashboard"
  accent-color="#10b981"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "eco", label: "Eco Dashboard", icon: "fas fa-leaf" }
  ]'>
</app-modern-sidebar>`);accentPurpleCode=l(`<app-modern-sidebar
  brand-name="Purple Theme"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "creative", label: "Creative", icon: "fas fa-palette" }
  ]'>
</app-modern-sidebar>`);accentOrangeCode=l(`<app-modern-sidebar
  brand-name="Orange Theme"
  selected-id="dashboard"
  accent-color="#f59e0b"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "alerts", label: "Alerts", icon: "fas fa-bell", badge: 3 }
  ]'>
</app-modern-sidebar>`);accentPinkCode=l(`<app-modern-sidebar
  brand-name="Pink Theme"
  selected-id="dashboard"
  accent-color="#ec4899"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "favorites", label: "Favorites", icon: "fas fa-heart" }
  ]'>
</app-modern-sidebar>`);brandCustomCode=l(`<app-modern-sidebar
  brand-name="\u{1F680} Rocket Dashboard"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "launch", label: "Launch", icon: "fas fa-rocket" }
  ]'>
</app-modern-sidebar>`);brandIconCode=l(`<app-modern-sidebar
  brand-name="\u26A1 FastApp"
  selected-id="dashboard"
  accent-color="#14b8a6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-tachometer-alt" },
    { id: "performance", label: "Performance", icon: "fas fa-bolt" }
  ]'>
</app-modern-sidebar>`);iconsFontawesomeCode=l(`<app-modern-sidebar
  brand-name="Icon Gallery"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "chart", label: "Charts", icon: "fas fa-chart-pie" },
    { id: "users", label: "Users", icon: "fas fa-users" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);iconsCustomCode=l(`<app-modern-sidebar
  brand-name="Custom Icons"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-th-large" },
    { id: "widgets", label: "Widgets", icon: "fas fa-cubes" },
    { id: "tools", label: "Tools", icon: "fas fa-wrench" }
  ]'>
</app-modern-sidebar>`);fullFeaturedCode=l(`<app-modern-sidebar
  brand-name="Advanced Dashboard"
  selected-id="active-tasks"
  accent-color="#6366f1"
  user-name="Emily Davis"
  user-role="Team Lead"
  user-avatar="https://i.pravatar.cc/100?img=25"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-line", badge: 3 },
    {
      id: "projects",
      label: "Projects",
      icon: "fas fa-folder",
      badge: 12,
      children: [
        { id: "active-projects", label: "Active", icon: "fas fa-circle", badge: 8 },
        { id: "completed", label: "Completed", icon: "fas fa-check-circle" }
      ]
    },
    {
      id: "tasks",
      label: "Tasks",
      icon: "fas fa-tasks",
      badge: 15,
      children: [
        { id: "active-tasks", label: "Active", icon: "fas fa-play", badge: 10 },
        { id: "pending", label: "Pending", icon: "fas fa-clock", badge: 5 }
      ]
    }
  ]'>
</app-modern-sidebar>`);dashboardLayoutCode=l(`<app-modern-sidebar
  brand-name="Dashboard Pro"
  selected-id="overview"
  accent-color="#3b82f6"
  user-name="Dashboard Admin"
  user-role="Administrator"
  user-avatar="https://i.pravatar.cc/100?img=12"
  [items]='[
    { id: "overview", label: "Overview", icon: "fas fa-chart-pie" },
    { id: "metrics", label: "Metrics", icon: "fas fa-tachometer-alt" },
    { id: "reports", label: "Reports", icon: "fas fa-file-alt" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);adminPanelCode=l(`<app-modern-sidebar
  brand-name="Admin Panel"
  selected-id="users"
  accent-color="#10b981"
  user-name="Admin User"
  user-role="Super Admin"
  user-avatar="https://i.pravatar.cc/100?img=1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    {
      id: "user-mgmt",
      label: "User Management",
      icon: "fas fa-users-cog",
      children: [
        { id: "users", label: "All Users", icon: "fas fa-users" },
        { id: "roles", label: "Roles & Permissions", icon: "fas fa-key" }
      ]
    },
    { id: "system", label: "System", icon: "fas fa-server" }
  ]'>
</app-modern-sidebar>`);projectManagementCode=l(`<app-modern-sidebar
  brand-name="Project Manager"
  selected-id="active"
  accent-color="#8b5cf6"
  user-name="Project Lead"
  user-role="Manager"
  user-avatar="https://i.pravatar.cc/100?img=20"
  [items]='[
    { id: "overview", label: "Overview", icon: "fas fa-chart-line" },
    {
      id: "projects",
      label: "Projects",
      icon: "fas fa-folder-open",
      badge: 12,
      children: [
        { id: "active", label: "Active", icon: "fas fa-play", badge: 8 },
        { id: "paused", label: "Paused", icon: "fas fa-pause", badge: 2 },
        { id: "completed", label: "Completed", icon: "fas fa-check" }
      ]
    },
    { id: "team", label: "Team", icon: "fas fa-users" }
  ]'>
</app-modern-sidebar>`);messagingAppCode=l(`<app-modern-sidebar
  brand-name="ChatApp"
  selected-id="inbox"
  accent-color="#ec4899"
  user-name="Chat User"
  user-role="Online"
  user-avatar="https://i.pravatar.cc/100?img=15"
  [items]='[
    { id: "inbox", label: "Inbox", icon: "fas fa-inbox", badge: 42 },
    { id: "direct", label: "Direct Messages", icon: "fas fa-comment", badge: 12 },
    { id: "channels", label: "Channels", icon: "fas fa-hashtag", badge: 5 },
    { id: "mentions", label: "Mentions", icon: "fas fa-at", badge: "New" }
  ]'>
</app-modern-sidebar>`);ecommerceCode=l(`<app-modern-sidebar
  brand-name="E-Shop Admin"
  selected-id="orders"
  accent-color="#f59e0b"
  user-name="Shop Admin"
  user-role="Store Manager"
  user-avatar="https://i.pravatar.cc/100?img=30"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-chart-line" },
    { id: "orders", label: "Orders", icon: "fas fa-shopping-cart", badge: 28 },
    { id: "products", label: "Products", icon: "fas fa-box" },
    { id: "customers", label: "Customers", icon: "fas fa-users" },
    { id: "reports", label: "Reports", icon: "fas fa-file-invoice-dollar" }
  ]'>
</app-modern-sidebar>`);analyticsDashboardCode=l(`<app-modern-sidebar
  brand-name="Analytics Pro"
  selected-id="realtime"
  accent-color="#14b8a6"
  user-name="Data Analyst"
  user-role="Analytics Team"
  user-avatar="https://i.pravatar.cc/100?img=40"
  [items]='[
    { id: "overview", label: "Overview", icon: "fas fa-chart-pie" },
    { id: "realtime", label: "Real-time", icon: "fas fa-bolt", badge: "Live" },
    { id: "trends", label: "Trends", icon: "fas fa-chart-line" },
    { id: "reports", label: "Reports", icon: "fas fa-file-alt" }
  ]'>
</app-modern-sidebar>`);settingsMenuCode=l(`<app-modern-sidebar
  brand-name="Settings"
  selected-id="notifications"
  accent-color="#6366f1"
  [items]='[
    { id: "account", label: "Account", icon: "fas fa-user" },
    { id: "security", label: "Security", icon: "fas fa-lock" },
    { id: "notifications", label: "Notifications", icon: "fas fa-bell" },
    { id: "privacy", label: "Privacy", icon: "fas fa-shield-alt" },
    { id: "advanced", label: "Advanced", icon: "fas fa-sliders-h" }
  ]'>
</app-modern-sidebar>`);static \u0275fac=(()=>{let p;return function(n){return(p||(p=U(s)))(n||s)}})();static \u0275cmp=A({type:s,selectors:[["app-set-modern-sidebar-demo"]],features:[W],decls:354,vars:328,consts:[[1,"demo-container"],["icon","\u{1F4F1}","title","Modern Sidebar Component","description","A sleek, professional navigation sidebar with collapsible design, nested navigation, badge support, user profiles, and smooth animations."],["slot","playground"],["slot","examples",1,"examples-split-layout"],[3,"variants","useAnchor"],["id","examples-scroll-area",1,"examples-content"],["id","basic-default","title","Basic Default","description","Standard sidebar with brand name and basic navigation items.",2,"margin-top","0",3,"code"],[1,"demo-grid"],[1,"demo-card"],[1,"preview-box","sidebar-preview"],["brand-name","My App","selected-id","dashboard","accent-color","#6366f1",3,"items"],["id","minimal-items"],[1,"section-header"],["brand-name","Simple App","selected-id","home",3,"items"],[3,"htmlCode"],["id","collapsed-compact"],["brand-name","Compact","selected-id","dashboard","collapsed","true",3,"items"],["id","expanded-full"],["brand-name","Full Width","selected-id","dashboard","collapsed","false",3,"items"],["id","nested-navigation"],["brand-name","Project Hub","selected-id","active","accent-color","#10b981",3,"items"],["id","nested-deep"],["brand-name","Deep Nesting","selected-id","notifications","accent-color","#ec4899",3,"items"],["id","with-badges"],["brand-name","Notification Hub","selected-id","messages","accent-color","#f59e0b",3,"items"],["id","badges-mixed"],["brand-name","Mixed Badges","selected-id","inbox","accent-color","#3b82f6",3,"items"],["id","user-profile"],["brand-name","Enterprise App","selected-id","dashboard","accent-color","#8b5cf6","user-name","Sarah Johnson","user-role","Product Manager","user-avatar","https://i.pravatar.cc/100?img=44",3,"items"],["id","user-with-avatar"],["brand-name","Team Hub","selected-id","projects","accent-color","#14b8a6","user-name","Alex Chen","user-role","Senior Developer","user-avatar","https://i.pravatar.cc/100?img=33",3,"items"],["id","no-user-profile"],["brand-name","Public App","selected-id","home","accent-color","#6366f1",3,"items"],["id","theme-light"],["brand-name","Light Theme App","selected-id","dashboard","accent-color","#06b6d4","theme","light",3,"items"],["id","theme-dark"],["brand-name","Dark Mode App","selected-id","dashboard","accent-color","#3b82f6","theme","dark","user-name","Alex Smith","user-role","Developer","user-avatar","https://i.pravatar.cc/100?img=33",3,"items"],["id","accent-indigo"],["brand-name","Indigo App","selected-id","dashboard","accent-color","#6366f1",3,"items"],["id","accent-green"],["brand-name","Green Theme","selected-id","dashboard","accent-color","#10b981",3,"items"],["id","accent-purple"],["brand-name","Purple Theme","selected-id","dashboard","accent-color","#8b5cf6",3,"items"],["id","accent-orange"],["brand-name","Orange Theme","selected-id","dashboard","accent-color","#f59e0b",3,"items"],["id","accent-pink"],["brand-name","Pink Theme","selected-id","dashboard","accent-color","#ec4899",3,"items"],["id","brand-custom"],["brand-name","\u{1F680} Rocket Dashboard","selected-id","dashboard","accent-color","#6366f1",3,"items"],["id","brand-icon"],["brand-name","\u26A1 FastApp","selected-id","dashboard","accent-color","#14b8a6",3,"items"],["id","icons-fontawesome"],["brand-name","Icon Gallery","selected-id","dashboard","accent-color","#6366f1",3,"items"],["id","icons-custom"],["brand-name","Custom Icons","selected-id","dashboard","accent-color","#8b5cf6",3,"items"],["id","full-featured"],["brand-name","Advanced Dashboard","selected-id","active-tasks","accent-color","#6366f1","user-name","Emily Davis","user-role","Team Lead","user-avatar","https://i.pravatar.cc/100?img=25",3,"items"],["id","dashboard-layout"],["brand-name","Dashboard Pro","selected-id","overview","accent-color","#3b82f6","user-name","Dashboard Admin","user-role","Administrator","user-avatar","https://i.pravatar.cc/100?img=12",3,"items"],["id","admin-panel"],["brand-name","Admin Panel","selected-id","users","accent-color","#10b981","user-name","Admin User","user-role","Super Admin","user-avatar","https://i.pravatar.cc/100?img=1",3,"items"],["id","project-management"],["brand-name","Project Manager","selected-id","active","accent-color","#8b5cf6","user-name","Project Lead","user-role","Manager","user-avatar","https://i.pravatar.cc/100?img=20",3,"items"],["id","messaging-app"],["brand-name","ChatApp","selected-id","inbox","accent-color","#ec4899","user-name","Chat User","user-role","Online","user-avatar","https://i.pravatar.cc/100?img=15",3,"items"],["id","ecommerce"],["brand-name","E-Shop Admin","selected-id","orders","accent-color","#f59e0b","user-name","Shop Admin","user-role","Store Manager","user-avatar","https://i.pravatar.cc/100?img=30",3,"items"],["id","analytics-dashboard"],["brand-name","Analytics Pro","selected-id","realtime","accent-color","#14b8a6","user-name","Data Analyst","user-role","Analytics Team","user-avatar","https://i.pravatar.cc/100?img=40",3,"items"],["id","settings-menu"],["brand-name","Settings","selected-id","notifications","accent-color","#6366f1",3,"items"],["slot","docs"],[1,"examples-split-layout"],[1,"examples-content"],[1,"demo-section"],[1,"demo-card",2,"padding","24px"]],template:function(m,n){m&1&&(a(0,"div",0),d(1,"app-demo-header",1),a(2,"demo-tabs")(3,"div",2),d(4,"app-modern-sidebar-playground"),e(),a(5,"div",3),d(6,"app-demo-sidebar",4),a(7,"div",5)(8,"app-example-section",6)(9,"div",7)(10,"div",8)(11,"div",9),d(12,"app-modern-sidebar",10),e()()()(),a(13,"demo-section",11)(14,"div",12)(15,"h2"),t(16,"\u26A1 Minimal Items"),e(),a(17,"p"),t(18,"Clean sidebar with just essential navigation items."),e()(),a(19,"div",7)(20,"demo-card")(21,"div",9),d(22,"app-modern-sidebar",13),e(),d(23,"ui-code-preview",14),e()()(),a(24,"demo-section",15)(25,"div",12)(26,"h2"),t(27,"\u25C0\uFE0F Collapsed/Compact"),e(),a(28,"p"),t(29,"Icon-only compact mode for maximum space efficiency."),e()(),a(30,"div",7)(31,"demo-card")(32,"div",9),d(33,"app-modern-sidebar",16),e(),d(34,"ui-code-preview",14),e()()(),a(35,"demo-section",17)(36,"div",12)(37,"h2"),t(38,"\u25B6\uFE0F Expanded Full"),e(),a(39,"p"),t(40,"Full-width sidebar with complete labels and icons."),e()(),a(41,"div",7)(42,"demo-card")(43,"div",9),d(44,"app-modern-sidebar",18),e(),d(45,"ui-code-preview",14),e()()(),a(46,"demo-section",19)(47,"div",12)(48,"h2"),t(49,"\u{1F500} Nested Navigation"),e(),a(50,"p"),t(51,"Menu items with expandable children for organized navigation."),e()(),a(52,"div",7)(53,"demo-card")(54,"div",9),d(55,"app-modern-sidebar",20),e(),d(56,"ui-code-preview",14),e()()(),a(57,"demo-section",21)(58,"div",12)(59,"h2"),t(60,"\u{1F3D7}\uFE0F Deep Nesting (3 Levels)"),e(),a(61,"p"),t(62,"Three-level deep menu hierarchy for complex navigation."),e()(),a(63,"div",7)(64,"demo-card")(65,"div",9),d(66,"app-modern-sidebar",22),e(),d(67,"ui-code-preview",14),e()()(),a(68,"demo-section",23)(69,"div",12)(70,"h2"),t(71,"\u{1F514} With Badges"),e(),a(72,"p"),t(73,"Notification badges showing counts on menu items."),e()(),a(74,"div",7)(75,"demo-card")(76,"div",9),d(77,"app-modern-sidebar",24),e(),d(78,"ui-code-preview",14),e()()(),a(79,"demo-section",25)(80,"div",12)(81,"h2"),t(82,"\u{1F522} Mixed Badge Types"),e(),a(83,"p"),t(84,"Numeric and text badges for different notification types."),e()(),a(85,"div",7)(86,"demo-card")(87,"div",9),d(88,"app-modern-sidebar",26),e(),d(89,"ui-code-preview",14),e()()(),a(90,"demo-section",27)(91,"div",12)(92,"h2"),t(93,"\u{1F464} User Profile"),e(),a(94,"p"),t(95,"Sidebar with user profile information displayed."),e()(),a(96,"div",7)(97,"demo-card")(98,"div",9),d(99,"app-modern-sidebar",28),e(),d(100,"ui-code-preview",14),e()()(),a(101,"demo-section",29)(102,"div",12)(103,"h2"),t(104,"\u{1F5BC}\uFE0F User with Avatar"),e(),a(105,"p"),t(106,"User profile with custom avatar image."),e()(),a(107,"div",7)(108,"demo-card")(109,"div",9),d(110,"app-modern-sidebar",30),e(),d(111,"ui-code-preview",14),e()()(),a(112,"demo-section",31)(113,"div",12)(114,"h2"),t(115,"\u2B55 No User Profile"),e(),a(116,"p"),t(117,"Sidebar without user profile section for public apps."),e()(),a(118,"div",7)(119,"demo-card")(120,"div",9),d(121,"app-modern-sidebar",32),e(),d(122,"ui-code-preview",14),e()()(),a(123,"demo-section",33)(124,"div",12)(125,"h2"),t(126,"\u2600\uFE0F Light Theme"),e(),a(127,"p"),t(128,"Default light theme with bright background."),e()(),a(129,"div",7)(130,"demo-card")(131,"div",9),d(132,"app-modern-sidebar",34),e(),d(133,"ui-code-preview",14),e()()(),a(134,"demo-section",35)(135,"div",12)(136,"h2"),t(137,"\u{1F319} Dark Theme"),e(),a(138,"p"),t(139,"Dark theme with inverted colors for night mode."),e()(),a(140,"div",7)(141,"demo-card")(142,"div",9),d(143,"app-modern-sidebar",36),e(),d(144,"ui-code-preview",14),e()()(),a(145,"demo-section",37)(146,"div",12)(147,"h2"),t(148,"\u{1F535} Accent: Indigo"),e(),a(149,"p"),t(150,"Indigo accent color for professional appearance."),e()(),a(151,"div",7)(152,"demo-card")(153,"div",9),d(154,"app-modern-sidebar",38),e(),d(155,"ui-code-preview",14),e()()(),a(156,"demo-section",39)(157,"div",12)(158,"h2"),t(159,"\u{1F7E2} Accent: Green"),e(),a(160,"p"),t(161,"Green accent for eco or success-themed apps."),e()(),a(162,"div",7)(163,"demo-card")(164,"div",9),d(165,"app-modern-sidebar",40),e(),d(166,"ui-code-preview",14),e()()(),a(167,"demo-section",41)(168,"div",12)(169,"h2"),t(170,"\u{1F7E3} Accent: Purple"),e(),a(171,"p"),t(172,"Purple accent for creative applications."),e()(),a(173,"div",7)(174,"demo-card")(175,"div",9),d(176,"app-modern-sidebar",42),e(),d(177,"ui-code-preview",14),e()()(),a(178,"demo-section",43)(179,"div",12)(180,"h2"),t(181,"\u{1F7E0} Accent: Orange"),e(),a(182,"p"),t(183,"Orange accent for energetic, alert-focused apps."),e()(),a(184,"div",7)(185,"demo-card")(186,"div",9),d(187,"app-modern-sidebar",44),e(),d(188,"ui-code-preview",14),e()()(),a(189,"demo-section",45)(190,"div",12)(191,"h2"),t(192,"\u{1FA77} Accent: Pink"),e(),a(193,"p"),t(194,"Pink accent for modern, playful interfaces."),e()(),a(195,"div",7)(196,"demo-card")(197,"div",9),d(198,"app-modern-sidebar",46),e(),d(199,"ui-code-preview",14),e()()(),a(200,"demo-section",47)(201,"div",12)(202,"h2"),t(203,"\u{1F3F7}\uFE0F Custom Branding"),e(),a(204,"p"),t(205,"Custom brand name with emoji for personality."),e()(),a(206,"div",7)(207,"demo-card")(208,"div",9),d(209,"app-modern-sidebar",48),e(),d(210,"ui-code-preview",14),e()()(),a(211,"demo-section",49)(212,"div",12)(213,"h2"),t(214,"\u{1F3A8} Brand with Icon"),e(),a(215,"p"),t(216,"Brand name with icon for visual identity."),e()(),a(217,"div",7)(218,"demo-card")(219,"div",9),d(220,"app-modern-sidebar",50),e(),d(221,"ui-code-preview",14),e()()(),a(222,"demo-section",51)(223,"div",12)(224,"h2"),t(225,"\u{1F3AF} FontAwesome Icons"),e(),a(226,"p"),t(227,"Standard FontAwesome icon library."),e()(),a(228,"div",7)(229,"demo-card")(230,"div",9),d(231,"app-modern-sidebar",52),e(),d(232,"ui-code-preview",14),e()()(),a(233,"demo-section",53)(234,"div",12)(235,"h2"),t(236,"\u2728 Custom Icons"),e(),a(237,"p"),t(238,"Custom icon selection from FontAwesome library."),e()(),a(239,"div",7)(240,"demo-card")(241,"div",9),d(242,"app-modern-sidebar",54),e(),d(243,"ui-code-preview",14),e()()(),a(244,"demo-section",55)(245,"div",12)(246,"h2"),t(247,"\u{1F48E} Full Featured"),e(),a(248,"p"),t(249,"Complete sidebar with all features: nesting, badges, user profile."),e()(),a(250,"div",7)(251,"demo-card")(252,"div",9),d(253,"app-modern-sidebar",56),e(),d(254,"ui-code-preview",14),e()()(),a(255,"demo-section",57)(256,"div",12)(257,"h2"),t(258,"\u{1F4CA} Dashboard Layout"),e(),a(259,"p"),t(260,"Optimized for dashboard and analytics applications."),e()(),a(261,"div",7)(262,"demo-card")(263,"div",9),d(264,"app-modern-sidebar",58),e(),d(265,"ui-code-preview",14),e()()(),a(266,"demo-section",59)(267,"div",12)(268,"h2"),t(269,"\u2699\uFE0F Admin Panel"),e(),a(270,"p"),t(271,"Administrative interface with user management."),e()(),a(272,"div",7)(273,"demo-card")(274,"div",9),d(275,"app-modern-sidebar",60),e(),d(276,"ui-code-preview",14),e()()(),a(277,"demo-section",61)(278,"div",12)(279,"h2"),t(280,"\u{1F4C1} Project Management"),e(),a(281,"p"),t(282,"Project tracking and team collaboration interface."),e()(),a(283,"div",7)(284,"demo-card")(285,"div",9),d(286,"app-modern-sidebar",62),e(),d(287,"ui-code-preview",14),e()()(),a(288,"demo-section",63)(289,"div",12)(290,"h2"),t(291,"\u{1F4AC} Messaging App"),e(),a(292,"p"),t(293,"Chat and messaging application layout."),e()(),a(294,"div",7)(295,"demo-card")(296,"div",9),d(297,"app-modern-sidebar",64),e(),d(298,"ui-code-preview",14),e()()(),a(299,"demo-section",65)(300,"div",12)(301,"h2"),t(302,"\u{1F6D2} E-commerce Admin"),e(),a(303,"p"),t(304,"Online store administration interface."),e()(),a(305,"div",7)(306,"demo-card")(307,"div",9),d(308,"app-modern-sidebar",66),e(),d(309,"ui-code-preview",14),e()()(),a(310,"demo-section",67)(311,"div",12)(312,"h2"),t(313,"\u{1F4C8} Analytics Dashboard"),e(),a(314,"p"),t(315,"Real-time analytics and reporting interface."),e()(),a(316,"div",7)(317,"demo-card")(318,"div",9),d(319,"app-modern-sidebar",68),e(),d(320,"ui-code-preview",14),e()()(),a(321,"demo-section",69)(322,"div",12)(323,"h2"),t(324,"\u{1F527} Settings Menu"),e(),a(325,"p"),t(326,"Comprehensive settings and preferences interface."),e()(),a(327,"div",7)(328,"demo-card")(329,"div",9),d(330,"app-modern-sidebar",70),e(),d(331,"ui-code-preview",14),e()()()()(),a(332,"div",71)(333,"div",72),d(334,"app-demo-sidebar",4),a(335,"div",73)(336,"div",0)(337,"section",74)(338,"div",12)(339,"h2"),t(340,"\u{1F4D6} Documentation"),e(),a(341,"p"),t(342,"Links, API references, and detailed usage notes"),e()(),a(343,"div",75)(344,"p"),t(345," The documentation for this component is currently being compiled. Our technical writers are working to provide comprehensive API references, accessibility guidelines, and best practices. "),e(),a(346,"p"),t(347," In the meantime, please explore the "),a(348,"strong"),t(349,"Playground"),e(),t(350," for interactive testing and the "),a(351,"strong"),t(352,"Examples"),e(),t(353," tab for common implementation patterns. "),e()()()()()()()()()),m&2&&(o(6),r("variants",n.exampleVariants)("useAnchor",!0),o(2),r("code",n.basicDefaultCode()),o(4),r("items",f(67,v,i(64,u),i(65,he),i(66,k))),o(10),r("items",f(74,v,i(71,te),i(72,oe),i(73,ve))),o(),r("htmlCode",n.minimalItemsCode()),o(10),r("items",f(81,v,i(78,u),i(79,j),i(80,k))),o(),r("htmlCode",n.collapsedCompactCode()),o(10),r("items",O(90,L,i(85,u),i(86,re),i(87,j),i(88,I),i(89,k))),o(),r("htmlCode",n.expandedFullCode()),o(10),r("items",g(104,h,i(96,u),P(102,xe,g(99,h,i(97,Ce),i(98,ye))))),o(),r("htmlCode",n.nestedNavigationCode()),o(10),r("items",g(123,h,i(107,u),P(121,_e,f(117,v,i(108,de),i(109,le),P(115,we,g(112,h,i(110,se),i(111,ce))))))),o(),r("htmlCode",n.nestedDeepCode()),o(10),r("items",D(130,E,i(126,u),i(127,Me),i(128,Se),i(129,Pe))),o(),r("htmlCode",n.withBadgesCode()),o(10),r("items",D(139,E,i(135,pe),i(136,De),i(137,Fe),i(138,Ee))),o(),r("htmlCode",n.badgesMixedCode()),o(10),r("items",f(147,v,i(144,u),i(145,j),i(146,I))),o(),r("htmlCode",n.userProfileCode()),o(10),r("items",f(154,v,i(151,ke),i(152,I),i(153,Ae))),o(),r("htmlCode",n.userWithAvatarCode()),o(10),r("items",f(161,v,i(158,te),i(159,Oe),i(160,oe))),o(),r("htmlCode",n.noUserProfileCode()),o(10),r("items",f(168,v,i(165,u),i(166,re),i(167,k))),o(),r("htmlCode",n.themeLightCode()),o(10),r("items",f(175,v,i(172,u),i(173,Ne),i(174,Te))),o(),r("htmlCode",n.themeDarkCode()),o(10),r("items",g(181,h,i(179,u),i(180,Ie))),o(),r("htmlCode",n.accentIndigoCode()),o(10),r("items",g(186,h,i(184,u),i(185,je))),o(),r("htmlCode",n.accentGreenCode()),o(10),r("items",g(191,h,i(189,u),i(190,Le))),o(),r("htmlCode",n.accentPurpleCode()),o(10),r("items",g(196,h,i(194,u),i(195,Ue))),o(),r("htmlCode",n.accentOrangeCode()),o(10),r("items",g(201,h,i(199,u),i(200,Be))),o(),r("htmlCode",n.accentPinkCode()),o(10),r("items",g(206,h,i(204,u),i(205,We))),o(),r("htmlCode",n.brandCustomCode()),o(10),r("items",g(211,h,i(209,ze),i(210,Ve))),o(),r("htmlCode",n.brandIconCode()),o(10),r("items",D(218,E,i(214,u),i(215,Re),i(216,He),i(217,k))),o(),r("htmlCode",n.iconsFontawesomeCode()),o(10),r("items",f(226,v,i(223,Ge),i(224,Je),i(225,Qe))),o(),r("htmlCode",n.iconsCustomCode()),o(10),r("items",D(246,E,i(230,u),i(231,qe),P(237,Xe,g(234,h,i(232,Ye),i(233,Ke))),P(244,ea,g(241,h,i(239,Ze),i(240,$e))))),o(),r("htmlCode",n.fullFeaturedCode()),o(10),r("items",D(255,E,i(251,me),i(252,aa),i(253,ue),i(254,k))),o(),r("htmlCode",n.dashboardLayoutCode()),o(10),r("items",f(269,v,i(260,u),P(266,ta,g(263,h,i(261,ia),i(262,na))),i(268,oa))),o(),r("htmlCode",n.adminPanelCode()),o(10),r("items",f(284,v,i(273,ra),P(281,ca,f(277,v,i(274,da),i(275,la),i(276,sa))),i(283,I))),o(),r("htmlCode",n.projectManagementCode()),o(10),r("items",D(292,E,i(288,pe),i(289,pa),i(290,ma),i(291,ua))),o(),r("htmlCode",n.messagingAppCode()),o(10),r("items",O(302,L,i(297,ba),i(298,ga),i(299,fa),i(300,ha),i(301,va))),o(),r("htmlCode",n.ecommerceCode()),o(10),r("items",D(312,E,i(308,me),i(309,Ca),i(310,ya),i(311,ue))),o(),r("htmlCode",n.analyticsDashboardCode()),o(10),r("items",O(322,L,i(317,de),i(318,le),i(319,se),i(320,ce),i(321,xa))),o(),r("htmlCode",n.settingsMenuCode()),o(3),r("variants",n.exampleVariants)("useAnchor",!0))},dependencies:[N,T,ne,$,Y,ae],styles:['.demo-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;overflow:hidden;box-sizing:border-box;max-width:90%;margin:0 auto;padding:var(--space-2xl) var(--space-xl);animation:fadeIn .5s cubic-bezier(.16,1,.3,1) forwards}.demo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.75rem;font-weight:800;background:linear-gradient(135deg,var(--text-primary) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:var(--space-sm);display:flex;align-items:center;gap:var(--space-md);letter-spacing:-.02em;line-height:1.2}.intro-text[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin-bottom:var(--space-2xl);line-height:1.7;font-weight:400}.variants-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:var(--space-sm);padding:var(--space-sm) var(--space-xs) var(--space-md) var(--space-xs);margin-bottom:var(--space-xl);scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--border-strong);border-radius:var(--radius-full);transition:background-color var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--text-tertiary)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]{flex-shrink:0;--ui-button-radius: var(--radius-full);transition:transform var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]::part(button){border-radius:var(--radius-full);font-weight:600;font-size:.875rem;padding:.625rem 1.25rem;color:#fff;white-space:nowrap;box-shadow:var(--shadow-sm);transition:all var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]::part(button):hover{box-shadow:var(--shadow-md)}.demo-section[_ngcontent-%COMP%]{margin-bottom:var(--space-2xl);scroll-margin-top:var(--space-xl);animation:slideInLeft .6s cubic-bezier(.16,1,.3,1) forwards;animation-delay:.1s;opacity:0}.section-header[_ngcontent-%COMP%]{margin-bottom:var(--space-xl)}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.875rem;font-weight:700;color:var(--text-primary);margin-bottom:var(--space-sm);letter-spacing:-.01em;line-height:1.3}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:var(--text-secondary);margin:0;line-height:1.6;max-width:700px}.demo-card[_ngcontent-%COMP%]{background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:var(--space-2xl);display:flex;flex-direction:column;gap:var(--space-2xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth);position:relative}.demo-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:var(--gradient-primary);opacity:0;transition:opacity var(--transition-smooth)}.demo-card[_ngcontent-%COMP%]:hover{box-shadow:var(--shadow-lg);border-color:var(--border-strong);transform:translateY(-2px)}.demo-card[_ngcontent-%COMP%]:hover:before{opacity:1}.pane-examples[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-examples[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-docs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-docs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%;min-height:0;box-sizing:border-box}.examples-split-layout[_ngcontent-%COMP%]{display:flex;gap:1rem;position:relative;height:100%;box-sizing:border-box;overflow:hidden;padding:1rem;background:#f4faf6}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]{width:226px;flex-shrink:0;height:100%;min-height:0;overflow-y:auto;overflow-x:hidden;background:#fff;padding:1.5rem 1rem;border-radius:16px;border:1px solid #d1fae5;box-shadow:0 2px 12px #16a34a12;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#16a34a transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#16a34a;border-radius:4px}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#15803d}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:#16a34a;margin-bottom:1rem;text-transform:uppercase;letter-spacing:.08em;padding-left:.5rem}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]   ui-anchor[_ngcontent-%COMP%]{--primary-color: #16a34a;--text-secondary: #4b5563;--hover-bg: #f0fdf4;--active-bg: #e6f8ec;--anchor-active-color: #16a34a}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]{flex:1;min-width:0;height:100%;overflow-y:auto;overflow-x:hidden;padding:2rem;background:#fff;border-radius:16px;border:1px solid #e2e8f0;box-shadow:0 2px 12px #0000000a;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#16a34a transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#16a34a;border-radius:4px}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#15803d}.demo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:var(--space-xl);margin-bottom:var(--space-xl)}.demo-grid.col-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.demo-grid.col-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.demo-flex-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--space-md);align-items:center}.demo-flex-wrap.column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.preview-box[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:var(--space-xl);display:flex;flex-direction:column;align-items:stretch;justify-content:center;min-height:160px;position:relative}.preview-box.glass-bg[_ngcontent-%COMP%]{background:var(--gradient-glass);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.full-width[_ngcontent-%COMP%]{width:100%!important}.preview-box[_ngcontent-%COMP%]{min-height:300px}.preview-box.sidebar-preview[_ngcontent-%COMP%]{padding:0;min-height:400px}.sidebar-container[_ngcontent-%COMP%]{width:100%;height:100%;border:1px solid var(--border-color);border-radius:var(--radius-md);overflow:hidden;display:flex;background:var(--surface-elevated)}.sidebar-preview[_ngcontent-%COMP%]{position:relative;display:flex;align-items:stretch}.sidebar-preview[_ngcontent-%COMP%]   app-modern-sidebar[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.content-area[_ngcontent-%COMP%]{flex:1;padding:1.5rem;background:var(--bg-primary)}.feature-group[_ngcontent-%COMP%]{display:grid;gap:1rem;margin-bottom:1.5rem}.feature-subgrid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem}.form-example[_ngcontent-%COMP%]{padding:1.5rem;background:var(--surface-2);border-radius:.5rem;border:1px solid var(--border-color)}@media(max-width:768px){.preview-box[_ngcontent-%COMP%]{min-height:250px}.preview-box.sidebar-preview[_ngcontent-%COMP%]{min-height:350px}.feature-subgrid[_ngcontent-%COMP%]{grid-template-columns:1fr}}']})}return s})();export{Ya as SetModernSidebarDemoComponent};
