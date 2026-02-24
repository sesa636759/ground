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
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion [items]="pgAccordionItems" [defaultOpen]="defaultOpen" multiple>
          <div slot="content-global" class="control-grid" style="padding: 16px;">
            <div class="control-group">
              <label>Source Header</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.sourceHeader"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Target Header</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.targetHeader"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
            <div class="control-group">
              <label>Filter Placeholder</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.filterPlaceholder"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
          </div>

          <div slot="content-states" style="padding: 16px;">
            <div class="checkbox-grid">
              <label class="checkbox-item">
                <app-checkbox
                  id="showSourceControls"
                  [(ngModel)]="pgConfig.showSourceControls"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Source Controls
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  id="showTargetControls"
                  [(ngModel)]="pgConfig.showTargetControls"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Target Controls
              </label>
            </div>
          </div>
        </ui-accordion>

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
        <div class="preview-stage">
          <ui-picklist
            #demoElement
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

        <ui-code-preview
          *ngIf="showCode"
          [htmlCode]="generatedCode()"
          [label]="'Generated Code'"
          activeLang="html"
          expanded="true"
        ></ui-code-preview>
      </div>
    </div>
  `,
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
