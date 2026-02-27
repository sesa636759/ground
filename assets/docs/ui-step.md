# ui-step

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **index** | `number` | parent will set index |
| **stepTitle** | `string` |  |
| **subtitle** | `string \| null` |  |
| **icon** | `string \| null` |  |
| **badge** | `string \| null` |  |
| **tooltip** | `string \| null` |  |
| **status** | `'upcoming' \| 'active' \| 'complete' \| 'error' \| 'disabled' \| 'custom'` |  |
| **disabled** | `boolean` |  |

## Events

No events found.

## Usage Example

```html
<ui-step
  [index]="value"
  stepTitle="value"
  subtitle="value"
></ui-step>
```
