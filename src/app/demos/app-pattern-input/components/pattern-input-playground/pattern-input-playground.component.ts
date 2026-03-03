import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-pattern-input-playground',
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
  templateUrl: './pattern-input-playground.component.html',
  styleUrl: './pattern-input-playground.component.scss',
})
export class PatternInputPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '??' },
    { id: 'states', title: 'Behavioral States', icon: '?' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;

  pgConfig = {
    pattern: '(999) 999-9999',
    placeholder: 'Enter phone number',
    disabled: false,
    readonly: false,
  };

  patternOptions = [
    { label: 'Phone: (999) 999-9999', value: '(999) 999-9999' },
    { label: 'Date: 99/99/9999', value: '99/99/9999' },
    { label: 'Card: ****-****-****-****', value: '****-****-****-****' },
    { label: 'Custom: AAA-999', value: 'AAA-999' },
  ];

  generatedCodeSignal = signal('');

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  getCleanFormatedDom(): string {
    if (!this.demoElement) return '';
    return generatePlaygroundCode(this.demoElement.nativeElement as Element, 'ui-pattern-input');
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
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
      pattern: '(999) 999-9999',
      placeholder: 'Enter phone number',
      disabled: false,
      readonly: false,
    };
    this.updateConfig();
  }
}

