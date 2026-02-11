import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-animate-on-scroll-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimateOnScrollDirective, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './animate-on-scroll-docs.component.html',
  styleUrls: ['./animate-on-scroll-docs.component.scss'],
})
export class AnimateOnScrollDocsComponent {
  activeTab: 'examples' | 'documentation' = 'examples';
  activeExample: string = 'fade-in';
  isCodeVisible: boolean = false;

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  exampleCodes: Record<string, string> = {
    'fade-in': `<div appAnimateOnScroll animation="fade-in">
  Content will fade in
</div>`,
    'slide-up': `<div appAnimateOnScroll animation="slide-up" [delay]="200">
  Content will slide up with 200ms delay
</div>`,
    'slide-down': `<div appAnimateOnScroll animation="slide-down">
  Content will slide down
</div>`,
    'slide-left': `<div appAnimateOnScroll animation="slide-left">
  Content will slide from right to left
</div>`,
    'slide-right': `<div appAnimateOnScroll animation="slide-right">
  Content will slide from left to right
</div>`,
    'zoom-in': `<div appAnimateOnScroll animation="zoom-in">
  Content will zoom in
</div>`,
    'zoom-out': `<div appAnimateOnScroll animation="zoom-out">
  Content will zoom out
</div>`,
    'flip-up': `<div appAnimateOnScroll animation="flip-up">
  Content will flip up
</div>`,
    'flip-down': `<div appAnimateOnScroll animation="flip-down">
  Content will flip down
</div>`,
    'rotate-in': `<div appAnimateOnScroll animation="rotate-in">
  Content will rotate and scale in
</div>`,
    staggered: `<div *ngFor="let item of items; let i = index" 
     appAnimateOnScroll 
     animation="slide-up" 
     [delay]="i * 100">
  Item {{ i + 1 }}
</div>`,
    repeat: `<div appAnimateOnScroll 
     animation="fade-in" 
     [once]="false">
  This will animate every time you scroll
</div>`,
  };

  setTab(tab: 'examples' | 'documentation') {
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
