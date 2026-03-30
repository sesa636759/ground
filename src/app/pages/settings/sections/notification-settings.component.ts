import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-settings-section',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <div class="title-row">
          <span class="section-icon">🔔</span>
          <h2>Notification Settings</h2>
        </div>
        <p>Manage how you want to be notified about activity on your account</p>
      </div>

      <div class="section-content grid-layout">
        <!-- Email Group -->
        <div class="settings-card">
          <div class="card-header">
            <h3>Email Notifications</h3>
            <p>We'll send these to your primary email address</p>
          </div>
          <div class="settings-list">
            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Product Updates</span>
                <span class="desc">New features, improvements, and bug fixes</span>
              </div>
              <ui-switch
                [checked]="emailProductUpdates()"
                variant="success"
                (switchChange)="emailProductUpdates.set($any($event).detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Security Alerts</span>
                <span class="desc">Account logins, password changes, and security tips</span>
              </div>
              <ui-switch
                [checked]="emailSecurityAlerts()"
                variant="success"
                (switchChange)="emailSecurityAlerts.set($any($event).detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Marketing Discovery</span>
                <span class="desc">Personalized offers, newsletters, and surveys</span>
              </div>
              <ui-switch
                [checked]="emailMarketing()"
                variant="success"
                (switchChange)="emailMarketing.set($any($event).detail.checked)"
              ></ui-switch>
            </div>
          </div>
        </div>

        <!-- Push Group -->
        <div class="settings-card">
          <div class="card-header">
            <h3>Push & Browser</h3>
            <p>Real-time alerts via browser and desktop</p>
          </div>
          <div class="settings-list">
            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Browser Notifications</span>
                <span class="desc">Show desktop notifications while you're active</span>
              </div>
              <ui-switch
                [checked]="pushBrowser()"
                variant="primary"
                (switchChange)="pushBrowser.set($any($event).detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Focus Mode</span>
                <span class="desc">Only receive notifications for critical system updates</span>
              </div>
              <ui-switch
                [checked]="pushImportantOnly()"
                variant="primary"
                (switchChange)="pushImportantOnly.set($any($event).detail.checked)"
              ></ui-switch>
            </div>
          </div>
        </div>

        <!-- In-App Group -->
        <div class="settings-card full-width">
          <div class="card-header">
            <h3>In-App Notifications</h3>
            <p>Alerts shown within the application interface</p>
          </div>
          <div class="settings-list grid-inner">
            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Activity Feed</span>
                <span class="desc">Likes, comments, and mentions on your posts</span>
              </div>
              <ui-switch
                [checked]="inAppActivity()"
                variant="info"
                (switchChange)="inAppActivity.set($any($event).detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">System Maintenance</span>
                <span class="desc">Scheduled maintenance and service health alerts</span>
              </div>
              <ui-switch
                [checked]="inAppSystem()"
                variant="info"
                (switchChange)="inAppSystem.set($any($event).detail.checked)"
              ></ui-switch>
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

      .grid-layout {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      .settings-card {
        background: var(--surface-raised);
        border-radius: 20px;
        border: 1px solid var(--border-subtle);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 20px rgba(0, 0, 10, 0.02);
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 10, 0.04);
          border-color: var(--primary-low);
        }

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

      .settings-list {
        padding: 12px 28px;

        &.grid-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 40px;
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

      @media (max-width: 1024px) {
        .grid-layout {
          grid-template-columns: 1fr;
        }
        .settings-card.full-width {
          grid-column: auto;
        }
        .settings-list.grid-inner {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class NotificationSettingsSectionComponent {
  emailProductUpdates = signal(true);
  emailSecurityAlerts = signal(true);
  emailMarketing = signal(false);
  pushBrowser = signal(true);
  pushImportantOnly = signal(false);
  inAppActivity = signal(true);
  inAppSystem = signal(true);
}
