import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-toggle-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './toggle-playground.component.html',
  styleUrl: './toggle-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTogglePlaygroundComponent extends BasePlaygroundComponent implements AfterViewInit {
  @ViewChild('toggleGroup') toggleGroup!: ElementRef;

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  layoutOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
    { label: 'Grid', value: 'grid' },
  ];

  selectionModeOptions = [
    { label: 'Single', value: 'single' },
    { label: 'Multiple', value: 'multiple' },
  ];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Glass', value: 'glass' },
  ];

  thumbShapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  labelPositionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  // Playground State
  pgConfig = this.getDefaultConfig();

  playgroundOptions = [
    { value: 'notifications', label: 'Notifications', icon: 'fas fa-bell' },
    { value: 'dark-mode', label: 'Dark Mode', icon: 'fas fa-moon' },
    { value: 'auto-save', label: 'Auto Save', icon: 'fas fa-save' },
    { value: 'sync', label: 'Sync', icon: 'fas fa-sync' },
    { value: 'offline-mode', label: 'Offline Mode', icon: 'fas fa-wifi' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      layout: 'horizontal',
      selectionMode: 'multiple',
      size: 'medium',
      color: 'primary',
      variant: 'default',
      elevation: 0,
      thumbShape: 'circle',
      skeleton: false,
      labelPosition: 'right',
      label: 'Feature Settings',
      helperText: 'Select your preferences',
      orientation: 'horizontal',
      showIcons: false,
      disabled: false,
      readonly: false,
      required: false,
      invalid: false,
      animation: true,
      columns: 3,
    };
  }

  ngAfterViewInit() {
    this.updateConfig();
  }

  updateConfig() {
    this.updateConfigFromDom(this.toggleGroup, 'app-toggle-group');
  }

  onToggleChange(event: any) {
    const value = event.detail.value;
    const displayValue = Array.isArray(value) ? value.join(', ') : value;
    this.logEvent(`Selection changed: ${displayValue}`);
    this.updateConfig();
  }
}
