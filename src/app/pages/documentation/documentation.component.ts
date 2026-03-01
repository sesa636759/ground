import { Component, signal, computed, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppMasonryComponent } from '../../shared/components/app-masonry/app-masonry.component';
import {
  ComponentDocsService,
  ComponentDocumentation,
} from '../../services/component-docs.service';
import { COMPONENT_SVG_MAP } from '../../shared/utils/component-svg-map';
import { ComponentCardComponent } from '../../shared/components/component-card/component-card.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, AppMasonryComponent, ComponentCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss',
})
export class DocumentationComponent implements OnInit {
  masonryBreakpoints = { 1400: 4, 1000: 3, 600: 2, 0: 1 };

  searchText = signal('');
  isSearchFocused = signal(false);
  activeTab = signal<'all' | 'guides' | 'components' | 'utilities'>('all');
  selectedGuideId = signal<string>('');
  isHubArea = signal(true);

  components = signal<ComponentDocumentation[]>([]);

  guideCategories = [
    {
      label: 'Getting Started',
      icon: 'fas fa-rocket',
      guides: [
        {
          id: 'introduction',
          title: 'Overview',
          desc: 'Design philosophy and core principles',
          icon: 'fas fa-layer-group',
        },
        {
          id: 'installation',
          title: 'Installation',
          desc: 'Install the package and configure dependencies',
          icon: 'fas fa-download',
        },
        {
          id: 'quick-start',
          title: 'Quick Start',
          desc: 'Build your first UI component in minutes',
          icon: 'fas fa-bolt',
        },
        {
          id: 'frameworks',
          title: 'Supported Frameworks',
          desc: 'Angular, React, Vue and Web Components',
          icon: 'fas fa-puzzle-piece',
        },
      ],
    },
    {
      label: 'Customization',
      icon: 'fas fa-palette',
      guides: [
        {
          id: 'theming',
          title: 'Theming',
          desc: 'Design tokens, dark mode and color systems',
          icon: 'fas fa-paint-brush',
        },
        {
          id: 'usage',
          title: 'Usage Guide',
          desc: 'Patterns and principles for every component',
          icon: 'fas fa-laptop-code',
        },
        {
          id: 'styling',
          title: 'Custom Styling',
          desc: 'Override and extend component styles safely',
          icon: 'fas fa-css3-alt',
        },
      ],
    },
    {
      label: 'Support',
      icon: 'fas fa-life-ring',
      guides: [
        {
          id: 'faq',
          title: 'FAQ',
          desc: 'Frequently asked questions answered',
          icon: 'fas fa-question-circle',
        },
        {
          id: 'changelog',
          title: 'Changelog',
          desc: 'Release notes and version history',
          icon: 'fas fa-history',
        },
        {
          id: 'migration',
          title: 'Migration Guide',
          desc: 'Upgrade smoothly from previous versions',
          icon: 'fas fa-exchange-alt',
        },
      ],
    },
  ];

  get totalGuides() {
    return this.guideCategories.reduce((s, c) => s + c.guides.length, 0);
  }

  filteredComponents = computed(() => {
    const list = this.components();
    const search = this.searchText().toLowerCase();
    if (!search) return list;
    return list.filter(
      (c) =>
        (c.name && c.name.toLowerCase().includes(search)) ||
        (c.shortDescription && c.shortDescription.toLowerCase().includes(search)),
    );
  });

  filteredGuideCategories = computed(() => {
    const search = this.searchText().toLowerCase();
    return this.guideCategories
      .map((cat) => ({
        ...cat,
        guides: !search
          ? cat.guides
          : cat.guides.filter(
              (g) =>
                g.title.toLowerCase().includes(search) || g.desc.toLowerCase().includes(search),
            ),
      }))
      .filter((cat) => cat.guides.length > 0);
  });

  filteredGuides = computed(() => {
    const allGuides = this.guideCategories.flatMap((c) => c.guides);
    const search = this.searchText().toLowerCase();
    if (!search) return allGuides;
    return allGuides.filter(
      (g) => g.title.toLowerCase().includes(search) || g.desc.toLowerCase().includes(search),
    );
  });

