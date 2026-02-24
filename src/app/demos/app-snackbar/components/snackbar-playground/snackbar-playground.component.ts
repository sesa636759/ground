import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-snackbar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
              <!-- Global Config -->
              <div class="control-section">
                <h3>Global Configuration</h3>
                <div class="control-group">
                  <label>Position</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.position"
                    (ngModelChange)="updateConfig()"
                    [options]="positionOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Max Visible</label>
                  <input
                    type="number"
                    [(ngModel)]="pgConfig.maxVisible"
                    (ngModelChange)="updateConfig()"
                  />
                </div>
                <div class="control-group">
                  <label>Stack Mode</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.stackMode"
                    (ngModelChange)="updateConfig()"
                    [options]="stackModeOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Open Mode</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.openMode"
                    (ngModelChange)="updateConfig()"
                    [options]="openModeOptions"
                  ></ui-dropdown>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="cardStack"
                    [(ngModel)]="pgConfig.cardStack"
                    (ngModelChange)="updateConfig()"
                    label="Card Stacking"
                  ></app-checkbox>
                </div>
              </div>

              <!-- Notification settings -->
              <div class="control-section">
                <h3>Notification Settings</h3>
                <div class="control-group">
                  <label>Type</label>
                  <ui-dropdown [(ngModel)]="notiConfig.type" [options]="typeOptions"></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Title</label>
                  <input type="text" [(ngModel)]="notiConfig.title" />
                </div>
                <div class="control-group">
                  <label>Message</label>
                  <input type="text" [(ngModel)]="notiConfig.message" />
                </div>
                <div class="control-group">
                  <label>Duration (ms)</label>
                  <input type="number" [(ngModel)]="notiConfig.duration" />
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
        <ui-snackbar
          #snackbar
          icon-library="lucide"
          [attr.position]="pgConfig.position"
          [attr.max-visible]="pgConfig.maxVisible"
          [attr.stack-mode]="pgConfig.stackMode"
          [attr.open-mode]="pgConfig.openMode"
          [attr.card-stack]="pgConfig.cardStack ? '' : null"
        ></ui-snackbar>

        <ui-button
          class="btn-primary"
          variant="primary"
          (click)="showSnackbar()"
          label="Show Snackbar"
        ></ui-button>
        <ui-button
          class="btn-secondary"
          variant="secondary"
          (click)="clearAll()"
          label="Clear All"
        ></ui-button>

        <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            [label]="'Generated Code'"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './snackbar-playground.component.scss',
})
export class SnackbarPlaygroundComponent {
  @ViewChild('snackbar') snackbarEl!: ElementRef;

  pgConfig = {
    position: 'top-right',
    maxVisible: 5,
    stackMode: 'stack',
    openMode: 'slide-down',
    cardStack: false,
  };

  positionOptions = [
    { label: 'Top Right', value: 'top-right' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Center', value: 'top-center' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Center', value: 'bottom-center' },
  ];

  stackModeOptions = [
    { label: 'Stack', value: 'stack' },
    { label: 'Queue', value: 'queue' },
    { label: 'LIFO', value: 'lifo' },
  ];

  openModeOptions = [
    { label: 'Slide Down', value: 'slide-down' },
    { label: 'Slide Up', value: 'slide-up' },
    { label: 'Slide Left', value: 'slide-left' },
    { label: 'Slide Right', value: 'slide-right' },
    { label: 'Fade', value: 'fade' },
    { label: 'Scale', value: 'scale' },
    { label: 'Bounce', value: 'bounce' },
  ];

  typeOptions = [
    { label: 'Success', value: 'success' },
    { label: 'Info', value: 'info' },
    { label: 'Warning', value: 'warning' },
    { label: 'Error', value: 'error' },
  ];
  notiConfig = {
    type: 'success',
    title: 'New Notification',
    message: 'This is a test notification message!',
    duration: 5000,
  };

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
    let code = '<ui-snackbar\n';
    code += `  position="${this.pgConfig.position}"\n`;
    code += `  [max-visible]="${this.pgConfig.maxVisible}"\n`;
    code += `  stack-mode="${this.pgConfig.stackMode}"\n`;
    code += `  open-mode="${this.pgConfig.openMode}"\n`;
    if (this.pgConfig.cardStack) code += `  card-stack\n`;
    code += '></ui-snackbar>\n\n';
    code += '// Trigger from TS:\n';
    code += `snackbar.add({\n`;
    code += `  type: '${this.notiConfig.type}',\n`;
    code += `  title: '${this.notiConfig.title}',\n`;
    code += `  message: '${this.notiConfig.message}',\n`;
    code += `  duration: ${this.notiConfig.duration}\n`;
    code += `});`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  async showSnackbar() {
    const el = this.snackbarEl.nativeElement;
    if (el && typeof el.add === 'function') {
      await el.add({ ...this.notiConfig });
    }
  }

  async clearAll() {
    const el = this.snackbarEl.nativeElement;
    if (el && typeof el.closeAll === 'function') {
      await el.closeAll();
    }
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      position: 'top-right',
      maxVisible: 5,
      stackMode: 'stack',
      openMode: 'slide-down',
      cardStack: false,
    };
    this.notiConfig = {
      type: 'success',
      title: 'New Notification',
      message: 'This is a test notification message!',
      duration: 5000,
    };
    this.updateConfig();
  }
}
