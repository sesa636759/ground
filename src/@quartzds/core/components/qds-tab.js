/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { p as proxyCustomElement, H, c as createEvent, h } from './p-2806fee1.js';
import { p as pickFocusEventAttributes, r as resolveTarget, i as inheritAriaAttributes } from './p-8abba29b.js';
import { d as defineCustomElement$7 } from './p-3c48ff53.js';
import { d as defineCustomElement$6 } from './p-fed0d11f.js';
import { d as defineCustomElement$5 } from './p-ba880369.js';
import { d as defineCustomElement$4 } from './p-a6310886.js';
import { d as defineCustomElement$3 } from './p-fac26e20.js';
import { d as defineCustomElement$2 } from './p-c80f112a.js';

const tabCss = ":host([hidden]){display:none!important}:host{display:inline-block;line-height:0}[aria-disabled=true]{opacity:var(--qds-theme-disabled);pointer-events:none}.qds-target{-webkit-appearance:none;appearance:none;background-color:initial;border:none;cursor:pointer;padding:0;pointer-events:auto}.qds-target:disabled{pointer-events:none}.qds-target:focus-visible{border-radius:var(--qds-focus-border-radius);outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:var(--qds-focus-border-offset)}.qds-target-icon{color:var(--qds-theme-control-text-standard)}.qds-icon,.qds-target-icon{flex-shrink:0}.qds-chevron{transform:rotate(180deg)}.qds-closable-wrapper,.qds-tab{position:relative}.qds-closable-tab,.qds-closable-wrapper,.qds-tab,.qds-target,.qds-texts{display:flex}.qds-texts{flex:1 0;flex-direction:column}.qds-icon,.qds-text{color:var(--qds-theme-title)}.qds-subtitle{color:var(--qds-theme-subtitle);font:var(--qds-control-tab-standard-subtitle)}.qds-indicator{inset-block-start:0;inset-inline-end:0;position:absolute;transform:translate(50%,-50%)}.qds-closable-wrapper[data-size=small],.qds-tab[data-size=small]{gap:var(--qds-control-tab-small-gap-internal);min-height:var(--qds-control-tab-small-height);padding-inline:var(--qds-control-tab-small-padding-horizontal)}.qds-collapse[data-size=small]{min-width:var(--qds-control-tab-small-height)}.qds-closable-tab[data-size=small]{gap:var(--qds-control-tab-small-gap-internal)}[data-size=small]>.qds-icon{font-size:var(--qds-control-tab-small-icon-size)}[data-size=small]>.qds-texts{gap:var(--qds-control-tab-small-titles-gap)}[data-size=small] .qds-text{font:var(--qds-control-tab-small-title)}[data-size=small] .qds-subtitle{font:var(--qds-control-tab-small-subtitle)}.qds-target-icon[data-size=small]{--qds-experimental-icon-click-target-size:var(--qds-control-small-height);height:var(--qds-control-small-icon-size);width:var(--qds-control-small-icon-size)}.qds-closable-wrapper[data-size=standard],.qds-tab[data-size=standard]{gap:var(--qds-control-tab-standard-gap-internal);min-height:var(--qds-control-tab-standard-height);padding-inline:var(--qds-control-tab-standard-padding-horizontal)}.qds-collapse[data-size=standard]{min-width:var(--qds-control-tab-standard-height)}.qds-closable-tab[data-size=standard]{gap:var(--qds-control-tab-standard-gap-internal)}[data-size=standard]>.qds-icon{font-size:var(--qds-control-tab-standard-icon-size)}[data-size=standard]>.qds-texts{gap:var(--qds-control-tab-standard-titles-gap)}[data-size=standard] .qds-text{font:var(--qds-control-tab-standard-title)}[data-size=standard] .qds-subtitle{font:var(--qds-control-tab-standard-subtitle)}.qds-target-icon[data-size=standard]{--qds-experimental-icon-click-target-size:var(\n      --qds-control-standard-height\n    );height:var(--qds-control-standard-icon-size);width:var(--qds-control-standard-icon-size)}.qds-closable-wrapper[data-size=large],.qds-tab[data-size=large]{gap:var(--qds-control-tab-large-gap-internal);min-height:var(--qds-control-tab-large-height);padding-inline:var(--qds-control-tab-large-padding-horizontal)}.qds-collapse[data-size=large]{min-width:var(--qds-control-tab-large-height)}.qds-closable-tab[data-size=large]{gap:var(--qds-control-tab-large-gap-internal)}[data-size=large]>.qds-icon{font-size:var(--qds-control-tab-large-icon-size)}[data-size=large]>.qds-texts{gap:var(--qds-control-tab-large-titles-gap)}[data-size=large] .qds-text{font:var(--qds-control-tab-large-title)}[data-size=large] .qds-subtext{font:var(--qds-control-tab-large-subtitle)}.qds-target-icon[data-size=large]{--qds-experimental-icon-click-target-size:var(--qds-control-large-height);height:var(--qds-control-large-icon-size);width:var(--qds-control-large-icon-size)}.qds-selected.qds-closable-wrapper[data-importance=emphasized],.qds-selected.qds-tab[data-importance=emphasized]{background-color:var(--qds-theme-control-background)}[data-importance=emphasized][data-size=standard] .qds-text{font:var(--qds-control-tab-standard-title-emphasized)}[data-importance=emphasized][data-size=small] .qds-text{font:var(--qds-control-tab-small-title-emphasized)}[data-importance=emphasized][data-size=large] .qds-text{font:var(--qds-control-tab-large-title-emphasized)}[data-importance=emphasized] .qds-icon,[data-importance=standard] .qds-selected .qds-icon{color:var(--qds-theme-signature-color-default)}:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after{border-radius:var(--qds-signature-line-connection-cap-radius);content:\"\";display:block;position:absolute}.qds-indicator-inline-end:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after,.qds-indicator-inline-start:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after{height:100%;width:var(--qds-signature-line-connection-width)}.qds-indicator-inline-end:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after{inset-inline-end:0}.qds-indicator-inline-start:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after{inset-inline-start:0}.qds-indicator-block-end:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after,.qds-indicator-block-start:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after{height:var(--qds-signature-line-connection-width);width:100%}.qds-indicator-block-end:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after{bottom:0}.qds-indicator-block-start:is(.qds-selected[data-importance=subdued],.qds-selected[data-importance=standard],.qds-selected[data-importance=emphasized],.qds-closable-wrapper[data-importance=subdued],.qds-closable-wrapper[data-importance=standard],.qds-closable-wrapper[data-importance=emphasized],[data-importance=subdued] .qds-tab:hover,[data-importance=standard] .qds-tab:hover,[data-importance=emphasized] .qds-tab:hover):after{top:0}.qds-selected[data-importance=standard][data-size=standard] .qds-text,.qds-selected[data-importance=subdued][data-size=standard] .qds-text{font:var(--qds-control-tab-standard-title-emphasized)}.qds-selected[data-importance=standard][data-size=small] .qds-text,.qds-selected[data-importance=subdued][data-size=small] .qds-text{font:var(--qds-control-tab-small-title-emphasized)}.qds-selected[data-importance=standard][data-size=large] .qds-text,.qds-selected[data-importance=subdued][data-size=large] .qds-text{font:var(--qds-control-tab-large-title-emphasized)}[data-importance=emphasized]:hover:after,[data-importance=standard]:hover:after{background-color:var(--qds-theme-signature-color-hover)}[data-importance=emphasized]:active:after,[data-importance=standard]:active:after{background-color:var(--qds-theme-signature-color-pressed)}.qds-selected[data-importance=emphasized]:after,.qds-selected[data-importance=standard]:after{background-color:var(--qds-theme-signature-color-default)}.qds-selected[data-importance=subdued]:after,[data-importance=subdued] :active:after{background-color:var(--qds-theme-link-subdued-pressed)}[data-importance=subdued]:hover:after{background-color:var(--qds-theme-link-subdued-hover)}.qds-tab.qds-icon-only{padding-inline:0}.qds-tab:focus-visible{border-radius:var(--qds-focus-border-radius);outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width);outline-offset:calc(var(--qds-focus-border-width)*-1 - var(--qds-focus-border-offset))}.qds-closable-tab{width:100%}.qds-closable-tab:focus-visible{border-radius:var(--qds-focus-border-radius);outline:var(--qds-theme-focus-border) solid var(--qds-focus-border-width)}.qds-closable-tab,.qds-closable-wrapper,.qds-tab{align-items:center;justify-content:center}.qds-closable-tab,.qds-tab{background-color:initial;border:none;cursor:pointer;text-align:initial}.qds-closable-tab:any-link,.qds-tab:any-link{-webkit-text-decoration:none;text-decoration:none}.qds-hidden{display:none}";
const QdsTabStyle0 = tabCss;

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
var _Tab_instances, _Tab_inheritedAttributes, _Tab_div, _Tab_panel, _Tab_collapsed_get, _Tab_computedAction_get, _Tab_computedSize_get, _Tab_computedImportance_get, _Tab_parentLayer_get, _Tab_parentLevel_get, _Tab_ariaLabel_get, _Tab_computedDisabled_get, _Tab_shouldCollapse_get, _Tab_placement_get, _Tab_renderText, _Tab_ref, _Tab_tooltipRef, _Tab_close, _Tab_onIconClick, _Tab_onIconKeyDown, _Tab_onBlur, _Tab_onFocus;
const isCounter = (value) => typeof value === 'string'
    ? !Number.isNaN(Number.parseFloat(value))
    : typeof value === 'number';
