import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmRatingPlaygroundComponent } from '../../../playground/common/rating-playground/rating-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-rating-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmRatingPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rating-demo.component.html',
  styleUrl: './rating-demo.component.scss',
})
export class DmRatingDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮', iconLibrary: 'emoji' },
    { id: 'basic', title: 'Star Rating', icon: '⭐', iconLibrary: 'emoji' },
    { id: 'half', title: 'Half Ratings', icon: '🌓', iconLibrary: 'emoji' },
    { id: 'smileys', title: 'Smiley Feedback', icon: '😊', iconLibrary: 'emoji' },
    { id: 'thumbs', title: 'Thumb Up/Down', icon: '👍', iconLibrary: 'emoji' },
    { id: 'visuals', title: 'Custom Visuals', icon: '🎨', iconLibrary: 'emoji' },
    { id: 'states', title: 'States & Labels', icon: '🔘', iconLibrary: 'emoji' },
  ];

  basicCode = signal(`<dui-rating value="3"></dui-rating>
<dui-rating max="10" value="7" color="primary"></dui-rating>`);

  halfCode = signal(`<dui-rating allow-half value="3.5" show-value></dui-rating>
<dui-rating allow-half value="4.5" color="success" size="lg"></dui-rating>`);

  smileysCode = signal(`<dui-rating type="smiley" max="5" value="4"></dui-rating>
<dui-rating 
  type="smiley" 
  [labels]="['Very Poor', 'Poor', 'Neutral', 'Good', 'Excellent']" 
  show-value
></dui-rating>`);

  thumbsCode = signal(`<dui-rating type="thumb" value="1"></dui-rating>
<dui-rating type="thumb" value="-1" show-value></dui-rating>`);

  visualsCode = signal(`<dui-rating size="sm" value="4"></dui-rating>
<dui-rating size="lg" color="danger" value="2"></dui-rating>`);

  statesCode = signal(`<dui-rating readonly value="4" show-value></dui-rating>
<dui-rating disabled value="3"></dui-rating>`);

  onRatingChange(event: any) {
    console.log('Rating event:', event.detail);
  }
}
