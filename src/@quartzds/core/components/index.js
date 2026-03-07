/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
export { g as getAssetPath, s as setAssetPath, a as setNonce, b as setPlatformOptions } from './p-2806fee1.js';
export { r as registerIconLibrary, u as unregisterIconLibrary } from './p-ba880369.js';
export { QdsBadgeCounter, defineCustomElement as defineCustomElementQdsBadgeCounter } from './qds-badge-counter.js';
export { QdsBadgeIndicator, defineCustomElement as defineCustomElementQdsBadgeIndicator } from './qds-badge-indicator.js';
export { QdsBreadcrumbItem, defineCustomElement as defineCustomElementQdsBreadcrumbItem } from './qds-breadcrumb-item.js';
export { QdsButton, defineCustomElement as defineCustomElementQdsButton } from './qds-button.js';
export { QdsCheckbox, defineCustomElement as defineCustomElementQdsCheckbox } from './qds-checkbox.js';
export { QdsChip, defineCustomElement as defineCustomElementQdsChip } from './qds-chip.js';
export { QdsDialog, defineCustomElement as defineCustomElementQdsDialog } from './qds-dialog.js';
export { QdsDivider, defineCustomElement as defineCustomElementQdsDivider } from './qds-divider.js';
export { QdsDropdown, defineCustomElement as defineCustomElementQdsDropdown } from './qds-dropdown.js';
export { QdsFormMessage, defineCustomElement as defineCustomElementQdsFormMessage } from './qds-form-message.js';
export { QdsIcon, defineCustomElement as defineCustomElementQdsIcon } from './qds-icon.js';
export { QdsInlineLink, defineCustomElement as defineCustomElementQdsInlineLink } from './qds-inline-link.js';
export { QdsInput, defineCustomElement as defineCustomElementQdsInput } from './qds-input.js';
export { QdsLabel, defineCustomElement as defineCustomElementQdsLabel } from './qds-label.js';
export { QdsListItem, defineCustomElement as defineCustomElementQdsListItem } from './qds-list-item.js';
export { QdsLoader, defineCustomElement as defineCustomElementQdsLoader } from './qds-loader.js';
export { QdsNavListItem, defineCustomElement as defineCustomElementQdsNavListItem } from './qds-nav-list-item.js';
export { QdsProgressBar, defineCustomElement as defineCustomElementQdsProgressBar } from './qds-progress-bar.js';
export { QdsRadio, defineCustomElement as defineCustomElementQdsRadio } from './qds-radio.js';
export { QdsSelect, defineCustomElement as defineCustomElementQdsSelect } from './qds-select.js';
export { QdsStandaloneLink, defineCustomElement as defineCustomElementQdsStandaloneLink } from './qds-standalone-link.js';
export { QdsSwitch, defineCustomElement as defineCustomElementQdsSwitch } from './qds-switch.js';
export { QdsTab, defineCustomElement as defineCustomElementQdsTab } from './qds-tab.js';
export { QdsTabbar, defineCustomElement as defineCustomElementQdsTabbar } from './qds-tabbar.js';
export { QdsTable, defineCustomElement as defineCustomElementQdsTable } from './qds-table.js';
export { QdsTableBody, defineCustomElement as defineCustomElementQdsTableBody } from './qds-table-body.js';
export { QdsTableCell, defineCustomElement as defineCustomElementQdsTableCell } from './qds-table-cell.js';
export { QdsTableHead, defineCustomElement as defineCustomElementQdsTableHead } from './qds-table-head.js';
export { QdsTableHeadCell, defineCustomElement as defineCustomElementQdsTableHeadCell } from './qds-table-head-cell.js';
export { QdsTableRow, defineCustomElement as defineCustomElementQdsTableRow } from './qds-table-row.js';
export { QdsTag, defineCustomElement as defineCustomElementQdsTag } from './qds-tag.js';
export { QdsTextarea, defineCustomElement as defineCustomElementQdsTextarea } from './qds-textarea.js';
export { QdsTitle, defineCustomElement as defineCustomElementQdsTitle } from './qds-title.js';
export { QdsTooltip, defineCustomElement as defineCustomElementQdsTooltip } from './qds-tooltip.js';

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
const toClassList = (value) => {
    if (value === undefined)
        return document.documentElement.classList;
    if (typeof value === 'string')
        return document.querySelector(value)?.classList ?? undefined;
    return value.classList;
};
const getVariant = (type, classList) => {
    if (!classList)
        return undefined;
    const prefix = `qds-${type}-`;
    return [...classList]
        .find((value) => value.startsWith(prefix))
        ?.replace(prefix, '');
};
const setVariant = (type, value, element) => {
    const classList = toClassList(element);
    if (classList === undefined)
        return;
    const prefix = `qds-${type}-`;
    const currentVariant = getVariant(type, classList);
    if (currentVariant !== undefined)
        classList.remove(`${prefix}${currentVariant}`);
    classList.add(`${prefix}${value}`);
};
/**
 * Calls all exported `defineCustomElementQds*` functions in the provided
 * module.
 *
 * @param module The module to call the exported functions from.
 */
const defineCustomElements = (module) => {
    for (const [key, value] of Object.entries(module))
        if (typeof value === 'function' && key.startsWith('defineCustomElementQds'))
            value();
};
/**
 * Get the currently set platform.
 *
 * @param element The element where the platform will be retrieved from. Can be
 * either:
 *
 * - A non-empty CSS selector string
 * - A reference to an
 * [`Element`](https://developer.mozilla.org/docs/Web/API/Element)
 *
 * By default, this is the root node of the current document.
 *
 * @returns The currently set platform if one is set, `undefined` otherwise.
 */
const getPlatform = (element) => getVariant('platform', toClassList(element));
/**
 * Sets the current platform.
 *
 * The current platform represented by a `qds-platform-`-prefixed CSS class
 * will be removed.
 *
 * @param platform The platform to set. Must be a non-empty value.
 * @param element The element where the platform will be set. Can be either:
 *
 * - A non-empty CSS selector string
 * - A reference to an
 * [`Element`](https://developer.mozilla.org/docs/Web/API/Element)
 *
 * By default, this is the root node of the current document.
 */
const setPlatform = (platform, element) => {
    setVariant('platform', platform, element);
};
/**
 * Get the currently set theme.
 *
 * @param element The element where the theme will be retrieved from. Can be
 * either:
 *
 * - A non-empty CSS selector string
 * - A reference to an
 * [`Element`](https://developer.mozilla.org/docs/Web/API/Element)
 *
 * By default, this is the root node of the current document.
 *
 * @returns The currently set theme if one is set, `undefined` otherwise.
 */
const getTheme = (element) => getVariant('theme', toClassList(element));
/**
 * Sets the current theme.
 *
 * The current theme represented by a `qds-theme-`-prefixed CSS class will be
 * removed.
 *
 * @param theme The theme to set. Must be a non-empty value.
 * @param element The element where the theme will be set. Can be either:
 *
 * - A non-empty CSS selector string
 * - A reference to an
 * [`Element`](https://developer.mozilla.org/docs/Web/API/Element)
 *
 * By default, this is the root node of the current document.
 */
const setTheme = (theme, element) => {
    setVariant('theme', theme, element);
};

export { defineCustomElements, getPlatform, getTheme, setPlatform, setTheme };

//# sourceMappingURL=index.js.map