/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const library = require('./library-41b19b9e.js');
require('./index-523dd2e0.js');

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

exports.registerIconLibrary = library.registerIconLibrary;
exports.unregisterIconLibrary = library.unregisterIconLibrary;
exports.defineCustomElements = defineCustomElements;
exports.getPlatform = getPlatform;
exports.getTheme = getTheme;
exports.setPlatform = setPlatform;
exports.setTheme = setTheme;

//# sourceMappingURL=index.cjs.js.map