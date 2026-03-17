import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'app-profile-settings-section',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <div class="title-row">
          <span class="section-icon">👤</span>
          <h2>Profile Settings</h2>
        </div>
        <p>Update your personal information and how it appears to others</p>
      </div>

      <div class="section-content">
        <div class="settings-card profile-card">
          <div class="avatar-edit-section">
            <div class="avatar-wrapper">
              <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" />
              <dui-button
                class="change-avatar-btn"
                variant="ghost"
                size="sm"
                style="padding: 4px 8px; min-width: 0;"
              >
                <dui-icon name="camera" library="lucide" size="16px"></dui-icon>
              </dui-button>
            </div>
            <div class="avatar-info">
              <h3>Profile Picture</h3>
              <p>JPG, GIF or PNG. Max size of 800K</p>
              <div class="avatar-actions">
                <dui-button label="Upload New" variant="primary" size="sm"></dui-button>
                <dui-button label="Remove" variant="secondary" size="sm"></dui-button>
              </div>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label for="displayName">Display Name</label>
              <div class="input-wrapper">
                <dui-icon name="user" library="lucide" size="18px" class="input-icon"></dui-icon>
                <dui-input
                  type="text"
                  id="displayName"
                  [(ngModel)]="displayName"
                  placeholder="Enter your display name"
                ></dui-input>
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <div class="input-wrapper">
                <dui-icon name="mail" library="lucide" size="18px" class="input-icon"></dui-icon>
                <dui-input
                  type="email"
                  id="email"
                  [(ngModel)]="email"
                  placeholder="your.email@example.com"
                ></dui-input>
              </div>
            </div>

            <div class="form-group full-width">
              <label for="bio">Bio</label>
              <textarea
                id="bio"
                [(ngModel)]="bio"
                placeholder="Tell us about yourself..."
                rows="4"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="language">Language</label>
              <select id="language" [(ngModel)]="language">
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Spanish</option>
                <option value="fr">🇫🇷 French</option>
                <option value="de">🇩🇪 German</option>
                <option value="ja">🇯🇵 Japanese</option>
              </select>
            </div>

            <div class="form-group">
              <label for="timezone">Timezone</label>
              <select id="timezone" [(ngModel)]="timezone">
                <option value="UTC">UTC (Universal Time)</option>
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
              </select>
            </div>
          </div>

          <div class="form-actions">
            <dui-button label="Discard" variant="secondary" (click)="cancel()"></dui-button>
            <dui-button label="Save Changes" variant="primary" (click)="save()"></dui-button>
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

      .settings-card {
        background: var(--surface-raised);
        border-radius: 20px;
        border: 1px solid var(--border-subtle);
        padding: 32px;
        box-shadow: 0 4px 20px rgba(0, 0, 10, 0.02);
      }

      .avatar-edit-section {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-bottom: 40px;
        padding-bottom: 40px;
        border-bottom: 1px solid var(--border-subtle);

        .avatar-wrapper {
          position: relative;
          width: 100px;
          height: 100px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--surface-base);
            box-shadow: 0 0 0 1px var(--border-subtle);
          }

          .change-avatar-btn {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            border: 3px solid var(--surface-raised);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background: var(--primary-hover);
              transform: scale(1.1);
            }
          }
        }

        .avatar-info {
          h3 {
            margin: 0 0 4px 0;
            font-size: 1.125rem;
            font-weight: 700;
          }
          p {
            margin: 0 0 16px 0;
            font-size: 0.875rem;
            color: var(--text-secondary);
          }
          .avatar-actions {
            display: flex;
            gap: 12px;
          }
        }
      }

      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        margin-bottom: 32px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &.full-width {
          grid-column: span 2;
        }

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
            padding-left: 42px;
          }
        }

        input,
        textarea,
        select {
          width: 100%;
          padding: 12px 16px;
          background: var(--surface-base);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

          &:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
          }

          &::placeholder {
            color: var(--text-tertiary);
          }
        }

        textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.5;
        }

        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 40px;
        }
      }

      .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        padding-top: 32px;
        border-top: 1px solid var(--border-subtle);
      }

      @media (max-width: 768px) {
        .form-grid {
          grid-template-columns: 1fr;
        }
        .form-group.full-width {
          grid-column: auto;
        }
        .avatar-edit-section {
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
      }
    `,
  ],
})
export class ProfileSettingsSectionComponent {
  displayName = signal('John Doe');
  email = signal('john.doe@example.com');
  bio = signal('Full-stack developer passionate about creating beautiful user experiences.');
  language = signal('en');
  timezone = signal('America/New_York');

  save(): void {}
  cancel(): void {}
}
