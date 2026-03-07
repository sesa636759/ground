import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';

import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'dm-button-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-playground.component.html',
  styleUrl: './button-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [...PLAYGROUND_IMPORTS],
})
export class DmButtonPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    {
      id: 'content',
      title: 'Content & Text',
      icon: 'settings',
      library: 'lucide',
      iconLibrary: 'lucide',
    },
    {
      id: 'appearance',
      title: 'Appearance & Size',
      icon: 'palette',
      library: 'lucide',
      iconLibrary: 'lucide',
    },
    {
      id: 'states',
      title: 'Behavioral States',
      icon: 'settings',
      library: 'lucide',
      iconLibrary: 'lucide',
    },
    {
      id: 'link',
      title: 'Link & Type',
      icon: 'settings',
      library: 'lucide',
      iconLibrary: 'lucide',
    },
  ];

  defaultOpen = ['content'];

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
    { label: 'Outline', value: 'outline' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Dark', value: 'dark' },
    { label: 'Raised', value: 'raised' },
  ];

  sizeOptions = [
    { label: 'XXX Small', value: 'xxxs' },
    { label: 'XX Small', value: 'xxs' },
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'Extra Large', value: 'xl' },
    { label: 'XX Large', value: 'xxl' },
    { label: 'XXX Large', value: 'xxxl' },
  ];

  iconLibraryOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'Se (Quartz)', value: 'se' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Bootstrap', value: 'bootstrap' },
    { label: 'Ionicons', value: 'ionicons' },
  ];

  positionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  typeOptions = [
    { label: 'Button', value: 'button' },
    { label: 'Submit', value: 'submit' },
    { label: 'Reset', value: 'reset' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      label: 'Explore Components',
      icon: 'ðŸš€',
      iconLibrary: 'default',
      iconPosition: 'left',
      iconSize: '',
      badge: '',
      variant: 'primary',
      size: 'medium',
      elevation: 2,
      iconOnly: false,
      loading: false,
      loadingPosition: 'left',
      disabled: false,
      pill: false,
      rounded: false,
      fullWidth: false,
      width: '',
      minWidth: '',
      grow: false,
      selected: false,
      noRipple: false,
      type: 'button',
      href: '',
      target: '',
      rel: '',
    };
  }

  updateConfig() {
    setTimeout(() => {
      this.updateConfigFromDom(this.demoElement, 'ui-button');
    }, 50);
  }

  onButtonClick(event: any) {
    this.logEvent(`Button Clicked`);
  }
}



