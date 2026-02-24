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
  selector: 'app-dock-playground',
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
              <div class="control-section">
                <h3>Layout</h3>
                <div class="control-group">
                  <label>Position</label>
                  <ui-dropdown
                    name="position"
                    [(ngModel)]="pgConfig.position"
                    (ngModelChange)="updateConfig()"
                    [options]="positionOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Breakpoint</label>
                  <input
                    name="breakpoint"
                    type="text"
                    [(ngModel)]="pgConfig.breakpoint"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
              </div>

              <div class="control-section">
                <h3>Behavior</h3>
                <div class="checkbox-group">
                  <app-checkbox
                    id="autoZIndex"
                    name="autoZIndex"
                    [(ngModel)]="pgConfig.autoZIndex"
                    (ngModelChange)="updateConfig()"
                    label="Auto Z-Index"
                  ></app-checkbox>
                  <app-checkbox
                    id="magnify"
                    name="magnify"
                    [(ngModel)]="pgConfig.magnify"
                    (ngModelChange)="updateConfig()"
                    label="Magnify"
                  ></app-checkbox>
                  <app-checkbox
                    id="blurEffect"
                    name="blurEffect"
                    [(ngModel)]="pgConfig.blurEffect"
                    (ngModelChange)="updateConfig()"
                    label="Blur Effect"
                  ></app-checkbox>
                  <app-checkbox
                    id="showLabels"
                    name="showLabels"
                    [(ngModel)]="pgConfig.showLabels"
                    (ngModelChange)="updateConfig()"
                    label="Show Labels"
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
        <ui-dock
          #dock
          [attr.position]="pgConfig.position"
          [attr.breakpoint]="pgConfig.breakpoint"
          [attr.auto-z-index]="pgConfig.autoZIndex ? '' : null"
          [attr.magnify]="pgConfig.magnify ? true : false"
          [attr.blur-effect]="pgConfig.blurEffect ? true : false"
          [attr.show-labels]="pgConfig.showLabels ? true : false"
          icon-library="lucide"
          [items]="modelJson"
        ></ui-dock>

        <div
          *ngIf="lastAction"
          style="position: absolute; top: 20px; font-size: 0.85rem; color: var(--text-secondary);"
        >
          Last Action: <strong>{{ lastAction }}</strong>
        </div>

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
  styleUrl: './dock-playground.component.scss',
})
export class DockPlaygroundComponent implements AfterViewInit {
  @ViewChild('dock') dock!: ElementRef;
  pgConfig = {
    position: 'bottom',
    breakpoint: '960px',
    autoZIndex: true,
    magnify: true,
    blurEffect: false,
    showLabels: true,
  };

  positionOptions = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  model = [
    { label: 'Finder', icon: 'search', command: () => this.logAction('Finder') },
    { label: 'App Store', icon: 'shopping-bag', command: () => this.logAction('App Store') },
    { label: 'Photos', icon: 'image', command: () => this.logAction('Photos') },
    { label: 'Settings', icon: 'settings', command: () => this.logAction('Settings') },
    { label: 'Trash', icon: 'trash-2', command: () => this.logAction('Trash') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCode: string = '';
  lastAction = '';
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
    if (!this.dock) return '';

    return generatePlaygroundCode(this.dock.nativeElement as Element, 'ui-dock');
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
  }

  logAction(action: string) {
    this.lastAction = action;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode);
  }

  resetConfig() {
    this.pgConfig = {
      position: 'bottom',
      breakpoint: '960px',
      autoZIndex: true,
      magnify: true,
      blurEffect: false,
      showLabels: true,
    };
    this.updateConfig();
  }
}
