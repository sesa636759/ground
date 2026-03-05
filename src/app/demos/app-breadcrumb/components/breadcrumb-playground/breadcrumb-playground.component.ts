import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-breadcrumb-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './breadcrumb-playground.component.html',
  styleUrl: './breadcrumb-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'config', title: 'Configuration', icon: '⚙️' },
    { id: 'appearance', title: 'Appearance', icon: '🎨' },
  ]);

  defaultOpen = JSON.stringify(['config']);

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
