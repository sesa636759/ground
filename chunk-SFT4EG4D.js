import{a as Z}from"./chunk-OX47AATK.js";import{a as X}from"./chunk-VCQH7YF5.js";import{a as Q}from"./chunk-7BJ2SKGU.js";import{a as Y}from"./chunk-J3ZDRBBM.js";import{a as q}from"./chunk-HU7SD4TX.js";import{a as K}from"./chunk-WI4YLOPS.js";import{a as V}from"./chunk-NNBGXVLA.js";import{d as H,g as J,r as k}from"./chunk-5Y5DPJJM.js";import{$a as B,Ab as t,Ea as o,Fb as y,Gb as x,Hb as _,Ma as j,Mb as i,Nb as w,Ob as g,Pb as f,Qb as M,Ra as D,Rb as F,Ua as L,Va as W,ca as c,ec as z,fb as r,gb as a,ha as I,hb as e,ib as d,ob as C,qb as U,sc as G,xc as E,yb as R}from"./chunk-AFPMIVF2.js";import"./chunk-RINRXYSM.js";function me(p,l){if(p&1&&d(0,"ui-code-preview",24),p&2){let u=U();r("htmlCode",u.generatedCode())}}var A=class p{constructor(l){this.cd=l}pgConfig={brandName:"Set UI Lib",selectedId:"dashboard",accentColor:"#6366f1",userName:"John Doe",userRole:"Administrator",userAvatar:"https://i.pravatar.cc/100?img=11",collapsed:!1,theme:"light"};themeOptions=[{label:"Light",value:"light"},{label:"Dark",value:"dark"}];accentColorOptions=[{label:"Indigo",value:"#6366f1"},{label:"Blue",value:"#3b82f6"},{label:"Green",value:"#10b981"},{label:"Teal",value:"#14b8a6"},{label:"Purple",value:"#8b5cf6"},{label:"Pink",value:"#ec4899"},{label:"Orange",value:"#f59e0b"},{label:"Red",value:"#ef4444"}];sidebarItems=[{id:"dashboard",label:"Dashboard",icon:"fas fa-home"},{id:"analytics",label:"Analytics",icon:"fas fa-chart-line",badge:3},{id:"projects",label:"Projects",icon:"fas fa-folder",badge:12,children:[{id:"active",label:"Active Projects",icon:"fas fa-circle",badge:8},{id:"paused",label:"Paused",icon:"fas fa-pause-circle",badge:2},{id:"completed",label:"Completed",icon:"fas fa-check-circle",badge:2}]},{id:"tasks",label:"Tasks",icon:"fas fa-tasks",badge:15,children:[{id:"active-tasks",label:"Active",icon:"fas fa-play",badge:10},{id:"pending",label:"Pending",icon:"fas fa-clock",badge:5}]},{id:"calendar",label:"Calendar",icon:"fas fa-calendar"},{id:"messages",label:"Messages",icon:"fas fa-envelope",badge:"New"},{id:"team",label:"Team",icon:"fas fa-users"},{id:"settings",label:"Settings",icon:"fas fa-cog",children:[{id:"profile",label:"Profile",icon:"fas fa-user"},{id:"security",label:"Security",icon:"fas fa-lock"},{id:"notifications",label:"Notifications",icon:"fas fa-bell"}]},{id:"help",label:"Help & Support",icon:"fas fa-question-circle"}];eventLog=c([]);generatedCode=c("");showCode=!0;sidebarItemsJson=JSON.stringify(this.sidebarItems);ngOnInit(){this.updateConfig()}refreshCode(){setTimeout(()=>{this.showCode=!1,this.cd.detectChanges(),this.showCode=!0,this.cd.detectChanges()},0)}updateConfig(){let l=`<app-modern-sidebar
`;l+=`  brand-name="${this.pgConfig.brandName}"
`,l+=`  selected-id="${this.pgConfig.selectedId}"
`,l+=`  accent-color="${this.pgConfig.accentColor}"
`,this.pgConfig.userName&&(l+=`  user-name="${this.pgConfig.userName}"
`),this.pgConfig.userRole&&(l+=`  user-role="${this.pgConfig.userRole}"
`),this.pgConfig.userAvatar&&(l+=`  user-avatar="${this.pgConfig.userAvatar}"
`),this.pgConfig.collapsed&&(l+=`  collapsed="true"
`),this.pgConfig.theme!=="light"&&(l+=`  theme="${this.pgConfig.theme}"
`),l+=`  [items]="sidebarItemsJson"
`,l+=`  (itemSelected)="onItemSelected($event)"
`,l+=`  (sidebarToggled)="onSidebarToggled($event)"
`,l+="></app-modern-sidebar>",this.generatedCode.set(l),this.refreshCode()}logEvent(l){let u=new Date().toLocaleTimeString();this.eventLog.update(n=>[`[${u}] ${l}`,...n.slice(0,9)])}onItemSelected(l){this.logEvent(`Item selected: ${l.detail.label} (${l.detail.id})`),this.pgConfig.selectedId=l.detail.id,this.updateConfig()}onSidebarToggled(l){this.logEvent(`Sidebar ${l.detail?"collapsed":"expanded"}`),this.pgConfig.collapsed=l.detail,this.updateConfig()}onProfileClick(){this.logEvent("Profile clicked")}copyCode(){navigator.clipboard.writeText(this.generatedCode())}jsonOptions=l=>JSON.stringify(l);static \u0275fac=function(u){return new(u||p)(j(z))};static \u0275cmp=D({type:p,selectors:[["app-modern-sidebar-playground"]],decls:58,vars:23,consts:[[1,"playground-layout"],[1,"playground-controls"],["items",'[{"id":"config","title":"Configuration","icon":"\u2699\uFE0F"}]',"defaultOpen",'["config"]',"multiple",""],["slot","content-config"],[1,"section-title"],[1,"control-grid"],[1,"control-group"],["type","text",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","options"],["type","color",3,"ngModelChange","ngModel"],[1,"control-group","full-width"],[1,"checkbox-grid"],[1,"checkbox-item"],["label","Collapsed",3,"ngModelChange","ngModel"],[1,"playground-preview"],[1,"preview-stage","sidebar-stage"],[1,"sidebar-wrapper"],[3,"itemSelected","sidebarToggled","profileClicked","items"],[1,"content-area-preview"],[1,"content-header-sim"],[1,"content-cards"],[1,"sim-card"],[3,"clear","logs"],["label","Generated Code","activeLang","html","expanded","true",3,"htmlCode",4,"ngIf"],["label","Generated Code","activeLang","html","expanded","true",3,"htmlCode"]],template:function(u,n){u&1&&(a(0,"div",0)(1,"div",1)(2,"ui-accordion",2)(3,"div",3)(4,"h4",4),t(5,"Branding"),e(),a(6,"div",5)(7,"div",6)(8,"label"),t(9,"Brand Name"),e(),a(10,"app-input",7),_("ngModelChange",function(s){return x(n.pgConfig.brandName,s)||(n.pgConfig.brandName=s),s}),C("ngModelChange",function(){return n.updateConfig()}),e()(),a(11,"div",6)(12,"label"),t(13,"Accent Color"),e(),a(14,"ui-dropdown",8),_("ngModelChange",function(s){return x(n.pgConfig.accentColor,s)||(n.pgConfig.accentColor=s),s}),C("ngModelChange",function(){return n.updateConfig()}),e()(),a(15,"div",6)(16,"label"),t(17,"Custom Accent"),e(),a(18,"app-input",9),_("ngModelChange",function(s){return x(n.pgConfig.accentColor,s)||(n.pgConfig.accentColor=s),s}),C("ngModelChange",function(){return n.updateConfig()}),e()(),a(19,"div",6)(20,"label"),t(21,"Theme"),e(),a(22,"ui-dropdown",8),_("ngModelChange",function(s){return x(n.pgConfig.theme,s)||(n.pgConfig.theme=s),s}),C("ngModelChange",function(){return n.updateConfig()}),e()()(),a(23,"h4",4),t(24,"User Profile"),e(),a(25,"div",5)(26,"div",6)(27,"label"),t(28,"User Name"),e(),a(29,"app-input",7),_("ngModelChange",function(s){return x(n.pgConfig.userName,s)||(n.pgConfig.userName=s),s}),C("ngModelChange",function(){return n.updateConfig()}),e()(),a(30,"div",6)(31,"label"),t(32,"User Role"),e(),a(33,"app-input",7),_("ngModelChange",function(s){return x(n.pgConfig.userRole,s)||(n.pgConfig.userRole=s),s}),C("ngModelChange",function(){return n.updateConfig()}),e()(),a(34,"div",10)(35,"label"),t(36,"Avatar URL"),e(),a(37,"app-input",7),_("ngModelChange",function(s){return x(n.pgConfig.userAvatar,s)||(n.pgConfig.userAvatar=s),s}),C("ngModelChange",function(){return n.updateConfig()}),e()()(),a(38,"h4",4),t(39,"Options"),e(),a(40,"div",11)(41,"label",12)(42,"app-checkbox",13),_("ngModelChange",function(s){return x(n.pgConfig.collapsed,s)||(n.pgConfig.collapsed=s),s}),C("ngModelChange",function(){return n.updateConfig()}),e()()()()()(),a(43,"div",14)(44,"div",15)(45,"div",16)(46,"app-modern-sidebar",17),C("itemSelected",function(s){return n.onItemSelected(s)})("sidebarToggled",function(s){return n.onSidebarToggled(s)})("profileClicked",function(){return n.onProfileClick()}),e()(),a(47,"div",18)(48,"div",19)(49,"h3"),t(50,"Main Content Area"),e(),a(51,"p"),t(52,"Interact with the sidebar to see events logged"),e()(),a(53,"div",20),d(54,"div",21)(55,"div",21),e()()(),a(56,"app-playground-event-log",22),C("clear",function(){return n.eventLog.set([])}),e(),W(57,me,1,1,"ui-code-preview",23),e()()),u&2&&(o(10),y("ngModel",n.pgConfig.brandName),o(4),y("ngModel",n.pgConfig.accentColor),r("options",n.accentColorOptions),o(4),y("ngModel",n.pgConfig.accentColor),o(4),y("ngModel",n.pgConfig.theme),r("options",n.themeOptions),o(7),y("ngModel",n.pgConfig.userName),o(4),y("ngModel",n.pgConfig.userRole),o(4),y("ngModel",n.pgConfig.userAvatar),o(5),y("ngModel",n.pgConfig.collapsed),o(2),R("dark-theme",n.pgConfig.theme==="dark"),o(2),r("items",n.sidebarItems),B("brand-name",n.pgConfig.brandName)("selected-id",n.pgConfig.selectedId)("accent-color",n.pgConfig.accentColor)("user-name",n.pgConfig.userName)("user-role",n.pgConfig.userRole)("user-avatar",n.pgConfig.userAvatar)("collapsed",n.pgConfig.collapsed?"true":null)("theme",n.pgConfig.theme),o(10),r("logs",n.eventLog()),o(),r("ngIf",n.showCode))},dependencies:[E,G,k,H,J,Y,q,Z],styles:[`.playground-layout{display:flex;gap:var(--space-2xl);height:100%}@media(max-width:1200px){.playground-layout{flex-direction:column}}.playground-controls{flex:1;background:var(--surface-elevated);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-controls:hover{box-shadow:var(--shadow-md);border-color:var(--border-strong)}.playground-controls .control-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:var(--space-lg);margin-bottom:var(--space-xl)}.playground-controls .control-group{display:flex;flex-direction:column;gap:var(--space-xs)}.playground-controls .control-group label{font-size:.875rem;font-weight:600;color:var(--text-secondary);letter-spacing:-.01em}.playground-controls .control-group select,.playground-controls .control-group input[type=text],.playground-controls .control-group input[type=number],.playground-controls .control-group app-input,.playground-controls .control-group ui-dropdown{width:100%;display:block}.playground-controls .control-group app-input{min-height:40px;box-sizing:border-box}.playground-controls .control-group select,.playground-controls .control-group input[type=text],.playground-controls .control-group input[type=number]{padding:var(--space-sm) var(--space-md);background:var(--surface-1);border:1px solid var(--border-color);border-radius:var(--radius-md);color:var(--text-primary);font-size:.875rem;transition:all var(--transition-fast)}.playground-controls .control-group select:focus,.playground-controls .control-group input[type=text]:focus,.playground-controls .control-group input[type=number]:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-glow)}.playground-controls .checkbox-grid,.playground-controls .checkbox-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:var(--space-md)}.playground-controls .checkbox-grid .checkbox-item,.playground-controls .checkbox-group .checkbox-item{display:flex;align-items:center;gap:var(--space-sm);font-size:.9rem;cursor:pointer;color:var(--text-primary)}.playground-controls .checkbox-grid .checkbox-item app-checkbox,.playground-controls .checkbox-group .checkbox-item app-checkbox{display:inline-flex}.playground-preview{flex:1.5;display:flex;flex-direction:column;gap:var(--space-xl);min-width:0;min-height:300px;background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:var(--space-xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-preview .event-log,.playground-preview .event-log-container{background:var(--surface-2);padding:var(--space-md) var(--space-lg);border-radius:var(--radius-lg);font-family:var(--font-mono);font-size:.85rem;border-left:4px solid var(--primary);color:var(--text-primary);box-shadow:var(--shadow-inner);max-height:150px;overflow-y:auto}.playground-preview .event-log strong,.playground-preview .event-log-container strong{display:block;margin-bottom:var(--space-xs);color:var(--text-secondary);font-size:.75rem;text-transform:uppercase;letter-spacing:.05em}.playground-preview .event-log .log-items,.playground-preview .event-log-container .log-items{max-height:100px;overflow-y:auto}.playground-preview .event-log .log-item,.playground-preview .event-log-container .log-item{padding:.25rem 0;border-bottom:1px solid var(--border-light)}.playground-preview .event-log .log-item:last-child,.playground-preview .event-log-container .log-item:last-child{border-bottom:none}.playground-preview .preview-stage{min-height:300px;background:var(--surface-elevated);border-radius:var(--radius-2xl);border:2px dashed var(--border-color);display:flex;justify-content:center;align-items:center;padding:var(--space-2xl);position:relative;box-shadow:var(--shadow-sm);transition:all var(--transition-smooth)}.playground-preview .preview-stage:hover{border-color:var(--border-strong);box-shadow:var(--shadow-md)}.playground-preview ui-code-preview{width:100%;border-radius:var(--radius-xl);overflow:hidden;border:1px solid var(--border-color);box-shadow:var(--shadow-md)}.custom-slot-content{padding:var(--space-lg);display:flex;flex-direction:column;gap:var(--space-md);min-width:250px}.custom-slot-content p{margin:0;font-weight:700;font-size:.95rem}.custom-slot-content app-input{width:100%}.custom-slot-content .slot-actions{display:flex;gap:var(--space-sm);margin-top:var(--space-sm)}.custom-slot-content .slot-actions button,.custom-slot-content .slot-actions ui-button{flex:1}.custom-slot-content .slot-actions .btn-confirm{background:var(--primary);color:#fff;border:none}.custom-slot-content .slot-actions .btn-cancel{background:var(--surface-2);border:1px solid var(--border-color);color:var(--text-primary)}.section-title{font-size:.95rem;font-weight:700;color:var(--text-primary);margin:0 0 16px;padding-bottom:8px;border-bottom:2px solid var(--border-color)}.section-title:not(:first-child){margin-top:24px}.playground-controls .control-grid .full-width{grid-column:1/-1}.playground-preview .preview-stage{display:flex;height:600px;overflow:visible;padding:0;border-radius:var(--radius-xl);background:var(--surface-1);position:relative;border:1px solid var(--border-color)}.playground-preview .preview-stage .sidebar-wrapper{flex:0 0 auto;height:100%;border-right:1px solid var(--border-color);position:relative;z-index:20}.playground-preview .preview-stage .content-area-preview{flex:1;padding:40px;overflow-y:auto;background:var(--bg-primary)}.playground-preview .preview-stage .content-area-preview .content-header-sim{margin-bottom:30px}.playground-preview .preview-stage .content-area-preview .content-header-sim h3{margin:0 0 8px;color:var(--text-primary)}.playground-preview .preview-stage .content-area-preview .content-header-sim p{margin:0;color:var(--text-secondary)}.playground-preview .preview-stage .content-area-preview .sim-card{height:120px;background:var(--surface-2);border-radius:16px;margin-bottom:20px;border:1px dashed var(--border-color);opacity:.6}
`],encapsulation:2})};var b=()=>({id:"dashboard",label:"Dashboard",icon:"fas fa-home"}),ue=()=>({id:"analytics",label:"Analytics",icon:"fas fa-chart-bar"}),P=()=>({id:"settings",label:"Settings",icon:"fas fa-cog"}),v=(p,l,u)=>[p,l,u],$=()=>({id:"home",label:"Home",icon:"fas fa-home"}),ee=()=>({id:"about",label:"About",icon:"fas fa-info-circle"}),be=()=>({id:"contact",label:"Contact",icon:"fas fa-envelope"}),N=()=>({id:"projects",label:"Projects",icon:"fas fa-folder"}),ae=()=>({id:"analytics",label:"Analytics",icon:"fas fa-chart-line"}),O=()=>({id:"team",label:"Team",icon:"fas fa-users"}),T=(p,l,u,n,m)=>[p,l,u,n,m],ge=()=>({id:"active",label:"Active Projects",icon:"fas fa-circle"}),fe=()=>({id:"archived",label:"Archived",icon:"fas fa-archive"}),h=(p,l)=>[p,l],he=p=>({id:"projects",label:"Projects",icon:"fas fa-folder",children:p}),ie=()=>({id:"account",label:"Account",icon:"fas fa-user"}),ne=()=>({id:"security",label:"Security",icon:"fas fa-lock"}),te=()=>({id:"notifications",label:"Notifications",icon:"fas fa-bell"}),oe=()=>({id:"privacy",label:"Privacy",icon:"fas fa-shield-alt"}),ve=p=>({id:"preferences",label:"Preferences",icon:"fas fa-sliders-h",children:p}),Ce=p=>({id:"settings",label:"Settings",icon:"fas fa-cog",children:p}),ye=()=>({id:"messages",label:"Messages",icon:"fas fa-envelope",badge:12}),xe=()=>({id:"notifications",label:"Notifications",icon:"fas fa-bell",badge:5}),_e=()=>({id:"tasks",label:"Tasks",icon:"fas fa-tasks",badge:8}),S=(p,l,u,n)=>[p,l,u,n],re=()=>({id:"inbox",label:"Inbox",icon:"fas fa-inbox",badge:42}),we=()=>({id:"updates",label:"Updates",icon:"fas fa-sync",badge:"New"}),Me=()=>({id:"alerts",label:"Alerts",icon:"fas fa-exclamation-triangle",badge:"!"}),Se=()=>({id:"archive",label:"Archive",icon:"fas fa-archive"}),Pe=()=>({id:"projects",label:"Projects",icon:"fas fa-folder",badge:5}),De=()=>({id:"profile",label:"Profile",icon:"fas fa-user"}),Fe=()=>({id:"explore",label:"Explore",icon:"fas fa-compass"}),Ee=()=>({id:"projects",label:"Projects",icon:"fas fa-folder",badge:8}),ke=()=>({id:"terminal",label:"Terminal",icon:"fas fa-terminal"}),Ae=()=>({id:"data",label:"Data",icon:"fas fa-database"}),Oe=()=>({id:"eco",label:"Eco Dashboard",icon:"fas fa-leaf"}),Ne=()=>({id:"creative",label:"Creative",icon:"fas fa-palette"}),Te=()=>({id:"alerts",label:"Alerts",icon:"fas fa-bell",badge:3}),Ie=()=>({id:"favorites",label:"Favorites",icon:"fas fa-heart"}),je=()=>({id:"launch",label:"Launch",icon:"fas fa-rocket"}),Le=()=>({id:"dashboard",label:"Dashboard",icon:"fas fa-tachometer-alt"}),We=()=>({id:"performance",label:"Performance",icon:"fas fa-bolt"}),Be=()=>({id:"chart",label:"Charts",icon:"fas fa-chart-pie"}),Ue=()=>({id:"users",label:"Users",icon:"fas fa-users"}),Re=()=>({id:"dashboard",label:"Dashboard",icon:"fas fa-th-large"}),ze=()=>({id:"widgets",label:"Widgets",icon:"fas fa-cubes"}),Ge=()=>({id:"tools",label:"Tools",icon:"fas fa-wrench"}),He=()=>({id:"analytics",label:"Analytics",icon:"fas fa-chart-line",badge:3}),Je=()=>({id:"active-projects",label:"Active",icon:"fas fa-circle",badge:8}),Ve=()=>({id:"completed",label:"Completed",icon:"fas fa-check-circle"}),Ye=p=>({id:"projects",label:"Projects",icon:"fas fa-folder",badge:12,children:p}),qe=()=>({id:"active-tasks",label:"Active",icon:"fas fa-play",badge:10}),Ke=()=>({id:"pending",label:"Pending",icon:"fas fa-clock",badge:5}),Qe=p=>({id:"tasks",label:"Tasks",icon:"fas fa-tasks",badge:15,children:p}),de=()=>({id:"overview",label:"Overview",icon:"fas fa-chart-pie"}),Xe=()=>({id:"metrics",label:"Metrics",icon:"fas fa-tachometer-alt"}),le=()=>({id:"reports",label:"Reports",icon:"fas fa-file-alt"}),Ze=()=>({id:"users",label:"All Users",icon:"fas fa-users"}),$e=()=>({id:"roles",label:"Roles & Permissions",icon:"fas fa-key"}),ea=p=>({id:"user-mgmt",label:"User Management",icon:"fas fa-users-cog",children:p}),aa=()=>({id:"system",label:"System",icon:"fas fa-server"}),ia=()=>({id:"overview",label:"Overview",icon:"fas fa-chart-line"}),na=()=>({id:"active",label:"Active",icon:"fas fa-play",badge:8}),ta=()=>({id:"paused",label:"Paused",icon:"fas fa-pause",badge:2}),oa=()=>({id:"completed",label:"Completed",icon:"fas fa-check"}),ra=p=>({id:"projects",label:"Projects",icon:"fas fa-folder-open",badge:12,children:p}),da=()=>({id:"direct",label:"Direct Messages",icon:"fas fa-comment",badge:12}),la=()=>({id:"channels",label:"Channels",icon:"fas fa-hashtag",badge:5}),sa=()=>({id:"mentions",label:"Mentions",icon:"fas fa-at",badge:"New"}),ca=()=>({id:"dashboard",label:"Dashboard",icon:"fas fa-chart-line"}),pa=()=>({id:"orders",label:"Orders",icon:"fas fa-shopping-cart",badge:28}),ma=()=>({id:"products",label:"Products",icon:"fas fa-box"}),ua=()=>({id:"customers",label:"Customers",icon:"fas fa-users"}),ba=()=>({id:"reports",label:"Reports",icon:"fas fa-file-invoice-dollar"}),ga=()=>({id:"realtime",label:"Real-time",icon:"fas fa-bolt",badge:"Live"}),fa=()=>({id:"trends",label:"Trends",icon:"fas fa-chart-line"}),ha=()=>({id:"advanced",label:"Advanced",icon:"fas fa-sliders-h"}),se=class p extends Q{variants=[{id:"basic-default",title:"Basic Default",icon:"\u{1F4CB}"},{id:"minimal-items",title:"Minimal Items",icon:"\u26A1"},{id:"collapsed-compact",title:"Collapsed/Compact",icon:"\u25C0\uFE0F"},{id:"expanded-full",title:"Expanded Full",icon:"\u25B6\uFE0F"},{id:"nested-navigation",title:"Nested Navigation",icon:"\u{1F500}"},{id:"nested-deep",title:"Deep Nesting (3 Levels)",icon:"\u{1F3D7}\uFE0F"},{id:"with-badges",title:"With Badges",icon:"\u{1F514}"},{id:"badges-mixed",title:"Mixed Badge Types",icon:"\u{1F522}"},{id:"user-profile",title:"User Profile",icon:"\u{1F464}"},{id:"user-with-avatar",title:"User with Avatar",icon:"\u{1F5BC}\uFE0F"},{id:"no-user-profile",title:"No User Profile",icon:"\u2B55"},{id:"theme-light",title:"Light Theme",icon:"\u2600\uFE0F"},{id:"theme-dark",title:"Dark Theme",icon:"\u{1F319}"},{id:"accent-indigo",title:"Accent: Indigo",icon:"\u{1F535}"},{id:"accent-green",title:"Accent: Green",icon:"\u{1F7E2}"},{id:"accent-purple",title:"Accent: Purple",icon:"\u{1F7E3}"},{id:"accent-orange",title:"Accent: Orange",icon:"\u{1F7E0}"},{id:"accent-pink",title:"Accent: Pink",icon:"\u{1FA77}"},{id:"brand-custom",title:"Custom Branding",icon:"\u{1F3F7}\uFE0F"},{id:"brand-icon",title:"Brand with Icon",icon:"\u{1F3A8}"},{id:"icons-fontawesome",title:"FontAwesome Icons",icon:"\u{1F3AF}"},{id:"icons-custom",title:"Custom Icons",icon:"\u2728"},{id:"full-featured",title:"Full Featured",icon:"\u{1F48E}"},{id:"dashboard-layout",title:"Dashboard Layout",icon:"\u{1F4CA}"},{id:"admin-panel",title:"Admin Panel",icon:"\u2699\uFE0F"},{id:"project-management",title:"Project Management",icon:"\u{1F4C1}"},{id:"messaging-app",title:"Messaging App",icon:"\u{1F4AC}"},{id:"ecommerce",title:"E-commerce Admin",icon:"\u{1F6D2}"},{id:"analytics-dashboard",title:"Analytics Dashboard",icon:"\u{1F4C8}"},{id:"settings-menu",title:"Settings Menu",icon:"\u{1F527}"}];get exampleVariants(){return this.variants}anchorLinks=JSON.stringify(this.variants.map(l=>({id:l.id,label:l.title,target:l.id,icon:l.icon})));ngOnInit(){}basicDefaultCode=c(`<app-modern-sidebar
  brand-name="My App"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-bar" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);minimalItemsCode=c(`<app-modern-sidebar
  brand-name="Simple App"
  selected-id="home"
  [items]='[
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "about", label: "About", icon: "fas fa-info-circle" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope" }
  ]'>
</app-modern-sidebar>`);collapsedCompactCode=c(`<app-modern-sidebar
  brand-name="Compact"
  selected-id="dashboard"
  collapsed="true"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "projects", label: "Projects", icon: "fas fa-folder" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);expandedFullCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);nestedNavigationCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);nestedDeepCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);withBadgesCode=c(`<app-modern-sidebar
  brand-name="Notification Hub"
  selected-id="messages"
  accent-color="#f59e0b"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "messages", label: "Messages", icon: "fas fa-envelope", badge: 12 },
    { id: "notifications", label: "Notifications", icon: "fas fa-bell", badge: 5 },
    { id: "tasks", label: "Tasks", icon: "fas fa-tasks", badge: 8 }
  ]'>
</app-modern-sidebar>`);badgesMixedCode=c(`<app-modern-sidebar
  brand-name="Mixed Badges"
  selected-id="inbox"
  accent-color="#3b82f6"
  [items]='[
    { id: "inbox", label: "Inbox", icon: "fas fa-inbox", badge: 42 },
    { id: "updates", label: "Updates", icon: "fas fa-sync", badge: "New" },
    { id: "alerts", label: "Alerts", icon: "fas fa-exclamation-triangle", badge: "!" },
    { id: "archive", label: "Archive", icon: "fas fa-archive" }
  ]'>
</app-modern-sidebar>`);userProfileCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);userWithAvatarCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);noUserProfileCode=c(`<app-modern-sidebar
  brand-name="Public App"
  selected-id="home"
  accent-color="#6366f1"
  [items]='[
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "explore", label: "Explore", icon: "fas fa-compass" },
    { id: "about", label: "About", icon: "fas fa-info-circle" }
  ]'>
</app-modern-sidebar>`);themeLightCode=c(`<app-modern-sidebar
  brand-name="Light Theme App"
  selected-id="dashboard"
  accent-color="#06b6d4"
  theme="light"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "analytics", label: "Analytics", icon: "fas fa-chart-line" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);themeDarkCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);accentIndigoCode=c(`<app-modern-sidebar
  brand-name="Indigo App"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "data", label: "Data", icon: "fas fa-database" }
  ]'>
