# ui-tag

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **label** | `string` | Tag label text |
| **color** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'default'` | Color variant |
| **size** | `'sm' \| 'md' \| 'lg'` | Size of the tag |
| **variant** | `'filled' \| 'outlined' \| 'light' \| 'dot'` | Tag variant |
| **removable** | `boolean` | Whether tag is removable |
| **rounded** | `boolean` | Whether tag is rounded |
| **icon** | `string` | Icon to display |
| **iconPos** | `'start' \| 'end'` | Icon position |
| **image** | `string` | Image source URL to display at the start |
| **userAvatar** | `string` | User avatar URL |
| **checkable** | `boolean` | Whether the tag is checkable (selectable) |
| **checked** | `boolean` | Whether the tag is checked (for checkable tags) |
| **animation** | `'fade' \| 'scale' \| 'slide' \| 'rotate' \| 'none'` | Animation type for opening/closing |
| **animationDuration** | `number` | Animation duration in milliseconds |
| **clickable** | `boolean` | Whether the tag is clickable (shows pointer and hover effect) |
| **elevation** | `0 \| 1 \| 2 \| 3` | Elevation level (0-3) |
| **loading** | `boolean` | Whether the tag is in a loading state |
| **pulse** | `boolean` | Whether to show a pulse animation (for attention) |
| **autoColor** | `boolean` | Whether to generate color automatically based on label hash |
| **gradient** | `string` | Gradient variant (e.g., 'blue-purple', 'green-teal') |
| **maxWidth** | `string` | Maximum width with text truncation |
| **showTooltip** | `boolean` | Show tooltip on hover (useful with maxWidth) |
| **isClosing** | `boolean` |  |
| **isOpening** | `boolean` |  |
| **badge** | `string \| number` | Badge content to display |
| **badgeColor** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'default'` | Badge color variant |
| **counter** | `string \| number` | Counter value to display at the end of the tag |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **tagRemove** | `void` | Event emitted when tag is removed |
| **tagCheck** | `boolean` | Event emitted when checked state changes |

## Usage Example

```html
<ui-tag
  label="value"
  [color]="value"
  [size]="value"
  (tagRemove)="handleEvent($event)"
></ui-tag>
```
