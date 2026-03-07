/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-b1d6acd2.js';
import { o as offset, f as flip, s as shift, l as limitShift, c as computePosition, a as autoUpdate } from './floating-ui.dom.esm-61986f35.js';
import { r as resolveTarget, d as propertyToPx, e as roundByDPR, f as ignorePromise } from './helpers-2e4ca34d.js';

const dropdownCss = ":host([hidden]){display:none!important}:host{background:var(--qds-theme-accessory-background);border-radius:var(--qds-accessory-border-radius);box-shadow:var(--qds-theme-accessory-elevation);box-sizing:border-box;display:inline-block;left:0;top:0}";
const QdsDropdownStyle0 = dropdownCss;

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
var _Dropdown_instances, _Dropdown_cleanup, _Dropdown_middleware, _Dropdown_referenceElement, _Dropdown_open, _Dropdown_onFocusout, _Dropdown_onKeydown, _Dropdown_onReferenceClick, _Dropdown_disconnectReferenceElement;
let autoIncrementingId = 1;
const isQdsButton = (element) => element.tagName.toLowerCase() === 'qds-button';
const Dropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cancelEmitter = createEvent(this, "qdsCancel", 3);
        this.closeEmitter = createEvent(this, "qdsClose", 2);
        _Dropdown_instances.add(this);
        /**
         * Prevents the dropdown from being shown by user interaction. The dropdown
         * can still be displayed by calling the `show()` method.
         */
        this.disabled = false;
        /**
         * Disable Floating UI's
         * [`flip` middleware](https://floating-ui.com/docs/flip).
         */
        this.noFlip = false;
        /**
         * Disable Floating UI's
         * [`shift` middleware](https://floating-ui.com/docs/shift).
         */
        this.noShift = false;
        /**
         * Where to place the dropdown relative to the `target`.
         *
         * @see https://floating-ui.com/docs/tutorial#placements
         */
        this.placement = 'bottom-start';
        _Dropdown_cleanup.set(this, void 0);
        _Dropdown_middleware.set(this, void 0);
        _Dropdown_referenceElement.set(this, void 0);
        _Dropdown_open.set(this, false
        /**
         * Update the dropdown's middleware and position.
         */
        );
        _Dropdown_onFocusout.set(this, (event) => {
            if (!(event instanceof FocusEvent))
                return;
            const { relatedTarget } = event;
            if (relatedTarget instanceof globalThis.Element &&
                !this.host.contains(relatedTarget) &&
                __classPrivateFieldGet(this, _Dropdown_referenceElement, "f") !== relatedTarget)
                this.close();
        });
        _Dropdown_onKeydown.set(this, (event) => {
            if (!(event instanceof KeyboardEvent) ||
                event.key !== 'Escape' ||
                (event.target !== __classPrivateFieldGet(this, _Dropdown_referenceElement, "f") &&
                    event.target instanceof globalThis.Element &&
                    event.target.closest('qds-dropdown') !== this.host))
                return;
            const cancelEvent = this.cancelEmitter.emit();
            if (cancelEvent.defaultPrevented)
                return;
            this.close();
            if (__classPrivateFieldGet(this, _Dropdown_referenceElement, "f") instanceof globalThis.HTMLElement ||
                __classPrivateFieldGet(this, _Dropdown_referenceElement, "f") instanceof globalThis.SVGElement)
                __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").focus();
        });
        _Dropdown_onReferenceClick.set(this, () => {
            if (this.disabled)
                return;
            if (__classPrivateFieldGet(this, _Dropdown_open, "f"))
                this.close();
            else
                this.show();
        });
    }
    /**
     * Update the dropdown's middleware and position.
     */
    async update() {
        await this.updateMiddleware();
    }
    handleMouseDown(event) {
        if (!__classPrivateFieldGet(this, _Dropdown_open, "f"))
            return;
        const composedPath = event.composedPath();
        const withinBounds = composedPath.includes(this.host) ||
            (__classPrivateFieldGet(this, _Dropdown_referenceElement, "f") instanceof globalThis.Element &&
                composedPath.includes(__classPrivateFieldGet(this, _Dropdown_referenceElement, "f")));
        if (!withinBounds)
            this.close();
    }
    async updateReferenceElement() {
        var _a;
        __classPrivateFieldGet(this, _Dropdown_instances, "m", _Dropdown_disconnectReferenceElement).call(this);
        __classPrivateFieldSet(this, _Dropdown_referenceElement, resolveTarget(this.target), "f");
        if (!(__classPrivateFieldGet(this, _Dropdown_referenceElement, "f") instanceof globalThis.Element))
            return;
        __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").setAttribute('aria-expanded', 'false');
        __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").addEventListener('click', __classPrivateFieldGet(this, _Dropdown_onReferenceClick, "f"));
        __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").addEventListener('focusout', __classPrivateFieldGet(this, _Dropdown_onFocusout, "f"));
        __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").addEventListener('keydown', __classPrivateFieldGet(this, _Dropdown_onKeydown, "f"));
        if (this.host.role === 'menu') {
            (_a = __classPrivateFieldGet(this, _Dropdown_referenceElement, "f")).id || (_a.id = `qds-dropdown-trigger-${autoIncrementingId}`);
            this.hostAriaLabelledBy = __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").id;
        }
        await this.updatePosition();
    }
    async updateMiddleware() {
        __classPrivateFieldSet(this, _Dropdown_middleware, [
            offset({
                ...this.offsetOptions,
                mainAxis: propertyToPx(this.host, '--qds-accessory-gap-floating') ?? 0,
            }),
            !this.noFlip &&
                flip({
                    crossAxis: this.noShift,
                    ...this.flipOptions,
                }),
            !this.noShift &&
                shift({
                    limiter: limitShift(),
                    ...this.shiftOptions,
                }),
        ].filter((middleware) => middleware !== false), "f");
        await this.updatePosition();
    }
    async updatePosition() {
        if (!__classPrivateFieldGet(this, _Dropdown_referenceElement, "f"))
            return;
        const { x, y, strategy } = await computePosition(__classPrivateFieldGet(this, _Dropdown_referenceElement, "f"), this.host, {
            middleware: __classPrivateFieldGet(this, _Dropdown_middleware, "f"),
            placement: this.placement,
            strategy: this.strategy,
        });
        this.hostPosition = strategy;
        this.hostTransform = `translate(${roundByDPR(x)}px,${roundByDPR(y)}px)`;
    }
    startAutoUpdate() {
        if (!__classPrivateFieldGet(this, _Dropdown_referenceElement, "f"))
            return;
        if (__classPrivateFieldGet(this, _Dropdown_cleanup, "f"))
            __classPrivateFieldGet(this, _Dropdown_cleanup, "f").call(this);
        __classPrivateFieldSet(this, _Dropdown_cleanup, autoUpdate(__classPrivateFieldGet(this, _Dropdown_referenceElement, "f"), this.host, () => {
            ignorePromise(this.updatePosition());
        }, this.autoUpdateOptions), "f");
    }
    async componentWillLoad() {
        var _a, _b;
        this.hostDisplay = 'none';
        (_a = this.host).role ?? (_a.role = 'menu');
        (_b = this.host).id || (_b.id = `qds-dropdown-${autoIncrementingId}`);
        await this.updateReferenceElement();
        autoIncrementingId += 1;
        await this.updateMiddleware();
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _Dropdown_instances, "m", _Dropdown_disconnectReferenceElement).call(this);
    }
    render() {
        return (h(Host, { key: 'c192187f4fbe9fa2e166cb86b435c45c9d6d2a26', "aria-labelledby": this.hostAriaLabelledBy, onKeyDown: __classPrivateFieldGet(this, _Dropdown_onKeydown, "f"), onFocusout: __classPrivateFieldGet(this, _Dropdown_onFocusout, "f"), style: {
                display: this.hostDisplay,
                position: this.hostPosition,
                transform: this.hostTransform,
            } }, h("slot", { key: '41a6332566fe8e7e935f8f638367c3f0d9571cbe' })));
    }
    show() {
        if (__classPrivateFieldGet(this, _Dropdown_open, "f"))
            return;
        if (__classPrivateFieldGet(this, _Dropdown_referenceElement, "f") instanceof globalThis.Element) {
            __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").setAttribute('aria-expanded', 'true');
            __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").setAttribute('aria-controls', this.host.id);
            if (isQdsButton(__classPrivateFieldGet(this, _Dropdown_referenceElement, "f")) &&
                __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").action === 'dropdown')
                __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").action = 'dropdown-close';
        }
        __classPrivateFieldSet(this, _Dropdown_open, true, "f");
        this.hostDisplay = undefined;
        this.startAutoUpdate();
    }
    close() {
        if (!__classPrivateFieldGet(this, _Dropdown_open, "f"))
            return;
        if (__classPrivateFieldGet(this, _Dropdown_referenceElement, "f") instanceof globalThis.Element) {
            __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").setAttribute('aria-expanded', 'false');
            __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").removeAttribute('aria-controls');
            if (isQdsButton(__classPrivateFieldGet(this, _Dropdown_referenceElement, "f")) &&
                __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").action === 'dropdown-close')
                __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").action = 'dropdown';
        }
        __classPrivateFieldSet(this, _Dropdown_open, false, "f");
        this.hostDisplay = 'none';
        if (__classPrivateFieldGet(this, _Dropdown_cleanup, "f"))
            __classPrivateFieldGet(this, _Dropdown_cleanup, "f").call(this);
        this.closeEmitter.emit();
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "target": ["updateReferenceElement"],
        "flipOptions": ["updateMiddleware"],
        "noFlip": ["updateMiddleware"],
        "noShift": ["updateMiddleware"],
        "offsetOptions": ["updateMiddleware"],
        "shiftOptions": ["updateMiddleware"],
        "placement": ["updatePosition"],
        "strategy": ["updatePosition"],
        "autoUpdateOptions": ["startAutoUpdate"]
    }; }
};
_Dropdown_cleanup = new WeakMap(), _Dropdown_middleware = new WeakMap(), _Dropdown_referenceElement = new WeakMap(), _Dropdown_open = new WeakMap(), _Dropdown_onFocusout = new WeakMap(), _Dropdown_onKeydown = new WeakMap(), _Dropdown_onReferenceClick = new WeakMap(), _Dropdown_instances = new WeakSet(), _Dropdown_disconnectReferenceElement = function _Dropdown_disconnectReferenceElement() {
    this.hostAriaLabelledBy = undefined;
    if (!(__classPrivateFieldGet(this, _Dropdown_referenceElement, "f") instanceof globalThis.Element))
        return;
    __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").removeEventListener('focusout', __classPrivateFieldGet(this, _Dropdown_onFocusout, "f"));
    __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").removeEventListener('keydown', __classPrivateFieldGet(this, _Dropdown_onKeydown, "f"));
    __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").removeAttribute('aria-expanded');
    __classPrivateFieldGet(this, _Dropdown_referenceElement, "f").removeAttribute('aria-controls');
};
Dropdown.style = QdsDropdownStyle0;

export { Dropdown as qds_dropdown };

//# sourceMappingURL=qds-dropdown.entry.js.map