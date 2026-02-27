# ui-tree-list

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **data** | `TreeNode[] \| string` | Tree data |
| **multiSelect** | `boolean` | Allow multiple selection |
| **showExpandIcon** | `boolean` | Show expand/collapse icons |
| **showLines** | `boolean` | Show connecting lines |
| **showCheckbox** | `boolean` | Show checkboxes |
| **selectable** | `boolean` | Enable selection |
| **size** | `'sm' \| 'md' \| 'lg'` | Size variant |
| **disabled** | `boolean` | Disabled state |
| **defaultExpandAll** | `boolean` | Expand all nodes by default |
| **cascade** | `boolean` | Enable cascade selection for checkboxes |
| **enableDragDrop** | `boolean` | Enable drag and drop reordering |
| **lazy** | `boolean` | Enable lazy loading for leaf nodes |
| **searchTerm** | `string` | Filter tree by label |
| **selectedKeys** | `Set&lt;string \| number&gt;` |  |
| **checkedKeys** | `Set&lt;string \| number&gt;` |  |
| **expandedKeys** | `Set&lt;string \| number&gt;` |  |
| **indeterminateKeys** | `Set&lt;string \| number&gt;` |  |
| **activeMenuNode** | `string \| number \| null` |  |
| **draggingNode** | `TreeNode \| null` |  |
| **node** | `TreeNode \| null` |  |
| **position** | `'before' \| 'inside' \| 'after'` |  |

## Events

No events found.

## Usage Example

```html
<ui-tree-list
  data="value"
  multiSelect
  showExpandIcon
></ui-tree-list>
```
