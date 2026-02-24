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
          [class.active]="themeService.currentTheme() === 'schneider-green'"
          (click)="themeService.setTheme('schneider-green')"
        >
          <div class="theme-preview schneider-green-preview">
            <div class="preview-header"></div>
            <div class="preview-sidebar"></div>
            <div class="preview-content"></div>
          </div>
          <div class="theme-info">
            <span class="theme-icon">🌿</span>
            <span class="theme-name">Schneider Green</span>
          </div>
        </div>

        <div
          class="theme-option"
          [class.active]="themeService.currentTheme() === 'schneider-blue'"
          (click)="themeService.setTheme('schneider-blue')"
        >
          <div class="theme-preview schneider-blue-preview">
            <div class="preview-header"></div>
            <div class="preview-sidebar"></div>
            <div class="preview-content"></div>
          </div>
          <div class="theme-info">
            <span class="theme-icon">💙</span>
            <span class="theme-name">Schneider Blue</span>
          </div>
        </div>

        <div
          class="theme-option"
          [class.active]="themeService.currentTheme() === 'high-contrast'"
          (click)="themeService.setTheme('high-contrast')"
        >
          <div class="theme-preview high-contrast-preview">
            <div class="preview-header"></div>
            <div class="preview-sidebar"></div>
            <div class="preview-content"></div>
          </div>
          <div class="theme-info">
            <span class="theme-icon">👁️</span>
            <span class="theme-name">High Contrast</span>
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

      <!-- Navigation Layout Settings -->
      <div class="navigation-layout-section">
        <h3>Navigation Layout</h3>
        <p class="subtitle">Choose navigation position</p>

        <div class="layout-options">
          <div
            class="layout-option"
            [class.active]="themeService.navigationLayout() === 'sidebar'"
            (click)="themeService.setNavigationLayout('sidebar')"
          >
            <div class="layout-preview sidebar-layout">
              <div class="preview-nav-side"></div>
              <div class="preview-content-area">
                <div class="preview-header-bar"></div>
                <div class="preview-main"></div>
              </div>
            </div>
            <div class="layout-info">
              <span class="layout-icon">📱</span>
              <span class="layout-name">Sidebar</span>
              <span class="layout-desc">Classic sidebar navigation</span>
            </div>
          </div>

          <div
            class="layout-option"
            [class.active]="themeService.navigationLayout() === 'topbar'"
            (click)="themeService.setNavigationLayout('topbar')"
          >
            <div class="layout-preview topbar-layout">
              <div class="preview-nav-top"></div>
              <div class="preview-content-full">
                <div class="preview-main"></div>
              </div>
            </div>
            <div class="layout-info">
              <span class="layout-icon">🔝</span>
              <span class="layout-name">Top Bar</span>
              <span class="layout-desc">Horizontal top navigation</span>
            </div>
          </div>
        </div>

        <div class="current-layout">
          <p>
            Current Layout:
            <strong>{{
              themeService.navigationLayout() === 'sidebar'
                ? 'Sidebar Navigation'
                : 'Top Bar Navigation'
            }}</strong>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .theme-selector {
        padding: 40px;
        max-width: 90%;
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

              &.schneider-green-preview {
                background: #f0fdf4;

                .preview-header {
                  background: #3dcd58;
                }
                .preview-sidebar {
                  background: #34d399;
                }
                .preview-content {
                  background: #ffffff;
                }
              }

              &.schneider-blue-preview {
                background: #e0f2fe;

                .preview-header {
                  background: #0ea5e9;
                }
                .preview-sidebar {
                  background: #38bdf8;
                }
                .preview-content {
                  background: #ffffff;
                }
              }

              &.high-contrast-preview {
                background: #000000;

                .preview-header {
                  background: #facc15;
                }
                .preview-sidebar {
                  background: #ffffff;
                }
                .preview-content {
                  background: #171717;
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

        .navigation-layout-section {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 2px solid var(--border-color);

          h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .subtitle {
            margin-bottom: 32px;
          }

          .layout-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-bottom: 24px;

            .layout-option {
              background: var(--surface-2);
              border: 2px solid var(--border-color);
              border-radius: 16px;
              padding: 24px;
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

              .layout-preview {
                width: 100%;
                height: 140px;
                border-radius: 12px;
                margin-bottom: 16px;
                position: relative;
                overflow: hidden;
                border: 1px solid var(--border-color);
                background: var(--bg-primary);

                &.sidebar-layout {
                  .preview-nav-side {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50px;
                    bottom: 0;
                    background: var(--primary-color);
                    opacity: 0.8;
                  }

                  .preview-content-area {
                    position: absolute;
                    top: 0;
                    left: 50px;
                    right: 0;
                    bottom: 0;

                    .preview-header-bar {
                      height: 30px;
                      background: var(--surface-2);
                      border-bottom: 1px solid var(--border-color);
                    }

                    .preview-main {
                      position: absolute;
                      top: 30px;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      background: var(--bg-secondary);
                    }
                  }
                }

                &.topbar-layout {
                  .preview-nav-top {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 40px;
                    background: var(--primary-color);
                    opacity: 0.8;
                    border-bottom: 2px solid var(--primary-color);
                  }

                  .preview-content-full {
                    position: absolute;
                    top: 40px;
                    left: 0;
                    right: 0;
                    bottom: 0;

                    .preview-main {
                      width: 100%;
                      height: 100%;
                      background: var(--bg-secondary);
                    }
                  }
                }
              }

              .layout-info {
                display: flex;
                flex-direction: column;
                gap: 8px;

                .layout-icon {
                  font-size: 1.8rem;
                }

                .layout-name {
                  font-size: 1.1rem;
                  font-weight: 600;
                  color: var(--text-primary);
                }

                .layout-desc {
                  font-size: 0.85rem;
                  color: var(--text-secondary);
                }
              }
            }
          }

          .current-layout {
            background: var(--surface-2);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            text-align: center;

            p {
              color: var(--text-secondary);
              margin: 0;

              strong {
                color: var(--primary-color);
                font-weight: 700;
              }
            }
          }
        }
      }
    `,
  ],
})
export class ThemeSelectorComponent {
  constructor(public themeService: ThemeService) {}
}
