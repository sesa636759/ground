# ui-stack

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **direction** | `'horizontal' \| 'vertical'` | Stacking direction |
| **wrap** | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | Flex wrap behavior |
| **spacing** | `string` | Spacing between items (negative for overlap) |
| **align** | `'start' \| 'center' \| 'end' \| 'stretch'` | Align items |
| **justify** | `'start' \| 'center' \| 'end' \| 'space-between'` | Justify content |
| **max** | `number` | Maximum items to show before '+N' |
| **overlap** | `boolean` | Whether to overlap items |
| **showDividers** | `boolean` | Whether to show dividers between items |
| **dividerType** | `'solid' \| 'dashed' \| 'dotted' \| 'none'` | Type of divider to show |
| **childrenCount** | `number` |  |
| **isRosterOpen** | `boolean` |  |

## Events

No events found.

## Usage Example

```html
<ui-stack
  [direction]="value"
  [wrap]="value"
  spacing="value"
></ui-stack>
```
