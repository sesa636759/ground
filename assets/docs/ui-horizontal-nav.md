# ui-horizontal-nav

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **items** | `HorizontalNavItem[] \| string` | Navigation items |
| **activeId** | `string` | Active item ID |
| **variant** | `'default' \| 'pills' \| 'underline' \| 'segmented'` | Variant style |
| **size** | `'sm' \| 'md' \| 'lg'` | Size of navigation items |
| **align** | `'start' \| 'center' \| 'end' \| 'space-between'` | Alignment of items |
| **scrollable** | `boolean` | Enable scrolling for overflow items |
| **showDivider** | `boolean` | Show divider between items |
| **fullWidth** | `boolean` | Full width items |
| **displayAs** | `'buttons' \| 'list'` | Display format: 'buttons' (default) or 'list' |
| **scrollLeft** | `number` |  |
| **canScrollLeft** | `boolean` |  |
| **canScrollRight** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **navItemClick** | `HorizontalNavItem` | Event emitted when a nav item is clicked |

## Usage Example

```html
<ui-horizontal-nav
  items="value"
  activeId="value"
  [variant]="value"
  (navItemClick)="handleEvent($event)"
></ui-horizontal-nav>
```
