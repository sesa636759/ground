/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const floatingUi_dom_esm = require('./floating-ui.dom.esm-19b2b933.js');
const helpers = require('./helpers-10154521.js');

const tooltipCss = ":host([hidden]){display:none!important}:host{align-items:flex-start;background-color:var(--qds-theme-accessory-background);border-radius:var(--qds-accessory-border-radius);box-shadow:var(--qds-theme-accessory-elevation);box-sizing:border-box;color:var(--qds-theme-text-standard);display:flex;flex-direction:column;gap:var(--qds-accessory-gap-children-unrelated);left:0;padding:var(--qds-accessory-padding);top:0}:host:before{content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}::slotted(blockquote),::slotted(button),::slotted(dd),::slotted(dl),::slotted(fieldset),::slotted(figure),::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6),::slotted(hr),::slotted(input),::slotted(menu),::slotted(ol),::slotted(p),::slotted(pre),::slotted(select),::slotted(textarea),::slotted(ul){margin:0}:host([data-side=bottom]):before,:host([data-side=top]):before{height:calc(var(--qds-accessory-gap-floating, 0px) + var(--qds-signature-triangle-pointer-size-height, 0px));top:100%}:host([data-side=bottom]):before{top:calc((var(--qds-accessory-gap-floating, 0px) + var(--qds-signature-triangle-pointer-size-height, 0px))*-1)}:host([data-side=left]):before,:host([data-side=right]):before{left:100%;width:calc(var(--qds-accessory-gap-floating, 0px) + var(--qds-signature-triangle-pointer-size-height, 0px))}:host([data-side=right]):before{left:calc((var(--qds-accessory-gap-floating, 0px) + var(--qds-signature-triangle-pointer-size-height, 0px))*-1)}.qds-arrow-container{height:var(--qds-signature-triangle-pointer-size-width);position:absolute;width:var(--qds-signature-triangle-pointer-size-width)}.qds-arrow-container[data-side=bottom]{bottom:100%;transform:rotate(180deg)}.qds-arrow-container[data-side=left]{left:100%;transform:rotate(-90deg)}.qds-arrow-container[data-side=right]{right:100%;transform:rotate(90deg)}.qds-arrow-container[data-side=top]{top:100%}.qds-arrow{fill:var(--qds-theme-accessory-background)}";
const QdsTooltipStyle0 = tooltipCss;

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Tooltip_instances, _Tooltip_arrowContainerElement, _Tooltip_cleanup, _Tooltip_clickedTooltip, _Tooltip_isTouchDevice, _Tooltip_listeners, _Tooltip_referenceElement, _Tooltip_arrowContainerRef, _Tooltip_boundTooltipPointerDown, _Tooltip_handleFocus, _Tooltip_boundFocus, _Tooltip_handleKeyDown, _Tooltip_boundKeyDown, _Tooltip_handlePointerenter, _Tooltip_boundPointerenter, _Tooltip_handlePointerleave, _Tooltip_boundPointerleave, _Tooltip_handleFocusOut, _Tooltip_boundFocusout, _Tooltip_handlePointerdown, _Tooltip_boundPointerdown, _Tooltip_handleReferenceClick, _Tooltip_boundReferenceClick, _Tooltip_on, _Tooltip_removeEventListeners;
let autoIncrementingId = 1;
const Tooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeEmitter = index.createEvent(this, "qdsClose", 2);
        _Tooltip_instances.add(this);
        /**
         * Prevents the tooltip from being shown by user interaction. The tooltip can
         * still be displayed by calling the `show()` method.
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
         * Where to place the tooltip relative to the `target`.
         *
         * @see https://floating-ui.com/docs/tutorial#placements
         */
        this.placement = 'top';
        /**
         * Determines the events that cause the tooltip to show. Multiple event names
         * are separated by spaces.
         */
        this.trigger = 'pointerenter focus';
        this.open = false;
        this.side = 'top';
        this.aShape = '';
        this.aViewbox = '0 0 0 0';
        this.aHeight = 0;
        this.aGap = 0;
        _Tooltip_arrowContainerElement.set(this, void 0);
        _Tooltip_cleanup.set(this, void 0);
        _Tooltip_clickedTooltip.set(this, false);
        _Tooltip_isTouchDevice.set(this, false);
        _Tooltip_listeners.set(this, []);
        _Tooltip_referenceElement.set(this, void 0);
        _Tooltip_arrowContainerRef.set(this, (svg) => {
            __classPrivateFieldSet(this, _Tooltip_arrowContainerElement, svg, "f");
        });
        _Tooltip_boundTooltipPointerDown.set(this, () => {
            __classPrivateFieldSet(this, _Tooltip_clickedTooltip, true, "f");
        });
        _Tooltip_boundFocus.set(this, () => {
            helpers.ignorePromise(__classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_handleFocus).call(this));
        });
        _Tooltip_boundKeyDown.set(this, (event) => {
            helpers.ignorePromise(__classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_handleKeyDown).call(this, event));
        });
        _Tooltip_boundPointerenter.set(this, () => {
            helpers.ignorePromise(__classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_handlePointerenter).call(this));
        });
        _Tooltip_boundPointerleave.set(this, (event) => {
            helpers.ignorePromise(__classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_handlePointerleave).call(this, event));
        });
        _Tooltip_boundFocusout.set(this, (event) => {
            helpers.ignorePromise(__classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_handleFocusOut).call(this, event));
        });
        _Tooltip_boundPointerdown.set(this, (event) => {
            helpers.ignorePromise(__classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_handlePointerdown).call(this, event));
        });
        _Tooltip_boundReferenceClick.set(this, () => {
            helpers.ignorePromise(__classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_handleReferenceClick).call(this));
        });
    }
    /**
     * Show the tooltip.
     */
    async show() {
        if (this.open)
            return;
        this.open = true;
        this.startAutoUpdate();
    }
    /**
     * Close the tooltip.
     */
    async close() {
        if (!this.open)
            return;
        this.closeEmitter.emit();
        this.open = false;
        __classPrivateFieldSet(this, _Tooltip_clickedTooltip, false, "f");
        if (__classPrivateFieldGet(this, _Tooltip_cleanup, "f"))
            __classPrivateFieldGet(this, _Tooltip_cleanup, "f").call(this);
    }
    /**
     * Update the tooltip's arrow.
     *
     * This method should typically be called when the Quartz platform was
     * changed.
     */
    async updateArrow() {
        const aWidth = helpers.propertyToPx(this.host, `--qds-signature-triangle-pointer-size-width`) ??
            0;
        const aTipRadius = helpers.propertyToPx(this.host, `--qds-signature-triangle-pointer-tip-radius`) ??
            0;
        const svgX = (aWidth / 2) * (aTipRadius / -8 + 1);
        const svgY = ((this.aHeight / 2) * aTipRadius) / 4;
        this.aHeight =
            helpers.propertyToPx(this.host, `--qds-signature-triangle-pointer-size-height`) ??
                0;
        this.aViewbox = `0 0 ${aWidth} ${Math.max(this.aHeight, aWidth)}`;
        this.aGap = helpers.propertyToPx(this.host, '--qds-accessory-gap-floating') ?? 0;
        this.aShape =
            'M0,0' +
                ` H${aWidth}` +
                ` L${aWidth - svgX},${this.aHeight - svgY}` +
                ` Q${aWidth / 2},${this.aHeight} ${svgX},${this.aHeight - svgY}` +
                ' Z';
    }
    async updateMiddleware() {
        helpers.invariant(__classPrivateFieldGet(this, _Tooltip_arrowContainerElement, "f"));
        this.middleware = [
            floatingUi_dom_esm.offset({
                ...this.offsetOptions,
                mainAxis: this.aGap + this.aHeight,
            }),
            !this.noFlip &&
                floatingUi_dom_esm.flip({
                    crossAxis: this.noShift,
                    ...this.flipOptions,
                }),
            !this.noShift &&
                floatingUi_dom_esm.shift({
                    limiter: floatingUi_dom_esm.limitShift(),
                    ...this.shiftOptions,
                }),
            floatingUi_dom_esm.arrow({
                element: __classPrivateFieldGet(this, _Tooltip_arrowContainerElement, "f"),
            }),
        ].filter((middleware) => middleware !== false);
    }
    updateAriaHasPopup() {
        __classPrivateFieldSet(this, _Tooltip_referenceElement, helpers.resolveTarget(this.target), "f");
        if (__classPrivateFieldGet(this, _Tooltip_referenceElement, "f") instanceof globalThis.Element &&
            this.host.role === 'dialog') {
            __classPrivateFieldGet(this, _Tooltip_referenceElement, "f").ariaHasPopup = 'dialog';
        }
    }
    setAriaExpanded() {
        this.host.hidden = !this.open;
        if (__classPrivateFieldGet(this, _Tooltip_referenceElement, "f") instanceof globalThis.Element &&
            this.host.role === 'dialog') {
            __classPrivateFieldGet(this, _Tooltip_referenceElement, "f").ariaExpanded = String(this.open);
        }
    }
    async updateReferenceElement() {
        var _a;
        this.disconnectedCallback();
        __classPrivateFieldSet(this, _Tooltip_referenceElement, helpers.resolveTarget(this.target), "f");
        if (!(__classPrivateFieldGet(this, _Tooltip_referenceElement, "f") instanceof globalThis.Element))
            return;
        this.updateEventListeners();
        (_a = this.host).id || (_a.id = `qds-tooltip-${autoIncrementingId}`);
        __classPrivateFieldGet(this, _Tooltip_referenceElement, "f").setAttribute('aria-describedby', this.host.id);
        if (this.host.role === 'dialog') {
            __classPrivateFieldGet(this, _Tooltip_referenceElement, "f").ariaHasPopup = 'dialog';
        }
    }
    updateEventListeners() {
        if (!(__classPrivateFieldGet(this, _Tooltip_referenceElement, "f") instanceof globalThis.Element))
            return;
        const triggers = Array.isArray(this.trigger)
            ? this.trigger
            : (this.trigger?.split(' ') ??
                []);
        __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_removeEventListeners).call(this);
        if (__classPrivateFieldGet(this, _Tooltip_isTouchDevice, "f"))
            __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, __classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), 'click', __classPrivateFieldGet(this, _Tooltip_boundReferenceClick, "f"));
        __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, document.documentElement, 'pointerdown', __classPrivateFieldGet(this, _Tooltip_boundPointerdown, "f"));
        __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, __classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), 'keydown', __classPrivateFieldGet(this, _Tooltip_boundKeyDown, "f"));
        for (const trigger of triggers) {
            switch (trigger) {
                case 'click': {
                    __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, __classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), 'click', __classPrivateFieldGet(this, _Tooltip_boundReferenceClick, "f"));
                    break;
                }
                case 'focus':
                case 'focusin': {
                    __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, __classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), trigger, __classPrivateFieldGet(this, _Tooltip_boundFocus, "f"));
                    __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, __classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), 'focusout', __classPrivateFieldGet(this, _Tooltip_boundFocusout, "f"));
                    __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, this.host, 'focusout', __classPrivateFieldGet(this, _Tooltip_boundFocusout, "f"));
                    break;
                }
                case 'pointerenter': {
                    __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, __classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), 'pointerenter', __classPrivateFieldGet(this, _Tooltip_boundPointerenter, "f"));
                    __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, __classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), 'pointerleave', __classPrivateFieldGet(this, _Tooltip_boundPointerleave, "f"));
                    __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_on).call(this, this.host, 'pointerleave', __classPrivateFieldGet(this, _Tooltip_boundPointerleave, "f"));
                    break;
                }
            }
        }
    }
    async updatePosition() {
        helpers.invariant(__classPrivateFieldGet(this, _Tooltip_referenceElement, "f"));
        const { x, y, middlewareData, placement, strategy } = await floatingUi_dom_esm.computePosition(__classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), this.host, {
            middleware: this.middleware,
            placement: this.placement,
            strategy: this.strategy,
        });
        const [side] = placement.split('-');
        this.hostPosition = strategy;
        this.hostTransform = `translate(${helpers.roundByDPR(x)}px,${helpers.roundByDPR(y)}px)`;
        this.side = side;
        if (middlewareData.arrow === undefined)
            return;
        const { x: aX, y: aY, centerOffset } = middlewareData.arrow;
        this.aStyles = {
            display: centerOffset === 0 ? undefined : 'none',
            left: aX === undefined ? '' : `${aX}px`,
            top: aY === undefined ? '' : `${aY}px`,
        };
    }
    startAutoUpdate() {
        helpers.invariant(__classPrivateFieldGet(this, _Tooltip_referenceElement, "f"));
        if (__classPrivateFieldGet(this, _Tooltip_cleanup, "f"))
            __classPrivateFieldGet(this, _Tooltip_cleanup, "f").call(this);
        __classPrivateFieldSet(this, _Tooltip_cleanup, floatingUi_dom_esm.autoUpdate(__classPrivateFieldGet(this, _Tooltip_referenceElement, "f"), this.host, () => {
            helpers.ignorePromise(this.updatePosition());
        }, this.autoUpdateOptions), "f");
    }
    async componentWillLoad() {
        __classPrivateFieldSet(this, _Tooltip_isTouchDevice, helpers.isTouchDevice(), "f");
        this.host.hidden = true;
        await this.updateReferenceElement();
        autoIncrementingId += 1;
    }
    async componentDidLoad() {
        await this.updateArrow();
    }
    disconnectedCallback() {
        if (!(__classPrivateFieldGet(this, _Tooltip_referenceElement, "f") instanceof globalThis.Element))
            return;
        __classPrivateFieldGet(this, _Tooltip_instances, "m", _Tooltip_removeEventListeners).call(this);
        __classPrivateFieldGet(this, _Tooltip_referenceElement, "f").removeAttribute('aria-describedby');
    }
    render() {
        return (index.h(index.Host, { key: '1a03bec6948f99947abbf089e2ce2b0066e9f2d2', "data-side": this.side, role: this.host.role ?? 'tooltip', onKeyDown: __classPrivateFieldGet(this, _Tooltip_boundKeyDown, "f"), onPointerDown: __classPrivateFieldGet(this, _Tooltip_boundTooltipPointerDown, "f"), style: {
                position: this.hostPosition,
                transform: this.hostTransform,
            } }, index.h("slot", { key: '78d80ba8fe0974a3d556e4d6e36f9e56885e922b' }), index.h("svg", { key: '859caf9b95099903828be15deba2052e07479e07', "aria-hidden": "true", "data-side": this.side, class: "qds-arrow-container", ref: __classPrivateFieldGet(this, _Tooltip_arrowContainerRef, "f"), viewBox: this.aViewbox, style: this.aStyles }, index.h("path", { key: '6f488cf3ae3f4ed0661a3dd265cc280f129961f9', class: "qds-arrow", d: this.aShape }))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "aGap": ["updateMiddleware"],
        "aHeight": ["updateMiddleware"],
        "flipOptions": ["updateMiddleware"],
        "noFlip": ["updateMiddleware"],
        "noShift": ["updateMiddleware"],
        "offsetOptions": ["updateMiddleware"],
        "shiftOptions": ["updateMiddleware"],
        "role": ["updateAriaHasPopup"],
        "open": ["setAriaExpanded"],
        "target": ["updateReferenceElement"],
        "trigger": ["updateEventListeners"],
        "middleware": ["updatePosition"],
        "placement": ["updatePosition"],
        "strategy": ["updatePosition"],
        "autoUpdateOptions": ["startAutoUpdate"]
    }; }
};
_Tooltip_arrowContainerElement = new WeakMap(), _Tooltip_cleanup = new WeakMap(), _Tooltip_clickedTooltip = new WeakMap(), _Tooltip_isTouchDevice = new WeakMap(), _Tooltip_listeners = new WeakMap(), _Tooltip_referenceElement = new WeakMap(), _Tooltip_arrowContainerRef = new WeakMap(), _Tooltip_boundTooltipPointerDown = new WeakMap(), _Tooltip_boundFocus = new WeakMap(), _Tooltip_boundKeyDown = new WeakMap(), _Tooltip_boundPointerenter = new WeakMap(), _Tooltip_boundPointerleave = new WeakMap(), _Tooltip_boundFocusout = new WeakMap(), _Tooltip_boundPointerdown = new WeakMap(), _Tooltip_boundReferenceClick = new WeakMap(), _Tooltip_instances = new WeakSet(), _Tooltip_handleFocus = async function _Tooltip_handleFocus() {
    if (!this.disabled)
        await this.show();
}, _Tooltip_handleKeyDown = async function _Tooltip_handleKeyDown(event) {
    if (event instanceof KeyboardEvent && event.key === 'Escape')
        await this.close();
}, _Tooltip_handlePointerenter = async function _Tooltip_handlePointerenter() {
    if (!this.disabled)
        await this.show();
}, _Tooltip_handlePointerleave = async function _Tooltip_handlePointerleave(event) {
    if (!__classPrivateFieldGet(this, _Tooltip_clickedTooltip, "f") &&
        document.activeElement !== __classPrivateFieldGet(this, _Tooltip_referenceElement, "f") &&
        document.activeElement?.closest('qds-tooltip') !== this.host &&
        event instanceof PointerEvent &&
        event.relatedTarget !== __classPrivateFieldGet(this, _Tooltip_referenceElement, "f") &&
        event.relatedTarget !== this.host)
        await this.close();
}, _Tooltip_handleFocusOut = async function _Tooltip_handleFocusOut(event) {
    if (!(event instanceof FocusEvent))
        return;
    const { relatedTarget } = event;
    if (relatedTarget instanceof globalThis.Element &&
        !this.host.contains(relatedTarget) &&
        __classPrivateFieldGet(this, _Tooltip_referenceElement, "f") !== relatedTarget)
        await this.close();
}, _Tooltip_handlePointerdown = async function _Tooltip_handlePointerdown(event) {
    const composedPath = event.composedPath();
    const withinBounds = composedPath.includes(this.host) ||
        (__classPrivateFieldGet(this, _Tooltip_referenceElement, "f") instanceof globalThis.Element &&
            composedPath.includes(__classPrivateFieldGet(this, _Tooltip_referenceElement, "f")));
    if (!withinBounds)
        await this.close();
}, _Tooltip_handleReferenceClick = async function _Tooltip_handleReferenceClick() {
    if (!this.disabled)
        await (this.open ? this.close() : this.show());
}, _Tooltip_on = function _Tooltip_on(element, event, listener) {
    const hasListener = __classPrivateFieldGet(this, _Tooltip_listeners, "f").some((value) => value.element === element && value.event === event);
    if (hasListener)
        return;
    element.addEventListener(event, listener);
    __classPrivateFieldGet(this, _Tooltip_listeners, "f").push({ element, event, listener });
}, _Tooltip_removeEventListeners = function _Tooltip_removeEventListeners() {
    for (const { element, event, listener } of __classPrivateFieldGet(this, _Tooltip_listeners, "f"))
        element.removeEventListener(event, listener);
    __classPrivateFieldSet(this, _Tooltip_listeners, [], "f");
};
Tooltip.style = QdsTooltipStyle0;

exports.qds_tooltip = Tooltip;

//# sourceMappingURL=qds-tooltip.cjs.entry.js.map