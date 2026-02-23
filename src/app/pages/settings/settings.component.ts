import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSettingsSectionComponent } from './sections/theme-settings.component';
import { ProfileSettingsSectionComponent } from './sections/profile-settings.component';
import { NotificationSettingsSectionComponent } from './sections/notification-settings.component';
import { SecuritySettingsSectionComponent } from './sections/security-settings.component';
import { PreferencesSettingsSectionComponent } from './sections/preferences-settings.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    ThemeSettingsSectionComponent,
    ProfileSettingsSectionComponent,
    NotificationSettingsSectionComponent,
    SecuritySettingsSectionComponent,
    PreferencesSettingsSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="settings-container">
      <header class="settings-header">
        <div class="header-content">
          <div class="title-with-icon">
            <span class="header-icon">⚙️</span>
            <h1>Settings</h1>
          </div>
          <p>Customize your experience and manage your account preferences</p>
        </div>
        <div class="header-decoration"></div>
      </header>

      <div class="settings-body">
        <ui-tabs
          [items]="settingsTabs"
          variant="pill"
          size="lg"
          [iconLibrary]="'lucide'"
          class="settings-tabs"
        >
          <div slot="theme" class="tab-panel">
            <app-theme-settings-section></app-theme-settings-section>
          </div>

          <div slot="profile" class="tab-panel">
            <app-profile-settings-section></app-profile-settings-section>
          </div>

          <div slot="notifications" class="tab-panel">
            <app-notification-settings-section></app-notification-settings-section>
          </div>

          <div slot="security" class="tab-panel">
            <app-security-settings-section></app-security-settings-section>
          </div>

          <div slot="preferences" class="tab-panel">
            <app-preferences-settings-section></app-preferences-settings-section>
          </div>
        </ui-tabs>
      </div>
    </div>
  `,
  styles: [
    `
      .settings-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: var(--surface-base);
        color: var(--text-primary);
        font-family:
          'Inter',
          system-ui,
          -apple-system,
          sans-serif;
      }

      .settings-header {
        position: relative;
        padding: 48px 60px;
        background: linear-gradient(
          135deg,
          rgba(16, 185, 129, 0.05) 0%,
          rgba(5, 150, 105, 0.05) 100%
        );
        border-bottom: 1px solid var(--border-subtle);
        overflow: hidden;

        .header-content {
          position: relative;
          z-index: 2;
        }

        .title-with-icon {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .header-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          margin: 0;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          color: var(--text-secondary);
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0;
          line-height: 1.6;
        }

        .header-decoration {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }
      }

      .settings-body {
        flex: 1;
        padding: 40px 60px;
        overflow-y: auto;
      }

      .settings-tabs {
        height: 100%;
        --tabs-header-margin: 0 0 32px 0;

        ::part(tabs-header) {
          background: var(--surface-raised);
          padding: 8px;
          border-radius: 16px;
          border: 1px solid var(--border-subtle);
          display: inline-flex;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        ::part(tab) {
          padding: 10px 24px;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 10px;
          color: var(--text-secondary);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 8px;

          &:hover {
            color: var(--text-primary);
            background: var(--surface-base);
          }
        }

        ::part(tab-active) {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);

          &:hover {
            background: var(--primary-hover);
            color: white;
          }
        }
      }

      .tab-panel {
        animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .settings-header {
          padding: 32px 24px;
          h1 {
            font-size: 2rem;
          }
        }
        .settings-body {
          padding: 24px;
        }
      }
    `,
  ],
})
export class SettingsComponent {
  settingsTabs = [
    { id: 'theme', title: 'Theme', icon: 'palette', iconLibrary: 'lucide', useSlot: true },
    { id: 'profile', title: 'Profile', icon: 'user', iconLibrary: 'lucide', useSlot: true },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: 'bell',
      iconLibrary: 'lucide',
      useSlot: true,
    },
    { id: 'security', title: 'Security', icon: 'shield', iconLibrary: 'lucide', useSlot: true },
    {
      id: 'preferences',
      title: 'Preferences',
      icon: 'settings',
      iconLibrary: 'lucide',
      useSlot: true,
    },
  ];
}
