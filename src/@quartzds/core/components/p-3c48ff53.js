/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, h } from './p-2806fee1.js';

const badgeCounterCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-badge-counter{align-items:center;background-color:var(--qds-theme-feedback-message-neutral);border-radius:var(--qds-control-toggle-indicator-rounded-border-radius);color:var(--qds-theme-feedback-message-neutral-contrast);display:flex;font:var(--qds-badge-standard-text);height:var(--qds-badge-counter-standard-height);justify-content:center;margin:0;padding-inline:var(--qds-badge-standard-padding-horizontal);text-align:center}.qds-stroke-ring{border:var(--qds-badge-border-width) solid var(--qds-theme-feedback-message-neutral-contrast)}.qds-sr-only{clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}[data-importance=emphasized]{background-color:var(--qds-theme-signature-color-contrast);color:var(--qds-theme-signature-color-default)}.qds-stroke-ring[data-importance=emphasized]{border-color:var(--qds-theme-signature-color-default)}[data-importance=subdued]{background-color:var(--qds-theme-feedback-message-informational);color:var(--qds-theme-feedback-message-informational-contrast)}.qds-stroke-ring[data-importance=subdued]{border-color:var(--qds-theme-feedback-message-informational-contrast)}[data-importance=destructive]{background-color:var(--qds-theme-feedback-message-critical-contrast);color:var(--qds-theme-feedback-message-critical)}.qds-stroke-ring[data-importance=destructive]{border-color:var(--qds-theme-feedback-message-critical)}[data-importance=subdued-destructive]{background-color:var(--qds-theme-feedback-message-critical);color:var(--qds-theme-feedback-message-critical-contrast)}.qds-stroke-ring[data-importance=subdued-destructive]{border-color:var(--qds-theme-feedback-message-critical-contrast)}[data-size=small]{font:var(--qds-badge-small-text);height:var(--qds-badge-counter-small-height);padding-inline:var(--qds-badge-small-padding-horizontal)}[data-size=large]{font:var(--qds-badge-large-text);height:var(--qds-badge-counter-large-height);padding-inline:var(--qds-badge-large-padding-horizontal)}[data-size=hero]{font:var(--qds-badge-hero-text);height:var(--qds-badge-counter-hero-height);padding-inline:var(--qds-badge-hero-padding-horizontal)}";
const QdsBadgeCounterStyle0 = badgeCounterCss;

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BadgeCounter_instances, _BadgeCounter_computedValue_get, _BadgeCounter_computedImportance_get, _BadgeCounter_computedSize_get;
const BadgeCounter = /*@__PURE__*/ proxyCustomElement(class BadgeCounter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _BadgeCounter_instances.add(this);
        /**
         * The badge counter's importance.
         */
        this.importance = 'standard';
        /**
         * The badge counter's size.
         */
        this.size = 'standard';
        /**
         * Shows a stroke ring around the component for better visibility
         */
        this.strokeRing = false;
    }
    render() {
        return (h("span", { key: 'c10f61ebe0ba000dad466c46e9565a5422cf8207', class: {
                'qds-badge-counter': true,
                'qds-stroke-ring': this.strokeRing,
            }, "data-importance": __classPrivateFieldGet(this, _BadgeCounter_instances, "a", _BadgeCounter_computedImportance_get), "data-size": __classPrivateFieldGet(this, _BadgeCounter_instances, "a", _BadgeCounter_computedSize_get) }, __classPrivateFieldGet(this, _BadgeCounter_instances, "a", _BadgeCounter_computedValue_get), h("span", { key: '62cf8cdf190ef3bb4b36fce245871d81cd2b7aab', class: "qds-sr-only" }, this.description)));
    }
    static get style() { return QdsBadgeCounterStyle0; }
}, [1, "qds-badge-counter", {
        "description": [1],
        "importance": [1],
        "size": [1],
        "strokeRing": [4, "stroke-ring"],
        "value": [8]
    }]);
_BadgeCounter_instances = new WeakSet(), _BadgeCounter_computedValue_get = function _BadgeCounter_computedValue_get() {
    const value = typeof this.value === 'string'
        ? Number.parseInt(this.value, 10)
        : // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            (this.value ?? Number.NaN);
    if (Number.isNaN(value) || value < 0)
        return '';
    return value < 100 ? value.toString() : '99+';
}, _BadgeCounter_computedImportance_get = function _BadgeCounter_computedImportance_get() {
    switch (this.importance) {
        case 'subdued':
        case 'destructive':
        case 'subdued-destructive':
        case 'emphasized': {
            return this.importance;
        }
        default: {
            return 'standard';
        }
    }
}, _BadgeCounter_computedSize_get = function _BadgeCounter_computedSize_get() {
    switch (this.size) {
        case 'hero':
        case 'large':
        case 'small': {
            return this.size;
        }
        default: {
            return 'standard';
        }
    }
};
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-badge-counter"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-badge-counter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BadgeCounter);
            }
            break;
    } });
}

export { BadgeCounter as B, defineCustomElement as d };

//# sourceMappingURL=p-3c48ff53.js.map