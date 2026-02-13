# Component Documentation

This document provides a comprehensive guide to all available UI components in the library, including their properties, events, and usage examples.

---

## 🔘 Button `ui-button`

A versatile button component for triggers, links, and actions.

### Properties

| Property       | Type                                                                                 | Default     | Description                                       |
| :------------- | :----------------------------------------------------------------------------------- | :---------- | :------------------------------------------------ |
| `label`        | `string`                                                                             | `""`        | Text displayed on the button.                     |
| `variant`      | `'primary'\|'secondary'\|'success'\|'danger'\|'warning'\|'info'\|'outline'\|'ghost'` | `'primary'` | Visual style variant.                             |
| `size`         | `'xs'\|'sm'\|'md'\|'lg'\|'xl'`                                                       | `'md'`      | Button size.                                      |
| `icon`         | `string`                                                                             | `""`        | Optional icon/emoji content.                      |
| `iconOnly`     | `boolean`                                                                            | `false`     | If true, renders only the icon.                   |
| `iconPosition` | `'left'\|'right'`                                                                    | `'left'`    | Position of the icon relative to the label.       |
| `disabled`     | `boolean`                                                                            | `false`     | Disables button interactions.                     |
| `loading`      | `boolean`                                                                            | `false`     | Shows a loading spinner and disables interaction. |
| `fullWidth`    | `boolean`                                                                            | `false`     | Expands button to full container width.           |
| `pill`         | `boolean`                                                                            | `false`     | Button with fully rounded ends.                   |
| `rounded`      | `boolean`                                                                            | `false`     | Standard rounded corners.                         |
| `href`         | `string`                                                                             | `""`        | If set, renders as an anchor tag `<a>`.           |
| `target`       | `string`                                                                             | `""`        | Link target (e.g., `_blank`).                     |
| `badge`        | `string\|number`                                                                     | `""`        | Displays a small badge over the button.           |
| `noRipple`     | `boolean`                                                                            | `false`     | Disables the ripple click effect.                 |

### Events

| Event         | Payload      | Description                       |
| :------------ | :----------- | :-------------------------------- |
| `buttonClick` | `MouseEvent` | Fired when the button is clicked. |

### Usage

```html
<ui-button label="Submit" variant="primary" (buttonClick)="onSubmit()"></ui-button>
<ui-button icon="🚀" label="Launch" pill></ui-button>
<ui-button loading label="Processing"></ui-button>
```

---

## 🖼️ Avatar `ui-avatar`

Display user profiles or entity representatives.

### Properties

| Property      | Type                                        | Default    | Description                                |
| :------------ | :------------------------------------------ | :--------- | :----------------------------------------- |
| `name`        | `string`                                    | `""`       | User name for auto-initials.               |
| `content`     | `string`                                    | `""`       | Custom text/initials content.              |
| `src`         | `string`                                    | `""`       | Image URL.                                 |
| `icon`        | `string`                                    | `""`       | Icon to display.                           |
| `shape`       | `'circle'\|'square'\|'hexagon'\|'squircle'` | `'circle'` | Shape of the avatar.                       |
| `size`        | `string`                                    | `'48px'`   | Diameter/width (e.g., `'64px'`, `'2rem'`). |
| `status`      | `'online'\|'away'\|'busy'\|'offline'`       | `""`       | Status indicator dot.                      |
| `badge`       | `string`                                    | `""`       | Notification/text badge.                   |
| `badgeColor`  | `string`                                    | `""`       | Color for the badge dot/text.              |
| `maxInitials` | `number`                                    | `2`        | Max characters for auto-initials.          |

### Usage

```html
<ui-avatar name="John Doe" status="online" size="64px"></ui-avatar>
<ui-avatar src="https://example.com/photo.jpg" shape="squircle"></ui-avatar>
<ui-avatar icon="⭐" shape="hexagon" badge="9"></ui-avatar>
```

---

## 🏷️ Badge `ui-badge`

Small indicators for status, counts, or alerts.

### Properties

| Property      | Type                                                             | Default       | Description                     |
| :------------ | :--------------------------------------------------------------- | :------------ | :------------------------------ |
| `value`       | `string\|number`                                                 | `""`          | Content to display.             |
| `max`         | `number`                                                         | `Infinity`    | Max value before showing `+`.   |
| `color`       | `'primary'\|'secondary'\|'success'\|'danger'\|'warning'\|'info'` | `'primary'`   | Theme color.                    |
| `variant`     | `'standard'\|'outlined'\|'bordered'\|'soft'`                     | `'standard'`  | Visual style.                   |
| `dot`         | `boolean`                                                        | `false`       | Show as a simple dot indicator. |
| `position`    | `'top-right'\|'top-left'\|'bottom-right'\|'bottom-left'`         | `'top-right'` | Placement relative to anchor.   |
| `animation`   | `'pulse'\|'bounce'\|'shake'\|'none'`                             | `'none'`      | Loop animation type.            |
| `glow`        | `boolean`                                                        | `false`       | Adds a glowing aura.            |
| `interactive` | `boolean`                                                        | `false`       | Makes the badge clickable.      |

### Events

| Event        | Payload | Description                              |
| :----------- | :------ | :--------------------------------------- |
| `badgeClick` | `void`  | Fired when interactive badge is clicked. |

### Usage

```html
<ui-badge value="5" color="danger">
  <ui-button icon="🔔"></ui-button>
</ui-badge>

<ui-badge dot pulse color="success">
  <span>Online Status</span>
</ui-badge>
```

---

## 🗂️ Card `ui-card`

Container for grouping related content.

### Properties

| Property     | Type                                          | Default     | Description                       |
| :----------- | :-------------------------------------------- | :---------- | :-------------------------------- |
| `variant`    | `'default'\|'elevated'\|'outlined'\|'filled'` | `'default'` | Background and border style.      |
| `hoverable`  | `boolean`                                     | `false`     | Elevation increase on hover.      |
| `flippable`  | `boolean`                                     | `false`     | Enables front/back flip behavior. |
| `expandable` | `boolean`                                     | `false`     | Enables expansion toggle.         |
| `clickable`  | `boolean`                                     | `false`     | Card acts as a single button.     |
| `loading`    | `boolean"                                     | `false`     | Shows a skeleton loading state.   |
| `selectable` | `boolean`                                     | `false`     | Card can be toggled as selected.  |

### Usage

```html
<ui-card hoverable variant="elevated">
  <h3>Card Title</h3>
  <p>Some content inside the card.</p>
