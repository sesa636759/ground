import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-tree-list-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Features</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="selectable"
                [(ngModel)]="pgConfig.selectable"
                (change)="updateConfig()"
                label="Selectable"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showIcons"
                [(ngModel)]="pgConfig.showIcons"
                (change)="updateConfig()"
                label="Show Icons"
              ></app-checkbox>
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="expandAll"
                [(ngModel)]="pgConfig.expandAll"
                (change)="updateConfig()"
                label="Expand All"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
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
        <ui-tree-list [attr.selectable]="pgConfig.selectable ? '' : null" [model]="modelJson">
        </ui-tree-list>
      </div>
    </div>
  `,
  styleUrl: './tree-list-playground.component.scss',
})
export class TreeListPlaygroundComponent {
  pgConfig = {
    selectable: true,
    showIcons: true,
    expandAll: false,
  };

  model = [
    {
      label: 'Documents',
      icon: '📁',
      expanded: true,
      children: [
        {
          label: 'Work',
          icon: '💼',
          children: [
            { label: 'Project A.docx', icon: '📄' },
            { label: 'Project B.xlsx', icon: '📊' },
          ],
        },
        { label: 'Personal', icon: '🏠', children: [{ label: 'Resume.pdf', icon: '📄' }] },
      ],
    },
    {
      label: 'Pictures',
      icon: '🖼️',
      children: [
        { label: 'Vacation.jpg', icon: '🏖️' },
        { label: 'Family.png', icon: '👨‍👩‍👧‍👦' },
      ],
    },
    {
      label: 'Downloads',
      icon: '⬇️',
      children: [],
    },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode = signal('');
  showCode = true;

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
    let code = '<ui-tree-list\n';
    if (this.pgConfig.selectable) code += `  selectable\n`;
    code += `  [model]="treeData"\n`;
    code += '></ui-tree-list>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      selectable: true,
      showIcons: true,
      expandAll: false,
    };
    this.updateConfig();
  }
}
