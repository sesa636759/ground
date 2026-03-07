import { __decorate, __metadata } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import { defineCustomElement as defineQdsBadgeCounter } from '@quartzds/core/components/qds-badge-counter.js';
import { defineCustomElement as defineQdsBadgeIndicator } from '@quartzds/core/components/qds-badge-indicator.js';
import { defineCustomElement as defineQdsBreadcrumbItem } from '@quartzds/core/components/qds-breadcrumb-item.js';
import { defineCustomElement as defineQdsButton } from '@quartzds/core/components/qds-button.js';
import { defineCustomElement as defineQdsCheckbox } from '@quartzds/core/components/qds-checkbox.js';
import { defineCustomElement as defineQdsChip } from '@quartzds/core/components/qds-chip.js';
import { defineCustomElement as defineQdsDialog } from '@quartzds/core/components/qds-dialog.js';
import { defineCustomElement as defineQdsDivider } from '@quartzds/core/components/qds-divider.js';
import { defineCustomElement as defineQdsDropdown } from '@quartzds/core/components/qds-dropdown.js';
import { defineCustomElement as defineQdsFormMessage } from '@quartzds/core/components/qds-form-message.js';
import { defineCustomElement as defineQdsIcon } from '@quartzds/core/components/qds-icon.js';
import { defineCustomElement as defineQdsInlineLink } from '@quartzds/core/components/qds-inline-link.js';
import { defineCustomElement as defineQdsInput } from '@quartzds/core/components/qds-input.js';
import { defineCustomElement as defineQdsLabel } from '@quartzds/core/components/qds-label.js';
import { defineCustomElement as defineQdsListItem } from '@quartzds/core/components/qds-list-item.js';
import { defineCustomElement as defineQdsLoader } from '@quartzds/core/components/qds-loader.js';
import { defineCustomElement as defineQdsNavListItem } from '@quartzds/core/components/qds-nav-list-item.js';
import { defineCustomElement as defineQdsProgressBar } from '@quartzds/core/components/qds-progress-bar.js';
import { defineCustomElement as defineQdsRadio } from '@quartzds/core/components/qds-radio.js';
import { defineCustomElement as defineQdsSelect } from '@quartzds/core/components/qds-select.js';
import { defineCustomElement as defineQdsStandaloneLink } from '@quartzds/core/components/qds-standalone-link.js';
import { defineCustomElement as defineQdsSwitch } from '@quartzds/core/components/qds-switch.js';
import { defineCustomElement as defineQdsTab } from '@quartzds/core/components/qds-tab.js';
import { defineCustomElement as defineQdsTabbar } from '@quartzds/core/components/qds-tabbar.js';
import { defineCustomElement as defineQdsTable } from '@quartzds/core/components/qds-table.js';
import { defineCustomElement as defineQdsTableBody } from '@quartzds/core/components/qds-table-body.js';
import { defineCustomElement as defineQdsTableCell } from '@quartzds/core/components/qds-table-cell.js';
import { defineCustomElement as defineQdsTableHead } from '@quartzds/core/components/qds-table-head.js';
import { defineCustomElement as defineQdsTableHeadCell } from '@quartzds/core/components/qds-table-head-cell.js';
import { defineCustomElement as defineQdsTableRow } from '@quartzds/core/components/qds-table-row.js';
import { defineCustomElement as defineQdsTag } from '@quartzds/core/components/qds-tag.js';
import { defineCustomElement as defineQdsTextarea } from '@quartzds/core/components/qds-textarea.js';
import { defineCustomElement as defineQdsTitle } from '@quartzds/core/components/qds-title.js';
import { defineCustomElement as defineQdsTooltip } from '@quartzds/core/components/qds-tooltip.js';
import * as i0 from "@angular/core";
let QdsBadgeCounter = class QdsBadgeCounter {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsBadgeCounter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsBadgeCounter, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsBadgeCounter.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsBadgeCounter, isStandalone: true, selector: "qds-badge-counter", inputs: { description: "description", importance: "importance", size: "size", strokeRing: "strokeRing", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsBadgeCounter = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsBadgeCounter,
        inputs: ['description', 'importance', 'size', 'strokeRing', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsBadgeCounter);
export { QdsBadgeCounter };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsBadgeCounter, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-badge-counter',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['description', 'importance', 'size', 'strokeRing', 'value'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsBadgeIndicator = class QdsBadgeIndicator {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsBadgeIndicator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsBadgeIndicator, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsBadgeIndicator.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsBadgeIndicator, isStandalone: true, selector: "qds-badge-indicator", inputs: { description: "description", size: "size", status: "status", strokeRing: "strokeRing" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsBadgeIndicator = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsBadgeIndicator,
        inputs: ['description', 'size', 'status', 'strokeRing']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsBadgeIndicator);
export { QdsBadgeIndicator };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsBadgeIndicator, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-badge-indicator',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['description', 'size', 'status', 'strokeRing'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsBreadcrumbItem = class QdsBreadcrumbItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsBreadcrumbItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsBreadcrumbItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsBreadcrumbItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsBreadcrumbItem, isStandalone: true, selector: "qds-breadcrumb-item", inputs: { href: "href", hreflang: "hreflang", referrerPolicy: "referrerPolicy", rel: "rel", target: "target", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsBreadcrumbItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsBreadcrumbItem,
        inputs: ['href', 'hreflang', 'referrerPolicy', 'rel', 'target', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsBreadcrumbItem);
export { QdsBreadcrumbItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsBreadcrumbItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-breadcrumb-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['href', 'hreflang', 'referrerPolicy', 'rel', 'target', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsButton = class QdsButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsFocus']);
    }
};
QdsButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsButton, isStandalone: true, selector: "qds-button", inputs: { action: "action", badge: "badge", badgeDescription: "badgeDescription", badgeIndicatorStatus: "badgeIndicatorStatus", disabled: "disabled", download: "download", form: "form", formAction: "formAction", formMethod: "formMethod", formNoValidate: "formNoValidate", formTarget: "formTarget", href: "href", iconLibrary: "iconLibrary", iconName: "iconName", iconOnly: "iconOnly", importance: "importance", labels: "labels", name: "name", rel: "rel", size: "size", target: "target", text: "text", type: "type", validationMessage: "validationMessage", validity: "validity", value: "value", willValidate: "willValidate" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsButton = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsButton,
        inputs: ['action', 'badge', 'badgeDescription', 'badgeIndicatorStatus', 'disabled', 'download', 'form', 'formAction', 'formMethod', 'formNoValidate', 'formTarget', 'href', 'iconLibrary', 'iconName', 'iconOnly', 'importance', 'labels', 'name', 'rel', 'size', 'target', 'text', 'type', 'validationMessage', 'validity', 'value', 'willValidate']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsButton);
export { QdsButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['action', 'badge', 'badgeDescription', 'badgeIndicatorStatus', 'disabled', 'download', 'form', 'formAction', 'formMethod', 'formNoValidate', 'formTarget', 'href', 'iconLibrary', 'iconName', 'iconOnly', 'importance', 'labels', 'name', 'rel', 'size', 'target', 'text', 'type', 'validationMessage', 'validity', 'value', 'willValidate'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsCheckbox = class QdsCheckbox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsChange', 'qdsFocus']);
    }
};
QdsCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsCheckbox, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsCheckbox, isStandalone: true, selector: "qds-checkbox", inputs: { checked: "checked", disabled: "disabled", form: "form", indeterminate: "indeterminate", inline: "inline", name: "name", required: "required", size: "size", text: "text", validationMessage: "validationMessage", validity: "validity", value: "value", willValidate: "willValidate" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsCheckbox = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsCheckbox,
        inputs: ['checked', 'disabled', 'form', 'indeterminate', 'inline', 'name', 'required', 'size', 'text', 'validationMessage', 'validity', 'value', 'willValidate']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsCheckbox);
export { QdsCheckbox };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-checkbox',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checked', 'disabled', 'form', 'indeterminate', 'inline', 'name', 'required', 'size', 'text', 'validationMessage', 'validity', 'value', 'willValidate'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsChip = class QdsChip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsFocus', 'qdsClose', 'qdsChange']);
    }
};
QdsChip.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsChip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsChip.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsChip, isStandalone: true, selector: "qds-chip", inputs: { checked: "checked", disabled: "disabled", form: "form", iconLibrary: "iconLibrary", iconName: "iconName", name: "name", size: "size", text: "text", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsChip = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsChip,
        inputs: ['checked', 'disabled', 'form', 'iconLibrary', 'iconName', 'name', 'size', 'text', 'type', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsChip);
export { QdsChip };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsChip, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-chip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checked', 'disabled', 'form', 'iconLibrary', 'iconName', 'name', 'size', 'text', 'type', 'value'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsDialog = class QdsDialog {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsCancel', 'qdsClose']);
    }
};
QdsDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsDialog, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsDialog, isStandalone: true, selector: "qds-dialog", inputs: { open: "open" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsDialog = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsDialog,
        inputs: ['open']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsDialog);
export { QdsDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsDialog, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-dialog',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['open'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsDivider = class QdsDivider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsDivider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsDivider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsDivider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsDivider, isStandalone: true, selector: "qds-divider", inputs: { importance: "importance", vertical: "vertical" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsDivider = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsDivider,
        inputs: ['importance', 'vertical']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsDivider);
export { QdsDivider };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsDivider, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-divider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['importance', 'vertical'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsDropdown = class QdsDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsCancel', 'qdsClose']);
    }
};
QdsDropdown.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsDropdown, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsDropdown.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsDropdown, isStandalone: true, selector: "qds-dropdown", inputs: { autoUpdateOptions: "autoUpdateOptions", disabled: "disabled", flipOptions: "flipOptions", noFlip: "noFlip", noShift: "noShift", offsetOptions: "offsetOptions", placement: "placement", shiftOptions: "shiftOptions", strategy: "strategy", target: "target" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsDropdown = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsDropdown,
        inputs: ['autoUpdateOptions', 'disabled', 'flipOptions', 'noFlip', 'noShift', 'offsetOptions', 'placement', 'shiftOptions', 'strategy', 'target'],
        methods: ['update']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsDropdown);
export { QdsDropdown };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsDropdown, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-dropdown',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoUpdateOptions', 'disabled', 'flipOptions', 'noFlip', 'noShift', 'offsetOptions', 'placement', 'shiftOptions', 'strategy', 'target'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsFormMessage = class QdsFormMessage {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsFormMessage.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsFormMessage, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsFormMessage.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsFormMessage, isStandalone: true, selector: "qds-form-message", inputs: { inline: "inline", size: "size", status: "status", statusDescription: "statusDescription", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsFormMessage = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsFormMessage,
        inputs: ['inline', 'size', 'status', 'statusDescription', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsFormMessage);
export { QdsFormMessage };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsFormMessage, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-form-message',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['inline', 'size', 'status', 'statusDescription', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsIcon = class QdsIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsLoad', 'qdsError']);
    }
};
QdsIcon.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsIcon, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsIcon.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsIcon, isStandalone: true, selector: "qds-icon", inputs: { library: "library", name: "name" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsIcon = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsIcon,
        inputs: ['library', 'name']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsIcon);
