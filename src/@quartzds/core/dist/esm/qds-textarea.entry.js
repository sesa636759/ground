/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-b1d6acd2.js';
import { c as invariant, p as pickFocusEventAttributes, h as pickInputEventAttributes, b as inheritAriaAttributes } from './helpers-2e4ca34d.js';
import { V as VALID_STATE, C as CUSTOM_ERROR_FLAGS, N as NO_ERROR_FLAGS } from './controls-a4768aaf.js';

const textareaCss = ":host([hidden]){display:none!important}:host{display:inline-block;resize:both}slot{display:none}.qds-textarea{background-color:var(--qds-theme-control-input-background);border:var(--qds-control-border-width) solid var(--qds-theme-control-border);border-radius:var(--qds-control-border-radius);box-sizing:border-box;color:var(--qds-theme-control-text-standard);height:100%;padding-inline:var(--qds-control-input-padding-horizontal);resize:inherit;width:100%}.qds-textarea:disabled{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-textarea:focus-visible{outline:var(--qds-control-input-focus-border-width) solid var(--qds-theme-control-input-focus-border)}.qds-textarea:placeholder-shown{color:var(--qds-theme-control-text-placeholder)}.qds-textarea:not(:focus):user-invalid{border-color:var(--qds-theme-feedback-result-failure)}[data-size=small]{font:var(--qds-control-small-text);padding-block:var(--qds-control-small-padding-auto-height)}[data-size=standard]{font:var(--qds-control-standard-text);padding-block:var(--qds-control-standard-padding-auto-height)}[data-size=large]{font:var(--qds-control-large-text);padding-block:var(--qds-control-large-padding-auto-height)}";
const QdsTextareaStyle0 = textareaCss;

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
var _TextArea_instances, _TextArea_inheritedAttributes, _TextArea_textarea, _TextArea_computedDisabled_get, _TextArea_computedValue_get, _TextArea_getSelectionDirection, _TextArea_getSelectionStart, _TextArea_getSelectionEnd, _TextArea_ref, _TextArea_onBlur, _TextArea_onChange, _TextArea_onFocus, _TextArea_onInput, _TextArea_onSlotchange, _TextArea_defineGetter;
const TextArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.blurEmitter = createEvent(this, "qdsBlur", 2);
        this.changeEmitter = createEvent(this, "qdsChange", 6);
        this.focusEmitter = createEvent(this, "qdsFocus", 2);
        this.inputEmitter = createEvent(this, "qdsInput", 6);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        _TextArea_instances.add(this);
        /**
         * The textarea's size.
         *
         * > **_NOTE:_** The native [`size` HTML attribute][] is not supported. CSS
         * `width` should be used instead if this functionality is needed.
         *
         * [`size` HTML attribute]: https://developer.mozilla.org/docs/Web/HTML/Attributes/size
         */
        this.size = 'standard';
        /**
         * The [`<form>`][] element to associate the input with (its form owner).
         *
         * The value of this attribute must be the id of a `<form>` in the same
         * document. If this attribute is not set, the `<qds-textarea>` is associated
         * with its ancestor `<form>` element, if any.
         *
         * This attribute lets you associate `<qds-textarea>` elements to `<form>`s
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
         * Returns a list of the [`<label>`][] elements associated with the
         * `qds-textarea` element.
         *
         * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
         *
         * @readonly
         * @webnative
         */
        this.labels = {};
        /**
         * Get or set the selection direction of a text selection.
         *
         * > **_NOTE:_** This property has no effect when used as an attribute.
         *
         * @webnative
         */
        this.selectionDirection = null;
        /**
         * Get or set the ending position or offset of a text selection.
         *
         * > **_NOTE:_** This property has no effect when used as an attribute.
         *
         * @webnative
         */
        this.selectionEnd = null;
        /**
         * Get or set the starting position or offset of a text selection.
         *
         * > **_NOTE:_** This property has no effect when used as an attribute.
         *
         * @webnative
         */
        this.selectionStart = null;
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
         * True if `<qds-textarea>` will be validated when the form is submitted;
         * false otherwise.
         *
         * @readonly
         * @webnative
         */
        this.willValidate = false;
        _TextArea_inheritedAttributes.set(this, {});
        _TextArea_textarea.set(this, void 0);
        this.checkValidity = () => this.internals.checkValidity();
        this.reportValidity = () => this.internals.reportValidity();
        this.setCustomValidity = (error) => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            __classPrivateFieldGet(this, _TextArea_textarea, "f").setCustomValidity(error);
            if (error)
                this.internals.setValidity(CUSTOM_ERROR_FLAGS, error, __classPrivateFieldGet(this, _TextArea_textarea, "f"));
            else
                this.internals.setValidity(NO_ERROR_FLAGS);
        };
        this.select = () => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            __classPrivateFieldGet(this, _TextArea_textarea, "f").select();
        };
        this.setRangeText = (replacement, start, end, selectionMode) => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            __classPrivateFieldGet(this, _TextArea_textarea, "f").setRangeText(replacement, start, end, selectionMode);
            if (this.value !== __classPrivateFieldGet(this, _TextArea_textarea, "f").value) {
                this.value = __classPrivateFieldGet(this, _TextArea_textarea, "f").value;
                this.inputEmitter.emit();
                this.changeEmitter.emit();
            }
        };
        this.setSelectionRange = (start, end, direction) => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            __classPrivateFieldGet(this, _TextArea_textarea, "f").setSelectionRange(start, end, direction);
        };
        _TextArea_getSelectionDirection.set(this, () => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            return __classPrivateFieldGet(this, _TextArea_textarea, "f").selectionDirection;
        });
        _TextArea_getSelectionStart.set(this, () => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            return __classPrivateFieldGet(this, _TextArea_textarea, "f").selectionStart;
        });
        _TextArea_getSelectionEnd.set(this, () => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            return __classPrivateFieldGet(this, _TextArea_textarea, "f").selectionEnd;
        });
        _TextArea_ref.set(this, (textarea) => {
            __classPrivateFieldSet(this, _TextArea_textarea, textarea, "f");
        });
        _TextArea_onBlur.set(this, (event) => {
            this.blurEmitter.emit(pickFocusEventAttributes(event));
        });
        _TextArea_onChange.set(this, () => {
            this.changeEmitter.emit();
        });
        _TextArea_onFocus.set(this, (event) => {
            this.focusEmitter.emit(pickFocusEventAttributes(event));
        });
        _TextArea_onInput.set(this, (event) => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            this.value = __classPrivateFieldGet(this, _TextArea_textarea, "f").value;
            this.inputEmitter.emit(pickInputEventAttributes(event));
        });
        _TextArea_onSlotchange.set(this, () => {
            invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
            __classPrivateFieldGet(this, _TextArea_textarea, "f").innerHTML = this.host.innerHTML;
        });
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _TextArea_instances, "a", _TextArea_computedDisabled_get))
            event.stopImmediatePropagation();
    }
    disabledChanged() {
        if (__classPrivateFieldGet(this, _TextArea_instances, "a", _TextArea_computedDisabled_get))
            // eslint-disable-next-line unicorn/no-null
            this.internals.setFormValue(null);
        else
            this.internals.setFormValue(__classPrivateFieldGet(this, _TextArea_instances, "a", _TextArea_computedValue_get));
    }
    selectionDirectionChanged() {
        invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
        // @ts-expect-error: `null` is a valid value according to the HTML spec.
        __classPrivateFieldGet(this, _TextArea_textarea, "f").selectionDirection = this.selectionDirection;
    }
    selectionEndChanged() {
        invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
        // @ts-expect-error: `null` is a valid value according to the HTML spec.
        __classPrivateFieldGet(this, _TextArea_textarea, "f").selectionEnd = this.selectionEnd;
    }
    selectionStartChanged() {
        invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
        // @ts-expect-error: `null` is a valid value according to the HTML spec.
        __classPrivateFieldGet(this, _TextArea_textarea, "f").selectionStart = this.selectionStart;
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    validationChanged() {
        invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
        if (this.maxLength !== undefined)
            __classPrivateFieldGet(this, _TextArea_textarea, "f").maxLength = this.maxLength;
        if (this.minLength !== undefined)
            __classPrivateFieldGet(this, _TextArea_textarea, "f").minLength = this.minLength;
        __classPrivateFieldGet(this, _TextArea_textarea, "f").required = this.required ?? false;
        // eslint-disable-next-line unicorn/no-null
        if (this.value != null)
            __classPrivateFieldGet(this, _TextArea_textarea, "f").value = this.value.toString();
        const { valid } = __classPrivateFieldGet(this, _TextArea_textarea, "f").validity;
        if (valid)
            this.internals.setValidity(NO_ERROR_FLAGS, undefined, __classPrivateFieldGet(this, _TextArea_textarea, "f"));
        else
            this.internals.setValidity(__classPrivateFieldGet(this, _TextArea_textarea, "f").validity, __classPrivateFieldGet(this, _TextArea_textarea, "f").validationMessage, __classPrivateFieldGet(this, _TextArea_textarea, "f"));
    }
    valueChanged() {
        if (!__classPrivateFieldGet(this, _TextArea_instances, "a", _TextArea_computedDisabled_get))
            this.internals.setFormValue(__classPrivateFieldGet(this, _TextArea_instances, "a", _TextArea_computedValue_get));
    }
    componentWillLoad() {
        __classPrivateFieldGet(this, _TextArea_instances, "m", _TextArea_defineGetter).call(this, 'form', () => this.internals.form);
        __classPrivateFieldGet(this, _TextArea_instances, "m", _TextArea_defineGetter).call(this, 'willValidate', () => this.internals.willValidate);
        __classPrivateFieldGet(this, _TextArea_instances, "m", _TextArea_defineGetter).call(this, 'validity', () => this.internals.validity);
        __classPrivateFieldGet(this, _TextArea_instances, "m", _TextArea_defineGetter).call(this, 'validationMessage', () => this.internals.validationMessage);
        __classPrivateFieldGet(this, _TextArea_instances, "m", _TextArea_defineGetter).call(this, 'labels', () => this.internals.labels);
        __classPrivateFieldGet(this, _TextArea_instances, "m", _TextArea_defineGetter).call(this, 'selectionDirection', __classPrivateFieldGet(this, _TextArea_getSelectionDirection, "f"));
        __classPrivateFieldGet(this, _TextArea_instances, "m", _TextArea_defineGetter).call(this, 'selectionStart', __classPrivateFieldGet(this, _TextArea_getSelectionStart, "f"));
        __classPrivateFieldGet(this, _TextArea_instances, "m", _TextArea_defineGetter).call(this, 'selectionEnd', __classPrivateFieldGet(this, _TextArea_getSelectionEnd, "f"));
        __classPrivateFieldSet(this, _TextArea_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    componentDidLoad() {
        invariant(__classPrivateFieldGet(this, _TextArea_textarea, "f"));
        this.validationChanged();
        this.valueChanged();
    }
    render() {
        return (h(Host, { key: '3d90ed4fa28f54ac3676c2da3b7c78875322bf60' }, h("textarea", { key: '6636101c90c14b78e81f7121c2a1a948cebcaefa', autoCapitalize: this.host.autocapitalize, autoComplete: this.autoComplete,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: this.host.autofocus, class: "qds-textarea", cols: this.cols, "data-size": this.size ?? 'standard', disabled: this.disabled, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, maxLength: this.maxLength, minLength: this.minLength, onBlur: __classPrivateFieldGet(this, _TextArea_onBlur, "f"), onChange: __classPrivateFieldGet(this, _TextArea_onChange, "f"), onFocus: __classPrivateFieldGet(this, _TextArea_onFocus, "f"), onInput: __classPrivateFieldGet(this, _TextArea_onInput, "f"), placeholder: this.placeholder, ref: __classPrivateFieldGet(this, _TextArea_ref, "f"), rows: this.rows, spellcheck: this.host.spellcheck, tabIndex: __classPrivateFieldGet(this, _TextArea_instances, "a", _TextArea_computedDisabled_get) ? undefined : this.tabIndex, wrap: this.wrap, ...__classPrivateFieldGet(this, _TextArea_inheritedAttributes, "f") }), h("slot", { key: '7f654f572a7ba49acb68addb731b811ba76c71f5', onSlotchange: __classPrivateFieldGet(this, _TextArea_onSlotchange, "f") })));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get host() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"],
        "selectionDirection": ["selectionDirectionChanged"],
        "selectionEnd": ["selectionEndChanged"],
        "selectionStart": ["selectionStartChanged"],
        "tabindex": ["tabindexChanged"],
        "maxLength": ["validationChanged"],
        "minLength": ["validationChanged"],
        "required": ["validationChanged"],
        "value": ["validationChanged", "valueChanged"]
    }; }
};
_TextArea_inheritedAttributes = new WeakMap(), _TextArea_textarea = new WeakMap(), _TextArea_getSelectionDirection = new WeakMap(), _TextArea_getSelectionStart = new WeakMap(), _TextArea_getSelectionEnd = new WeakMap(), _TextArea_ref = new WeakMap(), _TextArea_onBlur = new WeakMap(), _TextArea_onChange = new WeakMap(), _TextArea_onFocus = new WeakMap(), _TextArea_onInput = new WeakMap(), _TextArea_onSlotchange = new WeakMap(), _TextArea_instances = new WeakSet(), _TextArea_computedDisabled_get = function _TextArea_computedDisabled_get() {
    return ((this.host.matches(':disabled') || (this.disabled ?? false)) &&
        this.host.getAttribute('disabled') !== 'false');
}, _TextArea_computedValue_get = function _TextArea_computedValue_get() {
    if (typeof this.value === 'number')
        return this.value.toString();
    // eslint-disable-next-line unicorn/no-null
    return this.value === undefined ? null : this.value;
}, _TextArea_defineGetter = function _TextArea_defineGetter(p, get) {
    Object.defineProperty(this.host, p, { enumerable: true, get });
};
TextArea.style = QdsTextareaStyle0;

export { TextArea as qds_textarea };

//# sourceMappingURL=qds-textarea.entry.js.map