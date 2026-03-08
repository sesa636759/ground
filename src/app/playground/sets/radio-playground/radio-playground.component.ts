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
  selector: 'dm-radio-set-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-playground.component.html',
  styleUrl: './radio-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmRadioSetPlaygroundComponent extends BasePlaygroundComponent {
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

  pgAccordionItems = [
    { id: 'global', title: 'Group Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'items', title: 'Manage Radio Options', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'validation', title: 'Validation & Help', icon: 'check-circle', iconLibrary: 'lucide' },
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
  }

  updateConfig() {
    let innerContent = '';
    this.radioOptions.forEach((opt) => {
      innerContent += `  <ui-radio\n`;
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
      innerContent += `  ></ui-radio>\n`;
    });

    this.updateConfigFromDom(this.radioGroup, 'ui-radio-group', innerContent);
  }

  trackByOption(_index: number, opt: any) {
    return opt.value;
  }

  onRadioGroupChange(value: any) {
    this.logEvent(`Selection changed to: "${value}"`);
    this.pgConfig.value = value;
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

  override resetConfig() {
    super.resetConfig();
    this.radioOptions = [
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
    this.updateConfig();
  }
}
