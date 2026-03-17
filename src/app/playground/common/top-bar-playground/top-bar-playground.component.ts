import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-top-bar-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './top-bar-playground.component.html',
  styleUrl: './top-bar-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTopBarPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'structure', title: 'Structure Options', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Settings', icon: 'palette', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['structure', 'visuals'];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      logoText: 'MYPLATFORM',
      sticky: true,
      height: 64,
    };
  }

  updateConfig() {
    let code = '<dui-top-bar\n';
    if (this.pgConfig.sticky) code += `  sticky\n`;
    code += `  style="height: ${this.pgConfig.height}px"\n`;
    code += '>\n';
    code += `  <div slot="start"> ${this.pgConfig.logoText} </div>\n`;
    code += '  <div slot="end"> Actions </div>\n';
    code += '</dui-top-bar>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
