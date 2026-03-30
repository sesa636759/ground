import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-context-menu-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './context-menu-playground.component.html',
  styleUrl: './context-menu-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmContextMenuPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;
  @ViewChild('targetElement') targetElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'settings', title: 'Menu Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Styles', icon: 'palette', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['settings'];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Green', value: 'green' },
  ];

  model = [
    { label: 'View Details', icon: 'eye', command: () => this.logAction('View') },
    { label: 'Edit Entry', icon: 'pencil', command: () => this.logAction('Edit') },
    { separator: true },
    { label: 'Delete', icon: 'trash', command: () => this.logAction('Delete') },
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
      breakpoint: 960,
      autoZIndex: true,
      baseZIndex: 0,
      theme: 'light',
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      let code = this.getCleanFormattedDom(this.demoElement, 'ui-context-menu');
      code = code.replace(
        '></ui--context-menu>',
        '\n  [items]="menuItems"\n  [target]="myTargetElement"\n></ui--context-menu>',
      );
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  logAction(action: string) {
    this.lastAction = action;
    this.logEvent(`Menu action: ${action}`);
  }
}
