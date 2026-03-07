/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

const standaloneLinkCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-icon-crop{align-items:center;display:flex;justify-content:center}.qds-icon{flex-shrink:0;transform:scaleX(var(--qds-direction-factor,1))}.qds-standalone-link{border-radius:var(--qds-focus-border-radius);box-sizing:border-box;display:inline-flex;justify-content:center;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-text-decoration:none;text-decoration:none;width:100%}.qds-standalone-link:focus-visible{outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-standalone-link:active,.qds-standalone-link:hover{-webkit-text-decoration:underline;text-decoration:underline}.qds-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}[data-importance=subdued]{color:var(--qds-theme-link-subdued-default)}.qds-visitable[data-importance=subdued]:visited{color:var(--qds-theme-link-visited-default)}[data-importance=subdued]:hover{color:var(--qds-theme-link-subdued-hover)}[data-importance=subdued]:active{color:var(--qds-theme-link-subdued-pressed)}.qds-visitable[data-importance=subdued]:visited:hover{color:var(--qds-theme-link-visited-hover)}.qds-visitable[data-importance=subdued]:visited:active{color:var(--qds-theme-link-visited-pressed)}[data-importance=standard]{color:var(--qds-theme-link-standard-default)}.qds-visitable[data-importance=standard]:visited{color:var(--qds-theme-link-visited-default)}[data-importance=standard]:hover{color:var(--qds-theme-link-standard-hover)}[data-importance=standard]:active{color:var(--qds-theme-link-standard-pressed)}.qds-visitable[data-importance=standard]:visited:hover{color:var(--qds-theme-link-visited-hover)}.qds-visitable[data-importance=standard]:visited:active{color:var(--qds-theme-link-visited-pressed)}[data-importance=emphasized]{color:var(--qds-theme-link-emphasized-default)}.qds-visitable[data-importance=emphasized]:visited{color:var(--qds-theme-link-visited-default)}[data-importance=emphasized]:hover{color:var(--qds-theme-link-emphasized-hover)}[data-importance=emphasized]:active{color:var(--qds-theme-link-emphasized-pressed)}.qds-visitable[data-importance=emphasized]:visited:hover{color:var(--qds-theme-link-visited-hover)}.qds-visitable[data-importance=emphasized]:visited:active{color:var(--qds-theme-link-visited-pressed)}.qds-disabled{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-standalone-link[data-size=small]{font:var(--qds-control-small-link);gap:var(--qds-control-small-gap-internal);padding-block:var(--qds-control-small-padding-auto-height)}[data-size=small][data-importance=subdued]{font:var(--qds-control-small-text)}.qds-icon-crop[data-size=small]{height:var(--qds-control-small-icon-crop-height)}.qds-icon[data-size=small]{height:var(--qds-control-small-icon-size);width:var(--qds-control-small-icon-size)}.qds-standalone-link[data-size=standard]{font:var(--qds-control-standard-link);gap:var(--qds-control-standard-gap-internal);padding-block:var(--qds-control-standard-padding-auto-height)}[data-size=standard][data-importance=subdued]{font:var(--qds-control-standard-text)}.qds-icon-crop[data-size=standard]{height:var(--qds-control-standard-icon-crop-height)}.qds-icon[data-size=standard]{height:var(--qds-control-standard-icon-size);width:var(--qds-control-standard-icon-size)}.qds-standalone-link[data-size=large]{font:var(--qds-control-large-link);gap:var(--qds-control-large-gap-internal);padding-block:var(--qds-control-large-padding-auto-height)}[data-size=large][data-importance=subdued]{font:var(--qds-control-large-text)}.qds-icon-crop[data-size=large]{height:var(--qds-control-large-icon-crop-height)}.qds-icon[data-size=large]{height:var(--qds-control-large-icon-size);width:var(--qds-control-large-icon-size)}";
const QdsStandaloneLinkStyle0 = standaloneLinkCss;

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
var _StandaloneLink_instances, _StandaloneLink_internals, _StandaloneLink_computedImportance_get, _StandaloneLink_computedSize_get, _StandaloneLink_onBlur, _StandaloneLink_onFocus, _StandaloneLink_onSlotchange;
const StandaloneLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.blurEmitter = index.createEvent(this, "qdsBlur", 2);
        this.focusEmitter = index.createEvent(this, "qdsFocus", 2);
        _StandaloneLink_instances.add(this);
        /**
         * Prevents the standalone link from being interacted with: it cannot be pressed
         * or focused.
         */
        this.disabled = false;
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * The standalone link's importance.
         */
        this.importance = 'standard';
        /**
         * The standalone link's size.
         */
        this.size = 'standard';
        /**
         * Defines if the standalone link will display the visited state.
         */
        this.visitable = false;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        _StandaloneLink_internals.set(this, helpers.attachInternals.call(this));
        _StandaloneLink_onBlur.set(this, (event) => {
            this.blurEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
        _StandaloneLink_onFocus.set(this, (event) => {
            this.focusEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
        _StandaloneLink_onSlotchange.set(this, () => {
            __classPrivateFieldGet(this, _StandaloneLink_internals, "f").ariaLabel = this.host.textContent;
        });
    }
    onClick(event) {
        if (this.disabled)
            event.stopImmediatePropagation();
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _StandaloneLink_internals, "f").ariaDisabled = this.disabled.toString();
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        // FIXME: `undefined` instead of `0` causes `qdsFocus/qdsBlur` E2E tests
        // to fail, but it's not clear why this is the case since it works for
        // other components.
        this.tabIndex = Number.isNaN(parsedValue) ? 0 : parsedValue;
    }
    hrefTargetChanged() {
        this.linkIcon = helpers.determineLinkIcon(this.href, this.target);
    }
    componentWillLoad() {
        __classPrivateFieldGet(this, _StandaloneLink_internals, "f").role = 'link';
        this.disabledChanged();
        this.hrefTargetChanged();
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    componentDidLoad() {
        __classPrivateFieldGet(this, _StandaloneLink_internals, "f").ariaLabel = this.host.textContent;
    }
    render() {
        return (index.h("a", { key: 'abab380cd9a22d00a0b504e0ed7cb5d5f1ca7ae2', "aria-hidden": "true", class: {
                'qds-standalone-link': true,
                'qds-disabled': this.disabled,
                'qds-visitable': this.visitable,
            }, "data-importance": __classPrivateFieldGet(this, _StandaloneLink_instances, "a", _StandaloneLink_computedImportance_get), "data-size": __classPrivateFieldGet(this, _StandaloneLink_instances, "a", _StandaloneLink_computedSize_get), download: this.download, href: this.href?.toString(), hrefLang: this.hreflang, onBlur: __classPrivateFieldGet(this, _StandaloneLink_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _StandaloneLink_onFocus, "f"), referrerPolicy: this.referrerPolicy, rel: this.rel, tabIndex: this.disabled ? -1 : this.tabIndex, target: this.target }, this.iconName !== undefined && this.iconName !== '' && (index.h("span", { key: '733f3a24a1755bfb7433e755b86694bbc57832a0', class: "qds-icon-crop", "data-size": __classPrivateFieldGet(this, _StandaloneLink_instances, "a", _StandaloneLink_computedSize_get) }, index.h("qds-icon", { key: '99cf41fd72607d2b8c426b6aa249fe848d0650c4', class: "qds-icon", "data-size": __classPrivateFieldGet(this, _StandaloneLink_instances, "a", _StandaloneLink_computedSize_get), library: this.iconLibrary, name: this.iconName }))), index.h("span", { key: '6a3d73fd1ddd338c7bf4de18828ed7c960cd86ea', class: "qds-text" }, index.h("slot", { key: '1e451614590865d9aa2bfe6175d0d82771e887c7', onSlotchange: __classPrivateFieldGet(this, _StandaloneLink_onSlotchange, "f") })), this.linkIcon && (index.h("span", { key: '8c340596a69219ef6378083141ff3febe0d26f4d', class: "qds-icon-crop", "data-size": __classPrivateFieldGet(this, _StandaloneLink_instances, "a", _StandaloneLink_computedSize_get) }, index.h("qds-icon", { key: '9034e9e1265e04d53a3f8ed0c9c0756c1d94a673', class: "qds-icon", library: "core", "data-size": __classPrivateFieldGet(this, _StandaloneLink_instances, "a", _StandaloneLink_computedSize_get), name: this.linkIcon }))), this.importance === 'emphasized' && (index.h("span", { key: '6b6aa6b82742965e1357422dbb78e022a28183bc', class: "qds-icon-crop", "data-size": __classPrivateFieldGet(this, _StandaloneLink_instances, "a", _StandaloneLink_computedSize_get) }, index.h("qds-icon", { key: '239fe0a496827fe27d7b34a57e217b764e02407c', class: "qds-icon", "data-size": __classPrivateFieldGet(this, _StandaloneLink_instances, "a", _StandaloneLink_computedSize_get), library: "core", name: "next" })))));
    }
    static get delegatesFocus() { return true; }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"],
        "tabindex": ["tabindexChanged"],
        "href": ["hrefTargetChanged"],
        "target": ["hrefTargetChanged"]
    }; }
};
_StandaloneLink_internals = new WeakMap(), _StandaloneLink_onBlur = new WeakMap(), _StandaloneLink_onFocus = new WeakMap(), _StandaloneLink_onSlotchange = new WeakMap(), _StandaloneLink_instances = new WeakSet(), _StandaloneLink_computedImportance_get = function _StandaloneLink_computedImportance_get() {
    switch (this.importance) {
        case 'subdued':
        case 'emphasized': {
            return this.importance;
        }
        default: {
            return 'standard';
        }
    }
}, _StandaloneLink_computedSize_get = function _StandaloneLink_computedSize_get() {
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
StandaloneLink.style = QdsStandaloneLinkStyle0;

exports.qds_standalone_link = StandaloneLink;

//# sourceMappingURL=qds-standalone-link.cjs.entry.js.map