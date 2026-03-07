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

const switchCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-knob,.qds-track{-webkit-print-color-adjust:exact;print-color-adjust:exact}.qds-track{align-items:center;background-color:var(--qds-theme-control-toggle-track-default);border-radius:var(--qds-control-toggle-track-border-radius);box-sizing:border-box;display:flex;flex-shrink:0;padding:var(--qds-control-toggle-track-padding)}.qds-track:hover{background-color:var(--qds-theme-control-toggle-track-hover)}.qds-track:active{background-color:var(--qds-theme-control-toggle-track-pressed)}.qds-knob{background-color:var(--qds-theme-control-input-background);border-radius:var(--qds-control-knob-border-radius);box-shadow:var(--qds-theme-accessory-elevation);box-sizing:border-box;margin:0}.qds-container{box-sizing:border-box;cursor:pointer;display:flex}.qds-switch{clip-path:inset(50%);height:1px;margin:0;position:absolute;white-space:nowrap;width:1px}.qds-switch:focus-visible~.qds-track{outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-switch:checked~.qds-track{background-color:var(--qds-theme-signature-color-default);justify-content:flex-end}.qds-switch:checked~.qds-track:hover{background-color:var(--qds-theme-signature-color-hover)}.qds-switch:checked~.qds-track:active{background-color:var(--qds-theme-signature-color-pressed)}.qds-disabled{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-inline[data-size=small]{margin-block:var(--qds-control-small-padding-auto-height)}.qds-track[data-size=small]{height:var(--qds-control-toggle-track-small-size);width:var(--qds-control-toggle-track-small-width)}.qds-knob[data-size=small]{height:var(--qds-control-knob-small-size);width:var(--qds-control-knob-small-size)}.qds-inline[data-size=standard]{margin-block:var(--qds-control-standard-padding-auto-height)}.qds-track[data-size=standard]{height:var(--qds-control-toggle-track-standard-height);width:var(--qds-control-toggle-track-standard-width)}.qds-knob[data-size=standard]{height:var(--qds-control-knob-standard-size);width:var(--qds-control-knob-standard-size)}.qds-inline[data-size=large]{margin-block:var(--qds-control-large-padding-auto-height)}.qds-track[data-size=large]{height:var(--qds-control-toggle-track-large-height);width:calc(var(--qds-control-toggle-track-large-height)*2)}.qds-knob[data-size=large]{height:var(--qds-control-knob-large-size);width:var(--qds-control-knob-large-size)}";
const QdsSwitchStyle0 = switchCss;

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
var _Switch_instances, _Switch_computedChecked_get, _Switch_computedDisabled_get, _Switch_computedSize_get, _Switch_computedValue_get, _Switch_onBlur, _Switch_onFocus, _Switch_defineGetter, _Switch_updateFormValue;
const Switch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.blurEmitter = index.createEvent(this, "qdsBlur", 2);
        this.changeEmitter = index.createEvent(this, "qdsChange", 6);
        this.focusEmitter = index.createEvent(this, "qdsFocus", 2);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        _Switch_instances.add(this);
        /**
         * Adds vertical margin to the switch for alignment.
         *
         * This is useful when creating inline layouts so that the first lines have
         * the correct vertical centering.
         */
        this.inline = false;
        /**
         * The switches's size.
         */
        this.size = 'standard';
        /**
         * The [`<form>`](https://developer.mozilla.org/docs/Web/HTML/Element/form)
         * element to associate the switch with (its form owner).
         *
         * The value of this property must be the id of a `<form>` in the same
         * document. If this property is not set, the `<qds-switch>` is associated
         * with its ancestor `<form>` element, if any.
         *
         * This property lets you associate `<qds-switch>` elements to `<form>`s
         * anywhere in the document, not just inside a `<form>`. It can also override
         *an ancestor `<form>` element.
         *
         * @webnative
         */
        // eslint-disable-next-line unicorn/no-null
        this.form = null;
        /**
         * Returns a list of the [`<label>`][] elements associated with the
         * `qds-switch` element.
         *
         * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
         *
         * @readonly
         * @webnative
         */
        // eslint-disable-next-line unicorn/no-null
        this.labels = null;
        /**
         * The error message that would be shown to the user if the `<qds-switch>`
         * was to be checked for validity.
         *
         * @readonly
         * @webnative
         */
        this.validationMessage = '';
        /**
         * The [`ValidityState`][] object for this `<qds-switch>`.
         *
         * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
         *
         * @readonly
         * @webnative
         */
        this.validity = controls.VALID_STATE;
        /**
         * True if `<qds-switch>` will be validated when the form is submitted;
         * false otherwise.
         *
         * @readonly
         * @webnative
         */
        this.willValidate = false;
        this.inheritedAttributes = {};
        this.checkValidity = () => this.internals.checkValidity();
        this.reportValidity = () => this.internals.reportValidity();
        this.setCustomValidity = (error) => {
            if (error)
                this.internals.setValidity(controls.CUSTOM_ERROR_FLAGS, error, this.host);
            else
                this.internals.setValidity(controls.NO_ERROR_FLAGS);
        };
        _Switch_onBlur.set(this, (event) => {
            this.blurEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
        _Switch_onFocus.set(this, (event) => {
            this.focusEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedDisabled_get)) {
            event.stopImmediatePropagation();
            return;
        }
        event.preventDefault();
        this.checked = !__classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedChecked_get);
        this.changeEmitter.emit();
    }
    checkedChanged() {
        __classPrivateFieldGet(this, _Switch_instances, "m", _Switch_updateFormValue).call(this);
        this.internals.ariaChecked = __classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedChecked_get).toString();
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _Switch_instances, "m", _Switch_updateFormValue).call(this);
        this.internals.ariaDisabled = __classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedDisabled_get).toString();
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    valueChanged() {
        __classPrivateFieldGet(this, _Switch_instances, "m", _Switch_updateFormValue).call(this);
    }
    componentWillLoad() {
        this.internals.role = 'switch';
        this.checkedChanged();
        this.disabledChanged();
        __classPrivateFieldGet(this, _Switch_instances, "m", _Switch_defineGetter).call(this, 'form', () => this.internals.form);
        __classPrivateFieldGet(this, _Switch_instances, "m", _Switch_defineGetter).call(this, 'labels', () => this.internals.labels);
        __classPrivateFieldGet(this, _Switch_instances, "m", _Switch_defineGetter).call(this, 'validationMessage', () => this.internals.validationMessage);
        __classPrivateFieldGet(this, _Switch_instances, "m", _Switch_defineGetter).call(this, 'validity', () => this.internals.validity);
        __classPrivateFieldGet(this, _Switch_instances, "m", _Switch_defineGetter).call(this, 'willValidate', () => this.internals.willValidate);
        this.inheritedAttributes = helpers.inheritAriaAttributes(this.host);
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    render() {
        return (index.h("div", { key: '342bf6f92bda0c26d06847b697962507f44ba66f', class: {
                'qds-container': true,
                'qds-disabled': __classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedDisabled_get),
                'qds-inline': this.inline,
            }, "data-size": __classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedSize_get) }, index.h("input", { key: '101c463e6970cd79c3776cf7d8e9328e3c4d8fee', "aria-hidden": "true",
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: this.host.autofocus, checked: this.checked, class: "qds-switch", disabled: this.disabled, onBlur: __classPrivateFieldGet(this, _Switch_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _Switch_onFocus, "f"), tabIndex: __classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedDisabled_get) ? undefined : this.tabIndex, type: "checkbox", value: this.value ?? undefined, ...this.inheritedAttributes }), index.h("div", { key: '58a9e90c1b9df6aec5c7dec6b95544003bc82def', class: "qds-track", "data-size": __classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedSize_get) }, index.h("div", { key: '14745582855113a1015c7d076cb8e157298af6b9', class: "qds-knob", "data-size": __classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedSize_get) }))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"],
        "tabindex": ["tabindexChanged"],
        "value": ["valueChanged"]
    }; }
};
_Switch_onBlur = new WeakMap(), _Switch_onFocus = new WeakMap(), _Switch_instances = new WeakSet(), _Switch_computedChecked_get = function _Switch_computedChecked_get() {
    return this.checked ?? false;
}, _Switch_computedDisabled_get = function _Switch_computedDisabled_get() {
    return ((this.host.matches(':disabled') || (this.disabled ?? false)) &&
        this.host.getAttribute('disabled') !== 'false');
}, _Switch_computedSize_get = function _Switch_computedSize_get() {
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
}, _Switch_computedValue_get = function _Switch_computedValue_get() {
    // eslint-disable-next-line unicorn/no-null
    return this.value == null ? null : this.value.toString();
}, _Switch_defineGetter = function _Switch_defineGetter(p, get) {
    Object.defineProperty(this.host, p, { enumerable: true, get });
}, _Switch_updateFormValue = function _Switch_updateFormValue() {
    this.internals.setFormValue(__classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedChecked_get) && !__classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedDisabled_get)
        ? __classPrivateFieldGet(this, _Switch_instances, "a", _Switch_computedValue_get)
        : // eslint-disable-next-line unicorn/no-null
            null);
};
Switch.style = QdsSwitchStyle0;

exports.qds_switch = Switch;

//# sourceMappingURL=qds-switch.cjs.entry.js.map