export { QdsIcon };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['library', 'name'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsInlineLink = class QdsInlineLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsFocus']);
    }
};
QdsInlineLink.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsInlineLink, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsInlineLink.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsInlineLink, isStandalone: true, selector: "qds-inline-link", inputs: { disabled: "disabled", download: "download", href: "href", hreflang: "hreflang", iconLibrary: "iconLibrary", iconName: "iconName", importance: "importance", referrerPolicy: "referrerPolicy", rel: "rel", target: "target" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsInlineLink = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsInlineLink,
        inputs: ['disabled', 'download', 'href', 'hreflang', 'iconLibrary', 'iconName', 'importance', 'referrerPolicy', 'rel', 'target']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsInlineLink);
export { QdsInlineLink };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsInlineLink, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-inline-link',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'download', 'href', 'hreflang', 'iconLibrary', 'iconName', 'importance', 'referrerPolicy', 'rel', 'target'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsInput = class QdsInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsCancel', 'qdsChange', 'qdsFocus', 'qdsInput']);
    }
};
QdsInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsInput, isStandalone: true, selector: "qds-input", inputs: { accept: "accept", autoComplete: "autoComplete", capture: "capture", disabled: "disabled", enterkeyhint: "enterkeyhint", files: "files", form: "form", inputmode: "inputmode", labels: "labels", max: "max", maxLength: "maxLength", min: "min", minLength: "minLength", multiple: "multiple", name: "name", noIcon: "noIcon", pattern: "pattern", placeholder: "placeholder", required: "required", selectionDirection: "selectionDirection", selectionEnd: "selectionEnd", selectionStart: "selectionStart", size: "size", step: "step", type: "type", validationMessage: "validationMessage", validity: "validity", value: "value", willValidate: "willValidate" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsInput = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsInput,
        inputs: ['accept', 'autoComplete', 'capture', 'disabled', 'enterkeyhint', 'files', 'form', 'inputmode', 'labels', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'noIcon', 'pattern', 'placeholder', 'required', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 'step', 'type', 'validationMessage', 'validity', 'value', 'willValidate']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsInput);
