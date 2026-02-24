import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
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
export class AnchorPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('anchor') anchor!: ElementRef;
  // Playground State
  pgConfig = {
    mode: 'vertical',
    position: 'left',
    alignment: 'left',
    size: 'medium',
    theme: 'light',
    scrollOffset: 80,
    showTooltip: true,
    showIndicator: true,
    showProgress: false,
    showNumbers: false,
    numberStyle: 'numeric',
    sticky: true,
    affix: false,
    affixOffset: 50,
    smoothScroll: true,
    targetType: 'container', // 'window' or 'container'
  };

  modeOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  positionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  alignmentOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  numberStyleOptions = [
    { label: 'Numeric (1, 2)', value: 'numeric' },
    { label: 'Decimal (01, 02)', value: 'decimal' },
    { label: 'Alpha (a, b)', value: 'alpha' },
    { label: 'Roman (i, ii)', value: 'roman' },
  ];

  anchorItems = JSON.stringify([
    { id: 'section-1', label: 'Introduction', icon: 'fas fa-home', tooltip: 'Start here' },
    {
      id: 'section-2',
      label: 'Features',
      icon: 'fas fa-star',
      badge: 'New',
      tooltip: 'Key features',
    },
    { id: 'section-3', label: 'Configuration', icon: 'fas fa-cog', tooltip: 'Setup guide' },
    { id: 'section-4', label: 'API', icon: 'fas fa-code', tooltip: 'Reference' },
    { id: 'section-5', label: 'Examples', icon: 'fas fa-book', tooltip: 'See more' },
  ]);

  eventLog = signal<string[]>([]);
  generatedCode: string = '';
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

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

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  onAnchorSelect(event: any) {
    this.logEvent(`Selected: ${event.detail.id}`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode);
  }
}
