import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
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
  selector: 'app-smart-stepper-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-stepper-playground.component.html',
  styleUrl: './smart-stepper-playground.component.scss',
})
export class SmartStepperPlaygroundComponent implements AfterViewInit {
  @ViewChild('stepperElement') stepperElement!: ElementRef;

  pgConfig = {
    orientation: 'horizontal',
    theme: 'default',
    showIcons: true,
    allowBranching: false,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout Configuration', icon: '📏' },
    { id: 'features', title: 'Behavior & Features', icon: '⚙️' },
  ]);

  accordionDefaultOpen = JSON.stringify(['layout']);

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  themeOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Compact', value: 'compact' },
  ];

  currentStep = '1';
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
    if (!this.stepperElement) return '';
    const innerContent = `
  <ui-smart-step label="Profile" icon="👤" value="1"> ... content ... </ui-smart-step>
  <ui-smart-step label="Verify" icon="🛡️" value="2"> ... content ... </ui-smart-step>
  <ui-smart-step label="Finish" icon="✅" value="3"> ... content ... </ui-smart-step>`;
    return generatePlaygroundCode(
      this.stepperElement.nativeElement as Element,
      'ui-smart-stepper',
      innerContent,
    );
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  onStepChange(event: any) {
    this.currentStep = event.detail.value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'horizontal',
      theme: 'default',
      showIcons: true,
      allowBranching: false,
    };
    this.currentStep = '1';
    this.updateConfig();
  }
}
