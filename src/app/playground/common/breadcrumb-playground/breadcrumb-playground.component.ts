import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-breadcrumb-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './breadcrumb-playground.component.html',
  styleUrl: './breadcrumb-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmBreadcrumbPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'config', title: 'Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['config'];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Pills', value: 'pills' },
    { label: 'Glass', value: 'glass' },
  ];

  items = [
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones', href: '/products/electronics/smartphones' },
    { label: 'iPhone 15 Pro', active: true },
  ];

  itemsJson = JSON.stringify(this.items);

  // Edge case: items with icons/badges
  longItems = [
    { label: 'Home', icon: 'fas fa-home', badge: 'New', href: '/' },
    { label: 'Category', icon: 'fas fa-folder', href: '/category' },
    { label: 'Subcategory', icon: 'fas fa-tags', badge: '!', href: '/category/sub' },
    { label: 'Product', icon: 'fas fa-box', href: '/category/sub/product' },
    { label: 'Details', active: true },
  ];
  longItemsJson = JSON.stringify(this.longItems);

  // Edge case: very long breadcrumb path
  veryLongItems = Array.from({ length: 12 }, (_, i) => ({
    label: `Step ${i + 1}`,
    href: `/step/${i + 1}`,
  })).concat([{ label: 'Final', href: '/step/final' }]);
  veryLongItemsJson = JSON.stringify(this.veryLongItems);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      separator: '/',
      maxItems: 0,
      size: 'md',
      variant: 'default',
      showHome: true,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      let code = this.getCleanFormattedDom(this.demoElement, 'ui-breadcrumb');
      code = code.replace('></ui-breadcrumb>', '\n  [items]="items"\n></ui-breadcrumb>');
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  onBreadcrumbClick(event: any) {
    this.logEvent(`Breadcrumb clicked: ${event.detail?.label || event.detail}`);
  }
}
