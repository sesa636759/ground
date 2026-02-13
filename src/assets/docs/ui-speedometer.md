# ui-speedometer

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **hostElement** | `HTMLElement` |  |
| **value** | `number` | Current value to display |
| **secondaryValue** | `number` | Secondary value (optional) for comparison, displays as a ghost needle |
| **minValue** | `number` | Minimum value |
| **maxValue** | `number` | Maximum value |
| **size** | `number` | Size of the speedometer in pixels |
| **label** | `string` | Label text displayed below the value |
| **unit** | `string` | Unit text (e.g., 'km/h', 'mph', '%') |
| **showPercentage** | `boolean` | Show percentage instead of actual value |
| **ranges** | `string` | Color ranges as JSON string: [{ min, max, color }] |
| **needleColor** | `string` | Needle color |
| **showTicks** | `boolean` | Show tick marks |
| **tickCount** | `number` | Number of major ticks |
| **animationDuration** | `number` | Animation duration in milliseconds |
| **startAngle** | `number` | Start angle in degrees (default -135 for 270° arc) |
| **endAngle** | `number` | End angle in degrees (default 135 for 270° arc) |
| **needleShape** | `'triangle' \| 'arrow' \| 'line'` | Needle shape: 'triangle', 'arrow', 'line' |
| **customLabels** | `string` | Custom text labels mapping (value -> label). JSON string. Example: "{0: 'Low', 50: 'Med', 100: 'High'}" |
| **gradientColors** | `string` | Gradient colors for the arc |
| **interactive** | `boolean` | Enable interactive mode (drag needle to set value) |
| **parsedLabels** | `Record&lt;number, string&gt;` |  |
| **animatedValue** | `number` |  |
| **min** | `number` |  |
| **max** | `number` |  |
| **color** | `string` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **valueChange** | `number` | Emitted when the value changes in interactive mode |

## Usage Example

```html
<ui-speedometer
  [hostElement]="value"
  [value]="value"
  [secondaryValue]="value"
  (valueChange)="handleEvent($event)"
></ui-speedometer>
```
