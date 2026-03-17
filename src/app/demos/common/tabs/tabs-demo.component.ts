import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmTabsPlaygroundComponent } from '../../../playground/common/tabs-playground/tabs-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-tabs-demo',

  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTabsPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs-demo.component.html',
  styleUrl: './tabs-demo.component.scss',
})
export class DmTabsDemoComponent {
  variants = [
    { id: 'styles', name: 'Visual Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'layouts', name: 'Orientations', icon: '📐', color: '#10b981' },
    { id: 'tab-stack', name: 'Tab Stack', icon: '📚', color: '#f59e0b' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<dui-tabs variant="default">
  <dui-tab label="Home" value="h"> Content </dui-tab>
  <dui-tab label="About" value="a"> Content </dui-tab>
</dui-tabs>`;

  stylesCode = `<!-- Pills Style -->
<dui-tabs variant="pills">...</dui-tabs>

<!-- Underline Style -->
<dui-tabs variant="underline">...</dui-tabs>

<!-- Enclosed Style -->
<dui-tabs variant="enclosed">...</dui-tabs>`;

  layoutsCode = `<!-- Vertical Alignment -->
<dui-tabs orientation="vertical">
  <dui-tab label="Menu 1">...</dui-tab>
  <dui-tab label="Menu 2">...</dui-tab>
</dui-tabs>

<!-- Center Aligned Tabs -->
<dui-tabs align="center">...</dui-tabs>`;

  tabStackCode = `<!-- Advanced Tab Stack -->
<app-tab-stack active-tab="t1" variant="pills">
  <app-tab label="Dashboard" value="t1" icon="fas fa-home">
    <div>Dashboard content</div>
  </app-tab>
  <app-tab label="Analytics" value="t2" icon="fas fa-chart-line">
    <div>Analytics content</div>
  </app-tab>
  <app-tab label="Settings" value="t3" icon="fas fa-cog">
    <div>Settings content</div>
  </app-tab>
</app-tab-stack>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
