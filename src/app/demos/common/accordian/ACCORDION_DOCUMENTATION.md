# 🎯 Accordion Component Documentation

Complete API reference for the Accordion component, including properties, events, and usage guidelines.

## Overview

The `<ui-accordion>` component provides a vertically stacked list of collapsible panels for organizing content. It supports advanced features like search, drag-and-drop, nested structures, and persistence.

---

## 📋 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `string \| AccordionItem[]` | `[]` | Array of accordion items (can be JSON string or array) |
| `enable-search` | `boolean` | `false` | Enable built-in search functionality |
| `search-placeholder` | `string` | `"Search..."` | Placeholder text for search input |
| `enable-nested` | `boolean` | `false` | Enable nested accordion structures |
| `enable-drag-drop` | `boolean` | `false` | Enable drag-and-drop reordering of items |
| `enable-persistence` | `boolean` | `false` | Save expansion state to localStorage |
| `persistence-key` | `string` | `"accordion-state"` | Unique key for localStorage persistence |
| `loading` | `boolean` | `false` | Show skeleton loading state |
| `rtl` | `boolean` | `false` | Enable right-to-left layout support |
| `dense` | `boolean` | `false` | Compact layout with reduced padding |
| `lazy` | `boolean` | `false` | Lazy render content only when expanded |
| `expandedItems` | `string[]` | `[]` | Array of item IDs that should be expanded (for controlled mode) |

---

## ⚡ Events

| Event | Payload | Description |
|-------|---------|-------------|
| `beforeOpen` | `{ itemId: string }` | Fired before an item is expanded |
| `afterOpen` | `{ itemId: string }` | Fired after an item is expanded |
| `beforeClose` | `{ itemId: string }` | Fired before an item is collapsed |
| `afterClose` | `{ itemId: string }` | Fired after an item is collapsed |
| `accordionAction` | `{ itemId: string, actionId: string }` | Fired when an action button is clicked |
| `accordionReorder` | `{ oldIndex: number, newIndex: number }` | Fired when items are reordered via drag-and-drop |

---

## 🏗️ Item Structure

Each accordion item should have the following structure:

```typescript
interface AccordionItem {
  id: string;              // Unique identifier (required)
  title: string;           // Item header text (required)
  content: string;         // HTML content for the panel (required)
  subtitle?: string;       // Optional subtitle below title
  icon?: string;           // Optional icon (emoji or icon class)
  actions?: Action[];      // Optional action buttons
  children?: AccordionItem[]; // Optional nested items
}

interface Action {
  id: string;              // Unique action identifier
  label: string;           // Button label/icon
  ariaLabel: string;       // Accessibility label
}
```

---

## 💡 Usage Examples

### Basic Usage

```html
<ui-accordion [items]="items"></ui-accordion>
```

```typescript
// Component
items = [
  {
    id: 'item1',
    title: 'First Item',
    content: '<p>Content for first item</p>'
  },
  {
    id: 'item2',
    title: 'Second Item',
    content: '<p>Content for second item</p>'
  }
];
```

### With Search

```html
<ui-accordion 
  [items]="items" 
  enable-search 
  search-placeholder="Search items...">
</ui-accordion>
```

### With Actions and Events

```html
<ui-accordion 
  [items]="items" 
  (accordionAction)="handleAction($event)"
  (afterOpen)="onItemOpen($event)">
</ui-accordion>
```

```typescript
// Component
items = [
  {
    id: 'file1',
    title: 'Document.pdf',
    subtitle: '2.4 MB',
    content: '<p>Preview...</p>',
    actions: [
      { id: 'download', label: '⬇️', ariaLabel: 'Download' },
      { id: 'delete', label: '🗑️', ariaLabel: 'Delete' }
    ]
  }
];

handleAction(event: CustomEvent) {
  const { itemId, actionId } = event.detail;
  console.log(`Action ${actionId} on item ${itemId}`);
}
```

### Drag & Drop with Persistence

```html
<ui-accordion 
  [items]="items" 
  enable-drag-drop 
  enable-persistence 
  persistence-key="my-accordion-v1"
  (accordionReorder)="handleReorder($event)">
</ui-accordion>
```

```typescript
// Component
handleReorder(event: CustomEvent) {
  const { oldIndex, newIndex } = event.detail;
  // Update your data model
}
```

### Nested Accordion

```html
<ui-accordion [items]="nestedItems" enable-nested></ui-accordion>
```

```typescript
// Component
nestedItems = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    children: [
      {
        id: 'js',
        title: 'JavaScript',
        children: [
          { id: 'ts', title: 'TypeScript', content: 'Superset of JS' },
          { id: 'es6', title: 'ES6+', content: 'Modern JS features' }
        ]
      },
      { id: 'css', title: 'CSS', content: 'Styling the web' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    children: [
      { id: 'node', title: 'Node.js', content: 'JS on the server' },
      { id: 'python', title: 'Python', content: 'Versatile language' }
    ]
  }
];
```

### Controlled Mode

```html
<div class="buttons">
  <ui-button (click)="setControlledExpanded(['c1'])" label="Open 1"></ui-button>
  <ui-button (click)="setControlledExpanded(['c2'])" label="Open 2"></ui-button>
  <ui-button (click)="setControlledExpanded([])" label="Close All"></ui-button>
</div>
<ui-accordion [items]="items" [expandedItems]="controlledExpanded"></ui-accordion>
```

```typescript
// Component
controlledExpanded: string[] = [];

setControlledExpanded(ids: string[]) {
  this.controlledExpanded = [...ids];
}
```

### Lazy Loading

```html
<ui-accordion [items]="items" lazy></ui-accordion>
```

