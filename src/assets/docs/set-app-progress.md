# set-app-progress

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | `'line' \| 'circle' \| 'dashboard'` | Type of progress |
| **percent** | `number` | Current progress percentage (0-100) |
| **status** | `'success' \| 'exception' \| 'normal' \| 'active'` | Status of progress |
| **strokeWidth** | `number` | Width of progress bar stroke |
| **from** | `string` |  |
| **to** | `string` |  |
| **direction** | `string` |  |

## Events

No events found.

## Usage Example

```html
<set-app-progress
  [type]="value"
  [percent]="value"
  [status]="value"
></set-app-progress>
```
