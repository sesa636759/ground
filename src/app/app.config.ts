import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  provideAppInitializer,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { defineCustomElements as dreamUiLibrary } from 'dream-ui/loader';
import { defineCustomElements as appUiLibrary } from 'app-ui-library/loader';
import { defineCustomElements as chartLibrary } from 'chart-library/loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(() => appUiLibrary(window)),
    provideAppInitializer(() => dreamUiLibrary(window)),
    provideAppInitializer(() => chartLibrary(window)),
  ],
};
