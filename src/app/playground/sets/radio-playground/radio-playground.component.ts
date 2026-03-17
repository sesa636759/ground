import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-radio-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-playground.component.html',
  styleUrl: './radio-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmRadioPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('radioGroup') radioGroup!: ElementRef;

  // Playground State
  pgConfig = this.getDefaultConfig();

  radioOptions: any[] = [
    {
      value: 'option1',
      label: 'Option 1',
      description: 'The standard choice for most users.',
      badge: 'New',
      tooltip: 'Select this for default settings',
      customIcon: 'star',
      color: 'primary',
      size: 'medium',
    },
    {
      value: 'option2',
      label: 'Option 2',
      description: 'Advanced configuration for experts.',
      tooltip: 'Use for custom setup',
      customIcon: 'settings',
      color: 'primary',
      size: 'medium',
    },
    {
      value: 'option3',
      label: 'Option 3',
      description: 'Experimental features and tools.',
      disabled: true,
      tooltip: 'Currently unavailable',
      customIcon: 'flask-conical',
      color: 'primary',
      size: 'medium',
    },
  ];

  pgAccordionItems = [
    { id: 'global', title: 'Group Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'layout', title: 'Grid & Layout', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'items', title: 'Manage Radio Options', icon: 'list', iconLibrary: 'lucide' },
    { id: 'validation', title: 'Validation & Help', icon: 'alert-circle', iconLibrary: 'lucide' },
  ];

  layoutOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Grid', value: 'grid' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Underlined', value: 'underlined' },
    { label: 'Card', value: 'card' },
  ];

  labelPositionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
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
      buttonGroup: false,
      variant: 'default',
      skeleton: false,
      allowEmpty: false,
      showDot: true,
      value: 'option1',
    };
  }

  updateConfig() {
    let innerContent = '';
    this.radioOptions.forEach((opt) => {
      innerContent += `  <dui-radio\n`;
      innerContent += `    value="${opt.value}"\n`;
      innerContent += `    label="${opt.label}"\n`;
      if (opt.description) innerContent += `    description="${opt.description}"\n`;
      if (opt.badge) innerContent += `    badge="${opt.badge}"\n`;
      if (opt.tooltip) innerContent += `    tooltip="${opt.tooltip}"\n`;
      if (opt.customIcon) innerContent += `    custom-icon="${opt.customIcon}"\n`;
      if (opt.color) innerContent += `    color="${opt.color}"\n`;
      if (opt.size) innerContent += `    size="${opt.size}"\n`;
      if (opt.disabled) innerContent += `    disabled\n`;
      innerContent += `  ></dui-radio>\n`;
    });

    this.updateConfigFromDom(this.radioGroup, 'ui-radio-group', innerContent);
  }

  trackByOption(_index: number, opt: any) {
    return opt.value;
  }

  onRadioGroupChange(event: any) {
    const val = event.detail?.value ?? event.detail;
    this.logEvent(`Selection changed to: "${val}"`);
    this.pgConfig.value = val;
    this.updateConfig();
  }

  addOption() {
    const nextId = this.radioOptions.length + 1;
    this.radioOptions.push({
      value: `option${nextId}`,
      label: `Option ${nextId}`,
      description: '',
      tooltip: '',
      badge: '',
      customIcon: '',
      color: 'primary',
      size: 'medium',
    });
    this.updateConfig();
  }

  removeOption(index: number) {
    if (this.radioOptions.length > 1) {
      this.radioOptions.splice(index, 1);
      this.updateConfig();
    }
  }

  override resetConfig() {
    super.resetConfig();
    this.radioOptions = [
      {
        value: 'option1',
        label: 'Option 1',
        description: 'The standard choice for most users.',
        badge: 'New',
        tooltip: 'Select this for default settings',
        customIcon: 'star',
        color: 'primary',
        size: 'medium',
      },
      {
        value: 'option2',
        label: 'Option 2',
        description: 'Advanced configuration for experts.',
        tooltip: 'Use for custom setup',
        customIcon: 'settings',
        color: 'primary',
        size: 'medium',
      },
      {
        value: 'option3',
        label: 'Option 3',
        description: 'Experimental features and tools.',
        disabled: true,
        tooltip: 'Currently unavailable',
        customIcon: 'flask-conical',
        color: 'primary',
        size: 'medium',
      },
    ];
    this.updateConfig();
  }
}