  flatGuideAccordionItems = computed(() => {
    return JSON.stringify(
      this.filteredGuides().map((g) => ({
        id: g.id,
        title: g.title,
        content: `<p style="margin:0;color:var(--text-secondary,#64748b);font-size:.9rem">${g.desc}</p>`,
      })),
    );
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private componentDocsService: ComponentDocsService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.components.set(this.componentDocsService.getAllComponents());
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section');
      if (section && ['components', 'guides', 'utilities'].includes(section)) {
        this.activeTab.set(section as any);
        this.isHubArea.set(false);
      } else {
        this.activeTab.set('all');
        this.isHubArea.set(true);
      }
    });
  }

  getPreviewSvg(id: string): SafeHtml {
    const normalizedId = id.split('/').pop() || id;
    const svg = COMPONENT_SVG_MAP[normalizedId] ?? COMPONENT_SVG_MAP['default'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  onSearchInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchText.set(val);
    if (val) this.selectedGuideId.set('');
  }

  clearSearch(input: HTMLInputElement) {
    input.value = '';
    this.searchText.set('');
    input.focus();
  }

  flatGuideAccordionItems = computed(() => {
    const items = this.filteredGuides().map((g) => ({
      id: g.id,
      title: g.title,
      subtitle: g.desc,
      icon: g.icon.replace('fas fa-', ''),
      iconLibrary: g.icon.includes('fas') ? 'fontawesome' : 'default',
    }));
    return JSON.stringify(items);
  });

  navigateTo(section: string) {
    if (section === 'all') {
      this.router.navigate(['/documentation']);
    } else {
      this.router.navigate(['/documentation', section]);
    }
  }

  selectGuide(id: string) {
    this.selectedGuideId.set(id);
    this.router.navigate(['/documentation', 'guides']);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  }

  getGuideAccordionItems(cat: (typeof this.guideCategories)[0]): string {
    return JSON.stringify(
      cat.guides.map((g) => ({
        id: g.id,
        title: g.title,
        content: `<p style="margin:0;color:var(--text-secondary,#64748b);font-size:.9rem">${g.desc}</p>`,
      })),
    );
  }

  faqAccordionItems = JSON.stringify([
    {
      id: 'faq-1',
      title: 'Is GROUND UI free to use?',
      content:
        '<p>Yes. GROUND UI is MIT licensed and completely free for personal and commercial projects.</p>',
    },
    {
      id: 'faq-2',
      title: 'Does it work with Angular standalone components?',
      content:
        "<p>Yes — all components work with Angular's standalone API and are tree-shakeable. No NgModule setup required.</p>",
    },
    {
      id: 'faq-3',
      title: 'Are the components WCAG accessible?',
      content:
        '<p>All components meet WCAG 2.1 AA standards with full keyboard navigation, focus management and ARIA attribute support.</p>',
    },
    {
      id: 'faq-4',
      title: 'Can I use it with Tailwind CSS?',
      content:
        '<p>Yes. Components expose CSS custom properties so Tailwind utility classes can coexist without conflicts.</p>',
    },
    {
      id: 'faq-5',
      title: 'How do I report a bug or request a feature?',
      content:
        '<p>Open an issue on our GitHub repository. Include a minimal reproduction and environment details for the fastest response.</p>',
    },
    {
      id: 'faq-6',
      title: 'Is server-side rendering (SSR) supported?',
      content:
        '<p>SSR support is experimental in v2. Full Angular Universal and Next.js SSR stability is planned for v3.</p>',
    },
  ]);

  getSelectedGuide() {
    const id = this.selectedGuideId();
    for (const cat of this.guideCategories) {
      const found = cat.guides.find((g) => g.id === id);
      if (found) return found;
    }
    return undefined;
  }

  viewComponentDoc(componentId: string) {
    this.router.navigate(['/component-documentation'], {
      queryParams: { component: componentId },
    });
  }

  async copyText(text: string) {
    await navigator.clipboard.writeText(text);
  }

  getComponentIcon(id: string): string {
    const iconMap: Record<string, string> = {
      accordion: 'chevrons-up-down',
      button: 'mouse-pointer-click',
      'button-toggle': 'toggle-left',
      card: 'square',
      input: 'text-cursor-input',
      dialog: 'layout-panel-top',
      'dialog-box': 'layout-panel-top',
      checkbox: 'check-square',
      radio: 'circle-dot',
      select: 'chevron-down-circle',
      table: 'table',
      tabs: 'panel-top',
      badge: 'tag',
      tooltip: 'message-circle-more',
      alert: 'triangle-alert',
      progress: 'loader',
      spinner: 'refresh-cw',
      slider: 'sliders-horizontal',
      switch: 'toggle-right',
      toggle: 'toggle-right',
      avatar: 'user-circle',
      'avatar-group': 'users',
      breadcrumb: 'chevrons-right',
      pagination: 'list-ordered',
      navigation: 'navigation',
      sidebar: 'panel-left',
      drawer: 'panel-right',
      stepper: 'git-commit-horizontal',
      'smart-stepper': 'footprints',
      timeline: 'git-branch',
      tree: 'git-branch-plus',
      'tree-list': 'git-branch-plus',
      'data-grid': 'layout-grid',
      'advanced-data-table': 'table-2',
      chart: 'bar-chart-2',
      'app-chart': 'bar-chart-2',
      'bar-chart': 'bar-chart-2',
      'pie-chart': 'pie-chart',
      'waffle-chart': 'grid-2x2',
      speedometer: 'gauge',
      knob: 'disc',
      calendar: 'calendar',
      datepicker: 'calendar-days',
      'color-picker': 'pipette',
      autocomplete: 'search',
      'pattern-input': 'regex',
      'transfer-list': 'arrow-left-right',
      picklist: 'move-horizontal',
      'speed-dial': 'zap',
      'file-upload': 'upload',
      'rich-text': 'pencil-line',
      menu: 'menu',
      'smart-menu': 'square-menu',
      popover: 'message-square',
      'context-menu': 'list',
      skeleton: 'loader-circle',
      divider: 'minus',
      chip: 'hash',
      rating: 'star',
      snackbar: 'bell',
      notification: 'bell-ring',
      carousel: 'gallery-horizontal',
      'image-viewer': 'image',
      'code-preview': 'code',
      'code-editor': 'code-2',
      icon: 'shapes',
      dropdown: 'chevron-down',
      'range-slider': 'sliders-horizontal',
      'meter-group': 'activity',
      'split-button': 'split',
      timer: 'timer',
      'aside-panel': 'panel-right-open',
      dock: 'app-window',
      pill: 'pill',
      'scroll-top': 'arrow-up-circle',
      'tag-group': 'tags',
      tag: 'tags',
      'otp-input': 'key-round',
      'resizable-panel': 'panel-right',
      'layout-manager': 'layout-dashboard',
      dashboard: 'layout-dashboard',
      panel: 'layout-panel-left',
    };
    return iconMap[id] ?? 'box';
  }
}
