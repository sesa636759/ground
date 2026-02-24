import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';

@Component({
  selector: 'app-transfer-list-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppInputValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion [items]="pgAccordionItems" [defaultOpen]="defaultOpen" multiple>
          <!-- Global Configuration -->
          <div slot="content-global" class="control-grid" style="padding: 16px;">
            <div class="control-group">
              <label>Search Placeholder</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.searchPlaceholder"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
          </div>

          <!-- Behavioral States -->
          <div slot="content-states" style="padding: 16px;">
            <div class="checkbox-grid">
              <label class="checkbox-item">
                <app-checkbox
                  [(ngModel)]="pgConfig.disabled"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Disabled State
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  [(ngModel)]="pgConfig.showSearch"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Show Search Bar
              </label>
            </div>
          </div>
        </ui-accordion>

        <div class="action-buttons">
          <ui-button
            class="btn-secondary"
            variant="secondary"
            (click)="resetConfig()"
            label="Reset"
          ></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <div class="transfer-container">
          <ui-transfer-list
            [attr.search-placeholder]="pgConfig.searchPlaceholder"
            [attr.disabled]="pgConfig.disabled ? '' : null"
            [attr.show-search]="pgConfig.showSearch ? '' : null"
            [source]="sourceJson"
            [target]="targetJson"
          >
          </ui-transfer-list>
        </div>

        <ui-code-preview
          [htmlCode]="generatedCode()"
          [label]="'Generated Code'"
          activeLang="html"
          expanded="true"
        ></ui-code-preview>
      </div>
    </div>
  `,
  styleUrl: './transfer-list-playground.component.scss',
})
export class TransferListPlaygroundComponent implements OnInit {
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
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
  generatedCode = signal('');

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

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
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