</ui-card>

<ui-card flippable>
  <div slot="front">Front Content</div>
  <div slot="back">Back Content</div>
</ui-card>
```

---

## 🍟 Chip `ui-chip`

Compact labels for tags, filters, or categories.

### Properties

| Property     | Type                                                             | Default     | Description                           |
| :----------- | :--------------------------------------------------------------- | :---------- | :------------------------------------ |
| `label`      | `string`                                                         | `""`        | Text to display.                      |
| `variant`    | `'filled'\|'outlined'\|'text'\|'soft'\|'gradient'`               | `'filled'`  | Chip style.                           |
| `color`      | `'primary'\|'secondary'\|'success'\|'danger'\|'warning'\|'info'` | `'primary'` | Color theme.                          |
| `shape`      | `'pill'\|'rounded'\|'square'\|'circle'`                          | `'pill'`    | Border shape.                         |
| `removable`  | `boolean`                                                        | `false`     | Shows an "X" to remove.               |
| `clickable`  | `boolean`                                                        | `false`     | Adds hover effects and click pointer. |
| `loading`    | `boolean`                                                        | `false`     | Shows a tiny spinner.                 |
| `icon`       | `string`                                                         | `""`        | Left icon/emoji.                      |
| `userAvatar` | `string`                                                         | `""`        | Left avatar image URL.                |

### Usage

```html
<ui-chip label="Angular" color="secondary"></ui-chip>
<ui-chip label="Removable Tag" removable (chipRemove)="onRemove()"></ui-chip>
<ui-chip label="Admin" icon="🛡️" variant="soft" color="info"></ui-chip>
```

---

## 🔽 Dropdown `ui-dropdown`

Selection input with support for search and multi-select.

### Properties

| Property      | Type                       | Default       | Description                                  |
| :------------ | :------------------------- | :------------ | :------------------------------------------- |
| `options`     | `DropdownOption[]\|string` | `[]`          | List of options `{label, value, children?}`. |
| `placeholder` | `string`                   | `"Select..."` | Label when no value is selected.             |
| `multiSelect` | `boolean`                  | `false`       | Allow selecting multiple items.              |
| `cascading`   | `boolean`                  | `false`       | Hierarchical navigation.                     |
| `searchable`  | `boolean`                  | `true`        | Show filter input.                           |
| `clearable`   | `boolean`                  | `false`       | Show clear button.                           |
| `disabled`    | `boolean`                  | `false`       | Prevent interaction.                         |

### Events

| Event         | Payload                    | Description                   |
| :------------ | :------------------------- | :---------------------------- |
| `valueChange` | `{value, selectedOptions}` | Fired when selection changes. |

### Usage

```html
<ui-dropdown [options]="myOptions" (valueChange)="onChange($event)"></ui-dropdown>
<ui-dropdown multiSelect [options]="categories" placeholder="Tags"></ui-dropdown>
```

---

## 📏 Progress `app-progress`

Visually represent task completion or status.

### Properties

| Property      | Type                                         | Default    | Description                         |
| :------------ | :------------------------------------------- | :--------- | :---------------------------------- |
| `percent`     | `number`                                     | `0`        | Current progress (0-100).           |
| `type`        | `'line'\|'circle'\|'dashboard'`              | `'line'`   | Style of indicator.                 |
| `status`      | `'success'\|'exception'\|'normal'\|'active'` | `'normal'` | Semantic status.                    |
| `strokeWidth` | `number`                                     | `10`       | Thickness of the bar/ring.          |
| `showInfo`    | `boolean`                                    | `true`     | Display value/icon text.            |
| `buffer`      | `number`                                     | `0`        | Secondary progress (e.g., loading). |
| `showBuffer`  | `boolean`                                    | `false`    | Show the buffer bar.                |
| `liquid`      | `boolean`                                    | `false`    | Liquid wave animation.              |
| `glow`        | `boolean`                                    | `false`    | Neon glow effect.                   |

### Usage

```html
<app-progress [percent]="45" status="active"></app-progress>
<app-progress type="circle" [percent]="80" [liquid]="true"></app-progress>
<app-progress [percent]="30" [buffer]="60" [showBuffer]="true"></app-progress>
```

---

## 📑 Accordion `ui-accordion`

Collapsible content panels for hierarchical data.

### Properties

| Property         | Type                                                   | Default     | Description                                      |
| :--------------- | :----------------------------------------------------- | :---------- | :----------------------------------------------- |
| `items`          | `AccordionItem[]\|string`                              | `[]`        | List of items `{id, title, content, children?}`. |
| `multiple`       | `boolean`                                              | `false`     | Allow multiple open panels.                      |
| `variant`        | `'default'\|'bordered'\|'splitted'\|'light'\|'shadow'` | `'default'` | Overall style.                                   |
| `enableSearch`   | `boolean`                                              | `false`     | Built-in search field.                           |
| `enableDragDrop` | `boolean`                                              | `false`     | Allow reordering.                                |
| `enableNested`   | `boolean`                                              | `false`     | Supports infinite nesting levels.                |

### Usage

```html
<ui-accordion [items]="menuItems" multiple></ui-accordion>
<ui-accordion [items]="faqItems" variant="splitted" enableSearch></ui-accordion>
```

---

## 🧩 Checkbox `app-checkbox`

Selection control for binary choices.

### Properties

| Property        | Type                          | Default     | Description                        |
| :-------------- | :---------------------------- | :---------- | :--------------------------------- |
| `label`         | `string`                      | `""`        | Checkbox label text.               |
| `checked`       | `boolean`                     | `false`     | Initial checked state.             |
| `indeterminate` | `boolean`                     | `false`     | Visual indeterminate state (dash). |
| `color`         | `string`                      | `'primary'` | Theme color.                       |
| `variant`       | `'default'\|'button'\|'chip'` | `'default'` | Look and feel.                     |
| `size`          | `'small'\|'medium'\|'large'`  | `'medium'`  | Control size.                      |

### Events

| Event    | Payload   | Description                       |
| :------- | :-------- | :-------------------------------- |
| `change` | `boolean` | Fired when checked state changes. |

### Usage

```html
<app-checkbox label="Accept Terms" (change)="onCheck($event)"></app-checkbox>
<app-checkbox label="Draft" variant="chip" color="warning"></app-checkbox>
```

---

## 💬 Tooltip `app-tooltip`

Information overlay triggered by hover or focus.

### Properties

| Property    | Type                                           | Default  | Description                   |
| :---------- | :--------------------------------------------- | :------- | :---------------------------- |
| `content`   | `string`                                       | `""`     | Text inside the tooltip.      |
| `position`  | `'top'\|'bottom'\|'left'\|'right'\|'auto'`     | `'top'`  | Preferred placement.          |
| `variant`   | `'dark'\|'light'\|'glass'\|'success'\|'error'` | `'dark'` | Visual theme.                 |
| `animation` | `'fade'\|'bounce'\|'scale'`                    | `'fade'` | Show/hide animation.          |
| `delay`     | `number`                                       | `200`    | Delay in ms before appearing. |

### Usage

```html
<app-tooltip content="Useful tip here" position="top">
  <button slot="target">Hover Me</button>
