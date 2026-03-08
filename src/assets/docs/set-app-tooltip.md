# set-ui-tooltip

## Properties

| Property                | Type                                                                                                               | Description                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **content**             | `string`                                                                                                           | Tooltip content text                                      |
| **position**            | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' \| 'auto'` | Tooltip position relative to target                       |
| **trigger**             | `'hover' \| 'click' \| 'focus' \| 'manual'`                                                                        | Trigger type for showing tooltip                          |
| **variant**             | `'light' \| 'dark' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'primary' \| 'glass'`                         | Visual variant/theme                                      |
| **animation**           | `'fade' \| 'slide' \| 'scale' \| 'bounce' \| 'none'`                                                               | Animation type                                            |
| **arrow**               | `boolean`                                                                                                          | Show arrow pointer                                        |
| **showDelay**           | `number`                                                                                                           | Delay before showing (ms)                                 |
| **hideDelay**           | `number`                                                                                                           | Delay before hiding (ms)                                  |
| **maxWidth**            | `number`                                                                                                           | Maximum width in pixels                                   |
| **offset**              | `number`                                                                                                           | Offset from target (px)                                   |
| **html**                | `boolean`                                                                                                          | Enable HTML content                                       |
| **interactive**         | `boolean`                                                                                                          | Allow tooltip to be interactive (hoverable)               |
| **disabled**            | `boolean`                                                                                                          | Disable the tooltip                                       |
| **customClass**         | `string`                                                                                                           | Custom CSS class                                          |
| **zIndex**              | `number`                                                                                                           | z-index value                                             |
| **followCursor**        | `boolean`                                                                                                          | Follow mouse cursor (only works with hover trigger)       |
| **autoFlip**            | `boolean`                                                                                                          | Auto-flip when out of viewport                            |
| **visible**             | `boolean`                                                                                                          | Show tooltip immediately on load                          |
| **customColor**         | `string`                                                                                                           | Custom background color (overrides variant)               |
| **textColor**           | `string`                                                                                                           | Custom text color                                         |
| **transitionDuration**  | `number`                                                                                                           | Transition duration in milliseconds                       |
| **transitionTiming**    | `'ease' \| 'linear' \| 'ease-in' \| 'ease-out' \| 'ease-in-out'`                                                   | Transition timing function                                |
| **arrowSize**           | `number`                                                                                                           | Arrow size in pixels                                      |
| **openAtMousePosition** | `boolean`                                                                                                          | Open tooltip at mouse click position (click trigger only) |
| **trackMouse**          | `boolean`                                                                                                          | Track mouse movement and update tooltip position          |
| **trackInterval**       | `number`                                                                                                           | Mouse tracking update interval in ms (for performance)    |
| **autoShift**           | `boolean`                                                                                                          | Auto-shift tooltip to stay in viewport                    |
| **closable**            | `boolean`                                                                                                          | Show close button                                         |
| **keyboard**            | `boolean`                                                                                                          | Enable keyboard shortcuts (ESC to close, Tab navigation)  |
| **portal**              | `boolean`                                                                                                          | Render tooltip in portal (document.body)                  |
| **allowNested**         | `boolean`                                                                                                          | Allow nested tooltips                                     |
| **loading**             | `boolean`                                                                                                          | Loading state                                             |
| **size**                | `'small' \| 'medium' \| 'large'`                                                                                   | Size variant                                              |
| **longPressDuration**   | `number`                                                                                                           | Long press duration for touch devices (ms)                |
| **boundary**            | `string`                                                                                                           | Boundary element selector to constrain tooltip            |
| **groupId**             | `string`                                                                                                           | Group ID for shared tooltips                              |
| **sticky**              | `boolean`                                                                                                          | Sticky tooltip (requires manual close)                    |
| **showHeader**          | `boolean`                                                                                                          | Show header slot                                          |
| **showFooter**          | `boolean`                                                                                                          | Show footer slot                                          |
| **closeOnClickOutside** | `boolean`                                                                                                          | Close on click outside                                    |
| **elevation**           | `number`                                                                                                           | Elevation level (0-5)                                     |
| **shape**               | `'rounded' \| 'square' \| 'pill'`                                                                                  | Tooltip shape                                             |
| **showGlow**            | `boolean`                                                                                                          | Show premium glow effect                                  |
| **isVisible**           | `boolean`                                                                                                          |                                                           |
| **currentPosition**     | `string`                                                                                                           |                                                           |
| **cursorX**             | `number`                                                                                                           |                                                           |
| **cursorY**             | `number`                                                                                                           |                                                           |
| **mouseClickX**         | `number`                                                                                                           |                                                           |
| **mouseClickY**         | `number`                                                                                                           |                                                           |
| **touchStartTime**      | `number`                                                                                                           |                                                           |
| **isTouchDevice**       | `boolean`                                                                                                          |                                                           |
| **position**            | `string`                                                                                                           |                                                           |

## Events

No events found.

## Usage Example

```html
<set-ui-tooltip content="value" [position]="value" [trigger]="value"></set-ui-tooltip>
```
