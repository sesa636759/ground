import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { categoryNavItems } from '../../data/navigation.data';
import { COMPONENT_SVG_MAP } from '../../shared/utils/component-svg-map';
import { ComponentCardComponent } from '../../shared/components/component-card/component-card.component';

@Component({
  selector: 'pg-showroom',
  standalone: true,
  imports: [CommonModule, RouterModule, ComponentCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.scss',
})
export class ShowroomComponent implements OnInit {
  categories = categoryNavItems;
  activeCategoryId = signal<string>(this.categories[0]?.id || '');
  searchQuery = signal<string>('');

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {}

  activeCategory() {
    return this.categories.find((c) => c.id === this.activeCategoryId());
  }

  visibleComponents() {
    const query = this.searchQuery().toLowerCase();

    // If there's a search, check globally
    if (query) {
      let results: any[] = [];
      this.categories.forEach((cat) => {
        if (cat.children) {
          results = [
            ...results,
            ...cat.children.filter((c) => c.label.toLowerCase().includes(query)),
          ];
        }
      });
      return results;
    }

    // Otherwise return active category's children
    return this.activeCategory()?.children || [];
  }

  onSearch(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  getPreviewSvg(id: string): SafeHtml {
    // Invert the SVG preview color slightly for dark mode or just pass it as is
    const normalizedId = id.split('/').pop() || id;
    const svg = COMPONENT_SVG_MAP[normalizedId] ?? COMPONENT_SVG_MAP['default'];
    const cleanedSvg = svg
      ?.replace(/width="[0-9]+"/, 'width="100%"')
      .replace(/height="[0-9]+"/, 'height="100%"');
    return this.sanitizer.bypassSecurityTrustHtml(cleanedSvg || '');
  }

  getImageUrl(id: string): string | undefined {
    const normalizedId = id.split('/').pop() || id;
    const downloadedCharts = [
      'bar-chart',
      'line-chart',
      'pie-chart',
      'donut-chart',
      'area-chart',
      'polar-area-chart',
      'radial-bar',
      'sparkline',
      'timeline-range',
      'candlestick-chart',
      'ohlc-chart',
      'rose-chart',
      'gantt-chart',
      'waffle-chart',
      'tree-diagram',
      'step-line-chart',
      'waterfall-chart',
      'funnel-chart',
      'lollipop-chart',
    ];
    if (downloadedCharts.includes(normalizedId)) {
      return `assets/charts/${normalizedId}.png`;
    }

    const downloadedComponents = [
      'accordion',
      'advanced-data-table',
      'anchor',
      'animate-on-scroll',
      'aside',
      'avatar-group',
      'avatar',
      'badge',
      'breadcrumb',
      'button-toggle',
      'button',
      'card',
      'carousel',
      'cascade-select',
      'chart',
      'checkbox',
      'chip',
      'code-editor',
      'context-menu',
      'dashboard',
      'dialog-box',
      'divider',
      'dock',
      'dropdown',
      'horizontal-nav',
      'knob',
      'layout-manager',
      'meter-group',
      'nav-bar',
      'pagination',
      'panel',
      'pattern-input',
      'picklist',
      'pill',
      'popover',
      'range-slider',
      'rating',
      'scroll-top',
      'skeleton',
      'smart-menu',
      'smart-stepper',
      'snackbar',
      'speed-dial',
      'speedometer',
      'split-button',
      'stack',
      'stepper',
      'switch',
      'tabs',
      'tag',
      'timeline',
      'timer',
      'top-bar',
      'transfer-list',
      'tree-list',
    ];

    if (downloadedComponents.includes(normalizedId)) {
      return `assets/components/${normalizedId}.jpg`;
    }

    return undefined;
  }

  getComponentDescription(id: string): string {
    if (id.includes('button')) return 'Interactive elements that trigger actions when clicked.';
    if (id.includes('input'))
      return 'Fields that allow users to enter text, numbers, or specific data formats.';
    if (id.includes('card')) return 'Flexible containment blocks used to group related content.';
    if (id.includes('chart')) return 'Visual representations of data.';
    return `Premium enterprise ${id.replace('-', ' ')} component following dark mode styling guidelines.`;
  }

  navigateTo(id: string) {
    this.router.navigate(['/demos', ...id.split('/')]);
  }
}
