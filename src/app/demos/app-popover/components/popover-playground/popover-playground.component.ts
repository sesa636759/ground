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
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { AppPlaygroundComponent } from 'src/app/shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-popover-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './popover-playground.component.html',

  styleUrl: './popover-playground.component.scss',
})
export class PopoverPlaygroundComponent implements AfterViewInit {
  @ViewChild('popover') popover!: ElementRef;
  pgConfig = {
    heading: 'Popover Title',
    content: 'This is the <b>popover</b> content. You can use <i>HTML</i> here!',
    trigger: 'click',
    placement: 'top',
    variant: 'light',
    width: '280px',
    showArrow: true,
    showCloseButton: true,
    backdrop: false,
  };

  triggerOptions = [
    { label: 'Click', value: 'click' },
    { label: 'Hover', value: 'hover' },
    { label: 'Focus', value: 'focus' },
  ];

  placementOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Top Start', value: 'top-start' },
    { label: 'Top End', value: 'top-end' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom Start', value: 'bottom-start' },
    { label: 'Bottom End', value: 'bottom-end' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  variantOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  generatedCodeSignal = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
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
    if (!this.popover) return '';
    return generatePlaygroundCode(
      this.popover.nativeElement as Element,
      'ui-popover',
      '  <button>Target Element</button>\n',
    );
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      heading: 'Popover Title',
      content: 'This is the <b>popover</b> content. You can use <i>HTML</i> here!',
      trigger: 'click',
      placement: 'top',
      variant: 'light',
      width: '280px',
      showArrow: true,
      showCloseButton: true,
      backdrop: false,
    };
    this.updateConfig();
  }
}