</app-tooltip>
```

---

## 🍞 Breadcrumb `ui-breadcrumb`

Navigation aid showing hierarchical location.

### Properties

| Property        | Type                          | Default     | Description                                             |
| :-------------- | :---------------------------- | :---------- | :------------------------------------------------------ |
| `items`         | `BreadcrumbItem[]\|string`    | `[]`        | List of items `{label, href?, icon?, active?, badge?}`. |
| `separator`     | `string`                      | `"/"`       | Text separator.                                         |
| `separatorIcon` | `string`                      | `""`        | Icon separator (overrides text).                        |
| `maxItems`      | `number`                      | `Infinity`  | Collapse items after this limit.                        |
| `showHome`      | `boolean`                     | `false`     | Show a home icon as the first item.                     |
| `variant`       | `'default'\|'pills'\|'glass'` | `'default'` | Visual style.                                           |

### Usage

```html
<ui-breadcrumb [items]="navItems" showHome maxItems="4"></ui-breadcrumb>
```

---

## 🚶 Stepper `ui-stepper`

Guide users through multi-step workflows.

### Properties

| Property       | Type                       | Default        | Description                                     |
| :------------- | :------------------------- | :------------- | :---------------------------------------------- |
| `steps`        | `StepperStep[]\|string`    | `[]`           | List of steps `{label, description?, status?}`. |
| `activeStep`   | `number`                   | `0`            | Currently active (0-based).                     |
| `orientation`  | `'horizontal'\|'vertical'` | `'horizontal'` | Layout direction.                               |
| `flow`         | `'linear'\|'non-linear'`   | `'linear'`     | Navigation restriction.                         |
| `showNumbers`  | `boolean`                  | `true`         | Show step indices.                              |
| `progressDot`  | `boolean`                  | `false`        | Use dots instead of icons/numbers.              |
| `showControls` | `boolean`                  | `false`        | Built-in Next/Prev buttons.                     |

### Events

| Event           | Payload                        | Description               |
| :-------------- | :----------------------------- | :------------------------ |
| `stepperChange` | `{index, step, previousIndex}` | Fired on step navigation. |

### Usage

```html
<ui-stepper [steps]="steps" [activeStep]="1" showDescriptions></ui-stepper>
```

---

## 📑 Tabs `ui-tabs`

Organize content into selectable panels.

### Properties

| Property             | Type                                        | Default        | Description                                           |
| :------------------- | :------------------------------------------ | :------------- | :---------------------------------------------------- |
| `items`              | `TabItem[]\|string`                         | `[]`           | List of tabs `{id, label, icon?, badge?, disabled?}`. |
| `variant`            | `'line'\|'card'\|'pill'\|'glass'\|'folder'` | `'line'`       | Tab bar style.                                        |
| `orientation`        | `'horizontal'\|'vertical'`                  | `'horizontal'` | Placement.                                            |
| `indicatorPosition`  | `'top'\|'bottom'`                           | `'bottom'`     | Line variant indicator side.                          |
| `position`           | `'left'\|'center'\|'right'\|'full-width'`   | `'left'`       | Header alignment.                                     |
| `selectionAnimation` | `'slide'\|'fade'\|'scale'\|'none'`          | `'slide'`      | Transition effect.                                    |

### Usage

```html
<ui-tabs [items]="tabConfig" defaultActive="home" position="center"></ui-tabs>
```

---

## ⚡ Switch `ui-switch`

Modern binary toggle switch.

### Properties

| Property  | Type                                        | Default     | Description                |
| :-------- | :------------------------------------------ | :---------- | :------------------------- |
| `label`   | `string`                                    | `""`        | Label text next to switch. |
| `checked` | `boolean`                                   | `false`     | Toggled state.             |
| `size`    | `'xs'\|'sm'\|'md'\|'lg'\|'xl'`              | `'md'`      | Component size.            |
| `variant` | `'primary'\|'success'\|'danger'\|'warning'` | `'primary'` | Color theme.               |
| `iconOn`  | `string`                                    | `""`        | Icon shown when checked.   |
| `iconOff` | `string`                                    | `""`        | Icon shown when unchecked. |

### Usage

```html
<ui-switch label="Dark Mode" (switchChange)="onToggle($event)"></ui-switch>
<ui-switch variant="success" iconOn="✔️" iconOff="✖️"></ui-switch>
```

---

## 🔢 OTP Input `ui-otp-input`

One-Time Password / Verification code input.

### Properties

| Property    | Type                           | Default    | Description                      |
| :---------- | :----------------------------- | :--------- | :------------------------------- |
| `length`    | `number`                       | `4`        | Number of boxes.                 |
| `type`      | `'number'\|'text'\|'password'` | `'number'` | Input restriction.               |
| `masked`    | `boolean`                      | `false`    | Hide characters.                 |
| `separator` | `string`                       | `""`       | Separator indices (e.g., `"2"`). |
| `autoFocus` | `boolean`                      | `true`     | Focus first box on load.         |

### Events

| Event         | Payload               | Description                      |
| :------------ | :-------------------- | :------------------------------- |
| `otpComplete` | `{value}`             | Fired when all boxes are filled. |
| `otpChange`   | `{value, isComplete}` | Fired on every keystroke.        |

### Usage

```html
<ui-otp-input length="6" (otpComplete)="onVerify($event)"></ui-otp-input>
```

---

## ⏳ Timeline `ui-timeline`

Display a list of events in chronological order.

### Properties

| Property  | Type                           | Default      | Description                                                 |
| :-------- | :----------------------------- | :----------- | :---------------------------------------------------------- |
| `events`  | `TimelineEvent[]\|string`      | `[]`         | List of events `{title, description, date, icon?, color?}`. |
| `mode`    | `'vertical'\|'horizontal'`     | `'vertical'` | Layout direction.                                           |
| `align`   | `'left'\|'right'\|'alternate'` | `'left'`     | Alignment of content relative to the line.                  |
| `marker`  | `'dot'\|'number'\|'icon'`      | `'dot'`      | Style of the event markers.                                 |
| `reverse` | `boolean`                      | `false`      | Flip the order of events.                                   |
| `pending` | `boolean`                      | `false`      | Show a dashed line at the end for "in progress".            |

### Events

| Event       | Payload         | Description                          |
| :---------- | :-------------- | :----------------------------------- |
| `itemClick` | `TimelineEvent` | Fired when an event item is clicked. |

### Usage

```html
<ui-timeline [events]="myHistory" align="alternate"></ui-timeline>
<ui-timeline [events]="workflow" mode="horizontal" marker="icon"></ui-timeline>
```

---

## 🦴 Skeleton `ui-skeleton-loader`

Placeholder for content while it's loading.

### Properties

| Property        | Type                                              | Default       | Description                    |
| :-------------- | :------------------------------------------------ | :------------ | :----------------------------- |
| `shape`         | `'rectangle'\|'circle'\|'text'\|'avatar'\|'card'` | `'rectangle'` | Pre-styled shape.              |
| `size`          | `'sm'\|'md'\|'lg'\|'xl'`                          | `'md'`        | Predefined scaling.            |
| `width`         | `string`                                          | `""`          | Custom width (e.g., `'100%'`). |
| `height`        | `string`                                          | `""`          | Custom height.                 |
| `animated`      | `boolean`                                         | `true`        | Enable shimmer effect.         |
| `animationType` | `'pulse'\|'wave'`                                 | `'wave'`      | Animation visual style.        |

### Usage

```html
<ui-skeleton-loader shape="avatar" size="lg"></ui-skeleton-loader>
<ui-skeleton-loader shape="text" width="60%"></ui-skeleton-loader>
<ui-skeleton-loader shape="card" height="200px"></ui-skeleton-loader>
```

---

## ➖ Divider `ui-divider`

Visual separator for content blocks.

### Properties

| Property      | Type                                      | Default        | Description                              |
| :------------ | :---------------------------------------- | :------------- | :--------------------------------------- |
| `text`        | `string`                                  | `""`           | Text label in the middle of the divider. |
| `icon`        | `string`                                  | `""`           | Icon/emoji in the middle.                |
| `variant`     | `'solid'\|'dashed'\|'dotted'\|'gradient'` | `'solid'`      | Line style.                              |
| `textAlign`   | `'left'\|'center'\|'right'`               | `'center'`     | Alignment of the text/icon.              |
| `orientation` | `'horizontal'\|'vertical'`                | `'horizontal'` | Line direction.                          |
| `color`       | `string`                                  | `'primary'`    | Line color (theme or CSS).               |
| `gap`         | `string`                                  | `"1rem"`       | Margin around the divider.               |

### Usage

```html
<ui-divider text="OR"></ui-divider>
<ui-divider icon="💖" variant="dashed" color="danger"></ui-divider>
<ui-divider orientation="vertical" height="50px"></ui-divider>
```

---

## 📊 Dashboard `app-dashboard`

Grid-based layout for hosting resizable and draggable widgets.

### Properties

| Property       | Type                | Default | Description                                                |
| :------------- | :------------------ | :------ | :--------------------------------------------------------- |
| `widgets`      | `DashboardWidget[]` | `[]`    | List of widgets `{id, title, x, y, width, height, type?}`. |
| `columns`      | `number`            | `12`    | Grid columns count.                                        |
| `rowHeight`    | `number`            | `100`   | Height of each grid row in pixels.                         |
| `gap`          | `number`            | `16`    | Spacing between widgets.                                   |
| `enableDrag`   | `boolean`           | `true`  | Allow moving widgets.                                      |
| `enableResize` | `boolean`           | `true`  | Allow resizing widgets.                                    |
| `compact`      | `boolean`           | `false` | Automatically fill gaps in the layout.                     |
| `autoSave`     | `boolean`           | `false` | Save layout to `localStorage`.                             |

### Events

| Event           | Payload             | Description                                   |
| :-------------- | :------------------ | :-------------------------------------------- |
| `layoutChanged` | `DashboardWidget[]` | Fired when widgets are moved or resized.      |
| `widgetAdded`   | `DashboardWidget`   | Fired when a new widget enters the dashboard. |

### Usage

```html
<app-dashboard
  [widgets]="myWidgets"
  [columns]="12"
  [autoSave]="true"
  (layoutChanged)="onLayoutSave($event)"
