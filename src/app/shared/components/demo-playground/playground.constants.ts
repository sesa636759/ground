import { DemoPlaygroundComponent } from './demo-playground.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DmCheckboxValueAccessorDirective } from '../../../directives/checkbox-value-accessor.directive';
import { DmDropdownValueAccessorDirective } from '../../../directives/dropdown-value-accessor.directive';
import { DmInputValueAccessorDirective } from '../../../directives/input-value-accessor.directive';

export const PLAYGROUND_IMPORTS = [
  CommonModule,
  FormsModule,
  DmCheckboxValueAccessorDirective,
  DmDropdownValueAccessorDirective,
  DemoPlaygroundComponent,
  DmInputValueAccessorDirective,
  DmCheckboxValueAccessorDirective,
];
