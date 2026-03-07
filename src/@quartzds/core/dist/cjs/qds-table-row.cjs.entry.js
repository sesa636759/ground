/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

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
const TableRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        _TableRow_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableRow_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (index.h("tr", { key: '9d546535247d9d49aa8b81fa12ff12f1774c84fc', class: "qds-table-row", ...__classPrivateFieldGet(this, _TableRow_inheritedAttributes, "f") }, index.h("slot", { key: '553098dee0b8d56593f6556b2bb7f8f046a2c0d8' })));
    }
    get host() { return index.getElement(this); }
};
_TableRow_inheritedAttributes = new WeakMap();
TableRow.style = QdsTableRowStyle0;

exports.qds_table_row = TableRow;

//# sourceMappingURL=qds-table-row.cjs.entry.js.map