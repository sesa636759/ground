import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { AppRadioGroupValueAccessorDirective } from '../../../../directives/app-radio-group-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/ui-input-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-radio-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppRadioGroupValueAccessorDirective,
    AppInputValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-playground.component.html',
  styleUrl: './radio-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RadioPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('radioGroup') radioGroup!: ElementRef;
  // Playground State
  pgConfig = {
    name: 'demo-group',
    layout: 'vertical',
    columns: 2,
    size: 'medium',
    color: 'primary',
    labelPosition: 'right',
    label: 'Select your preference',
    helperText: 'Choose one option',
    errorMessage: 'This field is required',
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    enableAnimation: true,
    rippleEffect: true,
    variant: 'default',
    buttonGroup: false,
    skeleton: false,
    allowEmpty: false,
    showDot: true,
    fullWidth: false,
    loading: false,
    elevation: 0,
    value: 'option1',
  };

  radioOptions: any[] = [
    {
      value: 'option1',
      label: 'Option 1',
      description: 'The standard choice for most users.',
      badge: 'New',
      tooltip: 'Select this for default settings',
      icon: 'fas fa-star',
      iconPosition: 'left',
      color: '',
      size: '',
    },
    {
      value: 'option2',
      label: 'Option 2',
      description: 'Advanced configuration for experts.',
      tooltip: 'Use for custom setup',
      icon: 'fas fa-cog',
      iconPosition: 'left',
      color: '',
      size: '',
    },
    {
      value: 'option3',
      label: 'Option 3',
      description: 'Experimental features and tools.',
      disabled: true,
      tooltip: 'Currently unavailable',
      icon: 'fas fa-flask',
      iconPosition: 'left',
      color: '',
      size: '',
    },
  ];

  eventMessage = signal('Select an option...');
  generatedCode = signal('');
  showCode = true;

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Group Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
    { id: 'items', title: 'Manage Radio Options', icon: '🔘' },
    { id: 'validation', title: 'Validation & Help', icon: '✅' },
  ]);

  defaultOpen = JSON.stringify(['global']);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  ngAfterViewInit() {
    // Initial load: read the exact attributes from #radioGroup element in the Light DOM
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormattedDom());
      this.refreshCode();
    }, 50);
  }

  getCleanFormattedDom(): string {
    if (!this.radioGroup) return '';

    let innerContent = '';
    // Stencil mounts child slots inside shadow root.
    // They won't appear in OuterHTML of Light DOM, so we append the known options.
    this.radioOptions.forEach((opt) => {
      innerContent += `  <app-radio\n`;
      innerContent += `    value="${opt.value}"\n`;
      innerContent += `    label="${opt.label}"\n`;
      if (opt.description) innerContent += `    description="${opt.description}"\n`;
      if (opt.badge) innerContent += `    badge="${opt.badge}"\n`;
      if (opt.tooltip) innerContent += `    tooltip="${opt.tooltip}"\n`;
      if (opt.icon) innerContent += `    icon="${opt.icon}"\n`;
      if (opt.iconPosition) innerContent += `    icon-position="${opt.iconPosition}"\n`;
      if (opt.color) innerContent += `    color="${opt.color}"\n`;
      if (opt.size) innerContent += `    size="${opt.size}"\n`;
      if (opt.disabled) innerContent += `    disabled\n`;
      innerContent += `  ></app-radio>\n`;
    });

    return generatePlaygroundCode(
      this.radioGroup.nativeElement as Element,
      'app-radio-group',
      innerContent,
    );
  }

  updateConfig() {
    // Wait for Angular and Stencil to finish DOM updates
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormattedDom());
      this.refreshCode();
    }, 50);
  }

  refreshCode() {
    // Defer outside current change detection cycle to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  trackByOption(index: number, opt: any) {
    return opt.value || index;
  }

  /**
   * Helper to get the actual rendered HTML from the DOM.
   * This is alternative to building it manually.
   */
  getRenderedHtml() {
    if (this.radioGroup) {
      console.log('Current Rendered HTML:', this.radioGroup.nativeElement.outerHTML);
      return this.radioGroup.nativeElement.outerHTML;
    }
    return '';
  }

  onRadioGroupChange(value: any) {
    this.eventMessage.set(`Selection changed to: "${value}" at ${new Date().toLocaleTimeString()}`);
    this.pgConfig.value = value;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  jsonOptions = (opts: any) => JSON.stringify(opts);

  addOption() {
    const nextId = this.radioOptions.length + 1;
    this.radioOptions.push({
      value: `option${nextId}`,
      label: `Option ${nextId}`,
      description: '',
      tooltip: '',
      badge: '',
      icon: '',
      iconPosition: 'left',
      color: '',
      size: '',
    });
    this.updateConfig();
  }

  removeOption(index: number) {
    if (this.radioOptions.length > 1) {
      this.radioOptions.splice(index, 1);
      this.updateConfig();
    }
  }
}
