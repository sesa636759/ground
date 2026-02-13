import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselPlaygroundComponent } from './components/carousel-playground/carousel-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-carousel-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CarouselPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-carousel-demo.component.html',
  styleUrl: './set-carousel-demo.component.scss',
})
export class SetCarouselDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'fade-transition', title: 'Fade Transition', icon: '✨' },
    { id: 'center-mode', title: 'Center Mode', icon: '🎯' },
    { id: 'multiple-slides', title: 'Multiple Slides', icon: '🔢' },
  ];

  playgroundCode = `<app-carousel
  [autoplay]="true"
  [interval]="3000"
  [loop]="true"
  [showDots]="true"
  [showArrows]="true"
>
  <!-- Slides here -->
</app-carousel>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
