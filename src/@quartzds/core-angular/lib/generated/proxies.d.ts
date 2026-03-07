import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import type { Components } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsButtonQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsCheckboxQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsChipQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsInlineLinkQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsInputQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsInputEventDetail as IQdsInputQdsInputEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsListItemQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsNavListItemQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsRadioQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsSelectQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsInputEventDetail as IQdsSelectQdsInputEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsStandaloneLinkQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsSwitchQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsTabQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsFocusEventDetail as IQdsTextareaQdsFocusEventDetail } from '@quartzds/core/components';
import type { QdsInputEventDetail as IQdsTextareaQdsInputEventDetail } from '@quartzds/core/components';
import * as i0 from "@angular/core";
export declare class QdsBadgeCounter {
    protected z: NgZone;
    protected el: HTMLQdsBadgeCounterElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsBadgeCounter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsBadgeCounter, "qds-badge-counter", never, { "description": { "alias": "description"; "required": false; }; "importance": { "alias": "importance"; "required": false; }; "size": { "alias": "size"; "required": false; }; "strokeRing": { "alias": "strokeRing"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsBadgeCounter extends Components.QdsBadgeCounter {
}
export declare class QdsBadgeIndicator {
    protected z: NgZone;
    protected el: HTMLQdsBadgeIndicatorElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsBadgeIndicator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsBadgeIndicator, "qds-badge-indicator", never, { "description": { "alias": "description"; "required": false; }; "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "strokeRing": { "alias": "strokeRing"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsBadgeIndicator extends Components.QdsBadgeIndicator {
}
export declare class QdsBreadcrumbItem {
    protected z: NgZone;
    protected el: HTMLQdsBreadcrumbItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsBreadcrumbItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsBreadcrumbItem, "qds-breadcrumb-item", never, { "href": { "alias": "href"; "required": false; }; "hreflang": { "alias": "hreflang"; "required": false; }; "referrerPolicy": { "alias": "referrerPolicy"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "target": { "alias": "target"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsBreadcrumbItem extends Components.QdsBreadcrumbItem {
}
export declare class QdsButton {
    protected z: NgZone;
    protected el: HTMLQdsButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsButton, "qds-button", never, { "action": { "alias": "action"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; "badgeDescription": { "alias": "badgeDescription"; "required": false; }; "badgeIndicatorStatus": { "alias": "badgeIndicatorStatus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "download": { "alias": "download"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formAction": { "alias": "formAction"; "required": false; }; "formMethod": { "alias": "formMethod"; "required": false; }; "formNoValidate": { "alias": "formNoValidate"; "required": false; }; "formTarget": { "alias": "formTarget"; "required": false; }; "href": { "alias": "href"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "iconOnly": { "alias": "iconOnly"; "required": false; }; "importance": { "alias": "importance"; "required": false; }; "labels": { "alias": "labels"; "required": false; }; "name": { "alias": "name"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "size": { "alias": "size"; "required": false; }; "target": { "alias": "target"; "required": false; }; "text": { "alias": "text"; "required": false; }; "type": { "alias": "type"; "required": false; }; "validationMessage": { "alias": "validationMessage"; "required": false; }; "validity": { "alias": "validity"; "required": false; }; "value": { "alias": "value"; "required": false; }; "willValidate": { "alias": "willValidate"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsButton extends Components.QdsButton {
    /**
     * Emitted when the button loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsButtonQdsFocusEventDetail>>;
    /**
     * Emitted when the button gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsButtonQdsFocusEventDetail>>;
}
export declare class QdsCheckbox {
    protected z: NgZone;
    protected el: HTMLQdsCheckboxElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsCheckbox, "qds-checkbox", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "inline": { "alias": "inline"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "text": { "alias": "text"; "required": false; }; "validationMessage": { "alias": "validationMessage"; "required": false; }; "validity": { "alias": "validity"; "required": false; }; "value": { "alias": "value"; "required": false; }; "willValidate": { "alias": "willValidate"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsCheckbox extends Components.QdsCheckbox {
    /**
     * Emitted when the checkbox loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsCheckboxQdsFocusEventDetail>>;
    /**
     * Emitted when a change to the checkbox's state is committed by the user.
     */
    qdsChange: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the checkbox gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsCheckboxQdsFocusEventDetail>>;
}
export declare class QdsChip {
    protected z: NgZone;
    protected el: HTMLQdsChipElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsChip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsChip, "qds-chip", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "text": { "alias": "text"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsChip extends Components.QdsChip {
    /**
     * Emitted when the chip loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsChipQdsFocusEventDetail>>;
    /**
     * Emitted when the chip gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsChipQdsFocusEventDetail>>;
    /**
     * Emitted when the chip is closed.
     */
    qdsClose: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when a change to the selectable chip's state is committed by the user.
     */
    qdsChange: EventEmitter<CustomEvent<void>>;
}
export declare class QdsDialog {
    protected z: NgZone;
    protected el: HTMLQdsDialogElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsDialog, "qds-dialog", never, { "open": { "alias": "open"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsDialog extends Components.QdsDialog {
    /**
     * Emitted when the user instructs the browser that they wish to dismiss the
  currently open dialog. The browser fires this event when the user presses
  the `Esc` key.
  
  When a dialog is dismissed with the `Esc` key, both the `qdsCancel` and
  `qdsClose` events are fired.
     */
    qdsCancel: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the dialog has been closed.
     */
    qdsClose: EventEmitter<CustomEvent<void>>;
}
export declare class QdsDivider {
    protected z: NgZone;
    protected el: HTMLQdsDividerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsDivider, "qds-divider", never, { "importance": { "alias": "importance"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsDivider extends Components.QdsDivider {
}
export declare class QdsDropdown {
    protected z: NgZone;
    protected el: HTMLQdsDropdownElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsDropdown, "qds-dropdown", never, { "autoUpdateOptions": { "alias": "autoUpdateOptions"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "flipOptions": { "alias": "flipOptions"; "required": false; }; "noFlip": { "alias": "noFlip"; "required": false; }; "noShift": { "alias": "noShift"; "required": false; }; "offsetOptions": { "alias": "offsetOptions"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "shiftOptions": { "alias": "shiftOptions"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsDropdown extends Components.QdsDropdown {
    /**
     * Emitted when the user instructs the browser that they wish to dismiss the
  current open dropdown by pressing the `Esc` key.
  
  When a dropdown is dismissed with the `Esc` key, both the `qdsCancel` and
  `qdsClose` events are emitted.
     */
    qdsCancel: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the dropdown is closed.
     */
    qdsClose: EventEmitter<CustomEvent<void>>;
}
export declare class QdsFormMessage {
    protected z: NgZone;
    protected el: HTMLQdsFormMessageElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsFormMessage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsFormMessage, "qds-form-message", never, { "inline": { "alias": "inline"; "required": false; }; "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "statusDescription": { "alias": "statusDescription"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsFormMessage extends Components.QdsFormMessage {
}
export declare class QdsIcon {
    protected z: NgZone;
    protected el: HTMLQdsIconElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsIcon, "qds-icon", never, { "library": { "alias": "library"; "required": false; }; "name": { "alias": "name"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsIcon extends Components.QdsIcon {
    /**
     * Emitted when the icon has loaded.
     */
    qdsLoad: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the icon fails to load due to an error.
     */
    qdsError: EventEmitter<CustomEvent<void>>;
}
export declare class QdsInlineLink {
    protected z: NgZone;
    protected el: HTMLQdsInlineLinkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsInlineLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsInlineLink, "qds-inline-link", never, { "disabled": { "alias": "disabled"; "required": false; }; "download": { "alias": "download"; "required": false; }; "href": { "alias": "href"; "required": false; }; "hreflang": { "alias": "hreflang"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "importance": { "alias": "importance"; "required": false; }; "referrerPolicy": { "alias": "referrerPolicy"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsInlineLink extends Components.QdsInlineLink {
    /**
     * Emitted when the inline link loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsInlineLinkQdsFocusEventDetail>>;
    /**
     * Emitted when the inline link gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsInlineLinkQdsFocusEventDetail>>;
}
export declare class QdsInput {
    protected z: NgZone;
    protected el: HTMLQdsInputElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsInput, "qds-input", never, { "accept": { "alias": "accept"; "required": false; }; "autoComplete": { "alias": "autoComplete"; "required": false; }; "capture": { "alias": "capture"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "enterkeyhint": { "alias": "enterkeyhint"; "required": false; }; "files": { "alias": "files"; "required": false; }; "form": { "alias": "form"; "required": false; }; "inputmode": { "alias": "inputmode"; "required": false; }; "labels": { "alias": "labels"; "required": false; }; "max": { "alias": "max"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "min": { "alias": "min"; "required": false; }; "minLength": { "alias": "minLength"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "noIcon": { "alias": "noIcon"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "selectionDirection": { "alias": "selectionDirection"; "required": false; }; "selectionEnd": { "alias": "selectionEnd"; "required": false; }; "selectionStart": { "alias": "selectionStart"; "required": false; }; "size": { "alias": "size"; "required": false; }; "step": { "alias": "step"; "required": false; }; "type": { "alias": "type"; "required": false; }; "validationMessage": { "alias": "validationMessage"; "required": false; }; "validity": { "alias": "validity"; "required": false; }; "value": { "alias": "value"; "required": false; }; "willValidate": { "alias": "willValidate"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsInput extends Components.QdsInput {
    /**
     * Emitted when the input loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsInputQdsFocusEventDetail>>;
    /**
     * Emitted when the user cancels the file picker via the <kbd>Esc</kbd> key
  or the cancel button and when the user re-selects the same files that were
  previously selected.
     */
    qdsCancel: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when an alteration to the input's value is committed by the user.
     */
    qdsChange: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the input gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsInputQdsFocusEventDetail>>;
    /**
     * Emitted when the input's value changes.
     */
    qdsInput: EventEmitter<CustomEvent<IQdsInputQdsInputEventDetail>>;
}
export declare class QdsLabel {
    protected z: NgZone;
    protected el: HTMLQdsLabelElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsLabel, "qds-label", never, { "inline": { "alias": "inline"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsLabel extends Components.QdsLabel {
}
export declare class QdsListItem {
    protected z: NgZone;
    protected el: HTMLQdsListItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsListItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsListItem, "qds-list-item", never, { "checked": { "alias": "checked"; "required": false; }; "destination": { "alias": "destination"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "divider": { "alias": "divider"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "kicker": { "alias": "kicker"; "required": false; }; "listAction": { "alias": "listAction"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsListItem extends Components.QdsListItem {
    /**
     * Emitted when the list item loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsListItemQdsFocusEventDetail>>;
    /**
     * Emitted when a change to the checkbox's state is committed by the user.
     */
    qdsChange: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the list item gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsListItemQdsFocusEventDetail>>;
}
export declare class QdsLoader {
    protected z: NgZone;
    protected el: HTMLQdsLoaderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsLoader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsLoader, "qds-loader", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsLoader extends Components.QdsLoader {
}
export declare class QdsNavListItem {
    protected z: NgZone;
    protected el: HTMLQdsNavListItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsNavListItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsNavListItem, "qds-nav-list-item", never, { "collapsed": { "alias": "collapsed"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "subtext": { "alias": "subtext"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsNavListItem extends Components.QdsNavListItem {
    /**
     * Emitted when the navigation list item loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsNavListItemQdsFocusEventDetail>>;
    /**
     * Emitted when the navigation list item gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsNavListItemQdsFocusEventDetail>>;
}
export declare class QdsProgressBar {
    protected z: NgZone;
    protected el: HTMLQdsProgressBarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsProgressBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsProgressBar, "qds-progress-bar", never, { "labels": { "alias": "labels"; "required": false; }; "max": { "alias": "max"; "required": false; }; "position": { "alias": "position"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsProgressBar extends Components.QdsProgressBar {
}
export declare class QdsRadio {
    protected z: NgZone;
    protected el: HTMLQdsRadioElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsRadio, "qds-radio", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "inline": { "alias": "inline"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "size": { "alias": "size"; "required": false; }; "text": { "alias": "text"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsRadio extends Components.QdsRadio {
    /**
     * Emitted when the radio button loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsRadioQdsFocusEventDetail>>;
    /**
     * Emitted when the radio button is checked by the user.
     */
    qdsChange: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the radio button gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsRadioQdsFocusEventDetail>>;
}
export declare class QdsSelect {
    protected z: NgZone;
    protected el: HTMLQdsSelectElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsSelect, "qds-select", never, { "autoComplete": { "alias": "autoComplete"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "length": { "alias": "length"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "options": { "alias": "options"; "required": false; }; "required": { "alias": "required"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "selectedOptions": { "alias": "selectedOptions"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "validationMessage": { "alias": "validationMessage"; "required": false; }; "validity": { "alias": "validity"; "required": false; }; "value": { "alias": "value"; "required": false; }; "willValidate": { "alias": "willValidate"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsSelect extends Components.QdsSelect {
    /**
     * Emitted when the select loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsSelectQdsFocusEventDetail>>;
    /**
     * Emitted when an alteration to the select's value is committed by the
  user.
     */
    qdsChange: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the select gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsSelectQdsFocusEventDetail>>;
    /**
     * Emitted when the select's value changes.
     */
    qdsInput: EventEmitter<CustomEvent<IQdsSelectQdsInputEventDetail>>;
}
export declare class QdsStandaloneLink {
    protected z: NgZone;
    protected el: HTMLQdsStandaloneLinkElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsStandaloneLink, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsStandaloneLink, "qds-standalone-link", never, { "disabled": { "alias": "disabled"; "required": false; }; "download": { "alias": "download"; "required": false; }; "href": { "alias": "href"; "required": false; }; "hreflang": { "alias": "hreflang"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "importance": { "alias": "importance"; "required": false; }; "referrerPolicy": { "alias": "referrerPolicy"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "size": { "alias": "size"; "required": false; }; "target": { "alias": "target"; "required": false; }; "visitable": { "alias": "visitable"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsStandaloneLink extends Components.QdsStandaloneLink {
    /**
     * Emitted when the standalone link loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsStandaloneLinkQdsFocusEventDetail>>;
    /**
     * Emitted when the standalone link gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsStandaloneLinkQdsFocusEventDetail>>;
}
export declare class QdsSwitch {
    protected z: NgZone;
    protected el: HTMLQdsSwitchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsSwitch, "qds-switch", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "inline": { "alias": "inline"; "required": false; }; "labels": { "alias": "labels"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "validationMessage": { "alias": "validationMessage"; "required": false; }; "validity": { "alias": "validity"; "required": false; }; "value": { "alias": "value"; "required": false; }; "willValidate": { "alias": "willValidate"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsSwitch extends Components.QdsSwitch {
    /**
     * Emitted when the switch loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsSwitchQdsFocusEventDetail>>;
    /**
     * Emitted when a change to the switch's state is committed by the user.
     */
    qdsChange: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the switch gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsSwitchQdsFocusEventDetail>>;
}
export declare class QdsTab {
    protected z: NgZone;
    protected el: HTMLQdsTabElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTab, "qds-tab", never, { "action": { "alias": "action"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; "badgeCounterImportance": { "alias": "badgeCounterImportance"; "required": false; }; "badgeDescription": { "alias": "badgeDescription"; "required": false; }; "badgeIndicatorStatus": { "alias": "badgeIndicatorStatus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "href": { "alias": "href"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "iconOnly": { "alias": "iconOnly"; "required": false; }; "importance": { "alias": "importance"; "required": false; }; "indicatorPosition": { "alias": "indicatorPosition"; "required": false; }; "panel": { "alias": "panel"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "tagIconDescription": { "alias": "tagIconDescription"; "required": false; }; "tagIconLibrary": { "alias": "tagIconLibrary"; "required": false; }; "tagIconName": { "alias": "tagIconName"; "required": false; }; "tagImportance": { "alias": "tagImportance"; "required": false; }; "tagSize": { "alias": "tagSize"; "required": false; }; "tagStatus": { "alias": "tagStatus"; "required": false; }; "tagText": { "alias": "tagText"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsTab extends Components.QdsTab {
    /**
     * Emitted when the tab is closed.
     */
    qdsClose: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the tab loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsTabQdsFocusEventDetail>>;
    /**
     * Emitted when the tab gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsTabQdsFocusEventDetail>>;
}
export declare class QdsTabbar {
    protected z: NgZone;
    protected el: HTMLQdsTabbarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTabbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTabbar, "qds-tabbar", never, { "layer": { "alias": "layer"; "required": false; }; "level": { "alias": "level"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "tablistDescription": { "alias": "tablistDescription"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsTabbar extends Components.QdsTabbar {
    /**
     * Emitted when the user selects the tab.
     */
    qdsTabShow: EventEmitter<CustomEvent<HTMLElement>>;
    /**
     * Emitted when the user selects the tab.
     */
    qdsTabHide: EventEmitter<CustomEvent<HTMLElement>>;
}
export declare class QdsTable {
    protected z: NgZone;
    protected el: HTMLQdsTableElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTable, "qds-table", never, {}, {}, never, ["*"], true, never>;
}
export declare interface QdsTable extends Components.QdsTable {
}
export declare class QdsTableBody {
    protected z: NgZone;
    protected el: HTMLQdsTableBodyElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTableBody, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTableBody, "qds-table-body", never, {}, {}, never, ["*"], true, never>;
}
export declare interface QdsTableBody extends Components.QdsTableBody {
}
export declare class QdsTableCell {
    protected z: NgZone;
    protected el: HTMLQdsTableCellElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTableCell, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTableCell, "qds-table-cell", never, { "colSpan": { "alias": "colSpan"; "required": false; }; "rowSpan": { "alias": "rowSpan"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsTableCell extends Components.QdsTableCell {
}
export declare class QdsTableHead {
    protected z: NgZone;
    protected el: HTMLQdsTableHeadElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTableHead, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTableHead, "qds-table-head", never, {}, {}, never, ["*"], true, never>;
}
export declare interface QdsTableHead extends Components.QdsTableHead {
}
export declare class QdsTableHeadCell {
    protected z: NgZone;
    protected el: HTMLQdsTableHeadCellElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTableHeadCell, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTableHeadCell, "qds-table-head-cell", never, { "abbr": { "alias": "abbr"; "required": false; }; "colSpan": { "alias": "colSpan"; "required": false; }; "rowSpan": { "alias": "rowSpan"; "required": false; }; "scope": { "alias": "scope"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsTableHeadCell extends Components.QdsTableHeadCell {
}
export declare class QdsTableRow {
    protected z: NgZone;
    protected el: HTMLQdsTableRowElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTableRow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTableRow, "qds-table-row", never, {}, {}, never, ["*"], true, never>;
}
export declare interface QdsTableRow extends Components.QdsTableRow {
}
export declare class QdsTag {
    protected z: NgZone;
    protected el: HTMLQdsTagElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTag, "qds-tag", never, { "badge": { "alias": "badge"; "required": false; }; "badgeDescription": { "alias": "badgeDescription"; "required": false; }; "iconDescription": { "alias": "iconDescription"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "importance": { "alias": "importance"; "required": false; }; "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsTag extends Components.QdsTag {
}
export declare class QdsTextarea {
    protected z: NgZone;
    protected el: HTMLQdsTextareaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTextarea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTextarea, "qds-textarea", never, { "autoComplete": { "alias": "autoComplete"; "required": false; }; "cols": { "alias": "cols"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "enterkeyhint": { "alias": "enterkeyhint"; "required": false; }; "form": { "alias": "form"; "required": false; }; "inputmode": { "alias": "inputmode"; "required": false; }; "labels": { "alias": "labels"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "minLength": { "alias": "minLength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "selectionDirection": { "alias": "selectionDirection"; "required": false; }; "selectionEnd": { "alias": "selectionEnd"; "required": false; }; "selectionStart": { "alias": "selectionStart"; "required": false; }; "size": { "alias": "size"; "required": false; }; "validationMessage": { "alias": "validationMessage"; "required": false; }; "validity": { "alias": "validity"; "required": false; }; "value": { "alias": "value"; "required": false; }; "willValidate": { "alias": "willValidate"; "required": false; }; "wrap": { "alias": "wrap"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsTextarea extends Components.QdsTextarea {
    /**
     * Emitted when the textarea loses focus.
     */
    qdsBlur: EventEmitter<CustomEvent<IQdsTextareaQdsFocusEventDetail>>;
    /**
     * Emitted when an alteration to the textarea's value is committed by the
  user.
     */
    qdsChange: EventEmitter<CustomEvent<void>>;
    /**
     * Emitted when the textarea gains focus.
     */
    qdsFocus: EventEmitter<CustomEvent<IQdsTextareaQdsFocusEventDetail>>;
    /**
     * Emitted when the textarea's value changes.
     */
    qdsInput: EventEmitter<CustomEvent<IQdsTextareaQdsInputEventDetail>>;
}
export declare class QdsTitle {
    protected z: NgZone;
    protected el: HTMLQdsTitleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTitle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTitle, "qds-title", never, { "alignment": { "alias": "alignment"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "kicker": { "alias": "kicker"; "required": false; }; "layer": { "alias": "layer"; "required": false; }; "level": { "alias": "level"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "tag": { "alias": "tag"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsTitle extends Components.QdsTitle {
}
export declare class QdsTooltip {
    protected z: NgZone;
    protected el: HTMLQdsTooltipElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<QdsTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QdsTooltip, "qds-tooltip", never, { "autoUpdateOptions": { "alias": "autoUpdateOptions"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "flipOptions": { "alias": "flipOptions"; "required": false; }; "noFlip": { "alias": "noFlip"; "required": false; }; "noShift": { "alias": "noShift"; "required": false; }; "offsetOptions": { "alias": "offsetOptions"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "shiftOptions": { "alias": "shiftOptions"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; "target": { "alias": "target"; "required": false; }; "trigger": { "alias": "trigger"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface QdsTooltip extends Components.QdsTooltip {
    /**
     * Emitted when the tooltip is closed.
     */
    qdsClose: EventEmitter<CustomEvent<void>>;
}
//# sourceMappingURL=proxies.d.ts.map