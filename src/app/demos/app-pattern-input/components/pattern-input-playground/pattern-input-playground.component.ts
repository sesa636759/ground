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
  selector: 'app-pattern-input-playground',
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
    <ui-accordion [items]="[{id: 'config', title: 'Configuration', icon: '⚙️'}]" [defaultOpen]="['config']" [multiple]="true">
      <div slot="content-config">
        <ui-accordion [items]="pgAccordionItems" [defaultOpen]="defaultOpen" multiple>
          <div slot="content-global" class="control-grid" style="padding: 16px;">
            <div class="control-group">
              <label>Mask Pattern</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.pattern"
                (ngModelChange)="updateConfig()"
                [options]="patternOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Placeholder</label>
              <app-input
                type="text"
                [(ngModel)]="pgConfig.placeholder"
                (ngModelChange)="updateConfig()"
              ></app-input>
            </div>
          </div>

          <div slot="content-states" style="padding: 16px;">
            <div class="checkbox-grid">
              <label class="checkbox-item">
                <app-checkbox
                  id="disabled"
                  [(ngModel)]="pgConfig.disabled"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Disabled
              </label>
              <label class="checkbox-item">
                <app-checkbox
                  id="readonly"
                  [(ngModel)]="pgConfig.readonly"
                  (ngModelChange)="updateConfig()"
                ></app-checkbox>
                Readonly
              </label>
            </div>
          </div>
        </ui-accordion>
            </div>
    </ui-accordion>
  </div>

  <div class="playground-preview">
        <div class="preview-stage">
          <ui-pattern-input
            #demoElement
            [attr.mask]="pgConfig.pattern"
            [attr.placeholder]="pgConfig.placeholder"
            [attr.disabled]="pgConfig.disabled ? '' : null"
            [attr.readonly]="pgConfig.readonly ? '' : null"
          ></ui-pattern-input>
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
  styleUrl: './pattern-input-playground.component.scss',
})
export class PatternInputPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  pgConfig = {
    pattern: '(999) 999-9999',
    placeholder: 'Enter phone number',
    disabled: false,
    readonly: false,
  };

  patternOptions = [
    { label: 'Phone: (999) 999-9999', value: '(999) 999-9999' },
    { label: 'Date: 99/99/9999', value: '99/99/9999' },
    { label: 'Card: ****-****-****-****', value: '****-****-****-****' },
    { label: 'Custom: AAA-999', value: 'AAA-999' },
  ];

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
    if (!this.demoElement) return '';
    return generatePlaygroundCode(this.demoElement.nativeElement as Element, 'ui-pattern-input');
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
      pattern: '(999) 999-9999',
      placeholder: 'Enter phone number',
      disabled: false,
      readonly: false,
    };
    this.updateConfig();
  }
}
