/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, c as createEvent, h } from './p-2806fee1.js';
import { p as pickFocusEventAttributes, i as inheritAriaAttributes } from './p-8abba29b.js';
import { V as VALID_STATE, C as CUSTOM_ERROR_FLAGS, N as NO_ERROR_FLAGS } from './p-d107c90c.js';
import { d as defineCustomElement$3 } from './p-ba880369.js';
import { d as defineCustomElement$2 } from './p-a020ece3.js';
import { d as defineCustomElement$1 } from './p-c80f112a.js';

const checkboxCss = ":host([hidden]){display:none!important}:host{display:inline-block;line-height:0}.qds-box,.qds-checkbox,.qds-icon{grid-area:f;place-self:center}.qds-box,.qds-icon{display:none;pointer-events:none}.qds-box{border-radius:var(--qds-control-toggle-indicator-border-radius)}.qds-container{align-self:flex-start;display:grid;grid-template-areas:\"f\"}.qds-icon{color:var(--qds-theme-signature-color-contrast)}.qds-label{cursor:pointer;display:inline-flex}.qds-checkbox{-webkit-appearance:none;appearance:none;background-color:var(--qds-theme-control-input-background);border:var(--qds-control-border-width) solid var(--qds-theme-control-border);border-radius:var(--qds-control-border-radius);cursor:pointer;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}.qds-checkbox:focus-visible{outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-checkbox:active~.qds-box,.qds-checkbox:hover~.qds-box{display:block}.qds-checkbox:hover~.qds-box{background-color:var(--qds-theme-signature-color-hover)}.qds-checkbox:active~.qds-box{background-color:var(--qds-theme-signature-color-pressed)}.qds-checkbox:checked~.qds-checked,.qds-checkbox:indeterminate~.qds-indeterminate{display:block}.qds-checkbox:checked,.qds-checkbox:indeterminate{background-color:var(--qds-theme-signature-color-default);border-color:#0000}.qds-checkbox:checked:hover,.qds-checkbox:indeterminate:hover{background-color:var(--qds-theme-signature-color-hover)}.qds-checkbox:checked:active,.qds-checkbox:indeterminate:active{background-color:var(--qds-theme-signature-color-pressed)}[aria-disabled=true]{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-checkbox[data-size=small]{height:var(--qds-control-toggle-box-small-size);width:var(--qds-control-toggle-box-small-size)}.qds-icon[data-size=small]{font-size:var(--qds-control-small-icon-size)}.qds-box[data-size=small]{height:var(--qds-control-toggle-indicator-small-size);width:var(--qds-control-toggle-indicator-small-size)}.qds-inline[data-size=small]{margin-block:var(--qds-control-small-padding-auto-height)}.qds-label[data-size=small]{gap:var(--qds-control-small-gap-siblings-related)}.qds-checkbox[data-size=standard]{height:var(--qds-control-toggle-box-standard-size);width:var(--qds-control-toggle-box-standard-size)}.qds-icon[data-size=standard]{font-size:var(--qds-control-standard-icon-size)}.qds-box[data-size=standard]{height:var(--qds-control-toggle-indicator-standard-size);width:var(--qds-control-toggle-indicator-standard-size)}.qds-inline[data-size=standard]{margin-block:var(--qds-control-standard-padding-auto-height)}.qds-label[data-size=standard]{gap:var(--qds-control-standard-gap-siblings-related)}.qds-checkbox[data-size=large]{height:var(--qds-control-toggle-box-large-size);width:var(--qds-control-toggle-box-large-size)}.qds-icon[data-size=large]{font-size:var(--qds-control-large-icon-size)}.qds-box[data-size=large]{height:var(--qds-control-toggle-indicator-large-size);width:var(--qds-control-toggle-indicator-large-size)}.qds-inline[data-size=large]{margin-block:var(--qds-control-large-padding-auto-height)}.qds-label[data-size=large]{gap:var(--qds-control-large-gap-siblings-related)}";
const QdsCheckboxStyle0 = checkboxCss;

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
var _Checkbox_instances, _Checkbox_inheritedAttributes, _Checkbox_computedChecked_get, _Checkbox_computedDisabled_get, _Checkbox_computedIndeterminate_get, _Checkbox_computedSize_get, _Checkbox_computedValue_get, _Checkbox_hasText_get, _Checkbox_onBlur, _Checkbox_onFocus, _Checkbox_defineGetter;
const Checkbox = /*@__PURE__*/ proxyCustomElement(class Checkbox extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.blurEmitter = createEvent(this, "qdsBlur", 2);
        this.changeEmitter = createEvent(this, "qdsChange", 6);
        this.focusEmitter = createEvent(this, "qdsFocus", 2);
        this.internals = this.attachInternals();
        _Checkbox_instances.add(this);
        /**
         * Adds vertical margin to the checkbox for alignment.
         *
         * This is useful when creating inline layouts so that the first lines have
         * the correct vertical centering.
         */
        this.inline = false;
        /**
         * The checkbox's size.
         */
        this.size = 'standard';
        /**
         * The [`<form>`][] element to associate the checkbox with (its form owner).
         *
         * The value of this attribute must be the id of a `<form>` in the same
         * document. If this attribute is not set, the `<qds-checkbox>` is associated
         * with its ancestor `<form>` element, if any.
         *
         * This attribute lets you associate `<qds-checkbox>` elements to `<form>`s
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
         * The error message that would be shown to the user if the `<qds-checkbox>`
         * was to be checked for validity.
         *
         * @readonly
         * @webnative
         */
        this.validationMessage = '';
        /**
         * The [`ValidityState`][] object for this `<qds-checkbox>`.
         *
         * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
         *
         * @readonly
         * @webnative
         */
        this.validity = VALID_STATE;
        /**
         * The value of the checkbox, submitted as a name/value pair with form data.
         *
         * @webnative
         */
        this.value = 'on';
        /**
         * True if `<qds-checkbox>` will be validated when the form is submitted;
         * false otherwise.
         *
         * @readonly
         * @webnative
         */
        this.willValidate = false;
        _Checkbox_inheritedAttributes.set(this, {});
        this.checkValidity = () => this.internals.checkValidity();
        this.reportValidity = () => this.internals.reportValidity();
        this.setCustomValidity = (error) => {
            if (error)
                this.internals.setValidity(CUSTOM_ERROR_FLAGS, error, this.host);
            else
                this.internals.setValidity(NO_ERROR_FLAGS);
        };
        _Checkbox_onBlur.set(this, (event) => {
            this.blurEmitter.emit(pickFocusEventAttributes(event));
        });
        _Checkbox_onFocus.set(this, (event) => {
            this.focusEmitter.emit(pickFocusEventAttributes(event));
        });
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedDisabled_get)) {
            event.stopImmediatePropagation();
            return;
        }
        event.preventDefault();
        this.checked = __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedIndeterminate_get) ? true : !__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedChecked_get);
        this.changeEmitter.emit();
        this.indeterminate = false;
    }
    checkedChanged() {
        this.internals.setFormValue(__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedChecked_get) && !__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedDisabled_get)
            ? __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedValue_get)
            : // eslint-disable-next-line unicorn/no-null
                null);
    }
    disabledChanged() {
        if (__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedChecked_get) && !__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedDisabled_get))
            this.internals.setFormValue(__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedValue_get));
        // eslint-disable-next-line unicorn/no-null
        else
            this.internals.setFormValue(null);
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    valueChanged() {
        if (__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedChecked_get) && !__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedDisabled_get))
            this.internals.setFormValue(__classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedValue_get));
    }
    componentWillLoad() {
        this.valueChanged();
        __classPrivateFieldGet(this, _Checkbox_instances, "m", _Checkbox_defineGetter).call(this, 'form', () => this.internals.form);
        __classPrivateFieldGet(this, _Checkbox_instances, "m", _Checkbox_defineGetter).call(this, 'willValidate', () => this.internals.willValidate);
        __classPrivateFieldGet(this, _Checkbox_instances, "m", _Checkbox_defineGetter).call(this, 'validity', () => this.internals.validity);
        __classPrivateFieldGet(this, _Checkbox_instances, "m", _Checkbox_defineGetter).call(this, 'validationMessage', () => this.internals.validationMessage);
        __classPrivateFieldSet(this, _Checkbox_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    render() {
        return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        h("label", { key: '15ceed36f1cab0a68c0a156ef3324943658bd6c0', "aria-disabled": __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedDisabled_get) ? 'true' : undefined, class: {
                'qds-inline': this.inline,
                'qds-label': true,
            }, "data-size": __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedSize_get) }, h("div", { key: 'f08682656e01bba90296e992e60e10d2b6a5d6a9', class: "qds-container" }, h("input", { key: '505e5c9fa829f82c7d4cd3a6d9fd9ef32b7c2706',
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: this.host.autofocus, checked: __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedIndeterminate_get) ? false : this.checked, class: "qds-checkbox", "data-size": __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedSize_get), disabled: __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedDisabled_get), indeterminate: this.indeterminate, onBlur: __classPrivateFieldGet(this, _Checkbox_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _Checkbox_onFocus, "f"), required: this.required, tabIndex: __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedDisabled_get) ? undefined : this.tabIndex, type: "checkbox", ...__classPrivateFieldGet(this, _Checkbox_inheritedAttributes, "f") }), h("qds-icon", { key: 'f6b89a9aa715138e08867252d899da135a2be4d1', "aria-hidden": "true", class: {
                'qds-icon': true,
                'qds-checked': true,
            }, "data-size": __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedSize_get), library: "core", name: "checked" }), h("div", { key: 'ea3bf1f7c463e0503072df69504b3d36400964c2', class: "qds-box", "data-size": __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedSize_get) }), h("qds-icon", { key: '4ec05ce461af2c4e1d17a2536aa392c6c99c5996', "aria-hidden": "true", class: {
                'qds-icon': true,
                'qds-indeterminate': true,
            }, "data-size": __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_computedSize_get), library: "core", name: "indeterminate" })), __classPrivateFieldGet(this, _Checkbox_instances, "a", _Checkbox_hasText_get) && (h("qds-label", { key: 'b147b3d0e47395032217b52763adef01ed70e144', required: this.required, size: this.size, text: this.text }))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"],
        "tabindex": ["tabindexChanged"],
        "value": ["valueChanged"]
    }; }
    static get style() { return QdsCheckboxStyle0; }
}, [81, "qds-checkbox", {
        "inline": [4],
        "size": [1],
        "text": [1],
        "checked": [1028],
        "disabled": [4],
        "form": [1],
        "indeterminate": [1028],
        "name": [1],
        "required": [4],
        "validationMessage": [1, "validation-message"],
        "validity": [16],
        "value": [8],
        "willValidate": [4, "will-validate"],
        "tabIndex": [32]
    }, [[0, "click", "onClick"]], {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"],
        "tabindex": ["tabindexChanged"],
        "value": ["valueChanged"]
    }]);
