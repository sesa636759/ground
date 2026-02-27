# ui-anchor

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **hostElement** | `HTMLElement` |  |
| **links** | `string` | Anchor links array (as JSON string) |
| **orientation** | `'vertical' \| 'horizontal'` | Orientation: 'vertical' or 'horizontal' |
| **scrollContainer** | `string` | The container element for the scrollable content. If not provided, the window will be used. |
| **scrollOffset** | `number` | Offset from top when scrolling (in pixels) |
| **activeLink** | `string` | Active link ID |
| **showIndicator** | `boolean` | Show active indicator line |
| **affix** | `boolean` | Whether to enable sticky behavior (Affix) |
| **stickyOffset** | `number` | Offset from top when sticky (affix mode) |
| **type** | `'line' \| 'dot'` | Navigation style: 'line' or 'dot' |
| **showProgress** | `boolean` | Whether to show progress tracking in the indicator |
| **autoGenContainer** | `string` | CSS selector for container to auto-generate links from its headers (h1-h4) |
| **linkId** | `string` |  |
| **targetId** | `string` |  |

## Events

No events found.

## Usage Example

```html
<ui-anchor
  [hostElement]="value"
  links="value"
  [orientation]="value"
></ui-anchor>
```
