# ui-breadcrumb

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **isDropdownOpen** | `boolean` | Internal state for the collapsed dropdown |
| **items** | `BreadcrumbItem[] \| string` | Array of breadcrumb items |
| **separator** | `string` | Separator between breadcrumb items |
| **separatorIcon** | `string` | Custom separator icon (overrides separator text) |
| **maxItems** | `number` | Maximum number of items to display before collapsing |
| **showHome** | `boolean` | Show home icon as first item |
| **homeIcon** | `string` | Home icon |
| **size** | `'sm' \| 'md' \| 'lg'` | Size of breadcrumb items |
| **variant** | `'default' \| 'pills' \| 'glass'` | Visual variant of the breadcrumb |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **breadcrumbClick** | `BreadcrumbItem` | Event emitted when a breadcrumb item is clicked |

## Usage Example

```html
<ui-breadcrumb
  isDropdownOpen
  items="value"
  separator="value"
  (breadcrumbClick)="handleEvent($event)"
></ui-breadcrumb>
```
