import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-preferences-settings-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
          <!-- Language Selector -->
          <div class="settings-card">
            <div class="card-header">
              <h3>Language</h3>
              <p>Select your preferred language for documentation</p>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="languageSelect">Language</label>
                <select id="languageSelect" [ngModel]="selectedLanguage" (ngModelChange)="changeLanguage($event)">
                  <option value="en">English</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </div>
    <div class="settings-section">
      <div class="section-header">
        <div class="title-row">
          <span class="section-icon">⚙️</span>
          <h2>Preferences</h2>
        </div>
        <p>Tailor your workspace and viewing experience to your liking</p>
      </div>

      <div class="section-content grid-layout">
        <!-- Display Settings -->
        <div class="settings-card">
          <div class="card-header">
            <h3>Visual Style</h3>
            <p>Control how the interface looks and feels</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="fontSize">Font Size</label>
              <select id="fontSize" [(ngModel)]="fontSize">
                <option value="small">Small</option>
                <option value="medium" selected>Medium (Default)</option>
                <option value="large">Large</option>
                <option value="xlarge">Extra Large</option>
              </select>
            </div>

            <div class="form-group">
              <label for="density">UI Density</label>
              <select id="density" [(ngModel)]="density">
                <option value="compact">Compact</option>
                <option value="comfortable" selected>Comfortable</option>
                <option value="spacious">Spacious</option>
              </select>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Interface Animations</span>
                <span class="desc">Enable smooth transitions and micro-interactions</span>
              </div>
              <ui-switch
                [checked]="animations()"
                variant="primary"
                (switchChange)="animations.set($event.detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Reduced Motion</span>
                <span class="desc">Minimize animations for better accessibility</span>
              </div>
              <ui-switch
                [checked]="reduceMotion()"
                variant="warning"
                (switchChange)="reduceMotion.set($event.detail.checked)"
              ></ui-switch>
            </div>
          </div>
        </div>

        <!-- Content Settings -->
        <div class="settings-card">
          <div class="card-header">
            <h3>Data & Content</h3>
            <p>Configure how data is displayed and formatted</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="itemsPerPage">Items Per Page</label>
              <select id="itemsPerPage" [(ngModel)]="itemsPerPage">
                <option value="10">10 items</option>
                <option value="25" selected>25 items</option>
                <option value="50">50 items</option>
                <option value="100">100 items</option>
              </select>
            </div>

            <div class="form-group">
              <label for="dateFormat">Date Format</label>
              <select id="dateFormat" [(ngModel)]="dateFormat">
                <option value="MM/DD/YYYY">MM / DD / YYYY</option>
                <option value="DD/MM/YYYY">DD / MM / YYYY</option>
                <option value="YYYY-MM-DD">YYYY - MM - DD</option>
              </select>
            </div>

            <div class="form-group">
              <label for="timeFormat">Time Format</label>
              <select id="timeFormat" [(ngModel)]="timeFormat">
                <option value="12">12-hour (AM/PM)</option>
                <option value="24">24-hour (Military)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Behavior Settings -->
        <div class="settings-card full-width">
          <div class="card-header">
            <h3>App Behavior</h3>
            <p>Customize interactions and automation</p>
          </div>
          <div class="card-body behavior-grid">
            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Navigation Orientation</span>
                <span class="desc"
                  >Choose between vertical sidebar or horizontal top navigation</span
                >
              </div>
              <div class="segmented-control">
                <button
                  [class.active]="navOrientation() === 'vertical'"
                  (click)="navOrientation.set('vertical')"
                >
                  Vertical
                </button>
                <button
                  [class.active]="navOrientation() === 'horizontal'"
                  (click)="navOrientation.set('horizontal')"
                >
                  Horizontal
                </button>
              </div>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Cloud Auto-save</span>
                <span class="desc">Automatically save changes to your profile as you work</span>
              </div>
              <ui-switch
                [checked]="autoSave()"
                variant="success"
                (switchChange)="autoSave.set($event.detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Keyboard Shortcuts</span>
                <span class="desc">Enable quick navigation using hotkeys</span>
              </div>
              <ui-switch
                [checked]="keyboardShortcuts()"
                variant="primary"
                (switchChange)="keyboardShortcuts.set($event.detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Contextual Tooltips</span>
                <span class="desc">Show helpful hints when hovering over UI elements</span>
              </div>
              <ui-switch
                [checked]="tooltips()"
                variant="info"
                (switchChange)="tooltips.set($event.detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Destructive Action Confirmation</span>
                <span class="desc">Ask before deleting or permanently modifying items</span>
              </div>
              <ui-switch
                [checked]="confirmDelete()"
                variant="danger"
                (switchChange)="confirmDelete.set($event.detail.checked)"
              ></ui-switch>
            </div>
          </div>
        </div>

        <div class="form-actions-full">
          <ui-button label="Reset to Defaults" variant="secondary" (click)="reset()"></ui-button>
          <ui-button label="Save Preferences" variant="primary" (click)="save()"></ui-button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .settings-section {
        padding: 8px;
      }

      .section-header {
        margin-bottom: 40px;

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .section-icon {
          font-size: 1.5rem;
        }

        h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
        }

        p {
          color: var(--text-secondary);
          font-size: 1rem;
          margin: 0;
        }
      }

      .grid-layout {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      .settings-card {
        background: var(--surface-raised);
        border-radius: 20px;
        border: 1px solid var(--border-subtle);
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 20px rgba(0, 0, 10, 0.02);

        &.full-width {
          grid-column: span 2;
        }
      }

      .card-header {
        padding: 24px 28px;
        border-bottom: 1px solid var(--border-subtle);
        background: rgba(var(--primary-rgb), 0.02);

        h3 {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 4px 0;
          color: var(--text-primary);
        }

        p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
        }
      }

      .card-body {
        padding: 12px 28px;

        &.behavior-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 40px;
        }
      }

      .form-group {
        padding: 16px 0;
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        select {
          width: 100%;
          padding: 10px 14px;
          background: var(--surface-base);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          color: var(--text-primary);
          font-size: 0.95rem;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;

          &:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
          }
        }
      }

      .setting-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid var(--border-subtle);

        &:last-child {
          border-bottom: none;
        }
      }

      .setting-main {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding-right: 20px;

        .label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .desc {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
      }

      .segmented-control {
        display: inline-flex;
        background: var(--surface-sunken);
        padding: 4px;
        border-radius: 10px;
        border: 1px solid var(--border-subtle);

        button {
          padding: 6px 16px;
          border-radius: 7px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover {
            color: var(--text-primary);
          }

          &.active {
            background: var(--surface-raised);
            color: var(--primary-color);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          }
        }
      }

      .form-actions-full {
        grid-column: span 2;
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        padding: 24px 0;
      }

      @media (max-width: 1024px) {
        .grid-layout {
          grid-template-columns: 1fr;
        }
        .settings-card.full-width,
        .form-actions-full {
          grid-column: auto;
        }
        .card-body.behavior-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class PreferencesSettingsSectionComponent {
  fontSize = signal('medium');
  density = signal('comfortable');
  animations = signal(true);
  reduceMotion = signal(false);
  navOrientation = signal('vertical');
  itemsPerPage = signal('25');
  dateFormat = signal('MM/DD/YYYY');
  timeFormat = signal('12');
  autoSave = signal(true);
  keyboardShortcuts = signal(true);
  tooltips = signal(true);
  confirmDelete = signal(true);

  selectedLanguage: string;

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.getLanguage();
  }

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.languageService.setLanguage(lang);
  }

  save(): void {}
  reset(): void {
    this.fontSize.set('medium');
    this.density.set('comfortable');
    this.animations.set(true);
    this.reduceMotion.set(false);
    this.navOrientation.set('vertical');
    this.itemsPerPage.set('25');
    this.dateFormat.set('MM/DD/YYYY');
    this.timeFormat.set('12');
    this.autoSave.set(true);
    this.keyboardShortcuts.set(true);
    this.tooltips.set(true);
    this.confirmDelete.set(true);
    this.selectedLanguage = 'en';
    this.languageService.setLanguage('en');
  }
}
