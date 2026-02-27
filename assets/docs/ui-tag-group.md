# ui-tag-group

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **max** | `number` | Maximum number of tags to display before hiding and showing (+N) |
| **spacing** | `string` | Spacing between tags |
| **overlap** | `boolean` | Whether to overlap tags (avatar style) |
| **value** | `string \| string[]` | Selected values (for checkable tags) |
| **selectionMode** | `'none' \| 'single' \| 'multiple'` | Selection mode: 'none', 'single', or 'multiple' |
| **size** | `'sm' \| 'md' \| 'lg'` | Bulk size for all tags in group |
| **variant** | `'filled' \| 'outlined' \| 'light' \| 'dot'` | Bulk variant for all tags in group |
| **color** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'default'` | Bulk color for all tags in group |
| **rounded** | `boolean` | Whether all tags in group should be rounded |
| **removable** | `boolean` | Whether all tags in group should be removable |
| **creatable** | `boolean` | Whether users can add new tags (Premium) |
| **searchable** | `boolean` | Whether tags are filterable via search (Premium) |
| **collapsible** | `boolean` | Whether overflow tags can be toggled to show (Premium) |
| **caseSensitive** | `boolean` | Case sensitivity for search and duplicates |
| **delimiters** | `string[]` | Delimiters to trigger tag creation |
| **searchQuery** | `string` |  |
| **isAdding** | `boolean` |  |
| **isExpanded** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **tagGroupChange** | `string \| string[]` |  |

## Usage Example

```html
<ui-tag-group
  [max]="value"
  spacing="value"
  overlap
  (tagGroupChange)="handleEvent($event)"
></ui-tag-group>
```