</app-modern-sidebar>`);accentGreenCode=c(`<app-modern-sidebar
  brand-name="Green Theme"
  selected-id="dashboard"
  accent-color="#10b981"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "eco", label: "Eco Dashboard", icon: "fas fa-leaf" }
  ]'>
</app-modern-sidebar>`);accentPurpleCode=c(`<app-modern-sidebar
  brand-name="Purple Theme"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "creative", label: "Creative", icon: "fas fa-palette" }
  ]'>
</app-modern-sidebar>`);accentOrangeCode=c(`<app-modern-sidebar
  brand-name="Orange Theme"
  selected-id="dashboard"
  accent-color="#f59e0b"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "alerts", label: "Alerts", icon: "fas fa-bell", badge: 3 }
  ]'>
</app-modern-sidebar>`);accentPinkCode=c(`<app-modern-sidebar
  brand-name="Pink Theme"
  selected-id="dashboard"
  accent-color="#ec4899"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "favorites", label: "Favorites", icon: "fas fa-heart" }
  ]'>
</app-modern-sidebar>`);brandCustomCode=c(`<app-modern-sidebar
  brand-name="\u{1F680} Rocket Dashboard"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "launch", label: "Launch", icon: "fas fa-rocket" }
  ]'>
</app-modern-sidebar>`);brandIconCode=c(`<app-modern-sidebar
  brand-name="\u26A1 FastApp"
  selected-id="dashboard"
  accent-color="#14b8a6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-tachometer-alt" },
    { id: "performance", label: "Performance", icon: "fas fa-bolt" }
  ]'>
