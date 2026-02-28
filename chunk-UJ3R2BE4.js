function m(a,u,o=""){if(!a)return"";let s=u||a.tagName.toLowerCase(),n=`<${s}
`;return Array.from(a.attributes).forEach(e=>{e.name.startsWith("_ng")||e.name.startsWith("ng-")||e.name==="class"||(e.value===""||e.value===e.name?n+=`  ${e.name}
`:n+=`  ${e.name}="${e.value}"
`)}),o?n+=`>
${o}</${s}>`:n+=`></${s}>`,n}export{m as a};
