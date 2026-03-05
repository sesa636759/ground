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

  

  nestedCode = `<!-- Right-click on the target area to open the menu -->
<div id="nested-target" style="padding:40px;border:2px dashed #ccc;text-align:center">
  Right-click here to open the nested menu
</div>
<ui-smart-context-menu
  target="#nested-target"
  icon-library="lucide"
  [items]="nestedItems"
></ui-smart-context-menu>`;

  iconsCode = `<ui-smart-context-menu target="#icons-target" icon-library="lucide" [items]="iconItems"></ui-smart-context-menu>`;

  separatorsCode = `<ui-smart-context-menu target="#sep-target" icon-library="lucide" [items]="separatorItems"></ui-smart-context-menu>`;

  disabledCode = `<ui-smart-context-menu target="#disabled-target" icon-library="lucide" [items]="disabledItems"></ui-smart-context-menu>`;

  nestedItems = JSON.stringify([
    {
      label: 'File',
      icon: 'folder',
      submenu: [
        { label: 'New File', icon: 'file-plus' },
        { label: 'Open', icon: 'folder-open' },
        {
          label: 'Recent',
          icon: 'clock',
          submenu: [
            { label: 'Project Alpha' },
            { label: 'Project Beta' },
            { label: 'Dashboard v2' },
          ],
        },
      ],
    },
    {
      label: 'Edit',
      icon: 'edit',
      submenu: [
        { label: 'Cut', icon: 'scissors' },
        { label: 'Copy', icon: 'copy' },
        { label: 'Paste', icon: 'clipboard' },
      ],
    },
    {
      label: 'View',
      icon: 'eye',
      submenu: [
        { label: 'Zoom In', icon: 'zoom-in' },
        { label: 'Zoom Out', icon: 'zoom-out' },
      ],
    },
  ]);

  iconItems = JSON.stringify([
    { label: 'Dashboard', icon: 'layout-dashboard' },
    { label: 'Settings', icon: 'settings' },
    { label: 'Profile', icon: 'user' },
    { label: 'Logout', icon: 'log-out' },
  ]);

  separatorItems = JSON.stringify([
    { label: 'Cut', icon: 'scissors' },
    { label: 'Copy', icon: 'copy' },
    { divider: true },
    { label: 'Paste', icon: 'clipboard' },
    { divider: true },
    { label: 'Select All', icon: 'check-square' },
  ]);

  disabledItems = JSON.stringify([
    { label: 'Active Action', icon: 'check' },
    { label: 'Disabled Action', icon: 'ban', disabled: true },
    { label: 'Another Active', icon: 'star' },
  ]);
}
