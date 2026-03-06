import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-dropdown-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dropdown-playground.component.html',
  styleUrl: './dropdown-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DropdownPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'config', title: 'Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['config', 'features'];

  appearanceOptions = [
    { label: 'Dropdown', value: 'dropdown' },
    { label: 'Button-like', value: 'button' },
  ];

  options = [
    { label: 'Angular', value: 'ng', icon: '🅰️' },
    { label: 'React', value: 'react', icon: '⚛️' },
    { label: 'Vue.js', value: 'vue', icon: '🖖' },
    { label: 'Svelte', value: 'svelte', icon: '🔥' },
    { label: 'Stencil', value: 'stencil', icon: '💎' },
    { label: 'Solid', value: 'solid', icon: '🧊' },
  ];

  cascadingOptions = [
    {
      label: 'Frontend',
      value: 'fe',
      children: [
        { label: 'Angular', value: 'ng' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
      ],
    },
    {
      label: 'Backend',
      value: 'be',
      children: [
        { label: 'Node.js', value: 'node' },
        { label: 'NestJS', value: 'nest' },
        { label: 'Go', value: 'go' },
      ],
    },
  ];

  optionsJson = JSON.stringify(this.options);
  cascadingOptionsJson = JSON.stringify(this.cascadingOptions);

  currentValue = '';

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      placeholder: 'Select technology...',
      size: 'md',
      appearance: 'dropdown',
      multiSelect: false,
      searchable: true,
      clearable: true,
      cascading: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      let code = '<ui-dropdown\n';
      code += `  placeholder="${this.pgConfig.placeholder}"\n`;
      code += `  size="${this.pgConfig.size}"\n`;
      if (this.pgConfig.appearance !== 'dropdown')
        code += `  appearance="${this.pgConfig.appearance}"\n`;
      if (this.pgConfig.multiSelect) code += `  multi-select\n`;
      if (this.pgConfig.searchable) code += `  searchable\n`;
      if (this.pgConfig.clearable) code += `  clearable\n`;
      if (this.pgConfig.cascading) code += `  cascading\n`;
      code += `  [options]="dropdownOptions"\n`;
      code += '></ui-dropdown>';

      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
    this.logEvent(`Value changed: ${JSON.stringify(this.currentValue)}`);
  }
}
