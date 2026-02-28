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
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-divider-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './divider-playground.component.html',

  styleUrl: './divider-playground.component.scss',
})
export class DividerPlaygroundComponent implements AfterViewInit {
  @ViewChild('divider') divider!: ElementRef;
  pgConfig = {
    text: 'OR',
    icon: '',
    badge: '',
    variant: 'solid',
    size: 'md',
    orientation: 'horizontal',
    pattern: 'none',
    shape: 'none',
    loading: false,
  };

  pgAccordionItems = JSON.stringify([{ id: 'config', title: 'Configuration', icon: '⚙️' }]);
  accordionDefaultOpen = JSON.stringify(['config']);

  variantOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Dashed', value: 'dashed' },
    { label: 'Dotted', value: 'dotted' },
    { label: 'Double Solid', value: 'double-solid' },
    { label: 'Gradient', value: 'gradient' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  patternOptions = [
    { label: 'None', value: 'none' },
    { label: 'Dots', value: 'dots' },
    { label: 'Stripes', value: 'stripes' },
    { label: 'Zigzag', value: 'zigzag' },
  ];

  shapeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Curve', value: 'curve' },
    { label: 'Wave', value: 'wave' },
    { label: 'Triangle', value: 'triangle' },
    { label: 'Zigzag', value: 'zigzag' },
    { label: 'Arrow', value: 'arrow' },
  ];

  generatedCode: string = '';
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
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
    if (!this.divider) return '';

    return generatePlaygroundCode(this.divider.nativeElement as Element, 'ui-divider');
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode);
  }

  resetConfig() {
    this.pgConfig = {
      text: 'OR',
      icon: '',
      badge: '',
      variant: 'solid',
      size: 'md',
      orientation: 'horizontal',
      pattern: 'none',
      shape: 'none',
      loading: false,
    };
    this.updateConfig();
  }
}