</app-modern-sidebar>`);iconsFontawesomeCode=c(`<app-modern-sidebar
  brand-name="Icon Gallery"
  selected-id="dashboard"
  accent-color="#6366f1"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-home" },
    { id: "chart", label: "Charts", icon: "fas fa-chart-pie" },
    { id: "users", label: "Users", icon: "fas fa-users" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" }
  ]'>
</app-modern-sidebar>`);iconsCustomCode=c(`<app-modern-sidebar
  brand-name="Custom Icons"
  selected-id="dashboard"
  accent-color="#8b5cf6"
  [items]='[
    { id: "dashboard", label: "Dashboard", icon: "fas fa-th-large" },
    { id: "widgets", label: "Widgets", icon: "fas fa-cubes" },
    { id: "tools", label: "Tools", icon: "fas fa-wrench" }
  ]'>
</app-modern-sidebar>`);fullFeaturedCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);dashboardLayoutCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);adminPanelCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);projectManagementCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);messagingAppCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);ecommerceCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);analyticsDashboardCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);settingsMenuCode=c(`<app-modern-sidebar
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
</app-modern-sidebar>`);static \u0275fac=(()=>{let l;return function(n){return(l||(l=I(p)))(n||p)}})();static \u0275cmp=D({type:p,selectors:[["app-set-modern-sidebar-demo"]],features:[L],decls:354,vars:328,consts:[[1,"demo-container"],["icon","\u{1F4F1}","title","Modern Sidebar Component","description","A sleek, professional navigation sidebar with collapsible design, nested navigation, badge support, user profiles, and smooth animations."],["slot","playground"],["slot","examples",1,"examples-split-layout"],[3,"variants","useAnchor"],["id","examples-scroll-area",1,"examples-content"],["id","basic-default","title","Basic Default","description","Standard sidebar with brand name and basic navigation items.",2,"margin-top","0",3,"code"],[1,"demo-grid"],[1,"demo-card"],[1,"preview-box","sidebar-preview"],["brand-name","My App","selected-id","dashboard","accent-color","#6366f1",3,"items"],["id","minimal-items"],[1,"section-header"],["brand-name","Simple App","selected-id","home",3,"items"],[3,"htmlCode"],["id","collapsed-compact"],["brand-name","Compact","selected-id","dashboard","collapsed","true",3,"items"],["id","expanded-full"],["brand-name","Full Width","selected-id","dashboard","collapsed","false",3,"items"],["id","nested-navigation"],["brand-name","Project Hub","selected-id","active","accent-color","#10b981",3,"items"],["id","nested-deep"],["brand-name","Deep Nesting","selected-id","notifications","accent-color","#ec4899",3,"items"],["id","with-badges"],["brand-name","Notification Hub","selected-id","messages","accent-color","#f59e0b",3,"items"],["id","badges-mixed"],["brand-name","Mixed Badges","selected-id","inbox","accent-color","#3b82f6",3,"items"],["id","user-profile"],["brand-name","Enterprise App","selected-id","dashboard","accent-color","#8b5cf6","user-name","Sarah Johnson","user-role","Product Manager","user-avatar","https://i.pravatar.cc/100?img=44",3,"items"],["id","user-with-avatar"],["brand-name","Team Hub","selected-id","projects","accent-color","#14b8a6","user-name","Alex Chen","user-role","Senior Developer","user-avatar","https://i.pravatar.cc/100?img=33",3,"items"],["id","no-user-profile"],["brand-name","Public App","selected-id","home","accent-color","#6366f1",3,"items"],["id","theme-light"],["brand-name","Light Theme App","selected-id","dashboard","accent-color","#06b6d4","theme","light",3,"items"],["id","theme-dark"],["brand-name","Dark Mode App","selected-id","dashboard","accent-color","#3b82f6","theme","dark","user-name","Alex Smith","user-role","Developer","user-avatar","https://i.pravatar.cc/100?img=33",3,"items"],["id","accent-indigo"],["brand-name","Indigo App","selected-id","dashboard","accent-color","#6366f1",3,"items"],["id","accent-green"],["brand-name","Green Theme","selected-id","dashboard","accent-color","#10b981",3,"items"],["id","accent-purple"],["brand-name","Purple Theme","selected-id","dashboard","accent-color","#8b5cf6",3,"items"],["id","accent-orange"],["brand-name","Orange Theme","selected-id","dashboard","accent-color","#f59e0b",3,"items"],["id","accent-pink"],["brand-name","Pink Theme","selected-id","dashboard","accent-color","#ec4899",3,"items"],["id","brand-custom"],["brand-name","\u{1F680} Rocket Dashboard","selected-id","dashboard","accent-color","#6366f1",3,"items"],["id","brand-icon"],["brand-name","\u26A1 FastApp","selected-id","dashboard","accent-color","#14b8a6",3,"items"],["id","icons-fontawesome"],["brand-name","Icon Gallery","selected-id","dashboard","accent-color","#6366f1",3,"items"],["id","icons-custom"],["brand-name","Custom Icons","selected-id","dashboard","accent-color","#8b5cf6",3,"items"],["id","full-featured"],["brand-name","Advanced Dashboard","selected-id","active-tasks","accent-color","#6366f1","user-name","Emily Davis","user-role","Team Lead","user-avatar","https://i.pravatar.cc/100?img=25",3,"items"],["id","dashboard-layout"],["brand-name","Dashboard Pro","selected-id","overview","accent-color","#3b82f6","user-name","Dashboard Admin","user-role","Administrator","user-avatar","https://i.pravatar.cc/100?img=12",3,"items"],["id","admin-panel"],["brand-name","Admin Panel","selected-id","users","accent-color","#10b981","user-name","Admin User","user-role","Super Admin","user-avatar","https://i.pravatar.cc/100?img=1",3,"items"],["id","project-management"],["brand-name","Project Manager","selected-id","active","accent-color","#8b5cf6","user-name","Project Lead","user-role","Manager","user-avatar","https://i.pravatar.cc/100?img=20",3,"items"],["id","messaging-app"],["brand-name","ChatApp","selected-id","inbox","accent-color","#ec4899","user-name","Chat User","user-role","Online","user-avatar","https://i.pravatar.cc/100?img=15",3,"items"],["id","ecommerce"],["brand-name","E-Shop Admin","selected-id","orders","accent-color","#f59e0b","user-name","Shop Admin","user-role","Store Manager","user-avatar","https://i.pravatar.cc/100?img=30",3,"items"],["id","analytics-dashboard"],["brand-name","Analytics Pro","selected-id","realtime","accent-color","#14b8a6","user-name","Data Analyst","user-role","Analytics Team","user-avatar","https://i.pravatar.cc/100?img=40",3,"items"],["id","settings-menu"],["brand-name","Settings","selected-id","notifications","accent-color","#6366f1",3,"items"],["slot","docs"],[1,"examples-split-layout"],[1,"examples-content"],[1,"demo-section"],[1,"demo-card",2,"padding","24px"]],template:function(u,n){u&1&&(a(0,"div",0),d(1,"app-demo-header",1),a(2,"demo-tabs")(3,"div",2),d(4,"app-modern-sidebar-playground"),e(),a(5,"div",3),d(6,"app-demo-sidebar",4),a(7,"div",5)(8,"app-example-section",6)(9,"div",7)(10,"div",8)(11,"div",9),d(12,"app-modern-sidebar",10),e()()()(),a(13,"demo-section",11)(14,"div",12)(15,"h2"),t(16,"\u26A1 Minimal Items"),e(),a(17,"p"),t(18,"Clean sidebar with just essential navigation items."),e()(),a(19,"div",7)(20,"demo-card")(21,"div",9),d(22,"app-modern-sidebar",13),e(),d(23,"ui-code-preview",14),e()()(),a(24,"demo-section",15)(25,"div",12)(26,"h2"),t(27,"\u25C0\uFE0F Collapsed/Compact"),e(),a(28,"p"),t(29,"Icon-only compact mode for maximum space efficiency."),e()(),a(30,"div",7)(31,"demo-card")(32,"div",9),d(33,"app-modern-sidebar",16),e(),d(34,"ui-code-preview",14),e()()(),a(35,"demo-section",17)(36,"div",12)(37,"h2"),t(38,"\u25B6\uFE0F Expanded Full"),e(),a(39,"p"),t(40,"Full-width sidebar with complete labels and icons."),e()(),a(41,"div",7)(42,"demo-card")(43,"div",9),d(44,"app-modern-sidebar",18),e(),d(45,"ui-code-preview",14),e()()(),a(46,"demo-section",19)(47,"div",12)(48,"h2"),t(49,"\u{1F500} Nested Navigation"),e(),a(50,"p"),t(51,"Menu items with expandable children for organized navigation."),e()(),a(52,"div",7)(53,"demo-card")(54,"div",9),d(55,"app-modern-sidebar",20),e(),d(56,"ui-code-preview",14),e()()(),a(57,"demo-section",21)(58,"div",12)(59,"h2"),t(60,"\u{1F3D7}\uFE0F Deep Nesting (3 Levels)"),e(),a(61,"p"),t(62,"Three-level deep menu hierarchy for complex navigation."),e()(),a(63,"div",7)(64,"demo-card")(65,"div",9),d(66,"app-modern-sidebar",22),e(),d(67,"ui-code-preview",14),e()()(),a(68,"demo-section",23)(69,"div",12)(70,"h2"),t(71,"\u{1F514} With Badges"),e(),a(72,"p"),t(73,"Notification badges showing counts on menu items."),e()(),a(74,"div",7)(75,"demo-card")(76,"div",9),d(77,"app-modern-sidebar",24),e(),d(78,"ui-code-preview",14),e()()(),a(79,"demo-section",25)(80,"div",12)(81,"h2"),t(82,"\u{1F522} Mixed Badge Types"),e(),a(83,"p"),t(84,"Numeric and text badges for different notification types."),e()(),a(85,"div",7)(86,"demo-card")(87,"div",9),d(88,"app-modern-sidebar",26),e(),d(89,"ui-code-preview",14),e()()(),a(90,"demo-section",27)(91,"div",12)(92,"h2"),t(93,"\u{1F464} User Profile"),e(),a(94,"p"),t(95,"Sidebar with user profile information displayed."),e()(),a(96,"div",7)(97,"demo-card")(98,"div",9),d(99,"app-modern-sidebar",28),e(),d(100,"ui-code-preview",14),e()()(),a(101,"demo-section",29)(102,"div",12)(103,"h2"),t(104,"\u{1F5BC}\uFE0F User with Avatar"),e(),a(105,"p"),t(106,"User profile with custom avatar image."),e()(),a(107,"div",7)(108,"demo-card")(109,"div",9),d(110,"app-modern-sidebar",30),e(),d(111,"ui-code-preview",14),e()()(),a(112,"demo-section",31)(113,"div",12)(114,"h2"),t(115,"\u2B55 No User Profile"),e(),a(116,"p"),t(117,"Sidebar without user profile section for public apps."),e()(),a(118,"div",7)(119,"demo-card")(120,"div",9),d(121,"app-modern-sidebar",32),e(),d(122,"ui-code-preview",14),e()()(),a(123,"demo-section",33)(124,"div",12)(125,"h2"),t(126,"\u2600\uFE0F Light Theme"),e(),a(127,"p"),t(128,"Default light theme with bright background."),e()(),a(129,"div",7)(130,"demo-card")(131,"div",9),d(132,"app-modern-sidebar",34),e(),d(133,"ui-code-preview",14),e()()(),a(134,"demo-section",35)(135,"div",12)(136,"h2"),t(137,"\u{1F319} Dark Theme"),e(),a(138,"p"),t(139,"Dark theme with inverted colors for night mode."),e()(),a(140,"div",7)(141,"demo-card")(142,"div",9),d(143,"app-modern-sidebar",36),e(),d(144,"ui-code-preview",14),e()()(),a(145,"demo-section",37)(146,"div",12)(147,"h2"),t(148,"\u{1F535} Accent: Indigo"),e(),a(149,"p"),t(150,"Indigo accent color for professional appearance."),e()(),a(151,"div",7)(152,"demo-card")(153,"div",9),d(154,"app-modern-sidebar",38),e(),d(155,"ui-code-preview",14),e()()(),a(156,"demo-section",39)(157,"div",12)(158,"h2"),t(159,"\u{1F7E2} Accent: Green"),e(),a(160,"p"),t(161,"Green accent for eco or success-themed apps."),e()(),a(162,"div",7)(163,"demo-card")(164,"div",9),d(165,"app-modern-sidebar",40),e(),d(166,"ui-code-preview",14),e()()(),a(167,"demo-section",41)(168,"div",12)(169,"h2"),t(170,"\u{1F7E3} Accent: Purple"),e(),a(171,"p"),t(172,"Purple accent for creative applications."),e()(),a(173,"div",7)(174,"demo-card")(175,"div",9),d(176,"app-modern-sidebar",42),e(),d(177,"ui-code-preview",14),e()()(),a(178,"demo-section",43)(179,"div",12)(180,"h2"),t(181,"\u{1F7E0} Accent: Orange"),e(),a(182,"p"),t(183,"Orange accent for energetic, alert-focused apps."),e()(),a(184,"div",7)(185,"demo-card")(186,"div",9),d(187,"app-modern-sidebar",44),e(),d(188,"ui-code-preview",14),e()()(),a(189,"demo-section",45)(190,"div",12)(191,"h2"),t(192,"\u{1FA77} Accent: Pink"),e(),a(193,"p"),t(194,"Pink accent for modern, playful interfaces."),e()(),a(195,"div",7)(196,"demo-card")(197,"div",9),d(198,"app-modern-sidebar",46),e(),d(199,"ui-code-preview",14),e()()(),a(200,"demo-section",47)(201,"div",12)(202,"h2"),t(203,"\u{1F3F7}\uFE0F Custom Branding"),e(),a(204,"p"),t(205,"Custom brand name with emoji for personality."),e()(),a(206,"div",7)(207,"demo-card")(208,"div",9),d(209,"app-modern-sidebar",48),e(),d(210,"ui-code-preview",14),e()()(),a(211,"demo-section",49)(212,"div",12)(213,"h2"),t(214,"\u{1F3A8} Brand with Icon"),e(),a(215,"p"),t(216,"Brand name with icon for visual identity."),e()(),a(217,"div",7)(218,"demo-card")(219,"div",9),d(220,"app-modern-sidebar",50),e(),d(221,"ui-code-preview",14),e()()(),a(222,"demo-section",51)(223,"div",12)(224,"h2"),t(225,"\u{1F3AF} FontAwesome Icons"),e(),a(226,"p"),t(227,"Standard FontAwesome icon library."),e()(),a(228,"div",7)(229,"demo-card")(230,"div",9),d(231,"app-modern-sidebar",52),e(),d(232,"ui-code-preview",14),e()()(),a(233,"demo-section",53)(234,"div",12)(235,"h2"),t(236,"\u2728 Custom Icons"),e(),a(237,"p"),t(238,"Custom icon selection from FontAwesome library."),e()(),a(239,"div",7)(240,"demo-card")(241,"div",9),d(242,"app-modern-sidebar",54),e(),d(243,"ui-code-preview",14),e()()(),a(244,"demo-section",55)(245,"div",12)(246,"h2"),t(247,"\u{1F48E} Full Featured"),e(),a(248,"p"),t(249,"Complete sidebar with all features: nesting, badges, user profile."),e()(),a(250,"div",7)(251,"demo-card")(252,"div",9),d(253,"app-modern-sidebar",56),e(),d(254,"ui-code-preview",14),e()()(),a(255,"demo-section",57)(256,"div",12)(257,"h2"),t(258,"\u{1F4CA} Dashboard Layout"),e(),a(259,"p"),t(260,"Optimized for dashboard and analytics applications."),e()(),a(261,"div",7)(262,"demo-card")(263,"div",9),d(264,"app-modern-sidebar",58),e(),d(265,"ui-code-preview",14),e()()(),a(266,"demo-section",59)(267,"div",12)(268,"h2"),t(269,"\u2699\uFE0F Admin Panel"),e(),a(270,"p"),t(271,"Administrative interface with user management."),e()(),a(272,"div",7)(273,"demo-card")(274,"div",9),d(275,"app-modern-sidebar",60),e(),d(276,"ui-code-preview",14),e()()(),a(277,"demo-section",61)(278,"div",12)(279,"h2"),t(280,"\u{1F4C1} Project Management"),e(),a(281,"p"),t(282,"Project tracking and team collaboration interface."),e()(),a(283,"div",7)(284,"demo-card")(285,"div",9),d(286,"app-modern-sidebar",62),e(),d(287,"ui-code-preview",14),e()()(),a(288,"demo-section",63)(289,"div",12)(290,"h2"),t(291,"\u{1F4AC} Messaging App"),e(),a(292,"p"),t(293,"Chat and messaging application layout."),e()(),a(294,"div",7)(295,"demo-card")(296,"div",9),d(297,"app-modern-sidebar",64),e(),d(298,"ui-code-preview",14),e()()(),a(299,"demo-section",65)(300,"div",12)(301,"h2"),t(302,"\u{1F6D2} E-commerce Admin"),e(),a(303,"p"),t(304,"Online store administration interface."),e()(),a(305,"div",7)(306,"demo-card")(307,"div",9),d(308,"app-modern-sidebar",66),e(),d(309,"ui-code-preview",14),e()()(),a(310,"demo-section",67)(311,"div",12)(312,"h2"),t(313,"\u{1F4C8} Analytics Dashboard"),e(),a(314,"p"),t(315,"Real-time analytics and reporting interface."),e()(),a(316,"div",7)(317,"demo-card")(318,"div",9),d(319,"app-modern-sidebar",68),e(),d(320,"ui-code-preview",14),e()()(),a(321,"demo-section",69)(322,"div",12)(323,"h2"),t(324,"\u{1F527} Settings Menu"),e(),a(325,"p"),t(326,"Comprehensive settings and preferences interface."),e()(),a(327,"div",7)(328,"demo-card")(329,"div",9),d(330,"app-modern-sidebar",70),e(),d(331,"ui-code-preview",14),e()()()()(),a(332,"div",71)(333,"div",72),d(334,"app-demo-sidebar",4),a(335,"div",73)(336,"div",0)(337,"section",74)(338,"div",12)(339,"h2"),t(340,"\u{1F4D6} Documentation"),e(),a(341,"p"),t(342,"Links, API references, and detailed usage notes"),e()(),a(343,"div",75)(344,"p"),t(345," The documentation for this component is currently being compiled. Our technical writers are working to provide comprehensive API references, accessibility guidelines, and best practices. "),e(),a(346,"p"),t(347," In the meantime, please explore the "),a(348,"strong"),t(349,"Playground"),e(),t(350," for interactive testing and the "),a(351,"strong"),t(352,"Examples"),e(),t(353," tab for common implementation patterns. "),e()()()()()()()()()),u&2&&(o(6),r("variants",n.exampleVariants)("useAnchor",!0),o(2),r("code",n.basicDefaultCode()),o(4),r("items",f(67,v,i(64,b),i(65,ue),i(66,P))),o(10),r("items",f(74,v,i(71,$),i(72,ee),i(73,be))),o(),r("htmlCode",n.minimalItemsCode()),o(10),r("items",f(81,v,i(78,b),i(79,N),i(80,P))),o(),r("htmlCode",n.collapsedCompactCode()),o(10),r("items",F(90,T,i(85,b),i(86,ae),i(87,N),i(88,O),i(89,P))),o(),r("htmlCode",n.expandedFullCode()),o(10),r("items",g(104,h,i(96,b),w(102,he,g(99,h,i(97,ge),i(98,fe))))),o(),r("htmlCode",n.nestedNavigationCode()),o(10),r("items",g(123,h,i(107,b),w(121,Ce,f(117,v,i(108,ie),i(109,ne),w(115,ve,g(112,h,i(110,te),i(111,oe))))))),o(),r("htmlCode",n.nestedDeepCode()),o(10),r("items",M(130,S,i(126,b),i(127,ye),i(128,xe),i(129,_e))),o(),r("htmlCode",n.withBadgesCode()),o(10),r("items",M(139,S,i(135,re),i(136,we),i(137,Me),i(138,Se))),o(),r("htmlCode",n.badgesMixedCode()),o(10),r("items",f(147,v,i(144,b),i(145,N),i(146,O))),o(),r("htmlCode",n.userProfileCode()),o(10),r("items",f(154,v,i(151,Pe),i(152,O),i(153,De))),o(),r("htmlCode",n.userWithAvatarCode()),o(10),r("items",f(161,v,i(158,$),i(159,Fe),i(160,ee))),o(),r("htmlCode",n.noUserProfileCode()),o(10),r("items",f(168,v,i(165,b),i(166,ae),i(167,P))),o(),r("htmlCode",n.themeLightCode()),o(10),r("items",f(175,v,i(172,b),i(173,Ee),i(174,ke))),o(),r("htmlCode",n.themeDarkCode()),o(10),r("items",g(181,h,i(179,b),i(180,Ae))),o(),r("htmlCode",n.accentIndigoCode()),o(10),r("items",g(186,h,i(184,b),i(185,Oe))),o(),r("htmlCode",n.accentGreenCode()),o(10),r("items",g(191,h,i(189,b),i(190,Ne))),o(),r("htmlCode",n.accentPurpleCode()),o(10),r("items",g(196,h,i(194,b),i(195,Te))),o(),r("htmlCode",n.accentOrangeCode()),o(10),r("items",g(201,h,i(199,b),i(200,Ie))),o(),r("htmlCode",n.accentPinkCode()),o(10),r("items",g(206,h,i(204,b),i(205,je))),o(),r("htmlCode",n.brandCustomCode()),o(10),r("items",g(211,h,i(209,Le),i(210,We))),o(),r("htmlCode",n.brandIconCode()),o(10),r("items",M(218,S,i(214,b),i(215,Be),i(216,Ue),i(217,P))),o(),r("htmlCode",n.iconsFontawesomeCode()),o(10),r("items",f(226,v,i(223,Re),i(224,ze),i(225,Ge))),o(),r("htmlCode",n.iconsCustomCode()),o(10),r("items",M(246,S,i(230,b),i(231,He),w(237,Ye,g(234,h,i(232,Je),i(233,Ve))),w(244,Qe,g(241,h,i(239,qe),i(240,Ke))))),o(),r("htmlCode",n.fullFeaturedCode()),o(10),r("items",M(255,S,i(251,de),i(252,Xe),i(253,le),i(254,P))),o(),r("htmlCode",n.dashboardLayoutCode()),o(10),r("items",f(269,v,i(260,b),w(266,ea,g(263,h,i(261,Ze),i(262,$e))),i(268,aa))),o(),r("htmlCode",n.adminPanelCode()),o(10),r("items",f(284,v,i(273,ia),w(281,ra,f(277,v,i(274,na),i(275,ta),i(276,oa))),i(283,O))),o(),r("htmlCode",n.projectManagementCode()),o(10),r("items",M(292,S,i(288,re),i(289,da),i(290,la),i(291,sa))),o(),r("htmlCode",n.messagingAppCode()),o(10),r("items",F(302,T,i(297,ca),i(298,pa),i(299,ma),i(300,ua),i(301,ba))),o(),r("htmlCode",n.ecommerceCode()),o(10),r("items",M(312,S,i(308,de),i(309,ga),i(310,fa),i(311,le))),o(),r("htmlCode",n.analyticsDashboardCode()),o(10),r("items",F(322,T,i(317,ie),i(318,ne),i(319,te),i(320,oe),i(321,ha))),o(),r("htmlCode",n.settingsMenuCode()),o(3),r("variants",n.exampleVariants)("useAnchor",!0))},dependencies:[E,k,A,K,V,X],styles:['.demo-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;overflow:hidden;box-sizing:border-box;max-width:90%;margin:0 auto;padding:var(--space-2xl) var(--space-xl);animation:fadeIn .5s cubic-bezier(.16,1,.3,1) forwards}.demo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.75rem;font-weight:800;background:linear-gradient(135deg,var(--text-primary) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:var(--space-sm);display:flex;align-items:center;gap:var(--space-md);letter-spacing:-.02em;line-height:1.2}.intro-text[_ngcontent-%COMP%]{font-size:1.125rem;color:var(--text-secondary);margin-bottom:var(--space-2xl);line-height:1.7;font-weight:400}.variants-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:var(--space-sm);padding:var(--space-sm) var(--space-xs) var(--space-md) var(--space-xs);margin-bottom:var(--space-xl);scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--border-strong);border-radius:var(--radius-full);transition:background-color var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--text-tertiary)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]{flex-shrink:0;--ui-button-radius: var(--radius-full);transition:transform var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]::part(button){border-radius:var(--radius-full);font-weight:600;font-size:.875rem;padding:.625rem 1.25rem;color:#fff;white-space:nowrap;box-shadow:var(--shadow-sm);transition:all var(--transition-fast)}.variants-nav[_ngcontent-%COMP%]   ui-button[_ngcontent-%COMP%]::part(button):hover{box-shadow:var(--shadow-md)}.demo-section[_ngcontent-%COMP%]{margin-bottom:var(--space-2xl);scroll-margin-top:var(--space-xl);animation:slideInLeft .6s cubic-bezier(.16,1,.3,1) forwards;animation-delay:.1s;opacity:0}.section-header[_ngcontent-%COMP%]{margin-bottom:var(--space-xl)}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.875rem;font-weight:700;color:var(--text-primary);margin-bottom:var(--space-sm);letter-spacing:-.01em;line-height:1.3}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:var(--text-secondary);margin:0;line-height:1.6;max-width:700px}.demo-card[_ngcontent-%COMP%]{background:var(--surface-elevated);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:var(--space-2xl);display:flex;flex-direction:column;gap:var(--space-2xl);box-shadow:var(--shadow-sm);transition:all var(--transition-smooth);position:relative}.demo-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:var(--gradient-primary);opacity:0;transition:opacity var(--transition-smooth)}.demo-card[_ngcontent-%COMP%]:hover{box-shadow:var(--shadow-lg);border-color:var(--border-strong);transform:translateY(-2px)}.demo-card[_ngcontent-%COMP%]:hover:before{opacity:1}.pane-examples[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-examples[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-docs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .pane-docs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%;min-height:0;box-sizing:border-box}.examples-split-layout[_ngcontent-%COMP%]{display:flex;gap:1rem;position:relative;height:100%;box-sizing:border-box;overflow:hidden;padding:1rem;background:#f4faf6}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]{width:226px;flex-shrink:0;height:100%;min-height:0;overflow-y:auto;overflow-x:hidden;background:#fff;padding:1.5rem 1rem;border-radius:16px;border:1px solid #d1fae5;box-shadow:0 2px 12px #16a34a12;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#16a34a transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#16a34a;border-radius:4px}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#15803d}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:#16a34a;margin-bottom:1rem;text-transform:uppercase;letter-spacing:.08em;padding-left:.5rem}.examples-split-layout[_ngcontent-%COMP%]   .examples-sidebar[_ngcontent-%COMP%]   ui-anchor[_ngcontent-%COMP%]{--primary-color: #16a34a;--text-secondary: #4b5563;--hover-bg: #f0fdf4;--active-bg: #e6f8ec;--anchor-active-color: #16a34a}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]{flex:1;min-width:0;height:100%;overflow-y:auto;overflow-x:hidden;padding:2rem;background:#fff;border-radius:16px;border:1px solid #e2e8f0;box-shadow:0 2px 12px #0000000a;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#16a34a transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#16a34a;border-radius:4px}.examples-split-layout[_ngcontent-%COMP%]   .examples-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#15803d}.demo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:var(--space-xl);margin-bottom:var(--space-xl)}.demo-grid.col-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.demo-grid.col-3[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.demo-flex-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--space-md);align-items:center}.demo-flex-wrap.column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.preview-box[_ngcontent-%COMP%]{background:var(--surface-2);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:var(--space-xl);display:flex;flex-direction:column;align-items:stretch;justify-content:center;min-height:160px;position:relative}.preview-box.glass-bg[_ngcontent-%COMP%]{background:var(--gradient-glass);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.full-width[_ngcontent-%COMP%]{width:100%!important}.preview-box[_ngcontent-%COMP%]{min-height:300px}.preview-box.sidebar-preview[_ngcontent-%COMP%]{padding:0;min-height:400px}.sidebar-container[_ngcontent-%COMP%]{width:100%;height:100%;border:1px solid var(--border-color);border-radius:var(--radius-md);overflow:hidden;display:flex;background:var(--surface-elevated)}.sidebar-preview[_ngcontent-%COMP%]{position:relative;display:flex;align-items:stretch}.sidebar-preview[_ngcontent-%COMP%]   app-modern-sidebar[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.content-area[_ngcontent-%COMP%]{flex:1;padding:1.5rem;background:var(--bg-primary)}.feature-group[_ngcontent-%COMP%]{display:grid;gap:1rem;margin-bottom:1.5rem}.feature-subgrid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem}.form-example[_ngcontent-%COMP%]{padding:1.5rem;background:var(--surface-2);border-radius:.5rem;border:1px solid var(--border-color)}@media(max-width:768px){.preview-box[_ngcontent-%COMP%]{min-height:250px}.preview-box.sidebar-preview[_ngcontent-%COMP%]{min-height:350px}.feature-subgrid[_ngcontent-%COMP%]{grid-template-columns:1fr}}']})};export{se as SetModernSidebarDemoComponent};
