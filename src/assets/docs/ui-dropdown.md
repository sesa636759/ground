# ui-dropdown

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **hostElement** | `HTMLElement` |  |
| **options** | `string \| DropdownOption[]` | Options as JSON string or DropdownOption array |
| **placeholder** | `string` | Placeholder text |
| **multiSelect** | `boolean` | Enable multi-select mode |
| **cascading** | `boolean` | Enable cascading/hierarchical selection |
| **value** | `string` | Selected value(s) - string for single, comma-separated for multi |
| **disabled** | `boolean` | Disabled state |
| **searchable** | `boolean` | Show search/filter input |
| **maxHeight** | `number` | Maximum height of dropdown (in pixels) |
| **size** | `'sm' \| 'md' \| 'lg'` | Size variant |
| **appearance** | `'dropdown' \| 'button'` | Appearance: default dropdown or button-like (no arrow) |
| **showArrow** | `boolean` | Controls visibility of the arrow icon. If false, no arrow is shown. Defaults to true for dropdown appearance; false when appearance is 'button'. |
| **clearable** | `boolean` | Show clear button |
| **isOpen** | `boolean` |  |
| **parsedOptions** | `DropdownOption[]` |  |
| **selectedValues** | `Set&lt;string&gt;` |  |
| **searchQuery** | `string` |  |
| **expandedNodes** | `Set&lt;string&gt;` |  |
| **dropdownPosition** | `'bottom' \| 'top'` |  |
| **menuLeft** | `number` |  |
| **menuTop** | `number` |  |
| **menuWidth** | `number` |  |
| **highlightedIndex** | `number` |  |
| **value** | `string` |  |
| **selectedOptions** | `DropdownOption[]` |  |

## Events

No events found.

## Usage Example

```html
<ui-dropdown
  [hostElement]="value"
  options="value"
  placeholder="value"
></ui-dropdown>
```
