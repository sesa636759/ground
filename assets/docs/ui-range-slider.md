# ui-range-slider

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **min** | `number` | Minimum value |
| **max** | `number` | Maximum value |
| **step** | `number` | Step increment |
| **value** | `number` | Current value (single slider) |
| **startValue** | `number` | Range mode - start value |
| **endValue** | `number` | Range mode - end value |
| **range** | `boolean` | Enable range mode (two thumbs) |
| **disabled** | `boolean` | Disabled state |
| **showTooltip** | `boolean` | Show value tooltip |
| **tooltipAlwaysVisible** | `boolean` | Tooltip always visible |
| **color** | `string` | Color of the slider |
| **trackColor** | `string` | Track color |
| **size** | `'sm' \| 'md' \| 'lg'` | Size variant |
| **startIcon** | `string` | Start icon/text |
| **endIcon** | `string` | End icon/text |
| **displayFormat** | `string` | Display format function or string |
| **showMarks** | `boolean` | Show marks |
| **marks** | `SliderMark[] \| string` | Custom marks |
| **restrictedValues** | `number[] \| string` | Restricted values (only allow specific values) |
| **vertical** | `boolean` | Vertical orientation |
| **showValue** | `boolean` | Show current value label |
| **customSteps** | `number[] \| string` | Custom step marks (non-linear scaling) |
| **isHovering** | `boolean` | Hover state for tooltip |
| **isDraggingState** | `boolean` | Dragging state |
| **start** | `number` |  |
| **end** | `number` |  |

## Events

No events found.

## Usage Example

```html
<ui-range-slider
  [min]="value"
  [max]="value"
  [step]="value"
></ui-range-slider>
```
