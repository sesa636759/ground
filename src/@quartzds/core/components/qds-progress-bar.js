/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, h } from './p-2806fee1.js';

const progressBarCss = ":host([hidden]){display:none!important}:host{display:block;width:100%}.qds-bar,.qds-track{overflow:hidden}.qds-track{background-color:var(--qds-theme-control-slider-track-inactive)}.qds-bar,.qds-track{border-radius:var(--qds-signature-line-progress-cap-radius)}.qds-bar{background-color:var(--qds-theme-signature-line-progress-determinate);transition:width .6s cubic-bezier(.83,0,.17,1)}@media (prefers-reduced-motion){.qds-bar{transition:none}}.qds-indeterminate{animation:b 2s linear infinite;background-color:initial;background-image:var(--qds-theme-signature-line-progress-indeterminate)}@keyframes b{0%{transform:translateX(-100%)}to{transform:translateX(200%)}}[data-size=small]{height:var(--qds-signature-line-progress-small-height)}[data-size=standard]{height:var(--qds-signature-line-progress-standard-height)}[data-size=large]{height:var(--qds-signature-line-progress-large-height)}";
const QdsProgressBarStyle0 = progressBarCss;

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProgressBar_instances, _ProgressBar_localMax, _ProgressBar_localValue, _ProgressBar_position, _ProgressBar_computedSize_get, _ProgressBar_positionChanged, _ProgressBar_defineGetter;
const ProgressBar = /*@__PURE__*/ proxyCustomElement(class ProgressBar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.internals = this.attachInternals();
        _ProgressBar_instances.add(this);
        /**
         * The progress bar's size.
         */
        this.size = 'standard';
        /**
         * Returns a list of the [`<label>`][] elements associated with the
         * `qds-progress-bar` element.
         *
         * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
         *
         * @readonly
         * @webnative
         */
        this.labels = {};
        /**
         * Returns the result of dividing the current value (`value`) by the maximum
         * value (`max`); if the progress bar is an indeterminate progress bar, it
         * returns `-1`.
         *
         * @readonly
         * @webnative
         */
        this.position = -1;
        this.width = '0%';
        _ProgressBar_localMax.set(this, 1);
        _ProgressBar_localValue.set(this, 0);
        _ProgressBar_position.set(this, -1);
    }
    maxChanged() {
        const max = typeof this.max === 'string' ? Number.parseFloat(this.max) : this.max;
        __classPrivateFieldSet(this, _ProgressBar_localMax, max === undefined || Number.isNaN(max) || max < 0 ? 1 : max, "f");
        this.internals.ariaValueMax = __classPrivateFieldGet(this, _ProgressBar_localMax, "f").toString();
        __classPrivateFieldGet(this, _ProgressBar_instances, "m", _ProgressBar_positionChanged).call(this);
    }
    valueChanged() {
        const value = typeof this.value === 'string'
            ? Number.parseFloat(this.value)
            : this.value;
        __classPrivateFieldSet(this, _ProgressBar_localValue, value === undefined || Number.isNaN(value) || value < 0 ? 0 : value, "f");
        this.internals.ariaValueNow =
            // eslint-disable-next-line unicorn/no-null
            this.value === undefined ? null : __classPrivateFieldGet(this, _ProgressBar_localValue, "f").toString();
        __classPrivateFieldGet(this, _ProgressBar_instances, "m", _ProgressBar_positionChanged).call(this);
    }
    componentWillLoad() {
        this.internals.role = 'progressbar';
        __classPrivateFieldGet(this, _ProgressBar_instances, "m", _ProgressBar_defineGetter).call(this, 'labels', () => this.internals.labels);
        __classPrivateFieldGet(this, _ProgressBar_instances, "m", _ProgressBar_defineGetter).call(this, 'position', () => __classPrivateFieldGet(this, _ProgressBar_position, "f"));
        this.maxChanged();
        this.valueChanged();
    }
    render() {
        return (h("div", { key: 'a27fc224ae0a302c1303a7f8e3495b7085078b5f', "aria-hidden": "true", class: "qds-track", "data-size": __classPrivateFieldGet(this, _ProgressBar_instances, "a", _ProgressBar_computedSize_get) }, h("div", { key: '35b538fed23adf5c01bc92c00dd9cf220ddd0634', class: {
                'qds-bar': true,
                'qds-indeterminate': __classPrivateFieldGet(this, _ProgressBar_position, "f") === -1,
            }, "data-size": __classPrivateFieldGet(this, _ProgressBar_instances, "a", _ProgressBar_computedSize_get), style: { width: this.width } })));
    }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "max": ["maxChanged"],
        "value": ["valueChanged"]
    }; }
    static get style() { return QdsProgressBarStyle0; }
}, [65, "qds-progress-bar", {
        "size": [1],
        "labels": [16],
        "max": [8],
        "position": [2],
        "value": [8],
        "width": [32]
    }, undefined, {
        "max": ["maxChanged"],
        "value": ["valueChanged"]
    }]);
_ProgressBar_localMax = new WeakMap(), _ProgressBar_localValue = new WeakMap(), _ProgressBar_position = new WeakMap(), _ProgressBar_instances = new WeakSet(), _ProgressBar_computedSize_get = function _ProgressBar_computedSize_get() {
    switch (this.size) {
        case 'small':
        case 'large': {
            return this.size;
        }
        default: {
            return 'standard';
        }
    }
}, _ProgressBar_positionChanged = function _ProgressBar_positionChanged() {
    if (this.value === undefined) {
        __classPrivateFieldSet(this, _ProgressBar_position, -1, "f");
        this.width = '50%';
        return;
    }
    __classPrivateFieldSet(this, _ProgressBar_position, __classPrivateFieldGet(this, _ProgressBar_localValue, "f") / __classPrivateFieldGet(this, _ProgressBar_localMax, "f"), "f");
    this.width = `${Math.min(__classPrivateFieldGet(this, _ProgressBar_position, "f") * 100, 100)}%`;
}, _ProgressBar_defineGetter = function _ProgressBar_defineGetter(p, get) {
    Object.defineProperty(this.host, p, { enumerable: true, get });
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-progress-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-progress-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProgressBar);
            }
            break;
    } });
}

const QdsProgressBar = ProgressBar;
const defineCustomElement = defineCustomElement$1;

export { QdsProgressBar, defineCustomElement };

//# sourceMappingURL=qds-progress-bar.js.map