import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-context-menu-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective, AppPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './context-menu-playground.component.html',

  styleUrl: './context-menu-playground.component.scss',
})
export class ContextMenuPlaygroundComponent {
  pgConfig = {
    breakpoint: 960,
    autoZIndex: true,
    baseZIndex: 0,
  };

  model = [
    { label: 'View Details', icon: '👁️', command: () => this.logAction('View') },
    { label: 'Edit Entry', icon: '✏️', command: () => this.logAction('Edit') },
    { separator: true },
    { label: 'Delete', icon: '🗑️', command: () => this.logAction('Delete') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');
  lastAction = '';

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-context-menu\n';
    code += `  [model]="items"\n`;
    code += `  [target]="elementRef"\n`;
    code += '></ui-context-menu>';

    this.generatedCode.set(code);
  }

  logAction(action: string) {
    this.lastAction = action;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      breakpoint: 960,
      autoZIndex: true,
      baseZIndex: 0,
    };
    this.updateConfig();
  }
}
