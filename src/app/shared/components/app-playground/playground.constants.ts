import { AppCheckboxValueAccessorDirective } from '../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../directives/ui-input-value-accessor.directive';
import { AppPlaygroundComponent } from './app-playground.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const PLAYGROUND_IMPORTS = [
  CommonModule,
  FormsModule,
  AppCheckboxValueAccessorDirective,
  UiDropdownValueAccessorDirective,
  AppInputValueAccessorDirective,
  AppPlaygroundComponent,
] as const;
