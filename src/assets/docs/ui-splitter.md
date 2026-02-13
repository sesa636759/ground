# ui-splitter

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **orientation** | `'horizontal' \| 'vertical'` | Orientation of the splitter |
| **initialSplit** | `number` | Initial split percentage (0-100) |
| **minSize** | `number` | Minimum size in percentage for any pane |
| **maxSize** | `number` | Maximum size in percentage for the first pane |
| **snapOffset** | `number` | Snap offset in percentage. If size is within this range of min/max, it clamps. |
| **disabled** | `boolean` | Disable resizing |
| **split** | `number` |  |
| **isDragging** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **splitChange** | `number` | Event emitted when split percentage changes |

## Usage Example

```html
<ui-splitter
  [orientation]="value"
  [initialSplit]="value"
  [minSize]="value"
  (splitChange)="handleEvent($event)"
></ui-splitter>
```
