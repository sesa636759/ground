import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppRadioGroupValueAccessorDirective } from '../../../../directives/app-radio-group-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
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
  generatedCode: string = '';
  activeSection = signal('global');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  ngAfterViewInit() {
    // Pro-tip: You can now access the actual rendered DOM element
    // this.radioGroup.nativeElement
  }

  updateConfig() {
    let code = `<app-radio-group\n`;
    if (this.pgConfig.name) code += `  name="${this.pgConfig.name}"\n`;
    if (this.pgConfig.label) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;
    if (this.pgConfig.layout !== 'vertical') code += `  layout="${this.pgConfig.layout}"\n`;
    if (this.pgConfig.layout === 'grid') code += `  columns="${this.pgConfig.columns}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.color !== 'primary') code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.labelPosition !== 'right')
      code += `  label-position="${this.pgConfig.labelPosition}"\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    if (this.pgConfig.readonly) code += `  readonly\n`;
    if (this.pgConfig.required) code += `  required\n`;
    if (this.pgConfig.invalid) {
      code += `  invalid\n`;
      if (this.pgConfig.errorMessage) code += `  error-message="${this.pgConfig.errorMessage}"\n`;
    }
    if (!this.pgConfig.enableAnimation) code += `  enable-animation="false"\n`;
    if (!this.pgConfig.rippleEffect) code += `  ripple-effect="false"\n`;
    if (this.pgConfig.buttonGroup) code += `  button-group="true"\n`;
    if (this.pgConfig.skeleton) code += `  skeleton="true"\n`;
    if (this.pgConfig.allowEmpty) code += `  allow-empty="true"\n`;
    if (!this.pgConfig.showDot) code += `  show-dot="false"\n`;
    if (this.pgConfig.fullWidth) code += `  full-width\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.elevation > 0) code += `  elevation="${this.pgConfig.elevation}"\n`;
    if (this.pgConfig.value) code += `  value="${this.pgConfig.value}"\n`;

    code += `>\n`;

    // Individual child tags - "Child Code"
    this.radioOptions.forEach((opt) => {
      code += `  <app-radio\n`;
      code += `    value="${opt.value}"\n`;
      code += `    label="${opt.label}"\n`;
      if (opt.description) code += `    description="${opt.description}"\n`;
      if (opt.badge) code += `    badge="${opt.badge}"\n`;
      if (opt.tooltip) code += `    tooltip="${opt.tooltip}"\n`;
      if (opt.icon) code += `    icon="${opt.icon}"\n`;
      if (opt.iconPosition) code += `    icon-position="${opt.iconPosition}"\n`;
      if (opt.color) code += `    color="${opt.color}"\n`;
      if (opt.size) code += `    size="${opt.size}"\n`;
      if (opt.disabled) code += `    disabled\n`;
      code += `  ></app-radio>\n`;
    });

    code += `</app-radio-group>`;
    this.generatedCode = code;
    this.refreshCode();
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
    navigator.clipboard.writeText(this.generatedCode);
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
