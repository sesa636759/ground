# set-ui-eesizable-panel

## Properties

| Property             | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| **direction**        | `'horizontal' \| 'vertical'` |             |
| **panels**           | `PanelConfig[] \| string`    |             |
| **handleSize**       | `number`                     |             |
| **handleColor**      | `string`                     |             |
| **handleHoverColor** | `string`                     |             |
| **minPanelSize**     | `number`                     |             |
| **maxPanelSize**     | `number`                     |             |
| **saveState**        | `boolean`                    |             |
| **stateKey**         | `string`                     |             |
| **theme**            | `'light' \| 'dark'`          |             |
| **animated**         | `boolean`                    |             |
| **showHandleIcon**   | `boolean`                    |             |
| **snapToEdge**       | `boolean`                    |             |
| **snapThreshold**    | `number`                     |             |
| **internalPanels**   | `PanelConfig[]`              |             |
| **isDragging**       | `boolean`                    |             |
| **dragHandleIndex**  | `number`                     |             |
| **dragStartPos**     | `number`                     |             |
| **dragStartSizes**   | `number[]`                   |             |
| **panels**           | `PanelConfig[]`              |             |
| **index**            | `number`                     |             |

## Events

No events found.

## Usage Example

```html
<set-ui-eesizable-panel
  [direction]="value"
  panels="value"
  [handleSize]="value"
></set-ui-eesizable-panel>
```
