import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-stack-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <ui-accordion
          items='[{"id":"config","title":"Configuration","icon":"⚙️"}]'
          defaultOpen='["config"]'
          multiple
        >
          <div slot="content-config">
            <div class="control-grid">
              <!-- Layout -->
              <div class="control-section">
                <h3>Layout</h3>
                <div class="control-group">
                  <label>Direction</label>
                  <ui-dropdown
                    name="direction"
                    [(ngModel)]="pgConfig.direction"
                    (ngModelChange)="updateConfig()"
                    [options]="directionOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Spacing</label>
                  <input
                    name="spacing"
                    type="text"
                    [(ngModel)]="pgConfig.spacing"
                    (ngModelChange)="updateConfig()"
                    placeholder="e.g. 16px, -10px"
                  />
                </div>
                <div class="control-group">
                  <label>Align</label>
                  <ui-dropdown
                    name="align"
                    [(ngModel)]="pgConfig.align"
                    (ngModelChange)="updateConfig()"
                    [options]="alignOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Justify</label>
                  <ui-dropdown
                    name="justify"
                    [(ngModel)]="pgConfig.justify"
                    (ngModelChange)="updateConfig()"
                    [options]="justifyOptions"
                  ></ui-dropdown>
                </div>
              </div>

              <!-- Behavior -->
              <div class="control-section">
                <h3>Behavior</h3>
                <div class="control-group">
                  <label>Max Items (0 = all)</label>
                  <input
                    name="max"
                    type="number"
                    [(ngModel)]="pgConfig.max"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="overlap"
                    name="overlap"
                    [(ngModel)]="pgConfig.overlap"
                    (ngModelChange)="updateConfig()"
                    label="Overlap"
                  ></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="showDividers"
                    name="showDividers"
                    [(ngModel)]="pgConfig.showDividers"
                    (ngModelChange)="updateConfig()"
                    label="Show Dividers"
                  ></app-checkbox>
                </div>
              </div>

              <div class="control-section">
                <h3>Content</h3>
                <div class="control-group">
                  <label>Num Boxes</label>
                  <input
                    name="numBoxes"
                    type="number"
                    min="1"
                    max="10"
                    [(ngModel)]="numBoxes"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
              </div>
            </div>

            <div class="action-buttons">
              <ui-button
                class="btn-secondary"
                variant="secondary"
                (click)="resetConfig()"
                label="Reset"
              ></ui-button>
            </div>
          </div>
        </ui-accordion>
      </div>

      <div class="playground-preview">
        <ui-stack
          #stack
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

        <ui-code-preview
          *ngIf="showCode"
          [htmlCode]="generatedCode"
          label="Generated Code"
          activeLang="html"
          expanded="true"
        ></ui-code-preview>
      </div>
    </div>
  `,
  styleUrl: './stack-playground.component.scss',
})
export class StackPlaygroundComponent implements AfterViewInit {
  @ViewChild('stack') stack!: ElementRef;
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

  generatedCode: string = '';
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  getCleanFormatedDom(): string {
    if (!this.stack) return '';
    const items = Array.from(
      { length: Math.min(this.numBoxes, 3) },
      (_, i) => `  <div>Item ${i + 1}</div>`,
    ).join('\n');
    return generatePlaygroundCode(this.stack.nativeElement as Element, 'ui-stack', `${items}\n`);
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode);
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
