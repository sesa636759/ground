import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-pagination-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pagination-playground.component.html',
  styleUrl: './pagination-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmPaginationPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('pagination') pagination!: ElementRef;

  pgConfig = this.getDefaultConfig();
  protected readonly Math = Math;

  pgAccordionItems = [
    { id: 'settings', title: 'Core Settings', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Styling & Layout', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'controls', title: 'Navigation Controls', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced Logic', icon: 'database', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['settings', 'appearance'];

  typeOptions = [
    { label: 'Basic', value: 'basic' },
    { label: 'Compact', value: 'compact' },
    { label: 'Detailed', value: 'detailed' },
    { label: 'Minimal', value: 'minimal' },
    { label: 'Advanced', value: 'advanced' },
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

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      currentPage: 1,
      totalItems: 120,
      itemsPerPage: 10,
      maxVisiblePages: 5,
      type: 'basic',
      size: 'md',
      variant: 'default',
      theme: 'default',
      shape: 'default',
      // Appearance
      showFirstLast: true,
      showPrevNext: true,
      iconOnly: false,
      compact: false,
      responsiveMode: true,
      rtl: false,
      // Controls
      showPageSize: false,
      showTotal: false,
      showJumpTo: false,
      quickJump: false,
      quickJumpStep: 5,
      // Logic
      infinite: false,
      loading: false,
      autoHide: false,
      showProgress: false,
      keyboardNav: true,
      sticky: false,
      stickyPosition: 'bottom',
      ellipsisTooltip: true,
    };
  }

  updateConfig() {
    const config = this.pgConfig;
    let code = `<ui-pagination\n`;
    code += `  [current-page]="${config.currentPage}"\n`;
    code += `  [total-items]="${config.totalItems}"\n`;
    code += `  [items-per-page]="${config.itemsPerPage}"\n`;
    code += `  type="${config.type}"\n`;
    if (config.size !== 'md') code += `  size="${config.size}"\n`;
    if (config.variant !== 'default') code += `  variant="${config.variant}"\n`;
    if (config.theme !== 'default') code += `  theme="${config.theme}"\n`;
    if (config.shape !== 'default') code += `  shape="${config.shape}"\n`;
    if (!config.showFirstLast) code += `  [show-first-last]="false"\n`;
    if (!config.showPrevNext) code += `  [show-prev-next]="false"\n`;
    if (config.iconOnly) code += `  icon-only\n`;
    if (config.compact) code += `  compact\n`;
    if (config.showPageSize) code += `  show-page-size\n`;
    if (config.showTotal) code += `  show-total\n`;
    if (config.showJumpTo) code += `  show-jump-to\n`;
    if (config.quickJump) {
      code += `  quick-jump\n`;
      code += `  [quick-jump-step]="${config.quickJumpStep}"\n`;
    }
    if (config.infinite) {
      code += `  infinite\n`;
      if (config.loading) code += `  loading\n`;
    }
    if (config.autoHide) code += `  auto-hide\n`;
    if (config.showProgress) code += `  show-progress\n`;
    if (config.sticky) {
      code += `  sticky\n`;
      code += `  sticky-position="${config.stickyPosition}"\n`;
    }
    if (!config.ellipsisTooltip) code += `  [ellipsis-tooltip]="false"\n`;
    code += `  (pageChange)="onPageChange($event)"\n`;
    code += `></ui--pagination>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onPageChange(event: any) {
    this.pgConfig.currentPage = event.detail.page ?? event.detail;
    if (event.detail.itemsPerPage) {
      this.pgConfig.itemsPerPage = event.detail.itemsPerPage;
    }
    this.logEvent(`Navigated to page: ${this.pgConfig.currentPage}`);
    this.updateConfig();
  }
}
