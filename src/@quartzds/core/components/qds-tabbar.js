/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, c as createEvent, h } from './p-2806fee1.js';
import { c as invariant, i as inheritAriaAttributes } from './p-8abba29b.js';
import { d as defineCustomElement$7 } from './p-3c48ff53.js';
import { d as defineCustomElement$6 } from './p-fed0d11f.js';
import { d as defineCustomElement$5 } from './p-adefd438.js';
import { d as defineCustomElement$4 } from './p-b4c302d4.js';
import { d as defineCustomElement$3 } from './p-ba880369.js';
import { d as defineCustomElement$2 } from './p-c80f112a.js';

const tabbarCss = ":host([hidden]){display:none!important}:host{display:block}.qds-tabbar,.qds-tabs,.qds-vertical,.qds-vertical-divider{display:flex}.qds-tabbar,.qds-vertical-divider{width:inherit}.qds-arrow-start{transform:scaleX(var(--qds-direction-factor,1)) rotate(90deg)}.qds-arrow-end{transform:scaleX(var(--qds-direction-factor,1)) rotate(-90deg)}.qds-flex{display:flex}.qds-hidden{display:none}.qds-tabs{flex:1;margin-block:0;overflow:hidden;padding-inline-start:0;scroll-behavior:smooth}.qds-vertical{flex-direction:column}.qds-vertical-divider{flex-direction:row}[data-layer=main][data-level=root] .qds-tabs{gap:var(--qds-control-large-gap-siblings-related)}[data-layer=main][data-level=section] .qds-tabs{gap:var(--qds-control-standard-gap-siblings-related)}[data-layer=main][data-level=subsection] .qds-tabs{gap:var(--qds-control-small-gap-siblings-related)}[data-layer=popup][data-level=root] .qds-tabs{gap:var(--qds-control-standard-gap-siblings-related)}[data-layer=popup][data-level=section] .qds-tabs{gap:var(--qds-control-small-gap-siblings-related)}:is([data-layer=panel],[data-layer=accessory])[data-level=root] .qds-tabs{gap:var(--qds-control-small-gap-siblings-related)}";
const QdsTabbarStyle0 = tabbarCss;

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
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Tabbar_instances, _Tabbar_ro, _Tabbar_tabbar, _Tabbar_inheritedAttributes, _Tabbar_scrollToStart, _Tabbar_scrollToEnd, _Tabbar_setActiveTab, _Tabbar_getAllTabPanels, _Tabbar_switchTabPanel, _Tabbar_handleTabActivation, _Tabbar_getTabs, _Tabbar_getCurrentTab, _Tabbar_setCurrentTab, _Tabbar_onClick, _Tabbar_onKeyDown, _Tabbar_onMouseDown, _Tabbar_onScroll, _Tabbar_onViewportCrop, _Tabbar_onSlotchange;
const HORIZONTAL_MOVE_KEYS = new Set([
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End',
]);
const VERTICAL_MOVE_KEYS = new Set([
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End',
]);
const TAB_SETTINGS = {
    'main-root': {
        importance: 'standard',
        size: 'large',
        indicatorPosition: 'block-end',
    },
    'main-section': {
        importance: 'standard',
        size: 'standard',
        indicatorPosition: 'block-end',
    },
    'popup-root': {
        importance: 'standard',
        size: 'standard',
        indicatorPosition: 'block-end',
    },
    'main-subsection': {
        importance: 'subdued',
        size: 'small',
        indicatorPosition: 'block-start',
    },
    'popup-section': {
        importance: 'subdued',
        size: 'small',
        indicatorPosition: 'inline-start',
    },
    'panel-root': {
        importance: 'standard',
        size: 'small',
        indicatorPosition: 'block-start',
    },
    'accessory-root': {
        importance: 'subdued',
        size: 'small',
        indicatorPosition: 'block-end',
    },
};
const isEnabledTabItem = (item) => {
    if (!(item instanceof H))
        return false;
    const tagName = item.tagName.toLowerCase();
    return ((!item.inert && tagName === 'qds-tab') ||
        item.disabled !== true);
};
const Tabbar = /*@__PURE__*/ proxyCustomElement(class Tabbar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.showEmitter = createEvent(this, "qdsTabShow", 6);
        this.hideEmitter = createEvent(this, "qdsTabHide", 6);
        _Tabbar_instances.add(this);
        /**
         * The tabbar's layer.
         */
        this.layer = 'main';
        /**
         * The tabbar's level.
         */
        this.level = 'root';
        /**
         * The tabbar's orientation.
         */
        this.orientation = 'horizontal';
        this.disableEndArrow = false;
        this.disableStartArrow = false;
        _Tabbar_ro.set(this, void 0);
        _Tabbar_tabbar.set(this, void 0);
        _Tabbar_inheritedAttributes.set(this, {});
        _Tabbar_scrollToStart.set(this, () => {
            invariant(__classPrivateFieldGet(this, _Tabbar_tabbar, "f"));
            const isRTL = globalThis.getComputedStyle(this.host).direction === 'rtl';
            __classPrivateFieldGet(this, _Tabbar_tabbar, "f").scroll({
                left: isRTL
                    ? __classPrivateFieldGet(this, _Tabbar_tabbar, "f").scrollLeft + __classPrivateFieldGet(this, _Tabbar_tabbar, "f").clientWidth
                    : __classPrivateFieldGet(this, _Tabbar_tabbar, "f").scrollLeft - __classPrivateFieldGet(this, _Tabbar_tabbar, "f").clientWidth,
            });
        });
        _Tabbar_scrollToEnd.set(this, () => {
            invariant(__classPrivateFieldGet(this, _Tabbar_tabbar, "f"));
            const isRTL = globalThis.getComputedStyle(this.host).direction === 'rtl';
            __classPrivateFieldGet(this, _Tabbar_tabbar, "f").scroll({
                left: isRTL
                    ? __classPrivateFieldGet(this, _Tabbar_tabbar, "f").scrollLeft - __classPrivateFieldGet(this, _Tabbar_tabbar, "f").clientWidth
                    : __classPrivateFieldGet(this, _Tabbar_tabbar, "f").scrollLeft + __classPrivateFieldGet(this, _Tabbar_tabbar, "f").clientWidth,
            });
        });
        _Tabbar_onClick.set(this, (event) => {
            const { target } = event;
            if (!(target instanceof H))
                return;
            const tab = target.closest('qds-tab');
            if (!tab || tab.disabled === true || tab.inert)
                return;
            __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_handleTabActivation).call(this, tab);
            __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_setActiveTab).call(this, tab);
        });
        _Tabbar_onKeyDown.set(this, (event) => {
            const isVertical = this.orientation === 'vertical';
            const MOVE_SELECTION_KEYS = isVertical
                ? VERTICAL_MOVE_KEYS
                : HORIZONTAL_MOVE_KEYS;
            if (!MOVE_SELECTION_KEYS.has(event.key))
                return;
            const tabs = __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_getTabs).call(this);
            if (tabs.length === 0)
                return;
            event.preventDefault();
            event.stopPropagation();
            const activeTab = __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_getCurrentTab).call(this);
            let index = activeTab ? tabs.indexOf(activeTab) : 0;
            const isRTL = globalThis.getComputedStyle(this.host).direction === 'rtl';
            let nextTab;
            do {
                switch (event.key) {
                    case 'ArrowLeft':
                    case 'ArrowUp': {
                        index = (isRTL ? index < tabs.length - 1 : index > 0)
                            ? index - (isRTL ? -1 : 1)
                            : isRTL
                                ? 0
                                : tabs.length - 1;
                        break;
                    }
                    case 'ArrowRight':
                    case 'ArrowDown': {
                        index = (isRTL ? index > 0 : index < tabs.length - 1)
                            ? index + (isRTL ? -1 : 1)
                            : isRTL
                                ? tabs.length - 1
                                : 0;
                        break;
                    }
                    case 'Home': {
                        index = isRTL ? tabs.length - 1 : 0;
                        break;
                    }
                    case 'End': {
                        index = isRTL ? 0 : tabs.length - 1;
                        break;
                    }
                }
                nextTab = tabs[index];
            } while (nextTab.disabled === true);
            __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_setCurrentTab).call(this, nextTab);
            const target = nextTab.shadowRoot?.querySelector('[role="tab"]');
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
            __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_handleTabActivation).call(this, nextTab);
            __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_setActiveTab).call(this, nextTab);
        });
        _Tabbar_onMouseDown.set(this, (event) => {
            const { target } = event;
            if (isEnabledTabItem(target))
                __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_setCurrentTab).call(this, target);
        });
        _Tabbar_onScroll.set(this, () => {
            if (!__classPrivateFieldGet(this, _Tabbar_tabbar, "f"))
                return;
            const { clientWidth, scrollWidth, scrollLeft } = __classPrivateFieldGet(this, _Tabbar_tabbar, "f");
            const isRTL = globalThis.getComputedStyle(this.host).direction === 'rtl';
            this.disableStartArrow = scrollLeft === 0;
            this.disableEndArrow = isRTL
                ? scrollWidth + scrollLeft <= clientWidth
                : scrollWidth - clientWidth - scrollLeft <= 1;
        });
        _Tabbar_onViewportCrop.set(this, () => {
            if (!__classPrivateFieldGet(this, _Tabbar_tabbar, "f"))
                return;
            const { scrollWidth, clientWidth } = __classPrivateFieldGet(this, _Tabbar_tabbar, "f");
            if (scrollWidth > clientWidth) {
                __classPrivateFieldGet(this, _Tabbar_onScroll, "f").call(this);
            }
        });
        _Tabbar_onSlotchange.set(this, () => {
            const tabs = __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_getTabs).call(this);
            if (tabs.length > 0)
                __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_setCurrentTab).call(this, tabs[0]);
        });
    }
    windowResize() {
        __classPrivateFieldGet(this, _Tabbar_onViewportCrop, "f").call(this);
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Tabbar_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        const tabs = [
            ...this.host.querySelectorAll('qds-tab'),
        ];
        const preselectedTab = tabs.find((tab) => tab.selected);
        if (preselectedTab)
            __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_setActiveTab).call(this, preselectedTab);
        else if (tabs.length > 0)
            __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_setActiveTab).call(this, tabs[0]);
    }
    componentDidRender() {
        if (this.activeTab)
            __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_switchTabPanel).call(this, this.activeTab);
        const settings = TAB_SETTINGS[`${this.layer}-${this.level}`];
        if (!settings)
            return;
        for (const tab of this.host.querySelectorAll('qds-tab')) {
            /* eslint-disable @typescript-eslint/no-unsafe-member-access */
            tab.importance = settings.importance;
            tab.size = settings.size;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            tab.indicatorPosition =
                this.orientation === 'vertical' ? 'inline-end' : tab.indicatorPosition;
            /* eslint-enable @typescript-eslint/no-unsafe-member-access */
        }
    }
    componentDidLoad() {
        invariant(__classPrivateFieldGet(this, _Tabbar_tabbar, "f"));
        __classPrivateFieldSet(this, _Tabbar_ro, new ResizeObserver(__classPrivateFieldGet(this, _Tabbar_onScroll, "f")), "f");
        __classPrivateFieldGet(this, _Tabbar_ro, "f").observe(__classPrivateFieldGet(this, _Tabbar_tabbar, "f"));
    }
    disconnectedCallback() {
        if (__classPrivateFieldGet(this, _Tabbar_ro, "f"))
            __classPrivateFieldGet(this, _Tabbar_ro, "f").disconnect();
    }
    render() {
        return (h("div", { key: '1bac1d9e7275ef07b70ebe6272723657ad28a6dd', class: { 'qds-vertical-divider': this.orientation === 'vertical' }, "data-layer": this.layer, "data-level": this.level }, h("div", { key: 'f5c335aef291edf70ce9ee481933d83d6ceac038', class: "qds-tabbar" }, h("div", { key: '6f93b1bea5382f9dfa4d7a89783e172ae0f11f1b', class: {
                'qds-flex': !(this.disableEndArrow && this.disableStartArrow),
                'qds-hidden': (this.disableEndArrow && this.disableStartArrow) ||
                    this.orientation === 'vertical',
            } }, h("qds-button", { key: '8632fccf7dce7e7e219a7ac4281b0aec3ce8bb8e', text: "show previous tab", importance: "subdued", "icon-name": "dropdown", "icon-library": "core", class: "qds-arrow-start", onClick: __classPrivateFieldGet(this, _Tabbar_scrollToStart, "f"), disabled: this.disableStartArrow, iconOnly: true })), h("ul", { key: '1d7e4207088326204c2aa39f77225bc6ed1dd7ba', class: {
                'qds-tabs': true,
                'qds-vertical': this.orientation === 'vertical',
            }, role: "tablist", "aria-label": this.tablistDescription, ref: (element) => {
                __classPrivateFieldSet(this, _Tabbar_tabbar, element, "f");
            }, onClick: __classPrivateFieldGet(this, _Tabbar_onClick, "f"), onKeyDown: __classPrivateFieldGet(this, _Tabbar_onKeyDown, "f"), onMouseDown: __classPrivateFieldGet(this, _Tabbar_onMouseDown, "f"), onScroll: __classPrivateFieldGet(this, _Tabbar_onScroll, "f"), ...__classPrivateFieldGet(this, _Tabbar_inheritedAttributes, "f") }, h("slot", { key: '1cbde9037a47302cb4969c7e27580f465f577994', onSlotchange: __classPrivateFieldGet(this, _Tabbar_onSlotchange, "f") })), h("div", { key: '718ed1e9a9e28f8611ffb770dd25c605665a2d04', class: {
                'qds-flex': !(this.disableEndArrow && this.disableStartArrow),
                'qds-hidden': (this.disableEndArrow && this.disableStartArrow) ||
                    this.orientation === 'vertical',
            } }, h("qds-button", { key: '9c750f868d16309052a129d844a6a1ed9bf92987', text: "show next tab", "icon-name": "dropdown", "icon-library": "core", importance: "subdued", class: "qds-arrow-end", onClick: __classPrivateFieldGet(this, _Tabbar_scrollToEnd, "f"), disabled: this.disableEndArrow, iconOnly: true }))), ((this.level === 'root' &&
            (this.layer === 'popup' || this.layer === 'accessory')) ||
            (this.level === 'section' && this.layer === 'main')) && (h("qds-divider", { key: 'fd40c7eed666d65eba2972ab3b3f146f1feb4948', vertical: this.orientation === 'vertical' }))));
    }
    static get delegatesFocus() { return true; }
    get host() { return this; }
    static get style() { return QdsTabbarStyle0; }
}, [17, "qds-tabbar", {
        "layer": [1],
        "level": [1],
        "orientation": [1],
        "tablistDescription": [1, "tablist-description"],
        "disableEndArrow": [32],
        "disableStartArrow": [32],
        "activeTab": [32]
    }, [[9, "resize", "windowResize"]]]);
