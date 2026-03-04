import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-divider-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './divider-playground.component.html',
  styleUrl: './divider-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DividerPlaygroundComponent extends BasePlaygroundComponent implements AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'style', title: 'Visual Style', icon: '🎨' },
    { id: 'special', title: 'Special Effects', icon: '✨' },
  ]);

  defaultOpen = JSON.stringify(['global']);

  variantOptions = [
    { label: 'Solid', value: 'solid' },
    { label: 'Dashed', value: 'dashed' },
    { label: 'Dotted', value: 'dotted' },
    { label: 'Double Solid', value: 'double-solid' },
    { label: 'Gradient', value: 'gradient' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  orientationOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
  ];

  patternOptions = [
    { label: 'None', value: 'none' },
    { label: 'Dots', value: 'dots' },
    { label: 'Stripes', value: 'stripes' },
    { label: 'Zigzag', value: 'zigzag' },
  ];

  shapeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Curve', value: 'curve' },
    { label: 'Wave', value: 'wave' },
    { label: 'Triangle', value: 'triangle' },
    { label: 'Zigzag', value: 'zigzag' },
    { label: 'Arrow', value: 'arrow' },
  ];

  constructor() {
    super();
  }

  ngAfterViewInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      text: 'OR',
      icon: '',
      badge: '',
      variant: 'solid',
      size: 'md',
      orientation: 'horizontal',
      pattern: 'none',
      shape: 'none',
      loading: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      this.updateConfigFromDom(this.demoElement, 'ui-divider');
    }, 50);
  }

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
    this.eventLog.set([]);
  }
}