const isIndicator = (value) => value === '' || value === true;
let autoIncrementingId = 1;
const Tab = /*@__PURE__*/ proxyCustomElement(class Tab extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closeEmitter = createEvent(this, "qdsClose", 6);
        this.blurEmitter = createEvent(this, "qdsBlur", 2);
        this.focusEmitter = createEvent(this, "qdsFocus", 2);
        _Tab_instances.add(this);
        /**
         * The tab's counter importance.
         */
        this.badgeCounterImportance = 'standard';
        /**
         * The indicator's status.
         */
        this.badgeIndicatorStatus = 'neutral';
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * Displays the tab in a collapsed state without its text. The text will be
         * displayed in a tooltip instead.
         *
         * This property has no effect if the tab does not have an icon set.
         */
        this.iconOnly = false;
        /**
         * The tab's importance.
         */
        this.importance = 'standard';
        /**
         * The tab's indicator position.
         */
        this.indicatorPosition = 'block-end';
        /**
         * The name of a registered icon library.
         */
        this.tagIconLibrary = 'default';
        /**
         * The tab's tag importance.
         */
        this.tagImportance = 'emphasized';
        /**
         * The tab's tag size.
         */
        this.tagSize = 'small';
        /**
         * The tab's tag status.
         */
        this.tagStatus = 'info';
        /**
         * Whether or not the tab is selected.
         */
        this.selected = false;
        /**
         * The tab's size.
         */
        this.size = 'standard';
        this.isIndicatorOnTop = false;
        _Tab_inheritedAttributes.set(this, {});
        _Tab_div.set(this, void 0);
        _Tab_panel.set(this, void 0);
        _Tab_ref.set(this, (div) => {
            __classPrivateFieldSet(this, _Tab_div, div, "f");
        });
        _Tab_tooltipRef.set(this, (tooltip) => {
            if (tooltip)
                // eslint-disable-next-line no-param-reassign
                tooltip.target = __classPrivateFieldGet(this, _Tab_div, "f");
        });
        _Tab_close.set(this, () => {
            this.closeEmitter.emit();
        });
        _Tab_onIconClick.set(this, (event) => {
            event.stopPropagation();
            const path = event.composedPath();
            const closeIcon = path.find((element) => element instanceof H &&
                element.classList.contains('qds-target'));
            if (closeIcon && !event.defaultPrevented)
                __classPrivateFieldGet(this, _Tab_close, "f").call(this);
        });
        _Tab_onIconKeyDown.set(this, (event) => {
            const path = event.composedPath();
            const closeIcon = path.find((element) => element instanceof H &&
                element.classList.contains('qds-target'));
            if (closeIcon && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
                event.stopPropagation();
                __classPrivateFieldGet(this, _Tab_close, "f").call(this);
            }
        });
        _Tab_onBlur.set(this, (event) => {
            this.blurEmitter.emit(pickFocusEventAttributes(event));
        });
        _Tab_onFocus.set(this, (event) => {
            this.focusEmitter.emit(pickFocusEventAttributes(event));
        });
    }
    panelChanged() {
        this.disconnectedCallback();
        const panel = resolveTarget(this.panel);
        if (!(panel instanceof globalThis.Element))
            return;
        __classPrivateFieldSet(this, _Tab_panel, panel, "f");
        const tab = this.host.shadowRoot?.querySelector('[role="tab"]');
        if (tab)
            tab.setAttribute('aria-controls', __classPrivateFieldGet(this, _Tab_panel, "f").id);
        if (__classPrivateFieldGet(this, _Tab_panel, "f").role === null)
            __classPrivateFieldGet(this, _Tab_panel, "f").role = 'tabpanel';
        if (__classPrivateFieldGet(this, _Tab_panel, "f").getAttribute('aria-labelledby') === null)
            __classPrivateFieldGet(this, _Tab_panel, "f").setAttribute('aria-labelledby', this.host.id);
        __classPrivateFieldGet(this, _Tab_panel, "f").setAttribute('tabindex', __classPrivateFieldGet(this, _Tab_panel, "f").getAttribute('tabindex') ?? '0');
    }
    onClick(event) {
        if (__classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedDisabled_get))
            event.stopImmediatePropagation();
    }
    tabindexChanged(newValue) {
        const parsedValue = Number.parseInt(newValue, 10);
        this.tabIndex =
            parsedValue === 0 || Number.isNaN(parsedValue) ? undefined : parsedValue;
    }
    componentWillLoad() {
        var _a;
        __classPrivateFieldSet(this, _Tab_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        this.tabindexChanged(this.host.getAttribute('tabindex') ?? '0');
        (_a = this.host).id || (_a.id = `qds-tab-${autoIncrementingId}`);
        autoIncrementingId += 1;
    }
    componentWillRender() {
        const isPanelRoot = __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_parentLayer_get) === 'panel' && __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_parentLevel_get) === 'root';
        const isMainSubsection = __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_parentLayer_get) === 'main' && __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_parentLevel_get) === 'subsection';
        this.isIndicatorOnTop = isPanelRoot || isMainSubsection;
    }
    componentDidLoad() {
        this.panelChanged();
    }
    disconnectedCallback() {
        if (!__classPrivateFieldGet(this, _Tab_panel, "f"))
            return;
        const tab = this.host.shadowRoot?.querySelector('[role="tab"]');
        if (tab)
            tab.removeAttribute('aria-controls');
        if (__classPrivateFieldGet(this, _Tab_panel, "f").role === 'tabpanel')
            // eslint-disable-next-line unicorn/no-null
            __classPrivateFieldGet(this, _Tab_panel, "f").role = null;
        if (__classPrivateFieldGet(this, _Tab_panel, "f").getAttribute('aria-labelledby') === this.host.id)
            __classPrivateFieldGet(this, _Tab_panel, "f").removeAttribute('aria-labelledby');
        __classPrivateFieldGet(this, _Tab_panel, "f").removeAttribute('tabindex');
    }
    render() {
        const isLink = this.href !== undefined && __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === undefined;
        const indicatorPosition = this.isIndicatorOnTop
            ? 'block-start'
            : this.indicatorPosition;
        const Tag = isLink
            ? 'a'
            : __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === 'expandable'
                ? 'button'
                : 'div';
        return (h("div", { key: '9883de62c96b1138199aea9bd358dd1b1eff6368', "aria-disabled": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedDisabled_get) ? 'true' : undefined, class: {
                'qds-closable-wrapper': __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === 'closable',
                'qds-selected': this.selected,
                [`qds-indicator-${indicatorPosition}`]: __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === 'closable',
            }, "data-size": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedSize_get), "data-importance": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedImportance_get), ref: __classPrivateFieldGet(this, _Tab_ref, "f") }, h(Tag, { key: 'e8d533b8b86963146fb68138192246e238911f4d', "aria-disabled": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedDisabled_get) ? 'true' : undefined, disabled: isLink ? undefined : this.disabled, onBlur: __classPrivateFieldGet(this, _Tab_onBlur, "f"), onFocus: __classPrivateFieldGet(this, _Tab_onFocus, "f"), class: {
                'qds-tab': __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) !== 'closable',
                'qds-icon-only': __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_collapsed_get),
                'qds-collapse': __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_shouldCollapse_get) && __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) !== 'closable',
                'qds-closable-tab': __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === 'closable',
                'qds-selected': this.selected,
                [`qds-indicator-${this.indicatorPosition}`]: __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) !== 'closable',
            }, role: !isLink && __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) !== 'expandable' ? 'tab' : undefined, "aria-current": isLink && this.selected ? 'true' : undefined, "aria-expanded": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === 'expandable' && !isLink
                ? this.selected
                    ? 'true'
                    : 'false'
                : undefined, "data-importance": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedImportance_get), "data-action": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get), "data-size": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedSize_get), href: isLink ? this.href : undefined, ...__classPrivateFieldGet(this, _Tab_inheritedAttributes, "f") }, ((this.tagText !== undefined && this.tagText !== '') ||
            (this.tagIconName !== undefined && this.tagIconName !== '')) && (h("qds-tag", { key: 'd84ba8870438116d0acf951c4c2131efc60b4bfd', text: this.tagText, status: this.tagStatus, size: __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedSize_get), importance: this.tagImportance, "icon-library": this.tagIconLibrary, "icon-name": this.tagIconName, "icon-description": this.tagIconDescription, class: { 'qds-hidden': __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_shouldCollapse_get) } })), this.iconName !== undefined && this.iconName !== '' && (h("qds-icon", { key: '4b2c828342fd1746471c92c50e54166c9ca94173', "aria-hidden": "true", class: "qds-icon", library: this.iconLibrary, name: this.iconName })), !__classPrivateFieldGet(this, _Tab_instances, "a", _Tab_shouldCollapse_get) && this.text && __classPrivateFieldGet(this, _Tab_instances, "m", _Tab_renderText).call(this), isIndicator(this.badge) && (h("qds-badge-indicator", { key: '29d5a77560fd810b3a993bf9022976770c11c4d4', class: {
                'qds-indicator': __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_shouldCollapse_get),
            }, status: this.badgeIndicatorStatus, description: this.badgeDescription, size: __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedSize_get), strokeRing: true })), isCounter(this.badge) && (h("qds-badge-counter", { key: '4b30df7fa9e7ac7d4712a2ac75b5dbc7c27b88fd', class: {
                'qds-indicator': __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_shouldCollapse_get),
            }, description: this.badgeDescription, importance: this.badgeCounterImportance, size: __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedSize_get), strokeRing: true, value: this.badge })), __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === 'expandable' && (h("qds-icon", { key: 'f655c62da915ae8a5d6fec7574bf9950fe11d908', "aria-hidden": "true", class: { 'qds-target-icon': true, 'qds-chevron': this.selected }, "data-size": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedSize_get), library: "core", name: "dropdown" }))), __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === 'closable' && (h("button", { key: 'a6b035707242b5ae11c1ab651f3caeff250d9ec4', "aria-label": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_ariaLabel_get), class: "qds-target", tabIndex: __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedDisabled_get) ? undefined : this.tabIndex, disabled: this.disabled, onClick: __classPrivateFieldGet(this, _Tab_onIconClick, "f"), onKeyDown: __classPrivateFieldGet(this, _Tab_onIconKeyDown, "f"), type: "button", ...__classPrivateFieldGet(this, _Tab_inheritedAttributes, "f") }, h("qds-icon", { key: '744bfc75352bcf548b3992a79a3e5bb3b4fb1804', "aria-hidden": "true", class: "qds-target-icon", "data-size": __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedSize_get), library: "core", name: "close" }))), __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_shouldCollapse_get) && this.text && (h("qds-tooltip", { key: 'a9f5c89729109d7a124b721a29cf11a9a8af2f83', placement: __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_placement_get), ref: __classPrivateFieldGet(this, _Tab_tooltipRef, "f") }, __classPrivateFieldGet(this, _Tab_instances, "m", _Tab_renderText).call(this)))));
    }
    get host() { return this; }
    static get watchers() { return {
        "panel": ["panelChanged"],
        "tabindex": ["tabindexChanged"]
    }; }
    static get style() { return QdsTabStyle0; }
}, [1, "qds-tab", {
        "action": [1],
        "badge": [8],
        "badgeCounterImportance": [1, "badge-counter-importance"],
        "badgeDescription": [1, "badge-description"],
        "badgeIndicatorStatus": [1, "badge-indicator-status"],
        "disabled": [4],
        "iconLibrary": [1, "icon-library"],
        "iconName": [1, "icon-name"],
        "iconOnly": [4, "icon-only"],
        "importance": [1],
        "indicatorPosition": [1, "indicator-position"],
        "panel": [1],
        "tagIconDescription": [1, "tag-icon-description"],
        "tagIconName": [1, "tag-icon-name"],
        "tagIconLibrary": [1, "tag-icon-library"],
        "tagImportance": [1, "tag-importance"],
        "tagSize": [1, "tag-size"],
        "tagStatus": [1, "tag-status"],
        "tagText": [1, "tag-text"],
        "selected": [4],
        "size": [1],
        "subtitle": [1],
        "text": [1],
        "href": [1],
        "tabIndex": [32],
        "isIndicatorOnTop": [32]
    }, [[0, "click", "onClick"]], {
        "panel": ["panelChanged"],
        "tabindex": ["tabindexChanged"]
    }]);
