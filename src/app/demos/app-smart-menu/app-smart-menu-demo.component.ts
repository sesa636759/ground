import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmartMenuPlaygroundComponent } from './components/smart-menu-playground/smart-menu-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-smart-menu-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SmartMenuPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-smart-menu-demo.component.html',
  styleUrl: './app-smart-menu-demo.component.scss',
})
export class AppSmartMenuDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'nested', title: 'Nested Menus', icon: '🗂️' },
    { id: 'icons', title: 'With Icons', icon: '🎯' },
    { id: 'separators', title: 'Separators', icon: '➖' },
    { id: 'disabled', title: 'Disabled Items', icon: '🚫' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  nestedCode = `const menuModel = [
  {
    label: 'File',
    items: [
      { label: 'New', command: () => {} },
      { label: 'Open', command: () => {} },
      {
        label: 'Recent',
        items: [
          { label: 'Project 1' },
          { label: 'Project 2' }
        ]
      }
    ]
  }
];
<ui-smart-menu [model]="menuModel"></ui-smart-menu>`;

  iconsCode = `const items = [
  { label: 'Dashboard', icon: 'fas fa-chart-line' },
  { label: 'Settings',  icon: 'fas fa-cog' },
  { label: 'Profile',   icon: 'fas fa-user' },
];`;

  separatorsCode = `const items = [
  { label: 'Cut',   icon: 'fas fa-cut' },
  { label: 'Copy',  icon: 'fas fa-copy' },
  { separator: true },
  { label: 'Paste', icon: 'fas fa-paste' },
];`;

  disabledCode = `const items = [
  { label: 'Active Item' },
  { label: 'Disabled Item', disabled: true },
];`;

  nestedItems = JSON.stringify([
    { label: 'File', items: [{ label: 'New' }, { label: 'Open' }, { label: 'Save' }] },
    { label: 'Edit', items: [{ label: 'Cut' }, { label: 'Copy' }, { label: 'Paste' }] },
    { label: 'View', items: [{ label: 'Zoom In' }, { label: 'Zoom Out' }] },
  ]);

  iconItems = JSON.stringify([
    { label: 'Dashboard', icon: 'fas fa-chart-line' },
    { label: 'Settings', icon: 'fas fa-cog' },
    { label: 'Profile', icon: 'fas fa-user' },
    { label: 'Logout', icon: 'fas fa-sign-out-alt' },
  ]);

  separatorItems = JSON.stringify([
    { label: 'Cut', icon: 'fas fa-cut' },
    { label: 'Copy', icon: 'fas fa-copy' },
    { separator: true },
    { label: 'Paste', icon: 'fas fa-paste' },
    { separator: true },
    { label: 'Select All', icon: 'fas fa-object-group' },
  ]);

  disabledItems = JSON.stringify([
    { label: 'Active Item', icon: 'fas fa-check' },
    { label: 'Disabled Item', disabled: true, icon: 'fas fa-ban' },
    { label: 'Another Active', icon: 'fas fa-star' },
  ]);
}
