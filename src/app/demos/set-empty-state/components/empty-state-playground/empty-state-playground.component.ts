import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-empty-state-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './empty-state-playground.component.html',
  styleUrl: './empty-state-playground.component.scss',
})
export class EmptyStatePlaygroundComponent implements OnInit {
  pgConfig = {
    type: 'no-data',
    variant: 'default',
    size: 'medium',
    align: 'center',
    heading: '',
    message: '',
    illustration: '',
    rounded: false,
    elevated: false,
    compact: false,
    animated: true,
    showBackButton: false,
    primaryAction: 'Get Started',
    primaryActionIcon: 'fas fa-plus',
    secondaryAction: 'Learn More',
    secondaryActionIcon: 'fas fa-book',
    loadingAction: false,
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-empty-state\n`;
    if (this.pgConfig.type !== 'no-data') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.align !== 'center') code += `  align="${this.pgConfig.align}"\n`;

    if (this.pgConfig.heading) code += `  heading="${this.pgConfig.heading}"\n`;
    if (this.pgConfig.message) code += `  message="${this.pgConfig.message}"\n`;
    if (this.pgConfig.illustration) code += `  illustration="${this.pgConfig.illustration}"\n`;

    if (this.pgConfig.rounded) code += `  rounded\n`;
    if (this.pgConfig.elevated) code += `  elevated\n`;
    if (this.pgConfig.compact) code += `  compact\n`;
    if (this.pgConfig.animated) code += `  animated\n`;
    if (this.pgConfig.showBackButton) code += `  show-back-button\n`;

    if (this.pgConfig.primaryAction) {
      code += `  primary-action="${this.pgConfig.primaryAction}"\n`;
      if (this.pgConfig.primaryActionIcon)
        code += `  primary-action-icon="${this.pgConfig.primaryActionIcon}"\n`;
    }

    if (this.pgConfig.secondaryAction) {
      code += `  secondary-action="${this.pgConfig.secondaryAction}"\n`;
      if (this.pgConfig.secondaryActionIcon)
        code += `  secondary-action-icon="${this.pgConfig.secondaryActionIcon}"\n`;
    }

    if (this.pgConfig.loadingAction) code += `  loading-action="primary"\n`;

    code += `></app-empty-state>`;

    this.generatedCode.set(code);
  }

  onActionClick(event: any) {
    this.logEvent(`Action clicked: ${event.detail.action}`);
  }

  onBackClick(event: any) {
    this.logEvent('Back button clicked');
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
