/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, c as createEvent, h } from './p-2806fee1.js';
import { p as pickFocusEventAttributes, b as isOverflowing } from './p-8abba29b.js';
import { V as VALID_STATE, C as CUSTOM_ERROR_FLAGS, N as NO_ERROR_FLAGS } from './p-d107c90c.js';
import { d as defineCustomElement$4 } from './p-3c48ff53.js';
import { d as defineCustomElement$3 } from './p-fed0d11f.js';
import { d as defineCustomElement$2 } from './p-ba880369.js';
import { d as defineCustomElement$1 } from './p-c80f112a.js';

const buttonCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-button:disabled,.qds-disabled{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-overflow{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.qds-overflow[data-size=hero]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal}.qds-action{transform:scaleX(var(--qds-direction-factor,1))}.qds-container{display:grid;grid-template-areas:\"i\"}.qds-focus-ring{border-radius:max(1px,var(\n        --qds-control-border-radius-top-left,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-top-right,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-bottom-right,var(--qds-control-border-radius)\n      )) max(1px,var(\n        --qds-control-border-radius-bottom-left,var(--qds-control-border-radius)\n      ));grid-area:i;height:calc(100% + var(--qds-control-border-width) - var(--qds-control-border-width-block-end, var(--qds-control-border-width)));isolation:isolate;outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset);pointer-events:none;visibility:hidden;width:calc(100% + var(--qds-control-border-width) - var(\n        --qds-control-border-width-inline-end,\n        var(--qds-control-border-width)\n      ))}.qds-button{align-items:center;-webkit-appearance:none;appearance:none;background-color:initial;border:none;border-radius:var(\n      --qds-control-border-radius-top-left,var(--qds-control-border-radius)\n    ) var(--qds-control-border-radius-top-right,var(--qds-control-border-radius)) var(\n      --qds-control-border-radius-bottom-right,var(--qds-control-border-radius)\n    ) var(\n      --qds-control-border-radius-bottom-left,var(--qds-control-border-radius)\n    );box-sizing:border-box;cursor:pointer;display:inline-flex;grid-area:i;justify-content:center;min-width:0;outline:none;padding-block:0;position:relative;-webkit-print-color-adjust:exact;print-color-adjust:exact;text-align:center;-webkit-user-select:none;user-select:none}.qds-button:any-link{-webkit-text-decoration:none;text-decoration:none}.qds-button:focus-visible~.qds-focus-ring{visibility:visible}.qds-icon{flex-shrink:0}.qds-indicator{inset-block-start:0;inset-inline-end:0;position:absolute;transform:translate(50%,-50%)}[data-size=small]{font:var(--qds-control-small-text)}.qds-button[data-size=small]{gap:var(--qds-control-small-gap-internal);height:var(--qds-control-small-height);padding-inline:var(--qds-control-button-small-padding-horizontal)}.qds-button.qds-icon-only[data-size=small]{width:var(--qds-control-small-height)}.qds-icon[data-size=small]{font-size:var(--qds-control-small-icon-size)}[data-size=standard]{font:var(--qds-control-standard-text)}.qds-button[data-size=standard]{gap:var(--qds-control-standard-gap-internal);height:var(--qds-control-standard-height);padding-inline:var(--qds-control-button-standard-padding-horizontal)}.qds-button.qds-icon-only[data-size=standard]{width:var(--qds-control-standard-height)}.qds-icon[data-size=standard]{font-size:var(--qds-control-standard-icon-size)}[data-size=large]{font:var(--qds-control-large-text)}.qds-button[data-size=large]{gap:var(--qds-control-large-gap-internal);height:var(--qds-control-large-height);padding-inline:var(--qds-control-button-large-padding-horizontal)}.qds-button.qds-icon-only[data-size=large]{width:var(--qds-control-large-height)}.qds-icon[data-size=large]{font-size:var(--qds-control-large-icon-size)}[data-size=large],[data-size=small],[data-size=standard]{line-height:normal}.qds-button.qds-icon-only[data-size=large],.qds-button.qds-icon-only[data-size=small],.qds-button.qds-icon-only[data-size=standard]{padding-inline:0}[data-size=hero]{font:var(--qds-control-hero-text)}.qds-button[data-size=hero]{border-radius:var(\n        --qds-control-border-radius-top-left,var(--qds-control-hero-border-radius)\n      ) var(\n        --qds-control-border-radius-top-right,var(--qds-control-hero-border-radius)\n      ) var(\n        --qds-control-border-radius-bottom-right,var(--qds-control-hero-border-radius)\n      ) var(\n        --qds-control-border-radius-bottom-left,var(--qds-control-hero-border-radius)\n      );gap:var(--qds-control-hero-gap-internal);padding-block:var(--qds-control-hero-padding-auto-height);padding-inline:var(--qds-control-button-hero-padding-horizontal)}.qds-button.qds-icon-only[data-size=hero]{height:var(--qds-control-hero-height);padding-inline:0;width:var(--qds-control-hero-height)}.qds-focus-ring[data-size=hero]{border-radius:max(1px,var(\n          --qds-control-border-radius-top-left,var(--qds-control-hero-border-radius)\n        )) max(1px,var(\n          --qds-control-border-radius-top-right,var(--qds-control-hero-border-radius)\n        )) max(1px,var(\n          --qds-control-border-radius-bottom-right,var(--qds-control-hero-border-radius)\n        )) max(1px,var(\n          --qds-control-border-radius-bottom-left,var(--qds-control-hero-border-radius)\n        ))}.qds-icon[data-size=hero]{font-size:var(--qds-control-hero-icon-size)}[data-importance=subdued]{color:var(--qds-theme-link-standard-default)}.qds-button[data-importance=subdued]{border-block-end:var(--qds-control-border-width) solid #0000;padding-inline:0}.qds-button[data-importance=subdued]:hover{border-block-end:var(--qds-control-border-width) solid var(--qds-theme-link-standard-hover);color:var(--qds-theme-link-standard-hover)}.qds-button[data-importance=subdued]:active{border-block-end:var(--qds-control-border-width) solid var(--qds-theme-link-standard-pressed);color:var(--qds-theme-link-standard-pressed)}.qds-button[data-importance=subdued]:not(.qds-icon-only){border-radius:0}.qds-button.qds-icon-only[data-importance=subdued]{border:none;color:var(--qds-theme-control-text-standard)}.qds-button.qds-icon-only[data-importance=subdued]:hover{background-color:var(--qds-theme-interactive-background-hover)}.qds-button.qds-icon-only[data-importance=subdued]:active{background-color:var(--qds-theme-interactive-background-pressed)}[data-importance=standard]{color:var(--qds-theme-control-text-standard)}.qds-button[data-importance=standard]{border-color:var(--qds-theme-control-border);border-style:solid;border-width:var(--qds-control-border-width) var(\n        --qds-control-border-width-inline-end,var(--qds-control-border-width)\n      ) var(--qds-control-border-width-block-end,var(--qds-control-border-width)) var(--qds-control-border-width)}.qds-button[data-importance=standard]:hover{background-color:var(--qds-theme-interactive-background-hover)}.qds-button[data-importance=standard]:active{background-color:var(--qds-theme-interactive-background-pressed)}.qds-button[data-importance=emphasized]{background-color:var(--qds-theme-signature-color-default);color:var(--qds-theme-signature-color-contrast)}.qds-button[data-importance=emphasized]:hover{background-color:var(--qds-theme-signature-color-hover)}.qds-button[data-importance=emphasized]:active{background-color:var(--qds-theme-signature-color-pressed)}.qds-button[data-importance=destructive]{background-color:var(--qds-theme-feedback-action-destructive-default);color:var(--qds-theme-feedback-action-destructive-contrast)}.qds-button[data-importance=destructive]:hover{background-color:var(--qds-theme-feedback-action-destructive-hover)}.qds-button[data-importance=destructive]:active{background-color:var(--qds-theme-feedback-action-destructive-pressed)}[data-importance=subdued-destructive]{color:var(--qds-theme-feedback-action-destructive-default)}.qds-button[data-importance=subdued-destructive]{border-block-end:var(--qds-control-border-width) solid #0000;padding-inline:0}.qds-button[data-importance=subdued-destructive]:hover{border-block-end:var(--qds-control-border-width) solid var(--qds-theme-feedback-action-destructive-hover);color:var(--qds-theme-feedback-action-destructive-hover)}.qds-button[data-importance=subdued-destructive]:active{border-block-end:var(--qds-control-border-width) solid var(--qds-theme-feedback-action-destructive-pressed);color:var(--qds-theme-feedback-action-destructive-pressed)}.qds-button[data-importance=subdued-destructive]:not(.qds-icon-only){border-radius:0}.qds-button.qds-icon-only[data-importance=subdued-destructive]{border:none}.qds-button.qds-icon-only[data-importance=subdued-destructive]:hover{background-color:var(--qds-theme-interactive-background-hover);color:var(--qds-theme-feedback-action-destructive-default)}.qds-button.qds-icon-only[data-importance=subdued-destructive]:active{background-color:var(--qds-theme-interactive-background-pressed);color:var(--qds-theme-feedback-action-destructive-default)}:is([data-action=dropdown],[data-action=dropdown-close]) .qds-action{margin-inline-start:auto;transition-duration:.3s;transition-property:transform}[data-importance=standard]:is([data-action=dropdown],[data-action=dropdown-close]){background-color:var(--qds-theme-control-input-background)}:is([data-action=dropdown],[data-action=dropdown-close]):not([data-importance=subdued]):not([data-importance=subdued-destructive]){padding-inline:var(--qds-control-input-padding-horizontal)}[data-action=dropdown-close] .qds-action{transform:rotate(-180deg)}";
const QdsButtonStyle0 = buttonCss;

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
var _Button_instances, _Button_button, _Button_span, _Button_ro, _Button_buttonType_get, _Button_iconOnly_get, _Button_computedAction_get, _Button_computedActionIcon_get, _Button_computedDisabled_get, _Button_computedImportance_get, _Button_computedSize_get, _Button_onBlur, _Button_onFocus, _Button_buttonRef, _Button_spanRef, _Button_tooltipRef, _Button_defineGetter;
const isCounter = (value) => typeof value === 'string'
    ? !Number.isNaN(Number.parseFloat(value))
    : typeof value === 'number';
const isIndicator = (value) => value === '' || value === true;
const Button = /*@__PURE__*/ proxyCustomElement(class Button extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.blurEmitter = createEvent(this, "qdsBlur", 2);
        this.focusEmitter = createEvent(this, "qdsFocus", 2);
        this.internals = this.attachInternals();
        _Button_instances.add(this);
        /**
         * The indicator's status.
         */
        this.badgeIndicatorStatus = 'neutral';
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * The button's importance.
         */
        this.importance = 'standard';
        /**
         * The button's size.
         */
        this.size = 'standard';
        /**
         * Sets if button is icon only.
         */
        this.iconOnly = false;
        /**
         * The [`<form>`][] element to associate the button with (its form owner).
         *
         * The value of this attribute must be the id of a `<form>` in the same
         * document. If this attribute is not set, the `<qds-button>` is associated
         * with its ancestor `<form>` element, if any.
         *
         * This attribute lets you associate `<qds-button>` elements to `<form>`s
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
         * If the button is a submit button, this attribute specifies that the form
         * is not to be
         * [validated](https://developer.mozilla.org/docs/Learn/Forms/Form_validation)
         * when it is submitted. If this attribute is specified, it overrides the
         * [`novalidate`](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-novalidate)
         * attribute of the button's form owner.
         *
         * @webnative
         */
        this.formNoValidate = false;
        /**
         * If the button is a submit button, this attribute is an author-defined name
         * or standardized, underscore-prefixed keyword indicating where to display
         * the response from submitting the form. This is the `name` of, or keyword
         * for, a browsing context (a tab, window, or
         * [`<iframe>`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe)).
         * If this attribute is specified, it overrides the
         * [`target`](https://developer.mozilla.org/docs/Web/HTML/Element/form#attr-target)
         * attribute of the button's form owner. The following keywords have special
         * meanings:
         *
         * - `_blank`: Load the response into a new unnamed browsing context — usually
         * a new tab or window, depending on the user's browser settings.
         * - `_parent`: Load the response into the parent browsing context of the
         * current one. If there is no parent, this option behaves the same way as
         * `_self`.
         * - `_self`: Load the response into the same browsing context as the current
         * one.
         * - `_top`: Load the response into the top-level browsing context (that is,
         * the browsing context that is an ancestor of the current one, and has no
         * parent). If there is no parent, this option behaves the same way as
         * `_self`.
         *
         * @webnative
         */
        this.formTarget = '_self';
        /**
         * Returns a list of the [`<label>`][] elements associated with the
         * `qds-button` element.
         *
         * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
         *
         * @readonly
         * @webnative
         */
        this.labels = {};
        /**
         * When href is define and the button act as a link (`<a>`), the `rel` will be added to the element.
         *
         * @webnative
         */
        this.rel = 'noopener';
        /**
         * The error message that would be shown to the user if the `<qds-button>`
         * was to be checked for validity.
         *
         * @readonly
         * @webnative
         */
        this.validationMessage = '';
        /**
         * The [`ValidityState`][] object for this `<qds-button>`.
         *
         * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
         *
         * @readonly
         * @webnative
         */
        this.validity = VALID_STATE;
        /**
         * True if `<qds-button>` will be validated when the form is submitted; false
         * otherwise.
         *
         * @readonly
         * @webnative
         */
        this.willValidate = false;
        this.tooltip = false;
        _Button_button.set(this, void 0);
        _Button_span.set(this, void 0);
        _Button_ro.set(this, void 0);
        this.checkValidity = () => this.internals.checkValidity();
        this.reportValidity = () => this.internals.reportValidity();
        this.setCustomValidity = (error) => {
            if (error)
                this.internals.setValidity(CUSTOM_ERROR_FLAGS, error, __classPrivateFieldGet(this, _Button_button, "f"));
            else
                this.internals.setValidity(NO_ERROR_FLAGS);
        };
        _Button_onBlur.set(this, (event) => {
            this.blurEmitter.emit(pickFocusEventAttributes(event));
        });
        _Button_onFocus.set(this, (event) => {
            this.focusEmitter.emit(pickFocusEventAttributes(event));
        });
        _Button_buttonRef.set(this, (button) => {
            __classPrivateFieldSet(this, _Button_button, button, "f");
        });
        _Button_spanRef.set(this, (span) => {
            __classPrivateFieldSet(this, _Button_span, span, "f");
        });
        _Button_tooltipRef.set(this, (tooltip) => {
            if (tooltip)
                // eslint-disable-next-line no-param-reassign
                tooltip.target = __classPrivateFieldGet(this, _Button_button, "f");
        });
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _Button_instances, "a", _Button_computedDisabled_get)) {
            event.stopImmediatePropagation();
            return;
        }
        if (__classPrivateFieldGet(this, _Button_instances, "a", _Button_buttonType_get) === 'button' || !this.internals.form)
            return;
        if (__classPrivateFieldGet(this, _Button_instances, "a", _Button_buttonType_get) === 'reset') {
            this.internals.form.reset();
        }
        else {
            this.internals.form.requestSubmit();
        }
        event.preventDefault();
    }
    disabledChanged() {
        this.internals.ariaDisabled = __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedDisabled_get).toString();
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    textChanged() {
        this.internals.ariaLabel = this.text;
        if (__classPrivateFieldGet(this, _Button_ro, "f"))
            __classPrivateFieldGet(this, _Button_ro, "f").disconnect();
        if (!__classPrivateFieldGet(this, _Button_span, "f"))
            return;
        this.tooltip = isOverflowing(__classPrivateFieldGet(this, _Button_span, "f"));
        __classPrivateFieldSet(this, _Button_ro, new ResizeObserver(([spanEntry]) => {
            this.tooltip = isOverflowing(spanEntry.target);
        }), "f");
        __classPrivateFieldGet(this, _Button_ro, "f").observe(__classPrivateFieldGet(this, _Button_span, "f"));
    }
    componentWillLoad() {
        this.internals.role = 'button';
        __classPrivateFieldGet(this, _Button_instances, "m", _Button_defineGetter).call(this, 'form', () => this.internals.form);
        __classPrivateFieldGet(this, _Button_instances, "m", _Button_defineGetter).call(this, 'willValidate', () => this.internals.willValidate);
        __classPrivateFieldGet(this, _Button_instances, "m", _Button_defineGetter).call(this, 'validity', () => this.internals.validity);
        __classPrivateFieldGet(this, _Button_instances, "m", _Button_defineGetter).call(this, 'validationMessage', () => this.internals.validationMessage);
        __classPrivateFieldGet(this, _Button_instances, "m", _Button_defineGetter).call(this, 'labels', () => this.internals.labels);
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
    }
    componentDidLoad() {
        this.textChanged();
    }
    disconnectedCallback() {
        if (__classPrivateFieldGet(this, _Button_ro, "f"))
            __classPrivateFieldGet(this, _Button_ro, "f").disconnect();
    }
    render() {
        const Tag = this.href === undefined ? 'button' : 'a';
        const disabledTabIndex = Tag === 'a' ? -1 : undefined;
        const hasBadgeProperties = this.badgeDescription !== undefined && this.badge !== undefined;
        const ariaLabel = hasBadgeProperties
            ? `${this.text} ${this.badge} ${this.badgeDescription}`
            : this.text;
        return (h("div", { key: 'fa26ab96409ab7594ea6cfeda85a5ab5bc246f3b', class: "qds-container" }, h(Tag, { key: '8b1afcffde6991b7265e4222ca7e2c820d336caa', "aria-hidden": "true", class: {
                'qds-button': true,
                'qds-disabled': Tag === 'a' ? __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedDisabled_get) : false,
                'qds-icon-only': __classPrivateFieldGet(this, _Button_instances, "a", _Button_iconOnly_get),
            }, "data-importance": __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedImportance_get), "data-size": __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedSize_get), "data-action": __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedAction_get), disabled: Tag === 'a' ? undefined : this.disabled, download: Tag === 'a' ? this.download : undefined, formAction: this.formAction, formMethod: this.formMethod, formNoValidate: this.formNoValidate, formTarget: this.formTarget, href: Tag === 'a' ? this.href : undefined, name: Tag === 'a' ? undefined : this.name, onBlur: __classPrivateFieldGet(this, _Button_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _Button_onFocus, "f"), ref: __classPrivateFieldGet(this, _Button_buttonRef, "f"), rel: Tag === 'a' ? this.rel : undefined, tabIndex: __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedDisabled_get) ? disabledTabIndex : this.tabIndex, target: Tag === 'a' ? this.target : undefined, type: Tag === 'a' ? undefined : __classPrivateFieldGet(this, _Button_instances, "a", _Button_buttonType_get), value: Tag === 'a' ? undefined : this.value, "aria-label": __classPrivateFieldGet(this, _Button_instances, "a", _Button_iconOnly_get) ? ariaLabel : undefined }, this.iconName !== undefined && this.iconName !== '' && (h("qds-icon", { key: 'df3e21439511c2bdaa92449cf5d9f39d595e68ef', "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedSize_get), library: this.iconLibrary, name: this.iconName })), !__classPrivateFieldGet(this, _Button_instances, "a", _Button_iconOnly_get) && (h("span", { key: '7ac4c5771ee0f9bbc4a2b9693e8e0638bd401299', class: "qds-overflow", "data-size": __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedSize_get), ref: __classPrivateFieldGet(this, _Button_spanRef, "f") }, this.text)), isIndicator(this.badge) && (h("qds-badge-indicator", { key: '173fcf4fdfbfcd38c065ae6cb07a72ecd73130d6', class: "qds-indicator", status: this.badgeIndicatorStatus, description: this.badgeDescription, size: __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedSize_get), strokeRing: true })), isCounter(this.badge) && (h("qds-badge-counter", { key: '41beedd254b4497d9475a7bb9ae0c0f322e6b0f3', class: {
                'qds-indicator': __classPrivateFieldGet(this, _Button_instances, "a", _Button_iconOnly_get),
            }, description: this.badgeDescription, importance: __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedImportance_get), size: __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedSize_get), strokeRing: true, value: this.badge })), __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedActionIcon_get) !== undefined && (h("qds-icon", { key: 'c320c3eb40238c2e00727c0e9d4c971786778c02', "aria-hidden": "true", class: "qds-icon qds-action", "data-size": __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedSize_get), library: "core", name: __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedActionIcon_get) }))), h("div", { key: '84a9ae565f296a4bfeaa649ea1394c5ba70c89ea', class: {
                'qds-focus-ring': true,
                'qds-icon-only': __classPrivateFieldGet(this, _Button_instances, "a", _Button_iconOnly_get),
            }, "data-importance": __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedImportance_get), "data-size": __classPrivateFieldGet(this, _Button_instances, "a", _Button_computedSize_get) }), this.tooltip && (h("qds-tooltip", { key: '518348c9c25b932589cc1d1a0d48c5c6bee8f583', "aria-hidden": "true", ref: __classPrivateFieldGet(this, _Button_tooltipRef, "f") }, this.text))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get host() { return this; }
    static get watchers() { return {
        "disabled": ["disabledChanged"],
        "tabindex": ["tabindexChanged"],
        "text": ["textChanged"]
    }; }
    static get style() { return QdsButtonStyle0; }
}, [81, "qds-button", {
        "action": [1],
        "badge": [8],
        "badgeDescription": [1, "badge-description"],
        "badgeIndicatorStatus": [1, "badge-indicator-status"],
        "iconName": [1, "icon-name"],
        "iconLibrary": [1, "icon-library"],
        "importance": [1],
        "size": [1],
        "text": [1],
        "iconOnly": [4, "icon-only"],
        "disabled": [4],
        "download": [1],
        "form": [1],
        "formAction": [1, "formaction"],
        "formMethod": [1, "formmethod"],
        "formNoValidate": [4, "formnovalidate"],
        "formTarget": [1, "formtarget"],
        "href": [1],
        "labels": [16],
        "rel": [1],
        "name": [1],
        "target": [1],
        "type": [1],
        "validationMessage": [1, "validation-message"],
        "validity": [16],
        "value": [1],
        "willValidate": [4, "will-validate"],
        "tabIndex": [32],
        "tooltip": [32]
    }, [[0, "click", "onClick"]], {
        "disabled": ["disabledChanged"],
        "tabindex": ["tabindexChanged"],
        "text": ["textChanged"]
    }]);
