import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
              <input
                type="checkbox"
                id="selectable"
                [(ngModel)]="pgConfig.selectable"
                (change)="updateConfig()"
              />
              <label for="selectable">Selectable</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showIcons"
                [(ngModel)]="pgConfig.showIcons"
                (change)="updateConfig()"
              />
              <label for="showIcons">Show Icons</label>
            </div>
          </div>

          <div class="control-section">
            <h3>Behavior</h3>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="expandAll"
                [(ngModel)]="pgConfig.expandAll"
                (change)="updateConfig()"
              />
              <label for="expandAll">Expand All</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <button (click)="copyCode()">Copy Code</button>
          <button class="btn-secondary" (click)="resetConfig()">Reset</button>
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

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-tree-list\n';
    if (this.pgConfig.selectable) code += `  selectable\n`;
    code += `  [model]="treeData"\n`;
    code += '></ui-tree-list>';

    this.generatedCode.set(code);
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
