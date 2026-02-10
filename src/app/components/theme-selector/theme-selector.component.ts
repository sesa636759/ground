import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="theme-selector">
      <h2>Theme Settings</h2>
      <p class="subtitle">Choose your preferred color scheme</p>

      <div class="theme-options">
        <div
          class="theme-option"
          [class.active]="themeService.currentTheme() === 'light'"
          (click)="themeService.setTheme('light')"
        >
          <div class="theme-preview light-preview">
            <div class="preview-header"></div>
            <div class="preview-sidebar"></div>
            <div class="preview-content"></div>
          </div>
          <div class="theme-info">
            <span class="theme-icon">☀️</span>
            <span class="theme-name">Light</span>
          </div>
        </div>

        <div
          class="theme-option"
          [class.active]="themeService.currentTheme() === 'dark'"
          (click)="themeService.setTheme('dark')"
        >
          <div class="theme-preview dark-preview">
            <div class="preview-header"></div>
            <div class="preview-sidebar"></div>
            <div class="preview-content"></div>
          </div>
          <div class="theme-info">
            <span class="theme-icon">🌙</span>
            <span class="theme-name">Dark</span>
          </div>
        </div>

        <div
          class="theme-option"
          [class.active]="themeService.currentTheme() === 'auto'"
          (click)="themeService.setTheme('auto')"
        >
          <div class="theme-preview auto-preview">
            <div class="preview-header"></div>
            <div class="preview-sidebar"></div>
            <div class="preview-content"></div>
          </div>
          <div class="theme-info">
            <span class="theme-icon">🔄</span>
            <span class="theme-name">Auto</span>
          </div>
        </div>
      </div>

      <div class="current-theme">
        <p>
          Current: <strong>{{ themeService.getThemeLabel() }}</strong>
        </p>
        <p class="hint">Auto mode follows your system preferences</p>
      </div>
    </div>
  `,
  styles: [
    `
      .theme-selector {
        padding: 40px;
        max-width: 900px;
        margin: 0 auto;

        h2 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 40px;
        }

        .theme-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-bottom: 40px;

          .theme-option {
            background: var(--surface-2);
            border: 2px solid var(--border-color);
            border-radius: 16px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              border-color: var(--primary-color);
              transform: translateY(-4px);
              box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
            }

            &.active {
              border-color: var(--primary-color);
              background: var(--primary-bg);
              box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
            }

            .theme-preview {
              width: 100%;
              height: 120px;
              border-radius: 12px;
              margin-bottom: 16px;
              position: relative;
              overflow: hidden;
              border: 1px solid rgba(255, 255, 255, 0.1);

              .preview-header {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 20px;
              }

              .preview-sidebar {
                position: absolute;
                top: 20px;
                left: 0;
                width: 40px;
                bottom: 0;
              }

              .preview-content {
                position: absolute;
                top: 20px;
                left: 40px;
                right: 0;
                bottom: 0;
              }

              &.light-preview {
                background: #f8fafc;

                .preview-header {
                  background: #e2e8f0;
                }
                .preview-sidebar {
                  background: #cbd5e1;
                }
                .preview-content {
                  background: #ffffff;
                }
              }

              &.dark-preview {
                background: #0f172a;

                .preview-header {
                  background: #1e293b;
                }
                .preview-sidebar {
                  background: #334155;
                }
                .preview-content {
                  background: #1e293b;
                }
              }

              &.auto-preview {
                background: linear-gradient(
                  135deg,
                  #f8fafc 0%,
                  #f8fafc 50%,
                  #0f172a 50%,
                  #0f172a 100%
                );

                .preview-header {
                  background: linear-gradient(90deg, #e2e8f0 50%, #1e293b 50%);
                }
                .preview-sidebar {
                  background: linear-gradient(180deg, #cbd5e1 50%, #334155 50%);
                }
                .preview-content {
                  background: linear-gradient(135deg, #ffffff 50%, #1e293b 50%);
                }
              }
            }

            .theme-info {
              display: flex;
              align-items: center;
              gap: 12px;

              .theme-icon {
                font-size: 1.5rem;
              }

              .theme-name {
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--text-primary);
              }
            }
          }
        }

        .current-theme {
          background: var(--surface-2);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          text-align: center;

          p {
            color: var(--text-secondary);
            margin-bottom: 8px;

            strong {
              color: var(--primary-color);
              font-weight: 700;
            }
          }

          .hint {
            font-size: 0.9rem;
            color: var(--text-tertiary);
            margin: 0;
          }
        }
      }
    `,
  ],
})
export class ThemeSelectorComponent {
  constructor(public themeService: ThemeService) {}
}
