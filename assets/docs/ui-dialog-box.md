# ui-dialog-box

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **open** | `boolean` | Whether the dialog is open |
| **dialogTitle** | `string` | Dialog title |
| **maximized** | `boolean` | Whether the dialog is maximized |
| **minimized** | `boolean` | Whether the dialog is minimized |
| **width** | `string` | Dialog width. Explicit width takes precedence over size if size is 'custom'. |
| **height** | `string` | Dialog height |
| **size** | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'fill' \| 'custom'` | Predefined dialog sizes. |
| **showMaximize** | `boolean` | Whether to show maximize button |
| **showMinimize** | `boolean` | Whether to show minimize button |
| **showClose** | `boolean` | Whether to show close button |
| **showMenu** | `boolean` | Whether to show menu button |
| **showHeader** | `boolean` | Whether to show the header |
| **showFooter** | `boolean` | Whether to show the footer |
| **variant** | `'outlined' \| 'filled'` | Dialog variant style |
| **status** | `'default' \| 'info' \| 'success' \| 'warning' \| 'error'` | Dialog status/type |
| **backdrop** | `'default' \| 'static' \| 'none'` | Backdrop Behavior. 'default' (closes on click), 'static' (no close), 'none' (no backdrop). |
| **position** | `'center' \| 'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | Position of the dialog. |
| **scrollBehavior** | `'paper' \| 'body'` | Scroll behavior. 'paper' (scroll inside content), 'body' (scroll whole dialog). |
| **isDraggable** | `boolean` | Draggable dialog. |
| **resizable** | `boolean` | Resizable dialog. |
| **okText** | `string` | Text for the OK button. If provided, renders an OK button in the footer. |
| **cancelText** | `string` | Text for the Cancel button. |
| **okLoading** | `boolean` | Loading state for the OK button. |
| **okDisabled** | `boolean` | Disable the OK button. |
| **cancelDisabled** | `boolean` | Disable the Cancel button. |
| **fullscreenOnMobile** | `boolean` | Fullscreen on mobile devices automatically. |
| **keepMounted** | `boolean` | Keep content mounted when closed. |
| **animation** | `'scale' \| 'fade' \| 'slide-bottom' \| 'slide-right'` | Custom animation name. |
| **returnFocus** | `boolean` | Return focus to trigger element on close. |
| **zIndex** | `number` | Z-Index for the dialog. Useful for nested dialogs. |
| **minWidth** | `string` | Minimum Width |
| **minHeight** | `string` | Minimum Height |
| **maxWidth** | `string` | Maximum Width |
| **maxHeight** | `string` | Maximum Height |
| **glass** | `boolean` | Enable glassmorphism effect (blur) on backdrop. |
| **confetti** | `boolean` | Trigger confetti celebration on open. |
| **dialogClosed** | `EventEmitter` | Event emitted when dialog is closed |
| **menuItems** | `string \| any[]` | Menu items for the built-in context menu. Can be a JSON string or an array of objects. If provided, clicking the menu button automatically opens a context menu. |
| **menuAction** | `EventEmitter` | Event emitted when a menu item is clicked (if using built-in menuItems) |
| **ok** | `EventEmitter` | Event emitted when OK button is clicked |
| **cancel** | `EventEmitter` | Event emitted when Cancel button is clicked |
| **maximized** | `boolean` |  |

## Events

No events found.

## Usage Example

```html
<ui-dialog-box
  open
  dialogTitle="value"
  maximized
></ui-dialog-box>
```