>
</app-dashboard>
```

---

## 🏷️ Tags Input `app-tags-input`

Interactive input for managing a list of tags.

### Properties

| Property          | Type                         | Default     | Description                            |
| :---------------- | :--------------------------- | :---------- | :------------------------------------- |
| `tags`            | `string[]`                   | `[]`        | List of current tags.                  |
| `placeholder`     | `string`                     | `""`        | Placeholder text when empty.           |
| `maxTags`         | `number`                     | `Infinity`  | Limit the number of tags.              |
| `allowDuplicates` | `boolean`                    | `false`     | Allow same tag multiple times.         |
| `autocomplete`    | `string[]`                   | `[]`        | List of suggestions for auto-complete. |
| `size`            | `'small'\|'medium'\|'large'` | `'medium'`  | Input and tag size.                    |
| `color`           | `string`                     | `'primary'` | Theme color for the tags.              |

### Events

| Event        | Payload        | Description                           |
| :----------- | :------------- | :------------------------------------ |
| `tagsChange` | `{tags}`       | Fired when tags are added or removed. |
| `tagAdd`     | `{tag}`        | Fired when a single tag is added.     |
| `tagRemove`  | `{tag, index}` | Fired when a tag is deleted.          |

### Usage

```html
<app-tags-input
  [tags]="['JS', 'TS']"
  [autocomplete]="['Angular', 'React', 'Vue']"
  (tagsChange)="onUpdate($event)"
