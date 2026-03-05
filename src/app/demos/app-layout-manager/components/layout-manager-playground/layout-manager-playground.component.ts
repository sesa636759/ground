import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-layout-manager-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './layout-manager-playground.component.html',
  styleUrl: './layout-manager-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutManagerPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = JSON.stringify(['layout']);

  modeOptions = [
    { label: 'Docking', value: 'docking' },
    { label: 'Grid', value: 'grid' },
    { label: 'Flex', value: 'flex' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      mode: 'docking',
      resizable: true,
      closable: true,
    };
  }

  updateConfig() {
    let code = '<ui-layout-manager\n';
    code += `  mode="${this.pgConfig.mode}"\n`;
    if (this.pgConfig.resizable) code += `  resizable\n`;
    if (this.pgConfig.closable) code += `  closable\n`;
    code += '>\n';
    code += '  <div slot="panel-1">Content 1</div>\n';
    code += '  <div slot="panel-2">Content 2</div>\n';
    code += '</ui-layout-manager>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
