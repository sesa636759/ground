import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-meter-group-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './meter-group-playground.component.html',
  styleUrl: './meter-group-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmMeterGroupPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'settings', title: 'Core Settings', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance & Labels', icon: 'palette', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['settings'];

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  shapeOptions = [
    { label: 'Line', value: 'line' },
    { label: 'Circle', value: 'circle' },
  ];

  iconLibraryOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'Ionicons', value: 'ionicons' },
    { label: 'FontAwesome', value: 'fontawesome' },
  ];

  values = [
    { label: 'Apps', value: 40, color: '#3b82f6', icon: 'app-window' },
    { label: 'System', value: 25, color: '#ef4444', icon: 'settings' },
    { label: 'Media', value: 15, color: '#10b981', icon: 'play' },
    { label: 'Free', value: 20, color: '#e5e7eb', icon: 'cloud' },
  ];

  valuesJson = JSON.stringify(this.values, null, 2);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      values: JSON.stringify([
        { label: 'Apps', value: 40, color: '#3b82f6', icon: 'app-window' },
        { label: 'System', value: 25, color: '#ef4444', icon: 'settings' },
        { label: 'Media', value: 15, color: '#10b981', icon: 'play' },
        { label: 'Free', value: 20, color: '#e5e7eb', icon: 'cloud' },
      ]),
      orientation: 'horizontal',
      size: 'md',
      showLabels: true,
      showValues: true,
      showLegend: true,
      shape: 'line',
      iconLibrary: 'lucide',
      min: 0,
      max: 100,
      interactive: false,
    };
  }

  updateConfig() {
    let code = `<ui-meter-group\n`;
    code += `  [values]="meterValues"\n`;
    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.shape !== 'line') code += `  shape="${this.pgConfig.shape}"\n`;
    if (!this.pgConfig.showLabels) code += `  [show-labels]="false"\n`;
    if (!this.pgConfig.showValues) code += `  [show-values]="false"\n`;
    if (this.pgConfig.showLegend) code += `  show-legend\n`; // Default seems false in JS but true in my config
    if (this.pgConfig.iconLibrary !== 'default')
      code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;
    if (this.pgConfig.min !== 0) code += `  [min]="${this.pgConfig.min}"\n`;
    if (this.pgConfig.max !== 100) code += `  [max]="${this.pgConfig.max}"\n`;
    if (this.pgConfig.interactive) code += `  interactive\n`;

    code += `></ui--meter-group>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onJsonChange() {
    try {
      JSON.parse(this.pgConfig.values);
      this.updateConfig();
    } catch (e) {
      // Invalid JSON, don't update
    }
  }
}
