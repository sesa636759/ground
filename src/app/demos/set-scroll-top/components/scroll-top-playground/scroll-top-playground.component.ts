import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-scroll-top-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scroll-top-playground.component.html',
  styleUrl: './scroll-top-playground.component.scss',
})
export class ScrollTopPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    variant: 'filled',
    size: 'medium',
    position: 'bottom-right',
    theme: 'light',
    color: '#3DCD58',
    offset: 300,
    duration: 500,
    icon: 'fa-solid fa-arrow-up',
    tooltip: 'Scroll to top',
    tooltipPosition: 'top',
    showProgress: true,
    showText: false,
    text: 'Top',
    pulse: false,
    alwaysVisible: false,
    smooth: true,
    hideOnTop: true,
    disabled: false,
    zIndex: 999,
    targetType: 'window',
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-scroll-top\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  position="${this.pgConfig.position}"\n`;
    code += `  theme="${this.pgConfig.theme}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.offset !== 300) code += `  [offset]="${this.pgConfig.offset}"\n`;
    if (this.pgConfig.duration !== 500) code += `  [duration]="${this.pgConfig.duration}"\n`;
    code += `  icon="${this.pgConfig.icon}"\n`;
    if (this.pgConfig.tooltip) code += `  tooltip="${this.pgConfig.tooltip}"\n`;
    code += `  tooltip-position="${this.pgConfig.tooltipPosition}"\n`;

    if (this.pgConfig.showProgress) code += `  show-progress="true"\n`;
    if (this.pgConfig.showText) {
      code += `  show-text="true"\n`;
      code += `  text="${this.pgConfig.text}"\n`;
    }
    if (this.pgConfig.pulse) code += `  pulse="true"\n`;
    if (this.pgConfig.alwaysVisible) code += `  always-visible="true"\n`;
    if (!this.pgConfig.smooth) code += `  [smooth]="false"\n`;
    if (!this.pgConfig.hideOnTop) code += `  [hideOnTop]="false"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.zIndex !== 999) code += `  [zIndex]="${this.pgConfig.zIndex}"\n`;
    if (this.pgConfig.targetType === 'container') code += `  target="#my-container"\n`;

    code += `></app-scroll-top>`;

    this.generatedCode.set(code);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  onScroll(event: any) {
    // Component events if any
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
