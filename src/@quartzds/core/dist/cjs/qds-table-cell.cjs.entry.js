/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

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
const TableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        _TableCell_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableCell_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (index.h("td", { key: '9d2d455ea9123eda65ab83a5c95a286a96b2e671', class: "qds-table-cell", colSpan: this.colSpan, rowSpan: this.rowSpan, ...__classPrivateFieldGet(this, _TableCell_inheritedAttributes, "f") }, index.h("slot", { key: 'fb6049d38354d5bb9636d1ce605a9bda8bfb5b45' })));
    }
    get host() { return index.getElement(this); }
};
_TableCell_inheritedAttributes = new WeakMap();
TableCell.style = QdsTableCellStyle0;

exports.qds_table_cell = TableCell;

//# sourceMappingURL=qds-table-cell.cjs.entry.js.map