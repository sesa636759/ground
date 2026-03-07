/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-523dd2e0.js');
const helpers = require('./helpers-10154521.js');

const tagCss = ":host([hidden]){display:none!important}:host{display:inline-block}.qds-tag{align-items:center;border-radius:var(--qds-control-rounded-border-radius);box-sizing:border-box;display:inline-flex;justify-content:center;max-width:inherit;min-width:inherit;width:inherit}.qds-text{text-overflow:ellipsis}.qds-sr-only,.qds-text{overflow:hidden;white-space:nowrap}.qds-sr-only{clip:rect(0 0 0 0);height:1px;margin:-1px;padding:0;position:absolute;width:1px}.qds-icon{flex-shrink:0}[data-status=error]{color:var(--qds-theme-feedback-message-critical)}[data-status=success]{color:var(--qds-theme-feedback-message-success)}[data-status=warning]{color:var(--qds-theme-feedback-message-important)}[data-status=info]{color:var(--qds-theme-feedback-message-informational)}[data-status=neutral]{color:var(--qds-theme-feedback-message-neutral)}[data-importance=subdued] .qds-text{color:var(--qds-theme-control-text-standard)}[data-importance=standard][data-status=error]{background-color:var(--qds-theme-feedback-message-critical-dimmed)}[data-importance=standard][data-status=success]{background-color:var(--qds-theme-feedback-message-success-dimmed)}[data-importance=standard][data-status=warning]{background-color:var(--qds-theme-feedback-message-important-dimmed)}[data-importance=standard][data-status=info]{background-color:var(--qds-theme-feedback-message-informational-dimmed)}[data-importance=standard][data-status=neutral]{background-color:var(--qds-theme-feedback-message-neutral-dimmed)}[data-importance=emphasized][data-status=error]{background-color:var(--qds-theme-feedback-message-critical);color:var(--qds-theme-feedback-message-critical-contrast)}[data-importance=emphasized][data-status=success]{background-color:var(--qds-theme-feedback-message-success);color:var(--qds-theme-feedback-message-success-contrast)}[data-importance=emphasized][data-status=warning]{background-color:var(--qds-theme-feedback-message-important);color:var(--qds-theme-feedback-message-important-contrast)}[data-importance=emphasized][data-status=info]{background-color:var(--qds-theme-feedback-message-informational);color:var(--qds-theme-feedback-message-informational-contrast)}[data-importance=emphasized][data-status=neutral]{background-color:var(--qds-theme-feedback-message-neutral);color:var(--qds-theme-feedback-message-neutral-contrast)}.qds-tag[data-size=small]{font:var(--qds-control-small-text);gap:var(--qds-control-small-gap-internal);height:var(--qds-control-small-height);padding-inline:var(--qds-control-chip-small-padding-horizontal)}.qds-icon[data-size=small]{height:var(--qds-control-small-icon-size);width:var(--qds-control-small-icon-size)}.qds-tag[data-size=standard]{font:var(--qds-control-standard-text);gap:var(--qds-control-standard-gap-internal);height:var(--qds-control-standard-height);padding-inline:var(--qds-control-chip-standard-padding-horizontal)}.qds-icon[data-size=standard]{height:var(--qds-control-standard-icon-size);width:var(--qds-control-standard-icon-size)}.qds-tag[data-size=large]{font:var(--qds-control-large-text);gap:var(--qds-control-large-gap-internal);height:var(--qds-control-large-height);padding-inline:var(--qds-control-chip-large-padding-horizontal)}.qds-icon[data-size=large]{height:var(--qds-control-large-icon-size);width:var(--qds-control-large-icon-size)}";
const QdsTagStyle0 = tagCss;

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldSet$1 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Tag_instances, _Tag_inheritedAttributes, _Tag_computedImportance_get, _Tag_computedSize_get, _Tag_computedStatus_get, _Tag_hasBadge_get;
const Tag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        _Tag_instances.add(this);
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        /**
         * The tag's importance.
         */
        this.importance = 'standard';
        /**
         * The tag's status.
         */
        this.status = 'neutral';
        /**
         * The tag's size.
         */
        this.size = 'standard';
        /**
         * Displays an indicator if `true`.
         */
        this.badge = false;
        _Tag_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet$1(this, _Tag_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
    }
    render() {
        return (index.h("span", { key: '85725dcb77777d3611e29f89858b98523a121fef', class: "qds-tag", "data-importance": __classPrivateFieldGet$1(this, _Tag_instances, "a", _Tag_computedImportance_get), "data-size": __classPrivateFieldGet$1(this, _Tag_instances, "a", _Tag_computedSize_get), "data-status": __classPrivateFieldGet$1(this, _Tag_instances, "a", _Tag_computedStatus_get), ...__classPrivateFieldGet$1(this, _Tag_inheritedAttributes, "f") }, this.iconName !== undefined && this.iconName !== '' ? (index.h(index.Fragment, null, this.iconDescription !== undefined &&
            this.iconDescription !== '' && (index.h("span", { class: "qds-sr-only" }, this.iconDescription)), index.h("qds-icon", { "aria-hidden": "true", class: "qds-icon", "data-size": __classPrivateFieldGet$1(this, _Tag_instances, "a", _Tag_computedSize_get), library: this.iconLibrary, name: this.iconName }))) : (__classPrivateFieldGet$1(this, _Tag_instances, "a", _Tag_hasBadge_get) && (index.h("qds-badge-indicator", { status: __classPrivateFieldGet$1(this, _Tag_instances, "a", _Tag_computedStatus_get), description: this.badgeDescription, size: __classPrivateFieldGet$1(this, _Tag_instances, "a", _Tag_computedSize_get), strokeRing: true }))), index.h("span", { key: 'e585f7b37f91ff96586676b65d52bce026df9d10', class: "qds-text" }, this.text)));
    }
    get host() { return index.getElement(this); }
};
_Tag_inheritedAttributes = new WeakMap(), _Tag_instances = new WeakSet(), _Tag_computedImportance_get = function _Tag_computedImportance_get() {
    switch (this.importance) {
        case 'subdued':
        case 'emphasized': {
            return this.importance;
        }
        default: {
            return 'standard';
        }
    }
}, _Tag_computedSize_get = function _Tag_computedSize_get() {
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
}, _Tag_computedStatus_get = function _Tag_computedStatus_get() {
    switch (this.status) {
        case 'error':
        case 'info':
        case 'success':
        case 'warning': {
            return this.status;
        }
        default: {
            return 'neutral';
        }
    }
}, _Tag_hasBadge_get = function _Tag_hasBadge_get() {
    return (this.badge ?? false) && this.importance !== 'emphasized';
};
Tag.style = QdsTagStyle0;

