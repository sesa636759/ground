# ui-knob

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **value** | `number` | Current value |
| **min** | `number` | Minimum value |
| **max** | `number` | Maximum value |
| **step** | `number` | Step increment |
| **size** | `number` | Size of the knob |
| **strokeWidth** | `number` | Stroke width |
| **color** | `string` | Color of the active arc |
| **trackColor** | `string` | Color of the track |
| **showValue** | `boolean` | Show value label |
| **valueSuffix** | `string` | Custom value suffix (e.g., '%', '°', 'dB') |
| **showMinMax** | `boolean` | Show min/max labels |
| **disabled** | `boolean` | Disabled state |
| **readonly** | `boolean` | Read-only state |
| **startAngle** | `number` | Start angle in degrees (0 = top, 90 = right) |
| **endAngle** | `number` | End angle in degrees |
| **enableWheel** | `boolean` | Enable mouse wheel rotation control |
| **showTicks** | `boolean` | Show tick marks along the arc (useful for speedometer-like gauges) |
| **tickCount** | `number` | Number of tick marks to render along the arc |
| **tickColor** | `string` | Tick color |
| **tickLength** | `number` | Tick length factor relative to radius (0-1) |
| **showLabels** | `boolean` | Show numeric labels around the knob |
| **snap** | `boolean` | Snap to step intervals |
| **allowInput** | `boolean` | Allow double-click to edit value manually |
| **isDragging** | `boolean` |  |
| **angle** | `number` |  |
| **isEditing** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **knobChange** | `number` | Event emitted when value changes |
| **knobInput** | `number` | Event emitted while dragging |

## Usage Example

```html
<ui-knob
  [value]="value"
  [min]="value"
  [max]="value"
  (knobChange)="handleEvent($event)"
></ui-knob>
```
