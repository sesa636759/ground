import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-pagination-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pagination-playground.component.html',
  styleUrl: './pagination-playground.component.scss',
})
export class PaginationPlaygroundComponent implements AfterViewInit {
  @ViewChild('pagination') pagination!: ElementRef;

  pgConfig = this.getDefaultConfig();

  eventMessage = signal('Navigate to a page...');
  generatedCode = signal('');

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

  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
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

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  getCleanFormatedDom(): string {
    if (!this.pagination) return '';

    return generatePlaygroundCode(this.pagination.nativeElement as Element, 'ui-pagination');
  }

  updateConfig() {
    // Wait for Angular and Stencil to finish DOM updates
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  onPageChange(event: any) {
    this.pgConfig.currentPage = event.detail;
    this.eventMessage.set(
      `Navigated to page: ${event.detail} at ${new Date().toLocaleTimeString()}`,
    );
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
  }
}
