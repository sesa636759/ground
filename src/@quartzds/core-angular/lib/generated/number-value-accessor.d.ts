import { ElementRef } from '@angular/core';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export declare class NumericValueAccessor extends ValueAccessor {
    constructor(el: ElementRef);
    registerOnChange(fn: (_: number | null) => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumericValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NumericValueAccessor, "qds-input[type=number]", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=number-value-accessor.d.ts.map