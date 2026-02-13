# ui-stepper

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **steps** | `StepperStep[] \| string` | Steps can be provided as an array or a JSON string in the attribute |
| **normalizedSteps** | `StepperStep[]` | Internal normalized steps |
| **orientation** | `StepperOrientation` | Orientation of the stepper (horizontal or vertical) |
| **size** | `StepperSize` | Size of the stepper |
| **activeStep** | `number` | Current active step index (0-based) |
| **showNumbers** | `boolean` | Whether to show step numbers |
| **showDescriptions** | `boolean` | Whether to show step descriptions |
| **showControls** | `boolean` | Show optional control buttons (Next/Previous/Finish/Failed) |
| **labelPrev** | `string` | Customize control button labels |
| **labelNext** | `string` |  |
| **labelFinish** | `string` |  |
| **labelFail** | `string` |  |
| **index** | `number` |  |
| **step** | `StepperStep` |  |

## Events

No events found.

## Usage Example

```html
<ui-stepper
  steps="value"
  [normalizedSteps]="value"
  [orientation]="value"
></ui-stepper>
```
