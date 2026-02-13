# ui-rating

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | `RatingType` | Type of rating |
| **value** | `number` | Current rating value |
| **max** | `number` | Maximum rating value (for star and smiley types) |
| **size** | `'sm' \| 'md' \| 'lg'` | Size of the rating icons |
| **color** | `'primary' \| 'warning' \| 'success' \| 'danger'` | Color of active rating |
| **readonly** | `boolean` | Read-only mode |
| **disabled** | `boolean` | Disabled state |
| **allowHalf** | `boolean` | Allow half ratings (only for star type) |
| **showValue** | `boolean` | Show rating value text |
| **labels** | `string` | Custom labels for ratings |
| **hoverValue** | `number` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **ratingChange** | `number` | Emitted when rating changes |

## Usage Example

```html
<ui-rating
  [type]="value"
  [value]="value"
  [max]="value"
  (ratingChange)="handleEvent($event)"
></ui-rating>
```
