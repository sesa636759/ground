import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PlaygroundControl {
  name: string;
  label: string;
  type: 'boolean' | 'text' | 'number' | 'select' | 'color' | 'range';
  defaultValue: any;
  options?: { label: string; value: any }[];
  min?: number;
  max?: number;
  step?: number;
}

export interface PlaygroundConfig {
  title: string;
  description: string;
  controls: PlaygroundControl[];
}

@Component({
  selector: 'app-playground-controls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="playground-controls">
      <div class="controls-header">
        <h3>{{ config.title }}</h3>
        <p class="description">{{ config.description }}</p>
      </div>

      <div class="controls-grid">
        <div *ngFor="let control of config.controls" class="control-item">
          <!-- Boolean Control -->
          <label *ngIf="control.type === 'boolean'" class="checkbox-control">
            <input
              type="checkbox"
              [ngModel]="values[control.name]"
              (ngModelChange)="onValueChange(control.name, $event)"
            />
            <span>{{ control.label }}</span>
          </label>

          <!-- Text Control -->
          <label *ngIf="control.type === 'text'" class="text-control">
            <span class="control-label">{{ control.label }}</span>
            <input
              type="text"
              [ngModel]="values[control.name]"
              (ngModelChange)="onValueChange(control.name, $event)"
            />
          </label>

          <!-- Number Control -->
          <label *ngIf="control.type === 'number'" class="number-control">
            <span class="control-label">{{ control.label }}</span>
            <input
              type="number"
              [ngModel]="values[control.name]"
              (ngModelChange)="onValueChange(control.name, $event)"
              [min]="control.min ?? null"
              [max]="control.max ?? null"
              [step]="control.step ?? null"
            />
          </label>

          <!-- Select Control -->
          <label *ngIf="control.type === 'select'" class="select-control">
            <span class="control-label">{{ control.label }}</span>
            <select
              [ngModel]="values[control.name]"
              (ngModelChange)="onValueChange(control.name, $event)"
            >
              <option *ngFor="let option of control.options" [value]="option.value">
                {{ option.label }}
              </option>
            </select>
          </label>

          <!-- Color Control -->
          <label *ngIf="control.type === 'color'" class="color-control">
            <span class="control-label">{{ control.label }}</span>
            <input
              type="color"
              [ngModel]="values[control.name]"
              (ngModelChange)="onValueChange(control.name, $event)"
            />
          </label>

          <!-- Range Control -->
          <label *ngIf="control.type === 'range'" class="range-control">
            <span class="control-label">{{ control.label }}: {{ values[control.name] }}</span>
            <input
              type="range"
              [ngModel]="values[control.name]"
              (ngModelChange)="onValueChange(control.name, $event)"
              [min]="control.min"
              [max]="control.max"
              [step]="control.step"
            />
          </label>
        </div>
      </div>

      <div class="controls-footer">
        <button class="reset-btn" (click)="resetValues()">Reset to Defaults</button>
      </div>
    </div>
  `,
  styles: [
    `
      .playground-controls {
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .controls-header h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 8px 0;
      }

      .description {
        color: var(--text-secondary);
        margin: 0 0 20px 0;
        font-size: 0.9375rem;
      }

      .controls-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;
        margin-bottom: 20px;
      }

      .control-item {
        display: flex;
        flex-direction: column;
      }

      .checkbox-control {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        color: var(--text-primary);
        padding: 8px 0;
      }

      .checkbox-control input[type='checkbox'] {
        width: auto;
        cursor: pointer;
      }

      .text-control,
      .number-control,
      .select-control,
      .color-control,
      .range-control {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .control-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      input[type='text'],
      input[type='number'],
      select {
        padding: 8px 12px;
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-primary);
        font-size: 0.9375rem;
      }

      input[type='color'] {
        width: 60px;
        height: 40px;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        cursor: pointer;
      }

      input[type='range'] {
        width: 100%;
        cursor: pointer;
      }

      .controls-footer {
        display: flex;
        justify-content: flex-end;
        padding-top: 16px;
        border-top: 1px solid var(--border-color);
      }

      .reset-btn {
        padding: 8px 16px;
        background: var(--surface-2);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-primary);
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .reset-btn:hover {
        background: var(--surface-1);
        transform: translateY(-1px);
      }

      @media (max-width: 768px) {
        .controls-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class PlaygroundControlsComponent {
  @Input() config!: PlaygroundConfig;
  @Output() valuesChange = new EventEmitter<Record<string, any>>();

  values: Record<string, any> = {};

  ngOnInit() {
    this.resetValues();
  }

  onValueChange(name: string, value: any) {
    this.values[name] = value;
    this.valuesChange.emit({ ...this.values });
  }

  resetValues() {
    this.values = {};
    this.config.controls.forEach((control) => {
      this.values[control.name] = control.defaultValue;
    });
    this.valuesChange.emit({ ...this.values });
  }
}
