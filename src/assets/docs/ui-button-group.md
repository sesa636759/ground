# ui-button-group

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **orientation** | `'horizontal' \| 'vertical'` | Orientation: horizontal (default) or vertical |
| **selectionMode** | `'none' \| 'single' \| 'multiple'` | Selection mode: none, single, or multiple |
| **value** | `string \| string[] \| number \| number[]` | Value (label or index) of selected button(s). |
| **attached** | `boolean` | Attached style (default true). If false, buttons have spacing. |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **valueChange** | `any` | Emitted when value changes |

## Usage Example

```html
<ui-button-group
  [orientation]="value"
  [selectionMode]="value"
  value="value"
  (valueChange)="handleEvent($event)"
></ui-button-group>
```
