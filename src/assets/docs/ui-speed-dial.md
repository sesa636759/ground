# ui-speed-dial

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **position** | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' \| 'center'` | Position of the speed dial button |
| **actions** | `SpeedDialAction[] \| string` | Speed dial actions |
| **strategy** | `'fixed' \| 'absolute'` | Positioning strategy: 'fixed' (screen) or 'absolute' (container) |
| **icon** | `string` | Icon for the main button |
| **color** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | Color scheme |
| **size** | `'sm' \| 'md' \| 'lg'` | Size of the button |
| **direction** | `'up' \| 'down' \| 'left' \| 'right' \| 'auto'` | Direction of dial opening |
| **tooltipPosition** | `'left' \| 'right' \| 'top' \| 'bottom' \| 'auto'` | Tooltip position |
| **showTooltips** | `boolean` | Show tooltips |
| **trigger** | `'click' \| 'hover'` | Trigger mode: 'click' (default) or 'hover' |
| **isOpen** | `boolean` | Open state |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **actionClick** | `string` | Emitted when an action is clicked |
| **speedDialToggle** | `boolean` | Emitted when speed dial opens/closes |

## Usage Example

```html
<ui-speed-dial
  [position]="value"
  actions="value"
  [strategy]="value"
  (actionClick)="handleEvent($event)"
></ui-speed-dial>
```
