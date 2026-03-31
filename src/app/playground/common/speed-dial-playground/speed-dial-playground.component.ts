import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-speed-dial-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speed-dial-playground.component.html',
  styleUrl: './speed-dial-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmSpeedDialPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout & Strategy', icon: 'move', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Main Button Visuals', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & Tooltips', icon: 'zap', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['layout', 'visuals'];

  positionOptions = [
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Right', value: 'top-right' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
    { label: 'Center', value: 'center' },
  ];

  strategyOptions = [
    { label: 'Fixed (Screen)', value: 'fixed' },
    { label: 'Absolute (Container)', value: 'absolute' },
  ];

  directionOptions = [
    { label: 'Auto', value: 'auto' },
    { label: 'Up', value: 'up' },
    { label: 'Down', value: 'down' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  tooltipOptions = [
    { label: 'Auto', value: 'auto' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  triggerOptions = [
    { label: 'Click', value: 'click' },
    { label: 'Hover', value: 'hover' },
  ];

  actions = [
    { id: 'share', icon: 'share-2', label: 'Share', iconLibrary: 'lucide' },
    { id: 'download', icon: 'download', label: 'Download', iconLibrary: 'lucide' },
    { id: 'copy', icon: 'copy', label: 'Copy', iconLibrary: 'lucide' },
    { id: 'delete', icon: 'trash-2', label: 'Delete', color: '#ef4444', iconLibrary: 'lucide' },
  ];

  actionsJson = JSON.stringify(this.actions);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      position: 'center',
      strategy: 'absolute',
      icon: 'plus',
      iconLibrary: 'lucide',
      actionLibrary: 'lucide',
      color: 'primary',
      size: 'md',
      direction: 'auto',
      tooltipPosition: 'auto',
      showTooltips: true,
      trigger: 'click',
    };
  }

  updateConfig() {
    let code = '<ui-speed-dial\n';
    code += `  position="${this.pgConfig.position}"\n`;
    code += `  strategy="${this.pgConfig.strategy}"\n`;
    code += `  icon="${this.pgConfig.icon}"\n`;
    code += `  icon-library="${this.pgConfig.iconLibrary}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  trigger="${this.pgConfig.trigger}"\n`;
    if (!this.pgConfig.showTooltips) code += `  [show-tooltips]="false"\n`;
    code += `  [actions]="actions"\n`;
    code += '></ui-speed-dial>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onActionClick(event: any) {
    this.logEvent(`Action executed: ${event.detail}`);
  }
}
