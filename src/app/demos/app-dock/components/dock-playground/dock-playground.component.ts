import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-dock-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-playground.component.html',
  styleUrl: './dock-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DockPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['layout'];

  positionOptions = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  model = [
    { label: 'Finder', icon: 'search', command: () => this.logAction('Finder') },
    { label: 'App Store', icon: 'shopping-bag', command: () => this.logAction('App Store') },
    { label: 'Photos', icon: 'image', command: () => this.logAction('Photos') },
    { label: 'Settings', icon: 'settings', command: () => this.logAction('Settings') },
    { label: 'Trash', icon: 'trash-2', command: () => this.logAction('Trash') },
  ];

  modelJson = JSON.stringify(this.model);
  lastAction = '';

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      position: 'bottom',
      breakpoint: '960px',
      autoZIndex: true,
      magnify: true,
      blurEffect: false,
      showLabels: true,
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      let code = this.getCleanFormattedDom(this.demoElement, 'ui-dock');
      code = code.replace('></ui-dock>', '\n  [items]="menuItems"\n></ui-dock>');
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  logAction(action: string) {
    this.lastAction = action;
    this.logEvent(`Dock item clicked: ${action}`);
  }
}
