import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tree-list-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tree-list-playground.component.html',

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
