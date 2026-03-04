import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from 'src/app/directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from 'src/app/directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { AppPlaygroundComponent } from './app-playground.component';

export const PLAYGROUND_IMPORTS = [
  CommonModule,
  FormsModule,
  AppCheckboxValueAccessorDirective,
  UiDropdownValueAccessorDirective,
  AppInputValueAccessorDirective,
  AppPlaygroundComponent,
] as const;
