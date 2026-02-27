# Pie Chart (`ui-app-chart` — pie / doughnut / polarArea)

The `ui-app-chart` component supports circular chart variants built on Chart.js.  
Use `chartType="pie"`, `chartType="doughnut"`, or `chartType="polarArea"` for proportional data.

---

## Import

```html
<ui-app-chart chartType="pie" [data]="chartData" showLegend="true"></ui-app-chart>
```

---

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `chartType` | `'pie' \| 'doughnut' \| 'polarArea'` | — | Chart variant |
| `data` | `ChartData \| string` | — | Chart.js data object |
| `options` | `ChartOptions \| string` | `{}` | Chart.js options override (e.g. `{ cutout: '60%' }`) |
| `showLegend` | `'true' \| 'false'` | `'true'` | Toggle legend |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Legend placement |
| `responsive` | `'true' \| 'false'` | `'true'` | Scale with container |
| `chartTitle` | `string` | — | Optional title rendered above the chart |
| `colors` | `string[]` | — | Override per-segment colours |

---

## Data Format

Pie / doughnut / polar area charts use a **single dataset** with one `data` entry per segment:

```typescript
chartData = {
  labels: ['North', 'South', 'East', 'West', 'Central'],
  datasets: [{
    data: [35, 20, 18, 15, 12],
    backgroundColor: ['#6366f1', '#f59e0b', '#10b981', '#0ea5e9', '#f43f5e'],
    borderWidth: 2,
    borderColor: '#ffffff'
  }]
};
```

> ⚠️ Unlike bar/line charts, only the **first** dataset is meaningful for pie/doughnut.

---

## Examples

### Basic Pie

```html
<ui-app-chart
  chartType="pie"
  showLegend="true"
  legendPosition="right"
  responsive="true"
  [data]="chartData"
></ui-app-chart>
```

### Doughnut with Custom Cutout

```html
<ui-app-chart
  chartType="doughnut"
  showLegend="true"
  legendPosition="right"
  responsive="true"
  [data]="chartData"
  [options]="{ cutout: '70%' }"
></ui-app-chart>
```

### Polar Area

```html
<ui-app-chart
  chartType="polarArea"
  showLegend="true"
  legendPosition="right"
  responsive="true"
  [data]="chartData"
></ui-app-chart>
```

---

## Chart Type Comparison

| Type | Best Used For |
|---|---|
| `pie` | Simple proportional breakdown, ≤ 5 segments |
| `doughnut` | Same as pie but allows centre annotations |
| `polarArea` | Ranking — segments extend outward by value |

---

## Best Practices

- Keep segments to **≤ 6** — more than that becomes hard to read.
- Use high-contrast `backgroundColor` values so segments are distinguishable.
- For doughnut charts, use the `cutout` option to control ring thickness.
- Always include a legend (`showLegend="true"`) since there are no axis labels.
- Use `legendPosition="right"` for wide containers; `"bottom"` for narrow ones.
