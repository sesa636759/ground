import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { AppToggleGroupValueAccessorDirective } from '../../../../directives/app-toggle-group-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-toggle-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppToggleGroupValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './toggle-playground.component.html',
  styleUrl: './toggle-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TogglePlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    layout: 'horizontal',
    selectionMode: 'multiple',
    size: 'medium',
    color: 'primary',
    variant: 'default',
    elevation: 0,
    thumbShape: 'circle',
    skeleton: false,
    labelPosition: 'right',
    label: 'Feature Settings',
    helperText: 'Select your preferences',
    orientation: 'horizontal',
    showIcons: false,
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    animation: true,
    columns: 3,
  };

  playgroundOptions = [
    { value: 'notifications', label: 'Notifications', icon: 'fas fa-bell' },
    { value: 'dark-mode', label: 'Dark Mode', icon: 'fas fa-moon' },
    { value: 'auto-save', label: 'Auto Save', icon: 'fas fa-save' },
    { value: 'sync', label: 'Sync', icon: 'fas fa-sync' },
    { value: 'offline-mode', label: 'Offline Mode', icon: 'fas fa-wifi' },
  ];

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-toggle-group\n`;
    code += `  layout="${this.pgConfig.layout}"\n`;
    if (this.pgConfig.layout === 'grid') code += `  columns="${this.pgConfig.columns}"\n`;
    code += `  selection-mode="${this.pgConfig.selectionMode}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;

    if (this.pgConfig.elevation > 0) code += `  elevation="${this.pgConfig.elevation}"\n`;
    if (this.pgConfig.thumbShape !== 'circle')
      code += `  thumb-shape="${this.pgConfig.thumbShape}"\n`;

    code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;

    if (this.pgConfig.showIcons) code += `  show-icons="true"\n`;
    if (this.pgConfig.disabled) code += `  disabled="true"\n`;
    if (this.pgConfig.readonly) code += `  readonly="true"\n`;
    if (this.pgConfig.required) code += `  required="true"\n`;
    if (this.pgConfig.invalid) code += `  invalid="true"\n`;
    if (!this.pgConfig.animation) code += `  enable-animation="false"\n`;
    if (this.pgConfig.skeleton) code += `  show-skeleton="true"\n`;
    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;

    code += `  [options]="options"\n`;
    code += `></app-toggle-group>`;

    this.generatedCode.set(code);
  }

  onToggleChange(event: any) {
    const value = event.detail.value;
    const displayValue = Array.isArray(value) ? value.join(', ') : value;
    this.logEvent(`Selection changed: ${displayValue}`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  jsonOptions = JSON.stringify(this.playgroundOptions);
}
