import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-theme-switcher-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './theme-switcher-playground.component.html',
  styleUrl: './theme-switcher-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmThemeSwitcherPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      variant: 'default',
      size: 'medium',
      showIcons: true,
      showLabels: true,
      enableAnimation: true,
      animationDuration: 200,
      position: 'inline',
    };
  }

  updateConfig() {
    let code = `<app-theme-switcher\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  position="${this.pgConfig.position}"\n`;

    if (this.pgConfig.showIcons) code += `  show-icons="true"\n`;
    if (this.pgConfig.showLabels) code += `  show-labels="true"\n`;
    if (this.pgConfig.enableAnimation) code += `  enable-animation="true"\n`;
    if (this.pgConfig.animationDuration !== 200)
      code += `  animation-duration="${this.pgConfig.animationDuration}"\n`;

    code += `></app-theme-switcher>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onThemeChange(event: any) {
    const theme = event.detail.value;
    this.logEvent(`Theme changed to: ${theme}`);
  }
}
