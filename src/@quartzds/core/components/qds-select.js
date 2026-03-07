/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, c as createEvent, h } from './p-2806fee1.js';
import { c as invariant, p as pickFocusEventAttributes, h as pickInputEventAttributes, i as inheritAriaAttributes } from './p-8abba29b.js';
import { V as VALID_STATE, C as CUSTOM_ERROR_FLAGS, N as NO_ERROR_FLAGS } from './p-d107c90c.js';
import { d as defineCustomElement$2 } from './p-ba880369.js';

const selectCss = ":host([hidden]){display:none!important}:host{display:inline-block}slot{display:none}.qds-container{box-sizing:border-box;display:grid;grid-template-areas:\"h\"}.qds-container,.qds-select{width:inherit}.qds-icon,.qds-select{color:var(--qds-theme-control-text-standard);grid-area:h}.qds-icon{margin-inline-end:calc(var(--qds-control-input-padding-horizontal) + var(--qds-control-border-width));place-self:center end;pointer-events:none}.qds-select{-webkit-appearance:none;appearance:none;background-color:var(--qds-theme-control-input-background);border-color:var(--qds-theme-control-border);border-radius:var(\n      --qds-control-border-radius-top-left,var(--qds-control-border-radius)\n    ) var(--qds-control-border-radius-top-right,var(--qds-control-border-radius)) var(\n      --qds-control-border-radius-bottom-right,var(--qds-control-border-radius)\n    ) var(\n      --qds-control-border-radius-bottom-left,var(--qds-control-border-radius)\n    );border-style:solid;border-width:var(--qds-control-border-width) var(--qds-control-border-width-inline-end,var(--qds-control-border-width)) var(--qds-control-border-width-block-end,var(--qds-control-border-width)) var(--qds-control-border-width);margin:0;outline:0;padding-block:0;padding-inline:var(--qds-control-input-padding-horizontal);text-overflow:ellipsis}.qds-select:not(:focus):user-invalid{border-color:var(--qds-theme-feedback-result-failure)}.qds-select:disabled,.qds-select:disabled+.qds-icon{opacity:var(--qds-theme-disabled)}:is(::slotted(optgroup),::slotted(optgroup:not(:disabled)>option),::slotted(option)):disabled{opacity:var(--qds-theme-disabled)}::slotted(optgroup){font:var(--qds-accessory-section-title)}::slotted(optgroup>option),::slotted(option){font:var(--qds-list-item-label-main)}.qds-select[data-size=small]{font:var(--qds-control-small-text)}.qds-select[data-size=small]:not([multiple]){height:var(--qds-control-small-height);padding-inline-end:calc(var(--qds-control-small-icon-size) + var(--qds-text-icon-gap) + var(--qds-control-input-padding-horizontal))}.qds-icon[data-size=small]{height:var(--qds-control-small-icon-size);width:var(--qds-control-small-icon-size)}.qds-select[data-size=standard]{font:var(--qds-control-standard-text)}.qds-select[data-size=standard]:not([multiple]){height:var(--qds-control-standard-height);padding-inline-end:calc(var(--qds-control-standard-icon-size) + var(--qds-text-icon-gap) + var(--qds-control-input-padding-horizontal))}.qds-icon[data-size=standard]{height:var(--qds-control-standard-icon-size);width:var(--qds-control-standard-icon-size)}.qds-select[data-size=large]{font:var(--qds-control-large-text)}.qds-select[data-size=large]:not([multiple]){height:var(--qds-control-large-height);padding-inline-end:calc(var(--qds-control-large-icon-size) + var(--qds-text-icon-gap) + var(--qds-control-input-padding-horizontal))}.qds-icon[data-size=large]{height:var(--qds-control-large-icon-size);width:var(--qds-control-large-icon-size)}.qds-focus-ring{border-radius:max(1px,var(\n        --qds-control-border-radius-top-left,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-top-right,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-bottom-right,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-bottom-left,var(--qds-control-border-radius)\n      ));grid-area:h;height:calc(100% + var(--qds-control-border-width) - var(--qds-control-border-width-block-end, var(--qds-control-border-width)));isolation:isolate;outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset);pointer-events:none;visibility:hidden;width:calc(100% + var(--qds-control-border-width) - var(\n        --qds-control-border-width-inline-end,\n        var(--qds-control-border-width)\n      ))}.qds-select:focus-visible~.qds-focus-ring{visibility:visible}";
const QdsSelectStyle0 = selectCss;

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
var _Select_instances, _Select_inheritedAttributes, _Select_select, _Select_computedDisabled_get, _Select_computedOptions_get, _Select_computedSize_get, _Select_computedType_get, _Select_computedValue_get, _Select_computedSelectedOptions_get, _Select_ref, _Select_onBlur, _Select_onChange, _Select_onFocus, _Select_onInput, _Select_onSlotchange, _Select_defineGetter;
const throwError = () => {
    invariant(false);
};
const EMPTY_OPTIONS_COLLECTION = {
    length: 0,
    selectedIndex: -1,
    add: throwError,
    remove: throwError,
    item: throwError,
    namedItem: throwError,
    [Symbol.iterator]: throwError,
};
const Select = /*@__PURE__*/ proxyCustomElement(class Select extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.blurEmitter = createEvent(this, "qdsBlur", 2);
        this.changeEmitter = createEvent(this, "qdsChange", 6);
        this.focusEmitter = createEvent(this, "qdsFocus", 2);
        this.inputEmitter = createEvent(this, "qdsInput", 6);
        this.internals = this.attachInternals();
        _Select_instances.add(this);
        /**
         * The select's size.
         *
         * > ***NOTE:*** The native [`size` HTML attribute] is not supported. CSS
         * `height` should be used instead if this functionality is needed.
         *
         * [`size` HTML attribute]: https://developer.mozilla.org/docs/Web/HTML/Attributes/size
         */
        this.size = 'standard';
        /**
         * The [`<form>`][] element to associate the select with (its form owner).
         *
         * The value of this attribute must be the id of a `<form>` in the same
         * document. If this attribute is not set, the `<qds-select>` is associated
         * with its ancestor `<form>` element, if any.
         *
         * This attribute lets you associate `<qds-select>` elements to `<form>`s
         * anywhere in the document, not just inside a `<form>`. It can also override
         * an ancestor `<form>` element.
         *
         * [`<form>`]: https://developer.mozilla.org/docs/Web/HTML/Element/form
         *
         * @readonly
         * @webnative
         */
        // eslint-disable-next-line unicorn/no-null
        this.form = null;
        /**
         * Returns the number of elements in the [`<option>`s collection][].
         *
         * [`<option>`s collection]: https://developer.mozilla.org/docs/Web/API/HTMLOptionsCollection
         *
         * @readonly
         * @webnative
         */
        this.length = 0;
        /**
         * An [`HTMLOptionsCollection`][] of the [`<option>`][] elements contained by
         * the `<qds-select>` element.
         *
         * [`HTMLOptionsCollection`]: https://developer.mozilla.org/docs/Web/API/HTMLOptionsCollection
         * [`<option>`]: https://developer.mozilla.org/docs/Web/HTML/Element/option
         *
         * @readonly
         * @webnative
         */
        this.options = EMPTY_OPTIONS_COLLECTION;
        /**
         * The index of the first or last selected [`<option>`][] element, depending
         * on the value of `multiple`. The value `-1` indicates that no element is
         * selected.
         *
         * [`<option>`]: https://developer.mozilla.org/docs/Web/HTML/Element/option
         *
         * @webnative
         */
        this.selectedIndex = -1;
        /**
         * Collection of the [`<option>`][] elements contained within the
         * `<qds-select>` element that are currently selected.
         *
         * [`<option>`]: https://developer.mozilla.org/docs/Web/HTML/Element/option
         *
         * @readonly
         * @webnative
         */
        this.selectedOptions = EMPTY_OPTIONS_COLLECTION;
        /**
         * Returns `select-multiple` if the `multiple` attribute is true;
         * `select-one` otherwise.
         *
         * @readonly
         * @webnative
         */
        this.type = 'select-one';
        /**
         * The error message that would be shown to the user if the `<qds-select>`
         * was to be checked for validity.
         *
         * @readonly
         * @webnative
         */
        this.validationMessage = '';
        /**
         * The [`ValidityState`][] object for this `<qds-select>`.
         *
         * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
         *
         * @readonly
         * @webnative
         */
        this.validity = VALID_STATE;
        /**
         * The `value` property of the first selected [`<option>`][] element, or the
         * empty string if no options are selected.
         *
         * [`<option>`]: https://developer.mozilla.org/docs/Web/HTML/Element/option
         *
         * @webnative
         */
        this.value = '';
        /**
         * True if `<qds-select>` will be validated when the form is submitted;
         * false otherwise.
         *
         * @readonly
         * @webnative
         */
        this.willValidate = false;
        _Select_inheritedAttributes.set(this, {});
        _Select_select.set(this, void 0);
        this.checkValidity = () => this.internals.checkValidity();
        this.reportValidity = () => this.internals.reportValidity();
        this.setCustomValidity = (error) => {
            invariant(__classPrivateFieldGet(this, _Select_select, "f"));
            __classPrivateFieldGet(this, _Select_select, "f").setCustomValidity(error);
            if (error)
                this.internals.setValidity(CUSTOM_ERROR_FLAGS, error, __classPrivateFieldGet(this, _Select_select, "f"));
            else
                this.internals.setValidity(NO_ERROR_FLAGS);
        };
        this.addItem = (element, before) => {
            invariant(__classPrivateFieldGet(this, _Select_select, "f"));
            __classPrivateFieldGet(this, _Select_select, "f").add(element, before);
        };
        this.removeItem = (index) => {
            invariant(__classPrivateFieldGet(this, _Select_select, "f"));
            __classPrivateFieldGet(this, _Select_select, "f").remove(index);
        };
        this.item = (index) => {
            invariant(__classPrivateFieldGet(this, _Select_select, "f"));
            return __classPrivateFieldGet(this, _Select_select, "f").item(index);
        };
        this.namedItem = (name) => {
            invariant(__classPrivateFieldGet(this, _Select_select, "f"));
            return __classPrivateFieldGet(this, _Select_select, "f").namedItem(name);
        };
        _Select_ref.set(this, (select) => {
            __classPrivateFieldSet(this, _Select_select, select, "f");
        });
        _Select_onBlur.set(this, (event) => {
            this.blurEmitter.emit(pickFocusEventAttributes(event));
        });
        _Select_onChange.set(this, () => {
            this.changeEmitter.emit();
        });
        _Select_onFocus.set(this, (event) => {
            this.focusEmitter.emit(pickFocusEventAttributes(event));
        });
        _Select_onInput.set(this, (event) => {
            invariant(__classPrivateFieldGet(this, _Select_select, "f"));
            this.value = __classPrivateFieldGet(this, _Select_select, "f").value;
            this.inputEmitter.emit(pickInputEventAttributes(event));
        });
        _Select_onSlotchange.set(this, (event) => {
            invariant(__classPrivateFieldGet(this, _Select_select, "f"));
            const { currentTarget } = event;
            invariant(currentTarget instanceof HTMLSlotElement);
            __classPrivateFieldGet(this, _Select_select, "f").replaceChildren(...currentTarget.assignedNodes().map((node) => node.cloneNode(true)));
        });
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _Select_instances, "a", _Select_computedDisabled_get))
            event.stopImmediatePropagation();
    }
    disabledChanged() {
        if (__classPrivateFieldGet(this, _Select_instances, "a", _Select_computedDisabled_get))
            // eslint-disable-next-line unicorn/no-null
            this.internals.setFormValue(null);
        else
            this.internals.setFormValue(__classPrivateFieldGet(this, _Select_instances, "a", _Select_computedValue_get));
    }
    selectedIndexChanged() {
        invariant(__classPrivateFieldGet(this, _Select_select, "f"));
        __classPrivateFieldGet(this, _Select_select, "f").selectedIndex = this.selectedIndex;
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    validationChanged() {
        invariant(__classPrivateFieldGet(this, _Select_select, "f"));
        __classPrivateFieldGet(this, _Select_select, "f").value = __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedValue_get);
        __classPrivateFieldGet(this, _Select_select, "f").required = this.required ?? false;
        const { valid } = __classPrivateFieldGet(this, _Select_select, "f").validity;
        if (valid)
            this.internals.setValidity(NO_ERROR_FLAGS, undefined, __classPrivateFieldGet(this, _Select_select, "f"));
        else
            this.internals.setValidity(__classPrivateFieldGet(this, _Select_select, "f").validity, __classPrivateFieldGet(this, _Select_select, "f").validationMessage, __classPrivateFieldGet(this, _Select_select, "f"));
    }
    componentWillLoad() {
        __classPrivateFieldGet(this, _Select_instances, "m", _Select_defineGetter).call(this, 'form', () => this.internals.form);
        __classPrivateFieldGet(this, _Select_instances, "m", _Select_defineGetter).call(this, 'willValidate', () => this.internals.willValidate);
        __classPrivateFieldGet(this, _Select_instances, "m", _Select_defineGetter).call(this, 'validity', () => this.internals.validity);
        __classPrivateFieldGet(this, _Select_instances, "m", _Select_defineGetter).call(this, 'validationMessage', () => this.internals.validationMessage);
        __classPrivateFieldGet(this, _Select_instances, "m", _Select_defineGetter).call(this, 'type', () => __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedType_get));
        __classPrivateFieldGet(this, _Select_instances, "m", _Select_defineGetter).call(this, 'options', () => __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedOptions_get));
        __classPrivateFieldGet(this, _Select_instances, "m", _Select_defineGetter).call(this, 'length', () => __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedOptions_get).length);
        __classPrivateFieldGet(this, _Select_instances, "m", _Select_defineGetter).call(this, 'selectedOptions', () => __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedSelectedOptions_get));
        __classPrivateFieldSet(this, _Select_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    componentDidLoad() {
        invariant(__classPrivateFieldGet(this, _Select_select, "f"));
        this.validationChanged();
        this.selectedIndex = __classPrivateFieldGet(this, _Select_select, "f").selectedIndex;
    }
    render() {
        return (h("div", { key: '775cc10b64f353ffcc54654212005cd41f319767', class: {
                'qds-container': true,
                'qds-multiple': this.multiple ?? false,
            }, "data-size": __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedSize_get) }, h("select", { key: '3eb930f8ee0360a9091c22eabede009ed7ea50cf', autoComplete: this.autoComplete,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: this.host.autofocus, class: "qds-select", "data-size": __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedSize_get), disabled: __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedDisabled_get), multiple: this.multiple, name: this.name, onBlur: __classPrivateFieldGet(this, _Select_onBlur, "f"), onChange: __classPrivateFieldGet(this, _Select_onChange, "f"), onFocus: __classPrivateFieldGet(this, _Select_onFocus, "f"), onInput: __classPrivateFieldGet(this, _Select_onInput, "f"), ref: __classPrivateFieldGet(this, _Select_ref, "f"), required: this.required, tabIndex: __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedDisabled_get) ? undefined : this.tabIndex, ...__classPrivateFieldGet(this, _Select_inheritedAttributes, "f") }), this.multiple !== true && (h("qds-icon", { key: 'b83e1c50f43271e69446bf115dec6dccce389b59', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Select_instances, "a", _Select_computedSize_get), library: "core", name: "dropdown" })), h("slot", { key: '24fb8877a33d393dde6d2e40b09c7d59a9096818', onSlotchange: __classPrivateFieldGet(this, _Select_onSlotchange, "f") }), h("div", { key: '9cd40db31ea7703639bf5bcdeba2279bd45c50d8', class: "qds-focus-ring" })));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "disabled": ["disabledChanged"],
        "selectedIndex": ["selectedIndexChanged"],
        "tabindex": ["tabindexChanged"],
        "required": ["validationChanged"],
        "value": ["validationChanged"]
    }; }
    static get style() { return QdsSelectStyle0; }
}, [81, "qds-select", {
        "size": [1],
        "autoComplete": [1, "autocomplete"],
        "disabled": [4],
        "form": [1],
        "length": [2],
        "multiple": [4],
        "name": [1],
        "options": [16],
        "required": [4],
        "selectedIndex": [1026, "selected-index"],
        "selectedOptions": [16],
        "type": [1],
        "validationMessage": [1, "validation-message"],
        "validity": [16],
        "value": [1025],
        "willValidate": [4, "will-validate"],
        "tabIndex": [32]
    }, [[0, "click", "onClick"]], {
        "disabled": ["disabledChanged"],
        "selectedIndex": ["selectedIndexChanged"],
        "tabindex": ["tabindexChanged"],
        "required": ["validationChanged"],
        "value": ["validationChanged"]
    }]);
