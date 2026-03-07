/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, h } from './p-2806fee1.js';
import { i as inheritAriaAttributes } from './p-8abba29b.js';

const tableRowCss = ":host([hidden]){display:none!important}:host{display:contents}.qds-table-row{border-block-end:var(--qds-list-border-width) solid var(--qds-theme-divider-standard);box-sizing:border-box}";
const QdsTableRowStyle0 = tableRowCss;

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
var _TableRow_inheritedAttributes;
const TableRow = /*@__PURE__*/ proxyCustomElement(class TableRow extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _TableRow_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableRow_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (h("tr", { key: '9d546535247d9d49aa8b81fa12ff12f1774c84fc', class: "qds-table-row", ...__classPrivateFieldGet(this, _TableRow_inheritedAttributes, "f") }, h("slot", { key: '553098dee0b8d56593f6556b2bb7f8f046a2c0d8' })));
    }
    get host() { return this; }
    static get style() { return QdsTableRowStyle0; }
}, [1, "qds-table-row"]);
_TableRow_inheritedAttributes = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-table-row"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-table-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableRow);
            }
            break;
    } });
}

const QdsTableRow = TableRow;
const defineCustomElement = defineCustomElement$1;

export { QdsTableRow, defineCustomElement };

//# sourceMappingURL=qds-table-row.js.map