import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmCarouselPlaygroundComponent } from '../../../playground/sets/carousel-playground/carousel-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-carousel-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmCarouselPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel-demo.component.html',
  styleUrl: './carousel-demo.component.scss',
})
export class DmCarouselDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'basic', title: 'Basic Usage', icon: 'monitor', iconLibrary: 'lucide' },
    { id: 'vertical', title: 'Vertical Mode', icon: 'arrow-up-down', iconLibrary: 'lucide' },
    { id: 'multi-slide', title: 'Multiple Slides', icon: 'layout-grid', iconLibrary: 'lucide' },
    { id: 'center-mode', title: 'Center Mode', icon: 'columns', iconLibrary: 'lucide' },
    { id: 'autoplay', title: 'Autoplay & Progress', icon: 'play-circle', iconLibrary: 'lucide' },
    { id: 'interaction', title: 'Gestures & Keyboard', icon: 'hand', iconLibrary: 'lucide' },
    { id: 'custom-controls', title: 'Custom Arrows', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'responsive', title: 'Responsive', icon: 'smartphone', iconLibrary: 'lucide' },
  ];

  basicCode = `<ui-carousel autoplay="true" autoplay-interval="3000" indicators="true" arrows="true">
  <div class="slide bg-primary">Slide 1</div>
  <div class="slide bg-secondary">Slide 2</div>
  <div class="slide bg-success">Slide 3</div>
</ui-carousel>`;

  verticalCode = `<ui-carousel vertical="true" height="300px" autoplay="true">
  <div class="slide bg-info">Vertical 1</div>
  <div class="slide bg-warning">Vertical 2</div>
  <div class="slide bg-danger">Vertical 3</div>
</ui-carousel>`;

  multiSlideCode = `<ui-carousel slides-to-show="3" slides-to-scroll="1" infinite="true" arrows="true">
  <div class="slide border">Item 1</div>
  <div class="slide border">Item 2</div>
  <div class="slide border">Item 3</div>
  <div class="slide border">Item 4</div>
  <div class="slide border">Item 5</div>
</ui-carousel>`;

  centerModeCode = `<ui-carousel center-mode="true" center-padding="60px" slides-to-show="1" arrows="true">
  <div class="slide bg-soft-primary">Center 1</div>
  <div class="slide bg-soft-success">Center 2</div>
  <div class="slide bg-soft-warning">Center 3</div>
</ui-carousel>`;

  autoplayCode = `<ui-carousel autoplay="true" autoplay-interval="2000" show-progress="true" pause-on-hover="true">
  <div class="slide">Auto 1</div>
  <div class="slide">Auto 2</div>
  <div class="slide">Auto 3</div>
</ui-carousel>`;

  interactionCode = `<ui-carousel swipe="true" enable-drag="true" keyboard="true">
  <div class="slide">Touch/Mouse/Keyboard Support</div>
  <div class="slide">Try dragging!</div>
  <div class="slide">Use arrow keys!</div>
</ui-carousel>`;

  customControlsCode = `<ui-carousel prev-arrow="← Previous" next-arrow="Next →">
  <div class="slide">Custom navigation labels</div>
  <div class="slide">Second slide</div>
</ui-carousel>`;

  responsiveData = JSON.stringify([
    { breakpoint: 1024, slidesToShow: 2 },
    { breakpoint: 640, slidesToShow: 1 }
  ]);

  responsiveCode = `<ui-carousel slides-to-show="3" [responsive]="responsiveData">
  <div class="slide border">1</div>
  <div class="slide border">2</div>
  <div class="slide border">3</div>
  <div class="slide border">4</div>
</ui-carousel>`;

  ngOnInit() {}
}
