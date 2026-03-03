import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';

import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-transfer-list-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,CommonModule, FormsModule, AppCheckboxValueAccessorDirective, AppPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './transfer-list-playground.component.html',
  styleUrl: './transfer-list-playground.component.scss',
})
export class TransferListPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '??' },
    { id: 'states', title: 'Behavioral States', icon: '?' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;
  pgConfig = {
    searchPlaceholder: 'Search items...',
    disabled: false,
    showSearch: true,
  };

  source = [
    { label: 'Role: Admin', value: 'admin' },
    { label: 'Role: Editor', value: 'editor' },
    { label: 'Role: Viewer', value: 'viewer' },
    { label: 'Role: Manager', value: 'manager' },
  ];

  target = [{ label: 'Role: Contributor', value: 'contributor' }];

  sourceJson = JSON.stringify(this.source);
  targetJson = JSON.stringify(this.target);
  generatedCodeSignal = signal('');

  constructor() {}

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-transfer-list\n';
    code += `  [source]="availableRoles"\n`;
    code += `  [target]="assignedRoles"\n`;
    if (this.pgConfig.showSearch) code += `  show-search\n`;
    code += '></ui-transfer-list>';

    this.generatedCodeSignal.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      searchPlaceholder: 'Search items...',
      disabled: false,
      showSearch: true,
    };
    this.updateConfig();
  }
}

