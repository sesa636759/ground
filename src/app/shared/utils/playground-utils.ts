export function generatePlaygroundCode(
  el: Element,
  tagName?: string,
  innerContent: string = '',
): string {
  if (!el) return '';

  const tag = tagName || el.tagName.toLowerCase();
  let code = `<${tag}\n`;

  Array.from(el.attributes).forEach((attr) => {
    if (attr.name.startsWith('_ng') || attr.name.startsWith('ng-') || attr.name === 'class') {
      return;
    }

    if (attr.value === '' || attr.value === attr.name) {
      code += `  ${attr.name}\n`;
    } else {
      code += `  ${attr.name}="${attr.value}"\n`;
    }
  });

  if (innerContent) {
    code += `>\n${innerContent}</${tag}>`;
  } else {
    code += `></${tag}>`;
  }

  return code;
}
