import { DemoPlaygroundComponent } from './demo-playground.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxValueAccessorDirective } from '../../../directives/checkbox-value-accessor.directive';
import { DropdownValueAccessorDirective } from '../../../directives/dropdown-value-accessor.directive';
import { InputValueAccessorDirective } from '../../../directives/input-value-accessor.directive';

export const PLAYGROUND_IMPORTS = [
  CommonModule,
  FormsModule,
  DmCheckboxValueAccessorDirective,
  DmDropdownValueAccessorDirective,
  DemoPlaygroundComponent,
  InputValueAccessorDirective,
  CheckboxValueAccessorDirective,
];
