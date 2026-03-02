# Ready-to-Use Templates for Adding Code Blocks

## How to Use These Templates

1. Find your demo in the list below
2. Copy the TypeScript code additions
3. Copy the HTML code additions
4. Paste into your demo files
5. Adjust the code examples to match your actual component usage

---

## Template for set-dashboard

### TypeScript (set-dashboard-demo.component.ts)

```typescript
// ADD THIS IMPORT
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

// UPDATE imports array
imports: ([CommonModule, FormsModule, DashboardPlaygroundComponent, CodeBlockComponent],
  // ADD THESE PROPERTIES to the class
  (playgroundCode = `<app-dashboard
  [cols]="12"
  [rowHeight]="60"
  [draggable]="true"
  [resizable]="true"
>
  <!-- Add your widgets here -->
</app-dashboard>`));
```

### HTML (set-dashboard-demo.component.html)

```html
<!-- ADD AFTER the playground section (after line 14) -->
<app-code-block
  [code]="playgroundCode"
  title="Dashboard Configuration"
  language="html"
></app-code-block>
```

---

## Template for set-code-editor

### TypeScript

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

imports: [..., CodeBlockComponent],

basicEditorCode = `<app-code-editor
  language="typescript"
  theme="vs-dark"
></app-code-editor>`;
```

---

## Template for set-tree

### TypeScript

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

imports: [..., CodeBlockComponent],

basicTreeCode = `<app-tree
  [data]="treeData"
  [selectable]="true"
></app-tree>`;
```

---

## Template for set-carousel

### TypeScript

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

imports: [..., CodeBlockComponent],

basicCarouselCode = `<app-carousel
  [autoplay]="true"
  [interval]="3000"
>
  <div *ngFor="let slide of slides">
    {{ slide.content }}
  </div>
</app-carousel>`;
```

---

## Template for set-list

### TypeScript

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

imports: [..., CodeBlockComponent],

basicListCode = `<app-list>
  <app-list-item *ngFor="let item of items">
    {{ item.title }}
  </app-list-item>
</app-list>`;
```

---

## Generic Template (For Any Demo)

### Step 1: TypeScript

```typescript
// 1. Add import
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

// 2. Add to imports
imports: ([CommonModule, FormsModule, YourPlaygroundComponent, CodeBlockComponent],
  // 3. Add code examples
  (section1Code = `<app-your-component
  prop="value"
>
  Content
</app-your-component>`));

section2Code = `<app-your-component
  variant="different"
>
  Content
</app-your-component>`;
```

### Step 2: HTML

```html
<!-- After each demo section, add: -->
<app-code-block [code]="section1Code" title="Descriptive Title" language="html"></app-code-block>
```

---

## Quick Copy-Paste Snippets

### Import Statement

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
```

### Add to Imports Array

```typescript
CodeBlockComponent;
```

### Basic Code Example Property

```typescript
basicExample = `<app-component></app-component>`;
```

### HTML Code Block

```html
<app-code-block [code]="basicExample" title="Basic Usage" language="html"></app-code-block>
```

---

## Complete Example: set-input

### TypeScript (COMPLETE)

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputPlaygroundComponent } from './components/input-playground/input-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, InputPlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-input-demo.component.html',
  styleUrl: './set-input-demo.component.scss',
})
export class SetInputDemoComponent {
  basicInputCode = `<ui-input
  placeholder="Enter text"
  type="text"
></app-input>`;

  variantsInputCode = `<ui-input
  variant="filled"
  size="large"
  placeholder="Large filled input"
></app-input>`;

  iconsInputCode = `<ui-input
  placeholder="Search"
  prefix-icon="fas fa-search"
></app-input>`;
}
```

### HTML (ADD THESE)

```html
<!-- After basic input section -->
<app-code-block [code]="basicInputCode" title="Basic Input" language="html"></app-code-block>

<!-- After variants section -->
<app-code-block [code]="variantsInputCode" title="Input Variants" language="html"></app-code-block>

<!-- After icons section -->
<app-code-block [code]="iconsInputCode" title="Input with Icons" language="html"></app-code-block>
```

---

**Use these templates to quickly add code blocks to any demo!**
