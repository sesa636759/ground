/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

const chipCss = ":host([hidden]){display:none!important}:host{display:block}[aria-disabled=true]{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.qds-label{display:flex}.qds-container{min-width:0}.qds-target{-webkit-appearance:none;appearance:none;background-color:initial;border:none;color:inherit;cursor:pointer;display:flex;outline:none;padding:0;pointer-events:auto}.qds-target:disabled{pointer-events:none}.qds-alignment{align-items:center;display:flex}.qds-cursor{cursor:pointer}.qds-icon{flex-shrink:0}.qds-closable-chip,.qds-container{align-items:center;-webkit-appearance:none;appearance:none;background-color:initial;border:var(--qds-control-border-width) solid var(--qds-theme-control-border);border-radius:var(--qds-control-rounded-border-radius);box-sizing:border-box;color:var(--qds-theme-control-text-standard);display:inline-flex;justify-content:center;padding-block:0;-webkit-user-select:none;user-select:none}.qds-closable-chip{pointer-events:none}.qds-closable-chip:focus-within{outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-container:hover{background-color:var(--qds-theme-interactive-background-hover)}.qds-checkbox:active~.qds-container,.qds-closable-chip:has(.qds-target:active),.qds-container.qds-pressed-state{background-color:var(--qds-theme-interactive-background-pressed)}.qds-container.qds-selected-state{background-color:var(--qds-theme-interactive-background-selected)}.qds-checkbox{clip-path:inset(50%);margin:0;position:absolute}.qds-checkbox:focus-visible~.qds-container{outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-closable-chip[data-size=small],.qds-container[data-size=small]{gap:var(--qds-control-small-gap-internal);height:var(--qds-control-small-height);padding-inline:var(--qds-control-chip-small-padding-horizontal)}.qds-icon[data-size=small]{--qds-experimental-icon-click-target-size:var(--qds-control-small-height);height:var(--qds-control-small-icon-size);width:var(--qds-control-small-icon-size)}.qds-text[data-size=small]{font:var(--qds-control-small-text);line-height:normal}.qds-closable-chip[data-size=standard],.qds-container[data-size=standard]{gap:var(--qds-control-standard-gap-internal);height:var(--qds-control-standard-height);padding-inline:var(--qds-control-chip-standard-padding-horizontal)}.qds-icon[data-size=standard]{--qds-experimental-icon-click-target-size:var(\n      --qds-control-standard-height\n    );height:var(--qds-control-standard-icon-size);width:var(--qds-control-standard-icon-size)}.qds-text[data-size=standard]{font:var(--qds-control-standard-text);line-height:normal}.qds-closable-chip[data-size=large],.qds-container[data-size=large]{gap:var(--qds-control-large-gap-internal);height:var(--qds-control-large-height);padding-inline:var(--qds-control-chip-large-padding-horizontal)}.qds-icon[data-size=large]{--qds-experimental-icon-click-target-size:var(--qds-control-large-height);height:var(--qds-control-large-icon-size);width:var(--qds-control-large-icon-size)}.qds-text[data-size=large]{font:var(--qds-control-large-text);line-height:normal}";
const QdsChipStyle0 = chipCss;

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
var _Chip_instances, _Chip_chip, _Chip_span, _Chip_ro, _Chip_inheritedAttributes, _Chip_ariaLabel_get, _Chip_computedDisabled_get, _Chip_computedSize_get, _Chip_computedType_get, _Chip_computedChecked_get, _Chip_computedValue_get, _Chip_onIconClick, _Chip_onFocus, _Chip_onBlur, _Chip_chipRef, _Chip_spanRef, _Chip_tooltipRef;
const Chip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.blurEmitter = index.createEvent(this, "qdsBlur", 2);
        this.focusEmitter = index.createEvent(this, "qdsFocus", 2);
        this.closeEmitter = index.createEvent(this, "qdsClose", 6);
        this.changeEmitter = index.createEvent(this, "qdsChange", 6);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        _Chip_instances.add(this);
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * The chip's size.
         */
        this.size = 'standard';
        /**
         * The chip's type.
         */
        this.type = 'selectable';
        /**
         * The [`<form>`](https://developer.mozilla.org/docs/Web/HTML/Element/form)
         * element to associate the chip with (its form owner).
         *
         * The value of this property must be the id of a `<form>` in the same
         * document. If this property is not set, the `<qds-chip>` is associated
         * with its ancestor `<form>` element, if any.
         *
         * This property lets you associate `<qds-chip>` elements to `<form>`s
         * anywhere in the document, not just inside a `<form>`. It can also override
         *an ancestor `<form>` element.
         *
         * @webnative
         */
        // eslint-disable-next-line unicorn/no-null
        this.form = null;
        /**
         * The value of the chip, submitted as a name/value pair with form data.
         *
         * @webnative
         */
        this.value = 'on';
        this.isPressed = false;
        this.isSelected = false;
        this.tooltip = false;
        _Chip_chip.set(this, void 0);
        _Chip_span.set(this, void 0);
        _Chip_ro.set(this, void 0);
        _Chip_inheritedAttributes.set(this, {});
        _Chip_onIconClick.set(this, (event) => {
            if (!event.defaultPrevented && __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedType_get) === 'closable')
                this.closeEmitter.emit();
        });
        _Chip_onFocus.set(this, (event) => {
            this.focusEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
        _Chip_onBlur.set(this, (event) => {
            this.blurEmitter.emit(helpers.pickFocusEventAttributes(event));
        });
        _Chip_chipRef.set(this, (chip) => {
            __classPrivateFieldSet(this, _Chip_chip, chip, "f");
        });
        _Chip_spanRef.set(this, (span) => {
            __classPrivateFieldSet(this, _Chip_span, span, "f");
        });
        _Chip_tooltipRef.set(this, (tooltip) => {
            if (tooltip)
                // eslint-disable-next-line no-param-reassign
                tooltip.target = __classPrivateFieldGet(this, _Chip_chip, "f");
        });
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get)) {
            event.stopImmediatePropagation();
            return;
        }
        event.preventDefault();
        if (__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedType_get) === 'selectable') {
            this.checked = !__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedChecked_get);
            this.changeEmitter.emit();
        }
    }
    handleKeyDown(event) {
        if (__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get)) {
            event.stopImmediatePropagation();
            return;
        }
        if (event.key === ' ') {
            this.isPressed = true;
            event.preventDefault();
        }
        else if (event.key === 'Enter' && this.internals.form) {
            this.internals.form.requestSubmit();
            event.preventDefault();
        }
    }
    handleKeyUp(event) {
        if (event.key !== ' ')
            return;
        this.isPressed = false;
        if (__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedType_get) === 'closable')
            this.closeEmitter.emit();
        else {
            this.checked = !__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedChecked_get);
            this.changeEmitter.emit();
        }
    }
    checkedChanged() {
        this.isSelected = __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedChecked_get);
        this.internals.setFormValue(__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedChecked_get) && !__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get)
            ? __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedValue_get)
            : // eslint-disable-next-line unicorn/no-null
                null);
    }
    disabledChanged() {
        if (__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedChecked_get) && !__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get))
            this.internals.setFormValue(__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedValue_get));
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
        if (__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedChecked_get) && !__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get))
            this.internals.setFormValue(__classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedValue_get));
    }
    componentWillLoad() {
        this.valueChanged();
        Object.defineProperty(this.host, 'form', {
            enumerable: true,
            get: () => this.internals.form,
        });
        __classPrivateFieldSet(this, _Chip_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    componentDidLoad() {
        helpers.invariant(__classPrivateFieldGet(this, _Chip_span, "f"));
        this.tooltip = helpers.isOverflowing(__classPrivateFieldGet(this, _Chip_span, "f"));
        __classPrivateFieldSet(this, _Chip_ro, new ResizeObserver(([spanEntry]) => {
            this.tooltip = helpers.isOverflowing(spanEntry.target);
        }), "f");
        __classPrivateFieldGet(this, _Chip_ro, "f").observe(__classPrivateFieldGet(this, _Chip_span, "f"));
    }
    disconnectedCallback() {
        if (__classPrivateFieldGet(this, _Chip_ro, "f"))
            __classPrivateFieldGet(this, _Chip_ro, "f").disconnect();
    }
    render() {
        return (index.h("div", { key: '7f0a1fe641b2e15f3ab3bf3f17970be852da3681', class: "qds-chip", ref: __classPrivateFieldGet(this, _Chip_chipRef, "f") }, __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedType_get) === 'closable' && (index.h("div", { key: 'c737c3890293d99a77422b024bd918691da1a948', "aria-disabled": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get) ? 'true' : undefined, class: {
                'qds-container': true,
                'qds-closable-chip': true,
                'qds-pressed-state': this.isPressed,
            }, "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get) }, this.iconName !== undefined && this.iconName !== '' && (index.h("qds-icon", { key: '17b09b428db0f0fac2a9c81763249b4387ee97ba', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get), library: this.iconLibrary, name: this.iconName })), index.h("span", { key: '912867a4c7c1a6b239e21084e36b933dd9266129', class: "qds-text", "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get), ref: __classPrivateFieldGet(this, _Chip_spanRef, "f") }, this.text), index.h("button", { key: '0dd278717916ffc8fc240e0a9eeef132b64130b1', "aria-label": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_ariaLabel_get), class: "qds-target", "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get), disabled: __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get), onClick: __classPrivateFieldGet(this, _Chip_onIconClick, "f"), tabIndex: __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get) ? undefined : this.tabIndex, type: "button", ...__classPrivateFieldGet(this, _Chip_inheritedAttributes, "f") }, index.h("qds-icon", { key: '4b36ddcd922c2c1f1f16a43cf744087ea9f6093e', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get), library: "core", name: "clear" })))), __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedType_get) === 'selectable' && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        index.h("label", { key: 'b673d4ef5df3661c2ba0e6d36351b60d6cba1cd0', "aria-disabled": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get) ? 'true' : undefined, class: "qds-label" }, index.h("input", { key: '48db37e17d551552900ebf77789be503953bdd18',
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: this.host.autofocus, checked: this.checked, class: "qds-checkbox", "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get), disabled: __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get), name: this.name, onBlur: __classPrivateFieldGet(this, _Chip_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _Chip_onFocus, "f"), tabIndex: __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedDisabled_get) ? undefined : this.tabIndex, type: "checkbox", value: this.value ?? undefined, ...__classPrivateFieldGet(this, _Chip_inheritedAttributes, "f") }), index.h("div", { key: '87055dd30ca05fdde38070fbfc32551271bf8dcd', class: {
                'qds-container': true,
                'qds-pressed-state': this.isPressed,
                'qds-selected-state': this.isSelected,
                'qds-padding-end': true,
                'qds-cursor': true,
            }, "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get) }, (this.checked ?? false) && (index.h("qds-icon", { key: '9a27f7770c99ce8a54efddad2efe7689abae1b7f', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get), library: "core", name: "checked" })), this.iconName !== undefined && this.iconName !== '' && (index.h("qds-icon", { key: 'bd162591cba44ac9c28fdace2a39bd9904d0dece', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get), library: this.iconLibrary, name: this.iconName })), index.h("span", { key: '3df4aaddfd4316f69582818c9ffc163102c8f383', class: "qds-text", "data-size": __classPrivateFieldGet(this, _Chip_instances, "a", _Chip_computedSize_get), ref: __classPrivateFieldGet(this, _Chip_spanRef, "f") }, this.text)))), this.tooltip && (index.h("qds-tooltip", { key: '4f19548c13dfb07a5d1e31cfcc453dbefe6efd6d', "aria-hidden": "true", ref: __classPrivateFieldGet(this, _Chip_tooltipRef, "f"), trigger: "pointerenter focusin" }, this.text))));
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
_Chip_chip = new WeakMap(), _Chip_span = new WeakMap(), _Chip_ro = new WeakMap(), _Chip_inheritedAttributes = new WeakMap(), _Chip_onIconClick = new WeakMap(), _Chip_onFocus = new WeakMap(), _Chip_onBlur = new WeakMap(), _Chip_chipRef = new WeakMap(), _Chip_spanRef = new WeakMap(), _Chip_tooltipRef = new WeakMap(), _Chip_instances = new WeakSet(), _Chip_ariaLabel_get = function _Chip_ariaLabel_get() {
    return `Delete ${this.text} selection`;
}, _Chip_computedDisabled_get = function _Chip_computedDisabled_get() {
    return this.disabled ?? false;
}, _Chip_computedSize_get = function _Chip_computedSize_get() {
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
}, _Chip_computedType_get = function _Chip_computedType_get() {
    switch (this.type) {
        case 'selectable':
        case 'closable': {
            return this.type;
        }
        default: {
            return 'selectable';
        }
    }
}, _Chip_computedChecked_get = function _Chip_computedChecked_get() {
    return this.checked ?? false;
}, _Chip_computedValue_get = function _Chip_computedValue_get() {
    // eslint-disable-next-line unicorn/no-null
    return this.value == null ? null : this.value.toString();
};
Chip.style = QdsChipStyle0;

exports.qds_chip = Chip;

//# sourceMappingURL=qds-chip.cjs.entry.js.map