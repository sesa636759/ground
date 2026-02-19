import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { AnchorPlaygroundComponent } from './components/anchor-playground/anchor-playground.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-anchor-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnchorPlaygroundComponent,
    DemoTabsComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-anchor-demo.component.html',
  styleUrl: './app-anchor-demo.component.scss',
})
export class AppAnchorDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'types', name: 'Anchor types', icon: '📝', color: '#3b82f6' },
    { id: 'orientation', name: 'Orientation', icon: '↔️', color: '#10b981' },
    { id: 'auto-gen', name: 'Auto Generation', icon: '⚙️', color: '#f59e0b' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  links = JSON.stringify([
    { id: 'intro', label: 'Introduction', target: 'intro-section' },
    { id: 'usage', label: 'Quick Usage', target: 'usage-section' },
    { id: 'props', label: 'Properties', target: 'props-section' },
  ]);

  playgroundCode = `<ui-anchor
  orientation="vertical"
  type="line"
  [links]="linksJson"
  scroll-container="#my-scroll-area"
></ui-anchor>`;

  typesCode = `<!-- Line style (Default) -->
<ui-anchor type="line" ...></ui-anchor>

<!-- Dot style -->
<ui-anchor type="dot" ...></ui-anchor>`;

  orientationCode = `<!-- Horizontal navigation -->
<ui-anchor orientation="horizontal" ...></ui-anchor>

<!-- Vertical navigation -->
<ui-anchor orientation="vertical" ...></ui-anchor>`;

  autoGenCode = `<!-- Automatically generate links from h1-h4 headers -->
<ui-anchor auto-gen-container="#article-content" ...></ui-anchor>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    const container = document.querySelector('.pane-examples');
    if (element && container) {
      container.scrollTo({
        top: (element as HTMLElement).offsetTop - 20,
        behavior: 'smooth',
      });
    }
  }
}
