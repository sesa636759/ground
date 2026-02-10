# Component Demo Pages

This directory contains comprehensive demo pages for each component from the `app-ui-library`.

## 📁 Structure

```
demos/
├── card/
│   ├── card-demo.component.ts
│   ├── card-demo.component.html
│   └── card-demo.component.scss
├── button/
│   └── ... (similar structure)
└── README.md (this file)
```

## 🎯 Demo Page Features

Each demo page includes:

1. **Header Section**
   - Component name and icon
   - Description
   - Action buttons (Open Playground, Documentation)
   - Back to Home button

2. **Quick Navigation**
   - Sticky navigation bar
   - Quick links to all demo sections

3. **Demo Sections**
   - Multiple examples with descriptions
   - Live preview of the component
   - Code snippets with syntax highlighting
   - Copy code functionality

4. **Footer**
   - Call-to-action to open playground

## 🚀 Creating a New Demo Page

### 1. Create Component Files

```bash
mkdir src/app/demos/[component-name]
```

Create three files:

- `[component-name]-demo.component.ts`
- `[component-name]-demo.component.html`
- `[component-name]-demo.component.scss`

### 2. Component TypeScript

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

interface DemoSection {
  id: string;
  title: string;
  description: string;
  code: string;
  preview?: boolean;
}

@Component({
  selector: 'app-[component-name]-demo',
  standalone: true,
  imports: [CommonModule, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './[component-name]-demo.component.html',
  styleUrl: './[component-name]-demo.component.scss',
})
export class [ComponentName]DemoComponent implements AfterViewInit {
  componentName = 'Component Name';
  componentDescription = 'Component description here';

  demos: DemoSection[] = [
    {
      id: 'basic',
      title: 'Basic Example',
      description: 'A basic example',
      code: `<ui-component></ui-component>`,
      preview: true,
    },
    // Add more demos...
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Initialize demo-specific logic
  }

  openPlayground() {
    this.router.navigate(['/playground', '[component-id]']);
  }

  openDocumentation() {
    this.router.navigate(['/documentation'], {
      queryParams: { component: '[component-id]' }
    });
  }

  scrollToDemo(demoId: string) {
    const element = document.getElementById(demoId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
```

### 3. Add Route

In `app.routes.ts`:

```typescript
{
  path: 'demos',
  children: [
    {
      path: '[component-name]',
      loadComponent: () =>
        import('./demos/[component-name]/[component-name]-demo.component')
          .then((m) => m.[ComponentName]DemoComponent),
    },
  ],
}
```

### 4. Copy Template and Styles

Use the existing `card-demo.component.html` and `card-demo.component.scss` as templates.

## 📝 Demo Section Structure

Each demo section should include:

```typescript
{
  id: 'unique-id',              // Used for navigation
  title: 'Demo Title',          // Displayed as heading
  description: 'Description',   // Explains what the demo shows
  code: `<code-here>`,          // HTML code to display
  preview: true,                // Whether to show live preview
}
```

## 🎨 Customization

### Colors

Update the gradient colors in the SCSS file:

```scss
.demo-header {
  background: linear-gradient(135deg, #your-color 0%, #your-color-dark 100%);
}
```

### Icon

Change the emoji icon in the component:

```typescript
// In the HTML template
<div class="icon">🎨</div>  <!-- Change this emoji -->
```

## 📋 Example Usage

Access demo pages at:

- `http://localhost:4200/demos/card`
- `http://localhost:4200/demos/button`
- `http://localhost:4200/demos/[component-name]`

## ✨ Features

- ✅ Beautiful gradient header
- ✅ Sticky quick navigation
- ✅ Live component previews
- ✅ Syntax-highlighted code
- ✅ Copy code functionality
- ✅ Smooth scrolling
- ✅ Responsive design
- ✅ Theme support
- ✅ Direct links to Playground and Documentation
