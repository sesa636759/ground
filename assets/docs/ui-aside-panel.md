# ui-aside-panel

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **open** | `boolean` | Whether the aside panel is open |
| **direction** | `'left' \| 'right' \| 'top' \| 'bottom'` | Direction from which the panel slides in: 'left', 'right', 'top', 'bottom' |
| **size** | `string` | Width of the panel (for left/right) or height (for top/bottom) |
| **closeable** | `boolean` | Whether to show the close button |
| **closeOnOverlayClick** | `boolean` | Whether clicking the overlay closes the panel |
| **closeOnEscape** | `boolean` | Whether the panel can be closed by pressing Escape key |
| **resizable** | `boolean` | Whether the panel is resizable |
| **minSize** | `number` | Minimum size (width or height) in pixels |
| **maxSize** | `number` | Maximum size (width or height) in pixels |
| **variant** | `'default' \| 'glass'` | Visual variant of the panel |
| **backdropBlur** | `string` | Backdrop blur amount (e.g., '8px') |
| **loading** | `boolean` | Whether the panel is in a loading state |
| **persistKey** | `string` | Key to persist the panel's open state and size in localStorage |
| **size** | `number` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **asideClosed** | `void` | Event emitted when the panel is closed |
| **asideOpened** | `void` | Event emitted when the panel is opened |

## Usage Example

```html
<ui-aside-panel
  open
  [direction]="value"
  size="value"
  (asideClosed)="handleEvent($event)"
></ui-aside-panel>
```
