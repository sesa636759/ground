/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, h } from './p-2806fee1.js';
import { d as defineCustomElement$2 } from './p-ba880369.js';

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
const Loader = /*@__PURE__*/ proxyCustomElement(class Loader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.internals = this.attachInternals();
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
    get host() { return this; }
    static get watchers() { return {
        "status": ["statusChanged"]
    }; }
    static get style() { return QdsLoaderStyle0; }
}, [65, "qds-loader", {
        "size": [1],
        "status": [1]
    }, undefined, {
        "status": ["statusChanged"]
    }]);
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
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-loader", "qds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-loader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Loader);
            }
            break;
        case "qds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const QdsLoader = Loader;
const defineCustomElement = defineCustomElement$1;

export { QdsLoader, defineCustomElement };

//# sourceMappingURL=qds-loader.js.map