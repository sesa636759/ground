/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, c as createEvent, h, d as Host } from './p-2806fee1.js';
import { c as invariant, i as inheritAriaAttributes } from './p-8abba29b.js';

const dialogCss = ":host([hidden]){display:none!important}:host{display:none;height:-moz-fit-content;height:fit-content;inset:0;position:fixed;width:-moz-fit-content;width:fit-content}:host([open]){display:block}.qds-dialog{background-color:var(--qds-theme-popup-background);border:none;border-radius:var(--qds-popup-border-radius);box-shadow:var(--qds-theme-popup-elevation);height:inherit;padding:0;width:inherit}.qds-dialog::backdrop{background:initial}.qds-dialog[open]~.qds-backdrop{-webkit-backdrop-filter:blur(var(--qds-theme-popup-overlay-blur));backdrop-filter:blur(var(--qds-theme-popup-overlay-blur));background-color:var(--qds-theme-popup-overlay-background);inset:0;opacity:var(--qds-theme-popup-overlay-opacity);position:fixed}.qds-content{align-items:flex-start;display:flex;flex-direction:column;gap:var(--qds-popup-gap-children-related);height:calc(100% - var(--qds-popup-padding)*2);padding:var(--qds-popup-padding)}::slotted(blockquote),::slotted(button),::slotted(dd),::slotted(dl),::slotted(fieldset),::slotted(figure),::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6),::slotted(hr),::slotted(input),::slotted(menu),::slotted(ol),::slotted(p),::slotted(pre),::slotted(select),::slotted(textarea),::slotted(ul){margin:0}";
const QdsDialogStyle0 = dialogCss;

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
var _Dialog_inheritedAttributes, _Dialog_dialog, _Dialog_ref, _Dialog_onCancel, _Dialog_onClose, _Dialog_onSubmit;
const Dialog = /*@__PURE__*/ proxyCustomElement(class Dialog extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.cancelEmitter = createEvent(this, "qdsCancel", 1);
        this.closeEmitter = createEvent(this, "qdsClose", 2);
        /**
         * Indicates whether or not the dialog is open. You can toggle this attribute
         * to show and hide the dialog, or you can use the `show()` and `close()`
         * methods and this attribute will reflect the dialog’s open state.
         */
        this.open = false;
        _Dialog_inheritedAttributes.set(this, {});
        _Dialog_dialog.set(this, void 0);
        _Dialog_ref.set(this, (dialog) => {
            __classPrivateFieldSet(this, _Dialog_dialog, dialog, "f");
        });
        _Dialog_onCancel.set(this, (event) => {
            if (this.cancelEmitter.emit().defaultPrevented)
                event.preventDefault();
        });
        _Dialog_onClose.set(this, () => {
            invariant(__classPrivateFieldGet(this, _Dialog_dialog, "f"));
            this.closeEmitter.emit();
            this.open = __classPrivateFieldGet(this, _Dialog_dialog, "f").open;
        });
        _Dialog_onSubmit.set(this, (event) => {
            if ((event instanceof SubmitEvent &&
                (event.submitter instanceof HTMLButtonElement ||
                    (event.submitter instanceof HTMLInputElement &&
                        event.submitter.formMethod === 'dialog'))) ||
                (event.target instanceof HTMLFormElement &&
                    event.target.method === 'dialog')) {
                event.preventDefault();
                this.close();
            }
        });
    }
    openChanged() {
        if (this.open)
            this.show();
        else
            this.close();
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Dialog_inheritedAttributes, inheritAriaAttributes(this.host), "f");
    }
    componentDidLoad() {
        if (this.open)
            this.show();
    }
    render() {
        return (h(Host, { key: '29346ced1f939c79bd29ceda3567ef44a6e7fbae' }, h("dialog", { key: '694af8b162d1a54331b2fd252ea5c64db0444cfe', class: "qds-dialog", ref: __classPrivateFieldGet(this, _Dialog_ref, "f"), onCancel: __classPrivateFieldGet(this, _Dialog_onCancel, "f"), onClose: __classPrivateFieldGet(this, _Dialog_onClose, "f"), onSubmit: __classPrivateFieldGet(this, _Dialog_onSubmit, "f"), ...__classPrivateFieldGet(this, _Dialog_inheritedAttributes, "f") }, h("div", { key: '673df9f7738f0b4268fabc8cfd933d4fb425b062', class: "qds-content" }, h("slot", { key: '210ec0fd8c8951cd71f72c5f7f947a49e71900de' }))), h("div", { key: '50a645e89b9e692d4905cec55bd8a07337e4272d', class: "qds-backdrop" })));
    }
    show() {
        invariant(__classPrivateFieldGet(this, _Dialog_dialog, "f"));
        __classPrivateFieldGet(this, _Dialog_dialog, "f").showModal();
        this.open = __classPrivateFieldGet(this, _Dialog_dialog, "f").open;
    }
    close() {
        invariant(__classPrivateFieldGet(this, _Dialog_dialog, "f"));
        __classPrivateFieldGet(this, _Dialog_dialog, "f").close();
    }
    get host() { return this; }
    static get watchers() { return {
        "open": ["openChanged"]
    }; }
    static get style() { return QdsDialogStyle0; }
}, [1, "qds-dialog", {
        "open": [1540]
    }, undefined, {
        "open": ["openChanged"]
    }]);
_Dialog_inheritedAttributes = new WeakMap(), _Dialog_dialog = new WeakMap(), _Dialog_ref = new WeakMap(), _Dialog_onCancel = new WeakMap(), _Dialog_onClose = new WeakMap(), _Dialog_onSubmit = new WeakMap();
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Dialog);
            }
            break;
    } });
}

const QdsDialog = Dialog;
const defineCustomElement = defineCustomElement$1;

export { QdsDialog, defineCustomElement };

//# sourceMappingURL=qds-dialog.js.map