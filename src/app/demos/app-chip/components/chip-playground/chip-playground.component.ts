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
  selector: 'app-chip-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chip-playground.component.html',
  styleUrl: './chip-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ChipPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'content', title: 'Content & Info', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'style', title: 'Visual Style', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['content'];

  variantOptions = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Soft', value: 'soft' },
    { label: 'Text', value: 'text' },
    { label: 'Gradient', value: 'gradient' },
  ];

  shapeOptions = [
    { label: 'Pill', value: 'pill' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Square', value: 'square' },
    { label: 'Circle', value: 'circle' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      label: 'Angular Developer',
      icon: '👤',
      userAvatar: '',
      counter: '',
      badge: '',
      variant: 'filled',
      color: 'primary',
      size: 'md',
      shape: 'pill',
      removable: true,
      clickable: true,
      selected: false,
      loading: false,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      this.updateConfigFromDom(this.demoElement, 'ui-chip');
    }, 50);
  }
}
