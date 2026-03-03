import { UiDropdownValueAccessorDirective } from 'src/app/directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-speedometer-playground',
  standalone: true,
  imports: [
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,CommonModule, FormsModule, AppPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speedometer-playground.component.html',
  styleUrl: './speedometer-playground.component.scss',
})
export class SpeedometerPlaygroundComponent implements AfterViewInit {
  @ViewChild('speedometerElement') speedometerElement!: ElementRef;

  pgConfig = {
    value: 65,
    min: 0,
    max: 100,
    label: 'km/h',
    size: 250,
    arcWidth: 20,
    colorMode: 'gradient',
  };

  pgAccordionItems = JSON.stringify([
    { id: 'metric', title: 'Metric Controls', icon: '??' },
    { id: 'appearance', title: 'Appearance', icon: '??' },
  ]);

  accordionDefaultOpen = JSON.stringify(['metric']);

  colorModeOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Gradient', value: 'gradient' },
    { label: 'Segments', value: 'segments' },
  ];

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
    if (!this.speedometerElement) return '';
    return generatePlaygroundCode(
      this.speedometerElement.nativeElement as Element,
      'ui-speedometer',
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
      value: 65,
      min: 0,
      max: 100,
      label: 'km/h',
      size: 250,
      arcWidth: 20,
      colorMode: 'gradient',
    };
    this.updateConfig();
  }
}


