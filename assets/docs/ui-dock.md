# ui-dock

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **items** | `string` |  |
| **position** | `'bottom' \| 'top' \| 'left' \| 'right'` |  |
| **size** | `'sm' \| 'md' \| 'lg'` |  |
| **magnify** | `boolean` |  |
| **blurEffect** | `boolean` |  |
| **showLabels** | `boolean` |  |
| **parsedItems** | `DockItem[]` |  |
| **hoveredIndex** | `number` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **dockItemClick** | `DockItemClickEvent` |  |
| **itemsOrderChange** | `DockItem[]` |  |

## Usage Example

```html
<ui-dock
  items="value"
  [position]="value"
  [size]="value"
  (dockItemClick)="handleEvent($event)"
></ui-dock>
```
