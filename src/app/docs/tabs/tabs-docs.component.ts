import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-tabs-docs',
  standalone: true,
  imports: [CommonModule, PlaygroundEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs-docs.component.html',
  styleUrls: ['./tabs-docs.component.scss'],
})
export class TabsDocsComponent {
  tabsConfig = COMPONENT_CONFIGS['tabs'];

  basicItems = JSON.stringify([
    {
      id: '1',
      title: 'Account',
      icon: '👤',
      content:
        '<div style="padding: 20px;"><h3>User Profile</h3><p>Manage your account settings and preferences.</p></div>',
    },
    {
      id: '2',
      title: 'Security',
      icon: '🔒',
      content:
        '<div style="padding: 20px;"><h3>Security Settings</h3><p>Update your password and enable 2FA.</p></div>',
    },
    {
      id: '3',
      title: 'Notifications',
      icon: '🔔',
      content:
        '<div style="padding: 20px;"><h3>Notification Preferences</h3><p>Choose what you want to be notified about.</p></div>',
    },
  ]);

  variantItems = JSON.stringify([
    {
      id: 'music',
      title: 'Music',
      icon: '🎵',
      content:
        '<div style="padding: 24px;"><h2>Library</h2><p>Your curated playlists and albums.</p></div>',
    },
    {
      id: 'podcasts',
      title: 'Podcasts',
      icon: '🎙️',
      content:
        '<div style="padding: 24px;"><h2>Episodes</h2><p>Catch up on the latest discussions.</p></div>',
    },
    {
      id: 'live',
      title: 'Live',
      icon: '🔴',
      content:
        '<div style="padding: 24px;"><h2>Live Stream</h2><p>Currently broadcasting worldwide.</p></div>',
      badge: 3,
    },
  ]);

  verticalItems = JSON.stringify([
    {
      id: 'dash',
      title: 'Dashboard',
      icon: '📊',
      content: '<div style="padding: 20px;">Dashboard Content</div>',
    },
    {
      id: 'ana',
      title: 'Analytics',
      icon: '📈',
      content: '<div style="padding: 20px;">Analytics Content</div>',
    },
    {
      id: 'rep',
      title: 'Reports',
      icon: '📋',
      content: '<div style="padding: 20px;">Reports Content</div>',
    },
    {
      id: 'set',
      title: 'Settings',
      icon: '⚙️',
      content: '<div style="padding: 20px;">Settings Content</div>',
    },
  ]);

  badgeItems = JSON.stringify([
    {
      id: 'inbox',
      title: 'Inbox',
      icon: '📥',
      content: '<div style="padding: 20px;">Inbox Items</div>',
      badge: 12,
      badgeVariant: 'primary',
    },
    {
      id: 'alerts',
      title: 'Alerts',
      icon: '⚠️',
      content: '<div style="padding: 20px;">Important Alerts</div>',
      badge: 3,
      badgeVariant: 'danger',
    },
    {
      id: 'updates',
      title: 'Updates',
      icon: '🔄',
      content: '<div style="padding: 20px;">Recent Updates</div>',
      badge: 5,
      badgeVariant: 'success',
    },
  ]);
}
