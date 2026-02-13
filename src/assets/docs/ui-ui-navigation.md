# ui-ui-navigation

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **items** | `NavigationItem[]` | Main data source: Array of navigation items |
| **categories** | `NavigationItem[]` | Secondary data source: Categories to show at the top |
| **bottomItems** | `NavigationItem[]` | Bottom items data source |
| **secondaryItems** | `NavigationItem[]` | Secondary items data source |
| **bottomItemsSecondary** | `NavigationItem[]` | Secondary bottom items data source |
| **showSearch** | `boolean` | Show search bar in expanded mode |
| **mode** | `'expanded' \| 'collapsed' \| 'auto'` | Mode of the navigation |
| **position** | `'left' \| 'right'` | Positioning of the navigation |
| **collapsible** | `boolean` | Whether the navigation is collapsible |
| **expandedWidth** | `string` | Width when expanded (css unit) |
| **collapsedWidth** | `string` | Width when collapsed (css unit) |
| **iconOnly** | `boolean` | Show only icons in collapsed mode |
| **accordion** | `boolean` | Accordion mode: one expanded at a time |
| **activeId** | `string` | ID of the currently active item (route aware) |
| **theme** | `'light' \| 'dark' \| 'green' \| 'auto'` | Theme preference (just sets a class or attribute) |
| **orientation** | `'vertical' \| 'horizontal'` | Layout orientation |
| **density** | `'comfortable' \| 'compact'` | Density of items |
| **indicatorPosition** | `'start' \| 'end'` | Position of the active item indicator bar: 'start' (left) or 'end' (right) |
| **maxItems** | `number` | Maximum number of items to show before overflowing to "More" menu |
| **companyLogo** | `string` | Company Logo URL |
| **companyName** | `string` | Company Name |
| **effectiveTheme** | `'light' \| 'dark' \| 'green'` |  |
| **gliderTop** | `number` |  |
| **gliderHeight** | `number` |  |
| **gliderLeft** | `number` |  |
| **gliderWidth** | `number` |  |
| **gliderOpacity** | `number` |  |
| **expanded** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **navOpen** | `void` |  |
| **navClose** | `void` |  |

## Usage Example

```html
<ui-ui-navigation
  [items]="value"
  [categories]="value"
  [bottomItems]="value"
  (navOpen)="handleEvent($event)"
></ui-ui-navigation>
```
