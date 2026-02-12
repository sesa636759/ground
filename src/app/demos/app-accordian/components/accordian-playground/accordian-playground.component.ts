import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accordion-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- Visual Settings -->
          <div class="control-section">
            <h3>Visual</h3>
            <div class="control-group">
              <label>Variant</label>
              <select [(ngModel)]="pgConfig.variant" (change)="updateConfig()">
                <option value="default">Default</option>
                <option value="outlined">Outlined</option>
                <option value="filled">Filled</option>
                <option value="bordered">Bordered</option>
                <option value="splitted">Splitted</option>
                <option value="light">Light</option>
                <option value="shadow">Shadow</option>
              </select>
            </div>

            <div class="control-group">
              <label>Size</label>
              <select [(ngModel)]="pgConfig.size" (change)="updateConfig()">
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>

            <div class="control-group">
              <label>Icon Position</label>
              <select [(ngModel)]="pgConfig.iconPosition" (change)="updateConfig()">
                <option value="start">Start</option>
                <option value="end">End</option>
              </select>
            </div>

            <div class="control-group">
              <label>Selected Header Color</label>
              <input
                type="color"
                [(ngModel)]="pgConfig.selectedHeaderColor"
                (change)="updateConfig()"
              />
            </div>

            <div class="control-group">
              <label>Header Level (1-6)</label>
              <input
                type="number"
                min="1"
                max="6"
                [(ngModel)]="pgConfig.headerLevel"
                (change)="updateConfig()"
              />
            </div>

            <div class="checkbox-row">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="hideArrow"
                  [(ngModel)]="pgConfig.hideArrow"
                  (change)="updateConfig()"
                />
                <label for="hideArrow">Hide Arrow</label>
              </div>

              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="showNumbers"
                  [(ngModel)]="pgConfig.showNumbers"
                  (change)="updateConfig()"
                />
                <label for="showNumbers">Show Numbers</label>
              </div>

              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="rtl"
                  [(ngModel)]="pgConfig.rtl"
                  (change)="updateConfig()"
                />
                <label for="rtl">RTL</label>
              </div>

              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="dense"
                  [(ngModel)]="pgConfig.dense"
                  (change)="updateConfig()"
                />
                <label for="dense">Dense</label>
              </div>
            </div>
          </div>

          <!-- Behavior Settings -->
          <div class="control-section">
            <h3>Behavior</h3>
            <div class="control-group">
              <label>Expansion Mode</label>
              <select [(ngModel)]="pgConfig.multiple" (change)="updateConfig()">
                <option [value]="false">Single</option>
                <option [value]="true">Multiple</option>
              </select>
            </div>

            <div class="checkbox-row">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="disabled"
                  [(ngModel)]="pgConfig.disabled"
                  (change)="updateConfig()"
                />
                <label for="disabled">Disabled</label>
              </div>

              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="enableSearch"
                  [(ngModel)]="pgConfig.enableSearch"
                  (change)="updateConfig()"
                />
                <label for="enableSearch">Enable Search</label>
              </div>

              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="enableExpandCollapseAll"
                  [(ngModel)]="pgConfig.enableExpandCollapseAll"
                  (change)="updateConfig()"
                />
                <label for="enableExpandCollapseAll">Show Expand/Collapse All</label>
              </div>

              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="enableDragDrop"
                  [(ngModel)]="pgConfig.enableDragDrop"
                  (change)="updateConfig()"
                />
                <label for="enableDragDrop">Enable Drag & Drop</label>
              </div>

              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="enableNested"
                  [(ngModel)]="pgConfig.enableNested"
                  (change)="updateConfig()"
                />
                <label for="enableNested">Enable Nested</label>
              </div>
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  id="loading"
                  [(ngModel)]="pgConfig.loading"
                  (change)="updateConfig()"
                />
                <label for="loading">Loading State</label>
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
                (change)="updateConfig()"
              />
            </div>
            <div class="control-group">
              <label>Timing Function</label>
              <select [(ngModel)]="pgConfig.animationTiming" (change)="updateConfig()">
                <option value="ease">Ease</option>
                <option value="linear">Linear</option>
                <option value="ease-in">Ease In</option>
                <option value="ease-out">Ease Out</option>
                <option value="ease-in-out">Ease In Out</option>
              </select>
            </div>
            <div class="checkbox-group">
              <input
                type="checkbox"
                id="lazy"
                [(ngModel)]="pgConfig.lazy"
                (change)="updateConfig()"
              />
              <label for="lazy">Lazy Load Content</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
          <ui-button class="btn-secondary" variant="secondary" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
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
      </div>
    </div>
  `,
  styles: [
    `
      @use '../../../../../styles/playground-base.scss';

      .control-section {
        margin-bottom: 24px;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 16px;

        &:last-child {
          border-bottom: none;
        }

        h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
      }

      .checkbox-row {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 8px;

        .checkbox-group {
          margin-bottom: 0;
          min-width: 140px;
        }
      }
    `,
  ],
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

  constructor() {
    this.updateConfig();
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
