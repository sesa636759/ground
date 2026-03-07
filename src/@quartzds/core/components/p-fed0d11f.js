/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, h } from './p-2806fee1.js';

const badgeIndicatorCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-badge-indicator{align-items:center;background-color:var(--qds-theme-feedback-message-neutral);border-radius:var(--qds-control-toggle-indicator-rounded-border-radius);display:flex;height:var(--qds-badge-indicator-standard-height);justify-content:center;width:var(--qds-badge-indicator-standard-height)}.qds-stroke-ring{border:var(--qds-badge-border-width) solid var(--qds-theme-feedback-message-neutral-contrast)}.qds-sr-only{clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}[data-status=error]{background-color:var(--qds-theme-feedback-message-critical)}.qds-stroke-ring[data-status=error]{border-color:var(--qds-theme-feedback-message-neutral-contrast)}[data-status=info]{background-color:var(--qds-theme-feedback-message-informational)}.qds-stroke-ring[data-status=info]{border-color:var(--qds-theme-feedback-message-neutral-contrast)}[data-status=neutral]{background-color:var(--qds-theme-feedback-availability-unavailable)}.qds-stroke-ring[data-status=neutral]{border-color:var(--qds-theme-feedback-message-neutral-contrast)}[data-status=success]{background-color:var(--qds-theme-signature-color-default)}.qds-stroke-ring[data-status=success]{border-color:var(--qds-theme-feedback-message-neutral-contrast)}[data-status=warning]{background-color:var(--qds-theme-feedback-message-important)}.qds-stroke-ring[data-status=warning]{border-color:var(--qds-theme-feedback-message-neutral-contrast)}[data-size=small]{height:var(--qds-badge-indicator-small-height);width:var(--qds-badge-indicator-small-height)}[data-size=standard]{height:var(--qds-badge-indicator-standard-height);width:var(--qds-badge-indicator-standard-height)}[data-size=large]{height:var(--qds-badge-indicator-large-height);width:var(--qds-badge-indicator-large-height)}[data-size=hero]{height:var(--qds-badge-indicator-hero-height);width:var(--qds-badge-indicator-hero-height)}";
const QdsBadgeIndicatorStyle0 = badgeIndicatorCss;

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
var _BadgeIndicator_instances, _BadgeIndicator_computedStatus_get, _BadgeIndicator_computedSize_get;
const BadgeIndicator = /*@__PURE__*/ proxyCustomElement(class BadgeIndicator extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _BadgeIndicator_instances.add(this);
        /**
         * The badge indicator's size.
         */
        this.size = 'standard';
        /**
         * The badge indicator's status.
         */
        this.status = 'neutral';
        /**
         * Shows a stroke ring around the badge indicator for better visibility.
         */
        this.strokeRing = false;
    }
    render() {
        return (h("div", { key: 'fbbd2e4f60e31f9d339146c76c53aa1eda61c7a3', class: {
                'qds-badge-indicator': true,
                'qds-stroke-ring': this.strokeRing,
            }, "data-size": __classPrivateFieldGet(this, _BadgeIndicator_instances, "a", _BadgeIndicator_computedSize_get), "data-status": __classPrivateFieldGet(this, _BadgeIndicator_instances, "a", _BadgeIndicator_computedStatus_get) }, h("span", { key: '6d6ffc1d4d2bc42af510fb01756589da89c02675', class: "qds-sr-only" }, this.description)));
    }
    static get style() { return QdsBadgeIndicatorStyle0; }
}, [1, "qds-badge-indicator", {
        "description": [1],
        "size": [1],
        "status": [1],
        "strokeRing": [4, "stroke-ring"]
    }]);
_BadgeIndicator_instances = new WeakSet(), _BadgeIndicator_computedStatus_get = function _BadgeIndicator_computedStatus_get() {
    switch (this.status) {
        case 'error':
        case 'info':
        case 'success':
        case 'warning': {
            return this.status;
        }
        default: {
            return 'neutral';
        }
    }
}, _BadgeIndicator_computedSize_get = function _BadgeIndicator_computedSize_get() {
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
    const components = ["qds-badge-indicator"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-badge-indicator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BadgeIndicator);
            }
            break;
    } });
}

export { BadgeIndicator as B, defineCustomElement as d };

//# sourceMappingURL=p-fed0d11f.js.map