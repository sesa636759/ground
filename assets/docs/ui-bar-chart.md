# ui-bar-chart

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **chartTitle** | `string` | Chart title |
| **subtitle** | `string` | Chart subtitle |
| **data** | `BarData[]` | Chart data - simple format |
| **labels** | `string[]` | Labels for x-axis (when using datasets format) |
| **datasets** | `BarChartDataset[]` | Datasets (for multiple bar series) |
| **orientation** | `'vertical' \| 'horizontal'` | Chart orientation |
| **showValues** | `boolean` | Show values on bars |
| **showLegend** | `boolean` | Show legend |
| **showGrid** | `boolean` | Show grid lines |
| **height** | `number` | Chart height in pixels |
| **width** | `number` | Chart width (auto if not specified) |
| **barColor** | `string` | Bar color (default) |
| **barColors** | `string[]` | Bar colors array (for multi-color bars) |
| **barWidth** | `number` | Bar width percentage (1-100) |
| **enableAnimation** | `boolean` | Animate on load |
| **animationDuration** | `number` | Animation duration in ms |
| **stacked** | `boolean` | Enable stacked bars |
| **yAxisLabel** | `string` | Y-axis label |
| **xAxisLabel** | `string` | X-axis label |
| **minValue** | `number` | Min value for Y-axis |
| **maxValue** | `number` | Max value for Y-axis |
| **yAxisTicks** | `number` | Number of Y-axis ticks |
| **showTooltip** | `boolean` | Show tooltip on hover |
| **responsive** | `boolean` | Responsive |
| **borderRadius** | `number` | Border radius for bars |
| **datasetIndex** | `number` |  |
| **barIndex** | `number` |  |

## Events

No events found.

## Usage Example

```html
<ui-bar-chart
  chartTitle="value"
  subtitle="value"
  [data]="value"
></ui-bar-chart>
```
