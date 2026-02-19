import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { TabsPlaygroundComponent } from './components/tabs-playground/tabs-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-tabs-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TabsPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-tabs-demo.component.html',
  styleUrl: './app-tabs-demo.component.scss',
})
export class AppTabsDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'styles', name: 'Visual Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'layouts', name: 'Orientations', icon: '📐', color: '#10b981' },
    { id: 'tab-stack', name: 'Tab Stack', icon: '📚', color: '#f59e0b' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-tabs variant="default">
  <ui-tab label="Home" value="h"> Content </ui-tab>
  <ui-tab label="About" value="a"> Content </ui-tab>
</ui-tabs>`;

  stylesCode = `<!-- Pills Style -->
<ui-tabs variant="pills">...</ui-tabs>

<!-- Underline Style -->
<ui-tabs variant="underline">...</ui-tabs>

<!-- Enclosed Style -->
<ui-tabs variant="enclosed">...</ui-tabs>`;

  layoutsCode = `<!-- Vertical Alignment -->
<ui-tabs orientation="vertical">
  <ui-tab label="Menu 1">...</ui-tab>
  <ui-tab label="Menu 2">...</ui-tab>
</ui-tabs>

<!-- Center Aligned Tabs -->
<ui-tabs align="center">...</ui-tabs>`;

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
