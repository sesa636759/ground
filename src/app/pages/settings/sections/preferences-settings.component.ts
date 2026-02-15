import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preferences-settings-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <h2>⚙️ Preferences</h2>
        <p>Customize your application experience</p>
      </div>

      <div class="section-content">
        <div class="preference-group">
          <h3>Display Settings</h3>

          <div class="form-group">
            <label for="fontSize">Font Size</label>
            <select id="fontSize" [(ngModel)]="fontSize">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xlarge">Extra Large</option>
            </select>
          </div>

          <div class="form-group">
            <label for="density">UI Density</label>
            <select id="density" [(ngModel)]="density">
              <option value="compact">Compact</option>
              <option value="comfortable">Comfortable</option>
              <option value="spacious">Spacious</option>
            </select>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Animations</div>
              <div class="setting-description">Enable smooth transitions and animations</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="animations()"
                (change)="animations.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Reduce Motion</div>
              <div class="setting-description">Minimize animations for accessibility</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="reduceMotion()"
                (change)="reduceMotion.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="preference-group">
          <h3>Content Settings</h3>

          <div class="form-group">
            <label for="itemsPerPage">Items Per Page</label>
            <select id="itemsPerPage" [(ngModel)]="itemsPerPage">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <div class="form-group">
            <label for="dateFormat">Date Format</label>
            <select id="dateFormat" [(ngModel)]="dateFormat">
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div class="form-group">
            <label for="timeFormat">Time Format</label>
            <select id="timeFormat" [(ngModel)]="timeFormat">
              <option value="12">12-hour</option>
              <option value="24">24-hour</option>
            </select>
          </div>
        </div>

        <div class="preference-group">
          <h3>Behavior Settings</h3>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Auto-save</div>
              <div class="setting-description">Automatically save changes as you work</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="autoSave()"
                (change)="autoSave.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Keyboard Shortcuts</div>
              <div class="setting-description">Enable keyboard navigation and shortcuts</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="keyboardShortcuts()"
                (change)="keyboardShortcuts.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Tooltips</div>
              <div class="setting-description">Show helpful tooltips on hover</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="tooltips()"
                (change)="tooltips.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Confirm Before Delete</div>
              <div class="setting-description">Show confirmation dialog before deleting items</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="confirmDelete()"
                (change)="confirmDelete.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="form-actions">
          <button class="btn-secondary" (click)="reset()">Reset to Defaults</button>
          <button class="btn-primary" (click)="save()">Save Preferences</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .settings-section {
        padding: 24px;
      }

      .section-header {
        margin-bottom: 24px;

        h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
      }

      .section-content {
        background: var(--surface-raised);
        border-radius: 12px;
        padding: 24px;
        border: 1px solid var(--border-color);
      }

      .preference-group {
        margin-bottom: 32px;

        &:last-of-type {
          margin-bottom: 24px;
        }

        h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
        }
      }

      .form-group {
        margin-bottom: 20px;

        label {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        select {
          width: 100%;
          max-width: 400px;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background: var(--surface-base);
          color: var(--text-primary);
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          }
        }
      }

      .setting-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0;
        border-bottom: 1px solid var(--border-subtle);

        &:last-child {
          border-bottom: none;
        }
      }

      .setting-info {
        flex: 1;
        padding-right: 16px;

        .setting-label {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          font-size: 0.95rem;
        }

        .setting-description {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
      }

      .toggle-switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 26px;
        flex-shrink: 0;

        input {
          opacity: 0;
          width: 0;
          height: 0;

          &:checked + .slider {
            background-color: var(--primary-color);
          }

          &:checked + .slider:before {
            transform: translateX(22px);
          }

          &:focus + .slider {
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          }
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--surface-sunken);
          border: 1px solid var(--border-color);
          transition: 0.3s;
          border-radius: 34px;

          &:before {
            position: absolute;
            content: '';
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.3s;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
        }
      }

      .form-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        padding-top: 8px;

        button {
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;

          &.btn-primary {
            background: var(--primary-color);
            color: white;

            &:hover {
              background: var(--primary-hover);
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
            }
          }

          &.btn-secondary {
            background: var(--surface-sunken);
            color: var(--text-primary);
            border: 1px solid var(--border-color);

            &:hover {
              background: var(--surface-raised);
            }
          }
        }
      }
    `,
  ],
})
export class PreferencesSettingsSectionComponent {
  // Display settings
  fontSize = signal('medium');
  density = signal('comfortable');
  animations = signal(true);
  reduceMotion = signal(false);

  // Content settings
  itemsPerPage = signal('25');
  dateFormat = signal('MM/DD/YYYY');
  timeFormat = signal('12');

  // Behavior settings
  autoSave = signal(true);
  keyboardShortcuts = signal(true);
  tooltips = signal(true);
  confirmDelete = signal(true);

  save(): void {}

  reset(): void {
    this.fontSize.set('medium');
    this.density.set('comfortable');
    this.animations.set(true);
    this.reduceMotion.set(false);
    this.itemsPerPage.set('25');
    this.dateFormat.set('MM/DD/YYYY');
    this.timeFormat.set('12');
    this.autoSave.set(true);
    this.keyboardShortcuts.set(true);
    this.tooltips.set(true);
    this.confirmDelete.set(true);
  }
}
