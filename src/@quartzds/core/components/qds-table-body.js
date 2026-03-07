/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, h } from './p-2806fee1.js';
import { i as inheritAriaAttributes } from './p-8abba29b.js';

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
const TableBody = /*@__PURE__*/ proxyCustomElement(class TableBody extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        _TableBody_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _TableBody_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (h("tbody", { key: '2f8916cd08ec80db82a1189c992cc83902c6d517', class: "qds-table-body", ...__classPrivateFieldGet(this, _TableBody_inheritedAttributes, "f") }, h("slot", { key: 'a6f29148dcaec459b7a5a260bbb74b457f5bb82d' })));
    }
    get host() { return this; }
    static get style() { return QdsTableBodyStyle0; }
}, [1, "qds-table-body"]);
_TableBody_inheritedAttributes = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-table-body"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-table-body":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableBody);
            }
            break;
    } });
}

const QdsTableBody = TableBody;
const defineCustomElement = defineCustomElement$1;

export { QdsTableBody, defineCustomElement };

//# sourceMappingURL=qds-table-body.js.map