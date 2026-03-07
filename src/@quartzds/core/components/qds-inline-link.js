/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, c as createEvent, h } from './p-2806fee1.js';
import { a as attachInternals, p as pickFocusEventAttributes, g as determineLinkIcon } from './p-8abba29b.js';
import { d as defineCustomElement$2 } from './p-ba880369.js';

const inlineLinkCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-icon{flex-shrink:0;height:1.25em;width:1.25em}.qds-inline-link{align-items:center;border-radius:var(--qds-focus-border-radius);display:inline-flex;gap:var(--qds-text-icon-gap);max-width:inherit;width:inherit}.qds-inline-link:focus-visible{outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.qds-disabled{opacity:var(--qds-theme-disabled);pointer-events:none}[data-importance=subdued]{color:var(--qds-theme-link-subdued-default)}[data-importance=subdued]:visited{color:var(--qds-theme-link-visited-default)}[data-importance=subdued]:hover{color:var(--qds-theme-link-subdued-hover)}[data-importance=subdued]:active{color:var(--qds-theme-link-subdued-pressed)}[data-importance=subdued]:visited:hover{color:var(--qds-theme-link-visited-hover)}[data-importance=subdued]:visited:active{color:var(--qds-theme-link-visited-pressed)}[data-importance=standard]{color:var(--qds-theme-link-standard-default)}[data-importance=standard]:visited{color:var(--qds-theme-link-visited-default)}[data-importance=standard]:hover{color:var(--qds-theme-link-standard-hover)}[data-importance=standard]:active{color:var(--qds-theme-link-standard-pressed)}[data-importance=standard]:visited:hover{color:var(--qds-theme-link-visited-hover)}[data-importance=standard]:visited:active{color:var(--qds-theme-link-visited-pressed)}[data-importance=emphasized]{color:var(--qds-theme-link-emphasized-default)}[data-importance=emphasized]:visited{color:var(--qds-theme-link-visited-default)}[data-importance=emphasized]:hover{color:var(--qds-theme-link-emphasized-hover)}[data-importance=emphasized]:active{color:var(--qds-theme-link-emphasized-pressed)}[data-importance=emphasized]:visited:hover{color:var(--qds-theme-link-visited-hover)}[data-importance=emphasized]:visited:active{color:var(--qds-theme-link-visited-pressed)}";
const QdsInlineLinkStyle0 = inlineLinkCss;

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
var _InlineLink_instances, _InlineLink_internals, _InlineLink_computedImportance_get, _InlineLink_onBlur, _InlineLink_onFocus, _InlineLink_onSlotchange;
const InlineLink = /*@__PURE__*/ proxyCustomElement(class InlineLink extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.blurEmitter = createEvent(this, "qdsBlur", 2);
        this.focusEmitter = createEvent(this, "qdsFocus", 2);
        _InlineLink_instances.add(this);
        /**
         * Prevents the inline link from being interacted with: it cannot be pressed
         * or focused.
         */
        this.disabled = false;
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * The inline link's importance.
         */
        this.importance = 'standard';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        _InlineLink_internals.set(this, attachInternals.call(this));
        _InlineLink_onBlur.set(this, (event) => {
            this.blurEmitter.emit(pickFocusEventAttributes(event));
        });
        _InlineLink_onFocus.set(this, (event) => {
            this.focusEmitter.emit(pickFocusEventAttributes(event));
        });
        _InlineLink_onSlotchange.set(this, () => {
            __classPrivateFieldGet(this, _InlineLink_internals, "f").ariaLabel = this.host.textContent;
        });
    }
    onClick(event) {
        if (this.disabled)
            event.stopImmediatePropagation();
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _InlineLink_internals, "f").ariaDisabled = this.disabled.toString();
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        // FIXME: `undefined` instead of `0` causes `qdsFocus/qdsBlur` E2E tests
        // to fail, but it's not clear why this is the case since it works for
        // other components.
        this.tabIndex = Number.isNaN(parsedValue) ? 0 : parsedValue;
    }
    hrefTargetChanged() {
        this.linkIcon = determineLinkIcon(this.href, this.target);
    }
    componentWillLoad() {
        __classPrivateFieldGet(this, _InlineLink_internals, "f").role = 'link';
        this.disabledChanged();
        this.hrefTargetChanged();
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    componentDidLoad() {
        __classPrivateFieldGet(this, _InlineLink_internals, "f").ariaLabel = this.host.textContent;
    }
    render() {
        return (h("a", { key: 'f839676a41fc544de59e0863b1f01090648a6e40', "aria-hidden": "true", class: {
                'qds-inline-link': true,
                'qds-disabled': this.disabled,
            }, "data-importance": __classPrivateFieldGet(this, _InlineLink_instances, "a", _InlineLink_computedImportance_get), download: this.download, href: this.href?.toString(), hrefLang: this.hreflang, onBlur: __classPrivateFieldGet(this, _InlineLink_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _InlineLink_onFocus, "f"), referrerPolicy: this.referrerPolicy, rel: this.rel, tabIndex: this.disabled ? -1 : this.tabIndex, target: this.target }, this.iconName !== undefined && this.iconName !== '' && (h("qds-icon", { key: 'e2046cd8ec2aaaf2b4b367d4e3321098fa7d6a8e', class: "qds-icon", library: this.iconLibrary, name: this.iconName })), h("span", { key: '88079c1b08b6e56ae578f73e392330e313db02bc', class: "qds-text" }, h("slot", { key: 'fd9c072da3e2364a6233b8ad1cc7f50e43684d61', onSlotchange: __classPrivateFieldGet(this, _InlineLink_onSlotchange, "f") })), this.linkIcon && (h("qds-icon", { key: 'bb1bf6c08631539894bbef5c9b87c675d94c853d', class: "qds-icon", library: "core", name: this.linkIcon }))));
    }
    static get delegatesFocus() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "disabled": ["disabledChanged"],
        "tabindex": ["tabindexChanged"],
        "href": ["hrefTargetChanged"],
        "target": ["hrefTargetChanged"]
    }; }
    static get style() { return QdsInlineLinkStyle0; }
}, [17, "qds-inline-link", {
        "disabled": [4],
        "iconName": [1, "icon-name"],
        "iconLibrary": [1, "icon-library"],
        "importance": [1],
        "download": [8],
        "href": [1],
        "hreflang": [1],
        "referrerPolicy": [1, "referrerpolicy"],
        "rel": [1],
        "target": [1],
        "linkIcon": [32],
        "tabIndex": [32]
    }, [[0, "click", "onClick"]], {
        "disabled": ["disabledChanged"],
        "tabindex": ["tabindexChanged"],
        "href": ["hrefTargetChanged"],
        "target": ["hrefTargetChanged"]
    }]);
_InlineLink_internals = new WeakMap(), _InlineLink_onBlur = new WeakMap(), _InlineLink_onFocus = new WeakMap(), _InlineLink_onSlotchange = new WeakMap(), _InlineLink_instances = new WeakSet(), _InlineLink_computedImportance_get = function _InlineLink_computedImportance_get() {
    switch (this.importance) {
        case 'subdued':
        case 'emphasized': {
            return this.importance;
        }
        default: {
            return 'standard';
        }
    }
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-inline-link", "qds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-inline-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InlineLink);
            }
            break;
        case "qds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const QdsInlineLink = InlineLink;
const defineCustomElement = defineCustomElement$1;

export { QdsInlineLink, defineCustomElement };

//# sourceMappingURL=qds-inline-link.js.map