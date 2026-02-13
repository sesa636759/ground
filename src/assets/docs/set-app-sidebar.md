# set-app-sidebar

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **items** | `SidebarNavItem[]` |  |
| **collapsed** | `boolean` |  |
| **selectedId** | `string` | The id of the currently selected item |
| **selectionBarPosition** | `'left' \| 'right'` | Position of the selection bar: 'left' or 'right' |
| **selectionBarColor** | `string` | Color of the selection bar |
| **popoverOpen** | `string \| null` |  |
| **morePopoverOpen** | `string \| null` |  |
| **hoveredItem** | `string \| null` |  |

## Events

No events found.

## Usage Example

```html
<set-app-sidebar
  [items]="value"
  collapsed
  selectedId="value"
></set-app-sidebar>
```
