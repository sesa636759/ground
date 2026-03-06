import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

export type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up'
  | 'flip-down'
  | 'rotate-in';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animation: AnimationType = 'fade-in';
  @Input() delay: number = 0; // Delay in milliseconds
  @Input() duration: number = 600; // Duration in milliseconds
  @Input() threshold: number = 0.1; // Intersection threshold (0-1)
  @Input() once: boolean = true; // Animate only once

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.setupElement();
    this.createObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupElement() {
    // Set initial state
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', `all ${this.duration}ms ease-out`);

    // Apply initial transform based on animation type
    const initialTransform = this.getInitialTransform();
    if (initialTransform) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', initialTransform);
    }
  }

  private getInitialTransform(): string {
    switch (this.animation) {
      case 'slide-up':
        return 'translateY(60px)';
      case 'slide-down':
        return 'translateY(-60px)';
      case 'slide-left':
        return 'translateX(60px)';
      case 'slide-right':
        return 'translateX(-60px)';
      case 'zoom-in':
        return 'scale(0.8)';
      case 'zoom-out':
        return 'scale(1.2)';
      case 'flip-up':
        return 'perspective(600px) rotateX(45deg)';
      case 'flip-down':
        return 'perspective(600px) rotateX(-45deg)';
      case 'rotate-in':
        return 'rotate(-180deg) scale(0.5)';
      default:
        return '';
    }
  }

  private createObserver() {
    const options = {
      threshold: this.threshold,
      rootMargin: '0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!this.once || !this.hasAnimated) {
            this.animate();
            this.hasAnimated = true;
          }
        } else if (!this.once && this.hasAnimated) {
          this.reset();
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animate() {
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'none');
    }, this.delay);
  }

  private reset() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    const initialTransform = this.getInitialTransform();
    if (initialTransform) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', initialTransform);
    }
    this.hasAnimated = false;
  }
}
