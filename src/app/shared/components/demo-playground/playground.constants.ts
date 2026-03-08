import { DemoPlaygroundComponent } from './demo-playground.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxValueAccessorDirective } from '../../../directives/checkbox-value-accessor.directive';
import { DropdownValueAccessorDirective } from '../../../directives/dropdown-value-accessor.directive';
import { InputValueAccessorDirective } from '../../../directives/input-value-accessor.directive';
import { RadioGroupValueAccessorDirective } from '../../../directives/radio-group-value-accessor.directive';
import { SwitchValueAccessorDirective } from '../../../directives/switch-value-accessor.directive';
import { ToggleGroupValueAccessorDirective } from '../../../directives/toggle-group-value-accessor.directive';
import { TagsInputValueAccessorDirective } from '../../../directives/tags-input-value-accessor.directive';

export const PLAYGROUND_IMPORTS = [
  CommonModule,
  FormsModule,
  CheckboxValueAccessorDirective,
  DropdownValueAccessorDirective,
  InputValueAccessorDirective,
  RadioGroupValueAccessorDirective,
  SwitchValueAccessorDirective,
  ToggleGroupValueAccessorDirective,
  TagsInputValueAccessorDirective,
  DemoPlaygroundComponent,
];