export { QdsInput };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['accept', 'autoComplete', 'capture', 'disabled', 'enterkeyhint', 'files', 'form', 'inputmode', 'labels', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'noIcon', 'pattern', 'placeholder', 'required', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 'step', 'type', 'validationMessage', 'validity', 'value', 'willValidate'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsLabel = class QdsLabel {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsLabel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsLabel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsLabel.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsLabel, isStandalone: true, selector: "qds-label", inputs: { inline: "inline", required: "required", size: "size", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsLabel = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsLabel,
        inputs: ['inline', 'required', 'size', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsLabel);
export { QdsLabel };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsLabel, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-label',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['inline', 'required', 'size', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsListItem = class QdsListItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsChange', 'qdsFocus']);
    }
};
QdsListItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsListItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsListItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsListItem, isStandalone: true, selector: "qds-list-item", inputs: { checked: "checked", destination: "destination", disabled: "disabled", divider: "divider", iconLibrary: "iconLibrary", iconName: "iconName", indeterminate: "indeterminate", kicker: "kicker", listAction: "listAction", selected: "selected", size: "size", subtitle: "subtitle", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsListItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsListItem,
        inputs: ['checked', 'destination', 'disabled', 'divider', 'iconLibrary', 'iconName', 'indeterminate', 'kicker', 'listAction', 'selected', 'size', 'subtitle', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsListItem);
export { QdsListItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsListItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-list-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checked', 'destination', 'disabled', 'divider', 'iconLibrary', 'iconName', 'indeterminate', 'kicker', 'listAction', 'selected', 'size', 'subtitle', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsLoader = class QdsLoader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsLoader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsLoader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsLoader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsLoader, isStandalone: true, selector: "qds-loader", inputs: { size: "size", status: "status" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsLoader = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsLoader,
        inputs: ['size', 'status']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsLoader);
export { QdsLoader };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsLoader, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-loader',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size', 'status'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsNavListItem = class QdsNavListItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsFocus']);
    }
};
QdsNavListItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsNavListItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsNavListItem.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsNavListItem, isStandalone: true, selector: "qds-nav-list-item", inputs: { collapsed: "collapsed", disabled: "disabled", iconLibrary: "iconLibrary", iconName: "iconName", selected: "selected", size: "size", subtext: "subtext", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsNavListItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsNavListItem,
        inputs: ['collapsed', 'disabled', 'iconLibrary', 'iconName', 'selected', 'size', 'subtext', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsNavListItem);
export { QdsNavListItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsNavListItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-nav-list-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['collapsed', 'disabled', 'iconLibrary', 'iconName', 'selected', 'size', 'subtext', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsProgressBar = class QdsProgressBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsProgressBar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsProgressBar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsProgressBar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsProgressBar, isStandalone: true, selector: "qds-progress-bar", inputs: { labels: "labels", max: "max", position: "position", size: "size", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsProgressBar = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsProgressBar,
        inputs: ['labels', 'max', 'position', 'size', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsProgressBar);
export { QdsProgressBar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsProgressBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-progress-bar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['labels', 'max', 'position', 'size', 'value'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsRadio = class QdsRadio {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsChange', 'qdsFocus']);
    }
};
QdsRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsRadio, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsRadio, isStandalone: true, selector: "qds-radio", inputs: { checked: "checked", disabled: "disabled", form: "form", inline: "inline", name: "name", required: "required", size: "size", text: "text", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsRadio = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsRadio,
        inputs: ['checked', 'disabled', 'form', 'inline', 'name', 'required', 'size', 'text', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsRadio);
export { QdsRadio };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-radio',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checked', 'disabled', 'form', 'inline', 'name', 'required', 'size', 'text', 'value'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsSelect = class QdsSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsChange', 'qdsFocus', 'qdsInput']);
    }
};
QdsSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsSelect, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsSelect, isStandalone: true, selector: "qds-select", inputs: { autoComplete: "autoComplete", disabled: "disabled", form: "form", length: "length", multiple: "multiple", name: "name", options: "options", required: "required", selectedIndex: "selectedIndex", selectedOptions: "selectedOptions", size: "size", type: "type", validationMessage: "validationMessage", validity: "validity", value: "value", willValidate: "willValidate" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsSelect = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsSelect,
        inputs: ['autoComplete', 'disabled', 'form', 'length', 'multiple', 'name', 'options', 'required', 'selectedIndex', 'selectedOptions', 'size', 'type', 'validationMessage', 'validity', 'value', 'willValidate']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsSelect);
export { QdsSelect };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-select',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoComplete', 'disabled', 'form', 'length', 'multiple', 'name', 'options', 'required', 'selectedIndex', 'selectedOptions', 'size', 'type', 'validationMessage', 'validity', 'value', 'willValidate'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsStandaloneLink = class QdsStandaloneLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsFocus']);
    }
};
QdsStandaloneLink.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsStandaloneLink, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsStandaloneLink.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsStandaloneLink, isStandalone: true, selector: "qds-standalone-link", inputs: { disabled: "disabled", download: "download", href: "href", hreflang: "hreflang", iconLibrary: "iconLibrary", iconName: "iconName", importance: "importance", referrerPolicy: "referrerPolicy", rel: "rel", size: "size", target: "target", visitable: "visitable" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsStandaloneLink = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsStandaloneLink,
        inputs: ['disabled', 'download', 'href', 'hreflang', 'iconLibrary', 'iconName', 'importance', 'referrerPolicy', 'rel', 'size', 'target', 'visitable']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsStandaloneLink);
export { QdsStandaloneLink };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsStandaloneLink, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-standalone-link',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'download', 'href', 'hreflang', 'iconLibrary', 'iconName', 'importance', 'referrerPolicy', 'rel', 'size', 'target', 'visitable'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsSwitch = class QdsSwitch {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsChange', 'qdsFocus']);
    }
};
QdsSwitch.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsSwitch, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsSwitch.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsSwitch, isStandalone: true, selector: "qds-switch", inputs: { checked: "checked", disabled: "disabled", form: "form", inline: "inline", labels: "labels", name: "name", size: "size", validationMessage: "validationMessage", validity: "validity", value: "value", willValidate: "willValidate" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsSwitch = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsSwitch,
        inputs: ['checked', 'disabled', 'form', 'inline', 'labels', 'name', 'size', 'validationMessage', 'validity', 'value', 'willValidate']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsSwitch);
