import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-stack-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Layout -->
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Direction</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.direction"
                (change)="updateConfig()"
                [options]="directionOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Spacing</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.spacing"
                (ngModelChange)="updateConfig()"
                placeholder="e.g. 16px, -10px"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Align</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.align"
                (change)="updateConfig()"
                [options]="alignOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Justify</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.justify"
                (change)="updateConfig()"
                [options]="justifyOptions"
              ></ui-dropdown>
            </div>
          </div>

          <!-- Behavior -->
          <div class="control-section">
            <h3>Behavior</h3>
            <div class="control-group">
              <label>Max Items (0 = all)</label>
              <app-input
                type="number"
                [(ngModel)]="pgConfig.max"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="overlap"
                [(ngModel)]="pgConfig.overlap"
                (change)="updateConfig()"
                label="Overlap"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showDividers"
                [(ngModel)]="pgConfig.showDividers"
                (change)="updateConfig()"
                label="Show Dividers"
              ></app-checkbox>
            </div>
          </div>

          <div class="control-section">
            <h3>Content</h3>
            <div class="control-group">
              <label>Num Boxes</label>
              <app-input type="number" [min]="1" [max]="10" [(ngModel)]="numBoxes"></app-input>
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
        <ui-stack
          [attr.direction]="pgConfig.direction"
          [attr.spacing]="pgConfig.spacing"
          [attr.align]="pgConfig.align"
          [attr.justify]="pgConfig.justify"
          [attr.max]="pgConfig.max"
          [attr.overlap]="pgConfig.overlap ? '' : null"
          [attr.show-dividers]="pgConfig.showDividers ? '' : null"
          style="width: 100%; height: 100%;"
        >
          <div *ngFor="let i of boxes" class="box box-{{ i }}">{{ i }}</div>
        </ui-stack>
      </div>
    </div>
  `,
  styleUrl: './stack-playground.component.scss',
})
export class StackPlaygroundComponent {
  numBoxes = 5;
  get boxes() {
    return Array.from({ length: this.numBoxes }, (_, i) => i + 1);
  }

  pgConfig = {
    direction: 'horizontal',
    spacing: '16px',
    align: 'center',
    justify: 'center',
    max: 0,
    overlap: false,
    showDividers: false,
  };

  directionOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  alignOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Stretch', value: 'stretch' },
  ];

  justifyOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Space Between', value: 'space-between' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-stack\n';
    if (this.pgConfig.direction !== 'horizontal')
      code += `  direction="${this.pgConfig.direction}"\n`;
    if (this.pgConfig.spacing !== '8px') code += `  spacing="${this.pgConfig.spacing}"\n`;
    if (this.pgConfig.align !== 'center') code += `  align="${this.pgConfig.align}"\n`;
    if (this.pgConfig.justify !== 'start') code += `  justify="${this.pgConfig.justify}"\n`;
    if (this.pgConfig.max > 0) code += `  [max]="${this.pgConfig.max}"\n`;
    if (this.pgConfig.overlap) code += `  overlap\n`;
    if (this.pgConfig.showDividers) code += `  show-dividers\n`;
    code += '>\n';
    code += '  <div>Item 1</div>\n';
    code += '  <div>Item 2</div>\n';
    code += '  <div>Item 3</div>\n';
    code += '</ui-stack>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      direction: 'horizontal',
      spacing: '16px',
      align: 'center',
      justify: 'center',
      max: 0,
      overlap: false,
      showDividers: false,
    };
    this.numBoxes = 5;
    this.updateConfig();
  }
}
