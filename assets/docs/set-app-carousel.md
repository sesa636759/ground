# set-app-carousel

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **slidesToShow** | `number` | Slides to show at once (responsive) |
| **slidesToScroll** | `number` | Slides to scroll per action |
| **infinite** | `boolean` | Enable infinite looping |
| **autoplay** | `boolean` | Enable autoplay |
| **autoplayInterval** | `number` | Autoplay interval (ms) |
| **arrows** | `boolean` | Show navigation arrows |
| **indicators** | `boolean` | Show indicators (dots) |
| **vertical** | `boolean` | Vertical mode |
| **responsive** | `string` | Responsive breakpoints |
| **swipe** | `boolean` | Enable swipe/touch |
| **keyboard** | `boolean` | Enable keyboard navigation |
| **pauseOnHover** | `boolean` | Pause autoplay on hover |
| **prevArrow** | `string` | Custom previous arrow template |
| **nextArrow** | `string` | Custom next arrow template |
| **loop** | `boolean` | Disable infinite looping |
| **animationDuration** | `number` | Animation duration (ms) |
| **animationEasing** | `string` | Animation easing function |
| **width** | `string` | Carousel width |
| **height** | `string` | Carousel height |
| **effect** | `'slide' \| 'fade' \| 'cube' \| 'flip'` | Transition effect |
| **centerMode** | `boolean` | Enable center mode |
| **centerPadding** | `string` | Padding for center mode (e.g., '50px') |
| **enableDrag** | `boolean` | Enable mouse dragging |
| **showProgress** | `boolean` | Show autoplay progress bar |
| **current** | `number` |  |
| **slidesCount** | `number` |  |
| **isHovered** | `boolean` |  |
| **containerWidth** | `number` |  |
| **containerHeight** | `number` |  |
| **isDragging** | `boolean` |  |
| **dragOffset** | `number` |  |
| **autoplayProgress** | `number` |  |
| **from** | `number` |  |
| **to** | `number` |  |

## Events

No events found.

## Usage Example

```html
<set-app-carousel
  [slidesToShow]="value"
  [slidesToScroll]="value"
  infinite
></set-app-carousel>
```
