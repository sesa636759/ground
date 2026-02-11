import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-animate-on-scroll-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './animate-on-scroll-docs.component.html',
  styleUrls: ['./animate-on-scroll-docs.component.scss'],
})
export class AnimateOnScrollDocsComponent {
  animateConfig = COMPONENT_CONFIGS['animate-on-scroll'] || {};
  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'fadeIn';
  isCodeVisible: boolean = false;

  exampleCodes: Record<string, string> = {
    fadeIn: `<app-animate-on-scroll
  animation="fade-in"
  duration="600ms"
  delay="0ms">
  <div class="card">Content fades in on scroll</div>
</app-animate-on-scroll>`,
    slideUp: `<app-animate-on-scroll
  animation="slide-up"
  duration="800ms"
  threshold="0.2">
  <div class="card">Slides up from below</div>
</app-animate-on-scroll>`,
    slideLeft: `<app-animate-on-scroll
  animation="slide-left"
  duration="700ms">
  <div class="card">Slides in from the right</div>
</app-animate-on-scroll>`,
    zoomIn: `<app-animate-on-scroll
  animation="zoom-in"
  duration="500ms"
  easing="ease-out">
  <div class="card">Zooms in on scroll</div>
</app-animate-on-scroll>`,
    rotate: `<app-animate-on-scroll
  animation="rotate-in"
  duration="900ms">
  <div class="card">Rotates into view</div>
</app-animate-on-scroll>`,
    stagger: `<div *ngFor="let item of items; let i = index">
  <app-animate-on-scroll
    animation="fade-in"
    duration="400ms"
    [delay]="i * 100 + 'ms'">
    <div class="card">Item {{ i + 1 }}</div>
  </app-animate-on-scroll>
</div>`,
    bounce: `<app-animate-on-scroll
  animation="bounce-in"
  duration="1000ms">
  <div class="card">Bounces into view</div>
</app-animate-on-scroll>`,
    flip: `<app-animate-on-scroll
  animation="flip-in"
  duration="800ms"
  threshold="0.5">
  <div class="card">Flips on scroll</div>
</app-animate-on-scroll>`,
  };

  items = [1, 2, 3, 4, 5];

  getActiveExampleLabel() {
    return this.activeExample.replace(/([A-Z])/g, ' $1').trim();
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
  }
}
