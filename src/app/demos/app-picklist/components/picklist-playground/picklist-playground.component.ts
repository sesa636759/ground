import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-picklist-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Visuals</h3>
            <div class="control-group">
              <label>Source Header</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.sourceHeader"
                (change)="updateConfig()"
              />
            </div>
            <div class="control-group">
              <label>Target Header</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.targetHeader"
                (change)="updateConfig()"
              />
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="showSourceControls"
                [(ngModel)]="pgConfig.showSourceControls"
                (change)="updateConfig()"
                label="Source Controls"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showTargetControls"
                [(ngModel)]="pgConfig.showTargetControls"
                (change)="updateConfig()"
                label="Target Controls"
              ></app-checkbox>
            </div>
            <div class="control-group">
              <label>Filter Placeholder</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.filterPlaceholder"
                (change)="updateConfig()"
              />
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
          <ui-button
            class="btn-secondary"
            variant="secondary"
            (click)="resetConfig()"
            label="Reset"
          ></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <div class="picklist-container">
          <ui-picklist
            [attr.source-header]="pgConfig.sourceHeader"
            [attr.target-header]="pgConfig.targetHeader"
            [attr.show-source-controls]="pgConfig.showSourceControls ? '' : null"
            [attr.show-target-controls]="pgConfig.showTargetControls ? '' : null"
            [attr.filter-placeholder]="pgConfig.filterPlaceholder"
            [source]="sourceJson"
            [target]="targetJson"
          >
            <ng-template let-item>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span>{{ item.icon }}</span>
                <span>{{ item.name }}</span>
              </div>
            </ng-template>
          </ui-picklist>
        </div>
      </div>
    </div>
  `,
  styleUrl: './picklist-playground.component.scss',
})
export class PicklistPlaygroundComponent {
  pgConfig = {
    sourceHeader: 'Available Products',
    targetHeader: 'Selected Products',
    showSourceControls: true,
    showTargetControls: true,
    filterPlaceholder: 'Search...',
  };

  source = [
    { name: 'Laptop', icon: '💻' },
    { name: 'Mouse', icon: '🖱️' },
    { name: 'Keyboard', icon: '⌨️' },
    { name: 'Monitor', icon: '🖥️' },
  ];

  target = [{ name: 'Headphones', icon: '🎧' }];

  sourceJson = JSON.stringify(this.source);
  targetJson = JSON.stringify(this.target);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-picklist\n';
    code += `  source-header="${this.pgConfig.sourceHeader}"\n`;
    code += `  target-header="${this.pgConfig.targetHeader}"\n`;
    code += `  [source]="availableItems"\n`;
    code += `  [target]="selectedItems"\n`;
    code += '>\n';
    code += '  <ng-template let-item>\n';
    code += '     {{ item.name }}\n';
    code += '  </ng-template>\n';
    code += '</ui-picklist>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      sourceHeader: 'Available Products',
      targetHeader: 'Selected Products',
      showSourceControls: true,
      showTargetControls: true,
      filterPlaceholder: 'Search...',
    };
    this.updateConfig();
  }
}
