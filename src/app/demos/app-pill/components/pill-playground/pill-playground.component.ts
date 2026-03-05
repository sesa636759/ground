import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-pill-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pill-playground.component.html',
  styleUrl: './pill-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
@Component({
  selector: 'app-pill-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pill-playground.component.html',
  styleUrl: './pill-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PillPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  variantOptions = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Soft', value: 'soft' },
    { label: 'Bordered', value: 'bordered' },
    { label: 'Gradient', value: 'gradient' },
  ];

  constructor() {
    super();
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      label: 'Status Active',
      variant: 'soft',
      color: 'primary',
      size: 'md',
      removable: true,
      clickable: true,
      loading: false,
      counter: null as number | null,
    };
  }

  updateConfig() {
    let code = '<ui-pill\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.removable) code += `  removable\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.counter !== null) code += `  counter="${this.pgConfig.counter}"\n`;
    code += '></ui-pill>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onPillAction(event: string) {
    this.logEvent(`Pill action: ${event}`);
  }
}
