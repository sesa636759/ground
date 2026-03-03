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
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-stack-playground',
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
  templateUrl: './stack-playground.component.html',

  styleUrl: './stack-playground.component.scss',
})
export class StackPlaygroundComponent implements AfterViewInit {
  @ViewChild('stack') stack!: ElementRef;
  numBoxes = 5;
  get boxes() {
    return Array.from({ length: this.numBoxes }, (_, i) => i + 1);
  }

  pgConfig = {
    direction: 'horizontal',
    spacing: '16px',
    align: 'center',
    justify: 'center',
    max: 0,
    overlap: false,
    showDividers: false,
  };

  directionOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  alignOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Stretch', value: 'stretch' },
  ];

  justifyOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Space Between', value: 'space-between' },
  ];

  generatedCodeSignal = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateConfig();
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
    if (!this.stack) return '';
    const items = Array.from(
      { length: Math.min(this.numBoxes, 3) },
      (_, i) => `  <div>Item ${i + 1}</div>`,
    ).join('\n');
    return generatePlaygroundCode(this.stack.nativeElement as Element, 'ui-stack', `${items}\n`);
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
      direction: 'horizontal',
      spacing: '16px',
      align: 'center',
      justify: 'center',
      max: 0,
      overlap: false,
      showDividers: false,
    };
    this.numBoxes = 5;
    this.updateConfig();
  }
}