_Checkbox_inheritedAttributes = new WeakMap(), _Checkbox_onBlur = new WeakMap(), _Checkbox_onFocus = new WeakMap(), _Checkbox_instances = new WeakSet(), _Checkbox_computedChecked_get = function _Checkbox_computedChecked_get() {
    return this.checked ?? false;
}, _Checkbox_computedDisabled_get = function _Checkbox_computedDisabled_get() {
    return ((this.host.matches(':disabled') || (this.disabled ?? false)) &&
        this.host.getAttribute('disabled') !== 'false');
}, _Checkbox_computedIndeterminate_get = function _Checkbox_computedIndeterminate_get() {
    return this.indeterminate ?? false;
}, _Checkbox_computedSize_get = function _Checkbox_computedSize_get() {
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
}, _Checkbox_computedValue_get = function _Checkbox_computedValue_get() {
    // eslint-disable-next-line unicorn/no-null
    return this.value == null ? null : this.value.toString();
}, _Checkbox_hasText_get = function _Checkbox_hasText_get() {
    return ((this.text !== undefined && this.text !== '') || this.required === true);
}, _Checkbox_defineGetter = function _Checkbox_defineGetter(p, get) {
    Object.defineProperty(this.host, p, { enumerable: true, get });
};
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-checkbox", "qds-icon", "qds-label", "qds-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Checkbox);
            }
            break;
        case "qds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "qds-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "qds-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Checkbox as C, defineCustomElement as d };

//# sourceMappingURL=p-688c90f6.js.map