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
    { id: 'basic', title: 'Star Rating', icon: 'star', iconLibrary: 'lucide' },
    { id: 'half', title: 'Half Ratings', icon: 'star-half', iconLibrary: 'lucide' },
    { id: 'smileys', title: 'Smiley Feedback', icon: 'smile', iconLibrary: 'lucide' },
    { id: 'thumbs', title: 'Thumb Up/Down', icon: 'thumbs-up', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Custom Visuals', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'states', title: 'States & Labels', icon: 'shield-check', iconLibrary: 'lucide' },
  ];

  basicCode = signal(`<ui-rating value="3"></ui-rating>
<ui-rating max="10" value="7" color="primary"></ui-rating>`);

  halfCode = signal(`<ui-rating allow-half value="3.5" show-value></ui-rating>
<ui-rating allow-half value="4.5" color="success" size="lg"></ui-rating>`);

  smileysCode = signal(`<ui-rating type="smiley" max="5" value="4"></ui-rating>
<ui-rating 
  type="smiley" 
  [labels]="['Very Poor', 'Poor', 'Neutral', 'Good', 'Excellent']" 
  show-value
></ui-rating>`);

  thumbsCode = signal(`<ui-rating type="thumb" value="1"></ui-rating>
<ui-rating type="thumb" value="-1" show-value></ui-rating>`);

  visualsCode = signal(`<ui-rating size="sm" value="4"></ui-rating>
<ui-rating size="lg" color="danger" value="2"></ui-rating>`);

  statesCode = signal(`<ui-rating readonly value="4" show-value></ui-rating>
<ui-rating disabled value="3"></ui-rating>`);

  onRatingChange(event: any) {
    console.log('Rating event:', event.detail);
  }
}
