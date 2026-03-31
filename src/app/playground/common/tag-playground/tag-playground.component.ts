import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-tag-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag-playground.component.html',
  styleUrl: './tag-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTagPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'content', title: 'Content & Media', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'States & Behavior', icon: 'zap', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['content', 'appearance'];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Filled', value: 'filled' },
    { label: 'Light', value: 'light' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Dot', value: 'dot' },
  ];

  iconPositionOptions = [
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      label: 'New Update',
      variant: 'light',
      color: 'primary',
      size: 'md',
      rounded: false,
      icon: '',
      iconLibrary: 'lucide',
      iconPosition: 'start',
      image: '',
      userAvatar: '',
      checkable: false,
      checked: false,
      removable: false,
      counter: '' as string,
    };
  }

  updateConfig() {
    let code = '<ui-tag\n';
    code += `  label="${this.pgConfig.label}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.rounded) code += `  rounded\n`;
    if (this.pgConfig.icon) {
      code += `  icon="${this.pgConfig.icon}"\n`;
      if (this.pgConfig.iconLibrary !== 'lucide')
        code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;
      if (this.pgConfig.iconPosition !== 'start')
        code += `  icon-pos="${this.pgConfig.iconPosition}"\n`;
    }
    if (this.pgConfig.image) code += `  image="${this.pgConfig.image}"\n`;
    if (this.pgConfig.userAvatar) code += `  user-avatar="${this.pgConfig.userAvatar}"\n`;
    if (this.pgConfig.checkable) code += `  checkable\n`;
    if (this.pgConfig.checked) code += `  checked\n`;
    if (this.pgConfig.removable) code += `  removable\n`;
    if (this.pgConfig.counter) code += `  counter="${this.pgConfig.counter}"\n`;
    code += '></ui-tag>';

    this.generatedCode.set(code);
    this.refreshCode();
  }
}
