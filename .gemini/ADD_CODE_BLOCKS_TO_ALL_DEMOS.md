# Script to Add Code Blocks to All Demos

## Objective

Add `CodeBlockComponent` with "Show Code" and "Copy Code" buttons to every section of every demo component.

## Demos to Update (34 total)

### Core Components (5)

1. ✅ set-masonry (DONE - example)
2. set-input
3. set-checkbox
4. set-radio
5. set-toggle
6. set-button-toggle

### Layout & Navigation (8)

7. set-card
8. set-tabs
9. set-tab-stack
10. set-sidebar
11. set-modern-sidebar
12. set-layout-manager
13. set-splitter
14. set-resizable-panel

### Data Display (6)

15. set-list
16. set-tree
17. set-carousel
18. set-dashboard
19. set-timeline
20. set-stepper

### Input & Forms (3)

21. set-otp-input
22. set-tags-input
23. set-code-editor

### Feedback & Overlays (5)

24. set-empty-state
25. set-progress
26. set-tooltip
27. set-context-menu
28. set-dock-overlay

### Visual & Animation (7)

29. set-avatar
30. set-avatar-group
31. set-animate-on-scroll
32. set-theme-switcher
33. set-scroll-top
34. set-anchor

## Implementation Steps for Each Demo

### Step 1: Update TypeScript Component

```typescript
// 1. Add import
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

// 2. Add to imports array
imports: [..., CodeBlockComponent],

// 3. Add code examples (one per section)
basicExample = `<app-component
  prop="value"
>
  Content
</app-component>`;

variantsExample = `<app-component
  variant="primary"
  size="large"
>
  Content
</app-component>`;
```

### Step 2: Update HTML Template

```html
<!-- Add after each demo preview -->
<app-code-block [code]="basicExample" title="Basic Usage" language="html"></app-code-block>
```

## Batch Processing Strategy

### Priority 1: High-Traffic Demos (Update First)

1. set-dashboard
2. set-code-editor
3. set-tree
4. set-carousel
5. set-list

### Priority 2: Form Components

6. set-input
7. set-checkbox
8. set-radio
9. set-otp-input
10. set-tags-input

### Priority 3: Layout Components

11. set-card
12. set-tabs
13. set-sidebar
14. set-layout-manager

### Priority 4: Remaining Components

15-34. All others

## Automation Approach

For each demo:

1. Read the HTML file
2. Identify all demo sections
3. Extract the component usage code
4. Create code example strings
5. Update TypeScript with imports and examples
6. Update HTML with code blocks

## Template Pattern

### TypeScript Pattern

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-xxx-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-xxx-demo.component.html',
  styleUrl: './set-xxx-demo.component.scss',
})
export class SetXxxDemoComponent {
  // Code examples - one per section
  section1Code = `<!-- Code here -->`;
  section2Code = `<!-- Code here -->`;
  section3Code = `<!-- Code here -->`;
}
```

### HTML Pattern

```html
<section class="demo-section">
  <h2>Section Title</h2>

  <!-- Preview -->
  <div class="demo-preview">
    <app-component></app-component>
  </div>

  <!-- Code Block -->
  <app-code-block [code]="section1Code" title="Section Title" language="html"></app-code-block>
</section>
```

## Progress Tracking

- [x] set-masonry (COMPLETE)
- [ ] set-dashboard
- [ ] set-code-editor
- [ ] set-tree
- [ ] set-carousel
- [ ] set-empty-state
- [ ] set-list
- [ ] set-otp-input
- [ ] set-tags-input
- [ ] set-input
- [ ] set-checkbox
- [ ] set-radio
- [ ] set-toggle
- [ ] set-button-toggle
- [ ] set-card
- [ ] set-tabs
- [ ] set-tab-stack
- [ ] set-sidebar
- [ ] set-modern-sidebar
- [ ] set-layout-manager
- [ ] set-splitter
- [ ] set-resizable-panel
- [ ] set-timeline
- [ ] set-stepper
- [ ] set-progress
- [ ] set-tooltip
- [ ] set-context-menu
- [ ] set-dock-overlay
- [ ] set-avatar
- [ ] set-avatar-group
- [ ] set-animate-on-scroll
- [ ] set-theme-switcher
- [ ] set-scroll-top
- [ ] set-anchor

## Estimated Time

- Per demo: ~5-10 minutes
- Total: ~3-6 hours for all 34 demos

## Quality Checklist (Per Demo)

- [ ] CodeBlockComponent imported
- [ ] Code examples defined for each section
- [ ] Code blocks added to HTML
- [ ] Code examples are accurate
- [ ] Titles are descriptive
- [ ] No syntax errors
- [ ] Component compiles
- [ ] Demo loads correctly

---

**Status**: IN PROGRESS  
**Completed**: 1/34 (3%)  
**Next**: set-dashboard, set-code-editor, set-tree
