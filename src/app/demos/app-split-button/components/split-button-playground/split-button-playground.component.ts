import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-split-button-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './split-button-playground.component.html',

  styleUrl: './split-button-playground.component.scss',
})
export class SplitButtonPlaygroundComponent {
  pgConfig = {
    label: 'Save Changes',
    icon: '💾',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  };

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Outline', value: 'outline' },
    { label: 'Ghost', value: 'ghost' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  model = [
    { label: 'Save and Exit', icon: '🚪', command: () => this.logAction('Save and Exit') },
    { label: 'Save as Draft', icon: '📝', command: () => this.logAction('Save as Draft') },
    { separator: true },
    { label: 'Discard', icon: '🗑️', command: () => this.logAction('Discard') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');
  lastAction = '';

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-split-button\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  [model]="menuItems"\n`;
    code += '></ui-split-button>';

    this.generatedCode.set(code);
  }

  onPrimaryClick() {
    this.logAction('Primary: ' + this.pgConfig.label);
  }

  logAction(action: string) {
    this.lastAction = action;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Save Changes',
      icon: '💾',
      variant: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
    };
    this.updateConfig();
  }
}
