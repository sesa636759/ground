import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';

import { SwitchPlaygroundComponent } from './components/switch-playground/switch-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-switch-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    SwitchPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-switch-demo.component.html',
  styleUrl: './app-switch-demo.component.scss',
})
export class AppSwitchDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'colors', name: 'Colors', icon: '🌈', color: '#3b82f6' },
    { id: 'sizes', name: 'Sizes', icon: '📏', color: '#10b981' },
    { id: 'icons', name: 'Icons', icon: '🎨', color: '#f59e0b' },
    { id: 'labels', name: 'Labels', icon: '📝', color: '#ec4899' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-switch label="Enable Feature" checked variant="primary"></ui-switch>`;

  colorsCode = `<ui-switch label="Primary" variant="primary" checked></ui-switch>
<ui-switch label="Success" variant="success" checked></ui-switch>
<ui-switch label="Warning" variant="warning" checked></ui-switch>
<ui-switch label="Danger" variant="danger" checked></ui-switch>
<ui-switch label="Info" variant="info" checked></ui-switch>`;

  sizesCode = `<ui-switch label="Extra Small" size="xs"></ui-switch>
<ui-switch label="Small" size="sm"></ui-switch>
<ui-switch label="Medium" size="md"></ui-switch>
<ui-switch label="Large" size="lg"></ui-switch>
<ui-switch label="Extra Large" size="xl"></ui-switch>`;

  iconsCode = `<ui-switch icon-on="🌙" icon-off="☀️" checked></ui-switch>
<ui-switch icon-on="🔊" icon-off="🔇" checked></ui-switch>
<ui-switch show-default-icons checked></ui-switch>
<ui-switch label="Bluetooth" icon-on="🔵" icon-off="⚪"></ui-switch>`;

  labelsCode = `<ui-switch label="Label Right (Default)"></ui-switch>
<ui-switch label="Label Left" label-position="left"></ui-switch>
<ui-switch label="Required Field" required></ui-switch>
<ui-switch label="Loading State" loading></ui-switch>
<ui-switch label="Disabled state" disabled></ui-switch>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
