import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-button-playground',
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
        <div class="control-grid">
          <!-- Content -->
          <div class="control-section">
            <h3>Content</h3>
            <div class="control-group">
              <label>Label</label>
              <input type="text" [(ngModel)]="pgConfig.label" (ngModelChange)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Icon</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.icon"
                (ngModelChange)="updateConfig()"
                placeholder="e.g. ⭐, user, rocket"
              />
            </div>
            <div class="control-group">
              <label>Icon Library</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.iconLibrary"
                (change)="updateConfig()"
                [options]="iconLibraryOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Badge</label>
              <input type="text" [(ngModel)]="pgConfig.badge" (ngModelChange)="updateConfig()" />
            </div>
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Size</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.size"
                (change)="updateConfig()"
                [options]="sizeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Elevation (0-5)</label>
              <input
                type="number"
                min="0"
                max="5"
                [(ngModel)]="pgConfig.elevation"
                (ngModelChange)="updateConfig()"
              />
            </div>
            <div class="control-group">
              <label>Icon Position</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.iconPosition"
                (change)="updateConfig()"
                [options]="positionOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Icon Size</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.iconSize"
                (ngModelChange)="updateConfig()"
                placeholder="e.g. 1.2em, 20px"
              />
            </div>
          </div>

          <!-- Layout & States -->
          <div class="control-section">
            <h3>Layout & States</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="iconOnly"
                [(ngModel)]="pgConfig.iconOnly"
                (change)="updateConfig()"
                label="Icon Only"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="loading"
                [(ngModel)]="pgConfig.loading"
                (change)="updateConfig()"
                label="Loading"
              ></app-checkbox>
            </div>
            <div class="control-group" *ngIf="pgConfig.loading">
              <label>Loading Position</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.loadingPosition"
                (change)="updateConfig()"
                [options]="positionOptions"
              ></ui-dropdown>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="disabled"
                [(ngModel)]="pgConfig.disabled"
                (change)="updateConfig()"
                label="Disabled"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="pill"
                [(ngModel)]="pgConfig.pill"
                (change)="updateConfig()"
                label="Pill"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="rounded"
                [(ngModel)]="pgConfig.rounded"
                (change)="updateConfig()"
                label="Rounded"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="fullWidth"
                [(ngModel)]="pgConfig.fullWidth"
                (change)="updateConfig()"
                label="Full Width"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="selected"
                [(ngModel)]="pgConfig.selected"
                (change)="updateConfig()"
                label="Selected"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="noRipple"
                [(ngModel)]="pgConfig.noRipple"
                (change)="updateConfig()"
                label="No Ripple"
              ></app-checkbox>
            </div>
          </div>

          <!-- Advanced -->
          <div class="control-section">
            <h3>Link & Type</h3>
            <div class="control-group">
              <label>Type</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.type"
                (change)="updateConfig()"
                [options]="typeOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Href (renders as Link)</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.href"
                (ngModelChange)="updateConfig()"
                placeholder="https://..."
              />
            </div>
            <div class="control-group" *ngIf="pgConfig.href">
              <label>Target</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.target"
                (ngModelChange)="updateConfig()"
                placeholder="_blank"
              />
            </div>
            <div class="control-group" *ngIf="pgConfig.href">
              <label>Rel</label>
              <input
                type="text"
                [(ngModel)]="pgConfig.rel"
                (ngModelChange)="updateConfig()"
                placeholder="noopener"
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

      <div class="playground-preview">
        <ui-button
          [attr.label]="pgConfig.label"
          [attr.icon]="pgConfig.icon"
          [attr.icon-library]="pgConfig.iconLibrary"
          [attr.icon-position]="pgConfig.iconPosition"
          [attr.icon-size]="pgConfig.iconSize"
          [attr.badge]="pgConfig.badge"
          [attr.variant]="pgConfig.variant"
          [attr.size]="pgConfig.size"
          [attr.elevation]="pgConfig.elevation"
          [attr.icon-only]="pgConfig.iconOnly ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [attr.loading-position]="pgConfig.loadingPosition"
          [attr.disabled]="pgConfig.disabled ? '' : null"
          [attr.pill]="pgConfig.pill ? '' : null"
          [attr.rounded]="pgConfig.rounded ? '' : null"
          [attr.full-width]="pgConfig.fullWidth ? '' : null"
          [attr.selected]="pgConfig.selected ? '' : null"
          [attr.no-ripple]="pgConfig.noRipple ? '' : null"
          [attr.type]="pgConfig.type"
          [attr.href]="pgConfig.href"
          [attr.target]="pgConfig.target"
          [attr.rel]="pgConfig.rel"
          (buttonClick)="onEvent('Button Clicked')"
        ></ui-button>
        <div class="code-output">
          <ui-code-preview
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
        <div class="event-log">
          <div *ngFor="let log of eventLog" class="log-entry">
            <span class="timestamp">[{{ log.time }}]</span>
            <span class="message">{{ log.msg }}</span>
          </div>
          <div *ngIf="eventLog.length === 0" style="color: #666; font-style: italic;">
            Interact with the button to see events...
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './button-playground.component.scss',
})
export class ButtonPlaygroundComponent {
  pgConfig = {
    label: 'Explore Components',
    icon: '🚀',
    iconLibrary: 'default',
    iconPosition: 'left',
    iconSize: '',
    badge: '',
    variant: 'primary',
    size: 'md',
    elevation: 2,
    iconOnly: false,
    loading: false,
    loadingPosition: 'left',
    disabled: false,
    pill: false,
    rounded: false,
    fullWidth: false,
    selected: false,
    noRipple: false,
    type: 'button',
    href: '',
    target: '',
    rel: '',
  };

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
    { label: 'Outline', value: 'outline' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Dark', value: 'dark' },
  ];

  sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
  ];

  iconLibraryOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Icons8', value: 'icons8' },
    { label: 'Iconoir', value: 'iconoir' },
    { label: 'Ionicons', value: 'ionicons' },
    { label: 'Bootstrap', value: 'bootstrap' },
    { label: 'QuartzDS (SE)', value: 'se' },
  ];

  positionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  typeOptions = [
    { label: 'Button', value: 'button' },
    { label: 'Submit', value: 'submit' },
    { label: 'Reset', value: 'reset' },
  ];

  generatedCode = signal('');
  eventLog: { time: string; msg: string }[] = [];

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-button\n';
    if (this.pgConfig.href) {
      code += `  href="${this.pgConfig.href}"\n`;
      if (this.pgConfig.target) code += `  target="${this.pgConfig.target}"\n`;
      if (this.pgConfig.rel) code += `  rel="${this.pgConfig.rel}"\n`;
    } else if (this.pgConfig.type !== 'button') {
      code += `  type="${this.pgConfig.type}"\n`;
    }

    if (!this.pgConfig.iconOnly && this.pgConfig.label)
      code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.icon) {
      code += `  icon="${this.pgConfig.icon}"\n`;
      if (this.pgConfig.iconLibrary !== 'default')
        code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;
      if (this.pgConfig.iconPosition !== 'left')
        code += `  icon-position="${this.pgConfig.iconPosition}"\n`;
      if (this.pgConfig.iconSize) code += `  icon-size="${this.pgConfig.iconSize}"\n`;
    }

    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.variant !== 'primary') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.elevation !== 0) code += `  elevation="${this.pgConfig.elevation}"\n`;

    if (this.pgConfig.iconOnly) code += `  icon-only\n`;
    if (this.pgConfig.loading) {
      code += `  loading\n`;
      if (this.pgConfig.loadingPosition !== 'left')
        code += `  loading-position="${this.pgConfig.loadingPosition}"\n`;
    }
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.pill) code += `  pill\n`;
    if (this.pgConfig.rounded) code += `  rounded\n`;
    if (this.pgConfig.fullWidth) code += `  full-width\n`;
    if (this.pgConfig.selected) code += `  selected\n`;
    if (this.pgConfig.noRipple) code += `  no-ripple\n`;
    code += '></ui-button>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      label: 'Explore Components',
      icon: '🚀',
      iconLibrary: 'default',
      iconPosition: 'left',
      iconSize: '',
      badge: '',
      variant: 'primary',
      size: 'md',
      elevation: 2,
      iconOnly: false,
      loading: false,
      loadingPosition: 'left',
      disabled: false,
      pill: false,
      rounded: false,
      fullWidth: false,
      selected: false,
      noRipple: false,
      type: 'button',
      href: '',
      target: '',
      rel: '',
    };
    this.updateConfig();
    this.eventLog = [];
  }

  onEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.unshift({ time, msg });
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}
