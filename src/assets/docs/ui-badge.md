# ui-badge

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **value** | `string \| number` | Content/number to display in badge |
| **max** | `number` | Maximum value to display before showing "+" |
| **color** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | Color variant |
| **size** | `'sm' \| 'md' \| 'lg'` | Badge size |
| **dot** | `boolean` | Show as dot instead of number |
| **position** | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | Position of the badge |
| **variant** | `'standard' \| 'outlined' \| 'bordered' \| 'soft'` | Variant style |
| **showZero** | `boolean` | Whether to show badge if value is zero |
| **animation** | `'pulse' \| 'bounce' \| 'shake' \| 'none'` | Animation type |
| **offsetX** | `number` | Horizontal offset from position |
| **offsetY** | `number` | Vertical offset from position |
| **icon** | `string` | Icon to display |
| **iconPosition** | `'start' \| 'end'` | Icon position |
| **gradient** | `string` | Gradient variant (e.g., 'blue-purple', 'green-teal', 'orange-red') |
| **customColor** | `string` | Custom background color |
| **customTextColor** | `string` | Custom text color |
| **interactive** | `boolean` | Make badge interactive/clickable |
| **closeable** | `boolean` | Add close button |
| **glow** | `boolean` | Add glow effect |
| **shape** | `'default' \| 'circle' \| 'square'` | Badge shape |
| **isVisible** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **badgeClick** | `void` | Fired when badge is clicked (interactive mode) |
| **badgeClose** | `void` | Fired when badge is closed |

## Usage Example

```html
<ui-badge
  value="value"
  [max]="value"
  [color]="value"
  (badgeClick)="handleEvent($event)"
></ui-badge>
```
