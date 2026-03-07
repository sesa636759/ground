import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-tag-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag-playground.component.html',
  styleUrl: './tag-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTagPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      value: 'New Update',
      icon: '?',
      severity: 'info',
      rounded: true,
      size: 'small',
    };
  }

  updateConfig() {
    let code = '<ui-tag\n';
    code += `  value="${this.pgConfig.value}"\n`;
    code += `  severity="${this.pgConfig.severity}"\n`;
    if (this.pgConfig.rounded) code += `  rounded\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    code += '></ui-tag>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}



