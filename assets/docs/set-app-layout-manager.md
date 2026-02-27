# set-app-layout-manager

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **regions** | `LayoutRegionConfig[] \| string` | Initial regions configuration |
| **direction** | `Direction` | Horizontal or vertical split for top-level regions |
| **saveState** | `boolean` | Persist sizes between reloads |
| **stateKey** | `string` | LocalStorage key when saveState=true |
| **root** | `RegionState` | Root container node holding initial regions |

## Events

No events found.

## Usage Example

```html
<set-app-layout-manager
  regions="value"
  [direction]="value"
  saveState
></set-app-layout-manager>
```
