# set-app-tree

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodes** | `TreeNode[] \| string` |  |
| **orientation** | `'vertical' \| 'horizontal'` |  |
| **showLines** | `boolean` |  |
| **showIcons** | `boolean` |  |
| **expandable** | `boolean` |  |
| **selectable** | `boolean` |  |
| **multiSelect** | `boolean` |  |
| **checkboxes** | `boolean` |  |
| **enableDrag** | `boolean` |  |
| **searchable** | `boolean` |  |
| **animated** | `boolean` |  |
| **indent** | `number` |  |
| **nodeHeight** | `number` |  |
| **expandAll** | `boolean` |  |
| **collapseAll** | `boolean` |  |
| **highlightSelected** | `boolean` |  |
| **showRoot** | `boolean` |  |
| **layout** | `'tree' \| 'org-chart'` |  |
| **variant** | `'default' \| 'bordered' \| 'rounded' \| 'minimal' \| 'glass'` |  |
| **size** | `'small' \| 'medium' \| 'large'` |  |
| **theme** | `'light' \| 'dark'` |  |
| **showGlow** | `boolean` |  |
| **connectorWidth** | `number` |  |
| **connectorColor** | `string` |  |
| **connectorOpacity** | `number` |  |
| **internalNodes** | `TreeNode[]` |  |
| **selectedNodes** | `string[]` |  |
| **searchTerm** | `string` |  |
| **draggedNode** | `TreeNode \| null` |  |
| **node** | `TreeNode` |  |
| **path** | `string[]` |  |

## Events

No events found.

## Usage Example

```html
<set-app-tree
  nodes="value"
  [orientation]="value"
  showLines
></set-app-tree>
```
