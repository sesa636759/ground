/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

const tableHeadCss = ":host([hidden]){display:none!important}:host{display:contents}.qds-table-head{box-sizing:border-box}";
const QdsTableHeadStyle0 = tableHeadCss;

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
var _TableHead_inheritedAttributes;
const TableHead = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        _TableHead_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableHead_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (index.h("thead", { key: '23e490cff0689c33d92d0fbe231f098296c05ec2', class: "qds-table-head", ...__classPrivateFieldGet(this, _TableHead_inheritedAttributes, "f") }, index.h("slot", { key: '6dfad826fe9a74aa3a71e2bd683c200ef17ae46a' })));
    }
    get host() { return index.getElement(this); }
};
_TableHead_inheritedAttributes = new WeakMap();
TableHead.style = QdsTableHeadStyle0;

exports.qds_table_head = TableHead;

//# sourceMappingURL=qds-table-head.cjs.entry.js.map