_Tab_inheritedAttributes = new WeakMap(), _Tab_div = new WeakMap(), _Tab_panel = new WeakMap(), _Tab_ref = new WeakMap(), _Tab_tooltipRef = new WeakMap(), _Tab_close = new WeakMap(), _Tab_onIconClick = new WeakMap(), _Tab_onIconKeyDown = new WeakMap(), _Tab_onBlur = new WeakMap(), _Tab_onFocus = new WeakMap(), _Tab_instances = new WeakSet(), _Tab_collapsed_get = function _Tab_collapsed_get() {
    const hasNoTag = this.tagText === undefined || this.tagText === '';
    const hasNoBadge = this.badge === undefined || this.badge === '';
    return (__classPrivateFieldGet(this, _Tab_instances, "a", _Tab_shouldCollapse_get) &&
        __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_computedAction_get) === undefined &&
        hasNoTag &&
        hasNoBadge);
}, _Tab_computedAction_get = function _Tab_computedAction_get() {
    switch (this.action) {
        case 'closable':
        case 'expandable': {
            return this.action;
        }
        default: {
            return undefined;
        }
    }
}, _Tab_computedSize_get = function _Tab_computedSize_get() {
    switch (this.size) {
        case 'standard':
        case 'small':
        case 'large': {
            return this.size;
        }
        default: {
            return 'standard';
        }
    }
}, _Tab_computedImportance_get = function _Tab_computedImportance_get() {
    switch (this.importance) {
        case 'subdued':
        case 'emphasized': {
            return this.importance;
        }
        default: {
            return 'standard';
        }
    }
}, _Tab_parentLayer_get = function _Tab_parentLayer_get() {
    return this.host.closest('qds-tabbar')?.layer ?? 'main';
}, _Tab_parentLevel_get = function _Tab_parentLevel_get() {
    return this.host.closest('qds-tabbar')?.level ?? 'root';
}, _Tab_ariaLabel_get = function _Tab_ariaLabel_get() {
    return `Close ${this.text}`;
}, _Tab_computedDisabled_get = function _Tab_computedDisabled_get() {
    return this.disabled ?? false;
}, _Tab_shouldCollapse_get = function _Tab_shouldCollapse_get() {
    return this.iconOnly && this.iconName !== undefined && this.iconName !== '';
}, _Tab_placement_get = function _Tab_placement_get() {
    switch (this.indicatorPosition) {
        case 'inline-start': {
            return 'left';
        }
        case 'inline-end': {
            return 'right';
        }
        case 'block-start': {
            return 'top';
        }
        default: {
            return 'bottom';
        }
    }
}, _Tab_renderText = function _Tab_renderText() {
    return __classPrivateFieldGet(this, _Tab_instances, "a", _Tab_shouldCollapse_get) ? (h("qds-title", { subtitle: this.subtitle, layer: "accessory", level: "root" }, this.text)) : (h("div", { class: "qds-texts" }, h("div", { class: "qds-text" }, this.text), this.subtitle !== undefined && this.subtitle !== '' && (h("div", { class: "qds-subtitle" }, this.subtitle))));
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-tab", "qds-badge-counter", "qds-badge-indicator", "qds-icon", "qds-tag", "qds-title", "qds-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-tab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tab);
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
        case "qds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "qds-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "qds-title":
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

const QdsTab = Tab;
const defineCustomElement = defineCustomElement$1;

export { QdsTab, defineCustomElement };

//# sourceMappingURL=qds-tab.js.map