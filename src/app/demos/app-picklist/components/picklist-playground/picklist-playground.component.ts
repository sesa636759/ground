import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-picklist-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppInputValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './picklist-playground.component.html',

  styleUrl: './picklist-playground.component.scss',
})
export class PicklistPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

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

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  getCleanFormatedDom(): string {
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
    return code;
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
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
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
