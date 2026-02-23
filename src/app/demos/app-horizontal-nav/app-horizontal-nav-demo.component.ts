import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { HorizontalNavPlaygroundComponent } from './components/horizontal-nav-playground/horizontal-nav-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-horizontal-nav-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HorizontalNavPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-horizontal-nav-demo.component.html',
  styleUrl: './app-horizontal-nav-demo.component.scss',
})
export class AppHorizontalNavDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'themes', name: 'Themes', icon: '🎨', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  navItems = JSON.stringify([
    { label: 'Dashboard', icon: '📊' },
    { label: 'Analytics', icon: '📈' },
    { label: 'Reports', icon: '📄' },
    { label: 'Settings', icon: '⚙️' },
  ]);

  playgroundCode = `<ui-horizontal-nav [model]="items" sticky></ui-horizontal-nav>`;

  themesCode = `<!-- Dark Theme -->
<ui-horizontal-nav theme="dark" [model]="items"></ui-horizontal-nav>

<!-- Light Theme with Sticky -->
<ui-horizontal-nav theme="light" sticky [model]="items"></ui-horizontal-nav>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