export { QdsSwitch };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsSwitch, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-switch',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checked', 'disabled', 'form', 'inline', 'labels', 'name', 'size', 'validationMessage', 'validity', 'value', 'willValidate'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTab = class QdsTab {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsClose', 'qdsBlur', 'qdsFocus']);
    }
};
QdsTab.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTab, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTab.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTab, isStandalone: true, selector: "qds-tab", inputs: { action: "action", badge: "badge", badgeCounterImportance: "badgeCounterImportance", badgeDescription: "badgeDescription", badgeIndicatorStatus: "badgeIndicatorStatus", disabled: "disabled", href: "href", iconLibrary: "iconLibrary", iconName: "iconName", iconOnly: "iconOnly", importance: "importance", indicatorPosition: "indicatorPosition", panel: "panel", selected: "selected", size: "size", subtitle: "subtitle", tagIconDescription: "tagIconDescription", tagIconLibrary: "tagIconLibrary", tagIconName: "tagIconName", tagImportance: "tagImportance", tagSize: "tagSize", tagStatus: "tagStatus", tagText: "tagText", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTab = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTab,
        inputs: ['action', 'badge', 'badgeCounterImportance', 'badgeDescription', 'badgeIndicatorStatus', 'disabled', 'href', 'iconLibrary', 'iconName', 'iconOnly', 'importance', 'indicatorPosition', 'panel', 'selected', 'size', 'subtitle', 'tagIconDescription', 'tagIconLibrary', 'tagIconName', 'tagImportance', 'tagSize', 'tagStatus', 'tagText', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTab);
export { QdsTab };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTab, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-tab',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['action', 'badge', 'badgeCounterImportance', 'badgeDescription', 'badgeIndicatorStatus', 'disabled', 'href', 'iconLibrary', 'iconName', 'iconOnly', 'importance', 'indicatorPosition', 'panel', 'selected', 'size', 'subtitle', 'tagIconDescription', 'tagIconLibrary', 'tagIconName', 'tagImportance', 'tagSize', 'tagStatus', 'tagText', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTabbar = class QdsTabbar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsTabShow', 'qdsTabHide']);
    }
};
QdsTabbar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTabbar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTabbar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTabbar, isStandalone: true, selector: "qds-tabbar", inputs: { layer: "layer", level: "level", orientation: "orientation", tablistDescription: "tablistDescription" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTabbar = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTabbar,
        inputs: ['layer', 'level', 'orientation', 'tablistDescription']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTabbar);
