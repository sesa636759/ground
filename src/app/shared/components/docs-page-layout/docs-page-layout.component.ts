import { Component, Input, signal, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface PageSection {
  id: string;
  label: string;
}

export interface PageNav {
  label: string;
  title: string;
  url: string;
}

@Component({
  selector: 'pg-docs-page-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './docs-page-layout.component.html',
  styleUrl: './docs-page-layout.component.scss',
})
export class DocsPageLayoutComponent implements AfterViewInit, OnDestroy {
  @Input() title!: string;
  @Input() description!: string;
  @Input() sections: PageSection[] = [];
  @Input() prevLink?: PageNav;
  @Input() nextLink?: PageNav;

  activeSection = signal<string>('');
  private observer: IntersectionObserver | undefined;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  scrollTo(id: string) {
    this.activeSection.set(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  private initIntersectionObserver() {
    const options = {
      root: null, // viewport
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    if (this.sections.length > 0) {
      this.activeSection.set(this.sections[0].id);
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.boundingClientRect.height > 0) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    // Give the projected content time to render
    setTimeout(() => {
      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          this.observer?.observe(element);
        }
      });
    }, 100);
  }
}