_Tabbar_ro = new WeakMap(), _Tabbar_tabbar = new WeakMap(), _Tabbar_inheritedAttributes = new WeakMap(), _Tabbar_scrollToStart = new WeakMap(), _Tabbar_scrollToEnd = new WeakMap(), _Tabbar_onClick = new WeakMap(), _Tabbar_onKeyDown = new WeakMap(), _Tabbar_onMouseDown = new WeakMap(), _Tabbar_onScroll = new WeakMap(), _Tabbar_onViewportCrop = new WeakMap(), _Tabbar_onSlotchange = new WeakMap(), _Tabbar_instances = new WeakSet(), _Tabbar_setActiveTab = function _Tabbar_setActiveTab(tab) {
    this.activeTab = tab;
    for (const t of this.host.querySelectorAll('qds-tab')) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const target = t.shadowRoot?.querySelector('[role="tab"]');
        const isSelected = t === tab;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        t.selected = isSelected;
        if (target instanceof globalThis.Element)
            target.ariaSelected = isSelected.toString();
    }
}, _Tabbar_getAllTabPanels = function _Tabbar_getAllTabPanels() {
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    return [...tabPanels].filter((element) => element instanceof H);
}, _Tabbar_switchTabPanel = function _Tabbar_switchTabPanel(activeTab) {
    const target = activeTab.shadowRoot?.querySelector('[role="tab"]');
    const tabAriaControls = target?.getAttribute('aria-controls');
    const tabPanels = __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_getAllTabPanels).call(this);
    for (const panel of tabPanels)
        panel.hidden = tabAriaControls !== panel.getAttribute('id');
}, _Tabbar_handleTabActivation = function _Tabbar_handleTabActivation(tab) {
    const previousTab = this.activeTab;
    if (previousTab === tab)
        return;
    this.activeTab = tab;
    this.hideEmitter.emit(previousTab);
    this.showEmitter.emit(tab);
    __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_setCurrentTab).call(this, tab);
    __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_switchTabPanel).call(this, tab);
}, _Tabbar_getTabs = function _Tabbar_getTabs() {
    const slot = this.host.shadowRoot?.querySelector('slot');
    return slot
        ? [...slot.assignedElements({ flatten: true })].filter((element) => isEnabledTabItem(element))
        : [];
}, _Tabbar_getCurrentTab = function _Tabbar_getCurrentTab() {
    const currentTab = __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_getTabs).call(this).find((tab) => tab.shadowRoot
        ?.querySelector('[role="tab"]')
        ?.getAttribute('tabindex') === '0');
    return currentTab;
}, _Tabbar_setCurrentTab = function _Tabbar_setCurrentTab(tab) {
    const tabs = __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_getTabs).call(this);
    for (const t of tabs) {
        const isCurrent = t === tab;
        const target = t.shadowRoot?.querySelector('[role="tab"]');
        const closeButton = t.shadowRoot?.querySelector('.qds-target');
        const isDisabled = target?.getAttribute('aria-disabled') === 'true';
        const shouldActivateTab = isCurrent && !isDisabled;
        const tabindex = shouldActivateTab ? '0' : '-1';
        if (target) {
            target.setAttribute('tabindex', tabindex);
            if (shouldActivateTab)
                __classPrivateFieldGet(this, _Tabbar_instances, "m", _Tabbar_handleTabActivation).call(this, t);
        }
        if (closeButton)
            closeButton.setAttribute('tabindex', tabindex);
    }
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-tabbar", "qds-badge-counter", "qds-badge-indicator", "qds-button", "qds-divider", "qds-icon", "qds-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-tabbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tabbar);
            }
            break;
        case "qds-badge-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "qds-badge-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "qds-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "qds-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "qds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "qds-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const QdsTabbar = Tabbar;
const defineCustomElement = defineCustomElement$1;

export { QdsTabbar, defineCustomElement };

//# sourceMappingURL=qds-tabbar.js.map