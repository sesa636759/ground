import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-anchor-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anchor-playground.component.html',

  styleUrl: './anchor-playground.component.scss',
})
export class AnchorPlaygroundComponent implements AfterViewInit {
  @ViewChild('anchor') anchor!: ElementRef;
  pgConfig = {
    orientation: 'vertical',
    type: 'line',
    scrollOffset: 40,
    showIndicator: true,
    showProgress: true,
    affix: false,
  };

  orientationOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  typeOptions = [
    { label: 'Line', value: 'line' },
    { label: 'Dot', value: 'dot' },
  ];

  pgAccordionItems = JSON.stringify([{ id: 'config', title: 'Configuration', icon: '⚙️' }]);
  defaultOpen = JSON.stringify(['config']);

  links = [
    { id: 'basics', label: 'Basics', target: 'basics-pg' },
    { id: 'api', label: 'API Reference', target: 'api-pg' },
    { id: 'theming', label: 'Theming', target: 'theming-pg' },
  ];

  linksJson = JSON.stringify(this.links);
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
    if (!this.anchor) return '';
    return generatePlaygroundCode(this.anchor.nativeElement as Element, 'ui-anchor');
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
      orientation: 'vertical',
      type: 'line',
      scrollOffset: 40,
      showIndicator: true,
      showProgress: true,
      affix: false,
    };
    this.updateConfig();
  }
}
