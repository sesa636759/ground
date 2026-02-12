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
              <select [(ngModel)]="pgConfig.trigger" (change)="updateConfig()">
                <option value="click">Click</option>
                <option value="hover">Hover</option>
                <option value="focus">Focus</option>
              </select>
            </div>
            <div class="control-group">
              <label>Placement</label>
              <select [(ngModel)]="pgConfig.placement" (change)="updateConfig()">
                <option value="top">Top</option>
                <option value="top-start">Top Start</option>
                <option value="top-end">Top End</option>
                <option value="bottom">Bottom</option>
                <option value="bottom-start">Bottom Start</option>
                <option value="bottom-end">Bottom End</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
          </div>

          <!-- Appearance -->
          <div class="control-section">
            <h3>Appearance</h3>
            <div class="control-group">
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div class="control-group">
              <label>Width</label>
              <input type="text" [(ngModel)]="pgConfig.width" (change)="updateConfig()" />
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="showArrow"
                [(ngModel)]="pgConfig.showArrow"
                (change)="updateConfig()"
              />
              <label for="showArrow">Show Arrow</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="closeButton"
                [(ngModel)]="pgConfig.showCloseButton"
                (change)="updateConfig()"
              />
              <label for="closeButton">Close Button</label>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="backdrop"
                [(ngModel)]="pgConfig.backdrop"
                (change)="updateConfig()"
              />
              <label for="backdrop">Backdrop</label>
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
