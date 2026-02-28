import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarPlaygroundComponent } from './components/top-bar-playground/top-bar-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-top-bar-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TopBarPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-top-bar-demo.component.html',
  styleUrl: './app-top-bar-demo.component.scss',
})
export class AppTopBarDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'layouts', name: 'Layouts', icon: '📐', color: '#3b82f6' },
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
  <div slot="center"><app-input type="search" placeholder="Search..." /></div>
  <div slot="end">Actions</div>
</ui-top-bar>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
