import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from '../../../components/theme-selector/theme-selector.component';

@Component({
  selector: 'app-theme-settings-section',
  standalone: true,
  imports: [CommonModule, ThemeSelectorComponent],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <h2>🎨 Theme Settings</h2>
        <p>Customize the appearance of your application</p>
      </div>
      <div class="section-content">
        <app-theme-selector></app-theme-selector>
      </div>
    </div>
  `,
  styles: [`
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
  `]
})
export class ThemeSettingsSectionComponent {}
