/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

const tableHeadCellCss = ":host([hidden]){display:none!important}:host{display:contents}.qds-table-head-cell{box-sizing:border-box;color:var(--qds-theme-title);font:var(--qds-list-item-standard-title);padding-block:var(--qds-list-item-standard-padding-vertical);padding-inline:var(--qds-list-item-standard-padding-horizontal);text-align:inherit;vertical-align:middle;width:inherit}";
const QdsTableHeadCellStyle0 = tableHeadCellCss;

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
var _TableHeadCell_inheritedAttributes;
const TableHeadCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        _TableHeadCell_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableHeadCell_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (index.h("th", { key: '42e2c07493da0034fcd57bde265cceea2433b0b3', class: "qds-table-head-cell", abbr: this.abbr, colSpan: this.colSpan, rowSpan: this.rowSpan, scope: this.scope, ...__classPrivateFieldGet(this, _TableHeadCell_inheritedAttributes, "f") }, index.h("slot", { key: 'd8bd5b85766fbc917da2772e40453681bb5cfa45' })));
    }
    get host() { return index.getElement(this); }
};
_TableHeadCell_inheritedAttributes = new WeakMap();
TableHeadCell.style = QdsTableHeadCellStyle0;

exports.qds_table_head_cell = TableHeadCell;

//# sourceMappingURL=qds-table-head-cell.cjs.entry.js.map