export { QdsTabbar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTabbar, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-tabbar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['layer', 'level', 'orientation', 'tablistDescription'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTable = class QdsTable {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsTable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTable, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTable, isStandalone: true, selector: "qds-table", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTable = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTable
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTable);
export { QdsTable };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTable, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-table',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTableBody = class QdsTableBody {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsTableBody.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableBody, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTableBody.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTableBody, isStandalone: true, selector: "qds-table-body", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTableBody = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTableBody
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTableBody);
export { QdsTableBody };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableBody, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-table-body',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTableCell = class QdsTableCell {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsTableCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableCell, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTableCell.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTableCell, isStandalone: true, selector: "qds-table-cell", inputs: { colSpan: "colSpan", rowSpan: "rowSpan" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTableCell = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTableCell,
        inputs: ['colSpan', 'rowSpan']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTableCell);
export { QdsTableCell };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableCell, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-table-cell',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['colSpan', 'rowSpan'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTableHead = class QdsTableHead {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsTableHead.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableHead, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTableHead.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTableHead, isStandalone: true, selector: "qds-table-head", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTableHead = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTableHead
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTableHead);
export { QdsTableHead };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableHead, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-table-head',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTableHeadCell = class QdsTableHeadCell {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsTableHeadCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableHeadCell, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTableHeadCell.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTableHeadCell, isStandalone: true, selector: "qds-table-head-cell", inputs: { abbr: "abbr", colSpan: "colSpan", rowSpan: "rowSpan", scope: "scope" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTableHeadCell = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTableHeadCell,
        inputs: ['abbr', 'colSpan', 'rowSpan', 'scope']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTableHeadCell);
