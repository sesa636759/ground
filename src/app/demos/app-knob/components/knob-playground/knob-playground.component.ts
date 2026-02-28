import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  signal,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-knob-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppInputValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './knob-playground.component.html',
  styleUrl: './knob-playground.component.scss',
})
export class KnobPlaygroundComponent implements AfterViewInit {
  @ViewChild('knobElement') knobElement!: ElementRef;

  pgConfig = {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    size: 150,
    strokeWidth: 10,
    valueColor: '#3b82f6',
    readonly: false,
    showValue: true,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'value', title: 'Value Control', icon: '🔢' },
    { id: 'visuals', title: 'Visuals', icon: '🎨' },
  ]);

  defaultOpen = JSON.stringify(['value']);
  generatedCodeSignal = signal<string>('');
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
    if (!this.knobElement) return '';
    return generatePlaygroundCode(this.knobElement.nativeElement as Element, 'ui-knob');
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  onValueChange(event: any) {
    this.pgConfig.value = event.detail.value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 150,
      strokeWidth: 10,
      valueColor: '#3b82f6',
      readonly: false,
      showValue: true,
    };
    this.updateConfig();
  }
}
