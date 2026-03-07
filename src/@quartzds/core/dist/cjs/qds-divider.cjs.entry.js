/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

const dividerCss = ":host([hidden]){display:none!important}:host{display:block}.qds-divider{border:none;height:var(--qds-control-border-width);margin:0;width:100%}.qds-vertical{height:100%;width:var(--qds-control-border-width)}[data-importance=standard]{background-color:var(--qds-theme-divider-standard)}[data-importance=emphasized]{background-color:var(--qds-theme-divider-emphasized)}[data-importance=subdued]{background-color:var(--qds-theme-divider-subdued)}";
const QdsDividerStyle0 = dividerCss;

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Divider_instances, _Divider_internals, _Divider_computedImportance_get;
const Divider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        _Divider_instances.add(this);
        /**
         * The divider's importance.
         */
        this.importance = 'standard';
        /**
         * Display the divider in vertical orientation.
         */
        this.vertical = false;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        _Divider_internals.set(this, helpers.attachInternals.call(this));
    }
    verticalChanged() {
        __classPrivateFieldGet(this, _Divider_internals, "f").ariaOrientation = this.vertical ? 'vertical' : 'horizontal';
    }
    componentWillLoad() {
        __classPrivateFieldGet(this, _Divider_internals, "f").role = 'separator';
        __classPrivateFieldGet(this, _Divider_internals, "f").ariaHidden = 'true';
        this.verticalChanged();
    }
    render() {
        return (index.h("hr", { key: '5391bfd56f5a2244bc9c9941fef808ed86a181d5', class: {
                'qds-divider': true,
                'qds-vertical': this.vertical,
            }, "aria-hidden": "true", "data-importance": __classPrivateFieldGet(this, _Divider_instances, "a", _Divider_computedImportance_get) }));
    }
    static get watchers() { return {
        "vertical": ["verticalChanged"]
    }; }
};
_Divider_internals = new WeakMap(), _Divider_instances = new WeakSet(), _Divider_computedImportance_get = function _Divider_computedImportance_get() {
    switch (this.importance) {
        case 'emphasized':
        case 'subdued': {
            return this.importance;
        }
        default: {
            return 'standard';
        }
    }
};
Divider.style = QdsDividerStyle0;

exports.qds_divider = Divider;

//# sourceMappingURL=qds-divider.cjs.entry.js.map