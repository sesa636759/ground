/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, h, a as getElement } from './index-b1d6acd2.js';
import { b as inheritAriaAttributes } from './helpers-2e4ca34d.js';

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
        registerInstance(this, hostRef);
        _TableHead_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableHead_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (h("thead", { key: '23e490cff0689c33d92d0fbe231f098296c05ec2', class: "qds-table-head", ...__classPrivateFieldGet(this, _TableHead_inheritedAttributes, "f") }, h("slot", { key: '6dfad826fe9a74aa3a71e2bd683c200ef17ae46a' })));
    }
    get host() { return getElement(this); }
};
_TableHead_inheritedAttributes = new WeakMap();
TableHead.style = QdsTableHeadStyle0;

export { TableHead as qds_table_head };

//# sourceMappingURL=qds-table-head.entry.js.map