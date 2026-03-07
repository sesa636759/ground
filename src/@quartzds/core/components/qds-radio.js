/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, c as createEvent, h } from './p-2806fee1.js';
import { p as pickFocusEventAttributes, c as invariant, i as inheritAriaAttributes } from './p-8abba29b.js';
import { d as defineCustomElement$4 } from './p-ba880369.js';
import { d as defineCustomElement$3 } from './p-a020ece3.js';
import { d as defineCustomElement$2 } from './p-c80f112a.js';

const radioCss = "[hidden].sc-qds-radio-h{display:none!important}.sc-qds-radio-h{display:inline-block;line-height:0}.qds-box.sc-qds-radio,.qds-icon.sc-qds-radio,.qds-radio.sc-qds-radio{grid-area:g;place-self:center}.qds-box.sc-qds-radio,.qds-icon.sc-qds-radio{display:none;pointer-events:none}.qds-box.sc-qds-radio{border-radius:var(--qds-control-rounded-border-radius)}.qds-container.sc-qds-radio{align-self:flex-start;display:grid;grid-template-areas:\"g\"}.qds-icon.sc-qds-radio{color:var(--qds-theme-signature-color-contrast)}.qds-label.sc-qds-radio{cursor:pointer;display:inline-flex}.qds-radio.sc-qds-radio{-webkit-appearance:none;appearance:none;background-color:var(--qds-theme-control-input-background);border:var(--qds-control-border-width) solid var(--qds-theme-control-border);border-radius:var(--qds-control-rounded-border-radius);cursor:pointer;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}.qds-radio.sc-qds-radio:focus-visible{outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-radio.sc-qds-radio:active~.qds-box.sc-qds-radio,.qds-radio.sc-qds-radio:hover~.qds-box.sc-qds-radio{display:block}.qds-radio.sc-qds-radio:hover~.qds-box.sc-qds-radio{background-color:var(--qds-theme-signature-color-hover)}.qds-radio.sc-qds-radio:active~.qds-box.sc-qds-radio{background-color:var(--qds-theme-signature-color-pressed)}.qds-radio.sc-qds-radio:checked{background-color:var(--qds-theme-signature-color-default);border-color:#0000}.qds-radio.sc-qds-radio:checked~.qds-icon.sc-qds-radio{display:block}.qds-radio.sc-qds-radio:checked:hover{background-color:var(--qds-theme-signature-color-hover)}.qds-radio.sc-qds-radio:checked:active{background-color:var(--qds-theme-signature-color-pressed)}[aria-disabled=true].sc-qds-radio{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-radio[data-size=small].sc-qds-radio{height:var(--qds-control-toggle-box-small-size);width:var(--qds-control-toggle-box-small-size)}.qds-icon[data-size=small].sc-qds-radio{font-size:var(--qds-control-small-icon-size)}.qds-box[data-size=small].sc-qds-radio{height:var(--qds-control-toggle-indicator-small-size);width:var(--qds-control-toggle-indicator-small-size)}.qds-inline[data-size=small].sc-qds-radio{margin-block:var(--qds-control-small-padding-auto-height)}.qds-label[data-size=small].sc-qds-radio{gap:var(--qds-control-small-gap-siblings-related)}.qds-radio[data-size=standard].sc-qds-radio{height:var(--qds-control-toggle-box-standard-size);width:var(--qds-control-toggle-box-standard-size)}.qds-icon[data-size=standard].sc-qds-radio{font-size:var(--qds-control-standard-icon-size)}.qds-box[data-size=standard].sc-qds-radio{height:var(--qds-control-toggle-indicator-standard-size);width:var(--qds-control-toggle-indicator-standard-size)}.qds-inline[data-size=standard].sc-qds-radio{margin-block:var(--qds-control-standard-padding-auto-height)}.qds-label[data-size=standard].sc-qds-radio{gap:var(--qds-control-standard-gap-siblings-related)}.qds-radio[data-size=large].sc-qds-radio{height:var(--qds-control-toggle-box-large-size);width:var(--qds-control-toggle-box-large-size)}.qds-icon[data-size=large].sc-qds-radio{font-size:var(--qds-control-large-icon-size)}.qds-box[data-size=large].sc-qds-radio{height:var(--qds-control-toggle-indicator-large-size);width:var(--qds-control-toggle-indicator-large-size)}.qds-inline[data-size=large].sc-qds-radio{margin-block:var(--qds-control-large-padding-auto-height)}.qds-label[data-size=large].sc-qds-radio{gap:var(--qds-control-large-gap-siblings-related)}";
const QdsRadioStyle0 = radioCss;

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
var _Radio_instances, _Radio_inheritedAttributes, _Radio_input, _Radio_computedDisabled_get, _Radio_computedSize_get, _Radio_hasText_get, _Radio_ref, _Radio_onBlur, _Radio_onChange, _Radio_onFocus;
const Radio = /*@__PURE__*/ proxyCustomElement(class Radio extends H {
    constructor() {
        super();
        this.__registerHost();
        this.blurEmitter = createEvent(this, "qdsBlur", 2);
        this.changeEmitter = createEvent(this, "qdsChange", 6);
        this.focusEmitter = createEvent(this, "qdsFocus", 2);
        _Radio_instances.add(this);
        /**
         * Adds vertical margin to the radio for alignment.
         *
         * This is useful when creating inline layouts so that the first lines have
         * the correct vertical centering.
         */
        this.inline = false;
        /**
         * The radio button's size.
         */
        this.size = 'standard';
        _Radio_inheritedAttributes.set(this, {});
        _Radio_input.set(this, void 0);
        _Radio_ref.set(this, (input) => {
            __classPrivateFieldSet(this, _Radio_input, input, "f");
        });
        _Radio_onBlur.set(this, (event) => {
            this.blurEmitter.emit(pickFocusEventAttributes(event));
        });
        _Radio_onChange.set(this, () => {
            this.changeEmitter.emit();
        });
        _Radio_onFocus.set(this, (event) => {
            this.focusEmitter.emit(pickFocusEventAttributes(event));
        });
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _Radio_instances, "a", _Radio_computedDisabled_get)) {
            event.stopImmediatePropagation();
            return;
        }
        invariant(__classPrivateFieldGet(this, _Radio_input, "f"));
        this.checked = __classPrivateFieldGet(this, _Radio_input, "f").checked;
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Radio_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    render() {
        return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        h("label", { key: 'f99d16e9047808d58a0b9df5c82def391b8f3225', "aria-disabled": __classPrivateFieldGet(this, _Radio_instances, "a", _Radio_computedDisabled_get) ? 'true' : undefined, class: {
                'qds-inline': this.inline,
                'qds-label': true,
            }, "data-size": __classPrivateFieldGet(this, _Radio_instances, "a", _Radio_computedSize_get) }, h("div", { key: 'e4c7d0fd23677892234d64a198847fef0232fc6b', class: "qds-container" }, h("input", { key: '4a8f523abc487d43ea23ec2f507c474ce19bb7ba', checked: this.checked, class: "qds-radio", "data-size": __classPrivateFieldGet(this, _Radio_instances, "a", _Radio_computedSize_get), disabled: this.disabled, form: this.form, name: this.name, onBlur: __classPrivateFieldGet(this, _Radio_onBlur, "f"), onChange: __classPrivateFieldGet(this, _Radio_onChange, "f"), onFocus: __classPrivateFieldGet(this, _Radio_onFocus, "f"), ref: __classPrivateFieldGet(this, _Radio_ref, "f"), required: this.required, tabIndex: __classPrivateFieldGet(this, _Radio_instances, "a", _Radio_computedDisabled_get) ? undefined : this.tabIndex, type: "radio", value: this.value ?? undefined, ...__classPrivateFieldGet(this, _Radio_inheritedAttributes, "f") }), h("div", { key: 'b070acd21946c19f1aec067236a611767dc25caf', class: "qds-box", "data-size": __classPrivateFieldGet(this, _Radio_instances, "a", _Radio_computedSize_get) }), h("qds-icon", { key: '5e666d8584249258f5fdf21fa413e315c5e3950a', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Radio_instances, "a", _Radio_computedSize_get), library: "core", name: "checked" })), __classPrivateFieldGet(this, _Radio_instances, "a", _Radio_hasText_get) && (h("qds-label", { key: '7ad8a439c6144598b090192451f72f8b6f29d581', size: __classPrivateFieldGet(this, _Radio_instances, "a", _Radio_computedSize_get), text: this.text }))));
    }
    get host() { return this; }
    static get watchers() { return {
        "tabindex": ["tabindexChanged"]
    }; }
    static get style() { return QdsRadioStyle0; }
}, [2, "qds-radio", {
        "inline": [4],
        "size": [1],
        "text": [1],
        "checked": [1028],
        "disabled": [4],
        "form": [1],
        "name": [1],
        "required": [4],
        "value": [1032],
        "tabIndex": [32]
    }, [[0, "click", "onClick"]], {
        "tabindex": ["tabindexChanged"]
    }]);
_Radio_inheritedAttributes = new WeakMap(), _Radio_input = new WeakMap(), _Radio_ref = new WeakMap(), _Radio_onBlur = new WeakMap(), _Radio_onChange = new WeakMap(), _Radio_onFocus = new WeakMap(), _Radio_instances = new WeakSet(), _Radio_computedDisabled_get = function _Radio_computedDisabled_get() {
    return this.disabled ?? false;
}, _Radio_computedSize_get = function _Radio_computedSize_get() {
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
}, _Radio_hasText_get = function _Radio_hasText_get() {
    return this.text !== undefined && this.text !== '';
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-radio", "qds-icon", "qds-label", "qds-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Radio);
            }
            break;
        case "qds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "qds-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "qds-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const QdsRadio = Radio;
const defineCustomElement = defineCustomElement$1;

export { QdsRadio, defineCustomElement };

//# sourceMappingURL=qds-radio.js.map