>
</app-tags-input>
```

---

## 📂 Modern Sidebar `app-modern-sidebar`

A premium, collapsible navigation sidebar with sub-menu support.

### Properties

| Property      | Type                  | Default     | Description                                            |
| :------------ | :-------------------- | :---------- | :----------------------------------------------------- |
| `items`       | `ModernSidebarItem[]` | `[]`        | Hierarchical nav items `{id, label, icon, children?}`. |
| `collapsed`   | `boolean`             | `false`     | Collapse to show only icons.                           |
| `brandName`   | `string`              | `""`        | App name shown at top.                                 |
| `logo`        | `string`              | `""`        | Logo image URL.                                        |
| `accentColor` | `string`              | `"#6366f1"` | Color for active items.                                |
| `showProfile` | `boolean`             | `false`     | Show user details at the bottom.                       |
| `userName`    | `string`              | `""`        | Profile name.                                          |

### Events

| Event            | Payload             | Description                        |
| :--------------- | :------------------ | :--------------------------------- |
| `itemSelected`   | `ModernSidebarItem` | Fired when a nav item is clicked.  |
| `sidebarToggled` | `boolean`           | Fired when collapse state changes. |

### Usage

```html
<app-modern-sidebar
  [items]="menu"
  brandName="My App"
  [collapsed]="false"
  (itemSelected)="onNav($event)"
>
</app-modern-sidebar>
```

---

## ↔️ Splitter `ui-splitter`

Resizables panes divided by a draggable bar.

### Properties

| Property       | Type                       | Default        | Description                                  |
| :------------- | :------------------------- | :------------- | :------------------------------------------- |
| `orientation`  | `'horizontal'\|'vertical'` | `'horizontal'` | Split direction.                             |
| `initialSplit` | `number`                   | `50`           | Initial percentage for the first pane.       |
| `minSize`      | `number`                   | `10`           | Minimum allowed size for any pane (%).       |
| `maxSize`      | `number`                   | `90`           | Maximum allowed size for the first pane (%). |
| `disabled`     | `boolean`                  | `false`        | Disable dragging.                            |

### Usage

```html
<ui-splitter [initialSplit]="30">
  <div slot="pane-1">Sidebar</div>
  <div slot="pane-2">Main Content</div>
