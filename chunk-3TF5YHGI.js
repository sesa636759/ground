function g(s,i,r=""){if(!s)return"";let a=i||s.tagName.toLowerCase(),n=`<${a}
`;return Array.from(s.attributes).forEach(e=>{e.name.startsWith("_ng")||e.name.startsWith("ng-")||e.name==="class"||(e.value===""||e.value===e.name?n+=`  ${e.name}
`:n+=`  ${e.name}="${e.value}"
`)}),r?n+=`>
${r}</${a}>`:n+=`></${a}>`,n}export{g as a};
