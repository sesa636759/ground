# ui-pill

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **label** | `string` | Pill label text |
| **color** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'default'` | Color variant |
| **size** | `'sm' \| 'md' \| 'lg'` | Size of the pill |
| **orientation** | `'horizontal' \| 'vertical' \| 'vertical-text' \| 'vertical-rotated'` | Orientation of the pill: 'horizontal' | 'vertical' | 'vertical-text' | 'vertical-rotated' |
| **selected** | `boolean` | Whether the pill is selected (for toggleable pills) |
| **closeIcon** | `string` | Custom close icon |
| **tooltip** | `string` | Tooltip text |
| **variant** | `'filled' \| 'outlined' \| 'soft' \| 'gradient' \| 'bordered'` | Pill variant |
| **gradient** | `string` | Gradient type (when variant is 'gradient') |
| **icon** | `string` | Icon to display |
| **iconPosition** | `'start' \| 'end'` | Icon position |
| **avatar** | `string` | Avatar URL |
| **removable** | `boolean` | Whether pill is removable |
| **clickable** | `boolean` | Whether pill is clickable |
| **disabled** | `boolean` | Whether pill is disabled |
| **counter** | `string \| number` | Counter/badge value |
| **loading** | `boolean` | Loading state |
| **customColor** | `string` | Custom background color |
| **customTextColor** | `string` | Custom text color |
| **animation** | `'fade' \| 'scale' \| 'slide' \| 'none'` | Animation on mount |
| **isVisible** | `boolean` |  |
| **isAnimating** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **pillClick** | `void` | Fired when pill is clicked |
| **pillRemove** | `void` | Fired when pill is removed |
| **pillSelect** | `boolean` | Fired when pill is selected/deselected |

## Usage Example

```html
<ui-pill
  label="value"
  [color]="value"
  [size]="value"
  (pillClick)="handleEvent($event)"
></ui-pill>
```
