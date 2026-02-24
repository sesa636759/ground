import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-anchor-playground',
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
          [items]="[{ id: 'config', title: 'Configuration', icon: '⚙️' }]"
          [defaultOpen]="['config']"
          [multiple]="true"
        >
          <div slot="content-config">
            <div class="control-grid">
              <div class="control-section">
                <h3>Configuration</h3>
                <div class="control-group">
                  <label>Orientation</label>
                  <ui-dropdown
                    name="orientation"
                    [(ngModel)]="pgConfig.orientation"
                    (ngModelChange)="updateConfig()"
                    [options]="orientationOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Style Type</label>
                  <ui-dropdown
                    name="type"
                    [(ngModel)]="pgConfig.type"
                    (ngModelChange)="updateConfig()"
                    [options]="typeOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Scroll Offset (px)</label>
                  <input
                    name="scrollOffset"
                    type="number"
                    [(ngModel)]="pgConfig.scrollOffset"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
              </div>

              <div class="control-section">
                <h3>Visuals</h3>
                <div class="checkbox-group">
                  <app-checkbox
                    id="indicator"
                    name="indicator"
                    [(ngModel)]="pgConfig.showIndicator"
                    (ngModelChange)="updateConfig()"
                    label="Show Indicator"
                  ></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="progress"
                    name="progress"
                    [(ngModel)]="pgConfig.showProgress"
                    (ngModelChange)="updateConfig()"
                    label="Show Progress"
                  ></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="affix"
                    name="affix"
                    [(ngModel)]="pgConfig.affix"
                    (ngModelChange)="updateConfig()"
                    label="Enable Affix (Sticky)"
                  ></app-checkbox>
                </div>
              </div>
            </div>
            <div class="action-buttons" style="margin-top: 20px;">
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

      <div class="playground-preview" style="display: flex; gap: 32px; height: 100%;">
        <div style="flex: 1; max-width: 250px;">
          <ui-anchor
            #anchor
            [attr.orientation]="pgConfig.orientation"
            [attr.type]="pgConfig.type"
            [attr.scroll-offset]="pgConfig.scrollOffset"
            [attr.show-indicator]="pgConfig.showIndicator ? '' : null"
            [attr.show-progress]="pgConfig.showProgress ? '' : null"
            [attr.affix]="pgConfig.affix ? '' : null"
            scroll-container="#pg-scroll-container"
            [links]="linksJson"
          ></ui-anchor>
        </div>

        <div
          id="pg-scroll-container"
          style="flex: 1; min-height: 400px; max-height: 500px; overflow-y: auto; padding: 20px; border: 1px solid var(--border-color); border-radius: 8px;"
        >
          <div id="basics-pg" style="height: 400px; padding: 20px 0;">
            <h2 style="margin:0 0 16px 0; color: var(--text-color);">Basics</h2>
            <p style="color: var(--text-secondary);">
              This is the first segment of the anchor content container. Scrolling down will trigger
              the anchor active state automatically.
            </p>
          </div>
          <div id="api-pg" style="height: 400px; padding: 20px 0;">
            <h2 style="margin:0 0 16px 0; color: var(--text-color);">API Reference</h2>
            <p style="color: var(--text-secondary);">
              This is the middle section. Try adjusting the scroll offset on the left to see how it
              affects the trigger points.
            </p>
          </div>
          <div id="theming-pg" style="height: 600px; padding: 20px 0;">
            <h2 style="margin:0 0 16px 0; color: var(--text-color);">Theming</h2>
            <p style="color: var(--text-secondary);">
              Last segment to allow full scrolling. The progress indicator (if enabled) will stretch
              up to this point.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top: 16px;">
      <ui-code-preview
        *ngIf="showCode"
        [htmlCode]="generatedCode"
        label="Generated Code"
        activeLang="html"
        expanded="true"
      ></ui-code-preview>
    </div>
  `,
  styleUrl: './anchor-playground.component.scss',
})
export class AnchorPlaygroundComponent implements AfterViewInit {
  @ViewChild('anchor') anchor!: ElementRef;
  pgConfig = {
    orientation: 'vertical',
    type: 'line',
    scrollOffset: 40,
    showIndicator: true,
    showProgress: true,
    affix: false,
  };

  orientationOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  typeOptions = [
    { label: 'Line', value: 'line' },
    { label: 'Dot', value: 'dot' },
  ];

  links = [
    { id: 'basics', label: 'Basics', target: 'basics-pg' },
    { id: 'api', label: 'API Reference', target: 'api-pg' },
    { id: 'theming', label: 'Theming', target: 'theming-pg' },
  ];

  linksJson = JSON.stringify(this.links);
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
    if (!this.anchor) return '';
    return generatePlaygroundCode(this.anchor.nativeElement as Element, 'ui-anchor');
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
      orientation: 'vertical',
      type: 'line',
      scrollOffset: 40,
      showIndicator: true,
      showProgress: true,
      affix: false,
    };
    this.updateConfig();
  }
}
