# ui-pagination

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **hideNavButtons** | `boolean` | Hide navigation buttons (next, previous, first, last) in dropdown/input modes |
| **currentPage** | `number` | Current active page (1-based) |
| **totalItems** | `number` | Total number of items |
| **itemsPerPage** | `number` | Number of items per page |
| **maxVisiblePages** | `number` | Maximum number of page buttons to show |
| **type** | `PaginationType` | Type of pagination to display |
| **size** | `PaginationSize` | Size of the pagination component |
| **variant** | `PaginationVariant` | Visual variant of the pagination |
| **showFirstLast** | `boolean` | Whether to show first/last buttons |
| **showPrevNext** | `boolean` | Whether to show previous/next buttons |
| **showPageSize** | `boolean` | Whether to show page size selector |
| **showTotal** | `boolean` | Whether to show total count |
| **showJumpTo** | `boolean` | Whether to show jump to page input |
| **prevText** | `string` | Custom text for previous button |
| **nextText** | `string` | Custom text for next button |
| **firstText** | `string` | Custom text for first button |
| **lastText** | `string` | Custom text for last button |
| **pageSizes** | `number[]` | Available page sizes for selector |
| **disabled** | `boolean` | Whether pagination is disabled |
| **iconOnly** | `boolean` | Whether to show only icons (no text labels) |
| **infinite** | `boolean` | Whether to use infinite scroll style (shows loading state) |
| **loading** | `boolean` | Loading state for infinite scroll |
| **compact** | `boolean` | Whether to use compact mode (for dropdown and input types) |
| **keyboardNav** | `boolean` | Enable keyboard navigation |
| **theme** | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | Color theme |
| **shape** | `'default' \| 'rounded' \| 'pill'` | Shape style |
| **prevIcon** | `string` | Custom prev icon (emoji or SVG string) |
| **nextIcon** | `string` | Custom next icon (emoji or SVG string) |
| **firstIcon** | `string` | Custom first icon (emoji or SVG string) |
| **lastIcon** | `string` | Custom last icon (emoji or SVG string) |
| **mobileBreakpoint** | `number` | Mobile breakpoint (px) |
| **responsiveMode** | `boolean` | Auto-switch to compact mode on mobile |
| **rtl** | `boolean` | RTL support |
| **ellipsisTooltip** | `boolean` | Show tooltip on ellipsis hover with hidden page numbers |
| **pageTransition** | `boolean` | Enable page transition animations |
| **urlSync** | `boolean` | Sync current page with URL query parameter |
| **urlParam** | `string` | URL parameter name for page number |
| **autoHide** | `boolean` | Auto-hide pagination when only one page |
| **quickJump** | `boolean` | Enable quick jump buttons (+5, -5) |
| **quickJumpStep** | `number` | Quick jump step size |
| **sticky** | `boolean` | Make pagination sticky |
| **stickyPosition** | `'top' \| 'bottom'` | Sticky position (top or bottom) |
| **smartCompact** | `boolean` | Auto-switch to compact when pages exceed threshold |
| **smartCompactThreshold** | `number` | Page count threshold for smart compact mode |
| **swipeGestures** | `boolean` | Enable swipe gestures on mobile |
| **showProgress** | `boolean` | Show progress indicator |
| **persistPage** | `boolean` | Persist page to localStorage |
| **storageKey** | `string` | LocalStorage key for persistence |
| **page** | `number` |  |
| **itemsPerPage** | `number` |  |

## Events

No events found.

## Usage Example

```html
<ui-pagination
  hideNavButtons
  [currentPage]="value"
  [totalItems]="value"
></ui-pagination>
```
