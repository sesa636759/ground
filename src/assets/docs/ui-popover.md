# ui-popover

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **heading** | `string` | Popover heading text |
| **content** | `string` | Popover content (HTML string) |
| **trigger** | `'click' \| 'hover' \| 'focus'` | Trigger type: 'click', 'hover', 'focus' |
| **placement** | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end'` | Placement of popover |
| **showArrow** | `boolean` | Show arrow |
| **width** | `string` | Popover width |
| **animation** | `'fade' \| 'scale' \| 'slide'` | Animation type |
| **showCloseButton** | `boolean` | Show close button |
| **backdrop** | `boolean` | Show backdrop |
| **variant** | `'light' \| 'dark'` | Visual variant |
| **isVisible** | `boolean` | Whether popover is visible |
| **currentPlacement** | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end'` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **popoverShow** | `void` | Emitted when popover shows |
| **popoverHide** | `void` | Emitted when popover hides |

## Usage Example

```html
<ui-popover
  heading="value"
  content="value"
  [trigger]="value"
  (popoverShow)="handleEvent($event)"
></ui-popover>
```
