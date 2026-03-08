# set-ui-dashboard

## Properties

| Property                | Type                | Description                             |
| ----------------------- | ------------------- | --------------------------------------- |
| **widgets**             | `DashboardWidget[]` | Dashboard widgets                       |
| **columns**             | `number`            | Number of columns in the grid           |
| **rowHeight**           | `number`            | Row height in pixels                    |
| **gap**                 | `number`            | Gap between widgets in pixels           |
| **enableDrag**          | `boolean`           | Enable drag and drop                    |
| **enableResize**        | `boolean`           | Enable resize                           |
| **compact**             | `boolean`           | Compact mode - automatically fill gaps  |
| **showGrid**            | `boolean`           | Show grid lines                         |
| **theme**               | `'light' \| 'dark'` | Theme: 'light' or 'dark'                |
| **autoSave**            | `boolean`           | Auto-save to localStorage               |
| **autoSaveKey**         | `string`            | Auto-save key                           |
| **breakpoints**         | `string`            | Responsive breakpoints for column count |
| **enableTouch**         | `boolean`           | Enable touch/pointer events             |
| **enableSearch**        | `boolean`           | Enable search and filter                |
| **enableMultiSelect**   | `boolean`           | Enable multi-select                     |
| **enableKeyboard**      | `boolean`           | Enable keyboard navigation              |
| **enableFullscreen**    | `boolean`           | Enable fullscreen mode                  |
| **showAddButton**       | `boolean`           | Show add widget button                  |
| **dragScrollThreshold** | `number`            | Drag scroll edge threshold in pixels    |
| **widget**              | `DashboardWidget`   |                                         |

## Events

No events found.

## Usage Example

```html
<set-ui-dashboard [widgets]="value" [columns]="value" [rowHeight]="value"></set-ui-dashboard>
```
