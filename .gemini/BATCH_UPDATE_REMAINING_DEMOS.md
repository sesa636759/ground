# Batch Update Script for Remaining 22 Demos

## Quick Update Template

For each remaining demo, add these lines:

### TypeScript Template

```typescript
// Add import
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

// Add to imports array
CodeBlockComponent;

// Add code example property
playgroundCode = `<app-COMPONENT_NAME
  prop="value"
></app-COMPONENT_NAME>`;
```

## Remaining Demos to Update (22)

### set-tabs

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-tabs>
  <app-tab label="Tab 1">Content 1</app-tab>
  <app-tab label="Tab 2">Content 2</app-tab>
</app-tabs>`;
```

### set-sidebar

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-sidebar
  [position]="left"
  [collapsible]="true"
></app-sidebar>`;
```

### set-layout-manager

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-layout-manager
  [regions]="regions"
></app-layout-manager>`;
```

### set-splitter

```typescript
import { CodeBlockComponent} from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-splitter
  direction="horizontal"
></app-splitter>`;
```

### set-resizable-panel

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<ui-eesizable-panel
  [minSize]="200"
  [maxSize]="800"
></ui-eesizable-panel>`;
```

### set-timeline

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-timeline
  [items]="timelineItems"
></app-timeline>`;
```

### set-stepper

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-stepper
  [steps]="steps"
  [currentStep]="0"
></app-stepper>`;
```

### set-tab-stack

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-tab-stack
  [tabs]="tabs"
></app-tab-stack>`;
```

### set-modern-sidebar

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-modern-sidebar
  [items]="menuItems"
></app-modern-sidebar>`;
```

### set-empty-state

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-empty-state
  title="No data"
  description="No items found"
></app-empty-state>`;
```

### set-progress

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-progress
  [value]="50"
  [max]="100"
></app-progress>`;
```

### set-tooltip

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-tooltip
  content="Tooltip text"
  position="top"
></app-tooltip>`;
```

### set-context-menu

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-context-menu
  [items]="menuItems"
></app-context-menu>`;
```

### set-dock-overlay

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-dock-overlay
  [position]="bottom"
></app-dock-overlay>`;
```

### set-avatar

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-avatar
  src="image.jpg"
  alt="User"
  size="medium"
></app-avatar>`;
```

### set-avatar-group

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-avatar-group
  [avatars]="avatars"
  [max]="3"
></app-avatar-group>`;
```

### set-animate-on-scroll

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-animate-on-scroll
  animation="fadeIn"
></app-animate-on-scroll>`;
```

### set-theme-switcher

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-theme-switcher
  [themes]="themes"
></app-theme-switcher>`;
```

### set-scroll-top

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-scroll-top
  [threshold]="300"
></app-scroll-top>`;
```

### set-anchor

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-anchor
  href="#section"
  [smooth]="true"
></app-anchor>`;
```

### set-toggle

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-toggle
  [(ngModel)]="enabled"
></app-toggle>`;
```

### set-button-toggle

```typescript
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
imports: [..., CodeBlockComponent],
playgroundCode = `<app-button-toggle
  [options]="options"
  [(ngModel)]="selected"
></app-button-toggle>`;
```

---

**Use this as a reference to quickly update the remaining 22 demos**
