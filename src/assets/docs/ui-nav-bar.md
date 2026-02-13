# ui-nav-bar

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **topItems** | `NavItem[]` | Navigation items for the top section |
| **bottomItems** | `NavItem[]` | Navigation items for the bottom section |
| **collapsed** | `boolean` | Whether the navigation is collapsed (mobile/hamburger mode) |
| **showHamburger** | `boolean` | Whether to show the hamburger menu icon |
| **logoUrl** | `string` | Logo URL |
| **logoAlt** | `string` | Logo alt text |
| **appTitle** | `string` | Application title |
| **showSearch** | `boolean` | Whether to show search input for filtering items |
| **searchPlaceholder** | `string` | Search placeholder text |
| **maxVisibleItems** | `number` | Maximum number of visible items before showing overflow menu (0 = show all) |
| **item** | `NavItem` |  |
| **isChild** | `boolean` |  |

## Events

No events found.

## Usage Example

```html
<ui-nav-bar
  [topItems]="value"
  [bottomItems]="value"
  collapsed
></ui-nav-bar>
```
