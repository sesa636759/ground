/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
const inheritAttributes = (element, attributes = []) => {
    const attributeObject = {};
    for (const attribute of attributes) {
        const value = element.getAttribute(attribute);
        if (value !== null) {
            attributeObject[attribute] = value;
            element.removeAttribute(attribute);
        }
    }
    return attributeObject;
};
const ariaAttributes = [
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-braillelabel',
    'aria-brailleroledescription',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colindextext',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-description',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowindextext',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'role',
];
/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 *
 * @param element The element that the attributes should be copied from.
 */
const inheritAriaAttributes = (element) => inheritAttributes(element, ariaAttributes);
const prefix = 'Invariant failed';
/**
 * Throws an error if the value is falsy.
 *
 * @param value Value to test.
 * @param message Optional message to display in development builds.
 */
function invariant(value, message) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (value)
        return;
    throw new Error(prefix);
}
/**
 * From an object pick a set of keys.
 *
 * @param object Object to pick from.
 * @param keys They keys to pick.
 * @returns New object with only the picked keys.
 */
const pick = (object, ...keys) => {
    const returnValue = {};
    for (const key of keys)
        returnValue[key] = object[key];
    return returnValue;
};
const pickFocusEventAttributes = (event) => pick(event, 'relatedTarget');
const pickInputEventAttributes = (event) => pick(event, 'data', 'inputType', 'isComposing');
const getConversionFactor = (element, unit) => {
    switch (unit) {
        case 'cm': {
            return 96 / 2.54;
        }
        case 'em': {
            return Number.parseFloat(globalThis.getComputedStyle(element.parentElement ?? document.documentElement).fontSize);
        }
        case 'in': {
            return 96;
        }
        case 'mm': {
            return 96 / 25.4;
        }
        case 'pc': {
            return 16;
        }
        case 'pt': {
            return 96 / 72;
        }
        case 'px': {
            return 1;
        }
        case 'rem': {
            return Number.parseFloat(globalThis.getComputedStyle(document.documentElement).fontSize);
        }
        default: {
            return undefined;
        }
    }
};
const propertyToPx = (element, property) => {
    const value = globalThis.getComputedStyle(element).getPropertyValue(property);
    const number = Number.parseFloat(value);
    if (Number.isNaN(number))
        return undefined;
    const unit = /\s*[\d+.-]*\s*(.*)/.exec(value)?.[1] ?? '';
    const conversionFactor = getConversionFactor(element, unit) ?? 1;
    return number * conversionFactor;
};
const ignorePromise = (promise) => {
    promise.catch(() => {
        invariant(false);
    });
};
const isTouchDevice = () => 'ontouchstart' in globalThis ||
    ('maxTouchPoints' in globalThis && globalThis.navigator.maxTouchPoints > 0);
const roundByDPR = (value) => {
    const dpr = devicePixelRatio || 1;
    return Math.round(value * dpr) / dpr;
};
/**
 * Checks if an element's content is overflowing.
 *
 * @param element The element to check.
 * @returns `true` if overflowing, `false` otherwise.
 */
const isOverflowing = (element) => {
    const { clientHeight, clientWidth, scrollHeight, scrollWidth } = element;
    return scrollHeight > clientHeight + 1 || scrollWidth > clientWidth;
};
const determineLinkIcon = (href, target) => {
    if (href === undefined)
        return undefined;
    let link;
    try {
        link = new URL(href, globalThis.location.href);
    }
    catch {
        return undefined;
    }
    const isExternalLink = link.origin !== globalThis.location.origin;
    const opensInNewTab = target === '_blank';
    if (isExternalLink)
        return opensInNewTab ? 'external-new-tab-link' : 'external-link';
    return opensInNewTab ? 'new-tab-link' : undefined;
};
function attachInternals() {
    // @ts-expect-error: This is very unsafe but it's not possible to do this in
    //                   Stencil.js without creating a form-associated custom
    //                   element.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
    return this.attachInternals();
}
const resolveTarget = (target) => {
    const resolvedTarget = typeof target === 'function' ? target() : target;
    if (typeof resolvedTarget !== 'string')
        return resolvedTarget;
    const element = document.querySelector(resolvedTarget);
    if (element === null)
        throw new Error('String must resolve to an Element.');
    return element;
};

export { attachInternals as a, inheritAriaAttributes as b, invariant as c, propertyToPx as d, roundByDPR as e, ignorePromise as f, determineLinkIcon as g, pickInputEventAttributes as h, isOverflowing as i, isTouchDevice as j, pickFocusEventAttributes as p, resolveTarget as r };

//# sourceMappingURL=helpers-2e4ca34d.js.map