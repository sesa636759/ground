# ui-meter-group

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **values** | `MeterValue[] \| string` | Array of meter values |
| **orientation** | `'horizontal' \| 'vertical'` | Orientation of the meter |
| **size** | `'sm' \| 'md' \| 'lg'` | Height/thickness of the meter |
| **showLabels** | `boolean` | Show labels |
| **showValues** | `boolean` | Show values |
| **showLegend** | `boolean` | Show legend |
| **shape** | `'line' \| 'circle'` | Shape of the meter |
| **min** | `number` | Minimum value |
| **max** | `number` | Maximum value |
| **interactive** | `boolean` | Interactive mode (clickable segments/legend) |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **meterClick** | `MeterValue` | Emitted when a meter segment or legend item is clicked |

## Usage Example

```html
<ui-meter-group
  values="value"
  [orientation]="value"
  [size]="value"
  (meterClick)="handleEvent($event)"
></ui-meter-group>
```
