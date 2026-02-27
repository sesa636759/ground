import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const originalCreateElementNS = document.createElementNS;
document.createElementNS = function (
  namespaceURI: string | null,
  qualifiedName: string,
  options?: ElementCreationOptions | string,
): Element {
  if (String(qualifiedName) === '[object Object]') {
    const errorMsg =
      'Invalid createElementNS call with [object Object]: ' +
      JSON.stringify(qualifiedName) +
      '\nStack trace: ' +
      new Error().stack;
    console.error(errorMsg);
    fetch('http://localhost:9999/', { method: 'POST', body: errorMsg }).catch((e) =>
      console.log('post fail'),
    );
    setTimeout(() => {
      const div = originalCreateElementNS.call(
        document,
        'http://www.w3.org/1999/xhtml',
        'div',
      ) as HTMLElement;
      div.style.cssText =
        'position:fixed;top:0;left:0;z-index:99999;background:red;color:white;padding:20px;';
      div.innerText = errorMsg;
      document.body.appendChild(div);
    }, 1000);
    return originalCreateElementNS.call(document, namespaceURI, 'div', options);
  }
  return originalCreateElementNS.call(document, namespaceURI, qualifiedName, options);
} as typeof document.createElementNS;

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
