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
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { AppInputValueAccessorDirective } from '../../../../directives/ui-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-meter-group-playground',
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
  templateUrl: './meter-group-playground.component.html',
  styleUrl: './meter-group-playground.component.scss',
})
export class MeterGroupPlaygroundComponent implements AfterViewInit {
  @ViewChild('meterElement') meterElement!: ElementRef;

  pgConfig = {
    orientation: 'horizontal',
    labelOrientation: 'horizontal',
    labelPosition: 'end',
    meterHeight: '12px',
    showLabels: true,
    showMarkers: true,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout', icon: '📏' },
    { id: 'visuals', title: 'Visuals', icon: '🎨' },
  ]);

  accordionDefaultOpen = JSON.stringify(['layout']);

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelOrientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  labelPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  values = [
    { label: 'Apps', value: 40, color: '#3b82f6', icon: '📱' },
    { label: 'System', value: 25, color: '#ef4444', icon: '⚙️' },
    { label: 'Media', value: 15, color: '#10b981', icon: '🎬' },
    { label: 'Free', value: 20, color: '#e2e8f0', icon: '☁️' },
  ];

  valuesJson = JSON.stringify(this.values);
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

  getCleanFormattedDom(): string {
    if (!this.meterElement) return '';
    let code = generatePlaygroundCode(this.meterElement.nativeElement as Element, 'ui-meter-group');
    // Add values prop to code manually
    code = code.replace('></ui-meter-group>', '\n  [values]="meterValues"\n></ui-meter-group>');
    return code;
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormattedDom());
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      labelOrientation: 'horizontal',
      labelPosition: 'end',
      meterHeight: '12px',
      showLabels: true,
      showMarkers: true,
    };
    this.updateConfig();
  }
}
