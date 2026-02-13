# ui-snackbar

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **position** | `SnackbarPosition` | Position of the snackbar container |
| **maxVisible** | `number` | Maximum number of visible snackbars |
| **stackMode** | `SnackbarStackMode` | Stack mode for snackbars (only applies when maxVisible > 1) - 'stack': New snackbars appear on top, dismiss oldest first - 'queue': New snackbars appear on bottom, dismiss oldest first - 'lifo': New snackbars appear on top, dismiss newest first |
| **openMode** | `SnackbarOpenMode` | Open animation mode for snackbars |
| **variant** | `SnackbarVariant` | Default variant for snackbars |
| **size** | `SnackbarSize` | Default size for snackbars |
| **cardStack** | `boolean` | Enable card stacking mode - notifications stack like cards and expand on hover |
| **id** | `string` |  |
| **item** | `SnackbarItem` |  |

## Events

No events found.

## Usage Example

```html
<ui-snackbar
  [position]="value"
  [maxVisible]="value"
  [stackMode]="value"
></ui-snackbar>
```