_Select_inheritedAttributes = new WeakMap(), _Select_select = new WeakMap(), _Select_ref = new WeakMap(), _Select_onBlur = new WeakMap(), _Select_onChange = new WeakMap(), _Select_onFocus = new WeakMap(), _Select_onInput = new WeakMap(), _Select_onSlotchange = new WeakMap(), _Select_instances = new WeakSet(), _Select_computedDisabled_get = function _Select_computedDisabled_get() {
    return ((this.host.matches(':disabled') || (this.disabled ?? false)) &&
        this.host.getAttribute('disabled') !== 'false');
}, _Select_computedOptions_get = function _Select_computedOptions_get() {
    invariant(__classPrivateFieldGet(this, _Select_select, "f"));
    return __classPrivateFieldGet(this, _Select_select, "f").options;
}, _Select_computedSize_get = function _Select_computedSize_get() {
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
}, _Select_computedType_get = function _Select_computedType_get() {
    invariant(__classPrivateFieldGet(this, _Select_select, "f"));
    return __classPrivateFieldGet(this, _Select_select, "f").type;
}, _Select_computedValue_get = function _Select_computedValue_get() {
    return this.value ?? '';
}, _Select_computedSelectedOptions_get = function _Select_computedSelectedOptions_get() {
    invariant(__classPrivateFieldGet(this, _Select_select, "f"));
    return __classPrivateFieldGet(this, _Select_select, "f").selectedOptions;
}, _Select_defineGetter = function _Select_defineGetter(p, get) {
    Object.defineProperty(this.host, p, { enumerable: true, get });
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-select", "qds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Select);
            }
            break;
        case "qds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const QdsSelect = Select;
const defineCustomElement = defineCustomElement$1;

export { QdsSelect, defineCustomElement };

//# sourceMappingURL=qds-select.js.map