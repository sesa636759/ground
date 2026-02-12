import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { BreadcrumbPlaygroundComponent } from './components/breadcrumb-playground/breadcrumb-playground.component';

@Component({
  selector: 'app-app-breadcrumb-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, BreadcrumbPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-breadcrumb-demo.component.html',
  styleUrl: './app-breadcrumb-demo.component.scss',
})
export class AppBreadcrumbDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'separators', name: 'Separators', icon: '➖', color: '#3b82f6' },
    { id: 'collapsing', name: 'Collapsing', icon: '📉', color: '#10b981' },
    { id: 'visuals', name: 'Visual Variants', icon: '🎨', color: '#f59e0b' },
  ];

  items = JSON.stringify([
    { label: 'Home', icon: '🏠', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile', active: true },
  ]);

  collapsibleItems = JSON.stringify([
    { label: 'Cloud Console', href: '#' },
    { label: 'Compute Engine', href: '#' },
    { label: 'Instances', href: '#' },
    { label: 'Production Clusters', href: '#' },
    { label: 'East-Region-Node-01', active: true },
  ]);

  playgroundCode = `<ui-breadcrumb [items]="breadcrumbItems" show-home></ui-breadcrumb>`;

  separatorsCode = `<!-- Text Separator -->
<ui-breadcrumb separator=">"></ui-breadcrumb>

<!-- Icon Separator -->
<ui-breadcrumb separator-icon="→"></ui-breadcrumb>`;

  collapsingCode = `<!-- Automatically collapse when exceeding 4 items -->
<ui-breadcrumb [items]="longList" [max-items]="4"></ui-breadcrumb>`;

  visualsCode = `<!-- Modern Pill Style -->
<ui-breadcrumb variant="pills"></ui-breadcrumb>

<!-- Glassmorphism -->
<ui-breadcrumb variant="glass"></ui-breadcrumb>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
