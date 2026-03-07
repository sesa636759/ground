/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, h, a as getElement } from './index-b1d6acd2.js';
import { b as inheritAriaAttributes } from './helpers-2e4ca34d.js';

const formMessageCss = ":host([hidden]){display:none!important}:host{display:inline-block;line-height:0}.qds-form-message{color:var(--qds-theme-control-text-standard);display:inline-flex;gap:var(--qds-text-icon-gap)}.qds-icon-background,.qds-icon-container{align-items:center;display:flex}.qds-icon-background{border-radius:var(--qds-control-rounded-border-radius)}.qds-icon{color:var(--qds-theme-feedback-action-destructive-contrast)}.qds-sr-only{clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}[data-size=small]{font:var(--qds-control-small-text)}.qds-icon-container[data-size=small]{height:var(--qds-control-small-icon-crop-height)}.qds-icon[data-size=small]{height:var(--qds-control-small-icon-size);width:var(--qds-control-small-icon-size)}.qds-inline[data-size=small]{margin-block:var(--qds-control-small-padding-auto-height)}[data-size=standard]{font:var(--qds-control-standard-text)}.qds-icon-container[data-size=standard]{height:var(--qds-control-standard-icon-crop-height)}.qds-icon[data-size=standard]{height:var(--qds-control-standard-icon-size);width:var(--qds-control-standard-icon-size)}.qds-inline[data-size=standard]{margin-block:var(--qds-control-standard-padding-auto-height)}[data-size=large]{font:var(--qds-control-large-text)}.qds-icon-container[data-size=large]{height:var(--qds-control-large-icon-crop-height)}.qds-icon[data-size=large]{height:var(--qds-control-large-icon-size);width:var(--qds-control-large-icon-size)}.qds-inline[data-size=large]{margin-block:var(--qds-control-large-padding-auto-height)}.qds-icon-background[data-status=error]{background-color:var(--qds-theme-feedback-result-failure)}.qds-text[data-status=error]{color:var(--qds-theme-feedback-result-failure)}[data-status=info].qds-icon-background{background-color:var(--qds-theme-feedback-message-informational)}.qds-icon-background[data-status=success]{background-color:var(--qds-theme-feedback-result-success)}.qds-text[data-status=success]{color:var(--qds-theme-feedback-result-success)}[data-status=warning].qds-icon-background{background-color:var(--qds-theme-feedback-result-partial-success)}";
const QdsFormMessageStyle0 = formMessageCss;

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
var _FormMessage_instances, _FormMessage_inheritedAttributes, _FormMessage_computedSize_get, _FormMessage_computedStatus_get;
const FormMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        _FormMessage_instances.add(this);
        /**
         * Adds vertical margin to the form message for alignment.
         *
         * This is useful when creating inline layouts so that the first lines have
         * the correct vertical centering.
         */
        this.inline = false;
        /**
         * The form message's size.
         */
        this.size = 'standard';
        /**
         * The form message's status.
         */
        this.status = 'error';
        _FormMessage_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _FormMessage_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (h("span", { key: '4ef649d8c5a28d6e7fdd40701808c7e11c5f5d1b', class: {
                'qds-form-message': true,
                'qds-inline': this.inline,
            }, "data-size": __classPrivateFieldGet(this, _FormMessage_instances, "a", _FormMessage_computedSize_get), ...__classPrivateFieldGet(this, _FormMessage_inheritedAttributes, "f") }, h("div", { key: '5b4c24c3212a1be080b984b7980ae9007b0d4058', class: "qds-icon-container", "data-size": __classPrivateFieldGet(this, _FormMessage_instances, "a", _FormMessage_computedSize_get) }, h("div", { key: '4ad9113efb96a0a838e1d7c7e74c696a1fd39d10', class: "qds-icon-background", "data-size": __classPrivateFieldGet(this, _FormMessage_instances, "a", _FormMessage_computedSize_get), "data-status": this.status }, h("qds-icon", { key: '20d176ec6474585c36c6357931f047e6dd49b352', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _FormMessage_instances, "a", _FormMessage_computedSize_get), name: `status-${this.status}`, library: "core" }), h("span", { key: 'e3e573bede77a2c328fa954fbe6897624b4743c8', class: "qds-sr-only" }, this.statusDescription))), h("span", { key: '90f50abc3abd90e5e33bff33ec9530696a62a8e8', class: "qds-text", "data-status": __classPrivateFieldGet(this, _FormMessage_instances, "a", _FormMessage_computedStatus_get) }, this.text)));
    }
    get host() { return getElement(this); }
};
_FormMessage_inheritedAttributes = new WeakMap(), _FormMessage_instances = new WeakSet(), _FormMessage_computedSize_get = function _FormMessage_computedSize_get() {
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
}, _FormMessage_computedStatus_get = function _FormMessage_computedStatus_get() {
    return this.status ?? 'error';
};
FormMessage.style = QdsFormMessageStyle0;

export { FormMessage as qds_form_message };

//# sourceMappingURL=qds-form-message.entry.js.map