# ui-cascade-select

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **hostElement** | `HTMLElement` |  |
| **options** | `CascadeOption[] \| string` | Options for cascade selection |
| **value** | `any[] \| string` | Selected values (array of values from each level) |
| **placeholder** | `string` | Placeholder text |
| **disabled** | `boolean` | Disabled state |
| **size** | `'sm' \| 'md' \| 'lg'` | Size variant |
| **showFullPath** | `boolean` | Show full path in input |
| **separator** | `string` | Path separator |
| **clearable** | `boolean` | Allow clearing selection |
| **expandTrigger** | `'click' \| 'hover'` | Expandable trigger mode |
| **changeOnSelect** | `boolean` | Change on select (select parent or only leaf nodes) |
| **isOpen** | `boolean` | Panel open state |
| **selectedPath** | `CascadeOption[]` | Current selection path |
| **activePath** | `CascadeOption[]` | Active path (for hover/expansion) |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **cascadeChange** | `any[]` | Emitted when selection changes |
| **cascadeToggle** | `boolean` | Emitted when panel opens/closes |

## Usage Example

```html
<ui-cascade-select
  [hostElement]="value"
  options="value"
  value="value"
  (cascadeChange)="handleEvent($event)"
></ui-cascade-select>
```
