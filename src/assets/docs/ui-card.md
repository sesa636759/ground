# ui-card

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **cardId** | `string` | Unique identifier for the card |
| **variant** | `'default' \| 'elevated' \| 'outlined' \| 'filled'` | Card variant: 'default' | 'elevated' | 'outlined' | 'filled' |
| **flippable** | `boolean` | Enable flip animation |
| **hoverable** | `boolean` | Enable hover effect |
| **width** | `string` | Width of the card |
| **height** | `string` | Height of the card |
| **menuItems** | `string` | Menu items (as JSON string) |
| **showMenu** | `boolean` | Show menu button |
| **expandable** | `boolean` | Enable card expansion |
| **borderRadius** | `string` | Border radius of the card |
| **border** | `string` | Border of the card |
| **loading** | `boolean` | Show loading skeleton |
| **selectable** | `boolean` | Enable selection mode |
| **selected** | `boolean` | Selection state |
| **clickable** | `boolean` | Make entire card clickable |
| **href** | `string` | URL to navigate to when clicked (if clickable) |
| **isFlipped** | `boolean` |  |
| **isMenuOpen** | `boolean` |  |
| **isExpanded** | `boolean` |  |
| **parsedMenuItems** | `CardMenuItem[]` |  |
| **expanded** | `boolean` |  |

## Events

| Event | Detail Type | Description |
| --- | --- | --- |
| **cardFlip** | `CardFlipEvent` |  |
| **menuItemClick** | `CardMenuEvent` |  |

## Usage Example

```html
<ui-card
  cardId="value"
  [variant]="value"
  flippable
  (cardFlip)="handleEvent($event)"
></ui-card>
```
