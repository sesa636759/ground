// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
import { NgModule } from '@angular/core';
import { DIRECTIVES } from './generated/array';
import { BooleanValueAccessor } from './generated/boolean-value-accessor';
import { NumericValueAccessor } from './generated/number-value-accessor';
import { RadioValueAccessor } from './generated/radio-value-accessor';
import { SelectValueAccessor } from './generated/select-value-accessor';
import { TextValueAccessor } from './generated/text-value-accessor';
import * as i0 from "@angular/core";
import * as i1 from "./generated/proxies";
const DECLARATIONS = [
    ...DIRECTIVES,
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,
];
// eslint-disable-next-line @typescript-eslint/no-extraneous-class, import/prefer-default-export
export class QuartzModule {
}
QuartzModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QuartzModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
QuartzModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.8", ngImport: i0, type: QuartzModule, imports: [i1.QdsBadgeCounter, i1.QdsBadgeIndicator, i1.QdsBreadcrumbItem, i1.QdsButton, i1.QdsCheckbox, i1.QdsChip, i1.QdsDialog, i1.QdsDivider, i1.QdsDropdown, i1.QdsFormMessage, i1.QdsIcon, i1.QdsInlineLink, i1.QdsInput, i1.QdsLabel, i1.QdsListItem, i1.QdsLoader, i1.QdsNavListItem, i1.QdsProgressBar, i1.QdsRadio, i1.QdsSelect, i1.QdsStandaloneLink, i1.QdsSwitch, i1.QdsTab, i1.QdsTabbar, i1.QdsTable, i1.QdsTableBody, i1.QdsTableCell, i1.QdsTableHead, i1.QdsTableHeadCell, i1.QdsTableRow, i1.QdsTag, i1.QdsTextarea, i1.QdsTitle, i1.QdsTooltip, BooleanValueAccessor,
        NumericValueAccessor,
        RadioValueAccessor,
        SelectValueAccessor,
        TextValueAccessor], exports: [i1.QdsBadgeCounter, i1.QdsBadgeIndicator, i1.QdsBreadcrumbItem, i1.QdsButton, i1.QdsCheckbox, i1.QdsChip, i1.QdsDialog, i1.QdsDivider, i1.QdsDropdown, i1.QdsFormMessage, i1.QdsIcon, i1.QdsInlineLink, i1.QdsInput, i1.QdsLabel, i1.QdsListItem, i1.QdsLoader, i1.QdsNavListItem, i1.QdsProgressBar, i1.QdsRadio, i1.QdsSelect, i1.QdsStandaloneLink, i1.QdsSwitch, i1.QdsTab, i1.QdsTabbar, i1.QdsTable, i1.QdsTableBody, i1.QdsTableCell, i1.QdsTableHead, i1.QdsTableHeadCell, i1.QdsTableRow, i1.QdsTag, i1.QdsTextarea, i1.QdsTitle, i1.QdsTooltip, BooleanValueAccessor,
        NumericValueAccessor,
        RadioValueAccessor,
        SelectValueAccessor,
        TextValueAccessor] });
QuartzModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QuartzModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.8", ngImport: i0, type: QuartzModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: DECLARATIONS,
                    exports: DECLARATIONS,
                }]
        }] });
//# sourceMappingURL=quartz.module.js.map