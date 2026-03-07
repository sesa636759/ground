/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, h, F as Fragment } from './p-2806fee1.js';
import { i as inheritAriaAttributes } from './p-8abba29b.js';
import { d as defineCustomElement$2 } from './p-fed0d11f.js';
import { d as defineCustomElement$1 } from './p-ba880369.js';

const tagCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-tag{align-items:center;border-radius:var(--qds-control-rounded-border-radius);box-sizing:border-box;display:inline-flex;justify-content:center;max-width:inherit;min-width:inherit;width:inherit}.qds-text{text-overflow:ellipsis}.qds-sr-only,.qds-text{overflow:hidden;white-space:nowrap}.qds-sr-only{clip:rect(0 0 0 0);height:1px;margin:-1px;padding:0;position:absolute;width:1px}.qds-icon{flex-shrink:0}[data-status=error]{color:var(--qds-theme-feedback-message-critical)}[data-status=success]{color:var(--qds-theme-feedback-message-success)}[data-status=warning]{color:var(--qds-theme-feedback-message-important)}[data-status=info]{color:var(--qds-theme-feedback-message-informational)}[data-status=neutral]{color:var(--qds-theme-feedback-message-neutral)}[data-importance=subdued] .qds-text{color:var(--qds-theme-control-text-standard)}[data-importance=standard][data-status=error]{background-color:var(--qds-theme-feedback-message-critical-dimmed)}[data-importance=standard][data-status=success]{background-color:var(--qds-theme-feedback-message-success-dimmed)}[data-importance=standard][data-status=warning]{background-color:var(--qds-theme-feedback-message-important-dimmed)}[data-importance=standard][data-status=info]{background-color:var(--qds-theme-feedback-message-informational-dimmed)}[data-importance=standard][data-status=neutral]{background-color:var(--qds-theme-feedback-message-neutral-dimmed)}[data-importance=emphasized][data-status=error]{background-color:var(--qds-theme-feedback-message-critical);color:var(--qds-theme-feedback-message-critical-contrast)}[data-importance=emphasized][data-status=success]{background-color:var(--qds-theme-feedback-message-success);color:var(--qds-theme-feedback-message-success-contrast)}[data-importance=emphasized][data-status=warning]{background-color:var(--qds-theme-feedback-message-important);color:var(--qds-theme-feedback-message-important-contrast)}[data-importance=emphasized][data-status=info]{background-color:var(--qds-theme-feedback-message-informational);color:var(--qds-theme-feedback-message-informational-contrast)}[data-importance=emphasized][data-status=neutral]{background-color:var(--qds-theme-feedback-message-neutral);color:var(--qds-theme-feedback-message-neutral-contrast)}.qds-tag[data-size=small]{font:var(--qds-control-small-text);gap:var(--qds-control-small-gap-internal);height:var(--qds-control-small-height);padding-inline:var(--qds-control-chip-small-padding-horizontal)}.qds-icon[data-size=small]{height:var(--qds-control-small-icon-size);width:var(--qds-control-small-icon-size)}.qds-tag[data-size=standard]{font:var(--qds-control-standard-text);gap:var(--qds-control-standard-gap-internal);height:var(--qds-control-standard-height);padding-inline:var(--qds-control-chip-standard-padding-horizontal)}.qds-icon[data-size=standard]{height:var(--qds-control-standard-icon-size);width:var(--qds-control-standard-icon-size)}.qds-tag[data-size=large]{font:var(--qds-control-large-text);gap:var(--qds-control-large-gap-internal);height:var(--qds-control-large-height);padding-inline:var(--qds-control-chip-large-padding-horizontal)}.qds-icon[data-size=large]{height:var(--qds-control-large-icon-size);width:var(--qds-control-large-icon-size)}";
const QdsTagStyle0 = tagCss;

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
var _Tag_instances, _Tag_inheritedAttributes, _Tag_computedImportance_get, _Tag_computedSize_get, _Tag_computedStatus_get, _Tag_hasBadge_get;
const Tag = /*@__PURE__*/ proxyCustomElement(class Tag extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _Tag_instances.add(this);
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * The tag's importance.
         */
        this.importance = 'standard';
        /**
         * The tag's status.
         */
        this.status = 'neutral';
        /**
         * The tag's size.
         */
        this.size = 'standard';
        /**
         * Displays an indicator if `true`.
         */
        this.badge = false;
        _Tag_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Tag_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (h("span", { key: '85725dcb77777d3611e29f89858b98523a121fef', class: "qds-tag", "data-importance": __classPrivateFieldGet(this, _Tag_instances, "a", _Tag_computedImportance_get), "data-size": __classPrivateFieldGet(this, _Tag_instances, "a", _Tag_computedSize_get), "data-status": __classPrivateFieldGet(this, _Tag_instances, "a", _Tag_computedStatus_get), ...__classPrivateFieldGet(this, _Tag_inheritedAttributes, "f") }, this.iconName !== undefined && this.iconName !== '' ? (h(Fragment, null, this.iconDescription !== undefined &&
            this.iconDescription !== '' && (h("span", { class: "qds-sr-only" }, this.iconDescription)), h("qds-icon", { "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Tag_instances, "a", _Tag_computedSize_get), library: this.iconLibrary, name: this.iconName }))) : (__classPrivateFieldGet(this, _Tag_instances, "a", _Tag_hasBadge_get) && (h("qds-badge-indicator", { status: __classPrivateFieldGet(this, _Tag_instances, "a", _Tag_computedStatus_get), description: this.badgeDescription, size: __classPrivateFieldGet(this, _Tag_instances, "a", _Tag_computedSize_get), strokeRing: true }))), h("span", { key: 'e585f7b37f91ff96586676b65d52bce026df9d10', class: "qds-text" }, this.text)));
    }
    get host() { return this; }
    static get style() { return QdsTagStyle0; }
}, [1, "qds-tag", {
        "iconName": [1, "icon-name"],
        "iconLibrary": [1, "icon-library"],
        "importance": [1],
        "status": [1],
        "size": [1],
        "text": [1],
        "iconDescription": [1, "icon-description"],
        "badge": [4],
        "badgeDescription": [1, "badge-description"]
    }]);
_Tag_inheritedAttributes = new WeakMap(), _Tag_instances = new WeakSet(), _Tag_computedImportance_get = function _Tag_computedImportance_get() {
    switch (this.importance) {
        case 'subdued':
        case 'emphasized': {
            return this.importance;
        }
        default: {
            return 'standard';
        }
    }
}, _Tag_computedSize_get = function _Tag_computedSize_get() {
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
}, _Tag_computedStatus_get = function _Tag_computedStatus_get() {
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
}, _Tag_hasBadge_get = function _Tag_hasBadge_get() {
    return (this.badge ?? false) && this.importance !== 'emphasized';
};
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-tag", "qds-badge-indicator", "qds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-tag":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tag);
            }
            break;
        case "qds-badge-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "qds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Tag as T, defineCustomElement as d };

//# sourceMappingURL=p-a6310886.js.map