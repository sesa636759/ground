import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-settings-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings-section">
      <div class="section-header">
        <h2>👤 Profile Settings</h2>
        <p>Manage your personal information and preferences</p>
      </div>

      <div class="section-content">
        <div class="form-group">
          <label for="displayName">Display Name</label>
          <input
            type="text"
            id="displayName"
            [(ngModel)]="displayName"
            placeholder="Enter your display name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" [(ngModel)]="email" placeholder="your.email@example.com" />
        </div>

        <div class="form-group">
          <label for="bio">Bio</label>
          <textarea
            id="bio"
            [(ngModel)]="bio"
            placeholder="Tell us about yourself"
            rows="4"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="language">Language</label>
          <select id="language" [(ngModel)]="language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
          </select>
        </div>

        <div class="form-group">
          <label for="timezone">Timezone</label>
          <select id="timezone" [(ngModel)]="timezone">
            <option value="UTC">UTC</option>
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
          </select>
        </div>

        <div class="form-actions">
          <button class="btn-secondary" (click)="cancel()">Cancel</button>
          <button class="btn-primary" (click)="save()">Save Changes</button>
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

      .form-group {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 24px;
        }

        label {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        input,
        textarea,
        select {
          width: 100%;
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

        textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        select {
          cursor: pointer;
        }
      }

      .form-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        padding-top: 8px;

        button {
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;

          &.btn-primary {
            background: var(--primary-color);
            color: white;

            &:hover {
              background: var(--primary-hover);
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
            }
          }

          &.btn-secondary {
            background: var(--surface-sunken);
            color: var(--text-primary);
            border: 1px solid var(--border-color);

            &:hover {
              background: var(--surface-raised);
            }
          }
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
