# ui-divider

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **text** | `string` | Text to display on the divider |
| **icon** | `string` | Icon to display on the divider (emoji or character) |
| **orientation** | `'horizontal' \| 'vertical'` | Orientation of the divider: 'horizontal' or 'vertical' |
| **variant** | `'solid' \| 'dashed' \| 'dotted' \| 'double-solid' \| 'double-dashed' \| 'double-dotted' \| 'gradient'` | Visual variant of the divider line: 'solid', 'dashed', 'dotted', 'double-solid', 'double-dashed', 'double-dotted', or 'gradient' |
| **size** | `'sm' \| 'md' \| 'lg'` | Size/thickness of the divider line: 'sm', 'md', or 'lg' |
| **textAlign** | `'left' \| 'center' \| 'right'` | Text alignment: 'left', 'center', or 'right' |
| **color** | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| string` | Theme color or custom CSS color |
| **textColor** | `string` | Custom color for the text (CSS color value) |
| **textTransform** | `'none' \| 'capitalize' \| 'uppercase' \| 'lowercase'` | Text transformation: 'none', 'capitalize', 'uppercase', 'lowercase' |
| **verticalAlign** | `'top' \| 'center' \| 'bottom'` | Vertical alignment: 'top', 'center', or 'bottom' (only for vertical orientation) |
| **gap** | `string` | Spacing around the divider (margin) |
| **plain** | `boolean` | If true, renders without the separator lines |
| **image** | `string` | Image URL to display as an avatar/icon |
| **loading** | `boolean` | Loading state (shows a shimmer effect) |
| **thickness** | `string` | Precise thickness (e.g., '1px', '4px') - overrides size if set |
| **responsive** | `'sm' \| 'md' \| 'lg' \| 'none'` | Automatic orientation switch (e.g., 'md' will switch orientation on medium screens) |
| **animation** | `'none' \| 'fade' \| 'slide' \| 'expand'` | Animation type |
| **clickable** | `boolean` | Make divider clickable |
| **shadow** | `boolean` | Shadow effect |
| **glow** | `boolean` | Glow effect |
| **opacity** | `number` | Opacity (0-1) |
| **pattern** | `'none' \| 'dots' \| 'stripes' \| 'wavy' \| 'zigzag'` | Pattern style |
| **inset** | `'none' \| 'start' \| 'end' \| 'both'` | Inset style |
| **spacing** | `'compact' \| 'comfortable' \| 'spacious' \| 'none'` | Spacing preset |
| **badge** | `string` | Badge/counter text |
| **maxWidth** | `string` | Max width for divider |
| **borderRadius** | `string` | Border radius for lines |
| **height** | `string` | Height of the divider (useful for vertical orientation) |
| **lines** | `'all' \| 'start' \| 'end' \| 'none'` | Control which lines are rendered: 'all', 'start', 'end', or 'none' |
| **linecap** | `'butt' \| 'round' \| 'square'` | Style of the line ends: 'butt', 'round', or 'square' |
| **shape** | `'none' \| 'curve' \| 'tilt' \| 'triangle' \| 'wave' \| 'zigzag' \| 'arrow'` | Shape divider type |
| **shapeColor** | `string` | Color for the shape divider (defaults to current color) |
| **isVisible** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **dividerClick** | `void` | Fired when divider is clicked (if clickable) |

## Usage Example

```html
<ui-divider
  text="value"
  icon="value"
  [orientation]="value"
  (dividerClick)="handleEvent($event)"
></ui-divider>
```
