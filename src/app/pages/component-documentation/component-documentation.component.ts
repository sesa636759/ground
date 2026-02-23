import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  signal,
  computed,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { ActivatedRoute } from '@angular/router';
import {
  ComponentDocsService,
  ComponentDocumentation,
  ComponentProp,
} from '../../services/component-docs.service';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [CommonModule, DemoSidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
})
export class ComponentDocumentationComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() componentId: string | undefined;
  componentDoc: ComponentDocumentation | undefined;
  isEmbedded = false;

  activeSection = signal<string>('overview');
  filterText = signal<string>('');
  showScrollTop = signal<boolean>(false);

  sections = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-info-circle' },
    { id: 'usage', label: 'Usage', icon: 'fas fa-code' },
    { id: 'properties', label: 'Properties', icon: 'fas fa-list-ul' },
    { id: 'events', label: 'Events', icon: 'fas fa-bolt' },
    { id: 'limitations', label: 'Considerations', icon: 'fas fa-shield-alt' },
    { id: 'examples', label: 'Examples', icon: 'fas fa-vials' },
  ];

  filteredProps = computed(() => {
    if (!this.componentDoc) return [];
    const filter = this.filterText().toLowerCase();
    if (!filter) return this.componentDoc.props;

    return this.componentDoc.props.filter(
      (p) =>
        (p.name && p.name.toLowerCase().includes(filter)) ||
        (p.description && p.description.toLowerCase().includes(filter)) ||
        (p.type && p.type.toLowerCase().includes(filter)),
    );
  });

  get sidebarSections() {
    return this.sections.map((s) => ({
      ...s,
      // The anchor specifically needs to exact target HTML ID
      id: this.getSectionId(s.id),
    }));
  }

  private observer: IntersectionObserver | undefined;

  constructor(
    private route: ActivatedRoute,
    private componentDocsService: ComponentDocsService,
    private elementRef: ElementRef,
  ) {}

  ngOnInit(): void {
    if (this.componentId) {
      this.isEmbedded = true;
      this.componentDoc = this.componentDocsService.getComponentDocs(this.componentId);
    } else {
      this.route.queryParams.subscribe((params) => {
        const id = params['component'];
        if (id) {
          this.componentDoc = this.componentDocsService.getComponentDocs(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    const scrollHandler = () => {
      if (this.isEmbedded) {
        const scrollContainer = this.getScrollParent(this.elementRef.nativeElement);
        if (scrollContainer) {
          this.showScrollTop.set(scrollContainer.scrollTop > 400);
        }
      } else {
        this.showScrollTop.set(window.scrollY > 400);
      }
    };

    if (this.isEmbedded) {
      setTimeout(() => {
        const scrollContainer = this.getScrollParent(this.elementRef.nativeElement);
        if (scrollContainer) {
          scrollContainer.addEventListener('scroll', scrollHandler);
          (this as any)._scrollContainer = scrollContainer;
          (this as any)._scrollHandler = scrollHandler;
        }
      }, 500);
    } else {
      window.addEventListener('scroll', scrollHandler);
    }
  }

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
    window.removeEventListener('scroll', () => {});
    if ((this as any)._scrollContainer && (this as any)._scrollHandler) {
      (this as any)._scrollContainer.removeEventListener('scroll', (this as any)._scrollHandler);
    }
  }

  private initIntersectionObserver() {
    let root = null;
    if (this.isEmbedded) {
      root = this.getScrollParent(this.elementRef.nativeElement);
    }

    const options = {
      root: root,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    // Pre-select the first section as active immediately
    if (this.sections.length > 0 && !this.activeSection()) {
      this.activeSection.set(this.sections[0].id);
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the viewport/tabs are currently hidden (display: none via pane-hidden),
        // bounding client rects become 0. We should ignore intersection hits if rect is size 0.
        if (entry.isIntersecting && entry.boundingClientRect.height > 0) {
          // Extract the original ID if prefixed
          const id = entry.target.id;
          const originalId =
            this.componentId && id.startsWith(this.componentId + '-')
              ? id.substring(this.componentId.length + 1)
              : id;
          this.activeSection.set(originalId);
        }
      });
    }, options);

    this.sections.forEach((section) => {
      const dynamicId = this.getSectionId(section.id);
      const element = document.getElementById(dynamicId);
      if (element) this.observer?.observe(element);
    });
  }

  getSectionId(sectionId: string): string {
    return this.componentId ? `${this.componentId}-${sectionId}` : sectionId;
  }

  scrollTo(sectionId: string) {
    const dynamicId = this.getSectionId(sectionId);
    const element = document.getElementById(dynamicId);

    if (element) {
      // Find the scrollable container
      const scrollContainer = this.getScrollParent(element);
      const isWindow =
        !scrollContainer ||
        scrollContainer === document.documentElement ||
        scrollContainer === document.body;

      // Calculate offset based on context
      // For embedded, we have the sticky mini-nav (~60px) + some buffer
      // For standalone, we have the sticky sidebar, but the window scrolls
      const offset = this.isEmbedded ? 100 : 80;

      if (isWindow) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      } else if (scrollContainer) {
        // Calculate relative position inside the scroll container
        const elementTop = element.getBoundingClientRect().top;
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const relativeTop = elementTop - containerTop + scrollContainer.scrollTop;

        scrollContainer.scrollTo({
          top: relativeTop - offset,
          behavior: 'smooth', // 'smooth' might be choppy in some browsers inside nested containers, but let's try
        });
      }
    }
  }

  // Helper to find the nearest scrollable parent
  private getScrollParent(node: HTMLElement | null): HTMLElement | null {
    if (!node) {
      return null;
    }

    if (node.scrollHeight > node.clientHeight) {
      const style = getComputedStyle(node);
      const overflowY = style.overflowY;
      if (overflowY === 'auto' || overflowY === 'scroll') {
        // Specifically for our demo-tabs case, we might be looking at the .viewport-pane
        return node;
      }
    }

    return this.getScrollParent(node.parentElement);
  }

  scrollToTop() {
    // If embedded, scroll the container
    if (this.isEmbedded && this.componentDoc) {
      // Check componentDoc as a proxy for initialization
      // Try to find the container relative to a known element, e.g. the first section or the wrapper
      const wrapper = document.querySelector('.docs-wrapper');
      const scrollContainer = this.getScrollParent(wrapper as HTMLElement);
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async copyText(text: string) {
    await navigator.clipboard.writeText(text);
  }

  goBack() {
    window.history.back();
  }
}
