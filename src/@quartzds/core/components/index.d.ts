/* qds custom elements */
export { BadgeCounter as QdsBadgeCounter } from '../dist/types/components/badge-counter/badge-counter';
export { defineCustomElement as defineCustomElementQdsBadgeCounter } from './qds-badge-counter';
export { BadgeIndicator as QdsBadgeIndicator } from '../dist/types/components/badge-indicator/badge-indicator';
export { defineCustomElement as defineCustomElementQdsBadgeIndicator } from './qds-badge-indicator';
export { QdsBreadcrumbItem as QdsBreadcrumbItem } from '../dist/types/components/breadcrumb-item/breadcrumb-item';
export { defineCustomElement as defineCustomElementQdsBreadcrumbItem } from './qds-breadcrumb-item';
export { Button as QdsButton } from '../dist/types/components/button/button';
export { defineCustomElement as defineCustomElementQdsButton } from './qds-button';
export { Checkbox as QdsCheckbox } from '../dist/types/components/checkbox/checkbox';
export { defineCustomElement as defineCustomElementQdsCheckbox } from './qds-checkbox';
export { Chip as QdsChip } from '../dist/types/components/chip/chip';
export { defineCustomElement as defineCustomElementQdsChip } from './qds-chip';
export { Dialog as QdsDialog } from '../dist/types/components/dialog/dialog';
export { defineCustomElement as defineCustomElementQdsDialog } from './qds-dialog';
export { Divider as QdsDivider } from '../dist/types/components/divider/divider';
export { defineCustomElement as defineCustomElementQdsDivider } from './qds-divider';
export { Dropdown as QdsDropdown } from '../dist/types/components/dropdown/dropdown';
export { defineCustomElement as defineCustomElementQdsDropdown } from './qds-dropdown';
export { FormMessage as QdsFormMessage } from '../dist/types/components/form-message/form-message';
export { defineCustomElement as defineCustomElementQdsFormMessage } from './qds-form-message';
export { Icon as QdsIcon } from '../dist/types/components/icon/icon';
export { defineCustomElement as defineCustomElementQdsIcon } from './qds-icon';
export { InlineLink as QdsInlineLink } from '../dist/types/components/inline-link/inline-link';
export { defineCustomElement as defineCustomElementQdsInlineLink } from './qds-inline-link';
export { Input as QdsInput } from '../dist/types/components/input/input';
export { defineCustomElement as defineCustomElementQdsInput } from './qds-input';
export { Label as QdsLabel } from '../dist/types/components/label/label';
export { defineCustomElement as defineCustomElementQdsLabel } from './qds-label';
export { ListItem as QdsListItem } from '../dist/types/components/list-item/list-item';
export { defineCustomElement as defineCustomElementQdsListItem } from './qds-list-item';
export { Loader as QdsLoader } from '../dist/types/components/loader/loader';
export { defineCustomElement as defineCustomElementQdsLoader } from './qds-loader';
export { NavListItem as QdsNavListItem } from '../dist/types/components/nav-list-item/nav-list-item';
export { defineCustomElement as defineCustomElementQdsNavListItem } from './qds-nav-list-item';
export { ProgressBar as QdsProgressBar } from '../dist/types/components/progress-bar/progress-bar';
export { defineCustomElement as defineCustomElementQdsProgressBar } from './qds-progress-bar';
export { Radio as QdsRadio } from '../dist/types/components/radio/radio';
export { defineCustomElement as defineCustomElementQdsRadio } from './qds-radio';
export { Select as QdsSelect } from '../dist/types/components/select/select';
export { defineCustomElement as defineCustomElementQdsSelect } from './qds-select';
export { StandaloneLink as QdsStandaloneLink } from '../dist/types/components/standalone-link/standalone-link';
export { defineCustomElement as defineCustomElementQdsStandaloneLink } from './qds-standalone-link';
export { Switch as QdsSwitch } from '../dist/types/components/switch/switch';
export { defineCustomElement as defineCustomElementQdsSwitch } from './qds-switch';
export { Tab as QdsTab } from '../dist/types/components/tab/tab';
export { defineCustomElement as defineCustomElementQdsTab } from './qds-tab';
export { Tabbar as QdsTabbar } from '../dist/types/components/tabbar/tabbar';
export { defineCustomElement as defineCustomElementQdsTabbar } from './qds-tabbar';
export { Table as QdsTable } from '../dist/types/components/table/table';
export { defineCustomElement as defineCustomElementQdsTable } from './qds-table';
export { TableBody as QdsTableBody } from '../dist/types/components/table-body/table-body';
export { defineCustomElement as defineCustomElementQdsTableBody } from './qds-table-body';
export { TableCell as QdsTableCell } from '../dist/types/components/table-cell/table-cell';
export { defineCustomElement as defineCustomElementQdsTableCell } from './qds-table-cell';
export { TableHead as QdsTableHead } from '../dist/types/components/table-head/table-head';
export { defineCustomElement as defineCustomElementQdsTableHead } from './qds-table-head';
export { TableHeadCell as QdsTableHeadCell } from '../dist/types/components/table-head-cell/table-head-cell';
export { defineCustomElement as defineCustomElementQdsTableHeadCell } from './qds-table-head-cell';
export { TableRow as QdsTableRow } from '../dist/types/components/table-row/table-row';
export { defineCustomElement as defineCustomElementQdsTableRow } from './qds-table-row';
export { Tag as QdsTag } from '../dist/types/components/tag/tag';
export { defineCustomElement as defineCustomElementQdsTag } from './qds-tag';
export { TextArea as QdsTextarea } from '../dist/types/components/textarea/textarea';
export { defineCustomElement as defineCustomElementQdsTextarea } from './qds-textarea';
export { Title as QdsTitle } from '../dist/types/components/title/title';
export { defineCustomElement as defineCustomElementQdsTitle } from './qds-title';
export { Tooltip as QdsTooltip } from '../dist/types/components/tooltip/tooltip';
export { defineCustomElement as defineCustomElementQdsTooltip } from './qds-tooltip';

/**
 * Get the base path to where the assets can be found. Use "setAssetPath(path)"
 * if the path needs to be customized.
 */
export declare const getAssetPath: (path: string) => string;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

/**
 * Used to specify a nonce value that corresponds with an application's CSP.
 * When set, the nonce will be added to all dynamically created script and style tags at runtime.
 * Alternatively, the nonce value can be set on a meta tag in the DOM head
 * (<meta name="csp-nonce" content="{ nonce value here }" />) which
 * will result in the same behavior.
 */
export declare const setNonce: (nonce: string) => void

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../dist/types';