export { QdsTableHeadCell };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableHeadCell, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-table-head-cell',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['abbr', 'colSpan', 'rowSpan', 'scope'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTableRow = class QdsTableRow {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsTableRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableRow, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTableRow.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTableRow, isStandalone: true, selector: "qds-table-row", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTableRow = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTableRow
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTableRow);
export { QdsTableRow };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTableRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-table-row',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTag = class QdsTag {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsTag.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTag, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTag.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTag, isStandalone: true, selector: "qds-tag", inputs: { badge: "badge", badgeDescription: "badgeDescription", iconDescription: "iconDescription", iconLibrary: "iconLibrary", iconName: "iconName", importance: "importance", size: "size", status: "status", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTag = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTag,
        inputs: ['badge', 'badgeDescription', 'iconDescription', 'iconLibrary', 'iconName', 'importance', 'size', 'status', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTag);
export { QdsTag };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTag, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-tag',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['badge', 'badgeDescription', 'iconDescription', 'iconLibrary', 'iconName', 'importance', 'size', 'status', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTextarea = class QdsTextarea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsBlur', 'qdsChange', 'qdsFocus', 'qdsInput']);
    }
};
QdsTextarea.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTextarea, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTextarea.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTextarea, isStandalone: true, selector: "qds-textarea", inputs: { autoComplete: "autoComplete", cols: "cols", disabled: "disabled", enterkeyhint: "enterkeyhint", form: "form", inputmode: "inputmode", labels: "labels", maxLength: "maxLength", minLength: "minLength", name: "name", placeholder: "placeholder", required: "required", rows: "rows", selectionDirection: "selectionDirection", selectionEnd: "selectionEnd", selectionStart: "selectionStart", size: "size", validationMessage: "validationMessage", validity: "validity", value: "value", willValidate: "willValidate", wrap: "wrap" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTextarea = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTextarea,
        inputs: ['autoComplete', 'cols', 'disabled', 'enterkeyhint', 'form', 'inputmode', 'labels', 'maxLength', 'minLength', 'name', 'placeholder', 'required', 'rows', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 'validationMessage', 'validity', 'value', 'willValidate', 'wrap']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTextarea);
export { QdsTextarea };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTextarea, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-textarea',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoComplete', 'cols', 'disabled', 'enterkeyhint', 'form', 'inputmode', 'labels', 'maxLength', 'minLength', 'name', 'placeholder', 'required', 'rows', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 'validationMessage', 'validity', 'value', 'willValidate', 'wrap'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTitle = class QdsTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
QdsTitle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTitle, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTitle.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTitle, isStandalone: true, selector: "qds-title", inputs: { alignment: "alignment", iconLibrary: "iconLibrary", iconName: "iconName", kicker: "kicker", layer: "layer", level: "level", subtitle: "subtitle", tag: "tag", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTitle = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTitle,
        inputs: ['alignment', 'iconLibrary', 'iconName', 'kicker', 'layer', 'level', 'subtitle', 'tag', 'variant']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTitle);
export { QdsTitle };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTitle, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-title',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignment', 'iconLibrary', 'iconName', 'kicker', 'layer', 'level', 'subtitle', 'tag', 'variant'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let QdsTooltip = class QdsTooltip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['qdsClose']);
    }
};
QdsTooltip.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTooltip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
QdsTooltip.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.8", type: QdsTooltip, isStandalone: true, selector: "qds-tooltip", inputs: { autoUpdateOptions: "autoUpdateOptions", disabled: "disabled", flipOptions: "flipOptions", noFlip: "noFlip", noShift: "noShift", offsetOptions: "offsetOptions", placement: "placement", shiftOptions: "shiftOptions", strategy: "strategy", target: "target", trigger: "trigger" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
QdsTooltip = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineQdsTooltip,
        inputs: ['autoUpdateOptions', 'disabled', 'flipOptions', 'noFlip', 'noShift', 'offsetOptions', 'placement', 'shiftOptions', 'strategy', 'target', 'trigger'],
        methods: ['show', 'close', 'updateArrow']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], QdsTooltip);
export { QdsTooltip };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QdsTooltip, decorators: [{
            type: Component,
            args: [{
                    selector: 'qds-tooltip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoUpdateOptions', 'disabled', 'flipOptions', 'noFlip', 'noShift', 'offsetOptions', 'placement', 'shiftOptions', 'strategy', 'target', 'trigger'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
//# sourceMappingURL=proxies.js.map