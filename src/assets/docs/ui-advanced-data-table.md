# ui-advanced-data-table

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **config** | `TableConfig \| string` | Table configuration |
| **columns** | `TableColumn[] \| string` | Columns definition |
| **data** | `TableRow[] \| string` | Table data |
| **selectable** | `boolean` | Enable row selection |
| **multiSelect** | `boolean` | Enable multiple row selection |
| **editable** | `boolean` | Enable inline editing |
| **stickyHeader** | `boolean` | Enable sticky header |
| **pagination** | `boolean` | Enable pagination |
| **pageSize** | `number` | Page size |
| **pageSizeOptions** | `number[] \| string` | Page size options |
| **paginationTheme** | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | Pagination theme |
| **paginationShape** | `'default' \| 'rounded' \| 'pill'` | Pagination shape |
| **paginationKeyboardNav** | `boolean` | Enable keyboard navigation for pagination |
| **paginationQuickJump** | `boolean` | Enable quick jump buttons |
| **paginationQuickJumpStep** | `number` | Quick jump step size |
| **paginationShowProgress** | `boolean` | Show progress indicator |
| **paginationSticky** | `boolean` | Sticky pagination |
| **paginationStickyPosition** | `'top' \| 'bottom'` | Sticky position |
| **paginationTransitions** | `boolean` | Enable page transitions |
| **paginationUrlSync** | `boolean` | Sync pagination with URL |
| **paginationUrlParam** | `string` | URL parameter name |
| **paginationPersistPage** | `boolean` | Persist page to localStorage |
| **paginationStorageKey** | `string` | LocalStorage key |
| **paginationSwipeGestures** | `boolean` | Enable swipe gestures |
| **paginationSmartCompact** | `boolean` | Smart compact mode |
| **paginationSmartCompactThreshold** | `number` | Smart compact threshold |
| **paginationAutoHide** | `boolean` | Auto-hide pagination on single page |
| **paginationResponsive** | `boolean` | Responsive pagination mode |
| **paginationMobileBreakpoint** | `number` | Mobile breakpoint for pagination |
| **virtualScroll** | `boolean` | Enable virtual scrolling for performance with large datasets |
| **virtualRowHeight** | `number` | Row height for virtual scrolling (px) |
| **advancedFilters** | `boolean` | Enable advanced filter operators |
| **columnAggregation** | `boolean` | Enable column aggregation (sum, avg, min, max) |
| **aggregationFunctions** | `string[] \| string` | Aggregation functions to show |
| **persistState** | `boolean` | Persist table state to localStorage |
| **stateStorageKey** | `string` | LocalStorage key for state persistence |
| **multiSort** | `boolean` | Enable multi-column sorting |
| **maxSortColumns** | `number` | Maximum number of sort columns |
| **autoSizeColumns** | `boolean` | Enable column auto-sizing |
| **rowDetails** | `boolean` | Enable row details panel |
| **keyboardShortcuts** | `boolean` | Enable keyboard shortcuts |
| **excelExport** | `boolean` | Enable Excel export (.xlsx) |
| **inlineValidation** | `boolean` | Enable inline validation |
| **validationRules** | `any` | Validation rules for columns |
| **advancedCellEditors** | `boolean` | Enable advanced cell editors (date picker, dropdown, etc.) |
| **columnFormatting** | `boolean` | Enable column formatting (currency, date, percentage) |
| **rangeSelection** | `boolean` | Enable range selection (Shift+Click) |
| **copyPaste** | `boolean` | Enable copy/paste functionality |
| **conditionalFormatting** | `boolean` | Enable conditional formatting (color scales, data bars) |
| **formattingRules** | `any` | Conditional formatting rules |
| **contextMenu** | `boolean` | Enable context menus on right click |
| **mobileCardView** | `boolean` | Enable mobile card view for small screens |
| **lazyLoad** | `boolean` | Enable lazy loading of data |
| **pdfExport** | `boolean` | Enable PDF export |
| **enableSparklines** | `boolean` | Enable sparklines in cells |
| **undoRedo** | `boolean` | Enable undo/redo functionality |
| **printOptimized** | `boolean` | Enable print optimization |
| **enhancedAccessibility** | `boolean` | Enable enhanced accessibility features |
| **advancedValidation** | `boolean` | Enable advanced validation (ranges, lists) |
| **searchable** | `boolean` | Enable global search |
| **sortable** | `boolean` | Enable sorting |
| **filterable** | `boolean` | Enable filtering |
| **columnReorder** | `boolean` | Enable column reordering |
| **columnVisibility** | `boolean` | Enable column visibility toggle |
| **rowHeight** | `'compact' \| 'normal' \| 'comfortable'` | Row height variant |
| **striped** | `boolean` | Enable striped rows |
| **hoverable** | `boolean` | Enable hover effect |
| **bordered** | `boolean` | Enable borders |
| **loading** | `boolean` | Loading state |
| **showSkeleton** | `boolean` | Show skeleton while loading |
| **skeletonRows** | `number` | Number of skeleton rows to show |
| **emptyMessage** | `string` | Empty message |
| **serverSide** | `boolean` | Server-side mode |
| **totalRows** | `number` | Total rows (for server-side pagination) |
| **exportable** | `boolean` | Enable export |
| **theme** | `'light' \| 'dark' \| 'auto'` | Theme mode |
| **grouping** | `boolean` | Enable data grouping |
| **groupBy** | `string` | Field to group by (for row grouping) |
| **expandGroupsByDefault** | `boolean` | Expand groups by default |
| **showGroupCount** | `boolean` | Show group count |
| **columnGrouping** | `boolean` | Enable column grouping (multi-level headers) |
| **showGroupingControls** | `boolean` | Enable row grouping controls in toolbar |
| **treeData** | `boolean` | Enable Tree Data mode (hierarchical) |
| **showActions** | `boolean` | Show actions menu (3-dot menu) for each row |
| **label** | `string` |  |
| **value** | `string` |  |
| **icon** | `string` |  |

## Events

No events found.

## Usage Example

```html
<ui-advanced-data-table
  config="value"
  columns="value"
  data="value"
></ui-advanced-data-table>
```
