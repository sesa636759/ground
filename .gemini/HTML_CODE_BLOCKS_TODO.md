# Adding Granular Code Blocks to All Demos

## 🎯 Goal

Update all demo pages to include a "Show Code" block **for each individual example section**, not just the main playground. This ensures users can copy the code for any variation (e.g., "Basic Usage", "Variants", "States").

## 📊 Status

- **Total Demos:** 34
- **Granular Blocks Completed:** 6
- **Pending:** 28

## ✅ Completed (6/34)

1.  ✅ **set-input** (Added blocks for Basic, Variants, Sizes, Validation, Prefix/Suffix, Advanced, Addons)
2.  ✅ **set-card** (Added blocks for Basic, Media, Flippable, Premium, States)
3.  ✅ **set-accordion** (Added blocks for Basic, Multiple, Single, Disabled, Icons, Nested)
4.  ✅ **set-checkbox** (Added blocks for Colors, Premium, Skeleton, Sizes, States, Form)
5.  ✅ **set-radio** (Added blocks for Premium, Groups, Layouts, Slots, States, Form)
6.  ✅ **set-masonry** (Already had granular blocks)

## ⏳ Pending (28/34)

The following components need their static example sections identified and code blocks added:

### Form Controls

7.  ⏳ set-otp-input
8.  ⏳ set-tags-input
9.  ⏳ set-code-editor
10. ⏳ set-toggle
11. ⏳ set-button-toggle
12. ⏳ set-date-picker (if exists)

### Navigation & Layout

13. ⏳ set-tabs
14. ⏳ set-sidebar
15. ⏳ set-splitter
16. ⏳ set-resizable-panel
17. ⏳ set-stepper
18. ⏳ set-tab-stack
19. ⏳ set-modern-sidebar
20. ⏳ set-layout-manager
21. ⏳ set-dock-overlay
22. ⏳ set-anchor
23. ⏳ set-scroll-top

### Data Display

24. ⏳ set-tree
25. ⏳ set-carousel
26. ⏳ set-list
27. ⏳ set-timeline
28. ⏳ set-empty-state
29. ⏳ set-progress
30. ⏳ set-avatar
31. ⏳ set-avatar-group
32. ⏳ set-tooltip
33. ⏳ set-context-menu
34. ⏳ set-animate-on-scroll

## 📝 Implementation Pattern

For each component `set-name`:

1.  **Analyze HTML**: Identify each `<section>` or example group.
2.  **Update TS**: Add strings for each section's code (e.g., `basicCode`, `variantsCode`).
3.  **Update HTML**: Insert `<app-code-block [code]="basicCode" ...>` after the corresponding example div.

## ⚠️ Notes

- `set-dashboard` has a playground. Check if it has other static sections.
- Ensure unique context when using `multi_replace_file_content`.