</ui-splitter>
```

---

## 🌳 Tree List `ui-tree-list`

Hierarchical data representation with selection and checkboxes.

### Properties

| Property       | Type                 | Default | Description                            |
| :------------- | :------------------- | :------ | :------------------------------------- |
| `data`         | `TreeNode[]\|string` | `[]`    | Nested data structure.                 |
| `multiSelect`  | `boolean`            | `false` | Enable multiple node selection.        |
| `showCheckbox` | `boolean`            | `false` | Show checkboxes for each node.         |
| `cascade`      | `boolean`            | `true`  | Parent/child recursive check behavior. |
| `showLines`    | `boolean`            | `true`  | Show visual connecting lines.          |
| `lazy`         | `boolean`            | `false` | Fetch children on demand.              |

### Events

| Event        | Payload            | Description               |
| :----------- | :----------------- | :------------------------ |
| `treeSelect` | `{node, selected}` | Fired on item selection.  |
| `treeCheck`  | `{node, checked}`  | Fired on checkbox toggle. |

### Usage

```html
<ui-tree-list [data]="fileSystem" showCheckbox (treeCheck)="onChecked($event)"> </ui-tree-list>
```

---

## 📊 Advanced Data Table `app-advanced-data-table`

Feature-rich table for complex data management and large datasets.

### Properties

| Property        | Type            | Default | Description                                                           |
| :-------------- | :-------------- | :------ | :-------------------------------------------------------------------- |
| `columns`       | `TableColumn[]` | `[]`    | List of column definitions `{field, header, sortable?, filterable?}`. |
| `data`          | `TableRow[]`    | `[]`    | Data array to be displayed.                                           |
| `pagination`    | `boolean`       | `false` | Enable/disable paging.                                                |
| `pageSize`      | `number`        | `10`    | Rows per page.                                                        |
| `virtualScroll` | `boolean`       | `false` | High-performance mode for 10k+ rows.                                  |
| `selectable`    | `boolean`       | `false` | Enable row selection checkboxes.                                      |
| `editable`      | `boolean`       | `false` | Enable inline cell editing.                                           |
| `grouping`      | `boolean`       | `false` | Enable row grouping by a specific field.                              |
| `exportable`    | `boolean`       | `false` | Enable Excel/PDF/CSV export buttons.                                  |

### Events

| Event       | Payload                 | Description                        |
| :---------- | :---------------------- | :--------------------------------- |
| `rowSelect` | `{selectedRows}`        | Fired when selection changes.      |
| `cellEdit`  | `{rowId, field, value}` | Fired after a cell value is saved. |

### Usage

```html
<app-advanced-data-table [columns]="cols" [data]="records" pagination searchable>
</app-advanced-data-table>
```

---

## 📈 Charts `app-chart` & `ui-bar-chart`

Data visualization components powered by Chart.js.

### `app-chart` (Generic)

| Property    | Type           | Default | Description                                    |
| :---------- | :------------- | :------ | :--------------------------------------------- |
| `chartType` | `string`       | `"bar"` | Type: `line`, `pie`, `radar`, `doughnut`, etc. |
| `data`      | `ChartData`    | `{}`    | Standard Chart.js data object.                 |
| `options`   | `ChartOptions` | `{}`    | Standard Chart.js options.                     |

### `ui-bar-chart` (Specialized)

| Property      | Type                       | Default      | Description                  |
| :------------ | :------------------------- | :----------- | :--------------------------- |
| `orientation` | `'vertical'\|'horizontal'` | `'vertical'` | Layout direction.            |
| `stacked`     | `boolean`                  | `false`      | Enable stacked bar stacks.   |
| `showValues`  | `boolean`                  | `false`      | Show numeric labels on bars. |

### Usage

```html
<app-chart chartType="pie" [data]="salesData"></app-chart>
<ui-bar-chart [data]="monthlyData" orientation="horizontal"></ui-bar-chart>
```

---

## 🏎️ Speedometer `app-speedometer`

Analog-style gauge for displaying progress or scalar metrics.

### Properties

| Property      | Type                          | Default      | Description                                      |
| :------------ | :---------------------------- | :----------- | :----------------------------------------------- |
| `value`       | `number`                      | `0`          | Current needle position.                         |
| `maxValue`    | `number`                      | `100`        | Scale maximum.                                   |
| `ranges`      | `string`                      | `""`         | JSON array of color zones `[{min, max, color}]`. |
| `interactive` | `boolean`                     | `false`      | Allow users to drag the needle to set value.     |
| `needleShape` | `'triangle'\|'arrow'\|'line'` | `'triangle'` | Pointer style.                                   |

### Usage

```html
<app-speedometer [value]="75" [maxValue]="100" unit="%" label="CPU Usage"> </app-speedometer>
```

---

## 🔝 Knob `app-knob`

Circular dial control for precision input.

### Properties

| Property      | Type      | Default   | Description                           |
| :------------ | :-------- | :-------- | :------------------------------------ |
| `value`       | `number`  | `0`       | Current dial position.                |
| `min` / `max` | `number`  | `0`/`100` | Numeric range.                        |
| `step`        | `number`  | `1`       | Increment value.                      |
| `size`        | `number`  | `150`     | Size in pixels.                       |
| `snap`        | `boolean` | `false`   | Snap rotation to `step` markers.      |
| `allowInput`  | `boolean` | `true`    | Double-click to type a numeric value. |

### Usage

```html
<app-knob [value]="22" [min]="16" [max]="30" valueSuffix="°C" showTicks> </app-knob>
```

---

## 🗄️ Workspace Layout Manager `app-layout-manager`

Enterprise-grade window and region management system for IDE-like layouts.

### Properties

| Property    | Type                       | Default              | Description                                              |
| :---------- | :------------------------- | :------------------- | :------------------------------------------------------- |
| `regions`   | `LayoutRegionConfig[]`     | `[]`                 | Core structural configuration of the workspace.          |
| `direction` | `'horizontal'\|'vertical'` | `'horizontal'`       | Root split orientation.                                  |
| `saveState` | `boolean`                  | `true`               | Automatically save and restore layout from localStorage. |
| `stateKey`  | `string`                   | `"app-layout-state"` | Unique key for user preference storage.                  |

### API Methods

| Method              | Description                                                |
| :------------------ | :--------------------------------------------------------- |
| `addPanel(opts)`    | Dynamically inject a new tab/panel into a specific region. |
| `popoutPanel(id)`   | Detach a panel into a floating overlay window.             |
| `maximizePanel(id)` | Expand a specific panel to fill the entire workspace.      |

### Usage

```html
<app-layout-manager [regions]="myConfig" saveState="true"> </app-layout-manager>
```

---

## 💻 Smart Code Editor `app-code-editor`

Full-featured text editor with syntax highlighting and multi-file support.

### Properties

| Property      | Type                    | Default        | Description                                   |
| :------------ | :---------------------- | :------------- | :-------------------------------------------- |
| `files`       | `EditorFile[]`          | `[]`           | Array of `{name, content, language}` objects. |
| `language`    | `string`                | `"javascript"` | Active highlighting rules.                    |
| `theme`       | `'vs-dark'\|'vs-light'` | `'vs-dark'`    | Visual color scheme.                          |
| `showMinimap` | `boolean`               | `true`         | Toggle the high-level preview scrollbar.      |
| `toolbar`     | `boolean`               | `true`         | Show the ribbon control bar at the top.       |

### Events

| Event         | Payload  | Description                                           |
| :------------ | :------- | :---------------------------------------------------- |
| `valueChange` | `string` | Fired on every keystroke in the active editor.        |
| `runCode`     | `void`   | Fired when the "Run" button is clicked in the ribbon. |

### Usage

```html
<app-code-editor [files]="codeSnippet" language="python" theme="vs-dark"> </app-code-editor>
```

---

## 📋 Interactive Dashboard `app-dashboard`

Dynamic grid container for cards, charts, and administrative widgets.

### Properties

| Property     | Type                       | Default   | Description                                            |
| :----------- | :------------------------- | :-------- | :----------------------------------------------------- |
| `widgets`    | `DashboardWidget[]`        | `[]`      | List of items with `id`, `pos`, `size`, and `content`. |
| `columns`    | `number`                   | `12`      | Grid responsiveness divisor.                           |
| `isEditable` | `boolean`                  | `false`   | Enable drag-and-drop rearrangement.                    |
| `theme`      | `'light'\|'dark'\|'glass'` | `'light'` | visual container style.                                |

### Usage

```html
<app-dashboard [widgets]="myWidgets" [columns]="12" [isEditable]="true" theme="glass">
</app-dashboard>
```

---

## 🔝 Cascade Select `ui-cascade-select`

Hierarchical selection dropdown for nested data structures.

### Properties

| Property        | Type               | Default   | Description                                        |
| :-------------- | :----------------- | :-------- | :------------------------------------------------- |
| `options`       | `CascadeOption[]`  | `[]`      | Nested data structure `{label, value, children?}`. |
| `value`         | `any[]`            | `[]`      | Array of selected values for each level.           |
| `showFullPath`  | `boolean`          | `true`    | Show full hierarchical path in the input.          |
| `separator`     | `string`           | `" / "`   | Text separator between levels.                     |
| `expandTrigger` | `'click'\|'hover'` | `'click'` | Trigger to open sub-menus.                         |

### Usage

```html
<ui-cascade-select [options]="regionData" placeholder="Select Location"> </ui-cascade-select>
```

---

## ↔️ Transfer List `ui-transfer-list`

Dual-pane component for moving items between two sets.

### Properties

| Property      | Type                      | Default  | Description                                           |
| :------------ | :------------------------ | :------- | :---------------------------------------------------- |
| `sourceItems` | `TransferItem[]`          | `[]`     | List on the left side.                                |
| `targetItems` | `TransferItem[]`          | `[]`     | List on the right side.                               |
| `searchable`  | `boolean`                 | `false`  | Enable search filters for both lists.                 |
| `mode`        | `'list'\|'tree'\|'table'` | `'list'` | Visual layout of panels.                              |
| `oneWay`      | `boolean`                 | `false`  | If true, items are copied to target instead of moved. |

### Usage

```html
<ui-transfer-list [sourceItems]="allUsers" [targetItems]="selectedUsers" searchable>
</ui-transfer-list>
```

---

## 🏷️ Picklist `ui-picklist`

Advanced selection component with search and multi-select tags.

### Properties

| Property      | Type                | Default    | Description                                  |
| :------------ | :------------------ | :--------- | :------------------------------------------- |
| `options`     | `Option[]`          | `[]`       | List of items to select.                     |
| `mode`        | `'single'\|'multi'` | `'single'` | Selection mode.                              |
| `searchable`  | `boolean`           | `false`    | Integrated search bar inside dropdown.       |
| `reorderable` | `boolean`           | `false`    | Allow dragging multi-select tags to reorder. |

### Usage

```html
<ui-picklist [options]="technologies" mode="multi" reorderable> </ui-picklist>
```

---

## 🔔 Snackbar / Notifications `ui-snackbar`

Global notification system for feedback and status updates.

### Properties

| Property     | Type      | Default          | Description                             |
| :----------- | :-------- | :--------------- | :-------------------------------------- |
| `position`   | `string`  | `"bottom-right"` | Screen anchor (e.g., `top-right`).      |
| `maxVisible` | `number`  | `5`              | Max number of concurrent notifications. |
| `stackMode`  | `string`  | `"stack"`        | Management of incoming toast ordering.  |
| `cardStack`  | `boolean` | `false`          | premium stacking effect on hover.       |

### Usage

```html
<ui-snackbar position="top-right" maxVisible="3"></ui-snackbar>
```

---

## 🏢 Dialog Box `ui-dialog-box`

Feature-rich modal window system.

### Properties

| Property      | Type      | Default | Description                           |
| :------------ | :-------- | :------ | :------------------------------------ |
| `open`        | `boolean` | `false` | Visibility state.                     |
| `dialogTitle` | `string`  | `""`    | Header title text.                    |
| `isDraggable` | `boolean` | `false` | Enable window dragging.               |
| `resizable`   | `boolean` | `false` | Enable manual resizing.               |
| `glass`       | `boolean` | `false` | frosted glass effect on the backdrop. |
| `confetti`    | `boolean` | `false` | Celebration burst on modal open.      |

### Usage

```html
<ui-dialog-box [open]="isVisible" dialogTitle="Settings" glass confetti>
  <p>Modal content goes here...</p>
