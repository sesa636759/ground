# ui-panel

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **panelId** | `string` | Unique identifier for the panel |
| **width** | `string` | Panel width |
| **height** | `string` | Panel height |
| **maxWidth** | `string` | Maximum width of the panel |
| **maxHeight** | `string` | Maximum height of the panel |
| **showClose** | `boolean` | Show close button |
| **showSettings** | `boolean` | Show settings button |
| **panelTitle** | `string` | Panel title text |
| **panelSubtitle** | `string` | Panel subtitle text |
| **variant** | `'outlined' \| 'filled' \| 'elevated' \| 'flat'` | Visual variant |
| **toggleable** | `boolean` | Whether the panel is toggleable (collapsible) |
| **collapsed** | `boolean` | Whether the panel is currently collapsed |
| **loading** | `boolean` | Whether the panel is in loading state |
| **noPadding** | `boolean` | Remove processing on content padding |
| **theme** | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | Color theme for the panel |
| **animationDuration** | `string` | Animation duration for collapse/expand |
| **animationType** | `'slide' \| 'fade' \| 'scale'` | Animation type for collapse/expand |
| **badge** | `string \| number` | Badge content (number or text) |
| **badgeVariant** | `'dot' \| 'count' \| 'text'` | Badge variant style |
| **keyboardNav** | `boolean` | Enable keyboard navigation |
| **collapsed** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **panelClose** | `PanelCloseEvent` |  |
| **panelSettings** | `PanelSettingsEvent` |  |

## Usage Example

```html
<ui-panel
  panelId="value"
  width="value"
  height="value"
  (panelClose)="handleEvent($event)"
></ui-panel>
```
