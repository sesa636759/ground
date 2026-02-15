import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-settings-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <h2>🔔 Notification Settings</h2>
        <p>Control how and when you receive notifications</p>
      </div>
      
      <div class="section-content">
        <div class="notification-group">
          <h3>Email Notifications</h3>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Product Updates</div>
              <div class="setting-description">Receive updates about new features and improvements</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" [checked]="emailProductUpdates()" (change)="emailProductUpdates.set($any($event.target).checked)" />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Security Alerts</div>
              <div class="setting-description">Important security notifications about your account</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" [checked]="emailSecurityAlerts()" (change)="emailSecurityAlerts.set($any($event.target).checked)" />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Marketing Emails</div>
              <div class="setting-description">Promotional offers and newsletter</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" [checked]="emailMarketing()" (change)="emailMarketing.set($any($event.target).checked)" />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="notification-group">
          <h3>Push Notifications</h3>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Browser Notifications</div>
              <div class="setting-description">Show desktop notifications in your browser</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" [checked]="pushBrowser()" (change)="pushBrowser.set($any($event.target).checked)" />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Important Updates Only</div>
              <div class="setting-description">Only receive notifications for critical updates</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" [checked]="pushImportantOnly()" (change)="pushImportantOnly.set($any($event.target).checked)" />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="notification-group">
          <h3>In-App Notifications</h3>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Activity Notifications</div>
              <div class="setting-description">Notifications about your account activity</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" [checked]="inAppActivity()" (change)="inAppActivity.set($any($event.target).checked)" />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">System Messages</div>
              <div class="setting-description">System maintenance and service updates</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" [checked]="inAppSystem()" (change)="inAppSystem.set($any($event.target).checked)" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
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

    .notification-group {
      margin-bottom: 32px;

      &:last-child {
        margin-bottom: 0;
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
          content: "";
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
  `]
})
export class NotificationSettingsSectionComponent {
  // Email notifications
  emailProductUpdates = signal(true);
  emailSecurityAlerts = signal(true);
  emailMarketing = signal(false);

  // Push notifications
  pushBrowser = signal(true);
  pushImportantOnly = signal(false);

  // In-app notifications
  inAppActivity = signal(true);
  inAppSystem = signal(true);
}
