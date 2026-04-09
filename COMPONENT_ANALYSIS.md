# UI Library Component Analysis with Variants

## **app-ui-library Components**

### Button & Toggle Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiButton** | 23 | 0 | 0 | primary, secondary, success, danger, warning, info, outline, ghost, dark |
| **UiButtonToggle** | 24 | 3 | 0 | filled, outlined, text, soft, classic, solid, surface |
| **UiButtonToggleGroup** | 23 | 7 | 0 | filled, outlined, text, soft, classic, solid, surface |
| **UiToggle** | 19 | 0 | 0 | default, rounded, outlined, glass |

### Card Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiCard** | 18 | 4 | 0 | default, elevated, outlined, filled |

### Input Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiInput** | 50+ | 9 | 1 (setFocus) | outlined, filled |
| **UiCheckbox** | 22 | 3 | 0 | default, rounded, square, button, chip, filled, tick, round-color |
| **UiCheckboxGroup** | 16 | 2 | 0 | default |
| **UiRadio** | 23 | 3 | 0 | default, bordered, underlined, card |
| **UiRadioGroup** | 22 | 1 | 0 | default, bordered, underlined, card |
| **UiPatternInput** | 12 | 0 | 0 | md (size) |
| **UiCascadeSelect** | 8 | 0 | 0 | sm, md, lg (sizes) |
| **UiDropdown** | 10 | 0 | 0 | sm, md, lg (sizes) |
| **UiPicklist** | 15 | 0 | 0 | default |

### Display Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiBreadcrumb** | 9 | 0 | 0 | default, pills, glass |
| **UiBadge** | 18 | 0 | 0 | standard, outlined, bordered, soft |
| **UiChip** | 17 | 0 | 0 | filled, outlined, text, soft, gradient |
| **UiPill** | 18 | 0 | 0 | filled, outlined, soft, gradient, bordered |
| **UiDivider** | 28 | 0 | 0 | solid, dashed, dotted, double-solid, double-dashed, double-dotted, gradient |
| **UiAvatar** | 13 | 0 | 0 | circle, square, hexagon, squircle (shapes) |
| **UiAvatarGroup** | 8 | 0 | 0 | stack, grid (layouts) |

### Navigation Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiNavigation** | 18 | 7 | 4 | expanded, collapsed, auto (modes) |
| **UiHorizontalNav** | 10 | 0 | 0 | default, pills, underline, segmented |
| **UiBreadcrumb** | 9 | 0 | 0 | default, pills, glass |
| **UiAnchor** | 11 | 0 | 3 | line, dot (types) |

### Accordion & Tabs

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiAccordion** | 35 | 6 | 11 | default, bordered, splitted, light, shadow, card, card-list |
| **UiTabs** | 15+ | 3 | 0 | default, pills, underline |

### Dialog & Panel Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiDialogBox** | 35 | 3 | 4 (show, hide, maximize, minimize) | outlined, filled |
| **UiPanel** | 37 | 4 | 0 | outlined, filled, elevated, flat |
| **UiPopover** | 10 | 0 | 3 (show, hide, toggle) | light, dark |
| **AsidePanel** | 14 | 2 | 3 (show, hide, toggle) | default, glass |

### Data Table Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiAdvancedDataTable** | 95+ | 10+ | 15+ | default |

### Pagination & Progress

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiPagination** | 40+ | 0 | 0 | default, primary, success, danger, warning, info (themes) |
| **UiProgress** | 15 | 0 | 0 | line, circle, dashboard (types) |

### Layout Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **LayoutManager** | 6 | 0 | 6 | horizontal, vertical (directions) |
| **LmContainer** | 2 | 0 | 0 | - |
| **LmPanel** | 1 | 0 | 0 | - |

### Charts

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiBarChart** | 23 | 0 | 0 | vertical, horizontal (orientations) |
| **AppChart** | 12 | 0 | 0 | line, bar, pie, etc (chart types) |

### Miscellaneous

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **UiKnob** | 18 | 0 | 0 | - |
| **UiMeterGroup** | 10 | 0 | 0 | horizontal, vertical (orientations) |
| **UiDock** | 6 | 0 | 0 | bottom, top, left, right (positions) |
| **UiScrollTop** | 15 | 4 | 0 | filled, outlined, minimal, circular, rounded |
| **UiSkeleton** | 8 | 0 | 0 | rectangle, circle, etc (shapes) |
| **UiIcon** | 6 | 0 | 0 | se, fontawesome, lucide, bootstrap, google (libraries) |

---

## **set-ui-lib Components**

