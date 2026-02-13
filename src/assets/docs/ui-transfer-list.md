# ui-transfer-list

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **sourceItems** | `TransferItem[] \| string` | Source items (left list) |
| **targetItems** | `TransferItem[] \| string` | Target items (right list) |
| **titles** | `string[] \| string` | Titles for source and target lists |
| **searchable** | `boolean` | Enable search functionality |
| **sortable** | `boolean` | Enable sorting functionality |
| **allowReorder** | `boolean` | Enable reordering in target list |
| **max** | `number` | Maximum number of items allowed in target list |
| **searchPlaceholder** | `string` | Placeholder for search input |
| **showSelectAll** | `boolean` | Show select all checkbox |
| **disabled** | `boolean` | Disabled state |
| **height** | `string` | Height of each list |
| **mode** | `TransferMode` | Mode of the transfer list |
| **enableDrag** | `boolean` | Enable drag and drop |
| **oneWay** | `boolean` | Enable one-way mode (copy instead of move) |
| **pagination** | `boolean` | Pagination support |
| **pageSize** | `number` |  |
| **title** | `string` |  |
| **dataIndex** | `string` |  |

## Events

No events found.

## Usage Example

```html
<ui-transfer-list
  sourceItems="value"
  targetItems="value"
  titles="value"
></ui-transfer-list>
```
