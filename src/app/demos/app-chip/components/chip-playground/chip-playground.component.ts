import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { PlaygroundEventLogComponent } from '../../../../shared/components/playground-event-log/playground-event-log.component';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-chip-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    PlaygroundEventLogComponent,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chip-playground.component.html',

  styleUrl: './chip-playground.component.scss',
})
export class ChipPlaygroundComponent {
  pgConfig = {
    label: 'Angular Developer',
    icon: '🔥',
    userAvatar: '',
    counter: '',
    badge: '',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    shape: 'pill',
    removable: true,
    clickable: true,
    selected: false,
    loading: false,
  };

  variantOptions = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Soft', value: 'soft' },
    { label: 'Text', value: 'text' },
    { label: 'Gradient', value: 'gradient' },
  ];

  colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  shapeOptions = [
    { label: 'Pill', value: 'pill' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Square', value: 'square' },
    { label: 'Circle', value: 'circle' },
  ];

  generatedCode = signal('');
  eventLog: { time: string; msg: string }[] = [];

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-chip\n';
    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    if (this.pgConfig.userAvatar) code += `  user-avatar="${this.pgConfig.userAvatar}"\n`;
    if (this.pgConfig.variant !== 'filled') code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.shape !== 'pill') code += `  shape="${this.pgConfig.shape}"\n`;
    if (this.pgConfig.removable) code += `  removable\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.selected) code += `  selected\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    code += '></ui-chip>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Angular Developer',
      icon: '🔥',
      userAvatar: '',
      counter: '',
      badge: '',
      variant: 'filled',
      color: 'primary',
      size: 'md',
      shape: 'pill',
      removable: true,
      clickable: true,
      selected: false,
      loading: false,
    };
    this.updateConfig();
    this.eventLog = [];
  }

  onEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.unshift({ time, msg });
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}
