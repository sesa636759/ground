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
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-dropdown-playground',
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
        <ui-accordion [items]="pgAccordionItems" [defaultOpen]="defaultOpen" multiple>
          <div slot="content-config" class="control-grid" style="padding: 16px;">
            <div class="control-group">
              <label>Placeholder</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.placeholder"
                (ngModelChange)="updateConfig()"
              />
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
              <label>Appearance</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.appearance"
                (ngModelChange)="updateConfig()"
                [options]="appearanceOptions"
              ></ui-dropdown>
            </div>
          </div>

          <div slot="content-features" style="padding: 16px;">
            <div class="checkbox-grid">
              <label class="checkbox-item">
                <app-checkbox
                  id="multi"
                  [(ngModel)]="pgConfig.multiSelect"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Multi-Select
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  id="search"
                  [(ngModel)]="pgConfig.searchable"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Searchable
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  id="clear"
                  [(ngModel)]="pgConfig.clearable"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Clearable
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  id="cascade"
                  [(ngModel)]="pgConfig.cascading"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Cascading
              </label>
            </div>
          </div>
        </ui-accordion>
        <div class="playground-preview">
          <div
            class="preview-stage"
            style="flex-direction: column; align-items: flex-start; gap: 1rem;"
          >
            <label class="preview-label" style="font-weight: 500; font-size: 0.9rem;"
              >Pick your favorite tech stack:</label
            >
            <ui-dropdown
              #demoElement
              [attr.placeholder]="pgConfig.placeholder"
              [attr.size]="pgConfig.size !== 'md' ? pgConfig.size : null"
              [attr.appearance]="pgConfig.appearance !== 'dropdown' ? pgConfig.appearance : null"
              [attr.multi-select]="pgConfig.multiSelect ? '' : null"
              [attr.searchable]="pgConfig.searchable ? '' : null"
              [attr.clearable]="pgConfig.clearable ? '' : null"
              [attr.cascading]="pgConfig.cascading ? '' : null"
              [options]="pgConfig.cascading ? cascadingOptionsJson : optionsJson"
              (valueChange)="onValueChange($event)"
            ></ui-dropdown>

            <div
              *ngIf="currentValue"
              style="margin-top: 12px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-size: 0.85rem;"
            >
              <strong>Selected Value:</strong> {{ currentValue }}
            </div>
          </div>

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
  styleUrl: './dropdown-playground.component.scss',
})
export class DropdownPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'config', title: 'Configuration', icon: '⚙️' },
    { id: 'features', title: 'Features', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['config', 'features']);
  showCode = true;

  pgConfig = {
    placeholder: 'Select technology...',
    size: 'md',
    appearance: 'dropdown',
    multiSelect: false,
    searchable: true,
    clearable: true,
    cascading: false,
  };

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  appearanceOptions = [
    { label: 'Dropdown', value: 'dropdown' },
    { label: 'Button-like', value: 'button' },
  ];

  options = [
    { label: 'Angular', value: 'ng', icon: '🅰️' },
    { label: 'React', value: 'react', icon: '⚛️' },
    { label: 'Vue.js', value: 'vue', icon: '🖖' },
    { label: 'Svelte', value: 'svelte', icon: '🔥' },
    { label: 'Stencil', value: 'stencil', icon: '⚡' },
    { label: 'Solid', value: 'solid', icon: '🧊' },
  ];

  cascadingOptions = [
    {
      label: 'Frontend',
      value: 'fe',
      children: [
        { label: 'Angular', value: 'ng' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
      ],
    },
    {
      label: 'Backend',
      value: 'be',
      children: [
        { label: 'Node.js', value: 'node' },
        { label: 'NestJS', value: 'nest' },
        { label: 'Go', value: 'go' },
      ],
    },
  ];

  optionsJson = JSON.stringify(this.options);
  cascadingOptionsJson = JSON.stringify(this.cascadingOptions);

  currentValue = '';
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
    let code = '<ui-dropdown\n';
    code += `  placeholder="${this.pgConfig.placeholder}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.appearance !== 'dropdown')
      code += `  appearance="${this.pgConfig.appearance}"\n`;
    if (this.pgConfig.multiSelect) code += `  multi-select\n`;
    if (this.pgConfig.searchable) code += `  searchable\n`;
    if (this.pgConfig.clearable) code += `  clearable\n`;
    if (this.pgConfig.cascading) code += `  cascading\n`;
    code += `  [options]="dropdownOptions"\n`;
    code += '></ui-dropdown>';
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

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      placeholder: 'Select technology...',
      size: 'md',
      appearance: 'dropdown',
      multiSelect: false,
      searchable: true,
      clearable: true,
      cascading: false,
    };
    this.updateConfig();
  }
}
