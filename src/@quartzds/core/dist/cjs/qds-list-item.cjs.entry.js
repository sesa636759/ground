/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

const listItemCss = ":host([hidden]){display:none!important}:host{display:block}.qds-disabled{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-indented-content,.qds-list-item{align-items:center;box-sizing:border-box;display:flex}.qds-list-action{pointer-events:none}.qds-indented-content{align-self:stretch;flex:1 0}.qds-destination{transform:scaleX(var(--qds-direction-factor,1))}.qds-divider{border-block-end:var(--qds-list-border-width) solid var(--qds-theme-divider-standard)}.qds-icon{color:var(--qds-theme-text-standard)}.qds-texts{display:flex;flex:1 0;flex-direction:column;justify-items:center;padding:0;position:relative}.qds-input{-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:var(--qds-control-border-radius);inset:0;margin:0;outline:none;position:absolute}.qds-title{color:var(--qds-theme-title)}.qds-subtitle{color:var(--qds-theme-subtitle)}.qds-kicker{color:var(--qds-theme-kicker)}.qds-list-item[data-size=small]{gap:var(--qds-list-item-small-gap-internal);padding-inline-start:var(--qds-list-item-small-padding-horizontal)}[data-size=small] .qds-indented-content{gap:var(--qds-list-item-small-gap-internal);min-height:var(--qds-list-item-small-height);padding-block:var(--qds-list-item-small-padding-vertical);padding-inline-end:var(--qds-list-item-small-padding-horizontal)}[data-size=small] .qds-icon{font-size:var(--qds-control-small-icon-size)}[data-size=small] .qds-main-icon{font-size:var(--qds-list-item-small-icon-size)}[data-size=small] .qds-texts{gap:var(--qds-list-item-small-titles-gap)}[data-size=small] .qds-kicker{font:var(--qds-list-item-small-kicker)}[data-size=small] .qds-title{font:var(--qds-list-item-small-title)}[data-size=small] .qds-subtitle{font:var(--qds-list-item-small-subtitle)}.qds-list-item[data-size=standard]{gap:var(--qds-list-item-standard-gap-internal);padding-inline-start:var(--qds-list-item-standard-padding-horizontal)}[data-size=standard] .qds-indented-content{gap:var(--qds-list-item-standard-gap-internal);min-height:var(--qds-list-item-standard-height);padding-block:var(--qds-list-item-standard-padding-vertical);padding-inline-end:var(--qds-list-item-standard-padding-horizontal)}[data-size=standard] .qds-icon{font-size:var(--qds-control-standard-icon-size)}[data-size=standard] .qds-main-icon{font-size:var(--qds-list-item-standard-icon-size)}[data-size=standard] .qds-texts{gap:var(--qds-list-item-standard-titles-gap)}[data-size=standard] .qds-kicker{font:var(--qds-list-item-standard-kicker)}[data-size=standard] .qds-title{font:var(--qds-list-item-standard-title)}[data-size=standard] .qds-subtitle{font:var(--qds-list-item-standard-subtitle)}.qds-list-item[data-size=large]{gap:var(--qds-list-item-large-gap-internal);padding-inline-start:var(--qds-list-item-large-padding-horizontal)}[data-size=large] .qds-indented-content{gap:var(--qds-list-item-large-gap-internal);min-height:var(--qds-list-item-large-height);padding-block:var(--qds-list-item-large-padding-vertical);padding-inline-end:var(--qds-list-item-large-padding-horizontal)}[data-size=large] .qds-icon{font-size:var(--qds-control-large-icon-size)}[data-size=large] .qds-main-icon{font-size:var(--qds-list-item-large-icon-size)}[data-size=large] .qds-texts{gap:var(--qds-list-item-large-titles-gap)}[data-size=large] .qds-kicker{font:var(--qds-list-item-large-kicker)}[data-size=large] .qds-title{font:var(--qds-list-item-large-title)}[data-size=large] .qds-subtitle{font:var(--qds-list-item-large-subtitle)}.qds-list-item:hover{background-color:var(--qds-theme-interactive-background-hover)}.qds-list-item:active{background-color:var(--qds-theme-interactive-background-pressed)}.qds-list-item:has(input:focus-visible){outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-selected.qds-list-item{background-color:var(--qds-theme-interactive-background-selected)}.qds-selected[data-size=small] .qds-title{font:var(--qds-list-item-small-title-emphasized)}.qds-selected[data-size=standard] .qds-title{font:var(--qds-list-item-standard-title-emphasized)}.qds-selected[data-size=large] .qds-title{font:var(--qds-list-item-large-title-emphasized)}:host(:last-of-type) .qds-divider{border-block-end:none}";
const QdsListItemStyle0 = listItemCss;

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
var _ListItem_instances, _ListItem_computedDestination_get, _ListItem_computedDivider_get, _ListItem_computedIndeterminate_get, _ListItem_computedListAction_get, _ListItem_computedSelected_get, _ListItem_computedChecked_get, _ListItem_computedSize_get, _ListItem_onBlur, _ListItem_onFocus;
const ListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.blurEmitter = index.createEvent(this, "qdsBlur", 2);
        this.changeEmitter = index.createEvent(this, "qdsChange", 6);
        this.focusEmitter = index.createEvent(this, "qdsFocus", 2);
        _ListItem_instances.add(this);
        /**
         * Prevents the list item from being interacted with: it cannot be selected
         * or focused.
         */
        this.disabled = false;
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * The list items's size.
         */
        this.size = 'standard';
        this.inheritedAttributes = {};
        _ListItem_onBlur.set(this, (event) => {
            this.blurEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
        _ListItem_onFocus.set(this, (event) => {
            this.focusEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
    }
    onClick(event) {
        if (this.disabled) {
            event.stopImmediatePropagation();
            return;
        }
        // Always prevent default behavior to avoid the internal `<input>`
        // to toggle `checked` state inappropriately.
        //
        // Note that this will need adjustments once we add the `item-action` slot.
        event.preventDefault();
        if (this.listAction === 'multiselect') {
            this.checked = __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedIndeterminate_get) ? true : !__classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedChecked_get);
            this.changeEmitter.emit();
            this.indeterminate = false;
        }
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    componentWillLoad() {
        this.inheritedAttributes = helpers.inheritAriaAttributes(this.host);
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    render() {
        return (
        /* eslint-disable jsx-a11y/label-has-associated-control */
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        index.h("li", { key: 'c85d55cd3ac8feac479d083eda49f4f0b30d0479', class: {
                'qds-list-item': true,
                'qds-disabled': this.disabled,
                'qds-divider': __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedDivider_get) === undefined,
                'qds-multiselect': __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedListAction_get) === 'multiselect',
                'qds-selected': __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedSelected_get),
                'qds-checked': __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedChecked_get),
            }, "data-size": __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedSize_get), role: "listitem" // Required because it can't be a direct child of a list element (<ul>, <ol>, or <menu>).
            ,
            ...this.inheritedAttributes }, __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedListAction_get) === 'multiselect' && (index.h("qds-checkbox", { key: '66b8c8d52826ea1b040677510c1ea25743f8b0e2', checked: this.checked, class: "qds-list-action", indeterminate: this.indeterminate, size: this.size, tabIndex: -1 })), __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedListAction_get) === 'reorder' && (index.h("qds-icon", { key: '3604e1d5a72df42062c7c5a03a05a9a1707cfadd', "aria-hidden": "true", class: "qds-icon qds-list-action", library: "core", name: __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedListAction_get) })), index.h("div", { key: '99cd3e6336faf58bd79eb3c7a6667a6a287d64a4', class: {
                'qds-indented-content': true,
                'qds-divider': __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedDivider_get) === 'indent',
            } }, this.iconName !== undefined && this.iconName !== '' && (index.h("qds-icon", { key: '8daf63c28a4d387196dcc3b1cb60a8b4f0afdc56', "aria-hidden": "true", class: "qds-icon qds-main-icon", library: this.iconLibrary, name: this.iconName })), index.h("label", { key: 'abd654bb49b8c2ed41233e4ebab6270d50da1da0', class: "qds-texts" }, index.h("input", { key: 'd7ce19ddee65f6a40bd0f2823fa84afdc7925857', checked: this.selected, class: "qds-input", disabled: this.disabled, indeterminate: this.indeterminate, onBlur: __classPrivateFieldGet(this, _ListItem_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _ListItem_onFocus, "f"), tabIndex: this.disabled ? undefined : this.tabIndex, type: "checkbox" }), this.kicker !== undefined && this.kicker !== '' && (index.h("div", { key: '0824029326ce58e80aa5b1f144b1827178c277f9', class: "qds-kicker" }, this.kicker)), index.h("div", { key: '2049720eabea49046fa13db72429fb1d574b125b', class: "qds-title" }, this.text), this.subtitle !== undefined && this.subtitle !== '' && (index.h("div", { key: '9420a3edf55cea66b3432f64143b6676ce370a95', class: "qds-subtitle" }, this.subtitle))), __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedDestination_get) !== undefined && (index.h("qds-icon", { key: '49afdc79bd2d18dac611bda6ebd72a8c8704382e', "aria-hidden": "true", class: "qds-icon qds-destination", library: "core", name: __classPrivateFieldGet(this, _ListItem_instances, "a", _ListItem_computedDestination_get) }))))
        /* eslint-enable jsx-a11y/label-has-associated-control */
        );
    }
    static get delegatesFocus() { return true; }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "tabindex": ["tabindexChanged"]
    }; }
};
_ListItem_onBlur = new WeakMap(), _ListItem_onFocus = new WeakMap(), _ListItem_instances = new WeakSet(), _ListItem_computedDestination_get = function _ListItem_computedDestination_get() {
    switch (this.destination) {
        case 'navigation': {
            return this.destination;
        }
        default: {
            return undefined;
        }
    }
}, _ListItem_computedDivider_get = function _ListItem_computedDivider_get() {
    switch (this.divider) {
        case 'hide':
        case 'indent': {
            return this.divider;
        }
        default: {
            return undefined;
        }
    }
}, _ListItem_computedIndeterminate_get = function _ListItem_computedIndeterminate_get() {
    return this.indeterminate ?? false;
}, _ListItem_computedListAction_get = function _ListItem_computedListAction_get() {
    switch (this.listAction) {
        case 'reorder':
        case 'multiselect': {
            return this.listAction;
        }
        default: {
            return undefined;
        }
    }
}, _ListItem_computedSelected_get = function _ListItem_computedSelected_get() {
    return this.selected ?? false;
}, _ListItem_computedChecked_get = function _ListItem_computedChecked_get() {
    return this.checked ?? false;
}, _ListItem_computedSize_get = function _ListItem_computedSize_get() {
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
ListItem.style = QdsListItemStyle0;

exports.qds_list_item = ListItem;

//# sourceMappingURL=qds-list-item.cjs.entry.js.map