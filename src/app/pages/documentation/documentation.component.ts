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

  guides = [
    {
      id: 'introduction',
      title: 'Getting Started',
      desc: 'Design philosophy and core concepts',
      icon: 'fas fa-rocket',
    },
    {
      id: 'installation',
      title: 'Installation',
      desc: 'Step-by-step setup and dependencies',
      icon: 'fas fa-download',
    },
    {
      id: 'usage',
      title: 'Usage Guide',
      desc: 'Principles for implementing components',
      icon: 'fas fa-laptop-code',
    },
  ];

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

  filteredGuides = computed(() => {
    const search = this.searchText().toLowerCase();
    if (!search) return this.guides;
    return this.guides.filter(
      (g) =>
        (g.title && g.title.toLowerCase().includes(search)) ||
        (g.desc && g.desc.toLowerCase().includes(search)),
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

  getSelectedGuide() {
    return this.guides.find((g) => g.id === this.selectedGuideId());
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
      chart: 'bar-chart',
      'app-chart': 'bar-chart',
      'bar-chart': 'bar-chart',
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
