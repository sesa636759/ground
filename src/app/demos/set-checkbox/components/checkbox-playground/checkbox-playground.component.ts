import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { CodeBlockComponent } from '../../../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-checkbox-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './checkbox-playground.component.html',
  styleUrl: './checkbox-playground.component.scss',
})
export class CheckboxPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    size: 'medium',
    color: 'primary',
    variant: 'default',
    labelPosition: 'right',
    label: 'Accept terms and conditions',
    helperText: 'You must agree to continue',
    checked: false,
    indeterminate: false,
    disabled: false,
    readonly: false,
    required: true,
    invalid: false,
    errorMessage: 'This field has an error',
    enableAnimation: true,
    rippleEffect: true,
    skeleton: false,
  };

  eventMessage = signal('Interact with the checkbox...');
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-checkbox\n`;
    if (this.pgConfig.label) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.color !== 'primary') code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (this.pgConfig.checked) code += `  checked\n`;
    if (this.pgConfig.indeterminate) code += `  indeterminate\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.invalid) {
      code += `  invalid\n`;
      if (this.pgConfig.errorMessage) code += `  error-message="${this.pgConfig.errorMessage}"\n`;
    }
    if (!this.pgConfig.enableAnimation) code += `  enable-animation="false"\n`;
    if (!this.pgConfig.rippleEffect) code += `  ripple-effect="false"\n`;
    if (this.pgConfig.skeleton) code += `  skeleton\n`;
    code += `></app-checkbox>`;
    this.generatedCode.set(code);
  }

  onCheckboxChange(event: any) {
    const { checked, indeterminate } = event.detail;
    this.eventMessage.set(
      `Changed: checked=${checked}, indeterminate=${indeterminate} at ${new Date().toLocaleTimeString()}`,
    );
    this.pgConfig.checked = checked;
    this.pgConfig.indeterminate = indeterminate;
    this.updateConfig();
  }

  onCheckboxFocus() {
    this.eventMessage.set(`Focused at ${new Date().toLocaleTimeString()}`);
  }

  onCheckboxBlur() {
    this.eventMessage.set(`Blurred at ${new Date().toLocaleTimeString()}`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
