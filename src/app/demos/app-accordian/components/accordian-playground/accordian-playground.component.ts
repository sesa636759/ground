import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-accordion-playground',
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
          items='[{"id": "config", "title": "Configuration", "icon": "⚙️"}]'
          default-open='["config"]'
          multiple="true"
        >
          <div slot="content-config">
            <div class="control-grid">
              <!-- Visual Settings -->
              <div class="control-section">
                <h3>Visual</h3>
                <div class="control-group">
                  <label>Variant</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.variant"
                    (ngModelChange)="updateConfig()"
                    [options]="variantOptions"
                  ></ui-dropdown>
                </div>

                <div class="control-group">
                  <label>Size</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.size"
                    (ngModelChange)="updateConfig()"
                    [options]="sizeOptions"
                  ></ui-dropdown>
                </div>

                <div class="control-group">
                  <label>Icon Position</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.iconPosition"
                    (ngModelChange)="updateConfig()"
                    [options]="iconPositionOptions"
                  ></ui-dropdown>
                </div>

                <div class="control-group">
                  <label>Selected Header Color</label>
                  <input
                    type="color"
                    [(ngModel)]="pgConfig.selectedHeaderColor"
                    (ngModelChange)="updateConfig()"
                  />
                </div>

                <div class="control-group">
                  <label>Header Level (1-6)</label>
                  <input
                    type="number"
                    min="1"
                    max="6"
                    [(ngModel)]="pgConfig.headerLevel"
                    (ngModelChange)="updateConfig()"
                  />
                </div>

                <div class="checkbox-row">
                  <div class="checkbox-group">
                    <app-checkbox
                      id="hideArrow"
                      [(ngModel)]="pgConfig.hideArrow"
                      (ngModelChange)="updateConfig()"
                      label="Hide Arrow"
                    ></app-checkbox>
                  </div>

                  <div class="checkbox-group">
                    <app-checkbox
                      id="showNumbers"
                      [(ngModel)]="pgConfig.showNumbers"
                      (ngModelChange)="updateConfig()"
                      label="Show Numbers"
                    ></app-checkbox>
                  </div>

                  <div class="checkbox-group">
                    <app-checkbox
                      id="rtl"
                      [(ngModel)]="pgConfig.rtl"
                      (ngModelChange)="updateConfig()"
                      label="RTL"
                    ></app-checkbox>
                  </div>

                  <div class="checkbox-group">
                    <app-checkbox
                      id="dense"
                      [(ngModel)]="pgConfig.dense"
                      (ngModelChange)="updateConfig()"
                      label="Dense"
                    ></app-checkbox>
                  </div>
                </div>
              </div>

              <!-- Behavior Settings -->
              <div class="control-section">
                <h3>Behavior</h3>
                <div class="control-group">
                  <label>Expansion Mode</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.multiple"
                    (ngModelChange)="updateConfig()"
                    [options]="expansionModeOptions"
                  ></ui-dropdown>
                </div>

                <div class="checkbox-row">
                  <div class="checkbox-group">
                    <app-checkbox
                      id="disabled"
                      [(ngModel)]="pgConfig.disabled"
                      (ngModelChange)="updateConfig()"
                      label="Disabled"
                    ></app-checkbox>
                  </div>

                  <div class="checkbox-group">
                    <app-checkbox
                      id="enableSearch"
                      [(ngModel)]="pgConfig.enableSearch"
                      (ngModelChange)="updateConfig()"
                      label="Enable Search"
                    ></app-checkbox>
                  </div>

                  <div class="checkbox-group">
                    <app-checkbox
                      id="enableExpandCollapseAll"
                      [(ngModel)]="pgConfig.enableExpandCollapseAll"
                      (ngModelChange)="updateConfig()"
                      label="Show Expand/Collapse All"
                    ></app-checkbox>
                  </div>

                  <div class="checkbox-group">
                    <app-checkbox
                      id="enableDragDrop"
                      [(ngModel)]="pgConfig.enableDragDrop"
                      (ngModelChange)="updateConfig()"
                      label="Enable Drag & Drop"
                    ></app-checkbox>
                  </div>

                  <div class="checkbox-group">
                    <app-checkbox
                      id="enableNested"
                      [(ngModel)]="pgConfig.enableNested"
                      (ngModelChange)="updateConfig()"
                      label="Enable Nested"
                    ></app-checkbox>
                  </div>
                  <div class="checkbox-group">
                    <app-checkbox
                      id="loading"
                      [(ngModel)]="pgConfig.loading"
                      (ngModelChange)="updateConfig()"
                      label="Loading State"
                    ></app-checkbox>
                  </div>
                </div>
              </div>

              <!-- Animation Settings -->
              <div class="control-section">
                <h3>Animation</h3>
                <div class="control-group">
                  <label>Duration (ms)</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.animationDuration"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Timing Function</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.animationTiming"
                    (ngModelChange)="updateConfig()"
                    [options]="timingOptions"
                  ></ui-dropdown>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="lazy"
                    [(ngModel)]="pgConfig.lazy"
                    (ngModelChange)="updateConfig()"
                    label="Lazy Load Content"
                  ></app-checkbox>
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
        <ui-accordion
          [items]="playgroundItems"
          [multiple]="pgConfig.multiple"
          [variant]="pgConfig.variant"
          [size]="pgConfig.size"
          [iconPosition]="pgConfig.iconPosition"
          [selectedHeaderColor]="pgConfig.selectedHeaderColor"
          [hideArrow]="pgConfig.hideArrow"
          [showNumbers]="pgConfig.showNumbers"
          [rtl]="pgConfig.rtl"
          [dense]="pgConfig.dense"
          [disabled]="pgConfig.disabled"
          [enableSearch]="pgConfig.enableSearch"
          [enableExpandCollapseAll]="pgConfig.enableExpandCollapseAll"
          [enableDragDrop]="pgConfig.enableDragDrop"
          [enableNested]="pgConfig.enableNested"
          [loading]="pgConfig.loading"
          [animationDuration]="pgConfig.animationDuration"
          [animationTiming]="pgConfig.animationTiming"
          [lazy]="pgConfig.lazy"
          [headerLevel]="pgConfig.headerLevel"
        >
        </ui-accordion>

        <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './accordian-playground.component.scss',
})
export class AccordianPlaygroundComponent {
  pgConfig = {
    multiple: false,
    variant: 'default',
    size: 'md',
    iconPosition: 'end',
    selectedHeaderColor: '#3b82f6',
    hideArrow: false,
    showNumbers: false,
    rtl: false,
    dense: false,
    disabled: false,
    enableSearch: false,
    enableExpandCollapseAll: false,
    enableDragDrop: false,
    enableNested: false,
    loading: false,
    animationDuration: 300,
    animationTiming: 'ease',
    lazy: false,
    headerLevel: 3,
  };

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Splitted', value: 'splitted' },
    { label: 'Light', value: 'light' },
    { label: 'Shadow', value: 'shadow' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  iconPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  expansionModeOptions = [
    { label: 'Single', value: false },
    { label: 'Multiple', value: true },
  ];

  timingOptions = [
    { label: 'Ease', value: 'ease' },
    { label: 'Linear', value: 'linear' },
    { label: 'Ease In', value: 'ease-in' },
    { label: 'Ease Out', value: 'ease-out' },
    { label: 'Ease In Out', value: 'ease-in-out' },
  ];

  playgroundItems = JSON.stringify([
    {
      id: 'p1',
      title: 'First Panel',
      content:
        '<p>This is the content of the first panel. It demonstrates the accordion functionality with customizable settings.</p>',
    },
    {
      id: 'p2',
      title: 'Second Panel (Nested Example)',
      content: '<p>The second panel contains nested items if "Enable Nested" is checked.</p>',
      children: [
        {
          id: 'p2-1',
          title: 'Nested Item 1',
          content: '<p>This is a nested item content.</p>',
        },
        {
          id: 'p2-2',
          title: 'Nested Item 2',
          content: '<p>Another nested item.</p>',
        },
      ],
    },
    {
      id: 'p3',
      title: 'Third Panel',
      content:
        "<p>This is the third panel. Adjust the settings above to see how they affect the accordion's appearance and behavior.</p>",
    },
  ]);

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
    let code = '<ui-accordion';
    code += ` [items]="items"`;

    if (this.pgConfig.multiple) code += ' multiple';
    if (this.pgConfig.variant !== 'default') code += ` variant="${this.pgConfig.variant}"`;
    if (this.pgConfig.size !== 'md') code += ` size="${this.pgConfig.size}"`;
    if (this.pgConfig.iconPosition !== 'end')
      code += ` icon-position="${this.pgConfig.iconPosition}"`;
    if (this.pgConfig.selectedHeaderColor !== '#3b82f6')
      code += ` selected-header-color="${this.pgConfig.selectedHeaderColor}"`;
    if (this.pgConfig.headerLevel !== 3) code += ` [headerLevel]="${this.pgConfig.headerLevel}"`;

    if (this.pgConfig.hideArrow) code += ' hide-arrow';
    if (this.pgConfig.showNumbers) code += ' show-numbers';
    if (this.pgConfig.rtl) code += ' rtl';
    if (this.pgConfig.dense) code += ' dense';

    if (this.pgConfig.disabled) code += ' disabled';
    if (this.pgConfig.enableSearch) code += ' enable-search';
    if (this.pgConfig.enableExpandCollapseAll) code += ' enable-expand-collapse-all';
    if (this.pgConfig.enableDragDrop) code += ' enable-drag-drop';
    if (this.pgConfig.enableNested) code += ' enable-nested';
    if (this.pgConfig.loading) code += ' loading';

    if (this.pgConfig.animationDuration !== 300)
      code += ` [animationDuration]="${this.pgConfig.animationDuration}"`;
    if (this.pgConfig.animationTiming !== 'ease')
      code += ` animation-timing="${this.pgConfig.animationTiming}"`;
    if (this.pgConfig.lazy) code += ' lazy';

    code += '></ui-accordion>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      multiple: false,
      variant: 'default',
      size: 'md',
      iconPosition: 'end',
      selectedHeaderColor: '#3b82f6',
      hideArrow: false,
      showNumbers: false,
      rtl: false,
      dense: false,
      disabled: false,
      enableSearch: false,
      enableExpandCollapseAll: false,
      enableDragDrop: false,
      enableNested: false,
      loading: false,
      animationDuration: 300,
      animationTiming: 'ease',
      lazy: false,
      headerLevel: 3,
    };
    this.updateConfig();
  }
}
