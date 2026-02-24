import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  provideAppInitializer,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { defineCustomElements as setUiLoader } from 'set-ui-lib/loader';
import { defineCustomElements as appUiLibrary } from 'app-ui-library/loader';
import { defineCustomElements as chartLibrary } from 'chart-library/loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(() => setUiLoader(window)),
    provideAppInitializer(() => appUiLibrary(window)),
    provideAppInitializer(() => chartLibrary(window)),
  ],
};
