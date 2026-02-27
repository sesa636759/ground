# ui-pattern-input

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **value** | `string` | Current input value |
| **pattern** | `string` | Input pattern for display (e.g., "(###) ###-####" for phone) |
| **validationRegex** | `string` | Validation regex pattern |
| **placeholder** | `string` | Placeholder text |
| **label** | `string` | Label text |
| **name** | `string` | Input name for forms |
| **disabled** | `boolean` | Disabled state |
| **required** | `boolean` | Required field |
| **size** | `'sm' \| 'md' \| 'lg'` | Size variant |
| **showValidation** | `boolean` | Show validation status |
| **allowedChars** | `string` | Allowed characters regex (default: all) |
| **autoFormat** | `boolean` | Auto-format as user types |
| **maskChar** | `string` | Mask character for pattern (default: #) |
| **showCounter** | `boolean` | Show character counter |
| **maxLength** | `number` | Max length |
| **inputType** | `'text' \| 'numeric' \| 'alpha' \| 'alphanumeric' \| 'custom'` | Input type restriction |
| **helperText** | `string` | Helper text |
| **errorMessage** | `string` | Error message |
| **successMessage** | `string` | Success message |
| **isValid** | `boolean` | Validation state |
| **isTouched** | `boolean` |  |
| **isFocused** | `boolean` |  |
| **value** | `string` |  |
| **formatted** | `string` |  |
| **isValid** | `boolean` |  |

## Events

No events found.

## Usage Example

```html
<ui-pattern-input
  value="value"
  pattern="value"
  validationRegex="value"
></ui-pattern-input>
```
