import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from '../../../components/theme-selector/theme-selector.component';

@Component({
  selector: 'app-theme-settings-section',
  standalone: true,
  imports: [CommonModule, ThemeSelectorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <div class="title-row">
          <span class="section-icon">🎨</span>
          <h2>Theme Settings</h2>
        </div>
        <p>Personalize your workspace with a theme that matches your style</p>
      </div>

      <div class="section-content">
        <div class="settings-card">
          <div class="card-header">
            <h3>Appearance</h3>
            <p>Select a theme or customize the colors of your interface</p>
          </div>
          <div class="card-body">
            <app-theme-selector></app-theme-selector>
          </div>

          <div class="theme-info-footer">
            <div class="info-item">
              <ui-icon name="info" library="lucide" size="16px"></ui-icon>
              <span>The chosen theme will be applied instantly and synced to your account.</span>
            </div>
          </div>
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

      .settings-card {
        background: var(--surface-raised);
        border-radius: 20px;
        border: 1px solid var(--border-subtle);
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 10, 0.02);
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
        padding: 32px 28px;
      }

      .theme-info-footer {
        padding: 16px 28px;
        background: var(--surface-sunken);
        border-top: 1px solid var(--border-subtle);

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 0.875rem;

          ui-icon {
            color: var(--primary-color);
          }
        }
      }
    `,
  ],
})
export class ThemeSettingsSectionComponent {}
