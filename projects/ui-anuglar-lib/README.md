# @enterprise/ui-ground

Angular wrapper library for the existing `app-ui-library` Stencil components used in this workspace.

## What it provides

- `provideGroundUi()` to register the custom elements once at app startup
- `GROUND_UI_DIRECTIVES` for convenient bulk imports
- Standalone directive wrappers for common components:
   - `UiButton`
   - `UiCard`
   - `UiCheckbox`
   - `UiDropdown`
   - `UiInput`
   - `UiTabs`

## Standalone usage

```ts
import { Component } from '@angular/core';
import { provideGroundUi, UiButton } from '@enterprise/ui-ground';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [UiButton],
   template: `<ui-button variant="primary">Save</ui-button>`,
})
export class AppComponent {}
```

## Grouped imports

```ts
import { Component } from '@angular/core';
import { GROUND_UI_DIRECTIVES } from '@enterprise/ui-ground';

@Component({
   selector: 'app-shell',
   standalone: true,
   imports: [...GROUND_UI_DIRECTIVES],
   template: `<ui-input label="Name"></ui-input>`,
})
export class AppShellComponent {}
```

## Build

Build the library with:

```bash
ng build ui-ground
```
