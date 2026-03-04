import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-tag-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag-playground.component.html',
  styleUrl: './tag-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TagPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = {
    value: 'New Update',
    icon: '?',
    severity: 'info',
    rounded: true,
    size: 'small',
  };

  severityOptions = [
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Large', value: 'large' },
  ];

  pgAccordionItems = JSON.stringify([{ id: 'global', title: 'Global Configuration', icon: '⚙️' }]);

  accordionDefaultOpen = JSON.stringify(['global']);

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

  override resetConfig() {
    this.pgConfig = {
      value: 'New Update',
      icon: '?',
      severity: 'info',
      rounded: true,
      size: 'small',
    };
    this.updateConfig();
    this.eventLog.set([]);
  }
}
