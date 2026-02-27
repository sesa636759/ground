# ui-app-chart

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **chartType** | `ChartType` |  |
| **data** | `ChartData` |  |
| **options** | `ChartOptions` |  |
| **colors** | `string[]` |  |
| **showLegend** | `boolean` |  |
| **legendPosition** | `'top' \| 'bottom' \| 'left' \| 'right'` |  |
| **responsive** | `boolean` | Responsive behavior (Chart.js option passthrough) |
| **maintainAspectRatio** | `boolean` | Maintain aspect ratio (Chart.js option passthrough) |
| **aspectRatio** | `number` | Aspect ratio when maintainAspectRatio is true |
| **xBeginAtZero** | `boolean` | Begin axes at zero |
| **yBeginAtZero** | `boolean` |  |
| **stacked** | `boolean` | Stack bars/lines where applicable |
| **chartTitle** | `string` | Chart title text (uses Chart.js title plugin) |
| **xAxisLabel** | `string` | Label for X Axis |
| **yAxisLabel** | `string` | Label for Y Axis |
| **event** | `MouseEvent` |  |
| **active** | `any[]` |  |
| **data** | `any` |  |

## Events

No events found.

## Usage Example

```html
<ui-app-chart
  [chartType]="value"
  [data]="value"
  [options]="value"
></ui-app-chart>
```
