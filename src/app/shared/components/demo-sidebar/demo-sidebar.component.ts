import {
  Component,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-sidebar',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        min-height: 0;
        flex-shrink: 0;
      }
    `,
  ],
  template: `
    <aside class="examples-sidebar">
      <div class="sidebar-title">{{ title }}</div>

      <div *ngIf="useAnchor; else navList" class="sidebar-nav">
        <ui-anchor
          [attr.links]="anchorLinks"
          [attr.scroll-container]="scrollContainer"
          type="line"
          show-progress
        ></ui-anchor>
      </div>

      <ng-template #navList>
        <ul class="nav-list" *ngIf="variants && variants.length > 0">
          <li *ngFor="let variant of variants">
            <a (click)="scrollToSection(variant.id)">
              <span class="nav-icon" *ngIf="variant.icon">{{ variant.icon }}</span>
              {{ variant.label || variant.title || variant.name || variant.id }}
            </a>
          </li>
        </ul>
      </ng-template>
    </aside>
  `,
})
export class DemoSidebarComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() variants: any[] = [];
  @Input() title: string = 'Sections';
  @Input() useAnchor: boolean = false;
  @Input() scrollContainer: string = '.examples-content';
  @Input() activeLink: string = '';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeLink'] && changes['activeLink'].currentValue) {
      setTimeout(() => {
        const anchorEl = this.el.nativeElement.querySelector('ui-anchor');
        if (anchorEl) {
          anchorEl.activeLink = this.activeLink;
        }
      }, 0);
    }
  }

  ngAfterViewInit() {
    // ui-anchor calculates bounding boxes incorrectly if its parent tab is hidden (display: none).
    // This observer detects when the sidebar finally becomes visible.
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          const anchorEl = this.el.nativeElement.querySelector('ui-anchor');
          if (anchorEl) {
            const scroller = document.querySelector(this.scrollContainer);
            // If the user hasn't scrolled down yet, forcefully reset the active link back
            // to what it should be (ignoring the bad 0x0 math the component calculated).
            if (!scroller || scroller.scrollTop < 20) {
              const targetLink = this.activeLink || this.variants[0]?.id;
              if (targetLink) {
                anchorEl.activeLink = targetLink;
              }
            }
          }
        }, 100);
      }
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  get anchorLinks() {
    return JSON.stringify(
      this.variants.map((v) => ({
        id: v.id,
        target: v.id,
        label: v.label || v.title || v.name || v.id,
        icon: v.icon,
      })),
    );
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      // scroll to it
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
