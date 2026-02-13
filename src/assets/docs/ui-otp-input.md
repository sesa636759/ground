# ui-otp-input

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **length** | `number` | Number of OTP input fields |
| **type** | `'number' \| 'text' \| 'password'` | Input type (number, text, password) |
| **size** | `'sm' \| 'md' \| 'lg'` | Size variant |
| **disabled** | `boolean` | Disabled state |
| **autoFocus** | `boolean` | Auto focus first input |
| **numericOnly** | `boolean` | Allow only numeric input |
| **separator** | `string` | Show separator after specific positions (comma-separated, e.g., "3,6") |
| **masked** | `boolean` | Mask input values (show as dots) |
| **value** | `string` | Initial value |
| **error** | `boolean` | Error state |
| **success** | `boolean` | Success state |
| **otpValues** | `string[]` | Current OTP values |
| **activeIndex** | `number` | Active input index |
| **value** | `string` |  |

## Events

No events found.

## Usage Example

```html
<ui-otp-input
  [length]="value"
  [type]="value"
  [size]="value"
></ui-otp-input>
```
