# ui-button

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **label** | `string` | Button label text |
| **icon** | `string` | Optional icon content (can be text/icon font or emoji) |
| **iconOnly** | `boolean` | Render icon only (no label) |
| **iconPosition** | `'left' \| 'right'` | Icon position relative to label |
| **variant** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'outline' \| 'ghost'` | Visual variant |
| **size** | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | Size |
| **disabled** | `boolean` | Disabled state |
| **loading** | `boolean` | Loading state (shows spinner) |
| **loadingPosition** | `'left' \| 'right' \| 'top' \| 'bottom'` | Loading spinner position |
| **fullWidth** | `boolean` | Full width button |
| **rounded** | `boolean` | Rounded style |
| **pill** | `boolean` | Pill-shaped (fully rounded) |
| **href** | `string` | Link URL. If set, renders as an anchor tag. |
| **target** | `string` | Link target |
| **rel** | `string` | Link relationships |
| **badge** | `string \| number` | Badge content |
| **selected** | `boolean` | Selected state (for toggle groups) |
| **elevation** | `number` | Elevation level (0-5) |
| **noRipple** | `boolean` | Disable ripple effect |
| **type** | `'button' \| 'submit' \| 'reset'` | Button type |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **buttonClick** | `MouseEvent` | Click event |

## Usage Example

```html
<ui-button
  label="value"
  icon="value"
  iconOnly
  (buttonClick)="handleEvent($event)"
></ui-button>
```
