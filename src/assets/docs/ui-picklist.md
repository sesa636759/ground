# ui-picklist

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **options** | `PicklistOption[] \| string` | Array of options to display |
| **value** | `string \| number \| (string \| number)[]` | Selected value(s) |
| **mode** | `PicklistMode` | Selection mode: single or multi |
| **size** | `PicklistSize` | Size variant |
| **variant** | `PicklistVariant` | Visual variant |
| **placeholder** | `string` | Placeholder text |
| **disabled** | `boolean` | Whether the picklist is disabled |
| **loading** | `boolean` | Whether the picklist is in loading state |
| **searchable** | `boolean` | Whether to show search input |
| **searchPlaceholder** | `string` | Search placeholder text |
| **maxOptions** | `number` | Maximum number of options to show (for performance) |
| **clearable** | `boolean` | Whether to allow clearing the selection |
| **grouped** | `boolean` | Whether to enable grouping of options |
| **customTrigger** | `boolean` | Custom trigger content (slot) |
| **creatable** | `boolean` | Allow creating new options (Premium) |
| **virtualScroll** | `boolean` | Enable virtual scrolling for large lists (Premium) |
| **showSelectAll** | `boolean` | Show select all option in multi mode (Premium) |
| **reorderable** | `boolean` | Enable drag and drop reordering in multi mode (Premium) |
| **label** | `string` |  |
| **value** | `string \| number` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **picklistChange** | `PicklistChangeEvent` | Event emitted when selection changes |
| **picklistOpen** | `void` | Event emitted when dropdown opens |
| **picklistClose** | `void` | Event emitted when dropdown closes |

## Usage Example

```html
<ui-picklist
  options="value"
  value="value"
  [mode]="value"
  (picklistChange)="handleEvent($event)"
></ui-picklist>
```
