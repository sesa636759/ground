# ui-accordion

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **items** | `string` | Array of accordion items (as JSON string) |
| **multiple** | `boolean` | Allow multiple items to be open at once |
| **expandedItems** | `string[] \| null` | Controlled open items (overrides internal state if provided) |
| **defaultOpen** | `string` | IDs of items that should be open by default (as JSON string) |
| **animationDuration** | `number` | Animation duration in milliseconds |
| **animationTiming** | `AccordionAnimation` | Animation timing function |
| **showNumbers** | `boolean` | Show numbered indicators above the accordion |
| **arrowIconCollapsed** | `string` | Custom arrow icon for collapsed state |
| **arrowIconExpanded** | `string` | Custom arrow icon for expanded state |
| **hideArrow** | `boolean` | Hide arrow icon completely |
| **selectedHeaderColor** | `string` | Custom color for selected header (default: #3b82f6) |
| **variant** | `'default' \| 'bordered' \| 'splitted' \| 'light' \| 'shadow'` | Accordion variant: 'default' | 'bordered' | 'splitted' | 'light' | 'shadow' |
| **size** | `'sm' \| 'md' \| 'lg'` | Size of the accordion: 'sm' | 'md' | 'lg' |
| **iconPosition** | `'start' \| 'end'` | Position of the expand icon: 'start' | 'end' |
| **disabled** | `boolean` | Disable the entire accordion |
| **enableSearch** | `boolean` | Enable search/filter functionality |
| **searchPlaceholder** | `string` | Search input placeholder |
| **enableExpandCollapseAll** | `boolean` | Show expand/collapse all buttons |
| **enablePersistence** | `boolean` | Save state to localStorage |
| **persistenceKey** | `string` | localStorage key for persistence |
| **enableDragDrop** | `boolean` | Enable drag & drop reordering |
| **enableNested** | `boolean` | Enable nested accordion support |
| **rtl** | `boolean` | Right-to-left mode |
| **dense** | `boolean` | Compact/dense mode |
| **printExpandAll** | `boolean` | Expand all items when printing |
| **lazy** | `boolean` | Lazy load content (unmount when closed) |
| **headerLevel** | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Header heading level (1-6) for accessibility |
| **loading** | `boolean` | Show global skeleton loading state |
| **openItems** | `string[]` |  |
| **parsedItems** | `AccordionItem[]` |  |
| **parsedDefaultOpen** | `string[]` |  |
| **searchQuery** | `string` |  |
| **filteredItems** | `AccordionItem[]` |  |
| **draggedItemId** | `string \| null` |  |
| **dragOverItemId** | `string \| null` |  |
| **animatingItems** | `Set&lt;string&gt;` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **accordionChange** | `AccordionChangeEvent` |  |
| **beforeOpen** | `AccordionAnimationEvent` |  |
| **afterOpen** | `AccordionAnimationEvent` |  |
| **beforeClose** | `AccordionAnimationEvent` |  |
| **afterClose** | `AccordionAnimationEvent` |  |
| **accordionSearch** | `AccordionSearchEvent` |  |
| **accordionReorder** | `AccordionReorderEvent` |  |
| **accordionAction** | `AccordionActionEvent` |  |

## Usage Example

```html
<ui-accordion
  items="value"
  multiple
  expandedItems="value"
  (accordionChange)="handleEvent($event)"
></ui-accordion>
```
