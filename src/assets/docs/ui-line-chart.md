# Line Chart (`ui-chart` with `type="line"`)

The `ui-chart` component in line mode renders smooth, responsive line charts powered by Chart.js.  
Use it to visualize trends, time-series data, or any ordered set of values.

---

## Import

```html
<!-- HTML Template -->
<ui-chart type="line" [data]="chartData" show-legend></ui-chart>
```

---

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | `'line'` | Chart type – set to `"line"` |
| `data` | `ChartData \| string` | — | Chart.js data object (or JSON string) |
| `show-legend` | `boolean` | `false` | Display the chart legend |
| `legend-position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position of the legend |
| `show-grid` | `boolean` | `false` | Show background grid lines |
| `fill` | `'true' \| 'false'` | `'false'` | Fill the area below the line |
| `responsive` | `boolean` | `true` | Make chart scale with container width |
| `enable-animation` | `boolean` | `false` | Animate the chart on first render |
| `tension` | `number` | `0` | Bezier curve tension (0 = straight, 0.4 = smooth) |
| `point-radius` | `number` | `3` | Radius of data point markers |
| `border-width` | `number` | `2` | Width of the line stroke |

---

## Data Format

The `data` property accepts a [Chart.js `ChartData`](https://www.chartjs.org/docs/latest/general/data-structures.html) object:

```typescript
chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue ($k)',
      data: [42, 58, 53, 70, 89],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.1)',
      tension: 0.4  // smooth curve
    }
  ]
};
```

### Multi-Series

Add multiple objects to the `datasets` array:

```typescript
datasets: [
  { label: 'Revenue',  data: [42, 58, 53, 70], borderColor: '#6366f1' },
  { label: 'Expenses', data: [30, 40, 45, 55], borderColor: '#f59e0b' },
  { label: 'Profit',   data: [12, 18,  8, 15], borderColor: '#10b981' }
]
```

### Filled Area

Enable filling per dataset via `fill: true` in the dataset object, and/or the `fill="true"` attribute on the component:

```typescript
{
  label: 'Users',
  data: [3200, 4100, 3800, 5200],
  borderColor: '#8b5cf6',
  backgroundColor: 'rgba(139,92,246,0.25)',
  fill: true
}
```

### Stepped Line

Set `stepped: true` on any dataset to render a staircase style:

```typescript
{
  label: 'Server Load',
  data: [15, 12, 45, 72, 68],
  borderColor: '#0ea5e9',
  stepped: true
}
```

---

## Examples

### Basic Smooth Line

```html
<ui-chart
  type="line"
  show-legend
  show-grid
  responsive
  enable-animation
  tension="0.4"
  [data]="chartData"
></ui-chart>
```

### Filled Area Chart

```html
<ui-chart
  type="line"
  fill="true"
  show-legend
  show-grid
  responsive
  tension="0.4"
  [data]="chartData"
></ui-chart>
```

### No Points, Thin Line

```html
<ui-chart
  type="line"
  show-grid
  responsive
  point-radius="0"
  border-width="1"
  tension="0.4"
  [data]="chartData"
></ui-chart>
```

---

## Accessibility

- Wrap the chart in a `<figure>` with a `<figcaption>` for screen reader context.
- Provide a data table as a visually-hidden alternative for keyboard users.

---

## Best Practices

- Use `tension="0.4"` for smooth curves on continuous data (e.g., time series).
- Use `tension="0"` (default) for discrete categorical data.
- Use `stepped: true` for metrics that change in discrete jumps (e.g., server state, pricing tiers).
- Keep datasets to **≤ 5 series** to avoid visual clutter.
- Use contrasting `borderColor` values so lines are distinguishable.
- Set `responsive` for dashboards to ensure the chart resizes with its container.
