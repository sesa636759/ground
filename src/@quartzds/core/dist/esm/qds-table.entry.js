/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { r as registerInstance, h, a as getElement } from './index-b1d6acd2.js';
import { b as inheritAriaAttributes } from './helpers-2e4ca34d.js';

const tableCss = ":host([hidden]){display:none!important}:host{display:contents}.qds-table{border-collapse:collapse;border-spacing:0;box-sizing:border-box}";
const QdsTableStyle0 = tableCss;

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
var _Table_inheritedAttributes;
const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        _Table_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Table_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (h("table", { key: 'ddab0d1320ce279f7392eef6302f0e3be6946834', class: "qds-table", ...__classPrivateFieldGet(this, _Table_inheritedAttributes, "f") }, h("slot", { key: 'e9a180f7051bbd51ce049fdea230893934ace2cb' })));
    }
    get host() { return getElement(this); }
};
_Table_inheritedAttributes = new WeakMap();
Table.style = QdsTableStyle0;

export { Table as qds_table };

//# sourceMappingURL=qds-table.entry.js.map