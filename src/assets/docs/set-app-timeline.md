# set-app-timeline

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **items** | `TimelineItem[] \| string` | Array of timeline items |
| **orientation** | `TimelineOrientation` | Timeline orientation: vertical or horizontal |
| **align** | `TimelineAlign` | Alignment of timeline items |
| **variant** | `TimelineVariant` | Visual variant of the timeline |
| **lineColor** | `string` | Color of the connecting line |
| **lineWidth** | `number` | Width of the connecting line |
| **dotSize** | `number` | Size of the dots/icons |
| **dotColor** | `string` | Default dot color |
| **showLine** | `boolean` | Show connecting line |
| **showDots** | `boolean` | Show dots |
| **animateOnScroll** | `boolean` | Animate items on scroll |
| **reverse** | `boolean` | Reverse the order of items |
| **compact** | `boolean` | Compact mode (smaller spacing) |
| **clickable** | `boolean` | Allow click on items |
| **wrap** | `boolean` | Wrap items to multiple rows (Horizontal Snake Layout) |
| **showDates** | `boolean` | Show dates |
| **dateFormat** | `'full' \| 'short' \| 'custom'` | Date format |
| **customClass** | `string` | Custom CSS class |
| **responsiveBreakpoint** | `number` | Responsive breakpoint for switching to vertical on mobile |
| **iconPosition** | `'center' \| 'top' \| 'bottom'` | Position of icon/dot within timeline item |
| **activeItemId** | `string` |  |
| **visibleItems** | `Set&lt;string&gt;` |  |
| **isMobile** | `boolean` |  |
| **item** | `TimelineItem` |  |
| **index** | `number` |  |

## Events

No events found.

## Usage Example

```html
<set-app-timeline
  items="value"
  [orientation]="value"
  [align]="value"
></set-app-timeline>
```
