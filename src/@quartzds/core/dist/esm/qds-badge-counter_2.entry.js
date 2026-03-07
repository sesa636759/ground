/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, h } from './index-b1d6acd2.js';

const badgeCounterCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-badge-counter{align-items:center;background-color:var(--qds-theme-feedback-message-neutral);border-radius:var(--qds-control-toggle-indicator-rounded-border-radius);color:var(--qds-theme-feedback-message-neutral-contrast);display:flex;font:var(--qds-badge-standard-text);height:var(--qds-badge-counter-standard-height);justify-content:center;margin:0;padding-inline:var(--qds-badge-standard-padding-horizontal);text-align:center}.qds-stroke-ring{border:var(--qds-badge-border-width) solid var(--qds-theme-feedback-message-neutral-contrast)}.qds-sr-only{clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}[data-importance=emphasized]{background-color:var(--qds-theme-signature-color-contrast);color:var(--qds-theme-signature-color-default)}.qds-stroke-ring[data-importance=emphasized]{border-color:var(--qds-theme-signature-color-default)}[data-importance=subdued]{background-color:var(--qds-theme-feedback-message-informational);color:var(--qds-theme-feedback-message-informational-contrast)}.qds-stroke-ring[data-importance=subdued]{border-color:var(--qds-theme-feedback-message-informational-contrast)}[data-importance=destructive]{background-color:var(--qds-theme-feedback-message-critical-contrast);color:var(--qds-theme-feedback-message-critical)}.qds-stroke-ring[data-importance=destructive]{border-color:var(--qds-theme-feedback-message-critical)}[data-importance=subdued-destructive]{background-color:var(--qds-theme-feedback-message-critical);color:var(--qds-theme-feedback-message-critical-contrast)}.qds-stroke-ring[data-importance=subdued-destructive]{border-color:var(--qds-theme-feedback-message-critical-contrast)}[data-size=small]{font:var(--qds-badge-small-text);height:var(--qds-badge-counter-small-height);padding-inline:var(--qds-badge-small-padding-horizontal)}[data-size=large]{font:var(--qds-badge-large-text);height:var(--qds-badge-counter-large-height);padding-inline:var(--qds-badge-large-padding-horizontal)}[data-size=hero]{font:var(--qds-badge-hero-text);height:var(--qds-badge-counter-hero-height);padding-inline:var(--qds-badge-hero-padding-horizontal)}";
const QdsBadgeCounterStyle0 = badgeCounterCss;

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BadgeCounter_instances, _BadgeCounter_computedValue_get, _BadgeCounter_computedImportance_get, _BadgeCounter_computedSize_get;
const BadgeCounter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            }, "data-importance": __classPrivateFieldGet$1(this, _BadgeCounter_instances, "a", _BadgeCounter_computedImportance_get), "data-size": __classPrivateFieldGet$1(this, _BadgeCounter_instances, "a", _BadgeCounter_computedSize_get) }, __classPrivateFieldGet$1(this, _BadgeCounter_instances, "a", _BadgeCounter_computedValue_get), h("span", { key: '62cf8cdf190ef3bb4b36fce245871d81cd2b7aab', class: "qds-sr-only" }, this.description)));
    }
};
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
BadgeCounter.style = QdsBadgeCounterStyle0;

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
const BadgeIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
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
BadgeIndicator.style = QdsBadgeIndicatorStyle0;

export { BadgeCounter as qds_badge_counter, BadgeIndicator as qds_badge_indicator };

//# sourceMappingURL=qds-badge-counter_2.entry.js.map