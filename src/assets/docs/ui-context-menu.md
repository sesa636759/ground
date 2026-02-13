# ui-context-menu

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **hostEl** | `HTMLElement` | 'default' | 'danger' |
| **items** | `ContextMenuItem[] \| string` | Menu items, can be JSON string or array |
| **internalItems** | `ContextMenuItem[]` |  |
| **openOn** | `'contextmenu' \| 'click' \| 'hover'` | Listen trigger on: contextmenu, click, hover |
| **placement** | `'bottom' \| 'top' \| 'right' \| 'left'` | Placement of the menu relative to target: 'bottom' (default), 'top', 'right', 'left' |
| **target** | `string` | Optional CSS selector for a target element to attach the context menu |
| **closeOnSelect** | `boolean` | Close menu when selecting an item |
| **viewportPadding** | `number` | Pixel padding from viewport edges |
| **submenuOpenDelay** | `number` | Delay for submenu opening on hover (ms) |
| **hoverCloseDelay** | `number` | Delay for closing menu on mouse leave (ms) |
| **targetOnly** | `boolean` | Attach to slotted target only; otherwise listen at document |
| **theme** | `'light' \| 'dark' \| 'green'` | Reserve space for icons area even if item has no icon |
| **reserveIconSpace** | `boolean` |  |
| **selectedId** | `string` | ID of the currently selected item (for persistent highlighting) |
| **item** | `ContextMenuItem` |  |
| **path** | `number[]` |  |

## Events

No events found.

## Usage Example

```html
<ui-context-menu
  [hostEl]="value"
  items="value"
  [internalItems]="value"
></ui-context-menu>
```
