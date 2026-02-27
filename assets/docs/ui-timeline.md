# ui-timeline

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **events** | `TimelineEvent[] \| string` | Events definition |
| **normalizedEvents** | `TimelineEvent[]` |  |
| **flow** | `TimelineFlow` | Flow type |
| **mode** | `'vertical' \| 'horizontal'` | Layout mode |
| **align** | `'left' \| 'right' \| 'alternate' \| 'top' \| 'bottom'` | Alignment/Positioning |
| **theme** | `TimelineTheme` | Theme variables |
| **multiline** | `boolean` | Multi-line wrapping |
| **columns** | `number` |  |
| **variant** | `'default' \| 'panel'` | Visual Variant |
| **marker** | `'dot' \| 'number' \| 'icon'` | Marker Type |
| **clickable** | `boolean` | Whether items are interactive/clickable (Premium) |
| **reverse** | `boolean` | Reverse the order of events |
| **pending** | `boolean` | Display a pending state at the end (dashed line) |
| **searchable** | `boolean` | Enable integrated search filtering (Premium) |
| **searchQuery** | `string` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **itemClick** | `TimelineEvent` | Emitted when an item is clicked |

## Usage Example

```html
<ui-timeline
  events="value"
  [normalizedEvents]="value"
  [flow]="value"
  (itemClick)="handleEvent($event)"
></ui-timeline>
```
