import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-button-toggle-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-toggle-playground.component.html',
  styleUrl: './button-toggle-playground.component.scss',
})
export class ButtonTogglePlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    mode: 'segmented',
    orientation: 'horizontal',
    size: 'medium',
    color: 'primary',
    variant: 'filled',
    iconPosition: 'left',
    displayMode: 'icon-label',
    label: 'Select View Mode',
    helperText: 'Choose how you want to view content',
    fullWidth: false,
    keepButtonLabel: false,
    customContent: false,
    disabled: false,
    readonly: false,
    loading: false,
    required: true,
    invalid: false,
  };

  eventMessage = signal('Select a button...');
  eventColor = signal('inherit');
  generatedCode = signal('');

  // Options Data (Core sets)
  playgroundOptions = [
    { value: 'list', label: 'List View', icon: 'fas fa-list' },
    { value: 'grid', label: 'Grid View', icon: 'fas fa-th' },
    { value: 'compact', label: 'Compact', icon: 'fas fa-compress' },
    {
      value: 'user',
      label: 'Profile',
      avatarSrc: 'https://i.pravatar.cc/150?u=playground',
      status: 'online',
    },
    { value: 'cards', label: 'Cards', icon: 'fas fa-id-card' },
  ];

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-button-toggle-group\n`;
    if (this.pgConfig.mode !== 'segmented') code += `  mode="${this.pgConfig.mode}"\n`;
    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.color !== 'primary') code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.variant !== 'filled') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.label) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.iconPosition !== 'left')
      code += `  icon-position="${this.pgConfig.iconPosition}"\n`;
    if (this.pgConfig.displayMode !== 'icon-label')
      code += `  display-mode="${this.pgConfig.displayMode}"\n`;
    if (this.pgConfig.fullWidth) code += `  full-width\n`;
    if (this.pgConfig.keepButtonLabel) code += `  keep-button-label\n`;
    if (this.pgConfig.customContent) code += `  custom-content\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.invalid) {
      code += `  invalid\n`;
      code += `  error-message="Please select a view mode"\n`;
    }
    code += `  value="list"\n`;
    code += `>\n`;
    if (this.pgConfig.customContent) {
      code += `  <div slot="dropdown-content">\n`;
      code += `    <p>Custom Playground Content</p>\n`;
      code += `  </div>\n`;
    }
    code += `</app-button-toggle-group>`;
    this.generatedCode.set(code);
  }

  onPlaygroundChange(event: any) {
    this.eventMessage.set(
      `Selection changed to: "${event.detail.value}" at ${new Date().toLocaleTimeString()}`,
    );
    this.updateConfig();
  }

  onPlaygroundAction(event: any) {
    this.eventMessage.set(
      `Button action clicked! Current value: "${event.detail.value}" at ${new Date().toLocaleTimeString()}`,
    );
    this.eventColor.set('#059669');
    setTimeout(() => this.eventColor.set('inherit'), 2000);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  // Helper for JSON strings
  jsonOptions = (opts: any) => JSON.stringify(opts);
}
