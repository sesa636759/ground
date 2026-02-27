# ui-tabs

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **items** | `string` | Array of tab items (as JSON string) |
| **defaultActive** | `string` | ID of the tab that should be active by default |
| **animationDuration** | `number` | Animation duration in milliseconds |
| **orientation** | `'horizontal' \| 'vertical'` | Orientation of tabs: 'horizontal' or 'vertical' |
| **indicatorPosition** | `'top' \| 'bottom'` | Position of the indicator for line variant: 'top' | 'bottom' |
| **showCloseAll** | `boolean` | Show close all button |
| **showTabList** | `boolean` | Show tab list dropdown button |
| **maxTabWidth** | `number` | Maximum width for tab titles (in pixels) |
| **maxTitleLength** | `number` | Maximum visible length for tab titles (characters). If exceeded, title is ellipsized via CSS and full text is available in tooltip. |
| **wrapText** | `boolean` | Enable text wrapping in tabs |
| **position** | `'left' \| 'center' \| 'right' \| 'full-width'` | Position of tabs header: 'left', 'center', 'right', 'full-width' |
| **scrollMode** | `'auto' \| 'manual' \| 'none'` | Scroll mode: 'auto' (auto-scroll to active), 'manual' (user controls), 'none' (no scroll) |
| **selectionAnimation** | `'slide' \| 'fade' \| 'scale' \| 'none'` | Animation on tab selection |
| **iconPosition** | `'start' \| 'end' \| 'top' \| 'bottom'` | Icon position: 'start', 'end', 'top', 'bottom' |
| **iconOnly** | `boolean` | Show only icons (hide titles) |
| **scrollButtonPlacement** | `'split' \| 'start' \| 'end'` | Scroll button placement: 'split' (ends), 'start' (both left/top), 'end' (both right/bottom) |
| **variant** | `'line' \| 'card' \| 'pill' \| 'subtle' \| 'glass' \| 'folder' \| 'enclosed'` | Tab variant style |
| **size** | `'sm' \| 'md' \| 'lg'` | Tab size |
| **activeTab** | `string` |  |
| **parsedItems** | `TabItem[]` |  |
| **activeMenuTab** | `string \| null` |  |
| **showScrollButtons** | `boolean` |  |
| **isTabListOpen** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **tabChange** | `TabChangeEvent` |  |
| **tabClose** | `string` |  |
| **closeAll** | `void` |  |
| **tabEdit** | `string` |  |
| **tabDelete** | `string` |  |
| **tabOpenPanel** | `string` |  |

## Usage Example

```html
<ui-tabs
  items="value"
  defaultActive="value"
  [animationDuration]="value"
  (tabChange)="handleEvent($event)"
></ui-tabs>
```
