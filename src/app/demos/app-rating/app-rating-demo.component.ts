import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { AppInputValueAccessorDirective } from '../../directives/ui-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/ui-checkbox-value-accessor.directive';
import { RatingPlaygroundComponent } from './components/rating-playground/rating-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-rating-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    RatingPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-rating-demo.component.html',
  styleUrl: './app-rating-demo.component.scss',
})
export class AppRatingDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'types', title: 'Rating Types', icon: '✨', color: '#3b82f6' },
    { id: 'colors', title: 'Colors & sizes', icon: '🌈', color: '#10b981' },
    { id: 'custom', title: 'Custom Labels', icon: '📝', color: '#f59e0b' },
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
}
