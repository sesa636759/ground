/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-b1d6acd2.js';
import { p as pickFocusEventAttributes, b as inheritAriaAttributes } from './helpers-2e4ca34d.js';

const navListItemCss = ":host([hidden]){display:none!important}:host{display:block}.qds-button,.qds-nav-list-item,.qds-texts{display:flex}.qds-button,.qds-texts{flex:1 0}.qds-icon,.qds-text{color:var(--qds-theme-title)}.qds-button{align-items:center;-webkit-appearance:none;appearance:none;background:none;border:none;cursor:pointer;text-align:initial}.qds-button:focus-visible{border-radius:var(--qds-focus-border-radius);outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width)}.qds-button:not(.qds-selected):hover{background-color:var(--qds-theme-interactive-background-hover)}.qds-button:not(.qds-selected):active{background-color:var(--qds-theme-interactive-background-pressed)}.qds-disabled{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-subtext{color:var(--qds-theme-subtitle)}.qds-texts{flex-direction:column}.qds-button[data-size=small]{gap:var(--qds-list-item-small-gap-internal);min-height:var(--qds-list-item-small-height);padding-block:var(--qds-list-item-small-padding-vertical);padding-inline:var(--qds-list-item-small-padding-horizontal)}[data-size=small]>.qds-icon{font-size:var(--qds-list-item-small-icon-size)}[data-size=small]>.qds-texts{gap:var(--qds-list-item-small-titles-gap)}[data-size=small] .qds-text{font:var(--qds-list-item-small-title)}[data-size=small] .qds-subtext{font:var(--qds-list-item-small-subtitle)}.qds-button[data-size=standard]{gap:var(--qds-list-item-standard-gap-internal);min-height:var(--qds-list-item-standard-height);padding-block:var(--qds-list-item-standard-padding-vertical);padding-inline:var(--qds-list-item-standard-padding-horizontal)}[data-size=standard]>.qds-icon{font-size:var(--qds-list-item-standard-icon-size)}[data-size=standard]>.qds-texts{gap:var(--qds-list-item-standard-titles-gap)}[data-size=standard] .qds-text{font:var(--qds-list-item-standard-title)}[data-size=standard] .qds-subtext{font:var(--qds-list-item-standard-subtitle)}.qds-button[data-size=large]{gap:var(--qds-list-item-large-gap-internal);min-height:var(--qds-list-item-large-height);padding-block:var(--qds-list-item-large-padding-vertical);padding-inline:var(--qds-list-item-large-padding-horizontal)}[data-size=large]>.qds-icon{font-size:var(--qds-list-item-large-icon-size)}[data-size=large]>.qds-texts{gap:var(--qds-list-item-large-titles-gap)}[data-size=large] .qds-text{font:var(--qds-list-item-large-title)}[data-size=large] .qds-subtext{font:var(--qds-list-item-large-subtitle)}.qds-selected.qds-nav-list-item{background-color:var(\n      --qds-theme-navigation-subsection-standard-background\n    )}.qds-selected.qds-nav-list-item:after{background-color:var(--qds-theme-signature-color-default);border-radius:var(--qds-signature-line-connection-cap-radius);content:\"\";cursor:pointer;margin-right:calc(var(--qds-signature-line-connection-width)*-1/2);width:var(--qds-signature-line-connection-width)}.qds-selected .qds-icon{color:var(--qds-theme-signature-color-default)}.qds-selected[data-size=small] .qds-text{font:var(--qds-list-item-small-title-emphasized)}.qds-selected[data-size=standard] .qds-text{font:var(--qds-list-item-standard-title-emphasized)}.qds-selected[data-size=large] .qds-text{font:var(--qds-list-item-large-title-emphasized)}";
const QdsNavListItemStyle0 = navListItemCss;

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
var _NavListItem_instances, _NavListItem_computedSize_get, _NavListItem_shouldCollapse_get, _NavListItem_liRef, _NavListItem_tooltipRef, _NavListItem_onBlur, _NavListItem_onFocus;
const NavListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.blurEmitter = createEvent(this, "qdsBlur", 2);
        this.focusEmitter = createEvent(this, "qdsFocus", 2);
        _NavListItem_instances.add(this);
        /**
         * Displays the navigation list item in a collapsed state without its text.
         * The text will be displayed in a tooltip instead.
         *
         * This property has no effect if the navigation list item does not have an
         * icon set.
         */
        this.collapsed = false;
        /**
         * Prevents the navigation list item from being interacted with: it cannot be
         * selected or focused.
         */
        this.disabled = false;
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * The navigation list items's size.
         */
        this.size = 'standard';
        /**
         * Whether or not the navigation list item is selected.
         */
        this.selected = false;
        this.inheritedAttributes = {};
        _NavListItem_liRef.set(this, (li) => {
            this.li = li;
        });
        _NavListItem_tooltipRef.set(this, (tooltip) => {
            if (tooltip)
                // eslint-disable-next-line no-param-reassign
                tooltip.target = this.li;
        });
        _NavListItem_onBlur.set(this, (event) => {
            this.blurEmitter.emit(pickFocusEventAttributes(event));
        });
        _NavListItem_onFocus.set(this, (event) => {
            this.focusEmitter.emit(pickFocusEventAttributes(event));
        });
    }
    onClick(event) {
        if (this.disabled)
            event.stopImmediatePropagation();
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    componentWillLoad() {
        this.inheritedAttributes = inheritAriaAttributes(this.host);
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    render() {
        return (h(Host, { key: 'd8fa60da531b9bd93a16c3e21f8d3ac3986c61a0' }, h("li", { key: 'fc5237181a7ec072fa4643e5b6702b25843698ae', class: {
                'qds-nav-list-item': true,
                'qds-disabled': this.disabled,
                'qds-selected': this.selected,
            }, ref: __classPrivateFieldGet(this, _NavListItem_liRef, "f"), ...this.inheritedAttributes }, h("button", { key: '07ed4f3b4b369565bfa3807969d0d45795c66694', class: {
                'qds-button': true,
                'qds-selected': this.selected,
            }, "data-size": __classPrivateFieldGet(this, _NavListItem_instances, "a", _NavListItem_computedSize_get), disabled: this.disabled, onBlur: __classPrivateFieldGet(this, _NavListItem_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _NavListItem_onFocus, "f"), tabIndex: this.disabled ? undefined : this.tabIndex, type: "button" }, this.iconName !== undefined && this.iconName !== '' && (h("qds-icon", { key: '920ce703bd408a135c97d0efa29da86bb8b08bc2', "aria-hidden": "true", class: "qds-icon", library: this.iconLibrary, name: this.iconName })), !__classPrivateFieldGet(this, _NavListItem_instances, "a", _NavListItem_shouldCollapse_get) && this.text && this.renderText())), __classPrivateFieldGet(this, _NavListItem_instances, "a", _NavListItem_shouldCollapse_get) && this.text && (h("qds-tooltip", { key: '6cf3305f81a62bc2f1146298bfcd109f96ee7281', placement: "right", ref: __classPrivateFieldGet(this, _NavListItem_tooltipRef, "f") }, this.renderText()))));
    }
    renderText() {
        return (h("div", { class: "qds-texts" }, h("div", { class: "qds-text" }, this.text), this.subtext !== undefined && this.subtext !== '' && (h("div", { class: "qds-subtext" }, this.subtext))));
    }
    static get delegatesFocus() { return true; }
    get host() { return getElement(this); }
    static get watchers() { return {
        "tabindex": ["tabindexChanged"]
    }; }
};
_NavListItem_liRef = new WeakMap(), _NavListItem_tooltipRef = new WeakMap(), _NavListItem_onBlur = new WeakMap(), _NavListItem_onFocus = new WeakMap(), _NavListItem_instances = new WeakSet(), _NavListItem_computedSize_get = function _NavListItem_computedSize_get() {
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
}, _NavListItem_shouldCollapse_get = function _NavListItem_shouldCollapse_get() {
    return this.collapsed && this.iconName !== undefined && this.iconName !== '';
};
NavListItem.style = QdsNavListItemStyle0;

export { NavListItem as qds_nav_list_item };

//# sourceMappingURL=qds-nav-list-item.entry.js.map