import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavBarPlaygroundComponent } from './components/nav-bar-playground/nav-bar-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-nav-bar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, NavBarPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-nav-bar-demo.component.html',
  styleUrl: './app-nav-bar-demo.component.scss',
})
export class AppNavBarDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'themes', name: 'Themes', icon: '🌗', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  navItems = JSON.stringify([
    { label: 'Overview', icon: '🏠' },
    { label: 'Admin', icon: '🔑' },
    { label: 'Logs', icon: '📜' },
  ]);

  playgroundCode = `<ui-nav-bar [model]="items">
  <div slot="header">MyApp</div>
</ui-nav-bar>`;

  themesCode = `<!-- Dark Sidebar -->
<ui-nav-bar theme="dark" [model]="items"></ui-nav-bar>

<!-- Collapsed mode -->
<ui-nav-bar collapsed [model]="items"></ui-nav-bar>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
