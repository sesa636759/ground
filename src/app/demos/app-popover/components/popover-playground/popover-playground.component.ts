import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popover-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Content -->
          <div class="control-section">
            <h3>Content</h3>
            <div class="control-group">
              <label>Heading</label>
              <input type="text" [(ngModel)]="pgConfig.heading" (change)="updateConfig()" />
            </div>
            <div class="control-group">
              <label>Body Content (HTML)</label>
              <textarea [(ngModel)]="pgConfig.content" (change)="updateConfig()"></textarea>
            </div>
          </div>

          <!-- Behavior -->
          <div class="control-section">
            <h3>Behavior</h3>
            <div class="control-group">
              <label>Trigger</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.trigger"
                (change)="updateConfig()"
                [options]="triggerOptions"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Placement</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.placement"
                (change)="updateConfig()"
                [options]="placementOptions"
              ></ui-dropdown>
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
              <label>Width</label>
              <input type="text" [(ngModel)]="pgConfig.width" (change)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="showArrow"
                [(ngModel)]="pgConfig.showArrow"
                (change)="updateConfig()"
                label="Show Arrow"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="closeButton"
                [(ngModel)]="pgConfig.showCloseButton"
                (change)="updateConfig()"
                label="Close Button"
              ></app-checkbox>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="backdrop"
                [(ngModel)]="pgConfig.backdrop"
                (change)="updateConfig()"
                label="Backdrop"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <button (click)="copyCode()">Copy Code</button>
          <button class="btn-secondary" (click)="resetConfig()">Reset</button>
        </div>
      </div>

      <div class="playground-preview">
        <ui-popover
          [attr.heading]="pgConfig.heading"
          [attr.content]="pgConfig.content"
          [attr.trigger]="pgConfig.trigger"
          [attr.placement]="pgConfig.placement"
          [attr.variant]="pgConfig.variant"
          [attr.width]="pgConfig.width"
          [attr.show-arrow]="pgConfig.showArrow ? '' : null"
          [attr.show-close-button]="pgConfig.showCloseButton ? '' : null"
          [attr.backdrop]="pgConfig.backdrop ? '' : null"
        >
          <button class="btn-primary">Target Element</button>
        </ui-popover>
      </div>
    </div>
  `,
  styleUrl: './popover-playground.component.scss',
})
export class PopoverPlaygroundComponent {
  pgConfig = {
    heading: 'Popover Title',
    content: 'This is the <b>popover</b> content. You can use <i>HTML</i> here!',
    trigger: 'click',
    placement: 'top',
    variant: 'light',
    width: '280px',
    showArrow: true,
    showCloseButton: true,
    backdrop: false,
  };

  triggerOptions = [
    { label: 'Click', value: 'click' },
    { label: 'Hover', value: 'hover' },
    { label: 'Focus', value: 'focus' },
  ];

  placementOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Top Start', value: 'top-start' },
    { label: 'Top End', value: 'top-end' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom Start', value: 'bottom-start' },
    { label: 'Bottom End', value: 'bottom-end' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  variantOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-popover\n';
    code += `  heading="${this.pgConfig.heading}"\n`;
    code += `  content="${this.pgConfig.content.replace(/"/g, '&quot;')}"\n`;
    code += `  trigger="${this.pgConfig.trigger}"\n`;
    code += `  placement="${this.pgConfig.placement}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.width !== '280px') code += `  width="${this.pgConfig.width}"\n`;
    if (!this.pgConfig.showArrow) code += `  [show-arrow]="false"\n`;
    if (this.pgConfig.showCloseButton) code += `  show-close-button\n`;
    if (this.pgConfig.backdrop) code += `  backdrop\n`;
    code += '>\n';
    code += '  <button>Trigger</button>\n';
    code += '</ui-popover>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      heading: 'Popover Title',
      content: 'This is the <b>popover</b> content. You can use <i>HTML</i> here!',
      trigger: 'click',
      placement: 'top',
      variant: 'light',
      width: '280px',
      showArrow: true,
      showCloseButton: true,
      backdrop: false,
    };
    this.updateConfig();
  }
}
