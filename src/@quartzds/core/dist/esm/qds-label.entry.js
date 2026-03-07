/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, h } from './index-b1d6acd2.js';
import { i as isOverflowing } from './helpers-2e4ca34d.js';

const labelCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-label{box-sizing:border-box;color:var(--qds-theme-control-text-standard);display:inline-flex;gap:var(--qds-text-icon-gap)}.qds-label:focus-visible{border-radius:var(--qds-focus-border-radius);outline:var(--qds-focus-border-width) solid var(--qds-theme-focus-border);outline-offset:var(--qds-focus-border-offset)}.qds-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.qds-required{color:var(--qds-theme-feedback-field-required);-webkit-user-select:none;user-select:none}[data-size=small]{font:var(--qds-control-small-text)}.qds-inline[data-size=small]{margin-block:var(--qds-control-small-padding-auto-height)}[data-size=standard]{font:var(--qds-control-standard-text)}.qds-inline[data-size=standard]{margin-block:var(--qds-control-standard-padding-auto-height)}[data-size=large]{font:var(--qds-control-large-text)}.qds-inline[data-size=large]{margin-block:var(--qds-control-large-padding-auto-height)}";
const QdsLabelStyle0 = labelCss;

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
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Label_instances, _Label_label, _Label_ro, _Label_span, _Label_computedSize_get, _Label_labelRef, _Label_spanRef, _Label_tooltipRef;
const Label = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        _Label_instances.add(this);
        /**
         * Adds vertical margin to the label for alignment.
         *
         * This is useful when creating inline layouts so that the first lines have
         * the correct vertical centering.
         */
        this.inline = false;
        /**
         * Specify the labelled item as required by appending a red asterisk (*).
         */
        this.required = false;
        /**
         * The label's size.
         */
        this.size = 'standard';
        this.tooltip = false;
        _Label_label.set(this, void 0);
        _Label_ro.set(this, void 0);
        _Label_span.set(this, void 0);
        _Label_labelRef.set(this, (label) => {
            __classPrivateFieldSet(this, _Label_label, label, "f");
        });
        _Label_spanRef.set(this, (span) => {
            __classPrivateFieldSet(this, _Label_span, span, "f");
        });
        _Label_tooltipRef.set(this, (tooltip) => {
            if (tooltip)
                // eslint-disable-next-line no-param-reassign
                tooltip.target = __classPrivateFieldGet(this, _Label_label, "f");
        });
    }
    textChanged() {
        if (__classPrivateFieldGet(this, _Label_ro, "f"))
            __classPrivateFieldGet(this, _Label_ro, "f").disconnect();
        if (!__classPrivateFieldGet(this, _Label_span, "f"))
            return;
        this.tooltip = isOverflowing(__classPrivateFieldGet(this, _Label_span, "f"));
        __classPrivateFieldSet(this, _Label_ro, new ResizeObserver(([spanEntry]) => {
            this.tooltip = isOverflowing(spanEntry.target);
        }), "f");
        __classPrivateFieldGet(this, _Label_ro, "f").observe(__classPrivateFieldGet(this, _Label_span, "f"));
    }
    componentDidLoad() {
        this.textChanged();
    }
    disconnectedCallback() {
        if (__classPrivateFieldGet(this, _Label_ro, "f"))
            __classPrivateFieldGet(this, _Label_ro, "f").disconnect();
    }
    render() {
        return (h("span", { key: '87f5b083f2433de63705377cd25132dd4b9a4ec8', class: {
                'qds-inline': this.inline,
                'qds-label': true,
            }, "data-size": __classPrivateFieldGet(this, _Label_instances, "a", _Label_computedSize_get), ref: __classPrivateFieldGet(this, _Label_labelRef, "f"),
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex: this.tooltip ? 0 : undefined }, this.required && h("span", { key: '46a398ab4adb384d7117fd327a1c2dd9a3567a9e', class: "qds-required" }, "*"), h("span", { key: 'c62c558ab3a364c9310a6eaa0571d33a78675a13', class: "qds-text", ref: __classPrivateFieldGet(this, _Label_spanRef, "f") }, this.text), this.tooltip && (h("qds-tooltip", { key: 'ddfb792feda73cad459fbfbc823cd2b84a11ed42', "aria-hidden": "true", ref: __classPrivateFieldGet(this, _Label_tooltipRef, "f") }, this.text))));
    }
    static get watchers() { return {
        "text": ["textChanged"]
    }; }
};
_Label_label = new WeakMap(), _Label_ro = new WeakMap(), _Label_span = new WeakMap(), _Label_labelRef = new WeakMap(), _Label_spanRef = new WeakMap(), _Label_tooltipRef = new WeakMap(), _Label_instances = new WeakSet(), _Label_computedSize_get = function _Label_computedSize_get() {
    switch (this.size) {
        case 'standard':
        case 'small':
        case 'large': {
            return this.size;
        }
        default: {
            return 'standard';
        }
    }
};
Label.style = QdsLabelStyle0;

export { Label as qds_label };

//# sourceMappingURL=qds-label.entry.js.map