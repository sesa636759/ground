import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-tabs-playground',
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
              <div class="control-section">
                <h3>Layout</h3>
                <div class="control-group">
                  <label>Orientation</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.orientation"
                    (ngModelChange)="updateConfig()"
                    [options]="orientationOptions"
                  ></ui-dropdown>
                </div>
                <div class="control-group">
                  <label>Alignment</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.align"
                    (ngModelChange)="updateConfig()"
                    [options]="alignOptions"
                  ></ui-dropdown>
                </div>
              </div>

              <div class="control-section">
                <h3>Visuals</h3>
                <div class="control-group">
                  <label>Variant</label>
                  <ui-dropdown
                    [(ngModel)]="pgConfig.variant"
                    (ngModelChange)="updateConfig()"
                    [options]="variantOptions"
                  ></ui-dropdown>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="scrollable"
                    [(ngModel)]="pgConfig.scrollable"
                    (ngModelChange)="updateConfig()"
                  />
                  <label for="scrollable">Scrollable</label>
                </div>
                <div class="checkbox-group">
                  <app-checkbox
                    id="closable"
                    [(ngModel)]="pgConfig.closeable"
                    (ngModelChange)="updateConfig()"
                  />
                  <label for="closable">Closeable Tabs</label>
                </div>
              </div>
            </div>

            <div class="code-output">
              <pre>{{ generatedCode() }}</pre>
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
        <div class="tabs-container">
          <ui-tabs
            [attr.orientation]="pgConfig.orientation"
            [attr.align]="pgConfig.align"
            [attr.variant]="pgConfig.variant"
            [attr.scrollable]="pgConfig.scrollable ? '' : null"
            [attr.closeable]="pgConfig.closeable ? '' : null"
            [value]="currentTab"
            (valueChange)="onTabChange($event)"
          >
            <ui-tab label="Overview" icon="🏠" value="overview">
              <div style="padding: 24px;">
                <h4>Overview Content</h4>
                <p>
                  Welcome to the dashboard overview. Here you can see your recent activity and
                  system status.
                </p>
              </div>
            </ui-tab>
            <ui-tab label="Settings" icon="⚙️" value="settings">
              <div style="padding: 24px;">
                <h4>Settings Content</h4>
                <p>
                  Manage your account preferences, security settings, and notification frequency.
                </p>
              </div>
            </ui-tab>
            <ui-tab label="Profile" icon="👤" value="profile">
              <div style="padding: 24px;">
                <h4>Profile Content</h4>
                <p>Update your personal information, bio, and social media links.</p>
              </div>
            </ui-tab>
          </ui-tabs>
        </div>
      </div>
    </div>
  `,
  styleUrl: './tabs-playground.component.scss',
})
export class TabsPlaygroundComponent {
  pgConfig = {
    orientation: 'horizontal',
    align: 'start',
    variant: 'default',
    scrollable: false,
    closeable: false,
  };

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  alignOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Justify', value: 'justify' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Pills', value: 'pills' },
    { label: 'Underline', value: 'underline' },
    { label: 'Enclosed', value: 'enclosed' },
  ];

  currentTab = 'overview';
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-tabs\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.scrollable) code += `  scrollable\n`;
    code += '>\n';
    code += '  <ui-tab label="Overview" value="overview"> Content 1 </ui-tab>\n';
    code += '  <ui-tab label="Settings" value="settings"> Content 2 </ui-tab>\n';
    code += '</ui-tabs>';

    this.generatedCode.set(code);
  }

  onTabChange(event: any) {
    this.currentTab = event.detail.value;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      align: 'start',
      variant: 'default',
      scrollable: false,
      closeable: false,
    };
    this.updateConfig();
  }
}
