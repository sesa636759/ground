/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, h, F as Fragment } from './index-b1d6acd2.js';
import { a as attachInternals, i as isOverflowing } from './helpers-2e4ca34d.js';

const breadcrumbItemCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-anchor{-webkit-text-decoration:none;text-decoration:none}.qds-anchor:hover{-webkit-text-decoration:underline;text-decoration:underline}.qds-breadcrumb-item{align-items:center;display:inline-flex;font:var(--qds-control-standard-text);gap:var(--qds-control-standard-gap-siblings-related);height:var(--qds-control-standard-height);width:inherit}.qds-divider{margin-inline:auto}.qds-overflow{line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.qds-anchor,.qds-breadcrumb-item{color:var(--qds-theme-control-text-standard)}.qds-anchor:focus-visible,.qds-breadcrumb-item:focus-visible{border-radius:var(--qds-focus-border-radius);outline:var(--qds-focus-border-width) solid var(--qds-theme-focus-border);outline-offset:var(--qds-focus-border-offset)}";
const QdsBreadcrumbItemStyle0 = breadcrumbItemCss;

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
var _QdsBreadcrumbItem_instances, _QdsBreadcrumbItem_internals, _QdsBreadcrumbItem_breadcrumbItem, _QdsBreadcrumbItem_ro, _QdsBreadcrumbItem_span, _QdsBreadcrumbItem_renderAnchor, _QdsBreadcrumbItem_renderText, _QdsBreadcrumbItem_breadcrumbItemRef, _QdsBreadcrumbItem_spanRef, _QdsBreadcrumbItem_tooltipRef;
const QdsBreadcrumbItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        _QdsBreadcrumbItem_instances.add(this);
        this.tooltip = false;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        _QdsBreadcrumbItem_internals.set(this, attachInternals.call(this));
        _QdsBreadcrumbItem_breadcrumbItem.set(this, void 0);
        _QdsBreadcrumbItem_ro.set(this, void 0);
        _QdsBreadcrumbItem_span.set(this, void 0);
        _QdsBreadcrumbItem_breadcrumbItemRef.set(this, (breadcrumbItem) => {
            __classPrivateFieldSet(this, _QdsBreadcrumbItem_breadcrumbItem, breadcrumbItem, "f");
        });
        _QdsBreadcrumbItem_spanRef.set(this, (span) => {
            __classPrivateFieldSet(this, _QdsBreadcrumbItem_span, span, "f");
        });
        _QdsBreadcrumbItem_tooltipRef.set(this, (tooltip) => {
            if (tooltip)
                // eslint-disable-next-line no-param-reassign
                tooltip.target = __classPrivateFieldGet(this, _QdsBreadcrumbItem_breadcrumbItem, "f");
        });
    }
    textChanged() {
        if (__classPrivateFieldGet(this, _QdsBreadcrumbItem_ro, "f"))
            __classPrivateFieldGet(this, _QdsBreadcrumbItem_ro, "f").disconnect();
        if (!__classPrivateFieldGet(this, _QdsBreadcrumbItem_span, "f"))
            return;
        this.tooltip = isOverflowing(__classPrivateFieldGet(this, _QdsBreadcrumbItem_span, "f"));
        __classPrivateFieldSet(this, _QdsBreadcrumbItem_ro, new ResizeObserver(([spanEntry]) => {
            this.tooltip = isOverflowing(spanEntry.target);
        }), "f");
        __classPrivateFieldGet(this, _QdsBreadcrumbItem_ro, "f").observe(__classPrivateFieldGet(this, _QdsBreadcrumbItem_span, "f"));
    }
    componentWillLoad() {
        __classPrivateFieldGet(this, _QdsBreadcrumbItem_internals, "f").role = 'listitem';
    }
    componentDidLoad() {
        this.textChanged();
    }
    disconnectedCallback() {
        if (__classPrivateFieldGet(this, _QdsBreadcrumbItem_ro, "f"))
            __classPrivateFieldGet(this, _QdsBreadcrumbItem_ro, "f").disconnect();
    }
    render() {
        return (h("div", { key: '7640d08e7afe853363af70eae0e9ea3b3ec4a1f3', class: "qds-breadcrumb-item", ref: this.href === undefined ? __classPrivateFieldGet(this, _QdsBreadcrumbItem_breadcrumbItemRef, "f") : undefined, tabIndex: this.tooltip && this.href === undefined ? 0 : undefined }, this.href === undefined ? __classPrivateFieldGet(this, _QdsBreadcrumbItem_instances, "m", _QdsBreadcrumbItem_renderText).call(this) : __classPrivateFieldGet(this, _QdsBreadcrumbItem_instances, "m", _QdsBreadcrumbItem_renderAnchor).call(this), this.tooltip && (h("qds-tooltip", { key: 'feb66781c919e1139bb92b6174bada2f59e3bb45', "aria-hidden": "true", ref: __classPrivateFieldGet(this, _QdsBreadcrumbItem_tooltipRef, "f") }, this.text))));
    }
    static get delegatesFocus() { return true; }
    static get watchers() { return {
        "text": ["textChanged"]
    }; }
};
_QdsBreadcrumbItem_internals = new WeakMap(), _QdsBreadcrumbItem_breadcrumbItem = new WeakMap(), _QdsBreadcrumbItem_ro = new WeakMap(), _QdsBreadcrumbItem_span = new WeakMap(), _QdsBreadcrumbItem_breadcrumbItemRef = new WeakMap(), _QdsBreadcrumbItem_spanRef = new WeakMap(), _QdsBreadcrumbItem_tooltipRef = new WeakMap(), _QdsBreadcrumbItem_instances = new WeakSet(), _QdsBreadcrumbItem_renderAnchor = function _QdsBreadcrumbItem_renderAnchor() {
    return (h(Fragment, null, h("span", { class: "qds-overflow", ref: __classPrivateFieldGet(this, _QdsBreadcrumbItem_spanRef, "f") }, h("a", { class: "qds-anchor", href: this.href, hrefLang: this.hreflang, referrerPolicy: this.referrerPolicy, rel: this.rel, ref: this.href === undefined ? undefined : __classPrivateFieldGet(this, _QdsBreadcrumbItem_breadcrumbItemRef, "f"), target: this.target }, this.text)), h("span", { "aria-hidden": "true", class: "qds-divider" }, "/")));
}, _QdsBreadcrumbItem_renderText = function _QdsBreadcrumbItem_renderText() {
    return (h("span", { class: "qds-overflow", ref: __classPrivateFieldGet(this, _QdsBreadcrumbItem_spanRef, "f") }, this.text));
};
QdsBreadcrumbItem.style = QdsBreadcrumbItemStyle0;

export { QdsBreadcrumbItem as qds_breadcrumb_item };

//# sourceMappingURL=qds-breadcrumb-item.entry.js.map