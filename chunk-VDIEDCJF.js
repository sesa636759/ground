import{L as $2,Va as X2}from"./chunk-SRT4OEMB.js";function g2(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function T4(c){if(Array.isArray(c))return c}function F4(c){if(Array.isArray(c))return g2(c)}function D4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function Y2(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,w1(e.key),e)}}function B4(c,a,l){return a&&Y2(c.prototype,a),l&&Y2(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function c2(c,a){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=H2(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(n){throw n},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,f=!1;return{s:function(){l=l.call(c)},n:function(){var n=l.next();return s=n.done,n},e:function(n){f=!0,i=n},f:function(){try{s||l.return==null||l.return()}finally{if(f)throw i}}}}function p(c,a,l){return(a=w1(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function H4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function R4(c,a){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,i,s,f=[],n=!0,t=!1;try{if(i=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;n=!1}else for(;!(n=(e=i.call(l)).done)&&(f.push(e.value),f.length!==a);n=!0);}catch(u){t=!0,r=u}finally{try{if(!n&&l.return!=null&&(s=l.return(),Object(s)!==s))return}finally{if(t)throw r}}return f}}function E4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K2(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function o(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?K2(Object(l),!0).forEach(function(e){p(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):K2(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function i2(c,a){return T4(c)||R4(c,a)||H2(c,a)||E4()}function w(c){return F4(c)||H4(c)||H2(c)||U4()}function I4(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function w1(c){var a=I4(c,"string");return typeof a=="symbol"?a:a+""}function e2(c){"@babel/helpers - typeof";return e2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e2(c)}function H2(c,a){if(c){if(typeof c=="string")return g2(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?g2(c,a):void 0}}var Q2=function(){},R2={},k1={},A1=null,P1={mark:Q2,measure:Q2};try{typeof window<"u"&&(R2=window),typeof document<"u"&&(k1=document),typeof MutationObserver<"u"&&(A1=MutationObserver),typeof performance<"u"&&(P1=performance)}catch(c){}var W4=R2.navigator||{},J2=W4.userAgent,Z2=J2===void 0?"":J2,B=R2,L=k1,c1=A1,J=P1,e8=!!B.document,F=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",T1=~Z2.indexOf("MSIE")||~Z2.indexOf("Trident/"),u2,O4=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,q4=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,F1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},G4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},D1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",Y="duotone",B1="sharp",H1="sharp-duotone",R1="chisel",E1="etch",U1="graphite",I1="jelly",W1="jelly-duo",O1="jelly-fill",q1="notdog",G1="notdog-duo",j1="slab",V1="slab-press",_1="thumbprint",$1="utility",X1="utility-duo",Y1="utility-fill",K1="whiteboard",j4="Classic",V4="Duotone",_4="Sharp",$4="Sharp Duotone",X4="Chisel",Y4="Etch",K4="Graphite",Q4="Jelly",J4="Jelly Duo",Z4="Jelly Fill",c3="Notdog",a3="Notdog Duo",l3="Slab",e3="Slab Press",r3="Thumbprint",s3="Utility",i3="Utility Duo",f3="Utility Fill",n3="Whiteboard",Q1=[C,Y,B1,H1,R1,E1,U1,I1,W1,O1,q1,G1,j1,V1,_1,$1,X1,Y1,K1],r8=(u2={},p(p(p(p(p(p(p(p(p(p(u2,C,j4),Y,V4),B1,_4),H1,$4),R1,X4),E1,Y4),U1,K4),I1,Q4),W1,J4),O1,Z4),p(p(p(p(p(p(p(p(p(u2,q1,c3),G1,a3),j1,l3),V1,e3),_1,r3),$1,s3),X1,i3),Y1,f3),K1,n3)),o3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},t3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},m3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),z3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},J1=["fak","fa-kit","fakd","fa-kit-duotone"],a1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},u3=["kit"],p3="kit",M3="kit-duotone",d3="Kit",L3="Kit Duotone",s8=p(p({},p3,d3),M3,L3),v3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},h3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},g3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},l1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},p2,Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},C3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],x3="classic",S3="duotone",N3="sharp",b3="sharp-duotone",y3="chisel",w3="etch",k3="graphite",A3="jelly",P3="jelly-duo",T3="jelly-fill",F3="notdog",D3="notdog-duo",B3="slab",H3="slab-press",R3="thumbprint",E3="utility",U3="utility-duo",I3="utility-fill",W3="whiteboard",O3="Classic",q3="Duotone",G3="Sharp",j3="Sharp Duotone",V3="Chisel",_3="Etch",$3="Graphite",X3="Jelly",Y3="Jelly Duo",K3="Jelly Fill",Q3="Notdog",J3="Notdog Duo",Z3="Slab",c0="Slab Press",a0="Thumbprint",l0="Utility",e0="Utility Duo",r0="Utility Fill",s0="Whiteboard",i8=(p2={},p(p(p(p(p(p(p(p(p(p(p2,x3,O3),S3,q3),N3,G3),b3,j3),y3,V3),w3,_3),k3,$3),A3,X3),P3,Y3),T3,K3),p(p(p(p(p(p(p(p(p(p2,F3,Q3),D3,J3),B3,Z3),H3,c0),R3,a0),E3,l0),U3,e0),I3,r0),W3,s0)),i0="kit",f0="kit-duotone",n0="Kit",o0="Kit Duotone",f8=p(p({},i0,n0),f0,o0),t0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},m0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},C2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},z0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Z1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(C3,z0),u0=["solid","regular","light","thin","duotone","brands","semibold"],c4=[1,2,3,4,5,6,7,8,9,10],p0=c4.concat([11,12,13,14,15,16,17,18,19,20]),M0=["aw","fw","pull-left","pull-right"],d0=[].concat(w(Object.keys(m0)),u0,M0,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(c4.map(function(c){return"".concat(c,"x")})).concat(p0.map(function(c){return"w-".concat(c)})),L0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P="___FONT_AWESOME___",x2=16,a4="fa",l4="svg-inline--fa",U="data-fa-i2svg",S2="data-fa-pseudo-element",v0="data-fa-pseudo-element-pending",E2="data-prefix",U2="data-icon",e1="fontawesome-i2svg",h0="async",g0=["HTML","HEAD","STYLE","SCRIPT"],e4=["::before","::after",":before",":after"],r4=(function(){try{return!0}catch(c){return!1}})();function K(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[C]}})}var s4=o({},F1);s4[C]=o(o(o(o({},{"fa-duotone":"duotone"}),F1[C]),a1.kit),a1["kit-duotone"]);var C0=K(s4),N2=o({},z3);N2[C]=o(o(o(o({},{duotone:"fad"}),N2[C]),l1.kit),l1["kit-duotone"]);var r1=K(N2),b2=o({},C2);b2[C]=o(o({},b2[C]),g3.kit);var I2=K(b2),y2=o({},t0);y2[C]=o(o({},y2[C]),v3.kit);var n8=K(y2),x0=O4,i4="fa-layers-text",S0=q4,N0=o({},o3),o8=K(N0),b0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],M2=G4,y0=[].concat(w(u3),w(d0)),_=B.FontAwesomeConfig||{};function w0(c){var a=L.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function k0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(s1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],s1.forEach(function(c){var a=i2(c,2),l=a[0],e=a[1],r=k0(w0(l));r!=null&&(_[e]=r)}));var s1,f4={styleDefault:"solid",familyDefault:C,cssPrefix:a4,replacementClass:l4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_.familyPrefix&&(_.cssPrefix=_.familyPrefix);var G=o(o({},f4),_);G.autoReplaceSvg||(G.observeMutations=!1);var z={};Object.keys(f4).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(l){G[c]=l,$.forEach(function(e){return e(z)})},get:function(){return G[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){G.cssPrefix=a,$.forEach(function(l){return l(z)})},get:function(){return G.cssPrefix}});B.FontAwesomeConfig=z;var $=[];function A0(c){return $.push(c),function(){$.splice($.indexOf(c),1)}}var D=x2,k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function P0(c){if(!(!c||!F)){var a=L.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=L.head.childNodes,e=null,r=l.length-1;r>-1;r--){var i=l[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=i)}return L.head.insertBefore(a,e),c}}var T0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i1(){for(var c=12,a="";c-- >0;)a+=T0[Math.random()*62|0];return a}function j(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function W2(c){return c.classList?j(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function n4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F0(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(n4(c[l]),'" ')},"").trim()}function f2(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function O2(c){return c.size!==k.size||c.x!==k.x||c.y!==k.y||c.rotate!==k.rotate||c.flipX||c.flipY}function D0(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),n={transform:"".concat(i," ").concat(s," ").concat(f)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:n,path:t}}function B0(c){var a=c.transform,l=c.width,e=l===void 0?x2:l,r=c.height,i=r===void 0?x2:r,s=c.startCentered,f=s===void 0?!1:s,n="";return f&&T1?n+="translate(".concat(a.x/D-e/2,"em, ").concat(a.y/D-i/2,"em) "):f?n+="translate(calc(-50% + ".concat(a.x/D,"em), calc(-50% + ").concat(a.y/D,"em)) "):n+="translate(".concat(a.x/D,"em, ").concat(a.y/D,"em) "),n+="scale(".concat(a.size/D*(a.flipX?-1:1),", ").concat(a.size/D*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var H0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function o4(){var c=a4,a=l4,l=z.cssPrefix,e=z.replacementClass,r=H0;if(l!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(l,"-")).replace(s,"--".concat(l,"-")).replace(f,".".concat(e))}return r}var f1=!1;function d2(){z.autoAddCss&&!f1&&(P0(o4()),f1=!0)}var R0={mixout:function(){return{dom:{css:o4,insertCss:d2}}},hooks:function(){return{beforeDOMElementCreation:function(){d2()},beforeI2svg:function(){d2()}}}},T=B||{};T[P]||(T[P]={});T[P].styles||(T[P].styles={});T[P].hooks||(T[P].hooks={});T[P].shims||(T[P].shims=[]);var y=T[P],t4=[],m4=function(){L.removeEventListener("DOMContentLoaded",m4),r2=1,t4.map(function(a){return a()})},r2=!1;F&&(r2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),r2||L.addEventListener("DOMContentLoaded",m4));function E0(c){F&&(r2?setTimeout(c,0):t4.push(c))}function Q(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?n4(c):"<".concat(a," ").concat(F0(e),">").concat(i.map(Q).join(""),"</").concat(a,">")}function n1(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var U0=function(a,l){return function(e,r,i,s){return a.call(l,e,r,i,s)}},L2=function(a,l,e,r){var i=Object.keys(a),s=i.length,f=r!==void 0?U0(l,r):l,n,t,u;for(e===void 0?(n=1,u=a[i[0]]):(n=0,u=e);n<s;n++)t=i[n],u=f(u,a[t],t,a);return u};function z4(c){return w(c).length!==1?null:c.codePointAt(0).toString(16)}function o1(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function w2(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,i=o1(a);typeof y.hooks.addPack=="function"&&!r?y.hooks.addPack(c,o1(a)):y.styles[c]=o(o({},y.styles[c]||{}),i),c==="fas"&&w2("fa",a)}var X=y.styles,I0=y.shims,u4=Object.keys(I2),W0=u4.reduce(function(c,a){return c[a]=Object.keys(I2[a]),c},{}),q2=null,p4={},M4={},d4={},L4={},v4={};function O0(c){return~y0.indexOf(c)}function q0(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!O0(r)?r:null}var h4=function(){var a=function(i){return L2(X,function(s,f,n){return s[n]=L2(f,i,{}),s},{})};p4=a(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var f=i[2].filter(function(n){return typeof n=="number"});f.forEach(function(n){r[n.toString(16)]=s})}return r}),M4=a(function(r,i,s){if(r[s]=s,i[2]){var f=i[2].filter(function(n){return typeof n=="string"});f.forEach(function(n){r[n]=s})}return r}),v4=a(function(r,i,s){var f=i[2];return r[s]=s,f.forEach(function(n){r[n]=s}),r});var l="far"in X||z.autoFetchSvg,e=L2(I0,function(r,i){var s=i[0],f=i[1],n=i[2];return f==="far"&&!l&&(f="fas"),typeof s=="string"&&(r.names[s]={prefix:f,iconName:n}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:f,iconName:n}),r},{names:{},unicodes:{}});d4=e.names,L4=e.unicodes,q2=n2(z.styleDefault,{family:z.familyDefault})};A0(function(c){q2=n2(c.styleDefault,{family:z.familyDefault})});h4();function G2(c,a){return(p4[c]||{})[a]}function G0(c,a){return(M4[c]||{})[a]}function E(c,a){return(v4[c]||{})[a]}function g4(c){return d4[c]||{prefix:null,iconName:null}}function j0(c){var a=L4[c],l=G2("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function H(){return q2}var C4=function(){return{prefix:null,iconName:null,rest:[]}};function V0(c){var a=C,l=u4.reduce(function(e,r){return e[r]="".concat(z.cssPrefix,"-").concat(r),e},{});return Q1.forEach(function(e){(c.includes(l[e])||c.some(function(r){return W0[e].includes(r)}))&&(a=e)}),a}function n2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?C:l,r=C0[e][c];if(e===Y&&!c)return"fad";var i=r1[e][c]||r1[e][r],s=c in y.styles?c:null,f=i||s||null;return f}function _0(c){var a=[],l=null;return c.forEach(function(e){var r=q0(z.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function t1(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}var m1=Z1.concat(J1);function o2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,i=t1(c.filter(function(M){return m1.includes(M)})),s=t1(c.filter(function(M){return!m1.includes(M)})),f=i.filter(function(M){return r=M,!D1.includes(M)}),n=i2(f,1),t=n[0],u=t===void 0?null:t,m=V0(i),d=o(o({},_0(s)),{},{prefix:n2(u,{family:m})});return o(o(o({},d),K0({values:c,family:m,styles:X,config:z,canonical:d,givenPrefix:r})),$0(e,r,d))}function $0(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var i=a==="fa"?g4(r):{},s=E(e,r);return r=i.iconName||s||r,e=i.prefix||e,e==="far"&&!X.far&&X.fas&&!z.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var X0=Q1.filter(function(c){return c!==C||c!==Y}),Y0=Object.keys(C2).filter(function(c){return c!==C}).map(function(c){return Object.keys(C2[c])}).flat();function K0(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,i=r===void 0?"":r,s=c.styles,f=s===void 0?{}:s,n=c.config,t=n===void 0?{}:n,u=l===Y,m=a.includes("fa-duotone")||a.includes("fad"),d=t.familyDefault==="duotone",M=e.prefix==="fad"||e.prefix==="fa-duotone";if(!u&&(m||d||M)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&X0.includes(l)){var h=Object.keys(f).find(function(x){return Y0.includes(x)});if(h||t.autoFetchSvg){var v=m3.get(l).defaultShortPrefixId;e.prefix=v,e.iconName=E(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=H()||"fas"),e}var Q0=(function(){function c(){D4(this,c),this.definitions={}}return B4(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(f){l.definitions[f]=o(o({},l.definitions[f]||{}),s[f]),w2(f,s[f]);var n=I2[C][f];n&&w2(n,s[f]),h4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var s=r[i],f=s.prefix,n=s.iconName,t=s.icon,u=t[2];l[f]||(l[f]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(l[f][m]=t)}),l[f][n]=t}),l}}])})(),z1=[],O={},q={},J0=Object.keys(q);function Z0(c,a){var l=a.mixoutsTo;return z1=c,O={},Object.keys(q).forEach(function(e){J0.indexOf(e)===-1&&delete q[e]}),z1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(l[s]=r[s]),e2(r[s])==="object"&&Object.keys(r[s]).forEach(function(f){l[s]||(l[s]={}),l[s][f]=r[s][f]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(s){O[s]||(O[s]=[]),O[s].push(i[s])})}e.provides&&e.provides(q)}),l}function k2(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var i=O[c]||[];return i.forEach(function(s){a=s.apply(null,[a].concat(e))}),a}function I(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=O[c]||[];r.forEach(function(i){i.apply(null,l)})}function R(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return q[c]?q[c].apply(null,a):void 0}function A2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||H();if(a)return a=E(l,a)||a,n1(x4.definitions,l,a)||n1(y.styles,l,a)}var x4=new Q0,c6=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,I("noAuto")},a6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(I("beforeI2svg",a),R("pseudoElements2svg",a),R("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,E0(function(){e6({autoReplaceSvgRoot:l}),I("watch",a)})}},l6={icon:function(a){if(a===null)return null;if(e2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:E(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=n2(a[0]);return{prefix:e,iconName:E(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(x0))){var r=o2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:E(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=H();return{prefix:i,iconName:E(i,a)||a}}}},N={noAuto:c6,config:z,dom:a6,parse:l6,library:x4,findIconDefinition:A2,toHtml:Q},e6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?L:l;(Object.keys(y.styles).length>0||z.autoFetchSvg)&&F&&z.autoReplaceSvg&&N.dom.i2svg({node:e})};function t2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return Q(e)})}}),Object.defineProperty(c,"node",{get:function(){if(F){var e=L.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function r6(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,i=c.styles,s=c.transform;if(O2(s)&&l.found&&!e.found){var f=l.width,n=l.height,t={x:f/n/2,y:.5};r.style=f2(o(o({},i),{},{"transform-origin":"".concat(t.x+s.x/16,"em ").concat(t.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function s6(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,i=c.symbol,s=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(l):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:s}),children:e}]}]}function i6(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function j2(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,i=c.iconName,s=c.transform,f=c.symbol,n=c.maskId,t=c.extra,u=c.watchable,m=u===void 0?!1:u,d=e.found?e:l,M=d.width,h=d.height,v=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(A){return t.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(t.classes).join(" "),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":i,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(h)})};!i6(t.attributes)&&!t.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),m&&(x.attributes[U]="");var g=o(o({},x),{},{prefix:r,iconName:i,main:l,mask:e,maskId:n,transform:s,symbol:f,styles:o({},t.styles)}),S=e.found&&l.found?R("generateAbstractMask",g)||{children:[],attributes:{}}:R("generateAbstractIcon",g)||{children:[],attributes:{}},b=S.children,W=S.attributes;return g.children=b,g.attributes=W,f?s6(g):r6(g)}function u1(c){var a=c.content,l=c.width,e=c.height,r=c.transform,i=c.extra,s=c.watchable,f=s===void 0?!1:s,n=o(o({},i.attributes),{},{class:i.classes.join(" ")});f&&(n[U]="");var t=o({},i.styles);O2(r)&&(t.transform=B0({transform:r,startCentered:!0,width:l,height:e}),t["-webkit-transform"]=t.transform);var u=f2(t);u.length>0&&(n.style=u);var m=[];return m.push({tag:"span",attributes:n,children:[a]}),m}function f6(c){var a=c.content,l=c.extra,e=o(o({},l.attributes),{},{class:l.classes.join(" ")}),r=f2(l.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[a]}),i}var v2=y.styles;function P2(c){var a=c[0],l=c[1],e=c.slice(4),r=i2(e,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(M2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(M2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(M2.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:l,icon:s}}var n6={found:!1,width:512,height:512};function o6(c,a){!r4&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function T2(c,a){var l=a;return a==="fa"&&z.styleDefault!==null&&(a=H()),new Promise(function(e,r){if(l==="fa"){var i=g4(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&v2[a]&&v2[a][c]){var s=v2[a][c];return e(P2(s))}o6(c,a),e(o(o({},n6),{},{icon:z.showMissingIcons&&c?R("missingIconAbstract")||{}:{}}))})}var p1=function(){},F2=z.measurePerformance&&J&&J.mark&&J.measure?J:{mark:p1,measure:p1},V='FA "7.2.0"',t6=function(a){return F2.mark("".concat(V," ").concat(a," begins")),function(){return S4(a)}},S4=function(a){F2.mark("".concat(V," ").concat(a," ends")),F2.measure("".concat(V," ").concat(a),"".concat(V," ").concat(a," begins"),"".concat(V," ").concat(a," ends"))},V2={begin:t6,end:S4},a2=function(){};function M1(c){var a=c.getAttribute?c.getAttribute(U):null;return typeof a=="string"}function m6(c){var a=c.getAttribute?c.getAttribute(E2):null,l=c.getAttribute?c.getAttribute(U2):null;return a&&l}function z6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function u6(){if(z.autoReplaceSvg===!0)return l2.replace;var c=l2[z.autoReplaceSvg];return c||l2.replace}function p6(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function M6(c){return L.createElement(c)}function N4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?p6:M6:l;if(typeof c=="string")return L.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(s){r.setAttribute(s,c.attributes[s])});var i=c.children||[];return i.forEach(function(s){r.appendChild(N4(s,{ceFn:e}))}),r}function d6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var l2={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(N4(r),l)}),l.getAttribute(U)===null&&z.keepOriginalSource){var e=L.createComment(d6(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~W2(l).indexOf(z.replacementClass))return l2.replace(a);var r=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(f,n){return n===z.replacementClass||n.match(r)?f.toSvg.push(n):f.toNode.push(n),f},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",i.toNode.join(" "))}var s=e.map(function(f){return Q(f)}).join(`
`);l.setAttribute(U,""),l.innerHTML=s}};function d1(c){c()}function b4(c,a){var l=typeof a=="function"?a:a2;if(c.length===0)l();else{var e=d1;z.mutateApproach===h0&&(e=B.requestAnimationFrame||d1),e(function(){var r=u6(),i=V2.begin("mutate");c.map(r),i(),l()})}}var _2=!1;function y4(){_2=!0}function D2(){_2=!1}var s2=null;function L1(c){if(c1&&z.observeMutations){var a=c.treeCallback,l=a===void 0?a2:a,e=c.nodeCallback,r=e===void 0?a2:e,i=c.pseudoElementsCallback,s=i===void 0?a2:i,f=c.observeMutationsRoot,n=f===void 0?L:f;s2=new c1(function(t){if(!_2){var u=H();j(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!M1(m.addedNodes[0])&&(z.searchPseudoElements&&s(m.target),l(m.target)),m.type==="attributes"&&m.target.parentNode&&z.searchPseudoElements&&s([m.target],!0),m.type==="attributes"&&M1(m.target)&&~b0.indexOf(m.attributeName))if(m.attributeName==="class"&&m6(m.target)){var d=o2(W2(m.target)),M=d.prefix,h=d.iconName;m.target.setAttribute(E2,M||u),h&&m.target.setAttribute(U2,h)}else z6(m.target)&&r(m.target)})}}),F&&s2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function L6(){s2&&s2.disconnect()}function v6(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var i=r.split(":"),s=i[0],f=i.slice(1);return s&&f.length>0&&(e[s]=f.join(":").trim()),e},{})),l}function h6(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=o2(W2(c));return r.prefix||(r.prefix=H()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=G0(r.prefix,c.innerText)||G2(r.prefix,z4(c.innerText))),!r.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function g6(c){var a=j(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function C6(){return{iconName:null,prefix:null,transform:k,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=h6(c),e=l.iconName,r=l.prefix,i=l.rest,s=g6(c),f=k2("parseNodeAttributes",{},c),n=a.styleParser?v6(c):[];return o({iconName:e,prefix:r,transform:k,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:n,attributes:s}},f)}var x6=y.styles;function w4(c){var a=z.autoReplaceSvg==="nest"?v1(c,{styleParser:!1}):v1(c);return~a.extra.classes.indexOf(i4)?R("generateLayersText",c,a):R("generateSvgReplacementMutation",c,a)}function S6(){return[].concat(w(J1),w(Z1))}function h1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var l=L.documentElement.classList,e=function(m){return l.add("".concat(e1,"-").concat(m))},r=function(m){return l.remove("".concat(e1,"-").concat(m))},i=z.autoFetchSvg?S6():D1.concat(Object.keys(x6));i.includes("fa")||i.push("fa");var s=[".".concat(i4,":not([").concat(U,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(U,"])")})).join(", ");if(s.length===0)return Promise.resolve();var f=[];try{f=j(c.querySelectorAll(s))}catch(u){}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var n=V2.begin("onTree"),t=f.reduce(function(u,m){try{var d=w4(m);d&&u.push(d)}catch(M){r4||M.name==="MissingIcon"&&console.error(M)}return u},[]);return new Promise(function(u,m){Promise.all(t).then(function(d){b4(d,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),n(),u()})}).catch(function(d){n(),m(d)})})}function N6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;w4(c).then(function(l){l&&b4([l],a)})}function b6(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:A2(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:A2(r||{})),c(e,o(o({},l),{},{mask:r}))}}var y6=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?k:e,i=l.symbol,s=i===void 0?!1:i,f=l.mask,n=f===void 0?null:f,t=l.maskId,u=t===void 0?null:t,m=l.classes,d=m===void 0?[]:m,M=l.attributes,h=M===void 0?{}:M,v=l.styles,x=v===void 0?{}:v;if(a){var g=a.prefix,S=a.iconName,b=a.icon;return t2(o({type:"icon"},a),function(){return I("beforeDOMElementCreation",{iconDefinition:a,params:l}),j2({icons:{main:P2(b),mask:n?P2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:S,transform:o(o({},k),r),symbol:s,maskId:u,extra:{attributes:h,styles:x,classes:d}})})}},w6={mixout:function(){return{icon:b6(y6)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=h1,l.nodeCallback=N6,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?L:e,i=l.callback,s=i===void 0?function(){}:i;return h1(r,s)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,i=e.prefix,s=e.transform,f=e.symbol,n=e.mask,t=e.maskId,u=e.extra;return new Promise(function(m,d){Promise.all([T2(r,i),n.iconName?T2(n.iconName,n.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var h=i2(M,2),v=h[0],x=h[1];m([l,j2({icons:{main:v,mask:x},prefix:i,iconName:r,transform:s,symbol:f,maskId:t,extra:u,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,i=l.main,s=l.transform,f=l.styles,n=f2(f);n.length>0&&(r.style=n);var t;return O2(s)&&(t=R("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),e.push(t||i.icon),{children:e,attributes:r}}}},k6={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return t2({type:"layer"},function(){I("beforeDOMElementCreation",{assembler:l,params:e});var s=[];return l(function(f){Array.isArray(f)?f.map(function(n){s=s.concat(n.abstract)}):s=s.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(w(i)).join(" ")},children:s}]})}}}},A6={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,s=e.classes,f=s===void 0?[]:s,n=e.attributes,t=n===void 0?{}:n,u=e.styles,m=u===void 0?{}:u;return t2({type:"counter",content:l},function(){return I("beforeDOMElementCreation",{content:l,params:e}),f6({content:l.toString(),title:i,extra:{attributes:t,styles:m,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(w(f))}})})}}}},P6={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?k:r,s=e.classes,f=s===void 0?[]:s,n=e.attributes,t=n===void 0?{}:n,u=e.styles,m=u===void 0?{}:u;return t2({type:"text",content:l},function(){return I("beforeDOMElementCreation",{content:l,params:e}),u1({content:l,transform:o(o({},k),i),extra:{attributes:t,styles:m,classes:["".concat(z.cssPrefix,"-layers-text")].concat(w(f))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,i=e.extra,s=null,f=null;if(T1){var n=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();s=t.width/n,f=t.height/n}return Promise.resolve([l,u1({content:l.innerHTML,width:s,height:f,transform:r,extra:i,watchable:!0})])}}},k4=new RegExp('"',"ug"),g1=[1105920,1112319],C1=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),t3),L0),h3),B2=Object.keys(C1).reduce(function(c,a){return c[a.toLowerCase()]=C1[a],c},{}),T6=Object.keys(B2).reduce(function(c,a){var l=B2[a];return c[a]=l[900]||w(Object.entries(l))[0][1],c},{});function F6(c){var a=c.replace(k4,"");return z4(w(a)[0]||"")}function D6(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace(k4,""),r=e.codePointAt(0),i=r>=g1[0]&&r<=g1[1],s=e.length===2?e[0]===e[1]:!1;return i||s||a}function B6(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(B2[l]||{})[r]||T6[l]}function x1(c,a){var l="".concat(v0).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var i=j(c.children),s=i.filter(function(m2){return m2.getAttribute(S2)===a})[0],f=B.getComputedStyle(c,a),n=f.getPropertyValue("font-family"),t=n.match(S0),u=f.getPropertyValue("font-weight"),m=f.getPropertyValue("content");if(s&&!t)return c.removeChild(s),e();if(t&&m!=="none"&&m!==""){var d=f.getPropertyValue("content"),M=B6(n,u),h=F6(d),v=t[0].startsWith("FontAwesome"),x=D6(f),g=G2(M,h),S=g;if(v){var b=j0(h);b.iconName&&b.prefix&&(g=b.iconName,M=b.prefix)}if(g&&!x&&(!s||s.getAttribute(E2)!==M||s.getAttribute(U2)!==S)){c.setAttribute(l,S),s&&c.removeChild(s);var W=C6(),A=W.extra;A.attributes[S2]=a,T2(g,M).then(function(m2){var A4=j2(o(o({},W),{},{icons:{main:m2,mask:C4()},prefix:M,iconName:S,extra:A,watchable:!0})),z2=L.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(z2,c.firstChild):c.appendChild(z2),z2.outerHTML=A4.map(function(P4){return Q(P4)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function H6(c){return Promise.all([x1(c,"::before"),x1(c,"::after")])}function R6(c){return c.parentNode!==document.head&&!~g0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(S2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var E6=function(a){return!!a&&e4.some(function(l){return a.includes(l)})},U6=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(n){return n.trim()});e=e.flatMap(function(n){return n.includes("(")?n:n.split(",").map(function(t){return t.trim()})});var r=c2(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;if(E6(s)){var f=e4.reduce(function(n,t){return n.replace(t,"")},s);f!==""&&f!=="*"&&l.add(f)}}}catch(n){r.e(n)}finally{r.f()}return l};function S1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(F){var l;if(a)l=c;else if(z.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=c2(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;try{var f=c2(s.cssRules),n;try{for(f.s();!(n=f.n()).done;){var t=n.value,u=U6(t.selectorText),m=c2(u),d;try{for(m.s();!(d=m.n()).done;){var M=d.value;e.add(M)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){f.e(v)}finally{f.f()}}catch(v){z.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var h=Array.from(e).join(", ");try{l=c.querySelectorAll(h)}catch(v){}}return new Promise(function(v,x){var g=j(l).filter(R6).map(H6),S=V2.begin("searchPseudoElements");y4(),Promise.all(g).then(function(){S(),D2(),v()}).catch(function(){S(),D2(),x()})})}}var I6={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=S1,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?L:e;z.searchPseudoElements&&S1(r)}}},N1=!1,W6={mixout:function(){return{dom:{unwatch:function(){y4(),N1=!0}}}},hooks:function(){return{bootstrap:function(){L1(k2("mutationObserverCallbacks",{}))},noAuto:function(){L6()},watch:function(l){var e=l.observeMutationsRoot;N1?D2():L1(k2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},b1=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),s=i[0],f=i.slice(1).join("-");if(s&&f==="h")return e.flipX=!0,e;if(s&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(s){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},l)},O6={mixout:function(){return{parse:{transform:function(l){return b1(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=b1(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,i=l.containerWidth,s=l.iconWidth,f={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(n," ").concat(t," ").concat(u)},d={transform:"translate(".concat(s/2*-1," -256)")},M={outer:f,inner:m,path:d};return{tag:"g",attributes:o({},M.outer),children:[{tag:"g",attributes:o({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),M.path)}]}]}}}},h2={x:0,y:0,width:"100%",height:"100%"};function y1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function q6(c){return c.tag==="g"?c.children:[c]}var G6={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),i=r?o2(r.split(" ").map(function(s){return s.trim()})):C4();return i.prefix||(i.prefix=H()),l.mask=i,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,i=l.main,s=l.mask,f=l.maskId,n=l.transform,t=i.width,u=i.icon,m=s.width,d=s.icon,M=D0({transform:n,containerWidth:m,iconWidth:t}),h={tag:"rect",attributes:o(o({},h2),{},{fill:"white"})},v=u.children?{children:u.children.map(y1)}:{},x={tag:"g",attributes:o({},M.inner),children:[y1(o({tag:u.tag,attributes:o(o({},u.attributes),M.path)},v))]},g={tag:"g",attributes:o({},M.outer),children:[x]},S="mask-".concat(f||i1()),b="clip-".concat(f||i1()),W={tag:"mask",attributes:o(o({},h2),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:q6(d)},W]};return e.push(A,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(S,")")},h2)}),{children:e,attributes:r}}}},j6={provides:function(a){var l=!1;B.matchMedia&&(l=B.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=o(o({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||f.children.push({tag:"animate",attributes:o(o({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:o(o({},s),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},V6={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return l.symbol=i,l}}}},_6=[R0,w6,k6,A6,P6,I6,W6,O6,G6,j6,V6];Z0(_6,{mixoutsTo:N});var t8=N.noAuto,$6=N.config,m8=N.library,X6=N.dom,Y6=N.parse,z8=N.findIconDefinition,u8=N.toHtml,K6=N.icon,p8=N.layer,Q6=N.text,J6=N.counter;var T8=(()=>{class c{static \u0275fac=function(e){return new(e||c)};static \u0275mod=X2({type:c});static \u0275inj=$2({})}return c})();var B8={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]};var H8={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"]};var R8={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]};var E8={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]};var U8={prefix:"fas",iconName:"vial",icon:[512,512,[129514],"f492","M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L306.7 64 28.1 342.6C10.1 360.6 0 385 0 410.5L0 416c0 53 43 96 96 96l5.5 0c25.5 0 49.9-10.1 67.9-28.1l278.6-278.6 9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zM205.3 256l146.7-146.7 50.7 50.7-96 96-101.5 0z"]};var I8={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]};var W8={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]};var O8={prefix:"fas",iconName:"terminal",icon:[512,512,[],"f120","M9.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.7 256 9.4 118.6zM224 384l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]};var Z6={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},q8=Z6;var c8={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},G8=c8;var j8={prefix:"fas",iconName:"mobile-screen-button",icon:[384,512,["mobile-alt"],"f3cd","M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zm64 0l0 304 224 0 0-304-224 0zM192 472c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"]};var a8={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},V8=a8;var _8={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]};var $8={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var X8={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]};var Y8={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var l8={prefix:"fas",iconName:"mug-saucer",icon:[576,512,["coffee"],"f0f4","M64 64c0-17.7 14.3-32 32-32l352 0c70.7 0 128 57.3 128 128S518.7 288 448 288c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L64 64zm448 96c0-35.3-28.7-64-64-64l0 128c35.3 0 64-28.7 64-64zM64 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},K8=l8;var Q8={prefix:"fas",iconName:"check-double",icon:[384,512,[],"f560","M249.9 66.8c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-106 145.7-37.5-37.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l128-176zm128 136c10.4-14.3 7.2-34.3-7.1-44.7s-34.3-7.2-44.7 7.1l-170 233.7-69.5-69.5c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c6.6 6.6 15.8 10 25.1 9.3s17.9-5.5 23.4-13.1l192-264z"]};var J8={prefix:"fas",iconName:"book-open",icon:[512,512,[128214,128366],"f518","M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z"]};var Z8={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]};export{T8 as a,B8 as b,H8 as c,R8 as d,E8 as e,U8 as f,I8 as g,W8 as h,O8 as i,q8 as j,G8 as k,j8 as l,V8 as m,_8 as n,$8 as o,X8 as p,Y8 as q,K8 as r,Q8 as s,J8 as t,Z8 as u};