The `lazy` attribute ensures content is only rendered when a panel is expanded, improving performance for large or complex content.

### Loading State

```html
<ui-accordion loading></ui-accordion>
```

Displays a skeleton loader while data is being fetched.

---

## ♿ Accessibility

The accordion component is built with accessibility in mind:

- **Keyboard Navigation:** Use `Tab` to navigate between items, `Enter` or `Space` to expand/collapse
- **ARIA Labels:** Proper roles and aria-expanded attributes are automatically applied
- **Screen Readers:** All actions include aria-label for screen reader support
- **Focus Management:** Visual focus indicators help keyboard users navigate
- **Semantic HTML:** Uses appropriate semantic elements for better screen reader interpretation

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Move focus to next accordion item |
| `Shift + Tab` | Move focus to previous accordion item |
| `Enter` or `Space` | Toggle expansion of focused item |
| `Arrow Down` | Move to next item (when focused) |
| `Arrow Up` | Move to previous item (when focused) |
| `Home` | Jump to first item |
| `End` | Jump to last item |

---

## ✅ Best Practices

1. **Unique IDs:** Always provide unique `id` values for each item to ensure proper state management and event handling.

2. **Concise Titles:** Keep titles short and descriptive (2-5 words recommended) for better scannability.

3. **HTML Content:** The content property accepts HTML, but always sanitize user input to prevent XSS attacks.

4. **Persistence Keys:** Version your persistence keys (e.g., "accordion-v2") when changing item structure to avoid conflicts with old saved states.

5. **Performance:** Use `lazy` mode for large content or heavy DOM structures to improve initial render performance.

6. **Loading State:** Show the loading skeleton while fetching async data to provide better UX feedback.

7. **Accessibility:** Always include `ariaLabel` for action buttons to support screen readers.

8. **Controlled vs Uncontrolled:** Use controlled mode (`expandedItems`) when you need to manage expansion state programmatically, otherwise let the component manage its own state.

9. **Search Optimization:** When using search, ensure your item titles and content contain searchable keywords.

10. **Drag & Drop UX:** When enabling drag-and-drop, provide visual feedback and update your data model in the `accordionReorder` event handler.

---

## 🎨 Styling & Theming

The accordion component supports customization through CSS variables. You can override these in your global styles:

```css
ui-accordion {
  --accordion-border-color: #e2e8f0;
  --accordion-header-bg: #ffffff;
  --accordion-header-hover-bg: #f8fafc;
  --accordion-content-bg: #ffffff;
  --accordion-transition-duration: 300ms;
}
```

### Dense Mode

Use the `dense` attribute for compact layouts:

```html
<ui-accordion [items]="items" dense></ui-accordion>
```

---

## 🌍 Internationalization

The accordion supports RTL (right-to-left) languages:

```html
<ui-accordion [items]="items" rtl></ui-accordion>
```

This properly aligns icons, action buttons, and expansion indicators for RTL languages like Arabic and Hebrew.

---

## 🔧 Advanced Features

### State Persistence

The accordion can automatically save and restore expansion state:

```html
<ui-accordion 
  [items]="items" 
  enable-persistence 
  persistence-key="user-settings-accordion-v1">
</ui-accordion>
```

This stores the state in localStorage and restores it on page reload.

### Event Lifecycle

The accordion provides granular control through lifecycle events:

```typescript
<ui-accordion 
  [items]="items"
  (beforeOpen)="onBeforeOpen($event)"
  (afterOpen)="onAfterOpen($event)"
  (beforeClose)="onBeforeClose($event)"
  (afterClose)="onAfterClose($event)">
</ui-accordion>

// Component
onBeforeOpen(event: CustomEvent) {
  // Prevent opening if needed
  // event.preventDefault();
}

onAfterOpen(event: CustomEvent) {
  // Track analytics
  console.log('Item opened:', event.detail.itemId);
}
```

---

## 📦 Common Use Cases

### FAQ Section

```html
<ui-accordion [items]="faqItems" enable-search search-placeholder="Search FAQs..."></ui-accordion>
```

### Settings Panel

```html
<ui-accordion [items]="settingsItems" enable-persistence persistence-key="app-settings-v1"></ui-accordion>
```

### File Manager

```html
<ui-accordion 
  [items]="fileItems" 
  enable-nested 
  enable-drag-drop
  (accordionAction)="handleFileAction($event)"
  (accordionReorder)="handleFileReorder($event)">
</ui-accordion>
```

### Documentation Sections

```html
<ui-accordion [items]="docSections" lazy dense></ui-accordion>
```

---

## 🐛 Troubleshooting

### Items not displaying

- Ensure each item has a unique `id`
- Verify the `items` array is properly formatted
- Check console for validation errors

### Persistence not working

- Ensure `persistence-key` is unique across your app
- Check browser localStorage is enabled
- Clear localStorage if structure changed: `localStorage.removeItem('your-persistence-key')`

### Events not firing

- Use `(eventName)` syntax in Angular templates
- Verify event handler is bound correctly
- Check event payload structure matches documentation

### Drag & Drop not working

- Ensure `enable-drag-drop` is set to `true`
- Verify browser supports drag & drop API
- Check for conflicting CSS preventing pointer events

---

## 📚 Related Components

- **Panel** - Single collapsible panel
- **Tabs** - Horizontal navigation between content sections
- **Tree** - Hierarchical nested navigation
- **Menu** - Dropdown navigation menus

---

## 📝 License

This component is part of the UI Component Library.

---

## 🤝 Contributing

Found an issue or want to contribute? Please check our contribution guidelines.

---

**Last Updated:** February 13, 2026  
**Version:** 1.0.0
