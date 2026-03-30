import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-dock-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-playground.component.html',
  styleUrl: './dock-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmDockPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'settings', title: 'Core Settings', icon: '⚙️', iconLibrary: 'emoji' },
    { id: 'style', title: 'Appearance', icon: '🎨', iconLibrary: 'emoji' },
  ];

  accordionDefaultOpen = ['settings'];

  positionOptions = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  iconLibraryOptions = [
    { label: 'Emoji', value: 'emoji' },
    { label: 'Default', value: 'default' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'Ionicons', value: 'ionicons' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Bootstrap', value: 'bootstrap' },
  ];

  items = [
    { id: 'finder', label: 'Finder', icon: '🔍', iconLibrary: 'emoji' },
    { id: 'appstore', label: 'App Store', icon: '🛍️', iconLibrary: 'emoji' },
    { id: 'photos', label: 'Photos', icon: '🖼️', iconLibrary: 'emoji' },
    { separator: true },
    { id: 'settings', label: 'Settings', icon: '⚙️', active: true, iconLibrary: 'emoji' },
    { id: 'trash', label: 'Trash', icon: '🗑️', badge: 3, iconLibrary: 'emoji' },
  ];

  itemsJson = JSON.stringify(this.items, null, 2);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      items: JSON.stringify([
        { id: 'finder', label: 'Finder', icon: '🔍', iconLibrary: 'emoji' },
        { id: 'appstore', label: 'App Store', icon: '🛍️', iconLibrary: 'emoji' },
        { id: 'photos', label: 'Photos', icon: '🖼️', iconLibrary: 'emoji' },
        { separator: true },
        { id: 'settings', label: 'Settings', icon: '⚙️', iconLibrary: 'emoji' },
        { id: 'trash', label: 'Trash', icon: '🗑️', iconLibrary: 'emoji' },
      ]),
      position: 'bottom',
      size: 'md',
      magnify: true,
      blurEffect: true,
      showLabels: true,
      iconLibrary: 'emoji',
    };
  }

  updateConfig() {
    let code = `<ui-dock\n`;
    code += `  [items]="dockItems"\n`;
    if (this.pgConfig.position !== 'bottom') code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.size !== 'md') code += `  size="${this.pgConfig.size}"\n`;
    if (!this.pgConfig.magnify) code += `  [magnify]="false"\n`;
    if (!this.pgConfig.blurEffect) code += `  [blur-effect]="false"\n`;
    if (!this.pgConfig.showLabels) code += `  [show-labels]="false"\n`;
    if (this.pgConfig.iconLibrary !== 'default')
      code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;

    code += `></ui--dock>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onJsonChange() {
    try {
      if (this.pgConfig.items) JSON.parse(this.pgConfig.items);
      this.updateConfig();
    } catch (e) {}
  }

  onDockItemClick(ev: any) {
    this.logEvent(`Dock Item Clicked: ${ev.detail.itemId}`);
  }

  onOrderChange(ev: any) {
    this.logEvent('Dock Items Order Changed');
  }
}
