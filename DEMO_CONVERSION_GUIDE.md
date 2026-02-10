# 📚 Demo Conversion Guide: App-UI Library to Angular Playgrounds

## Overview

This guide will help you convert the remaining 60+ demos from the app-ui-library to Angular playgrounds.

## ✅ Completed Playgrounds (4/64)

1. ✅ ui-navigation
2. ✅ tabs
3. ✅ card
4. ✅ button

## 📋 Remaining Demos to Convert (60)

- accordion
- advanced-data-table
- anchor
- app-chart
- aside-panel
- avatar
- badge
- bar-chart
- breadcrumb
- button-group
- cascade-select
- chip
- context-menu
- dialog
- divider
- dock
- dropdown
- horizontal-nav
- icon
- knob
- layout-manager
- meter-group
- multi-level-context-menu
- nav-bar
- otp-input
- pagination
- panel
- pattern-input
- picklist
- pill
- popover
- range-slider
- rating
- scroll-top
- skeleton
- smart-menu
- smart-stepper
- snackbar
- speed-dial
- speedometer
- splitter
- stack
- stepper
- switch
- tag
- theme-selector
- timeline
- timer
- top-bar
- transfer-list
- tree-list
- And more...

## 🔄 Conversion Process

### Step 1: Create Playground File

Create a new file in `src/app/playgrounds/` named `{component-name}.playground.ts`

### Step 2: Use This Template

```typescript
import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-{component-name}-playground',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-page">
      <div class="playground-header">
        <h2>{Component Title}</h2>
        <p>{Component description}</p>
      </div>

      <!-- Demo Controls -->
      <div class="demo-controls">
        <button class="btn-control active" (click)="showPlayground()">🎮 Playground</button>
        <button class="btn-control" (click)="showSection1()">Section 1</button>
        <button class="btn-control" (click)="showSection2()">Section 2</button>
        <!-- Add more sections as needed -->
      </div>

      <!-- Dynamic Demo Container -->
      <div [innerHTML]="demoContent()" class="demo-container-wrapper"></div>
    </div>
  `,
  styles: [`
    .playground-page { padding: 0; }
    .playground-header {
      margin-bottom: 24px;
      h2 { font-size: 2rem; font-weight: 800; color: white; margin-bottom: 8px; }
      p { color: #94a3b8; font-size: 1.1rem; line-height: 1.6; }
    }
    .demo-controls {
      display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px;
      .btn-control {
        padding: 10px 20px; background: rgba(99, 102, 241, 0.1);
        border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 10px;
        color: #818cf8; font-weight: 600; cursor: pointer; transition: all 0.2s;
        &:hover, &.active { background: rgba(99, 102, 241, 0.2); }
      }
    }
    .demo-container-wrapper {
      ::ng-deep .demo-block {
        background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
        border-radius: 16px; padding: 24px; margin-bottom: 20px;
        h3 { font-size: 1.3rem; font-weight: 700; color: white; margin-bottom: 12px; }
        p { color: #94a3b8; margin-bottom: 12px; font-size: 0.95rem; }
      }
      ::ng-deep .playground-settings {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px; margin-bottom: 20px;
        label {
          display: flex; flex-direction: column; gap: 8px;
          span { color: #cbd5e1; font-weight: 600; font-size: 0.9rem; }
          input, select {
            padding: 10px; background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
            color: white; font-size: 0.9rem;
            &:focus { outline: none; border-color: #6366f1; }
          }
          input[type="checkbox"] { width: auto; }
        }
      }
      ::ng-deep .code-block {
        background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.05);
        border-radius: 12px; padding: 20px; position: relative; margin-top: 16px;
        pre { margin: 0; overflow-x: auto;
          code { color: #cbd5e1; font-family: 'Courier New', monospace; font-size: 0.9rem; line-height: 1.6; }
        }
        button {
          position: absolute; top: 10px; right: 10px;
          background: rgba(255,255,255,0.1); color: white; border: none;
          padding: 6px 12px; border-radius: 6px; font-size: 11px;
          cursor: pointer; transition: all 0.2s;
          &:hover { background: rgba(99, 102, 241, 0.3); }
        }
      }
    }
  `]
})
export class {ComponentName}Playground {
  demoContent = signal('');

  constructor() {
    this.showPlayground();
  }

  showPlayground() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <p>Configure properties and see the results in real-time</p>

        <div class="playground-settings">
          <!-- Add your controls here -->
          <label><span>Property:</span>
            <select id="prop1" onchange="window.updatePlayground()">
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
            </select>
          </label>
        </div>

        <div id="playgroundContainer" style="min-height: 100px; background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 32px; display: flex; justify-content: center; align-items: center;"></div>