</ui-dialog-box>
```

---

## ↕️ Range Slider `ui-range-slider`

Interactive slider for selecting individual values or numeric ranges.

### Properties

| Property      | Type      | Default     | Description                                    |
| :------------ | :-------- | :---------- | :--------------------------------------------- |
| `min` / `max` | `number`  | `0` / `100` | Scale boundaries.                              |
| `step`        | `number`  | `1`         | Incremental step size.                         |
| `range`       | `boolean` | `false`     | Enable dual-handle mode for selecting a range. |
| `showMarks`   | `boolean` | `false`     | Display visual tick marks along the track.     |
| `vertical`    | `boolean` | `false`     | Change slider orientation to vertical.         |

### Usage

```html
<ui-range-slider range [startValue]="10" [endValue]="90" showMarks></ui-range-slider>
```

---

## 📏 Meter Group `ui-meter-group`

Segmented visual indicator for displaying relative data distributions.

### Properties

| Property      | Type               | Default  | Description                              |
| :------------ | :----------------- | :------- | :--------------------------------------- |
| `values`      | `MeterValue[]`     | `[]`     | Array of `{label, value, color}` items.  |
| `shape`       | `'line'\|'circle'` | `'line'` | Container shape.                         |
| `showLegend`  | `boolean`          | `false`  | Display a legend below/beside the meter. |
| `interactive` | `boolean`          | `false`  | Enable clicking on individual segments.  |

### Usage

```html
<ui-meter-group [values]="diskUsage" shape="circle" showLegend></ui-meter-group>
```

---

## 🚀 Speed Dial `ui-speed-dial`

Expanding floating action button for multi-task triggering.

### Properties

| Property   | Type               | Default          | Description                        |
| :--------- | :----------------- | :--------------- | :--------------------------------- |
| `actions`  | `Action[]`         | `[]`             | List of items to show when opened. |
| `position` | `string`           | `"bottom-right"` | Screen or parent anchor point.     |
| `trigger`  | `'click'\|'hover'` | `'click'`        | Interaction to open the dial.      |
| `icon`     | `string`           | `"fas fa-plus"`  | Main button icon.                  |

### Usage

```html
<ui-speed-dial [actions]="myActions" position="bottom-right"></ui-speed-dial>
```

---

## ➗ Split Button `ui-split-button`

Hybrid button for a primary action with a secondary options menu.

### Properties

| Property  | Type       | Default | Description                      |
| :-------- | :--------- | :------ | :------------------------------- |
| `label`   | `string`   | `""`    | Primary button text.             |
| `options` | `Option[]` | `[]`    | List of alternate actions.       |
| `loading` | `boolean`  | `false` | show spinner on the main button. |

### Usage

```html
<ui-split-button label="Submit" [options]="subOptions"></ui-split-button>
```

---

## ⌨️ Pattern Input `ui-pattern-input`

Masked text field for formatted data entry (Phones, CCs, IDs).

### Properties

| Property     | Type      | Default  | Description                           |
| :----------- | :-------- | :------- | :------------------------------------ |
| `pattern`    | `string`  | `""`     | Visual mask (e.g., `(###) ###-####`). |
| `maskChar`   | `string`  | `"#"`    | Character representing input slots.   |
| `inputType`  | `string`  | `"text"` | Content filter (numeric, alpha, etc). |
| `autoFormat` | `boolean` | `true`   | Apply formatting while typing.        |

### Usage

```html
<ui-pattern-input pattern="####-####-####-####" label="Card Number"></ui-pattern-input>
```

---

## ⏱️ Advanced Timer `ui-timer`

Multi-mode stopwatch and countdown system with progress tracking.

### Properties

| Property       | Type          | Default       | Description                                     |
| :------------- | :------------ | :------------ | :---------------------------------------------- |
| `mode`         | `string`      | `"countdown"` | Operational mode: `stopwatch`, `count`, `laps`. |
| `steps`        | `TimerStep[]` | `[]`          | Sequential intervals or stages.                 |
| `progressType` | `string`      | `"bar"`       | UI style for progress (`bar`, `circle`).        |
| `enableSound`  | `boolean`     | `false`       | Alert user on completion.                       |

### Usage

```html
<ui-timer mode="stopwatch" progressType="circle" [steps]="lapData"></ui-timer>
```

---

## 🚪 Aside Panel `ui-aside-panel`

Slide-out drawer container for supplementary content or settings.

### Properties

| Property    | Type                               | Default     | Description                        |
| :---------- | :--------------------------------- | :---------- | :--------------------------------- |
| `open`      | `boolean`                          | `false`     | Visible state of the panel.        |
| `direction` | `'left'\|'right'\|'top'\|'bottom'` | `'right'`   | Edge for slide-in animation.       |
| `size`      | `string`                           | `"300px"`   | Panel dimension (px or %).         |
| `resizable` | `boolean`                          | `false`     | Enable manual sizing via dragging. |
| `variant`   | `'default'\|'glass'`               | `'default'` | Visual container styling.          |

### Usage

```html
<ui-aside-panel [open]="isSettingsOpen" direction="right" resizable>
  <h3>Panel Content</h3>
</ui-aside-panel>
```

---

## 🗺️ Smart Navigation Menu `ui-smart-menu`

Dynamic multi-level menu with smart viewport positioning.

### Properties

| Property  | Type         | Default | Description                           |
| :-------- | :----------- | :------ | :------------------------------------ |
| `items`   | `MenuItem[]` | `[]`    | Nested structure for menu tree.       |
| `visible` | `boolean`    | `false` | Visibility state.                     |
| `target`  | `string`     | `""`    | CSS selector for the trigger element. |

### Usage

```html
<ui-smart-menu [items]="myMenu" target="#menu-trigger"></ui-smart-menu>
```

---

## 🪜 Smart Stepper `ui-smart-stepper`

Workflow container that manages visibility of sequential child steps.

### Properties

| Property      | Type                       | Default        | Description                        |
| :------------ | :------------------------- | :------------- | :--------------------------------- |
| `activeStep`  | `number`                   | `0`            | Index of the current visible step. |
| `orientation` | `'horizontal'\|'vertical'` | `'horizontal'` | Visual layout of the stepper.      |
| `size`        | `'sm'\|'md'\|'lg'`         | `'md'`         | Scale variant.                     |

### Usage

```html
<ui-smart-stepper [activeStep]="currentIndex">
  <div>Step 1 Content</div>
  <div>Step 2 Content</div>
</ui-smart-stepper>
```

---

## ⚓ Apple-style Dock `ui-dock`

Interactive taskbar with magnification and drag-and-drop reordering.

### Properties

| Property     | Type                               | Default    | Description                      |
| :----------- | :--------------------------------- | :--------- | :------------------------------- |
| `items`      | `DockItem[]`                       | `[]`       | List of icons and actions.       |
| `position`   | `'bottom'\|'top'\|'left'\|'right'` | `'bottom'` | Screen anchor edge.              |
| `magnify`    | `boolean`                          | `true`     | Scale icons on hover.            |
| `blurEffect` | `boolean`                          | `true`     | Frosted glass background effect. |

### Usage

```html
<ui-dock [items]="applicationItems" position="bottom" magnify></ui-dock>
```

---

## 💊 Premium Pill / Chip `ui-pill`

Versatile indicator component with advanced orientation and styling options.

### Properties

| Property      | Type      | Default        | Description                             |
| :------------ | :-------- | :------------- | :-------------------------------------- |
| `label`       | `string`  | `""`           | Text content of the pill.               |
| `variant`     | `string`  | `"filled"`     | Visual style preset.                    |
| `orientation` | `string`  | `"horizontal"` | Layout rotation (horizontal, vertical). |
| `removable`   | `boolean` | `false`        | Show closing icon.                      |
| `avatar`      | `string`  | `""`           | Optional image URL for prefix.          |

### Usage

```html
<ui-pill label="Administrator" color="danger" [avatar]="userImage" removable></ui-pill>
```

---

## 🖱️ Context Menu `ui-context-menu`

Universal popup menu for right-click or specific trigger interactions.

### Properties

| Property | Type                              | Default         | Description                           |
| :------- | :-------------------------------- | :-------------- | :------------------------------------ |
| `items`  | `ContextMenuItem[]`               | `[]`            | Menu item definitions and hierarchy.  |
| `openOn` | `'contextmenu'\|'click'\|'hover'` | `'contextmenu'` | Trigger interaction type.             |
| `theme`  | `'light'\|'dark'\|'green'`        | `'light'`       | Visual theme variant.                 |
| `target` | `string`                          | `""`            | Target element to attach listener to. |

### Usage

```html
<ui-context-menu [items]="fileActions" target=".file-item"></ui-context-menu>
```