const titleCss = ":host([hidden]){display:none!important}:host{display:block}.qds-titles{display:grid;grid-template-areas:\"b\"}.qds-titles.qds-has-kicker{grid-template-areas:\"c\" \"b\"}.qds-titles.qds-has-subtitle{grid-template-areas:\"b\" \"d\"}.qds-titles.qds-has-kicker.qds-has-subtitle{grid-template-areas:\"c\" \"b\" \"d\"}.qds-has-icon{grid-template-areas:\"e b\";grid-template-columns:auto 1fr}.qds-has-icon.qds-has-kicker{grid-template-areas:\". c\" \"e b\"}.qds-has-icon.qds-has-subtitle{grid-template-areas:\"e b\" \". d\"}.qds-has-icon.qds-has-kicker.qds-has-subtitle{grid-template-areas:\". c\" \"e b\" \". d\"}.qds-kicker,.qds-subtitle,.qds-title{margin-block:0}.qds-title{color:var(--qds-theme-title);grid-area:b}.qds-subtitle{color:var(--qds-theme-subtitle);grid-area:d}.qds-kicker{color:var(--qds-theme-kicker);grid-area:c}.qds-icon{align-content:center;color:var(--qds-theme-text-standard);grid-area:e}.qds-main.qds-section.qds-titles{gap:var(--qds-main-section-titles-gap)}.qds-main.qds-section.qds-has-icon{gap:var(--qds-main-section-titles-gap) var(--qds-main-section-titles-icon-gap)}.qds-main.qds-section .qds-title{font:var(--qds-main-section-title)}.qds-main.qds-section .qds-subtitle{font:var(--qds-main-section-subtitle)}.qds-main.qds-section .qds-kicker{font:var(--qds-main-section-kicker)}.qds-main.qds-section .qds-icon{height:var(--qds-main-section-titles-icon-crop-height);width:var(--qds-main-section-titles-icon-size)}.qds-main.qds-subsection.qds-titles{gap:var(--qds-main-subsection-titles-gap)}.qds-main.qds-subsection.qds-has-icon{gap:var(--qds-main-subsection-titles-gap) var(--qds-main-subsection-titles-icon-gap)}.qds-main.qds-subsection .qds-title{font:var(--qds-main-subsection-title)}.qds-main.qds-subsection .qds-subtitle{font:var(--qds-main-subsection-subtitle)}.qds-main.qds-subsection .qds-kicker{font:var(--qds-main-subsection-kicker)}.qds-main.qds-subsection .qds-icon{height:var(--qds-main-subsection-titles-icon-crop-height);width:var(--qds-main-subsection-titles-icon-size)}.qds-panel.qds-root.qds-titles{gap:var(--qds-panel-titles-gap)}.qds-panel.qds-root.qds-has-icon{gap:var(--qds-panel-titles-gap) var(--qds-panel-titles-icon-gap)}.qds-panel.qds-root .qds-title{font:var(--qds-panel-title)}.qds-panel.qds-root .qds-subtitle{font:var(--qds-panel-subtitle)}.qds-panel.qds-root .qds-kicker{font:var(--qds-panel-kicker)}.qds-panel.qds-root .qds-icon{height:var(--qds-panel-titles-icon-crop-height);width:var(--qds-panel-titles-icon-size)}.qds-panel.qds-section.qds-titles{gap:var(--qds-panel-section-titles-gap)}.qds-panel.qds-section.qds-has-icon{gap:var(--qds-panel-section-titles-gap) var(--qds-panel-section-titles-icon-gap)}.qds-panel.qds-section .qds-title{font:var(--qds-panel-section-title)}.qds-panel.qds-section .qds-subtitle{font:var(--qds-panel-section-subtitle)}.qds-panel.qds-section .qds-kicker{font:var(--qds-panel-section-kicker)}.qds-panel.qds-section .qds-icon{height:var(--qds-panel-section-titles-icon-crop-height);width:var(--qds-panel-section-titles-icon-size)}.qds-panel.qds-subsection.qds-titles{gap:var(--qds-panel-subsection-titles-gap)}.qds-panel.qds-subsection.qds-has-icon{gap:var(--qds-panel-subsection-titles-gap) var(--qds-panel-subsection-titles-icon-gap)}.qds-panel.qds-subsection .qds-title{font:var(--qds-panel-subsection-title)}.qds-panel.qds-subsection .qds-subtitle{font:var(--qds-panel-subsection-subtitle)}.qds-panel.qds-subsection .qds-kicker{font:var(--qds-panel-subsection-kicker)}.qds-panel.qds-subsection .qds-icon{height:var(--qds-panel-subsection-titles-icon-crop-height);width:var(--qds-panel-subsection-titles-icon-size)}.qds-navigation.qds-section.qds-titles{gap:var(--qds-navigation-section-titles-gap)}.qds-navigation.qds-section.qds-has-icon{gap:var(--qds-navigation-section-titles-gap) var(--qds-navigation-section-titles-icon-gap)}.qds-navigation.qds-section .qds-title{font:var(--qds-navigation-section-title)}.qds-navigation.qds-section .qds-subtitle{font:var(--qds-navigation-section-subtitle)}.qds-navigation.qds-section .qds-kicker{font:var(--qds-navigation-section-kicker)}.qds-navigation.qds-section .qds-icon{height:var(--qds-navigation-section-titles-icon-crop-height);width:var(--qds-navigation-section-titles-icon-size)}.qds-navigation.qds-subsection.qds-titles{gap:var(--qds-navigation-subsection-titles-gap)}.qds-navigation.qds-subsection.qds-has-icon{gap:var(--qds-navigation-subsection-titles-gap) var(--qds-navigation-subsection-titles-icon-gap)}.qds-navigation.qds-subsection .qds-title{font:var(--qds-navigation-subsection-title)}.qds-navigation.qds-subsection .qds-subtitle{font:var(--qds-navigation-subsection-subtitle)}.qds-navigation.qds-subsection .qds-kicker{font:var(--qds-navigation-subsection-kicker)}.qds-navigation.qds-subsection .qds-icon{height:var(--qds-navigation-subsection-titles-icon-crop-height);width:var(--qds-navigation-subsection-titles-icon-size)}.qds-popup.qds-root.qds-titles{gap:var(--qds-popup-titles-gap)}.qds-popup.qds-root.qds-has-icon{gap:var(--qds-popup-titles-gap) var(--qds-popup-titles-icon-gap)}.qds-popup.qds-root .qds-title{font:var(--qds-popup-title)}.qds-popup.qds-root .qds-subtitle{font:var(--qds-popup-subtitle)}.qds-popup.qds-root .qds-kicker{font:var(--qds-popup-kicker)}.qds-popup.qds-root .qds-icon{height:var(--qds-popup-titles-icon-crop-height);width:var(--qds-popup-titles-icon-size)}.qds-popup.qds-section.qds-titles{gap:var(--qds-popup-section-titles-gap)}.qds-popup.qds-section.qds-has-icon{gap:var(--qds-popup-section-titles-gap) var(--qds-popup-section-titles-icon-gap)}.qds-popup.qds-section .qds-title{font:var(--qds-popup-section-title)}.qds-popup.qds-section .qds-subtitle{font:var(--qds-popup-section-subtitle)}.qds-popup.qds-section .qds-kicker{font:var(--qds-popup-section-kicker)}.qds-popup.qds-section .qds-icon{height:var(--qds-popup-section-titles-icon-crop-height);width:var(--qds-popup-section-titles-icon-size)}.qds-popup.qds-subsection.qds-titles{gap:var(--qds-popup-subsection-titles-gap)}.qds-popup.qds-subsection.qds-has-icon{gap:var(--qds-popup-subsection-titles-gap) var(--qds-popup-subsection-titles-icon-gap)}.qds-popup.qds-subsection .qds-title{font:var(--qds-popup-subsection-title)}.qds-popup.qds-subsection .qds-subtitle{font:var(--qds-popup-subsection-subtitle)}.qds-popup.qds-subsection .qds-kicker{font:var(--qds-popup-subsection-kicker)}.qds-popup.qds-subsection .qds-icon{height:var(--qds-popup-subsection-titles-icon-crop-height);width:var(--qds-popup-subsection-titles-icon-size)}.qds-accessory.qds-root.qds-titles{gap:var(--qds-accessory-titles-gap)}.qds-accessory.qds-root.qds-has-icon{gap:var(--qds-accessory-titles-gap) var(--qds-accessory-titles-icon-gap)}.qds-accessory.qds-root .qds-title{font:var(--qds-accessory-title)}.qds-accessory.qds-root .qds-subtitle{font:var(--qds-accessory-subtitle)}.qds-accessory.qds-root .qds-kicker{font:var(--qds-accessory-kicker)}.qds-accessory.qds-root .qds-icon{height:var(--qds-accessory-titles-icon-crop-height);width:var(--qds-accessory-titles-icon-size)}.qds-accessory.qds-section.qds-titles{gap:var(--qds-accessory-section-titles-gap)}.qds-accessory.qds-section.qds-has-icon{gap:var(--qds-accessory-section-titles-gap) var(--qds-accessory-section-titles-icon-gap)}.qds-accessory.qds-section .qds-title{font:var(--qds-accessory-section-title)}.qds-accessory.qds-section .qds-subtitle{font:var(--qds-accessory-section-subtitle)}.qds-accessory.qds-section .qds-kicker{font:var(--qds-accessory-section-kicker)}.qds-accessory.qds-section .qds-icon{height:var(--qds-accessory-section-titles-icon-crop-height);width:var(--qds-accessory-section-titles-icon-size)}.qds-titles[data-variant=web-main-section-promo]:is(.qds-root,.qds-section,.qds-subsection){gap:var(--qds-main-section-promo-titles-gap);margin:auto}[data-variant=web-main-section-promo]:is(.qds-root,.qds-section,.qds-subsection) .qds-title{font:var(--qds-main-section-promo-title)}[data-variant=web-main-section-promo]:is(.qds-root,.qds-section,.qds-subsection) .qds-subtitle{font:var(--qds-main-section-promo-subtitle)}[data-variant=web-main-section-promo]:is(.qds-root,.qds-section,.qds-subsection) .qds-kicker{font:var(--qds-main-section-promo-kicker)}.qds-has-icon[data-variant=web-main-section-promo]:is(.qds-root,.qds-section,.qds-subsection){gap:var(--qds-main-section-promo-titles-gap) var(--qds-main-section-promo-titles-icon-gap)}[data-variant=web-main-section-promo]:is(.qds-root,.qds-section,.qds-subsection) .qds-icon{height:var(--qds-main-section-promo-titles-icon-crop-height);width:var(--qds-main-section-promo-titles-icon-size)}[data-alignment=start]{text-align:start}[data-alignment=center]{text-align:center}[data-alignment=end]{text-align:end}.qds-titles[data-variant=web-main-section-display]:is(.qds-root,.qds-section,.qds-subsection){gap:var(--qds-main-section-display-titles-gap)}[data-variant=web-main-section-display]:is(.qds-root,.qds-section,.qds-subsection) .qds-title{font:var(--qds-main-section-display-title)}.qds-titles[data-variant=web-main-subsection-card]:is(.qds-root,.qds-section,.qds-subsection){gap:var(--qds-main-subsection-card-titles-gap)}[data-variant=web-main-subsection-card]:is(.qds-root,.qds-section,.qds-subsection) .qds-title{font:var(--qds-main-subsection-card-title)}.qds-titles[data-variant=web-main-section-hero]:is(.qds-root,.qds-section,.qds-subsection){gap:var(--qds-main-section-hero-titles-gap)}[data-variant=web-main-section-hero]:is(.qds-root,.qds-section,.qds-subsection) .qds-title{font:var(--qds-main-section-hero-title)}";
const QdsTitleStyle0 = titleCss;

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
var _Title_instances, _Title_inheritedAttributes, _Title_hasSubtitle_get, _Title_hasKicker_get;
const Title = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        _Title_instances.add(this);
        /**
         * The alignment of the title.
         */
        this.alignment = 'start';
        /**
         * The name of a registered icon library.
         */
        this.iconLibrary = 'default';
        this.layer = 'main';
        this.level = 'section';
        /**
         * HTML tag to use to render the title.
         */
        this.tag = 'h2';
        _Title_inheritedAttributes.set(this, {});
    }
    componentWillLoad() {
        __classPrivateFieldSet(this, _Title_inheritedAttributes, helpers.inheritAriaAttributes(this.host), "f");
    }
    render() {
        const layer = `qds-${this.layer ?? 'main'}`;
        const level = `qds-${this.level ?? 'section'}`;
        const Tag = this.tag ?? 'h2';
        const hasIcon = this.iconName !== undefined && this.iconName !== '';
        return (index.h("hgroup", { key: '60cf2da13546e770f2e94cda9c033a938b987b51', "data-alignment": this.alignment ?? 'start', "data-variant": this.variant, class: {
                [layer]: true,
                [level]: true,
                'qds-titles': true,
                'qds-has-icon': hasIcon,
                'qds-has-kicker': __classPrivateFieldGet(this, _Title_instances, "a", _Title_hasKicker_get),
                'qds-has-subtitle': __classPrivateFieldGet(this, _Title_instances, "a", _Title_hasSubtitle_get),
            }, ...__classPrivateFieldGet(this, _Title_inheritedAttributes, "f") }, index.h(Tag, { key: 'b3cf8314d7abbc0ec1438660bcfa846959d96228', class: "qds-title", "data-variant": this.variant }, index.h("slot", { key: 'eedd8a6045cf21214cc07fa9b4fe429443282b17' })), __classPrivateFieldGet(this, _Title_instances, "a", _Title_hasKicker_get) && index.h("p", { key: '439ff80d64c9f4c80a2a0802032971719bbf538a', class: "qds-kicker" }, this.kicker), __classPrivateFieldGet(this, _Title_instances, "a", _Title_hasSubtitle_get) && index.h("p", { key: '76c9f7379a4fa0e1479e87c441756469c08adadc', class: "qds-subtitle" }, this.subtitle), hasIcon && (index.h("qds-icon", { key: '4b9dc344b7fa61a82db199b1253dbc137c82c284', "aria-hidden": "true", class: "qds-icon", name: this.iconName, library: this.iconLibrary }))));
    }
    get host() { return index.getElement(this); }
};
_Title_inheritedAttributes = new WeakMap(), _Title_instances = new WeakSet(), _Title_hasSubtitle_get = function _Title_hasSubtitle_get() {
    return this.subtitle !== undefined && this.subtitle !== '';
}, _Title_hasKicker_get = function _Title_hasKicker_get() {
    return this.kicker !== undefined && this.kicker !== '';
};
Title.style = QdsTitleStyle0;

exports.qds_tag = Tag;
exports.qds_title = Title;

//# sourceMappingURL=qds-tag_2.cjs.entry.js.map