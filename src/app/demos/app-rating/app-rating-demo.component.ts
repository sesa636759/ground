import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { RatingPlaygroundComponent } from './components/rating-playground/rating-playground.component';

@Component({
  selector: 'app-app-rating-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, RatingPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-rating-demo.component.html',
  styleUrl: './app-rating-demo.component.scss',
})
export class AppRatingDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'types', name: 'Rating Types', icon: '✨', color: '#3b82f6' },
    { id: 'colors', name: 'Colors & sizes', icon: '🌈', color: '#10b981' },
    { id: 'custom', name: 'Custom Labels', icon: '📝', color: '#f59e0b' },
  ];

  playgroundCode = `<ui-rating type="star" [value]="3" max="5"></ui-rating>`;

  typesCode = `<!-- Classic Star -->
<ui-rating type="star" [value]="4"></ui-rating>

<!-- Sentiment Smiley -->
<ui-rating type="smiley" [value]="2"></ui-rating>

<!-- Quick Thumb -->
<ui-rating type="thumb" [value]="1"></ui-rating>`;

  colorsSizesCode = `<ui-rating size="sm" color="primary" [value]="3"></ui-rating>
<ui-rating size="md" color="warning" [value]="3"></ui-rating>
<ui-rating size="lg" color="danger" [value]="3"></ui-rating>`;

  customCode = `<ui-rating 
  type="smiley" 
  [value]="3" 
  labels='["Terrible", "Bad", "OK", "Good", "Excellent"]'
  show-value
></ui-rating>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
