import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-dropdown-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dropdown-playground.component.html',
  styleUrl: './dropdown-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmDropdownPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Settings', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance & Style', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & States', icon: 'activity', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced Features', icon: 'zap', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['global', 'appearance'];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  appearanceOptions = [
    { label: 'Standard Dropdown', value: 'dropdown' },
    { label: 'Button-like', value: 'button' },
  ];

  options = [
    { label: 'Angular', value: 'ng', icon: '🅰️', subtitle: 'Modern Web Framework' },
    { label: 'React', value: 'react', icon: '⚛️', subtitle: 'UI Library' },
    { label: 'Vue.js', value: 'vue', icon: '🖖', subtitle: 'Progressive Framework' },
    { label: 'Svelte', value: 'svelte', icon: '🔥', rightTag: 'Hot', rightTagColor: 'warning' },
    { label: 'Stencil', value: 'stencil', icon: '💎', rightIcon: 'rocket' },
    { label: 'Solid', value: 'solid', icon: '🧱', description: 'Declarative JS library' },
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
      value: '',
      size: 'md',
      appearance: 'dropdown',
      multiSelect: false,
      cascading: false,
      searchable: true,
      maxHeight: 300,
      showArrow: true,
      ignoreParentPosition: true,
      clearable: true,
      fullWidth: false,
      disabled: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      let code = '<dui-dropdown\n';
      code += `  placeholder="${this.pgConfig.placeholder}"\n`;
      code += `  size="${this.pgConfig.size}"\n`;
      if (this.pgConfig.appearance !== 'dropdown')
        code += `  appearance="${this.pgConfig.appearance}"\n`;
      if (this.pgConfig.multiSelect) code += `  multi-select\n`;
      if (this.pgConfig.searchable) code += `  searchable\n`;
      if (this.pgConfig.clearable) code += `  clearable\n`;
      if (this.pgConfig.cascading) code += `  cascading\n`;
      if (this.pgConfig.fullWidth) code += `  full-width\n`;
      if (this.pgConfig.maxHeight !== 300) code += `  max-height="${this.pgConfig.maxHeight}"\n`;
      if (!this.pgConfig.showArrow) code += `  [showArrow]="false"\n`;
      if (this.pgConfig.disabled) code += `  disabled\n`;
      code += `  [options]="dropdownOptions"\n`;
      code += '></dui-dropdown>';

      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  onValueChange(event: any) {
    this.currentValue = event.detail.value;
    this.logEvent(`Value changed: ${JSON.stringify(this.currentValue)}`);
  }
}
