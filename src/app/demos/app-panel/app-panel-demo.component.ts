import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { PanelPlaygroundComponent } from './components/panel-playground/panel-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-panel-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PanelPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-panel-demo.component.html',
  styleUrl: './app-panel-demo.component.scss',
})
export class AppPanelDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'visual-styles', name: 'Styles', icon: '🎨', color: '#3b82f6' },
    { id: 'themes', name: 'Themes', icon: '🌈', color: '#10b981' },
    { id: 'interactivity', name: 'Interactive', icon: '🕹️', color: '#f59e0b' },
    { id: 'glassmorphism', name: 'Glass', icon: '🔮', color: '#ec4899' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-panel panel-title="Analysis Feed" panel-subtitle="Real-time data stream" badge="Live">
  <div slot="content">Your content here...</div>
</ui-panel>`;

  stylesCode = `<!-- Elevated (Default) -->
<ui-panel variant="elevated" panel-title="Elevated Panel"></ui-panel>

<!-- Outlined -->
<ui-panel variant="outlined" panel-title="Outlined Panel"></ui-panel>

<!-- Filled -->
<ui-panel variant="filled" panel-title="Filled Panel"></ui-panel>

<!-- Flat -->
<ui-panel variant="flat" panel-title="Flat Panel"></ui-panel>`;

  themesCode = `<ui-panel theme="primary" panel-title="Primary Theme"></ui-panel>
<ui-panel theme="success" panel-title="Success Theme"></ui-panel>
<ui-panel theme="danger" panel-title="Danger Theme"></ui-panel>`;

  interactiveCode = `<ui-panel 
  toggleable 
  minimizable 
  maximizable 
  resizable 
  is-draggable
  panel-title="Full Interactive Panel">
</ui-panel>`;

  glassCode = `<!-- Transparent container with glassmorphism -->
<div style="background: url('...')">
  <ui-panel glass panel-title="Glass Panel"></ui-panel>
</div>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
