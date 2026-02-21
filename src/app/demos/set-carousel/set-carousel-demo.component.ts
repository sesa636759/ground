import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselPlaygroundComponent } from './components/carousel-playground/carousel-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-set-carousel-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CarouselPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoSidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-carousel-demo.component.html',
  styleUrl: './set-carousel-demo.component.scss',
})
export class SetCarouselDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    // Transition Effects
    { id: 'fade-transition', title: 'Fade Transition Effect', icon: '🌀', color: '#8b5cf6' },
    { id: 'slide-transition', title: 'Slide Transition Effect', icon: '➡️', color: '#3b82f6' },
    // Layout Modes
    { id: 'center-mode', title: 'Center Mode', icon: '🎯', color: '#10b981' },
    { id: 'multiple-slides', title: 'Multiple Slides Display', icon: '📋', color: '#f59e0b' },
    { id: 'vertical-carousel', title: 'Vertical Carousel', icon: '↕️', color: '#ef4444' },
    { id: 'infinite-loop', title: 'Infinite Loop', icon: '♾️', color: '#ec4899' },
    // Interaction & Controls
    { id: 'swipe-drag', title: 'Touch Swipe & Mouse Drag', icon: '👆', color: '#06b6d4' },
    { id: 'autoplay-control', title: 'Autoplay with Pause Control', icon: '⏯️', color: '#64748b' },
    { id: 'drag-threshold', title: 'Customizable Drag Threshold', icon: '🎯', color: '#8b5cf6' },
    { id: 'animation-easing', title: 'Animation Easing Effects', icon: '🎨', color: '#3b82f6' },
    // Indicators & Navigation
    { id: 'dots-indicators', title: 'Dots Indicators', icon: '•', color: '#10b981' },
    { id: 'number-indicators', title: 'Number Indicators', icon: '🔢', color: '#f59e0b' },
    { id: 'progress-bar', title: 'Progress Bar Indicator', icon: '📊', color: '#ef4444' },
    // Size Variants
    { id: 'size-small', title: 'Small Size', icon: '🔸', color: '#ec4899' },
    { id: 'size-medium', title: 'Medium Size', icon: '🔶', color: '#06b6d4' },
    { id: 'size-large', title: 'Large Size', icon: '🟠', color: '#64748b' },
    // Speed Variants
    { id: 'speed-fast', title: 'Fast Animation', icon: '⚡', color: '#8b5cf6' },
    { id: 'speed-normal', title: 'Normal Speed', icon: '👌', color: '#3b82f6' },
    { id: 'speed-slow', title: 'Slow Animation', icon: '🐢', color: '#10b981' },
    // Advanced Features
    { id: 'responsive-layout', title: 'Responsive Breakpoints', icon: '📱', color: '#f59e0b' },
    { id: 'custom-controls', title: 'Custom Navigation Controls', icon: '🎮', color: '#ef4444' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  // Basic Layout Examples
  fadeSlides = JSON.stringify([
    { id: 1, title: 'Nature', description: 'Breathtaking landscapes', bg: '#1e293b' },
    { id: 2, title: 'Forest', description: 'Into the wild', bg: '#0f172a' },
    { id: 3, title: 'Mountains', description: 'Peak experience', bg: '#334155' },
  ]);

  slideShowData = JSON.stringify([
    { id: 1, title: 'Slide 1', content: 'Beautiful auto-playing carousel' },
    { id: 2, title: 'Slide 2', content: 'With smooth transitions' },
    { id: 3, title: 'Slide 3', content: 'And responsive design' },
    { id: 4, title: 'Slide 4', content: 'Easy to customize' },
  ]);

  centerModeItems = JSON.stringify([
    { id: 1, label: 'Item 1', color: '#e11d48' },
    { id: 2, label: 'Item 2', color: '#db2777' },
    { id: 3, label: 'Item 3', color: '#c026d3' },
    { id: 4, label: 'Item 4', color: '#9333ea' },
    { id: 5, label: 'Item 5', color: '#7c3aed' },
  ]);

  multipleSlideItems = JSON.stringify([
    { id: 1, name: 'Item 1', number: '01' },
    { id: 2, name: 'Item 2', number: '02' },
    { id: 3, name: 'Item 3', number: '03' },
    { id: 4, name: 'Item 4', number: '04' },
    { id: 5, name: 'Item 5', number: '05' },
    { id: 6, name: 'Item 6', number: '06' },
  ]);

  verticalCarouselItems = JSON.stringify([
    { id: 1, text: 'Vertical Slide 1' },
    { id: 2, text: 'Vertical Slide 2' },
    { id: 3, text: 'Vertical Slide 3' },
  ]);

  infiniteItems = JSON.stringify([
    { id: 1, label: 'Loop 1' },
    { id: 2, label: 'Loop 2' },
    { id: 3, label: 'Loop 3' },
  ]);

  // Size variant data
  smallSlides = JSON.stringify([
    { id: 1, size: 'Small' },
    { id: 2, size: 'Compact' },
    { id: 3, size: 'Tiny' },
  ]);
  mediumSlides = JSON.stringify([
    { id: 1, size: 'Medium' },
    { id: 2, size: 'Standard' },
    { id: 3, size: 'Normal' },
  ]);
  largeSlides = JSON.stringify([
    { id: 1, size: 'Large' },
    { id: 2, size: 'Big' },
    { id: 3, size: 'Extra' },
  ]);

  // Speed/timing variants
  fastSlides = JSON.stringify([
    { id: 1, text: 'Fast' },
    { id: 2, text: 'Quick' },
    { id: 3, text: 'Speed' },
  ]);
  normalSlides = JSON.stringify([
    { id: 1, text: 'Normal' },
    { id: 2, text: 'Standard' },
    { id: 3, text: 'Regular' },
  ]);
  slowSlides = JSON.stringify([
    { id: 1, text: 'Slow' },
    { id: 2, text: 'Relaxed' },
    { id: 3, text: 'Smooth' },
  ]);

  // Pagination variants
  dotsItems = JSON.stringify([
    { id: 1, indicator: 'Dots' },
    { id: 2, indicator: 'Visible' },
    { id: 3, indicator: 'Bottom' },
  ]);
  numbersItems = JSON.stringify([
    { id: 1, number: '1' },
    { id: 2, number: '2' },
    { id: 3, number: '3' },
  ]);
  progressItems = JSON.stringify([
    { id: 1, label: 'Progress' },
    { id: 2, label: 'Tracking' },
    { id: 3, label: 'Complete' },
  ]);

  // Animation easing variations
  easeLinearSlides = JSON.stringify([
    { id: 1, text: 'Linear' },
    { id: 2, text: 'Smooth' },
    { id: 3, text: 'Even' },
  ]);
  easeEaseInOutSlides = JSON.stringify([
    { id: 1, text: 'EaseInOut' },
    { id: 2, text: 'Decelerate' },
    { id: 3, text: 'Natural' },
  ]);

  // Responsive layout items
  responsiveSmallSlides = JSON.stringify([
    { id: 1, text: 'Mobile' },
    { id: 2, text: '1 Slide' },
    { id: 3, text: 'Small' },
  ]);
  responsiveTabletSlides = JSON.stringify([
    { id: 1, text: 'Tablet' },
    { id: 2, text: '2 Slides' },
    { id: 3, text: 'Medium' },
  ]);
  responsiveDesktopSlides = JSON.stringify([
    { id: 1, text: 'Desktop' },
    { id: 2, text: '3+ Slides' },
    { id: 3, text: 'Large' },
  ]);

  // Code examples
  fadeTransitionCode = `<app-carousel
  effect="fade"
  autoplay="true"
  autoplay-interval="3000"
  show-progress="true"
>
  <div class="slide" style="background: #1e293b">
    <h3>Nature</h3>
    <p>Breathtaking landscapes</p>
  </div>
  <div class="slide" style="background: #0f172a">
    <h3>Forest</h3>
    <p>Into the wild</p>
  </div>
  <div class="slide" style="background: #334155">
    <h3>Mountains</h3>
    <p>Peak experience</p>
  </div>
</app-carousel>`;

  slideTransitionCode = `<app-carousel
  effect="slide"
  autoplay="true"
  autoplay-interval="3000"
  arrows="true"
  indicators="true"
>
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
  <div class="slide">Slide 4</div>
</app-carousel>`;

  centerModeCode = `<app-carousel
  center-mode="true"
  slides-to-show="1"
  center-padding="20%"
  arrows="true"
  autoplay="false"
>
  <div class="slide">Item 1</div>
  <div class="slide">Item 2</div>
  <div class="slide">Item 3</div>
  <div class="slide">Item 4</div>
  <div class="slide">Item 5</div>
</app-carousel>`;

  multipleItemsCode = `<app-carousel
  slides-to-show="3"
  slides-to-scroll="1"
  infinite="true"
  arrows="true"
  indicators="true"
>
  <div class="slide">Item 1</div>
  <div class="slide">Item 2</div>
  <div class="slide">Item 3</div>
  <div class="slide">Item 4</div>
  <div class="slide">Item 5</div>
  <div class="slide">Item 6</div>
</app-carousel>`;

  verticalCode = `<app-carousel
  direction="vertical"
  slides-to-show="1"
  autoplay="true"
  autoplay-interval="3000"
>
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</app-carousel>`;

  infiniteLoopCode = `<app-carousel
  infinite="true"
  loop="true"
  autoplay="true"
  autoplay-interval="2000"
>
  <div class="slide">Repeating Item 1</div>
  <div class="slide">Repeating Item 2</div>
  <div class="slide">Repeating Item 3</div>
</app-carousel>`;

  swipeGestureCode = `<app-carousel
  swipe="true"
  drag="true"
  mouse-drag="true"
  autoplay="true"
  touch-threshold="5"
>
  <div class="slide">Swipeable 1</div>
  <div class="slide">Swipeable 2</div>
  <div class="slide">Swipeable 3</div>
</app-carousel>`;

  scrollAutoplayCode = `<app-carousel
  autoplay="true"
  autoplay-interval="3000"
  pause-on-hover="true"
  pause-on-focus="true"
>
  <div class="slide">Auto Slide 1</div>
  <div class="slide">Auto Slide 2</div>
  <div class="slide">Auto Slide 3</div>
</app-carousel>`;

  dotsIndicatorsCode = `<app-carousel
  indicators="true"
  indicator-type="dots"
  indicator-position="bottom"
  show-arrows="true"
>
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</app-carousel>`;

  numberIndicatorsCode = `<app-carousel
  indicators="true"
  indicator-type="numbers"
  indicator-position="bottom"
>
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</app-carousel>`;

  progressBarCode = `<app-carousel
  show-progress="true"
  autoplay="true"
  autoplay-interval="3000"
>
  <div class="slide">Progress 1</div>
  <div class="slide">Progress 2</div>
  <div class="slide">Progress 3</div>
</app-carousel>`;

  thresholdCode = `<app-carousel
  drag="true"
  swipe="true"
  drag-threshold="10"
  touch-threshold="5"
>
  <div class="slide">Drag Me 1</div>
  <div class="slide">Drag Me 2</div>
  <div class="slide">Drag Me 3</div>
</app-carousel>`;

  easingCode = `<app-carousel
  animation-duration="800"
  animation-easing="ease-in-out"
  autoplay="true"
>
  <div class="slide">Eased 1</div>
  <div class="slide">Eased 2</div>
  <div class="slide">Eased 3</div>
</app-carousel>`;

  sizeSmallCode = `<app-carousel
  height="200px"
  slides-to-show="1"
>
  <div class="slide">Small 1</div>
  <div class="slide">Small 2</div>
  <div class="slide">Small 3</div>
</app-carousel>`;

  sizeMediumCode = `<app-carousel
  height="400px"
  slides-to-show="2"
>
  <div class="slide">Medium 1</div>
  <div class="slide">Medium 2</div>
  <div class="slide">Medium 3</div>
</app-carousel>`;

  sizeLargeCode = `<app-carousel
  height="600px"
  slides-to-show="3"
>
  <div class="slide">Large 1</div>
  <div class="slide">Large 2</div>
  <div class="slide">Large 3</div>
</app-carousel>`;

  speedFastCode = `<app-carousel
  animation-duration="300"
  autoplay-interval="2000"
  autoplay="true"
>
  <div class="slide">Fast 1</div>
  <div class="slide">Fast 2</div>
  <div class="slide">Fast 3</div>
</app-carousel>`;

  speedNormalCode = `<app-carousel
  animation-duration="500"
  autoplay-interval="3000"
  autoplay="true"
>
  <div class="slide">Normal 1</div>
  <div class="slide">Normal 2</div>
  <div class="slide">Normal 3</div>
</app-carousel>`;

  speedSlowCode = `<app-carousel
  animation-duration="1000"
  autoplay-interval="5000"
  autoplay="true"
>
  <div class="slide">Slow 1</div>
  <div class="slide">Slow 2</div>
  <div class="slide">Slow 3</div>
</app-carousel>`;

  responsiveCode = `<app-carousel
  slides-to-show="3"
  responsive=[
    { breakpoint: 1024, settings: { slides-to-show: 2 } },
    { breakpoint: 640, settings: { slides-to-show: 1 } }
  ]
>
  <div class="slide">Responsive 1</div>
  <div class="slide">Responsive 2</div>
  <div class="slide">Responsive 3</div>
</app-carousel>`;

  customControlsCode = `<app-carousel
  arrows="true"
  indicators="true"
  show-progress="true"
  autoplay="true"
  pause-on-hover="true"
>
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</app-carousel>`;

  playgroundCode = `<app-carousel
  autoplay="true"
  autoplay-interval="3000"
  slides-to-show="1"
  arrows="true"
  indicators="true"
>
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</app-carousel>`;

  ngOnInit() {}
}
