/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, h } from './p-2806fee1.js';
import { i as inheritAriaAttributes } from './p-8abba29b.js';

const tableCellCss = ":host([hidden]){display:none!important}:host{display:contents}.qds-table-cell{box-sizing:border-box;color:var(--qds-theme-title);font:var(--qds-list-item-standard-title);padding-block:0;padding-inline:var(--qds-list-item-standard-padding-horizontal);text-align:inherit;vertical-align:middle;width:inherit}";
const QdsTableCellStyle0 = tableCellCss;

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
var _TableCell_inheritedAttributes;
const TableCell = /*@__PURE__*/ proxyCustomElement(class TableCell extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _TableCell_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableCell_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (h("td", { key: '9d2d455ea9123eda65ab83a5c95a286a96b2e671', class: "qds-table-cell", colSpan: this.colSpan, rowSpan: this.rowSpan, ...__classPrivateFieldGet(this, _TableCell_inheritedAttributes, "f") }, h("slot", { key: 'fb6049d38354d5bb9636d1ce605a9bda8bfb5b45' })));
    }
    get host() { return this; }
    static get style() { return QdsTableCellStyle0; }
}, [1, "qds-table-cell", {
        "colSpan": [2, "colspan"],
        "rowSpan": [2, "rowspan"]
    }]);
_TableCell_inheritedAttributes = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-table-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-table-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableCell);
            }
            break;
    } });
}

const QdsTableCell = TableCell;
const defineCustomElement = defineCustomElement$1;

export { QdsTableCell, defineCustomElement };

//# sourceMappingURL=qds-table-cell.js.map