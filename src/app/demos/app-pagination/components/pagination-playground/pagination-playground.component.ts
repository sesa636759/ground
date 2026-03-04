import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-pagination-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pagination-playground.component.html',
  styleUrl: './pagination-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaginationPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('pagination') pagination!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'settings', title: 'Basic Settings', icon: '⚙️' },
    { id: 'appearance', title: 'Appearance', icon: '🎨' },
    { id: 'features', title: 'Features', icon: '✨' },
  ]);

  accordionDefaultOpen = JSON.stringify(['settings']);

  typeOptions = [
    { label: 'Basic', value: 'basic' },
    { label: 'Compact', value: 'compact' },
    { label: 'Detailed', value: 'detailed' },
    { label: 'Minimal', value: 'minimal' },
    { label: 'Dropdown', value: 'dropdown' },
    { label: 'Input', value: 'input' },
    { label: 'Indicator', value: 'indicator' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  shapeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Pill', value: 'pill' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      currentPage: 1,
      totalItems: 100,
      itemsPerPage: 10,
      maxVisiblePages: 5,
      type: 'basic',
      size: 'md',
      variant: 'default',
      theme: 'default',
      shape: 'default',
      keyboardNav: true,
      responsiveMode: true,
      rtl: false,
      showFirstLast: true,
      showPageSize: false,
      showTotal: false,
      showJumpTo: false,
      iconOnly: false,
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.pagination, 'ui-pagination');
  }

  onPageChange(event: any) {
    this.pgConfig.currentPage = event.detail;
    this.logEvent(`Navigated to page: ${event.detail}`);
    this.updateConfig();
  }

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
    this.eventLog.set([]);
  }
}
