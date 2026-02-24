import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

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
                    [(ngModel)]="pgConfig.orientation"
                    (ngModelChange)="updateConfig()"
                    [options]="orientationOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Style Type</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.type"
                    (ngModelChange)="updateConfig()"
                    [options]="typeOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Scroll Offset (px)</label>
                  <input
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
                    [(ngModel)]="pgConfig.showIndicator"
                    (ngModelChange)="updateConfig()"
                    label="Show Indicator"
                  ></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="progress"
                    [(ngModel)]="pgConfig.showProgress"
                    (ngModelChange)="updateConfig()"
                    label="Show Progress"
                  ></app-checkbox>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="affix"
                    [(ngModel)]="pgConfig.affix"
                    (ngModelChange)="updateConfig()"
                    label="Enable Affix (Sticky)"
                  ></app-checkbox>
                </div>
              </div>
            </div>
          </div>
        </ui-accordion>
      </div>
    </div>
  `,
  styleUrl: './anchor-playground.component.scss',
})
export class AnchorPlaygroundComponent {
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
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-anchor\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  type="${this.pgConfig.type}"\n`;
    code += `  [scroll-offset]="${this.pgConfig.scrollOffset}"\n`;
    if (this.pgConfig.showIndicator) code += `  show-indicator\n`;
    if (this.pgConfig.showProgress) code += `  show-progress\n`;
    if (this.pgConfig.affix) code += `  affix\n`;
    code += `  scroll-container="#content-area"\n`;
    code += `  [links]="linksArray"\n`;
    code += '></ui-anchor>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
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
