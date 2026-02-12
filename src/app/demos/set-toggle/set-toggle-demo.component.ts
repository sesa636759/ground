import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TogglePlaygroundComponent } from './components/toggle-playground/toggle-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-toggle-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TogglePlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-toggle-demo.component.html',
  styleUrl: './set-toggle-demo.component.scss',
})
export class SetToggleDemoComponent implements OnInit {
  notificationOptions = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Push' },
  ];

  featureOptions = [
    { value: 'auto-update', label: 'Auto Update' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'cloud-sync', label: 'Cloud Sync' },
  ];

  privacyOptions = [
    { value: 'profile-public', label: 'Public Profile' },
    { value: 'show-email', label: 'Show Email' },
    { value: 'show-activity', label: 'Show Activity' },
    { value: 'allow-messages', label: 'Allow Messages' },
    { value: 'search-indexing', label: 'Search Indexing' },
    { value: 'data-sharing', label: 'Data Sharing' },
  ];

  playgroundCode = `<app-toggle
  [(ngModel)]="enabled"
  label="Enable feature"
></app-toggle>`;

  ngOnInit() {}
}
