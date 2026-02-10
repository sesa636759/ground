import {
  Component,
  Input,
  signal,
  effect,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentConfig } from '../component-configs';

@Component({
  selector: 'app-playground-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-editor">
      <!-- Toolbar -->
      <div class="editor-toolbar">
        <div class="tabs">
          <button [class.active]="activeTab() === 'preview'" (click)="activeTab.set('preview')">
            Preview
          </button>
          <button [class.active]="activeTab() === 'code'" (click)="activeTab.set('code')">
            Code
          </button>
          <button [class.active]="activeTab() === 'docs'" (click)="activeTab.set('docs')">
            Docs
          </button>
        </div>
        <button class="copy-btn" (click)="copyCode()" *ngIf="activeTab() === 'code'">
          Copy Code 📋
        </button>
      </div>

      <div class="editor-content">
        <!-- Preview Tab -->
        <div class="preview-pane" [class.hidden]="activeTab() !== 'preview'">
          <div class="preview-canvas" #previewContainer></div>
        </div>

        <!-- Code Tab -->
        <div class="code-pane" *ngIf="activeTab() === 'code'">
          <pre><code>{{ getGeneratedCode() }}</code></pre>
        </div>

        <!-- Docs Tab -->
        <div class="docs-pane" *ngIf="activeTab() === 'docs'">
          <div class="docs-content">
            <h2>{{ config?.label }}</h2>
            <p *ngIf="config?.description">{{ config?.description }}</p>

            <h3>Properties</h3>
            <table class="docs-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let prop of config?.props">
                  <td>
                    <code>{{ prop.name }}</code>
                  </td>
                  <td>
                    <code>{{ prop.type }}</code>
                  </td>
                  <td>
                    <code>{{ prop.defaultValue }}</code>
                  </td>
                  <td>{{ prop.description || prop.label || '-' }}</td>
                </tr>
              </tbody>
            </table>

            <ng-container *ngIf="config?.events?.length">
              <h3>Events</h3>
              <table class="docs-table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let event of config?.events">
                    <td>
                      <code>{{ event.name }}</code>
                    </td>
                    <td>{{ event.description }}</td>
                  </tr>
                </tbody>
              </table>
            </ng-container>

            <ng-container *ngIf="config?.slots?.length">
              <h3>Slots</h3>
              <table class="docs-table">
                <thead>
                  <tr>
                    <th>Slot Name</th>
                    <th>Default Content</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let slot of config?.slots">
                    <td>
                      <code>{{ slot.name || 'default' }}</code>
                    </td>
                    <td>
                      <pre>{{ slot.content }}</pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ng-container>
          </div>
        </div>

        <!-- Controls Panel (Hidden in Docs/Code mode for cleaner view, but maybe keep for Code?) -->
        <!-- User likely wants controls while previewing. -->
        <aside class="controls-panel" *ngIf="activeTab() === 'preview'">
          <div class="controls-header">
            <h3>Properties</h3>
          </div>
          <div class="controls-list">
            <div *ngFor="let prop of config?.props" class="control-group">
              <!-- Checkbox for Boolean -->
              <div *ngIf="prop.type === 'boolean'" class="boolean-control">
                <label class="control-label">{{ prop.label || prop.name }}</label>
                <!-- Native Checkbox with explicit styling -->
                <input
                  type="checkbox"
                  [ngModel]="controls()[prop.name]"
                  (ngModelChange)="updateControl(prop.name, $event)"
                  class="native-checkbox"
                />
              </div>

              <!-- Other Inputs -->
              <ng-container *ngIf="prop.type !== 'boolean'">
                <div class="input-control">
                  <label class="control-label">{{ prop.label || prop.name }}</label>

                  <!-- Select -->
                  <select
                    *ngIf="prop.type === 'select'"
                    [ngModel]="controls()[prop.name]"
                    (ngModelChange)="updateControl(prop.name, $event)"
                    class="form-input"
                  >
                    <option *ngFor="let opt of prop.options" [value]="opt">{{ opt }}</option>
                  </select>

                  <!-- String/Number -->
                  <input
                    *ngIf="prop.type === 'string' || prop.type === 'number'"
                    [type]="prop.type === 'number' ? 'number' : 'text'"
                    [ngModel]="controls()[prop.name]"
                    (ngModelChange)="updateControl(prop.name, $event)"
                    class="form-input"
                  />

                  <!-- JSON -->
                  <textarea
                    *ngIf="prop.type === 'json'"
                    [ngModel]="controls()[prop.name]"
                    (ngModelChange)="updateControl(prop.name, $event)"
                    rows="4"
                    class="form-input"
                  ></textarea>
                </div>
              </ng-container>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `,
  styles: [
    `
      .playground-editor {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        overflow: hidden;
        background: white;
        display: flex;
        flex-direction: column;
        height: 600px;
      }

      .editor-toolbar {
        display: flex;
        justify-content: space-between;
        padding: 12px 24px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
      }

      .editor-content {
        display: flex;
        flex: 1;
        overflow: hidden;
      }

      .preview-pane,
      .code-pane,
      .docs-pane {
        flex: 1;
        background: #f1f5f9;
        display: flex;
        overflow: auto;
        padding: 24px;
      }

      .docs-pane {
        background: white;
        display: block; /* Normal block flow */
      }

      .preview-canvas {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center; /* Center content */
        min-height: 100%;
      }

      .controls-panel {
        width: 320px;
        background: white;
        border-left: 1px solid #e2e8f0;
        overflow-y: auto;
        padding: 24px;
        display: flex;
        flex-direction: column;
      }

      .controls-header h3 {
        margin-top: 0;
        font-size: 0.875rem;
        text-transform: uppercase;
        color: #94a3b8;
        font-weight: 700;
        border-bottom: 1px solid #f1f5f9;
        padding-bottom: 12px;
        margin-bottom: 16px;
      }

      .controls-list {
        flex: 1;
      }

      .control-group {
        margin-bottom: 12px;
      }

      .boolean-control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
      }

      .input-control {
        margin-bottom: 4px;
      }

      .control-label {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        color: #475569;
        margin-bottom: 6px;
      }

      .hidden {
        display: none;
      }

      .tabs button {
        padding: 6px 12px;
        margin-right: 8px;
        border: none;
        background: transparent;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        color: #64748b;
        &.active {
          background: white;
          color: #3b82f6;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
      }

      .copy-btn {
        margin-left: auto;
        cursor: pointer;
      }

      /* Form Inputs */
      .form-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        font-size: 0.875rem;
        color: #334155;
        background: #f8fafc;
        box-sizing: border-box;

        &:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
        }
      }

      /* Native Checkbox Styling */
      .native-checkbox {
        appearance: auto;
        width: 20px;
        height: 20px;
        accent-color: #3b82f6;
        cursor: pointer;
        display: block;
      }

      /* Docs Tables */
      .docs-content {
        max-width: 800px;
        margin: 0 auto;
      }
      .docs-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 32px;
        font-size: 0.875rem;
      }
      .docs-table th,
      .docs-table td {
        text-align: left;
        padding: 12px;
        border-bottom: 1px solid #e2e8f0;
      }
      .docs-table th {
        font-weight: 600;
        color: #475569;
        background: #f8fafc;
      }
      .docs-table code {
        background: #f1f5f9;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.875em;
        font-family: monospace;
        color: #ef4444;
      }
      h3 {
        margin-top: 24px;
        margin-bottom: 16px;
        color: #1e293b;
      }
      h2 {
        margin-top: 0;
        color: #0f172a;
      }
    `,
  ],
})
export class PlaygroundEditorComponent implements OnInit, OnChanges {
  @Input() config: ComponentConfig | null = null;

  activeTab = signal('preview');
  controls = signal<Record<string, any>>({});

  @ViewChild('previewContainer', { static: false }) previewContainer!: ElementRef<HTMLDivElement>;

  constructor() {
    effect(() => {
      const c = this.controls();
      // Debounce render
      setTimeout(() => this.renderComponent(), 50);
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config'] && this.config) {
      // Reset controls
      const defaults: Record<string, any> = {};
      if (this.config.props) {
        this.config.props.forEach((p) => {
          defaults[p.name] = p.defaultValue;
        });
      }
      this.controls.set(defaults);
    }
  }

  updateControl(key: string, value: any) {
    this.controls.update((c) => ({ ...c, [key]: value }));
  }

  renderComponent() {
    if (!this.previewContainer || !this.config) return;

    const container = this.previewContainer.nativeElement;
    const config = this.config;
    const state = this.controls();

    // 1. Create Element
    const el = document.createElement(config.tagName);

    // 2. Set Attributes/Properties
    Object.entries(state).forEach(([key, value]) => {
      if (key === 'content') return;
      try {
        (el as any)[key] = value;
      } catch (e) {
        console.warn(`Failed to set property ${key}`, e);
      }
      if (value === false) {
        el.removeAttribute(key);
      } else if (value === true) {
        el.setAttribute(key, '');
      } else if (typeof value === 'string' || typeof value === 'number') {
        el.setAttribute(key, String(value));
      } else if (typeof value === 'object') {
        // (el as any)[key] = value;
      }
    });

    // 3. Set Content / Slots
    if (state['content'] !== undefined) {
      el.innerHTML = state['content'];
    } else if (config.slots && config.slots.length > 0) {
      config.slots.forEach((slot) => {
        const div = document.createElement('div');
        if (slot.name) div.setAttribute('slot', slot.name);
        div.innerHTML = slot.content;
        el.appendChild(div);
      });
    } else {
      if (!el.innerHTML) {
        el.textContent = config.label;
      }
    }

    // 4. Mount
    container.innerHTML = '';
    container.appendChild(el);
  }

  getGeneratedCode(): string {
    if (!this.config) return '';
    const config = this.config;
    const state = this.controls();
    let propsStr = '';
    let contentStr = '';

    Object.entries(state).forEach(([key, value]) => {
      if (key === 'content') {
        contentStr = String(value);
        return;
      }
      if (value === true) propsStr += ` ${key}`;
      else if (value !== false && value !== undefined && value !== null) {
        if (typeof value === 'string') propsStr += ` ${key}="${value}"`;
        else propsStr += ` [${key}]='${JSON.stringify(value)}'`;
      }
    });

    if (!contentStr) contentStr = '...';

    return `<${config.tagName}${propsStr}>${contentStr}</${config.tagName}>`;
  }

  copyCode() {
    const code = this.getGeneratedCode();
    navigator.clipboard.writeText(code);
  }
}
