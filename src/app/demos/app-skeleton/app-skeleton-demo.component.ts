import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SkeletonPlaygroundComponent } from './components/skeleton-playground/skeleton-playground.component';

@Component({
  selector: 'app-app-skeleton-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, SkeletonPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-skeleton-demo.component.html',
  styleUrl: './app-skeleton-demo.component.scss',
})
export class AppSkeletonDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'shapes', name: 'Shapes & Animations', icon: '🌀', color: '#3b82f6' },
    { id: 'combinations', name: 'Complex Layouts', icon: '🧩', color: '#10b981' },
  ];

  playgroundCode = `<ui-skeleton shape="rectangle" width="100%" height="150px" animation="wave"></ui-skeleton>`;

  shapesCode = `<!-- Circle Avatar -->
<ui-skeleton shape="circle" width="48px" height="48px"></ui-skeleton>

<!-- Text Line -->
<ui-skeleton shape="text" width="60%"></ui-skeleton>

<!-- Pulse Animation -->
<ui-skeleton animation="pulse"></ui-skeleton>`;

  combinationsCode = `<div class="card-skeleton">
  <ui-skeleton shape="circle" width="50px" height="50px"></ui-skeleton>
  <div class="content">
    <ui-skeleton shape="text" width="80%"></ui-skeleton>
    <ui-skeleton shape="text" width="40%"></ui-skeleton>
  </div>
</div>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
