/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');
const controls = require('./controls-ee3d2ec8.js');

const inputCss = ":host([hidden]){display:none!important}:host{display:inline-block}@-moz-document url-prefix(){[type=date]~.qds-icon-container,[type=datetime-local]~.qds-icon-container,[type=month]~.qds-icon-container,[type=time]~.qds-icon-container,[type=week]~.qds-icon-container{display:none}}.qds-container,.qds-input{max-width:inherit;width:inherit}.qds-container{align-content:flex-start;align-items:center;box-sizing:border-box;display:grid;grid-template-areas:\"a\"}.qds-icon{--qds-theme-interactive-background-hover:none;--qds-theme-interactive-background-pressed:none;--qds-control-small-height:var(--qds-control-small-icon-size);flex-shrink:0}.qds-icon-container,.qds-input{grid-area:a}.qds-icon-container{align-items:center;display:flex;justify-content:center;justify-self:end;padding-inline-end:var(--qds-control-input-padding-horizontal)}.qds-icon-container.no-padding{padding-inline-end:0}.qds-focus-ring{border-radius:max(1px,var(\n        --qds-control-border-radius-top-left,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-top-right,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-bottom-right,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-bottom-left,var(--qds-control-border-radius)\n      ));grid-area:a;height:calc(100% + var(--qds-control-border-width) - var(--qds-control-border-width-block-end, var(--qds-control-border-width)));isolation:isolate;outline:var(--qds-control-input-focus-border-width) solid var(--qds-theme-control-input-focus-border);pointer-events:none;visibility:hidden;width:calc(100% + var(--qds-control-border-width) - var(\n        --qds-control-border-width-inline-end,\n        var(--qds-control-border-width)\n      ))}[data-size=small]{font:var(--qds-control-small-text);height:var(--qds-control-small-height)}.qds-icon[data-size=small]{--qds-experimental-icon-click-target-size:var(--qds-control-small-height);height:var(--qds-control-small-icon-size);width:var(--qds-control-small-icon-size)}[data-size=small]~.qds-icon-container{gap:var(--qds-control-small-gap-internal);margin-inline-start:var(--qds-control-small-gap-internal)}[data-size=small][type=date],[data-size=small][type=datetime-local],[data-size=small][type=email],[data-size=small][type=month],[data-size=small][type=tel],[data-size=small][type=time],[data-size=small][type=url],[data-size=small][type=week]{padding-inline:var(--qds-control-input-padding-horizontal) calc(var(--qds-control-input-padding-horizontal) + var(--qds-control-small-height))}[data-size=small][type=file]::file-selector-button{font:var(--qds-control-small-text);height:var(--qds-control-small-height);margin-inline-end:var(--qds-control-small-gap-siblings-related);padding-inline:var(--qds-control-button-small-padding-horizontal)}[data-size=small][type=number]::-webkit-inner-spin-button,[data-size=small][type=number]::-webkit-outer-spin-button{margin-inline-start:var(--qds-control-small-gap-internal)}[data-size=small][type=search]{padding-inline:var(--qds-control-input-padding-horizontal) calc(var(--qds-control-small-height) + var(--qds-control-small-icon-size) + var(--qds-control-input-padding-horizontal) + var(--qds-control-small-gap-internal))}[data-size=standard]{font:var(--qds-control-standard-text);height:var(--qds-control-standard-height)}.qds-icon[data-size=standard]{--qds-experimental-icon-click-target-size:var(\n      --qds-control-standard-height\n    );height:var(--qds-control-standard-icon-size);width:var(--qds-control-standard-icon-size)}[data-size=standard]~.qds-icon-container{gap:var(--qds-control-standard-gap-internal);margin-inline-start:var(--qds-control-standard-gap-internal)}[data-size=standard][type=date],[data-size=standard][type=datetime-local],[data-size=standard][type=email],[data-size=standard][type=month],[data-size=standard][type=tel],[data-size=standard][type=time],[data-size=standard][type=url],[data-size=standard][type=week]{padding-inline:var(--qds-control-input-padding-horizontal) calc(var(--qds-control-input-padding-horizontal) + var(--qds-control-standard-height))}[data-size=standard][type=file]::file-selector-button{font:var(--qds-control-standard-text);height:var(--qds-control-standard-height);margin-inline-end:var(--qds-control-standard-gap-siblings-related);padding-inline:var(--qds-control-button-standard-padding-horizontal)}[data-size=standard][type=number]::-webkit-inner-spin-button,[data-size=standard][type=number]::-webkit-outer-spin-button{margin-inline-start:var(--qds-control-standard-gap-internal)}[data-size=standard][type=search]{padding-inline:var(--qds-control-input-padding-horizontal) calc(var(--qds-control-small-height) + var(--qds-control-standard-icon-size) + var(--qds-control-input-padding-horizontal) + var(--qds-control-standard-gap-internal))}[data-size=large]{font:var(--qds-control-large-text);height:var(--qds-control-large-height)}.qds-icon[data-size=large]{--qds-experimental-icon-click-target-size:var(--qds-control-large-height);height:var(--qds-control-large-icon-size);width:var(--qds-control-large-icon-size)}[data-size=large]~.qds-icon-container{gap:var(--qds-control-large-gap-internal);margin-inline-start:var(--qds-control-large-gap-internal)}[data-size=large][type=date],[data-size=large][type=datetime-local],[data-size=large][type=email],[data-size=large][type=month],[data-size=large][type=tel],[data-size=large][type=time],[data-size=large][type=url],[data-size=large][type=week]{padding-inline:var(--qds-control-input-padding-horizontal) calc(var(--qds-control-input-padding-horizontal) + var(--qds-control-large-height))}[data-size=large][type=file]::file-selector-button{font:var(--qds-control-large-text);height:var(--qds-control-large-height);margin-inline-end:var(--qds-control-large-gap-siblings-related);padding-inline:var(--qds-control-button-large-padding-horizontal)}[data-size=large][type=number]::-webkit-inner-spin-button,[data-size=large][type=number]::-webkit-outer-spin-button{margin-inline-start:var(--qds-control-large-gap-internal)}[data-size=large][type=search]{padding-inline:var(--qds-control-input-padding-horizontal) calc(var(--qds-control-small-height) + var(--qds-control-large-icon-size) + var(--qds-control-input-padding-horizontal) + var(--qds-control-large-gap-internal))}.qds-input{-webkit-appearance:textfield;appearance:textfield;background-color:var(--qds-theme-control-input-background);border-color:var(--qds-theme-control-border);border-radius:var(\n      --qds-control-border-radius-top-left,var(--qds-control-border-radius)\n    ) var(--qds-control-border-radius-top-right,var(--qds-control-border-radius)) var(\n      --qds-control-border-radius-bottom-right,var(--qds-control-border-radius)\n    ) var(\n      --qds-control-border-radius-bottom-left,var(--qds-control-border-radius)\n    );border-style:solid;border-width:var(--qds-control-border-width) var(--qds-control-border-width-inline-end,var(--qds-control-border-width)) var(--qds-control-border-width-block-end,var(--qds-control-border-width)) var(--qds-control-border-width);box-sizing:border-box;color:var(--qds-theme-control-text-standard);grid-area:a;padding-block:0;padding-inline:var(--qds-control-input-padding-horizontal)}.qds-input.qds-hide~.qds-icon-container{display:none}.qds-input:disabled{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-input:focus-visible{outline:none}.qds-input:focus-visible~.qds-focus-ring{visibility:visible}.qds-input:placeholder-shown{color:var(--qds-theme-control-text-placeholder)}.qds-input:not(:focus):user-invalid{border-color:var(--qds-theme-feedback-result-failure)}.qds-input::-webkit-search-cancel-button,.qds-input:is([type=date],[type=datetime-local],[type=month],[type=time],[type=week])::-webkit-calendar-picker-indicator{cursor:pointer;display:none}.qds-input[type=file]{padding-block:var(--qds-control-input-padding-horizontal)}.qds-input[type=file]::file-selector-button{background-color:initial;border:var(--qds-control-border-width) solid var(--qds-theme-control-border);border-radius:var(--qds-control-border-radius);color:var(--qds-theme-control-text-standard)}.qds-input[type=file]::file-selector-button:hover{background-color:var(--qds-theme-interactive-background-hover)}.qds-input[type=file]::file-selector-button:active{background-color:var(--qds-theme-interactive-background-pressed)}.qds-input[type=color],.qds-input[type=number],.qds-input[type=password],.qds-input[type=text]{padding-inline:var(--qds-control-input-padding-horizontal)}.qds-input[type=color]{-webkit-appearance:none;appearance:none;cursor:pointer;min-width:50px;padding-block:var(--qds-control-input-padding-horizontal)}.qds-input[type=color]::-webkit-color-swatch-wrapper{padding:0}.qds-input[type=color]::-webkit-color-swatch{border:var(--qds-control-border-width) solid var(--qds-theme-control-border);border-radius:var(--qds-control-border-radius)}.qds-input[type=color]::-moz-color-swatch{border:var(--qds-control-border-width) solid var(--qds-theme-control-border);border-radius:var(--qds-control-border-radius)}.qds-input[type=color]:hover{background-color:var(--qds-theme-interactive-background-hover)}.qds-input[type=color]:active{background-color:var(--qds-theme-interactive-background-pressed)}.qds-input.qds-search-padding[data-size=large],.qds-input.qds-search-padding[data-size=small],.qds-input.qds-search-padding[data-size=standard]{padding-inline:var(--qds-control-input-padding-horizontal) calc(var(--qds-control-small-height) + var(--qds-control-input-padding-horizontal))}.qds-input[data-size=large][type=file],.qds-input[data-size=small][type=file],.qds-input[data-size=standard][type=file]{height:auto}.qds-input.qds-padding[data-size=large],.qds-input.qds-padding[data-size=small],.qds-input.qds-padding[data-size=standard]{padding-inline:var(--qds-control-input-padding-horizontal)}.qds-input[data-size=large],.qds-input[data-size=small],.qds-input[data-size=standard]{@-moz-document url-prefix(){&[type=date],&[type=datetime-local],&[type=month],&[type=time],&[type=week]{padding-inline-end:var(--qds-control-input-padding-horizontal)}}}.qds-input{@-moz-document url-prefix(){&[type=number]{appearance:none}}}";
const QdsInputStyle0 = inputCss;

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
var _Input_instances, _Input_inheritedAttributes, _Input_input, _Input_computedDisabled_get, _Input_computedIconName_get, _Input_computedSize_get, _Input_computedValue_get, _Input_hasIcon_get, _Input_hasInteractiveIcon_get, _Input_ref, _Input_getFiles, _Input_onBlur, _Input_onCancel, _Input_onChange, _Input_onClear, _Input_onFocus, _Input_onInput, _Input_defineGetter;
const Input = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.blurEmitter = index.createEvent(this, "qdsBlur", 2);
        this.cancelEmitter = index.createEvent(this, "qdsCancel", 6);
        this.changeEmitter = index.createEvent(this, "qdsChange", 6);
        this.focusEmitter = index.createEvent(this, "qdsFocus", 2);
        this.inputEmitter = index.createEvent(this, "qdsInput", 6);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        _Input_instances.add(this);
        /**
         * Hide the input type's icon.
         *
         * > **_NOTE:_** Due to browser limitations, the icon may not be hidden in
         * all browsers.
         */
        this.noIcon = false;
        /**
         * The input's size.
         *
         * > **_NOTE:_** The native [`size` HTML attribute][size] is not supported.
         * CSS `width` should be used instead if this functionality is needed.
         *
         * [size]: https://developer.mozilla.org/docs/Web/HTML/Attributes/size
         */
        this.size = 'standard';
        /**
         * Returns a file list for a `file` type input.
         *
         * @readonly
         * @webnative
         */
        // eslint-disable-next-line unicorn/no-null
        this.files = null;
        /**
         * The [`<form>`][] element to associate the input with (its form owner).
         *
         * The value of this attribute must be the id of a `<form>` in the same
         * document. If this attribute is not set, the `<qds-input>` is associated
         * with its ancestor `<form>` element, if any.
         *
         * This attribute lets you associate `<qds-input>` elements to `<form>`s
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
         * `qds-input` element.
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
         * The error message that would be shown to the user if the `<qds-input>`
         * was to be checked for validity.
         *
         * @readonly
         * @webnative
         */
        this.validationMessage = '';
        /**
         * The [`ValidityState`][] object for this `<qds-input>`.
         *
         * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
         *
         * @readonly
         * @webnative
         */
        this.validity = controls.VALID_STATE;
        /**
         * True if `<qds-input>` will be validated when the form is submitted; false
         * otherwise.
         *
         * @readonly
         * @webnative
         */
        this.willValidate = false;
        _Input_inheritedAttributes.set(this, {});
        _Input_input.set(this, void 0);
        this.checkValidity = () => this.internals.checkValidity();
        this.reportValidity = () => this.internals.reportValidity();
        this.setCustomValidity = (error) => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            __classPrivateFieldGet(this, _Input_input, "f").setCustomValidity(error);
            if (error)
                this.internals.setValidity(controls.CUSTOM_ERROR_FLAGS, error, __classPrivateFieldGet(this, _Input_input, "f"));
            else
                this.internals.setValidity(controls.NO_ERROR_FLAGS);
        };
        this.select = () => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            __classPrivateFieldGet(this, _Input_input, "f").select();
        };
        this.getSelectionDirection = () => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            return __classPrivateFieldGet(this, _Input_input, "f").selectionDirection;
        };
        this.getSelectionStart = () => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            return __classPrivateFieldGet(this, _Input_input, "f").selectionStart;
        };
        this.getSelectionEnd = () => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            return __classPrivateFieldGet(this, _Input_input, "f").selectionEnd;
        };
        this.setRangeText = (replacement, start, end, selectionMode) => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            __classPrivateFieldGet(this, _Input_input, "f").setRangeText(replacement, start, end, selectionMode);
            if (this.value !== __classPrivateFieldGet(this, _Input_input, "f").value) {
                this.value = __classPrivateFieldGet(this, _Input_input, "f").value;
                this.inputEmitter.emit();
                this.changeEmitter.emit();
            }
        };
        this.setSelectionRange = (start, end, direction) => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            __classPrivateFieldGet(this, _Input_input, "f").setSelectionRange(start, end, direction);
        };
        this.stepDown = (n) => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            __classPrivateFieldGet(this, _Input_input, "f").stepDown(n);
        };
        this.stepUp = (n) => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            __classPrivateFieldGet(this, _Input_input, "f").stepUp(n);
        };
        this.showPicker = () => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            __classPrivateFieldGet(this, _Input_input, "f").showPicker();
        };
        _Input_ref.set(this, (input) => {
            __classPrivateFieldSet(this, _Input_input, input, "f");
        });
        _Input_getFiles.set(this, () => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            return __classPrivateFieldGet(this, _Input_input, "f").files;
        });
        _Input_onBlur.set(this, (event) => {
            this.blurEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
        _Input_onCancel.set(this, () => {
            this.cancelEmitter.emit();
        });
        _Input_onChange.set(this, () => {
            this.changeEmitter.emit();
        });
        _Input_onClear.set(this, () => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            __classPrivateFieldGet(this, _Input_input, "f").value = '';
            __classPrivateFieldGet(this, _Input_onInput, "f").call(this, new InputEvent('input', { inputType: 'deleteContent' }));
        });
        _Input_onFocus.set(this, (event) => {
            this.focusEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
        _Input_onInput.set(this, (event) => {
            helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
            this.value = __classPrivateFieldGet(this, _Input_input, "f").value;
            this.inputEmitter.emit(helpers.pickInputEventAttributes(event));
        });
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _Input_instances, "a", _Input_computedDisabled_get))
            event.stopImmediatePropagation();
    }
    onKeydown(event) {
        if (__classPrivateFieldGet(this, _Input_instances, "a", _Input_computedDisabled_get)) {
            event.stopImmediatePropagation();
            return;
        }
        if (event.key === 'Enter' && this.internals.form) {
            this.internals.form.requestSubmit();
            event.preventDefault();
        }
    }
    disabledChanged() {
        if (__classPrivateFieldGet(this, _Input_instances, "a", _Input_computedDisabled_get))
            // eslint-disable-next-line unicorn/no-null
            this.internals.setFormValue(null);
        else
            this.internals.setFormValue(__classPrivateFieldGet(this, _Input_instances, "a", _Input_computedValue_get));
    }
    selectionDirectionChanged() {
        helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
        __classPrivateFieldGet(this, _Input_input, "f").selectionDirection = this.selectionDirection;
    }
    selectionEndChanged() {
        helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
        __classPrivateFieldGet(this, _Input_input, "f").selectionEnd = this.selectionEnd;
    }
    selectionStartChanged() {
        helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
        __classPrivateFieldGet(this, _Input_input, "f").selectionStart = this.selectionStart;
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    validationChanged() {
        if (!__classPrivateFieldGet(this, _Input_input, "f"))
            return;
        if (__classPrivateFieldGet(this, _Input_input, "f").max !== this.max && this.max !== undefined)
            __classPrivateFieldGet(this, _Input_input, "f").max = this.max.toString();
        if (this.maxLength !== undefined)
            __classPrivateFieldGet(this, _Input_input, "f").maxLength = this.maxLength;
        if (__classPrivateFieldGet(this, _Input_input, "f").min !== this.min && this.min !== undefined)
            __classPrivateFieldGet(this, _Input_input, "f").min = this.min.toString();
        if (this.minLength !== undefined)
            __classPrivateFieldGet(this, _Input_input, "f").minLength = this.minLength;
        if (this.pattern !== undefined)
            __classPrivateFieldGet(this, _Input_input, "f").pattern = this.pattern;
        __classPrivateFieldGet(this, _Input_input, "f").required = this.required ?? false;
        if (__classPrivateFieldGet(this, _Input_input, "f").step !== this.step && this.step !== undefined)
            __classPrivateFieldGet(this, _Input_input, "f").step = this.step.toString();
        if (this.type !== undefined)
            __classPrivateFieldGet(this, _Input_input, "f").type = this.type;
        // eslint-disable-next-line unicorn/no-null
        if (this.type !== 'file' && this.value != null)
            __classPrivateFieldGet(this, _Input_input, "f").value = this.value.toString();
        const { valid } = __classPrivateFieldGet(this, _Input_input, "f").validity;
        if (valid)
            this.internals.setValidity(controls.NO_ERROR_FLAGS, undefined, __classPrivateFieldGet(this, _Input_input, "f"));
        else
            this.internals.setValidity(__classPrivateFieldGet(this, _Input_input, "f").validity, __classPrivateFieldGet(this, _Input_input, "f").validationMessage, __classPrivateFieldGet(this, _Input_input, "f"));
    }
    valueChanged() {
        if (!__classPrivateFieldGet(this, _Input_instances, "a", _Input_computedDisabled_get))
            this.internals.setFormValue(__classPrivateFieldGet(this, _Input_instances, "a", _Input_computedValue_get));
    }
    componentWillLoad() {
        __classPrivateFieldGet(this, _Input_instances, "m", _Input_defineGetter).call(this, 'form', () => this.internals.form);
        __classPrivateFieldGet(this, _Input_instances, "m", _Input_defineGetter).call(this, 'willValidate', () => this.internals.willValidate);
        __classPrivateFieldGet(this, _Input_instances, "m", _Input_defineGetter).call(this, 'validity', () => this.internals.validity);
        __classPrivateFieldGet(this, _Input_instances, "m", _Input_defineGetter).call(this, 'validationMessage', () => this.internals.validationMessage);
        __classPrivateFieldGet(this, _Input_instances, "m", _Input_defineGetter).call(this, 'files', __classPrivateFieldGet(this, _Input_getFiles, "f"));
        __classPrivateFieldGet(this, _Input_instances, "m", _Input_defineGetter).call(this, 'labels', () => this.internals.labels);
        __classPrivateFieldSet(this, _Input_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    componentDidLoad() {
        helpers.invariant(__classPrivateFieldGet(this, _Input_input, "f"));
        this.validationChanged();
        this.valueChanged();
        // FIXME: This event is supported by the native `<input>` element but not
        // recognized by Stencil's type definitions, so it needs to be manually
        // bound here.
        __classPrivateFieldGet(this, _Input_input, "f").addEventListener('cancel', __classPrivateFieldGet(this, _Input_onCancel, "f"));
    }
    disconnectedCallback() {
        if (__classPrivateFieldGet(this, _Input_input, "f"))
            __classPrivateFieldGet(this, _Input_input, "f").removeEventListener('cancel', __classPrivateFieldGet(this, _Input_onCancel, "f"));
    }
    render() {
        const hasValue = this.value !== null && this.value !== undefined && this.value !== '';
        const isSearchType = this.type === 'search';
        const shouldShowClearButton = isSearchType && hasValue;
        const shouldShowSearchIcon = isSearchType && this.noIcon === false;
        const shouldHideIcon = !isSearchType && this.noIcon === true;
        const shouldRemoveSearchPadding = isSearchType && this.noIcon === true;
        return (index.h("div", { key: '1896729930a4fad1d75e2ecb44fd73c450a046e9', class: "qds-container" }, index.h("input", { key: '496c8f82b467f762e869b4f9730806231f7cd6ad', accept: this.accept, autoCapitalize: this.host.autocapitalize, autoComplete: this.autoComplete,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: this.host.autofocus, capture: this.capture, class: {
                'qds-search-padding': shouldRemoveSearchPadding,
                'qds-input': true,
                'qds-hide': shouldHideIcon,
                'qds-padding': shouldHideIcon,
            }, "data-size": __classPrivateFieldGet(this, _Input_instances, "a", _Input_computedSize_get), disabled: this.disabled, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, max: this.max, maxLength: this.maxLength, min: this.min, minLength: this.minLength, multiple: this.multiple, onBlur: __classPrivateFieldGet(this, _Input_onBlur, "f"), onChange: __classPrivateFieldGet(this, _Input_onChange, "f"), onFocus: __classPrivateFieldGet(this, _Input_onFocus, "f"), onInput: __classPrivateFieldGet(this, _Input_onInput, "f"), placeholder: this.placeholder, ref: __classPrivateFieldGet(this, _Input_ref, "f"), spellcheck: this.host.spellcheck, step: this.step, tabIndex: __classPrivateFieldGet(this, _Input_instances, "a", _Input_computedDisabled_get) ? undefined : this.tabIndex, type: this.type, ...__classPrivateFieldGet(this, _Input_inheritedAttributes, "f") }), index.h("div", { key: '4fb72502435349071f8c43222f51b34ede2151b9', class: "qds-focus-ring" }), __classPrivateFieldGet(this, _Input_instances, "a", _Input_computedIconName_get) && (index.h("div", { key: '3ee0c7c55a1bb74eb802db9e11786d799c39bf52', class: {
                'qds-icon-container': true,
                'no-padding': shouldRemoveSearchPadding,
            } }, shouldShowClearButton && (index.h("qds-button", { key: 'ebb601275245ac08328e30a4b37f1c14f4b41ea0', class: {
                'qds-icon': true,
                'qds-hide': !hasValue,
            }, disabled: this.disabled, iconLibrary: "core", iconName: "clear", iconOnly: true, importance: "subdued", onClick: __classPrivateFieldGet(this, _Input_onClear, "f"), size: "small", text: "clear input" })), __classPrivateFieldGet(this, _Input_instances, "a", _Input_hasIcon_get) && (index.h("qds-icon", { key: 'e343dcff629da268d611ee78a7a8ee90f957aa11', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Input_instances, "a", _Input_computedSize_get), library: "core", name: __classPrivateFieldGet(this, _Input_instances, "a", _Input_computedIconName_get) })), __classPrivateFieldGet(this, _Input_instances, "a", _Input_hasInteractiveIcon_get) && (index.h("qds-button", { key: '4963e7f006cc65254da5d52a2570aea71cf7048a', class: "qds-icon", disabled: this.disabled, iconLibrary: "core", iconName: __classPrivateFieldGet(this, _Input_instances, "a", _Input_computedIconName_get), iconOnly: true, importance: "subdued", onClick: this.showPicker, size: "small", text: this.type ?? '' })), shouldShowSearchIcon ? (index.h("qds-icon", { "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Input_instances, "a", _Input_computedSize_get), library: "core", name: __classPrivateFieldGet(this, _Input_instances, "a", _Input_computedIconName_get) })) : (index.h("div", null))))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"],
        "selectionDirection": ["selectionDirectionChanged"],
        "selectionEnd": ["selectionEndChanged"],
        "selectionStart": ["selectionStartChanged"],
        "tabindex": ["tabindexChanged"],
        "max": ["validationChanged"],
        "maxLength": ["validationChanged"],
        "min": ["validationChanged"],
        "minLength": ["validationChanged"],
        "pattern": ["validationChanged"],
        "required": ["validationChanged"],
        "step": ["validationChanged"],
        "type": ["validationChanged"],
        "value": ["validationChanged", "valueChanged"]
    }; }
};
_Input_inheritedAttributes = new WeakMap(), _Input_input = new WeakMap(), _Input_ref = new WeakMap(), _Input_getFiles = new WeakMap(), _Input_onBlur = new WeakMap(), _Input_onCancel = new WeakMap(), _Input_onChange = new WeakMap(), _Input_onClear = new WeakMap(), _Input_onFocus = new WeakMap(), _Input_onInput = new WeakMap(), _Input_instances = new WeakSet(), _Input_computedDisabled_get = function _Input_computedDisabled_get() {
    return this.host.matches(':disabled') || (this.disabled ?? false);
}, _Input_computedIconName_get = function _Input_computedIconName_get() {
    switch (this.type) {
        case 'date':
        case 'datetime-local':
        case 'email':
        case 'month':
        case 'search':
        case 'tel':
        case 'time':
        case 'url':
        case 'week': {
            return `input-${this.type}`;
        }
        default: {
            return undefined;
        }
    }
}, _Input_computedSize_get = function _Input_computedSize_get() {
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
}, _Input_computedValue_get = function _Input_computedValue_get() {
    if (typeof this.value === 'number')
        return this.value.toString();
    // eslint-disable-next-line unicorn/no-null
    return this.value === undefined ? null : this.value;
}, _Input_hasIcon_get = function _Input_hasIcon_get() {
    return (typeof this.type === 'string' &&
        ['email', 'tel', 'url'].includes(this.type));
}, _Input_hasInteractiveIcon_get = function _Input_hasInteractiveIcon_get() {
    return (typeof this.type === 'string' &&
        ['month', 'time', 'date', 'datetime-local', 'week'].includes(this.type));
}, _Input_defineGetter = function _Input_defineGetter(p, get) {
    Object.defineProperty(this.host, p, { enumerable: true, get });
};
Input.style = QdsInputStyle0;

exports.qds_input = Input;

//# sourceMappingURL=qds-input.cjs.entry.js.map