        <div class="code-block">
          <button onclick="window.copyCode()">Copy</button>
          <pre><code id="codeBlock"></code></pre>
        </div>
      </div>
    `);

    setTimeout(() => this.initPlayground(), 100);
  }

  showSection1() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Section 1 Title</h3>
        <p>Description</p>

        <!-- Add your component demos here -->
        <ui-{component-name} prop="value"></ui-{component-name}>
      </div>
    `);
  }

  private initPlayground() {
    (window as any).updatePlayground = () => {
      // Get values from controls
      const prop1 = (document.getElementById('prop1') as HTMLSelectElement)?.value || 'value1';

      // Update preview
      const container = document.getElementById('playgroundContainer');
      if (container) {
        container.innerHTML = `<ui-{component-name} prop="${prop1}"></ui-{component-name}>`;
      }

      // Update code block
      const codeBlock = document.getElementById('codeBlock');
      if (codeBlock) {
        codeBlock.textContent = `<ui-{component-name} prop="${prop1}"></ui-{component-name}>`;
      }
    };

    (window as any).copyCode = () => {
      const code = document.getElementById('codeBlock')?.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
      });
    };

    (window as any).updatePlayground();
  }
}
```

### Step 3: Register in playground.registry.ts

```typescript
// Add import
import { {ComponentName}Playground } from './{component-name}.playground';

// Add to PLAYGROUNDS object
'{component-name}': {
  id: '{component-name}',
  component: {ComponentName}Playground,
  title: '{Component Title}',
  description: '{Component description}',
},
```

### Step 4: Add to app.ts imports

```typescript
import { {ComponentName}Playground } from './playgrounds/{component-name}.playground';

// Add to imports array
imports: [CommonModule, ..., {ComponentName}Playground],
```

### Step 5: Add to app.html template

```html
<app-{component-name}-playground
  *ngIf="currentSection() === '{component-name}'"
></app-{component-name}-playground>

<!-- Update fallback condition -->
*ngIf="... && currentSection() !== '{component-name}'"
```

## 🎯 Conversion Tips

### 1. Extract HTML from demo files

Look for `section.innerHTML = \`...\`` in the original demo files and copy the HTML content.

### 2. Convert window functions to methods

```javascript
// Original
window.showSection = function() { ... }

// Angular
showSection() {
  this.demoContent.set(`...`);
}
```

### 3. Keep the same structure

- Demo controls (tabs)
- Demo blocks
- Interactive playground
- Code display with copy button

### 4. Use the same styling

All playgrounds share the same SCSS structure for consistency.

### 5. Initialize window functions

Always wrap window function setup in `setTimeout(() => this.initPlayground(), 100)` to ensure DOM is ready.

## 📝 Quick Reference

### Component Props Pattern

```html
<ui-component prop1="value1" prop2="value2" [boolean-prop]="true"></ui-component>
```

### Interactive Controls Pattern

```html
<label
  ><span>Label:</span>
  <select id="controlId" onchange="window.updateFunction()">
    <option value="val1">Option 1</option>
  </select>
</label>
```

### Code Block Pattern

```html
<div class="code-block">
  <button onclick="window.copyCode()">Copy</button>
  <pre><code id="codeBlock"></code></pre>
</div>
```

## 🚀 Batch Conversion Strategy

### Priority Order:

1. **High Priority** (Most used components):
   - accordion, dropdown, dialog, pagination, stepper
2. **Medium Priority** (Common components):
   - badge, chip, pill, avatar, skeleton, divider
3. **Low Priority** (Specialized components):
   - speedometer, knob, meter-group, bar-chart

### Recommended Approach:

1. Convert 5-10 components per session
2. Test each playground before moving to the next
3. Commit after each successful conversion
4. Use the button playground as a reference

## ✨ Example: Converting Accordion Demo

1. Check original: `C:\Praveen\Personal-repo\stencil\lib\app-ui\www\build\assets\js\demos\accordion-demo.js`
2. Create: `src/app/playgrounds/accordion.playground.ts`
3. Copy HTML sections from the demo file
4. Convert window functions to Angular methods
5. Register in registry, app.ts, and app.html
6. Test in browser

## 🎉 Success Criteria

- ✅ Playground loads without errors
- ✅ All demo sections work
- ✅ Interactive controls update the preview
- ✅ Code block shows correct syntax
- ✅ Copy button works
- ✅ Styling matches other playgrounds

---

**Happy Converting! 🚀**

For questions or issues, refer to the existing playgrounds:

- `button.playground.ts` (comprehensive example)
- `tabs.playground.ts` (complex component)
- `card.playground.ts` (multiple features)
