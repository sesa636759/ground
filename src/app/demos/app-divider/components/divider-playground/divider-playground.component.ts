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
  selector: 'app-divider-playground',
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
        <ui-accordion [items]="pgAccordionItems" [defaultOpen]="accordionDefaultOpen" multiple>
          <div slot="content-config">
            <div class="control-grid">
              <!-- Content -->
              <div class="control-section">
                <h3>Content</h3>
                <div class="control-group">
                  <label>Text</label>
                  <input
                    name="text"
                    type="text"
                    [(ngModel)]="pgConfig.text"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Icon</label>
                  <input
                    name="icon"
                    type="text"
                    [(ngModel)]="pgConfig.icon"
                    (ngModelChange)="updateConfig()"
                    placeholder="e.g. ⭐"
                  />
                </div>
                <div class="control-group">
                  <label>Badge</label>
                  <input
                    name="badge"
                    type="text"
                    [(ngModel)]="pgConfig.badge"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
              </div>

              <!-- Line Style -->
              <div class="control-section">
                <h3>Line Style</h3>
                <div class="control-group">
                  <label>Variant</label>
                  <ui-dropdown
                    name="variant"
                    [(ngModel)]="pgConfig.variant"
                    (ngModelChange)="updateConfig()"
                    [options]="variantOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Size</label>
                  <ui-dropdown
                    name="size"
                    [(ngModel)]="pgConfig.size"
                    (ngModelChange)="updateConfig()"
                    [options]="sizeOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Orientation</label>
                  <ui-dropdown
                    name="orientation"
                    [(ngModel)]="pgConfig.orientation"
                    (ngModelChange)="updateConfig()"
                    [options]="orientationOptions"
                  ></ui-dropdown>
                </div>
              </div>

              <!-- Special -->
              <div class="control-section">
                <h3>Special</h3>
                <div class="control-group">
                  <label>Pattern</label>
                  <ui-dropdown
                    name="pattern"
                    [(ngModel)]="pgConfig.pattern"
                    (ngModelChange)="updateConfig()"
                    [options]="patternOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Shape</label>
                  <ui-dropdown
                    name="shape"
                    [(ngModel)]="pgConfig.shape"
                    (ngModelChange)="updateConfig()"
                    [options]="shapeOptions"
                  ></ui-dropdown>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="loading"
                    name="loading"
                    [(ngModel)]="pgConfig.loading"
                    (ngModelChange)="updateConfig()"
                    label="Loading"
                  ></app-checkbox>
                </div>
              </div>
            </div>

            <div class="action-buttons">
              <ui-button variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
            </div>
          </div>
        </ui-accordion>
      </div>

      <div
        class="playground-preview"
        [class.vertical-container]="pgConfig.orientation === 'vertical'"
      >
        <div *ngIf="pgConfig.orientation === 'vertical'">Panel Start</div>
        <ui-divider
          #divider
          [attr.text]="pgConfig.text"
          [attr.icon]="pgConfig.icon"
          [attr.badge]="pgConfig.badge"
          [attr.variant]="pgConfig.variant"
          [attr.size]="pgConfig.size"
          [attr.orientation]="pgConfig.orientation"
          [attr.pattern]="pgConfig.pattern"
          [attr.shape]="pgConfig.shape"
          [attr.loading]="pgConfig.loading ? '' : null"
        ></ui-divider>
        <div *ngIf="pgConfig.orientation === 'vertical'">Panel End</div>

        <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './divider-playground.component.scss',
})
export class DividerPlaygroundComponent implements AfterViewInit {
  @ViewChild('divider') divider!: ElementRef;
  pgConfig = {
    text: 'OR',
    icon: '',
    badge: '',
    variant: 'solid',
    size: 'md',
    orientation: 'horizontal',
    pattern: 'none',
    shape: 'none',
    loading: false,
  };

  pgAccordionItems = JSON.stringify([{ id: 'config', title: 'Configuration', icon: '⚙️' }]);
  accordionDefaultOpen = JSON.stringify(['config']);

  variantOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Dashed', value: 'dashed' },
    { label: 'Dotted', value: 'dotted' },
    { label: 'Double Solid', value: 'double-solid' },
    { label: 'Gradient', value: 'gradient' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  patternOptions = [
    { label: 'None', value: 'none' },
    { label: 'Dots', value: 'dots' },
    { label: 'Stripes', value: 'stripes' },
    { label: 'Zigzag', value: 'zigzag' },
  ];

  shapeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Curve', value: 'curve' },
    { label: 'Wave', value: 'wave' },
    { label: 'Triangle', value: 'triangle' },
    { label: 'Zigzag', value: 'zigzag' },
    { label: 'Arrow', value: 'arrow' },
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
    if (!this.divider) return '';

    return generatePlaygroundCode(this.divider.nativeElement as Element, 'ui-divider');
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
      text: 'OR',
      icon: '',
      badge: '',
      variant: 'solid',
      size: 'md',
      orientation: 'horizontal',
      pattern: 'none',
      shape: 'none',
      loading: false,
    };
    this.updateConfig();
  }
}
