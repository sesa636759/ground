# ui-avatar-group

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **host** | `HTMLElement` |  |
| **avatars** | `AvatarGroupProps['avatars']` | Array of avatar props |
| **maxVisible** | `number` | Maximum number of avatars to show before grouping |
| **max** | `number` | Alias for maxVisible (backward compatibility) |
| **size** | `string` | Size of avatars (used to calculate overlap) |
| **shape** | `'square' \| 'circle' \| 'hexagon' \| 'squircle'` | Shape to apply to all avatars in the group |
| **layout** | `'stack' \| 'grid'` | Layout mode: 'stack' or 'grid' |
| **isHovered** | `boolean` |  |
| **isRosterOpen** | `boolean` |  |
| **slottedAvatars** | `Element[]` |  |
| **src** | `string` |  |
| **content** | `string` |  |
| **index** | `number` |  |

## Events

No events found.

## Usage Example

```html
<ui-avatar-group
  [host]="value"
  [avatars]="value"
  [maxVisible]="value"
></ui-avatar-group>
```
