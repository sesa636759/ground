# ui-scroll-top

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **threshold** | `number` | Threshold (in pixels) before button appears |
| **behavior** | `'auto' \| 'smooth'` | Scroll behavior |
| **position** | `'bottom-right' \| 'bottom-left' \| 'bottom-center' \| 'top-right' \| 'top-left'` | Position of the button |
| **icon** | `string` | Icon to display (can be emoji, text, or HTML) |
| **label** | `string` | Optional text label |
| **size** | `'sm' \| 'md' \| 'lg'` | Button size |
| **color** | `'primary' \| 'secondary' \| 'dark' \| 'success' \| 'warning' \| 'danger'` | Color scheme |
| **target** | `string` | Target element selector to scroll (default is window) |
| **showProgress** | `boolean` | Show SVG progress ring |
| **progressColor** | `string` | Progress ring color |
| **autoHide** | `boolean` | Auto-hide after inactivity |
| **autoHideHoldTime** | `number` | Auto-hide delay in ms |
| **shape** | `'circle' \| 'square' \| 'rounded'` | Button shape |
| **animation** | `'fade' \| 'scale' \| 'slide'` | Entrance animation |
| **tooltip** | `string` | Tooltip text |
| **zIndex** | `number` | Z-index level |
| **isVisible** | `boolean` |  |
| **isUserScrolling** | `boolean` |  |
| **scrollProgress** | `number` |  |

## Events

No events found.

## Usage Example

```html
<ui-scroll-top
  [threshold]="value"
  [behavior]="value"
  [position]="value"
></ui-scroll-top>
```
