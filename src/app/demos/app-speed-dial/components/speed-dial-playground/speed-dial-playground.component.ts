import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-speed-dial-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speed-dial-playground.component.html',
  styleUrl: './speed-dial-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SpeedDialPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Settings', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visuals & Behavior', icon: 'palette', iconLibrary: 'lucide' },
  ];

  defaultOpen = JSON.stringify(['layout', 'visuals']);

  typeOptions = [
    { label: 'Linear', value: 'linear' },
    { label: 'Quarter Circle', value: 'quarter-circle' },
    { label: 'Half Circle', value: 'half-circle' },
    { label: 'Circle', value: 'circle' },
  ];

  model = [
    { label: 'Add', icon: '➕' },
    { label: 'Edit', icon: '✏️' },
    { label: 'Delete', icon: '🗑️' },
    { label: 'Share', icon: '🔗' },
  ];

  modelJson = JSON.stringify(this.model);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      direction: 'up',
      type: 'linear',
      radius: 80,
      ripple: true,
      mask: false,
    };
  }

  updateConfig() {
    let code = '<ui-speed-dial\n';
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.type !== 'linear') code += `  [radius]="${this.pgConfig.radius}"\n`;
    if (this.pgConfig.mask) code += `  mask\n`;
    code += `  [model]="items"\n`;
    code += '></ui-speed-dial>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