### Avatar & Button Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppAvatar** | 36 | 6 | 0 | circle, square (shapes) |
| **AppAvatarGroup** | 8 | 0 | 0 | circle, square (shapes) |
| **AppButtonToggle** | 24 | 3 | 0 | filled, outlined, text, soft, classic, solid, surface |
| **AppButtonToggleGroup** | 23 | 7 | 0 | filled, outlined, text, soft, classic, solid, surface |

### Card Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppCard** | 30 | 5 | 0 | default, primary, success, warning, danger, info |

### Input Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppInput** | 47 | 9 | 1 (setFocus) | outlined, filled |
| **AppCheckbox** | 22 | 3 | 0 | default, rounded, square, button, chip |
| **AppCheckboxGroup** | 16 | 2 | 0 | default |
| **AppRadio** | 23 | 3 | 0 | default, bordered, underlined, card |
| **AppRadioGroup** | 22 | 1 | 0 | default, bordered, underlined, card |
| **AppOtpInput** | 11 | 2 | 0 | default, underlined, flushed, separated |
| **AppTagsInput** | 9 | 3 | 0 | - |

### Navigation Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppAnchor** | 22 | 7 | 1 (setActive) | numeric, decimal, alpha, roman (number styles) |
| **AppSidebar** | 4 | 0 | 0 | left, right (positions) |
| **AppModernSidebar** | 9 | 4 | 0 | - |
| **AppTabStack** | 18 | 5 | 0 | default, pills, underline, enclosed, buttons |

### List Components

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppList** | 27 | 5 | 0 | filled, outlined, text, soft |
| **AppListItem** | 31 | 8 | 0 | filled, outlined, text, soft |
| **AppListGroup** | 10 | 2 | 0 | default |

### Dashboard & Layout

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppDashboard** | 25+ | 9 | 10+ | light, dark (themes) |
| **AppLayoutManager** | 12 | 11 | 12 | horizontal, vertical (directions) |
| **AppResizablePanel** | 12 | 4 | 0 | light, dark (themes) |
| **AppSplitter** | 15 | 4 | 0 | light, dark, auto (themes) |

### Menu & Context

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppContextMenu** | 32 | 5 | 0 | default, primary, success, warning, danger, custom (color schemes) |

### Toggle & Timeline

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppToggle** | 29 | 5 | 0 | default, rounded, outlined, glass |
| **AppToggleGroup** | 37 | 5 | 0 | default, rounded, outlined |
| **AppTimeline** | 16 | 2 | 0 | default (variants) |

### Tree & Tooltip

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppTree** | 16 | 7 | 0 | default, bordered, rounded, minimal, glass |
| **AppTooltip** | 42 | 9 | 4 (show, hide, toggle, forceHide) | light, dark, info, success, warning, error, primary, glass |

### Progress & Scroll

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppProgress** | 15 | 0 | 0 | line, circle, dashboard (types) |
| **AppScrollTop** | 17 | 4 | 0 | filled, outlined, minimal, circular, rounded |

### Stepper & Code

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppStepperContainer** | 18 | 7 | 1 | default, outlined, filled, minimal, snack |
| **AppCodeEditor** | 9 | 2 | 0 | vs-dark, vs-light (themes) |
| **AppCodeBlock** | 3 | 0 | 0 | - |

### Masonry & Theme

| Component | Props | Events | Methods | Variants |
|-----------|-------|--------|---------|----------|
| **AppMasonry** | 21 | 7 | 0 | masonry, grid, columns (layout types) |
| **AppThemeSwitcher** | 0 | 0 | 0 | - |

---

## **Summary Statistics**

### app-ui-library
- **Total Components**: 70+
- **Average Props per Component**: 20-40
- **Average Events per Component**: 2-5
- **Average Methods per Component**: 1-3
- **Most Feature-Rich**: UiAdvancedDataTable (95+ props, 15+ methods)
- **Most Variants**: UiDivider (7 variants), UiCheckbox (8 variants)

### set-ui-lib
- **Total Components**: 45+
- **Average Props per Component**: 15-30
- **Average Events per Component**: 4-7
- **Average Methods per Component**: 1-2
- **Most Feature-Rich**: AppDashboard (25+ props, 10+ methods), AppLayoutManager (12 methods)
- **Most Variants**: AppTooltip (8 variants), AppContextMenu (6 color schemes)

### Common Variant Categories
1. **Color/Theme Variants**: primary, secondary, success, danger, warning, info, default
2. **Style Variants**: filled, outlined, text, soft, gradient, bordered
3. **Shape Variants**: circle, square, rounded, pill, hexagon, squircle
4. **Orientation**: horizontal, vertical
5. **Position**: top, bottom, left, right
6. **Size**: small, medium, large, xs, sm, md, lg, xl, 2xl
