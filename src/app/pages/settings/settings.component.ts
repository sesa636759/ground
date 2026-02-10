import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from '../../components/theme-selector/theme-selector.component';

@Component({
  selector: 'app-theme-settings',
  standalone: true,
  imports: [CommonModule, ThemeSelectorComponent],
  template: `
    <div class="settings-container">
      <header class="settings-header">
        <h1>Settings</h1>
        <p>Customize your experience</p>
      </header>

      <div class="settings-content">
        <app-theme-selector></app-theme-selector>
      </div>
    </div>
  `,
  styles: [
    `
      .settings-container {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .settings-header {
        padding: 32px 40px;
        background: linear-gradient(
          135deg,
          rgba(99, 102, 241, 0.1) 0%,
          rgba(139, 92, 246, 0.1) 100%
        );
        border-bottom: 1px solid var(--border-color);

        h1 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
      }

      .settings-content {
        flex: 1;
        overflow-y: auto;
      }
    `,
  ],
})
export class ThemeSettingsComponent {}
