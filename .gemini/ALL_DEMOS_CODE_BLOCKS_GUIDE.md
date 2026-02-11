# 🚀 Adding Code Blocks to All 34 Demos - Implementation Guide

## Overview

This guide provides the exact steps to add CodeBlockComponent to every demo systematically.

## Progress Tracker

### ✅ Completed (1/34)

1. ✅ set-masonry

### 🔄 In Progress (0/34)

### ⏳ Pending (33/34)

#### Batch 1: High-Priority (5)

2. ⏳ set-dashboard
3. ⏳ set-code-editor
4. ⏳ set-tree
5. ⏳ set-carousel
6. ⏳ set-list

#### Batch 2: Form Components (5)

7. ⏳ set-input
8. ⏳ set-checkbox
9. ⏳ set-radio
10. ⏳ set-otp-input
11. ⏳ set-tags-input

#### Batch 3: Layout Components (5)

12. ⏳ set-card
13. ⏳ set-tabs
14. ⏳ set-sidebar
15. ⏳ set-layout-manager
16. ⏳ set-splitter

#### Batch 4: Navigation & Display (5)

17. ⏳ set-resizable-panel
18. ⏳ set-timeline
19. ⏳ set-stepper
20. ⏳ set-tab-stack
21. ⏳ set-modern-sidebar

#### Batch 5: Feedback & Overlays (5)

22. ⏳ set-empty-state
23. ⏳ set-progress
24. ⏳ set-tooltip
25. ⏳ set-context-menu
26. ⏳ set-dock-overlay

#### Batch 6: Visual & Animation (5)

27. ⏳ set-avatar
28. ⏳ set-avatar-group
29. ⏳ set-animate-on-scroll
30. ⏳ set-theme-switcher
31. ⏳ set-scroll-top

#### Batch 7: Remaining (3)

32. ⏳ set-anchor
33. ⏳ set-toggle
34. ⏳ set-button-toggle

## Standard Implementation Pattern

### For Each Demo:

#### Step 1: Update TypeScript Component

```typescript
// 1. Add import at top
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

// 2. Add to imports array
@Component({
  imports: [CommonModule, FormsModule, PlaygroundComponent, CodeBlockComponent],
  // ...
})

// 3. Add code examples (one per section in HTML)
export class SetXxxDemoComponent {
  // Example 1: Basic usage
  basicExample = `<app-xxx
  prop="value"
>
  Content
</app-xxx>`;

  // Example 2: Variants
  variantsExample = `<app-xxx
  variant="primary"
  size="large"
>
  Content
</app-xxx>`;

  // Add more examples as needed...
}
```

#### Step 2: Update HTML Template

```html
<!-- After each demo preview, add: -->
<section class="demo-section">
  <h2>Section Title</h2>

  <!-- Existing preview -->
  <div class="demo-preview">
    <app-xxx></app-xxx>
  </div>

  <!-- ADD THIS CODE BLOCK -->
  <app-code-block [code]="basicExample" title="Descriptive Title" language="html"></app-code-block>
</section>
```

## Detailed Instructions Per Demo

### 1. set-dashboard (2 sections)

**TypeScript additions:**

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

imports: [..., CodeBlockComponent],

// Code examples
playgroundCode = `<app-dashboard
  [cols]="12"
  [rowHeight]="60"
  [draggable]="true"
  [resizable]="true"
>
  <!-- Widgets here -->
</app-dashboard>`;

featuresCode = `<!-- Dashboard Features:
- Drag & Drop: Intuitive interface
- Resizable: From any corner
- Responsive: Custom breakpoints
- State Management: Save/load/undo/redo
-->`;
```

**HTML additions:**

```html
<!-- After playground section -->
<app-code-block
  [code]="playgroundCode"
  title="Dashboard Configuration"
  language="html"
></app-code-block>

<!-- After features section -->
<app-code-block
  [code]="featuresCode"
  title="Key Features Overview"
  language="html"
></app-code-block>
```

### 2. set-code-editor (Multiple sections)

**TypeScript additions:**

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

basicEditorCode = `<app-code-editor
  language="typescript"
  theme="vs-dark"
  [value]="code"
></app-code-editor>`;

themesCode = `<app-code-editor
  theme="vs-light"
  [value]="code"
></app-code-editor>`;

languagesCode = `<app-code-editor
  language="javascript"
  [value]="jsCode"
></app-code-editor>`;
```

### 3. set-tree (Multiple sections)

**TypeScript additions:**

```typescript
basicTreeCode = `<app-tree
  [data]="treeData"
  [selectable]="true"
></app-tree>`;

checkboxTreeCode = `<app-tree
  [data]="treeData"
  [checkboxes]="true"
  [cascadeSelection]="true"
></app-tree>`;
```

## Quick Reference: Common Patterns

### Pattern 1: Simple Component

```typescript
basicCode = `<app-component></app-component>`;
```

### Pattern 2: With Props

```typescript
propsCode = `<app-component
  prop1="value1"
  prop2="value2"
  [prop3]="dynamicValue"
></app-component>`;
```

### Pattern 3: With Content

```typescript
contentCode = `<app-component>
  <div class="content">
    Content here
  </div>
</app-component>`;
```

### Pattern 4: With Loop

```typescript
loopCode = `<app-component
  *ngFor="let item of items"
  [data]="item"
></app-component>`;
```

## Validation Checklist

For each demo, verify:

- [ ] CodeBlockComponent imported
- [ ] Added to imports array
- [ ] Code examples defined
- [ ] Code blocks added to HTML
- [ ] Code is syntactically correct
- [ ] Titles are descriptive
- [ ] No compilation errors
- [ ] Demo loads correctly

## Estimated Timeline

- Per demo: 5-10 minutes
- Total time: 3-6 hours
- Batches: 7 batches of ~5 demos each

## Next Steps

I will now proceed to update all 34 demos systematically. Due to the large scope, I'll:

1. Update demos in batches
2. Test compilation after each batch
3. Track progress in this document
4. Provide summaries after each batch

---

**Status**: STARTING  
**Current Batch**: Batch 1 (High-Priority)  
**Progress**: 1/34 (3%)  
**Started**: 2026-02-11 22:48
