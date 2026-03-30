import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-stack-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stack-playground.component.html',
  styleUrl: './stack-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmStackPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  numBoxes = 5;
  get boxes() {
    return Array.from({ length: this.numBoxes }, (_, i) => i + 1);
  }

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout & Box Model', icon: 'grid', iconLibrary: 'lucide' },
    { id: 'visual', title: 'Visual & Dividers', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'content', title: 'Item Configuration', icon: 'layers', iconLibrary: 'lucide' },
  ];

  directionOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  wrapOptions = [
    { label: 'No Wrap', value: 'nowrap' },
    { label: 'Wrap', value: 'wrap' },
    { label: 'Wrap Reverse', value: 'wrap-reverse' },
  ];

  alignOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Stretch', value: 'stretch' },
  ];

  justifyOptions = [
    { label: 'Start', value: 'start' },
    { label: 'Center', value: 'center' },
    { label: 'End', value: 'end' },
    { label: 'Space Between', value: 'space-between' },
  ];

  dividerOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Dashed', value: 'dashed' },
    { label: 'Dotted', value: 'dotted' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      direction: 'horizontal',
      wrap: 'nowrap',
      spacing: '16px',
      align: 'center',
      justify: 'start',
      max: 0,
      overlap: false,
      showDividers: false,
      dividerType: 'solid',
    };
  }

  updateConfig() {
    let code = `<ui-stack\n`;
    if (this.pgConfig.direction !== 'horizontal')
      code += `  direction="${this.pgConfig.direction}"\n`;
    if (this.pgConfig.wrap !== 'nowrap') code += `  wrap="${this.pgConfig.wrap}"\n`;
    if (this.pgConfig.spacing !== '8px') code += `  spacing="${this.pgConfig.spacing}"\n`;
    if (this.pgConfig.align !== 'center') code += `  align="${this.pgConfig.align}"\n`;
    if (this.pgConfig.justify !== 'start') code += `  justify="${this.pgConfig.justify}"\n`;
    if (this.pgConfig.max > 0) code += `  [max]="${this.pgConfig.max}"\n`;
    if (this.pgConfig.overlap) code += `  overlap\n`;
    if (this.pgConfig.showDividers) {
      code += `  show-dividers\n`;
      if (this.pgConfig.dividerType !== 'solid')
        code += `  divider-type="${this.pgConfig.dividerType}"\n`;
    }

    code += `>\n`;
    code += `  <div>1</div>\n`;
    code += `  <div>2</div>\n`;
    code += `</ui--stack>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  override resetConfig() {
    super.resetConfig();
    this.numBoxes = 5;
    this.updateConfig();
  }
}
