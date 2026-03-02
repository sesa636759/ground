import {
  Component,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  OnChanges,
  SimpleChanges,
  NgZone,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-sidebar',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './demo-sidebar.component.html',
  styleUrl: './demo-sidebar.component.scss',
})
export class DemoSidebarComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() variants: any[] = [];
  @Input() title: string = 'Sections';
  @Input() useAnchor: boolean = false; // kept for backwards compat, unused
  @Input() scrollContainer: string = '.examples-content';
  @Input() activeLink: string = '';

  activeId: string = '';

  private scrollHandler?: () => void;
  private containerEl: HTMLElement | null = null;
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeLink']?.currentValue) {
      this.activeId = this.activeLink;
    }
    if (changes['variants']?.currentValue?.length && !this.activeId) {
      this.activeId = this.variants[0]?.id || '';
    }
  }

  ngAfterViewInit() {
    if (!this.activeId && this.variants.length > 0) {
      this.activeId = this.variants[0].id;
    }

    // Watch for when this pane becomes visible (tabs hide panes with display:none)
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => this.attachScrollListener(), 200);
          }
        },
        { threshold: 0.01 },
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  private getContainer(): HTMLElement | null {
    const sel = this.scrollContainer.trim();

    // Try ID lookup first
    if (sel.startsWith('#')) {
      return document.getElementById(sel.slice(1)) as HTMLElement | null;
    }

    // Sibling lookup: parent of this sidebar -> find matching child
    const parent = this.el.nativeElement.parentElement as HTMLElement | null;
    if (parent) {
      const found = parent.querySelector<HTMLElement>(sel);
      if (found) return found;
    }

    // Walk up ancestors
    let anc: HTMLElement | null = parent?.parentElement || null;
    while (anc && anc !== document.body) {
      const found = anc.querySelector<HTMLElement>(sel);
      if (found) return found;
      anc = anc.parentElement as HTMLElement | null;
    }

    return null;
  }

  private attachScrollListener() {
    this.containerEl = this.getContainer();
    if (!this.containerEl) return;

    if (this.scrollHandler) {
      this.containerEl.removeEventListener('scroll', this.scrollHandler);
    }

    this.ngZone.runOutsideAngular(() => {
      this.scrollHandler = () => {
        this.ngZone.run(() => this.syncActiveFromScroll());
      };
      this.containerEl!.addEventListener('scroll', this.scrollHandler!, { passive: true });
    });

    this.syncActiveFromScroll();
  }

  private syncActiveFromScroll() {
    const container = this.containerEl;
    if (!container || !this.variants.length) return;

    const threshold = container.scrollTop + 100;
    let newActive = this.variants[0]?.id || '';

    for (const v of this.variants) {
      const el = document.getElementById(v.id);
      if (!el) continue;
      // Position of element relative to container
      const containerTop = container.getBoundingClientRect().top;
      const elTop = el.getBoundingClientRect().top - containerTop + container.scrollTop;
      if (elTop <= threshold) {
        newActive = v.id;
      }
    }

    if (newActive !== this.activeId) {
      this.activeId = newActive;
    }
  }

  onLinkClick(id: string, event: Event) {
    event.preventDefault();
    this.activeId = id;

    const target = document.getElementById(id);
    if (!target) {
      console.warn(`[DemoSidebar] Element #${id} not found in DOM`);
      return;
    }

    // Refresh container reference (needed when pane was hidden at init time)
    this.containerEl = this.getContainer();

    if (!this.containerEl) {
      // Fallback: scrollIntoView will scroll the nearest scrollable ancestor
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Scroll the container so target is at the top (with small breathing room)
    const containerRect = this.containerEl.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    // targetRect.top is relative to viewport; we need it relative to the container
    const newScrollTop = this.containerEl.scrollTop + (targetRect.top - containerRect.top) - 16;

    this.containerEl.scrollTo({
      top: Math.max(0, newScrollTop),
      behavior: 'smooth',
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.containerEl && this.scrollHandler) {
      this.containerEl.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
