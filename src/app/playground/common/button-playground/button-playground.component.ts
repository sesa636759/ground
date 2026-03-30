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
      icon: 'type',
      iconLibrary: 'lucide',
    },
    {
      id: 'appearance',
      title: 'Appearance & Size',
      icon: 'palette',
      iconLibrary: 'lucide',
    },
    {
      id: 'states',
      title: 'Behavioral States',
      icon: 'toggle-left',
      iconLibrary: 'lucide',
    },
    {
      id: 'link',
      title: 'Link & Extra',
      icon: 'external-link',
      iconLibrary: 'lucide',
    },
    {
      id: 'premium',
      title: 'Premium & God Mode',
      icon: 'zap',
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
    { label: 'Glass', value: 'glass' },
    { label: 'Soft', value: 'soft' },
    { label: 'Dark', value: 'dark' },
    { label: 'Raised', value: 'raised' },
    { label: 'Gradient', value: 'gradient' },
    { label: 'Gradient Blue', value: 'gradient-blue' },
    { label: 'Gradient Purple', value: 'gradient-purple' },
    { label: 'Gradient Orange', value: 'gradient-orange' },
    { label: 'Gradient Ocean', value: 'gradient-ocean' },
    { label: 'Gradient Sunset', value: 'gradient-sunset' },
    { label: 'Gradient Candy', value: 'gradient-candy' },
    { label: 'Gradient Gold', value: 'gradient-gold' },
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

  badgePositionOptions = [
    { label: 'Top Right', value: 'top-right' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Inline Left', value: 'inline-left' },
    { label: 'Inline Right', value: 'inline-right' },
  ];

  shapeOptions = [
    { label: 'Default (Square)', value: '' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Pill', value: 'pill' },
    { label: 'Chip', value: 'chip' },
    { label: 'Circle', value: 'circle' },
  ];

  softColorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  statusOptions = [
    { label: 'None', value: '' },
    { label: 'Online', value: 'online' },
    { label: 'Offline', value: 'offline' },
    { label: 'Busy', value: 'busy' },
    { label: 'Away', value: 'away' },
  ];

  audioOptions = [
    { label: 'None', value: 'none' },
    { label: 'Click Tick', value: 'click' },
    { label: 'Success Chime', value: 'success' },
    { label: 'Error Thud', value: 'error' },
  ];

  revealOptions = [
    { label: 'None', value: 'none' },
    { label: 'Fade In', value: 'fade-in' },
    { label: 'Slide Up', value: 'slide-up' },
    { label: 'Zoom In', value: 'zoom' },
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
      icon: '🚀',
      iconLibrary: 'default',
      iconPosition: 'left',
      iconSize: '',
      badge: '',
      variant: 'primary',
      size: 'medium',
      shape: '',
      color: '',
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
      rtl: false,
      badgePosition: 'top-right',
      avatarSrc: '',
      status: '',
      // Premium
      active: false,
      skeleton: false,
      hasDropdown: false,
      hideLabelOnMobile: false,
      copyValue: '',
      shortcut: '',
      // God Mode
      audio: 'none',
      holdTime: 0,
      timer: 0,
      confirmLabel: '',
      confirmBubble: false,
      tilt: false,
      haptic: false,
      glossy: false,
      shake: false,
      liquid: false,
      rainbow: false,
      glow: false,
      followGlow: false,
      isSplit: false,
      shatter: false,
      successMorph: 0,
      reveal: 'none',
      revealDelay: 0,
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.demoElement, 'ui-button');
  }

  onButtonClick(event: any) {
    this.logEvent(`Button Clicked`);
  }
}
