/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

const tableBodyCss = ":host([hidden]){display:none!important}:host{display:contents}.qds-table-body{box-sizing:border-box}";
const QdsTableBodyStyle0 = tableBodyCss;

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
var _TableBody_inheritedAttributes;
const TableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        _TableBody_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableBody_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (index.h("tbody", { key: '2f8916cd08ec80db82a1189c992cc83902c6d517', class: "qds-table-body", ...__classPrivateFieldGet(this, _TableBody_inheritedAttributes, "f") }, index.h("slot", { key: 'a6f29148dcaec459b7a5a260bbb74b457f5bb82d' })));
    }
    get host() { return index.getElement(this); }
};
_TableBody_inheritedAttributes = new WeakMap();
TableBody.style = QdsTableBodyStyle0;

exports.qds_table_body = TableBody;

//# sourceMappingURL=qds-table-body.cjs.entry.js.map