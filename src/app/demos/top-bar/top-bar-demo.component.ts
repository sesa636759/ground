import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { DmTopBarPlaygroundComponent } from '../../playground/common/top-bar-playground/top-bar-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-top-bar-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTopBarPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './top-bar-demo.component.html',
  styleUrl: './top-bar-demo.component.scss',
})
export class DmTopBarDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'layouts', name: 'Layouts', icon: 'ðŸ“', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-top-bar sticky>
  <div slot="start">Logo</div>
  <div slot="end">User Menu</div>
</ui-top-bar>`;

  layoutsCode = `<!-- With Search Bar -->
<ui-top-bar>
  <div slot="start">Brand</div>
  <div slot="center"><ui-input type="search" placeholder="Search..." /></div>
  <div slot="end">Actions</div>
</ui-top-bar>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
