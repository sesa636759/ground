import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-security-settings-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <div class="title-row">
          <span class="section-icon">🛡️</span>
          <h2>Security Settings</h2>
        </div>
        <p>Take control of your account security and monitor active sessions</p>
      </div>

      <div class="section-content grid-layout">
        <!-- Password Section -->
        <div class="settings-card">
          <div class="card-header">
            <h3>Password & Authentication</h3>
            <p>Update your password to keep your account secure</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="currentPassword">Current Password</label>
              <div class="input-wrapper">
                <ui-icon name="lock" library="lucide" size="18px" class="input-icon"></ui-icon>
                <ui-input
                  type="password"
                  id="currentPassword"
                  [(ngModel)]="currentPassword"
                  placeholder="••••••••"
                ></ui-input>
              </div>
            </div>

            <div class="form-group">
              <label for="newPassword">New Password</label>
              <div class="input-wrapper">
                <ui-icon name="key-round" library="lucide" size="18px" class="input-icon"></ui-icon>
                <ui-input
                  type="password"
                  id="newPassword"
                  [(ngModel)]="newPassword"
                  placeholder="New password"
                ></ui-input>
              </div>
            </div>

            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <div class="input-wrapper">
                <ui-icon
                  name="check-circle"
                  library="lucide"
                  size="18px"
                  class="input-icon"
                ></ui-icon>
                <ui-input
                  type="password"
                  id="confirmPassword"
                  [(ngModel)]="confirmPassword"
                  placeholder="Confirm new password"
                ></ui-input>
              </div>
            </div>

            <div class="form-actions-inline">
              <ui-button
                label="Change Password"
                variant="primary"
                (click)="changePassword()"
              ></ui-button>
            </div>
          </div>
        </div>

        <!-- Security Features -->
        <div class="settings-card">
          <div class="card-header">
            <h3>Enhanced Protection</h3>
            <p>Additional layers of security for your peace of mind</p>
          </div>
          <div class="card-body">
            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Two-Factor Authentication (2FA)</span>
                <span class="desc">A verification code will be required during login</span>
              </div>
              <ui-switch
                [checked]="twoFactorEnabled()"
                variant="success"
                (switchChange)="twoFactorEnabled.set($any($event).detail.checked)"
              ></ui-switch>
            </div>

            <div role="separator" class="row-divider"></div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Profile Privacy</span>
                <span class="desc">Control who can see your profile and activity</span>
              </div>
              <ui-switch
                [checked]="profileVisibility()"
                variant="primary"
                (switchChange)="profileVisibility.set($any($event).detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Online Status</span>
                <span class="desc">Show your active status to your connections</span>
              </div>
              <ui-switch
                [checked]="activityStatus()"
                variant="primary"
                (switchChange)="activityStatus.set($any($event).detail.checked)"
              ></ui-switch>
            </div>

            <div class="setting-row">
              <div class="setting-main">
                <span class="label">Search Indexing</span>
                <span class="desc">Allow search engines to index your public content</span>
              </div>
              <ui-switch
                [checked]="searchIndexing()"
                variant="warning"
                (switchChange)="searchIndexing.set($any($event).detail.checked)"
              ></ui-switch>
            </div>
          </div>
        </div>

        <!-- Active Sessions -->
        <div class="settings-card full-width">
          <div class="card-header header-with-action">
            <div class="header-main">
              <h3>Active Sessions</h3>
              <p>Where you're currently logged in across all devices</p>
            </div>
            <ui-button
              label="Log out of all other sessions"
              variant="secondary"
              size="sm"
              icon="log-out"
              iconLibrary="lucide"
            ></ui-button>
          </div>
          <div class="card-body">
            <div class="session-list">
              <div class="session-item" *ngFor="let session of activeSessions()">
                <div
                  class="session-icon-container"
                  [class.current]="session.lastActive === 'Active now'"
                >
                  <ui-icon
                    [name]="session.device.includes('iPhone') ? 'smartphone' : 'monitor'"
                    library="lucide"
                    size="24px"
                  ></ui-icon>
                </div>
                <div class="session-details">
                  <div class="session-device">
                    {{ session.device }}
                    <span class="current-badge" *ngIf="session.lastActive === 'Active now'"
                      >This device</span
                    >
                  </div>
                  <div class="session-meta">
                    <span class="location">{{ session.location }}</span>
                    <span class="dot">•</span>
                    <span class="time">{{ session.lastActive }}</span>
                  </div>
                </div>
                <ui-button
                  label="Revoke"
                  variant="danger"
                  size="sm"
                  outline
                  (click)="revokeSession(session.id)"
                  *ngIf="session.lastActive !== 'Active now'"
                ></ui-button>
              </div>
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

        &.header-with-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

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
        padding: 20px 28px;
      }

      .form-group {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;

          .input-icon {
            position: absolute;
            left: 14px;
            color: var(--text-tertiary);
          }

          input {
            width: 100%;
            padding: 12px 16px 12px 42px;
            background: var(--surface-base);
            border: 1px solid var(--border-subtle);
            border-radius: 12px;
            color: var(--text-primary);
            font-size: 0.95rem;
            transition: all 0.2s ease;

            &:focus {
              outline: none;
              border-color: var(--primary-color);
              box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
            }
          }
        }
      }

      .form-actions-inline {
        padding-top: 8px;
        display: flex;
        justify-content: flex-end;
      }

      .setting-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;

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
      }

      .row-divider {
        height: 1px;
        background: var(--border-subtle);
        margin: 4px 0;
      }

      .session-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .session-item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 16px;
        background: var(--surface-base);
        border: 1px solid var(--border-subtle);
        border-radius: 16px;
        transition: all 0.2s ease;

        &:hover {
          border-color: var(--primary-color);
          background: rgba(var(--primary-rgb), 0.01);
        }

        .session-icon-container {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--surface-sunken);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);

          &.current {
            background: rgba(16, 185, 129, 0.1);
            color: var(--primary-color);
          }
        }

        .session-details {
          flex: 1;

          .session-device {
            font-weight: 700;
            color: var(--text-primary);
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 8px;

            .current-badge {
              font-size: 0.625rem;
              text-transform: uppercase;
              padding: 2px 8px;
              background: var(--primary-color);
              color: white;
              border-radius: 10px;
              letter-spacing: 0.05em;
            }
          }

          .session-meta {
            color: var(--text-secondary);
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            gap: 6px;

            .dot {
              font-size: 1.2rem;
              line-height: 1;
              color: var(--text-tertiary);
            }
          }
        }
      }

      @media (max-width: 1024px) {
        .grid-layout {
          grid-template-columns: 1fr;
        }
        .settings-card.full-width {
          grid-column: auto;
        }
        .card-header.header-with-action {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `,
  ],
})
export class SecuritySettingsSectionComponent {
  currentPassword = signal('');
  newPassword = signal('');
  confirmPassword = signal('');

  twoFactorEnabled = signal(false);
  profileVisibility = signal(true);
  activityStatus = signal(true);
  searchIndexing = signal(false);

  activeSessions = signal([
    { id: 1, device: 'Chrome on Windows 11', location: 'New York, USA', lastActive: 'Active now' },
    {
      id: 2,
      device: 'Safari on iPhone 15',
      location: 'Los Angeles, USA',
      lastActive: '2 hours ago',
    },
    {
      id: 3,
      device: 'Firefox on MacOS Sonoma',
      location: 'San Francisco, USA',
      lastActive: '1 day ago',
    },
  ]);

  changePassword(): void {}

  revokeSession(id: number): void {
    this.activeSessions.set(this.activeSessions().filter((s) => s.id !== id));
  }
}
