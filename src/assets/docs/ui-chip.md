# ui-chip

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **label** | `string` | Label text for the chip |
| **icon** | `string` | Icon to display (can be emoji or text) |
| **image** | `string` | Image source URL for avatar style |
| **userAvatar** | `string` | User avatar URL (displayed as circular avatar) |
| **variant** | `'filled' \| 'outlined' \| 'text' \| 'soft' \| 'gradient'` | Variant style |
| **color** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | Color scheme |
| **size** | `'sm' \| 'md' \| 'lg'` | Size of the chip |
| **orientation** | `'horizontal' \| 'vertical' \| 'vertical-text' \| 'vertical-rotated'` | Orientation of the chip: 'horizontal' | 'vertical' | 'vertical-text' | 'vertical-rotated' |
| **shape** | `'pill' \| 'rounded' \| 'square' \| 'circle'` | Shape of the chip: 'pill' (default) | 'rounded' | 'square' | 'circle' |
| **removable** | `boolean` | Whether the chip is removable |
| **clickable** | `boolean` | Whether the chip is clickable |
| **disabled** | `boolean` | Whether the chip is disabled |
| **animation** | `'fade' \| 'scale' \| 'slide' \| 'bounce' \| 'none'` | Animation type for opening/closing |
| **animationDuration** | `number` | Animation duration in milliseconds |
| **isClosing** | `boolean` |  |
| **isOpening** | `boolean` |  |
| **counter** | `string \| number` | Counter value to display at the end of the chip |
| **badge** | `string \| number` | Badge value to display near the label |
| **selected** | `boolean` | If true, the chip is selected (for filter/choice chips) |
| **closeIcon** | `string` | Custom close icon (replacing the default '×') |
| **loading** | `boolean` | If true, shows a loading spinner |
| **tooltip** | `string` | Tooltip text to display on hover |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **chipRemove** | `void` | Event emitted when chip is removed |
| **chipClick** | `void` | Event emitted when chip is clicked |
| **chipSelect** | `boolean` | Event emitted when chip is selected/deselected |

## Usage Example

```html
<ui-chip
  label="value"
  icon="value"
  image="value"
  (chipRemove)="handleEvent($event)"
></ui-chip>
```
