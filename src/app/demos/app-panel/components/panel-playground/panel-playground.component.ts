import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { PlaygroundEventLogComponent } from '../../../../shared/components/playground-event-log/playground-event-log.component';
import { AppPlaygroundComponent } from 'src/app/shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-panel-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    PlaygroundEventLogComponent,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './panel-playground.component.html',

  styleUrl: './panel-playground.component.scss',
})
export class PanelPlaygroundComponent {
  pgConfig = {
    panelTitle: 'Interactive Panel',
    panelSubtitle: 'Customizable layout component',
    badge: 'New',
    variant: 'elevated',
    theme: 'default',
    showClose: true,
    showSettings: true,
    toggleable: true,
    minimizable: true,
    maximizable: true,
    isDraggable: false,
    resizable: true,
    loading: false,
    noPadding: false,
    glass: false,
  };

  variantOptions = [
    { label: 'Elevated', value: 'elevated' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Flat', value: 'flat' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
    { label: 'Info', value: 'info' },
  ];

  generatedCodeSignal = signal('');
  showCode = true;
  eventLog: { time: string; msg: string }[] = [];

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    let code = '<ui-panel\n';
    code += `  panel-title="${this.pgConfig.panelTitle}"\n`;
    code += `  panel-subtitle="${this.pgConfig.panelSubtitle}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.variant !== 'elevated') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.theme !== 'default') code += `  theme="${this.pgConfig.theme}"\n`;
    if (!this.pgConfig.showClose) code += `  [show-close]="false"\n`;
    if (!this.pgConfig.showSettings) code += `  [show-settings]="false"\n`;
    if (this.pgConfig.toggleable) code += `  toggleable\n`;
    if (this.pgConfig.minimizable) code += `  minimizable\n`;
    if (this.pgConfig.maximizable) code += `  maximizable\n`;
    if (this.pgConfig.isDraggable) code += `  is-draggable\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.noPadding) code += `  no-padding\n`;
    if (this.pgConfig.glass) code += `  glass\n`;
    code += '>\n';
    code += '  <div slot="content">Panel content here...</div>\n';
    code += '  <div slot="footer">Panel footer here...</div>\n';
    code += '</ui-panel>';

    this.generatedCodeSignal.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      panelTitle: 'Interactive Panel',
      panelSubtitle: 'Customizable layout component',
      badge: 'New',
      variant: 'elevated',
      theme: 'default',
      showClose: true,
      showSettings: true,
      toggleable: true,
      minimizable: true,
      maximizable: true,
      isDraggable: false,
      resizable: true,
      loading: false,
      noPadding: false,
      glass: false,
    };
    this.updateConfig();
    this.eventLog = [];
  }

  onEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.unshift({ time, msg: `Event: ${msg}` });
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}

