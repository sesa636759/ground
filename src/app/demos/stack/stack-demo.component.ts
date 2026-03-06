import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';

import { DmStackPlaygroundComponent } from '../../playground/common/stack-playground/stack-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-stack-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmStackPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stack-demo.component.html',
  styleUrl: './stack-demo.component.scss',
})
export class DmStackDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'direction', name: 'Direction', icon: 'â†”ï¸', color: '#3b82f6' },
    { id: 'spacing', name: 'Spacing', icon: 'ðŸ“', color: '#10b981' },
    { id: 'overlap', name: 'Overlap', icon: 'å ', color: '#f59e0b' },
    { id: 'dividers', name: 'Dividers', icon: 'âž–', color: '#ef4444' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-stack direction="horizontal" spacing="12px" align="center">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</ui-stack>`;

  directionCode = `<!-- Horizontal -->
<ui-stack direction="horizontal">...</ui-stack>

<!-- Vertical -->
<ui-stack direction="vertical">...</ui-stack>`;

  spacingCode = `<!-- Large Spacing -->
<ui-stack spacing="32px">...</ui-stack>

<!-- Compact -->
<ui-stack spacing="4px">...</ui-stack>`;

  overlapCode = `<!-- Avatar Stack -->
<ui-stack overlap spacing="-12px">
  <div class="avatar">JD</div>
  <div class="avatar">AS</div>
  <div class="avatar">MK</div>
</ui-stack>`;

  dividersCode = `<ui-stack show-dividers spacing="24px">
  <div>Item A</div>
  <div>Item B</div>
  <div>Item C</div>
</ui-stack>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
