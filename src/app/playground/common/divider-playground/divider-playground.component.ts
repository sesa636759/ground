import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-divider-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './divider-playground.component.html',
  styleUrl: './divider-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmDividerPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'content', title: 'Content & Layout', icon: 'type', iconLibrary: 'lucide' },
    { id: 'style', title: 'Visual Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'shapes', title: 'Shape Dividers', icon: 'shapes', iconLibrary: 'lucide' },
    { id: 'effects', title: 'Special Effects', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  variantOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Dashed', value: 'dashed' },
    { label: 'Dotted', value: 'dotted' },
    { label: 'Double Solid', value: 'double-solid' },
    { label: 'Double Dashed', value: 'double-dashed' },
    { label: 'Double Dotted', value: 'double-dotted' },
    { label: 'Gradient', value: 'gradient' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  textAlignOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ];

  verticalAlignOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Center', value: 'center' },
    { label: 'Bottom', value: 'bottom' },
  ];

  textTransformOptions = [
    { label: 'None', value: 'none' },
    { label: 'Capitalize', value: 'capitalize' },
    { label: 'Uppercase', value: 'uppercase' },
    { label: 'Lowercase', value: 'lowercase' },
  ];

  responsiveOptions = [
    { label: 'None', value: 'none' },
    { label: 'Small (sm)', value: 'sm' },
    { label: 'Medium (md)', value: 'md' },
    { label: 'Large (lg)', value: 'lg' },
  ];

  animationOptions = [
    { label: 'None', value: 'none' },
    { label: 'Fade', value: 'fade' },
    { label: 'Slide', value: 'slide' },
    { label: 'Expand', value: 'expand' },
  ];

  patternOptions = [
    { label: 'None', value: 'none' },
    { label: 'Dots', value: 'dots' },
    { label: 'Stripes', value: 'stripes' },
    { label: 'Wavy', value: 'wavy' },
    { label: 'Zigzag', value: 'zigzag' },
  ];

  insetOptions = [
    { label: 'None', value: 'none' },
    { label: 'Start', value: 'start' },
    { label: 'End', value: 'end' },
    { label: 'Both', value: 'both' },
  ];

  spacingOptions = [
    { label: 'None', value: 'none' },
    { label: 'Compact', value: 'compact' },
    { label: 'Comfortable', value: 'comfortable' },
    { label: 'Spacious', value: 'spacious' },
  ];

  linesOptions = [
    { label: 'All', value: 'all' },
    { label: 'Start Only', value: 'start' },
    { label: 'End Only', value: 'end' },
    { label: 'None', value: 'none' },
  ];

  linecapOptions = [
    { label: 'Butt', value: 'butt' },
    { label: 'Round', value: 'round' },
    { label: 'Square', value: 'square' },
  ];

  shapeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Curve', value: 'curve' },
    { label: 'Tilt', value: 'tilt' },
    { label: 'Triangle', value: 'triangle' },
    { label: 'Wave', value: 'wave' },
    { label: 'Zigzag', value: 'zigzag' },
    { label: 'Arrow', value: 'arrow' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      text: 'Content',
      icon: '',
      badge: '',
      image: '',
      orientation: 'horizontal',
      variant: 'solid',
      size: 'md',
      textAlign: 'center',
      verticalAlign: 'center',
      textTransform: 'capitalize',
      color: '',
      textColor: '',
      gap: '',
      thickness: '',
      maxWidth: '',
      height: '',
      borderRadius: '',
      opacity: 1,
      plain: false,
      loading: false,
      clickable: false,
      shadow: false,
      glow: false,
      responsive: 'none',
      animation: 'none',
      pattern: 'none',
      inset: 'none',
      spacing: 'none',
      lines: 'all',
      linecap: 'butt',
      shape: 'none',
      shapeColor: '',
    };
  }

  updateConfig() {
    let code = `<ui-divider\n`;
    if (this.pgConfig.text) code += `  text="${this.pgConfig.text}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    if (this.pgConfig.badge) code += `  badge="${this.pgConfig.badge}"\n`;
    if (this.pgConfig.image) code += `  image="${this.pgConfig.image}"\n`;
    if (this.pgConfig.orientation !== 'horizontal')
      code += `  orientation="${this.pgConfig.orientation}"\n`;
    if (this.pgConfig.variant !== 'solid') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.textAlign !== 'center') code += `  text-align="${this.pgConfig.textAlign}"\n`;
    if (this.pgConfig.verticalAlign !== 'center')
      code += `  vertical-align="${this.pgConfig.verticalAlign}"\n`;
    if (this.pgConfig.textTransform !== 'capitalize')
      code += `  text-transform="${this.pgConfig.textTransform}"\n`;
    if (this.pgConfig.color) code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.textColor) code += `  text-color="${this.pgConfig.textColor}"\n`;
    if (this.pgConfig.gap) code += `  gap="${this.pgConfig.gap}"\n`;
    if (this.pgConfig.thickness) code += `  thickness="${this.pgConfig.thickness}"\n`;
    if (this.pgConfig.maxWidth) code += `  max-width="${this.pgConfig.maxWidth}"\n`;
    if (this.pgConfig.height) code += `  height="${this.pgConfig.height}"\n`;
    if (this.pgConfig.borderRadius) code += `  border-radius="${this.pgConfig.borderRadius}"\n`;
    if (this.pgConfig.opacity !== 1) code += `  [opacity]="${this.pgConfig.opacity}"\n`;
    if (this.pgConfig.plain) code += `  plain\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.shadow) code += `  shadow\n`;
    if (this.pgConfig.glow) code += `  glow\n`;
    if (this.pgConfig.responsive !== 'none') code += `  responsive="${this.pgConfig.responsive}"\n`;
    if (this.pgConfig.animation !== 'none') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.pattern !== 'none') code += `  pattern="${this.pgConfig.pattern}"\n`;
    if (this.pgConfig.inset !== 'none') code += `  inset="${this.pgConfig.inset}"\n`;
    if (this.pgConfig.spacing !== 'none') code += `  spacing="${this.pgConfig.spacing}"\n`;
    if (this.pgConfig.lines !== 'all') code += `  lines="${this.pgConfig.lines}"\n`;
    if (this.pgConfig.linecap !== 'butt') code += `  linecap="${this.pgConfig.linecap}"\n`;
    if (this.pgConfig.shape !== 'none') {
      code += `  shape="${this.pgConfig.shape}"\n`;
      if (this.pgConfig.shapeColor) code += `  shape-color="${this.pgConfig.shapeColor}"\n`;
    }

    code += `></ui--divider>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onDividerClick() {
    this.logEvent('Divider Clicked');
  }
}
