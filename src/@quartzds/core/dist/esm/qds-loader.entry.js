/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, h, a as getElement } from './index-b1d6acd2.js';

const loaderCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-loader{border-radius:var(--qds-control-rounded-border-radius);box-sizing:border-box;color:var(--qds-theme-feedback-action-destructive-contrast)}[data-size=small]{height:var(--qds-control-small-icon-size);padding:var(--qds-signature-circle-progress-small-border-width);width:var(--qds-control-small-icon-size)}[data-size=standard]{height:var(--qds-control-standard-icon-size);padding:var(--qds-signature-circle-progress-standard-border-width);width:var(--qds-control-standard-icon-size)}[data-size=large]{height:var(--qds-control-large-icon-size);padding:var(--qds-signature-circle-progress-large-border-width);width:var(--qds-control-large-icon-size)}[data-size=jumbo]{height:var(--qds-control-jumbo-icon-size);padding:var(--qds-signature-circle-progress-jumbo-border-width);width:var(--qds-control-jumbo-icon-size)}[data-status=loading]{animation:a 1s linear infinite;background-image:var(--qds-theme-signature-circle-progress-indeterminate);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}@keyframes a{to{transform:rotate(1turn)}}[data-status=success]{background-color:var(--qds-theme-feedback-result-success)}[data-status=warning]{background-color:var(--qds-theme-feedback-result-partial-success)}[data-status=error]{background-color:var(--qds-theme-feedback-result-failure)}";
const QdsLoaderStyle0 = loaderCss;

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
var _Loader_instances, _Loader_computedSize_get, _Loader_computedStatus_get, _Loader_defineGetter;
const Loader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        _Loader_instances.add(this);
        /**
         * The loader's size.
         */
        this.size = 'standard';
    }
    statusChanged() {
        this.internals.ariaValueNow =
            __classPrivateFieldGet(this, _Loader_instances, "a", _Loader_computedStatus_get) === 'loading'
                ? // eslint-disable-next-line unicorn/no-null
                    null
                : this.internals.ariaValueMax;
    }
    componentWillLoad() {
        this.internals.role = 'progressbar';
        this.internals.ariaValueMin = this.host.ariaValueMin ?? '0';
        this.internals.ariaValueMax = this.host.ariaValueMax ?? '1';
        __classPrivateFieldGet(this, _Loader_instances, "m", _Loader_defineGetter).call(this, 'labels', () => this.internals.labels);
        this.statusChanged();
    }
    render() {
        return __classPrivateFieldGet(this, _Loader_instances, "a", _Loader_computedStatus_get) === 'loading' ? (h("div", { "aria-hidden": "true", class: "qds-loader", "data-size": __classPrivateFieldGet(this, _Loader_instances, "a", _Loader_computedSize_get), "data-status": __classPrivateFieldGet(this, _Loader_instances, "a", _Loader_computedStatus_get) })) : (h("qds-icon", { "aria-hidden": "true", class: "qds-loader", "data-size": __classPrivateFieldGet(this, _Loader_instances, "a", _Loader_computedSize_get), "data-status": __classPrivateFieldGet(this, _Loader_instances, "a", _Loader_computedStatus_get), library: "core", name: `status-${this.status}` }));
    }
    static get formAssociated() { return true; }
    get host() { return getElement(this); }
    static get watchers() { return {
        "status": ["statusChanged"]
    }; }
};
_Loader_instances = new WeakSet(), _Loader_computedSize_get = function _Loader_computedSize_get() {
    switch (this.size) {
        case 'small':
        case 'large':
        case 'jumbo': {
            return this.size;
        }
        default: {
            return 'standard';
        }
    }
}, _Loader_computedStatus_get = function _Loader_computedStatus_get() {
    switch (this.status) {
        case 'error':
        case 'success':
        case 'warning': {
            return this.status;
        }
        default: {
            return 'loading';
        }
    }
}, _Loader_defineGetter = function _Loader_defineGetter(p, get) {
    Object.defineProperty(this.host, p, { enumerable: true, get });
};
Loader.style = QdsLoaderStyle0;

export { Loader as qds_loader };

//# sourceMappingURL=qds-loader.entry.js.map