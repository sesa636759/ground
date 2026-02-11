# Code Block Component Usage Guide

## Overview

The `CodeBlockComponent` provides a reusable way to display code examples in demos with "Show Code" and "Copy Code" functionality.

## Features

✅ **Show/Hide Code** - Toggle code visibility  
✅ **Copy to Clipboard** - One-click code copying  
✅ **Syntax Highlighting** - Basic syntax coloring  
✅ **Responsive Design** - Works on all screen sizes  
✅ **Dark Mode Support** - Automatic theme adaptation  
✅ **Smooth Animations** - Polished user experience

## Installation

The component is located at:

```
src/app/shared/components/code-block/code-block.component.ts
```

## Usage in Demo Components

### 1. Import the Component

```typescript
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-your-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent], // Add here
  // ...
})
```

### 2. Add Code Examples to Your Component

```typescript
export class YourDemoComponent {
  // Define code examples
  basicExample = `<app-button
  variant="primary"
  size="medium"
>
  Click Me
</app-button>`;

  advancedExample = `<app-button
  variant="secondary"
  size="large"
  [disabled]="isDisabled"
  (click)="handleClick()"
>
  Advanced Button
</app-button>`;
}
```

### 3. Use in Template

```html
<section class="demo-section">
  <h2>Basic Example</h2>

  <!-- Your demo component -->
  <div class="demo-preview">
    <app-button variant="primary" size="medium"> Click Me </app-button>
  </div>

  <!-- Code block with show/copy buttons -->
  <app-code-block
    [code]="basicExample"
    title="Basic Button Example"
    language="html"
  ></app-code-block>
</section>
```

## Component API

### Inputs

| Input      | Type     | Default          | Description                                           |
| ---------- | -------- | ---------------- | ----------------------------------------------------- |
| `code`     | `string` | `''`             | The code to display                                   |
| `title`    | `string` | `'Code Example'` | Title shown in header                                 |
| `language` | `string` | `'typescript'`   | Programming language (for future syntax highlighting) |

### Example with All Options

```html
<app-code-block
  [code]="myCodeExample"
  title="Advanced Configuration"
  language="typescript"
></app-code-block>
```

## Complete Demo Example

Here's a complete example showing how to integrate into a demo:

### TypeScript (your-demo.component.ts)

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.scss',
})
export class ButtonDemoComponent {
  // Code examples
  basicExample = `<app-button variant="primary">
  Primary Button
</app-button>`;

  sizesExample = `<app-button size="small">Small</app-button>
<app-button size="medium">Medium</app-button>
<app-button size="large">Large</app-button>`;

  variantsExample = `<app-button variant="primary">Primary</app-button>
<app-button variant="secondary">Secondary</app-button>
<app-button variant="success">Success</app-button>
<app-button variant="danger">Danger</app-button>`;
}
```

### HTML (your-demo.component.html)

```html
<div class="demo-container">
  <h1>Button Component Demo</h1>

  <!-- Basic Example -->
  <section class="demo-section">
    <h2>Basic Usage</h2>
    <div class="demo-preview">
      <app-button variant="primary">Primary Button</app-button>
    </div>
    <app-code-block [code]="basicExample" title="Basic Button" language="html"></app-code-block>
  </section>

  <!-- Sizes Example -->
  <section class="demo-section">
    <h2>Button Sizes</h2>
    <div class="demo-preview">
      <app-button size="small">Small</app-button>
      <app-button size="medium">Medium</app-button>
      <app-button size="large">Large</app-button>
    </div>
    <app-code-block [code]="sizesExample" title="Different Sizes" language="html"></app-code-block>
  </section>

  <!-- Variants Example -->
  <section class="demo-section">
    <h2>Button Variants</h2>
    <div class="demo-preview">
      <app-button variant="primary">Primary</app-button>
      <app-button variant="secondary">Secondary</app-button>
      <app-button variant="success">Success</app-button>
      <app-button variant="danger">Danger</app-button>
    </div>
    <app-code-block
      [code]="variantsExample"
      title="Color Variants"
      language="html"
    ></app-code-block>
  </section>
</div>
```

## Styling Tips

The code block component comes with built-in styling, but you can customize the demo layout:

```scss
.demo-section {
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 1.5rem;
  }
}

.demo-preview {
  padding: 2rem;
  background: var(--bg-secondary, #f7fafc);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
```

## Features Explained

### Show/Hide Code

- Click "Show Code" to reveal the code
- Click "Hide Code" to collapse it
- Smooth animation for better UX

### Copy Code

- Click "Copy Code" to copy to clipboard
- Button changes to "Copied!" with checkmark
- Auto-resets after 2 seconds

### Responsive

- Works on mobile, tablet, and desktop
- Code scrolls horizontally if needed
- Buttons stack on small screens

## Migration Guide

To add code blocks to existing demos:

1. Import `CodeBlockComponent`
2. Define code examples as string properties
3. Add `<app-code-block>` after each demo preview
4. Set appropriate title and code

## Example: Updating Existing Demo

**Before:**

```html
<div class="demo-card">
  <h3>Basic Example</h3>
  <app-toggle></app-toggle>
</div>
```

**After:**

```html
<div class="demo-card">
  <h3>Basic Example</h3>
  <div class="demo-preview">
    <app-toggle></app-toggle>
  </div>
  <app-code-block [code]="basicToggleCode" title="Basic Toggle" language="html"></app-code-block>
</div>
```

And in the component:

```typescript
basicToggleCode = `<app-toggle></app-toggle>`;
```

## Best Practices

1. **Keep code examples concise** - Show only relevant code
2. **Use descriptive titles** - Help users understand what the code does
3. **Format code properly** - Use proper indentation
4. **Group related examples** - Keep similar demos together
5. **Add comments** - Explain complex configurations

## Troubleshooting

### Code not showing

- Ensure `CodeBlockComponent` is imported
- Check that `code` input is bound correctly
- Verify the code string is not empty

### Copy not working

- Check browser clipboard permissions
- Ensure HTTPS or localhost (clipboard API requirement)
- Check console for errors

### Styling issues

- Verify CSS variables are defined
- Check for conflicting styles
- Ensure dark mode variables exist

---

**Created**: 2026-02-11  
**Component**: CodeBlockComponent  
**Location**: `src/app/shared/components/code-block/`
