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
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
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
