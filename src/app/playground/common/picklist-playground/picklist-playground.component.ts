import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-picklist-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './picklist-playground.component.html',
  styleUrl: './picklist-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmPicklistPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  source = [
    { name: 'Laptop', icon: '💻' },
    { name: 'Mouse', icon: '🖱️' },
    { name: 'Keyboard', icon: '⌨️' },
    { name: 'Monitor', icon: '🖥️' },
  ];

  target = [{ name: 'Headphones', icon: '🎧' }];

  sourceJson = JSON.stringify(this.source);
  targetJson = JSON.stringify(this.target);

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      sourceHeader: 'Available Products',
      targetHeader: 'Selected Products',
      showSourceControls: true,
      showTargetControls: true,
      filterPlaceholder: 'Search...',
    };
  }

  updateConfig() {
    let code = '<ui-picklist\n';
    code += `  source-header="${this.pgConfig.sourceHeader}"\n`;
    code += `  target-header="${this.pgConfig.targetHeader}"\n`;
    if (this.pgConfig.showSourceControls) code += `  show-source-controls\n`;
    if (this.pgConfig.showTargetControls) code += `  show-target-controls\n`;
    code += `  filter-placeholder="${this.pgConfig.filterPlaceholder}"\n`;
    code += `  [source]="availableItems"\n`;
    code += `  [target]="selectedItems"\n`;
    code += '>\n';
    code += '  <ng-template let-item>\n';
    code += '     {{ item.name }}\n';
    code += '  </ng-template>\n';
    code += '</ui-picklist>';
    this.generatedCode.set(code);
    this.refreshCode();
  }
}