_Button_button = new WeakMap(), _Button_span = new WeakMap(), _Button_ro = new WeakMap(), _Button_onBlur = new WeakMap(), _Button_onFocus = new WeakMap(), _Button_buttonRef = new WeakMap(), _Button_spanRef = new WeakMap(), _Button_tooltipRef = new WeakMap(), _Button_instances = new WeakSet(), _Button_buttonType_get = function _Button_buttonType_get() {
    if (this.type === undefined)
        return this.internals.form ? 'submit' : 'button';
    return this.type;
}, _Button_iconOnly_get = function _Button_iconOnly_get() {
    const hasIcon = this.iconName !== undefined && this.iconName !== '';
    return hasIcon && this.iconOnly;
}, _Button_computedAction_get = function _Button_computedAction_get() {
    switch (this.action) {
        case 'dropdown':
        case 'dropdown-close':
        case 'next': {
            return this.action;
        }
        default: {
            return undefined;
        }
    }
}, _Button_computedActionIcon_get = function _Button_computedActionIcon_get() {
    switch (this.action) {
        case 'dropdown':
        case 'next': {
            return this.action;
        }
        case 'dropdown-close': {
            return 'dropdown';
        }
        default: {
            return undefined;
        }
    }
}, _Button_computedDisabled_get = function _Button_computedDisabled_get() {
    return this.disabled ?? false;
}, _Button_computedImportance_get = function _Button_computedImportance_get() {
    switch (this.importance) {
        case 'emphasized':
        case 'subdued':
        case 'destructive':
        case 'subdued-destructive': {
            return this.importance;
        }
        default: {
            return 'standard';
        }
    }
}, _Button_computedSize_get = function _Button_computedSize_get() {
    switch (this.size) {
        case 'small':
        case 'large':
        case 'hero': {
            return this.size;
        }
        default: {
            return 'standard';
        }
    }
}, _Button_defineGetter = function _Button_defineGetter(p, get) {
    Object.defineProperty(this.host, p, { enumerable: true, get });
};
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-button", "qds-badge-counter", "qds-badge-indicator", "qds-icon", "qds-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Button);
            }
            break;
        case "qds-badge-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "qds-badge-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "qds-icon":
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

export { Button as B, defineCustomElement as d };

//# sourceMappingURL=p-adefd438.js.map