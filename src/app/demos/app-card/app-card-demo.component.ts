import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { CardPlaygroundComponent } from './components/card-playground/card-playground.component';

@Component({
  selector: 'app-app-card-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, CardPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-card-demo.component.html',
  styleUrl: './app-card-demo.component.scss',
})
export class AppCardDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'visual-styles', name: 'Visual Styles', icon: '🎨', color: '#3b82f6' },
    { id: 'flippable', name: 'Interaction', icon: '✨', color: '#10b981' },
    { id: 'loading', name: 'States', icon: '⚙️', color: '#f59e0b' },
  ];

  playgroundCode = `<ui-card variant="elevated" hoverable width="340px">
  <div slot="cover">...</div>
  <div slot="header"><h3>Card Title</h3></div>
  <div slot="content">...</div>
  <div slot="footer">...</div>
</ui-card>`;

  stylesCode = `<!-- Core Variants -->
<ui-card variant="default"></ui-card>
<ui-card variant="elevated"></ui-card>
<ui-card variant="outlined"></ui-card>
<ui-card variant="filled"></ui-card>`;

  interactionCode = `<!-- Flipping Interaction -->
<ui-card flippable>
  <div slot="content">Front Content</div>
  <div slot="back-content">Back Content</div>
</ui-card>

<!-- Selection Mode -->
<ui-card selectable [selected]="isSelected"></ui-card>`;

  statesCode = `<!-- Loading State with Skeleton -->
<ui-card loading></ui-card>

<!-- Clickable Card as Link -->
<ui-card clickable href="/details"></ui-card>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
