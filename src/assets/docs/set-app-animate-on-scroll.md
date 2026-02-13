# set-app-animate-on-scroll

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **enterClass** | `string` | CSS classes to apply when element enters viewport |
| **leaveClass** | `string` | CSS classes to apply when element leaves viewport |
| **threshold** | `number` | Threshold for intersection observer (0-1) |
| **rootMargin** | `string` | Root margin for intersection observer |
| **once** | `boolean` | Whether to animate only once or every time element enters viewport |
| **duration** | `number` | Animation duration in milliseconds |
| **delay** | `number` | Animation delay in milliseconds |
| **easing** | `string` | Animation easing function |
| **anchor** | `string` | CSS class or ID of the element to use as the scroll anchor |
| **blurAmount** | `string` | Blur amount for starting state (e.g. '5px') Renamed from 'blur' to avoid conflict with HTMLElement.blur() |
| **perspective** | `string` | 3D Perspective value (e.g. '1000px') |
| **stagger** | `number` | Stagger delay per child in ms (if children exist) |
| **scrub** | `boolean` | Whether to scrub the animation based on scroll position (parallax effect) |
| **isVisible** | `boolean` |  |
| **hasAnimated** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **scrollAnimationStart** | `void` | Emitted when the animation starts (element enters/interacts) |
| **scrollAnimationEnd** | `void` | Emitted when the animation ends |

## Usage Example

```html
<set-app-animate-on-scroll
  enterClass="value"
  leaveClass="value"
  [threshold]="value"
  (scrollAnimationStart)="handleEvent($event)"
></set-app-animate-on-scroll>
```
