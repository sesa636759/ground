import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSettingsSectionComponent } from './sections/theme-settings.component';
import { ProfileSettingsSectionComponent } from './sections/profile-settings.component';
import { NotificationSettingsSectionComponent } from './sections/notification-settings.component';
import { SecuritySettingsSectionComponent } from './sections/security-settings.component';
import { PreferencesSettingsSectionComponent } from './sections/preferences-settings.component';

@Component({
  selector: 'app-theme-settings',
  standalone: true,
  imports: [
    CommonModule,
    ThemeSettingsSectionComponent,
    ProfileSettingsSectionComponent,
    NotificationSettingsSectionComponent,
    SecuritySettingsSectionComponent,
    PreferencesSettingsSectionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="settings-container">
      <header class="settings-header">
        <h1>⚙️ Settings</h1>
        <p>Customize your experience and manage your account</p>
      </header>

      <div class="settings-body">
        <ui-tabs variant="pills" align="start" class="settings-tabs">
          <ui-tab label="Theme" icon="🎨">
            <app-theme-settings-section></app-theme-settings-section>
          </ui-tab>

          <ui-tab label="Profile" icon="👤">
            <app-profile-settings-section></app-profile-settings-section>
          </ui-tab>

          <ui-tab label="Notifications" icon="🔔">
            <app-notification-settings-section></app-notification-settings-section>
          </ui-tab>

          <ui-tab label="Security" icon="🔐">
            <app-security-settings-section></app-security-settings-section>
          </ui-tab>

          <ui-tab label="Preferences" icon="⚙️">
            <app-preferences-settings-section></app-preferences-settings-section>
          </ui-tab>
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

      .settings-body {
        flex: 1;
        overflow: hidden;
        padding: 24px 40px;
      }

      .settings-tabs {
        height: 100%;
        
        ::ng-deep ui-tab {
          height: 100%;
          overflow-y: auto;
        }
      }

      /* Custom tab styling */
      :host ::part(tabs-container) {
        background: var(--surface-raised);
        border-radius: 12px;
        padding: 8px;
        border: 1px solid var(--border-color);
        margin-bottom: 20px;
      }

      :host ::part(tab) {
        padding: 12px 20px;
        font-weight: 600;
        border-radius: 8px;
        transition: all 0.2s ease;
        
        &:hover {
          background: var(--surface-base);
        }
      }

      :host ::part(tab-active) {
        background: var(--primary-color);
        color: white;
        
        &:hover {
          background: var(--primary-hover);
        }
      }

      :host ::part(panels-container) {
        background: transparent;
        padding: 0;
      }

      :host ::part(panel) {
        height: 100%;
        overflow-y: auto;
        padding: 0;
      }
    `,
  ],
})
export class ThemeSettingsComponent {}
