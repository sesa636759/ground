import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
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
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-accordion-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordian-playground.component.html',

  styleUrl: './accordian-playground.component.scss',
})
export class AccordianPlaygroundComponent implements AfterViewInit {
  @ViewChild('accordion') accordion!: ElementRef;
  pgConfig = {
    multiple: false,
    variant: 'default',
    size: 'md',
    iconPosition: 'end',
    selectedHeaderColor: '#3b82f6',
    hideArrow: false,
    showNumbers: false,
    rtl: false,
    dense: false,
    disabled: false,
    enableSearch: false,
    enableExpandCollapseAll: false,
    enableDragDrop: false,
    enableNested: false,
    loading: false,
    animationDuration: 300,
    animationTiming: 'ease',
    lazy: false,
    headerLevel: 3,
  };

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Splitted', value: 'splitted' },
    { label: 'Light', value: 'light' },
    { label: 'Shadow', value: 'shadow' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  iconPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  expansionModeOptions = [
    { label: 'Single', value: false },
    { label: 'Multiple', value: true },
  ];

  timingOptions = [
    { label: 'Ease', value: 'ease' },
    { label: 'Linear', value: 'linear' },
    { label: 'Ease In', value: 'ease-in' },
    { label: 'Ease Out', value: 'ease-out' },
    { label: 'Ease In Out', value: 'ease-in-out' },
  ];

  playgroundItems = JSON.stringify([
    {
      id: 'p1',
      title: 'First Panel',
      content:
        '<p>This is the content of the first panel. It demonstrates the accordion functionality with customizable settings.</p>',
    },
    {
      id: 'p2',
      title: 'Second Panel (Nested Example)',
      content: '<p>The second panel contains nested items if "Enable Nested" is checked.</p>',
      children: [
        {
          id: 'p2-1',
          title: 'Nested Item 1',
          content: '<p>This is a nested item content.</p>',
        },
        {
          id: 'p2-2',
          title: 'Nested Item 2',
          content: '<p>Another nested item.</p>',
        },
      ],
    },
    {
      id: 'p3',
      title: 'Third Panel',
      content:
        "<p>This is the third panel. Adjust the settings above to see how they affect the accordion's appearance and behavior.</p>",
    },
  ]);

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
    if (!this.accordion) return '';

    return generatePlaygroundCode(this.accordion.nativeElement as Element, 'ui-accordion');
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
      multiple: false,
      variant: 'default',
      size: 'md',
      iconPosition: 'end',
      selectedHeaderColor: '#3b82f6',
      hideArrow: false,
      showNumbers: false,
      rtl: false,
      dense: false,
      disabled: false,
      enableSearch: false,
      enableExpandCollapseAll: false,
      enableDragDrop: false,
      enableNested: false,
      loading: false,
      animationDuration: 300,
      animationTiming: 'ease',
      lazy: false,
      headerLevel: 3,
    };
    this.updateConfig();
  }
}

