# ui-timer

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **steps** | `TimerStep[] \| string` | Steps definition |
| **normalizedSteps** | `TimerStep[]` |  |
| **flow** | `TimerFlow` | Flow type |
| **mode** | `TimerMode` | Timer mode |
| **activeStep** | `number` | Current active step index |
| **theme** | `TimerTheme` | Theme variables |
| **autoStart** | `boolean` | Whether to auto-start the timer |
| **loop** | `boolean` | Loop back to start on completion |
| **precision** | `TimerPrecision` | Precision mode |
| **variant** | `TimerVariant` | Display variant |
| **alertThreshold** | `number` | Percentage threshold for alert (countdown only) |
| **targetDate** | `string` | Target date for countdown (ISO string or date string) |
| **persist** | `string` | Whether to persist the timer state in local storage |
| **progressType** | `TimerProgressType` | Progress visualization type |
| **format** | `TimerFormat` | Time formatting style |
| **enableNotifications** | `boolean` | Whether to enable browser notifications |
| **enableSound** | `boolean` | Whether to enable sound alerts |
| **currentTime** | `number` | State |
| **isRunning** | `boolean` |  |
| **totalDuration** | `number` |  |
| **laps** | `number[]` |  |
| **isAlerting** | `boolean` |  |
| **activeStepColor** | `string` |  |
| **remaining** | `number` |  |
| **stepIndex** | `number` |  |
| **mode** | `TimerMode` |  |

## Events

No events found.

## Usage Example

```html
<ui-timer
  steps="value"
  [normalizedSteps]="value"
  [flow]="value"
></ui-timer>
```
