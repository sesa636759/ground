import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { defineCustomElements as defineGroundUiCustomElements } from 'app-ui-library/loader';

let groundUiRegistered = false;

export function defineCustomElements(win: Window = window): void {
  if (groundUiRegistered) {
    return;
  }

  defineGroundUiCustomElements(win);
  groundUiRegistered = true;
}

export function provideGroundUi(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        if (typeof window !== 'undefined') {
          defineCustomElements(window);
        }
      },
    },
  ]);
}