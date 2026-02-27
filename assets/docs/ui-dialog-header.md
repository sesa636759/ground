# ui-dialog-header

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **dialogTitle** | `string` | Dialog title |
| **showMinimize** | `boolean` | Whether to show minimize button |
| **showMaximize** | `boolean` | Whether to show maximize button |
| **showClose** | `boolean` | Whether to show close button |
| **showMenu** | `boolean` | Whether to show menu button |
| **variant** | `'outlined' \| 'filled'` | Dialog variant style |
| **status** | `'default' \| 'info' \| 'success' \| 'warning' \| 'error'` | Dialog status/type |
| **minimize** | `EventEmitter` | Event emitted when minimize button is clicked |
| **maximize** | `EventEmitter` | Event emitted when maximize button is clicked |
| **close** | `EventEmitter` | Event emitted when close button is clicked |
| **menu** | `EventEmitter` | Event emitted when menu button is clicked |

## Events

No events found.

## Usage Example

```html
<ui-dialog-header
  dialogTitle="value"
  showMinimize
  showMaximize
></ui-dialog-header>
```
