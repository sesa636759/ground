import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-card-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.scss',
})
export class DmCardPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  @ViewChild('demoElement') demoElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'appearance', title: 'Appearance', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'features', title: 'Features', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['appearance'];

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Elevated', value: 'elevated' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  menuItems = [
    { id: 'save', label: 'Save trip', icon: 'bookmark', iconLibrary: 'lucide' },
    { id: 'share', label: 'Share', icon: 'share-2', iconLibrary: 'lucide' },
    { separator: true },
    { id: 'report', label: 'Report', icon: 'flag', iconLibrary: 'lucide', disabled: true },
  ];

  menuJson = JSON.stringify(this.menuItems);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      variant: 'elevated',
      hoverable: true,
      flippable: false,
      loading: false,
      showMenu: true,
      borderRadius: '16px',
      width: '340px',
      closable: false,
      selectable: false,
      collapsible: false,
      glass: false,
      layout: 'vertical',
      size: 'medium',
      type: 'default',
      ribbon: '',
      ribbonColor: 'blue',
    };
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.demoElement) return;
      let code = this.getCleanFormattedDom(this.demoElement, 'ui-card');
      code = code.replace('></ui-card>', '\n  [menuItems]="menuItems"\n></ui-card>');
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }
}
