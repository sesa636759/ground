import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-theme-switcher-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './theme-switcher-playground.component.html',
  styleUrl: './theme-switcher-playground.component.scss',
})
export class ThemeSwitcherPlaygroundComponent implements OnInit {
  pgConfig = {
    variant: 'default',
    size: 'medium',
    showIcons: true,
    showLabels: true,
    enableAnimation: true,
    animationDuration: 200,
    position: 'inline',
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-theme-switcher\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  position="${this.pgConfig.position}"\n`;

    if (this.pgConfig.showIcons) code += `  show-icons="true"\n`;
    if (this.pgConfig.showLabels) code += `  show-labels="true"\n`;
    if (this.pgConfig.enableAnimation) code += `  enable-animation="true"\n`;
    if (this.pgConfig.animationDuration !== 200)
      code += `  animation-duration="${this.pgConfig.animationDuration}"\n`;

    code += `></app-theme-switcher>`;

    this.generatedCode.set(code);
  }

  onThemeChange(event: any) {
    const theme = event.detail.value;
    this.logEvent(`Theme changed to: ${theme}`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
