import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-carousel-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel-docs.component.html',
  styleUrls: ['./carousel-docs.component.scss'],
})
export class CarouselDocsComponent {
  carouselConfig = COMPONENT_CONFIGS['carousel'];
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    basic: `<app-carousel
  [arrows]="true"
  [indicators]="true"
  [height]="'400px'"
>
  <div class="slide slide-1">
    <h3>Modern Architecture</h3>
    <p>Building for the future with scalable designs.</p>
  </div>
  <div class="slide slide-2">
    <h3>Creative Solutions</h3>
    <p>Innovative approaches to complex problems.</p>
  </div>
</app-carousel>`,
    fade: `<app-carousel
  [arrows]="true"
  [indicators]="true"
  [effect]="'fade'"
  [height]="'400px'"
>
  <div class="slide slide-fade-1">
    <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" alt="Nature">
    <div class="slide-caption">
      <h3>Nature</h3>
      <p>Breathtaking landscapes and serene environments.</p>
    </div>
  </div>
  <div class="slide slide-fade-2">
    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80" alt="Forest">
    <div class="slide-caption">
      <h3>Forest</h3>
      <p>Deep into the wild, where peace resides.</p>
    </div>
  </div>
</app-carousel>`,
    autoplay: `<app-carousel
  [arrows]="true"
  [indicators]="true"
  [autoplay]="true"
  [autoplayInterval]="3000"
  [infinite]="true"
  [height]="'400px'"
>
  <div class="slide slide-auto-1">
    <h3>Automated Experience</h3>
    <p>Hands-free navigation for your content.</p>
  </div>
  <div class="slide slide-auto-2">
    <h3>Always Moving</h3>
    <p>Keep your audience engaged with dynamic transitions.</p>
  </div>
</app-carousel>`,
    multiple: `<app-carousel
  [arrows]="true"
  [indicators]="true"
  [slidesToShow]="3"
  [slidesToScroll]="1"
  [infinite]="true"
  [height]="'300px'"
>
  <div class="slide slide-multi" *ngFor="let i of [1,2,3,4,5,6]">
    <h3>Item {{i}}</h3>
  </div>
</app-carousel>`,
    center: `<app-carousel
  [arrows]="true"
  [indicators]="false"
  [centerMode]="true"
  [slidesToShow]="3"
  [height]="'300px'"
>
  <div class="slide slide-center" *ngFor="let i of [1,2,3,4,5]">
    <h3>Featured {{i}}</h3>
  </div>
</app-carousel>`,
  };

  slides = [
    { color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', text: 'Customize me!' },
    { color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', text: 'Try settings' },
    { color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', text: 'Live changes' },
  ];

  getActiveExampleLabel() {
    return this.activeExample.replace(/_/g, ' ');
  }

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
    this.isCodeVisible = false;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
    // Optional: add toast notification here
  }
}
