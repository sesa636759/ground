# ui-avatar

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **content** | `string` | Content to display (letter or text) |
| **name** | `string` | Optional name to auto-calculate initials from |
| **src** | `string` | Image source URL |
| **icon** | `string` | Icon to display (e.g., SVG or icon name) |
| **shape** | `'square' \| 'circle' \| 'hexagon' \| 'squircle'` | Shape of the avatar: 'square', 'circle', 'hexagon', or 'squircle' |
| **status** | `'online' \| 'away' \| 'busy' \| 'offline'` | Status indicator: 'online', 'away', 'busy', 'offline' |
| **href** | `string` | Optional URL to link the avatar to |
| **badge** | `string` | Badge text to display on the avatar |
| **badgeColor** | `string` | Badge color (applies to both dot and text badges). Accepts any CSS color. Example: "#22c55e", "rgb(34,197,94)", "var(--success)". |
| **size** | `string` | Size of the avatar (e.g., '40px', '2rem') |
| **maxInitials** | `number` | Maximum number of characters to show for initials |
| **hasImageError** | `boolean` |  |
| **isImageLoaded** | `boolean` |  |

## Events

No events found.

## Usage Example

```html
<ui-avatar
  content="value"
  name="value"
  src="value"
></ui-avatar>
```
