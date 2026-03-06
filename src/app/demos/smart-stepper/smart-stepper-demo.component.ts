import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';

import { SmartStepperPlaygroundComponent } from './components/smart-stepper-playground/smart-stepper-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-smart-stepper-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    SmartStepperPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-stepper-demo.component.html',
  styleUrl: './smart-stepper-demo.component.scss',
})
export class DmSmartStepperDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'themes', name: 'Themes', icon: 'ðŸŽ¨', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-smart-stepper orientation="horizontal">
  <ui-smart-step label="Profile" value="1">...</ui-smart-step>
  <ui-smart-step label="Verify" value="2">...</ui-smart-step>
</ui-smart-stepper>`;

  themesCode = `<!-- Compact Theme -->
<ui-smart-stepper theme="compact" [model]="steps"></ui-smart-stepper>

<!-- Vertical Orientation -->
<ui-smart-stepper orientation="vertical" [model]="steps"></ui-smart-stepper>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

