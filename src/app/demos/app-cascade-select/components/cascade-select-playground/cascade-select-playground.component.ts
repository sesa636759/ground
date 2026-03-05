import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-cascade-select-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './cascade-select-playground.component.html',
  styleUrl: './cascade-select-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CascadeSelectPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['global'];

  triggerOptions = [
    { label: 'Hover', value: 'hover' },
    { label: 'Click', value: 'click' },
  ];

  options = [
    {
      label: 'USA',
      value: 'us',
      children: [
        {
          label: 'California',
          value: 'ca',
          children: [
            { label: 'Los Angeles', value: 'la' },
            { label: 'San Francisco', value: 'sf' },
          ],
        },
        { label: 'New York', value: 'ny' },
      ],
    },
    {
      label: 'Europe',
      value: 'eu',
      children: [
        { label: 'France', value: 'fr' },
        { label: 'Germany', value: 'de' },
      ],
    },
  ];

  optionsJson = JSON.stringify(this.options);
  currentValue: any = null;

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      placeholder: 'Select Location...',
      size: 'md',
      expandTrigger: 'hover',
      showFullPath: true,
      separator: ' > ',
      changeOnSelect: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      let code = '<ui-cascade-select\n';
      code += `  placeholder="${this.pgConfig.placeholder}"\n`;
      code += `  size="${this.pgConfig.size}"\n`;
      code += `  expand-trigger="${this.pgConfig.expandTrigger}"\n`;
      if (!this.pgConfig.showFullPath) code += `  [show-full-path]="false"\n`;
      code += `  separator="${this.pgConfig.separator}"\n`;
      if (this.pgConfig.changeOnSelect) code += `  change-on-select\n`;
      code += `  [options]="locations"\n`;
      code += '></ui-cascade-select>';

      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail;
    this.logEvent(`Selected value: ${JSON.stringify(this.currentValue)}`);
  }
}
