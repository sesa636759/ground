import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-security-settings-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <h2>🔐 Security Settings</h2>
        <p>Manage your account security and privacy</p>
      </div>

      <div class="section-content">
        <div class="security-group">
          <h3>Password & Authentication</h3>

          <div class="form-group">
            <label for="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              [(ngModel)]="currentPassword"
              placeholder="Enter current password"
            />
          </div>

          <div class="form-group">
            <label for="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              [(ngModel)]="newPassword"
              placeholder="Enter new password"
            />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              [(ngModel)]="confirmPassword"
              placeholder="Confirm new password"
            />
          </div>

          <button class="btn-primary" (click)="changePassword()">Change Password</button>
        </div>

        <div class="security-group">
          <h3>Two-Factor Authentication</h3>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Enable 2FA</div>
              <div class="setting-description">Add an extra layer of security to your account</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="twoFactorEnabled()"
                (change)="twoFactorEnabled.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="security-group">
          <h3>Privacy Settings</h3>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Profile Visibility</div>
              <div class="setting-description">Make your profile visible to other users</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="profileVisibility()"
                (change)="profileVisibility.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Activity Status</div>
              <div class="setting-description">Show when you're online</div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="activityStatus()"
                (change)="activityStatus.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Search Engine Indexing</div>
              <div class="setting-description">
                Allow search engines to index your public profile
              </div>
            </div>
            <label class="toggle-switch">
              <input
                type="checkbox"
                [checked]="searchIndexing()"
                (change)="searchIndexing.set($any($event.target).checked)"
              />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="security-group">
          <h3>Active Sessions</h3>
          <div class="session-list">
            <div class="session-item" *ngFor="let session of activeSessions()">
              <div class="session-icon">💻</div>
              <div class="session-info">
                <div class="session-device">{{ session.device }}</div>
                <div class="session-details">{{ session.location }} • {{ session.lastActive }}</div>
              </div>
              <button class="btn-revoke" (click)="revokeSession(session.id)">Revoke</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
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

      .security-group {
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

      .form-group {
        margin-bottom: 16px;

        label {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        input {
          width: 100%;
          max-width: 400px;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background: var(--surface-base);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          }

          &::placeholder {
            color: var(--text-tertiary);
          }
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
            content: '';
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

      .btn-primary {
        padding: 10px 24px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.2s ease;
        border: none;
        background: var(--primary-color);
        color: white;
        margin-top: 8px;

        &:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }
      }

      .session-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .session-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        background: var(--surface-base);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        transition: all 0.2s ease;

        &:hover {
          border-color: var(--primary-color);
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);
        }
      }

      .session-icon {
        font-size: 2rem;
      }

      .session-info {
        flex: 1;

        .session-device {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .session-details {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
      }

      .btn-revoke {
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 500;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.2s ease;
        border: 1px solid var(--error-color);
        background: transparent;
        color: var(--error-color);

        &:hover {
          background: var(--error-color);
          color: white;
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
    { id: 1, device: 'Chrome on Windows', location: 'New York, USA', lastActive: 'Active now' },
    { id: 2, device: 'Safari on iPhone', location: 'Los Angeles, USA', lastActive: '2 hours ago' },
    { id: 3, device: 'Firefox on MacOS', location: 'San Francisco, USA', lastActive: '1 day ago' },
  ]);

  changePassword(): void {}

  revokeSession(id: number): void {
    this.activeSessions.set(this.activeSessions().filter((s) => s.id !== id));
  }
}
