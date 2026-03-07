import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-transfer-list-playground',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './transfer-list-playground.component.html',
  styleUrl: './transfer-list-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTransferListPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'states', title: 'Behavioral States', icon: 'settings', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['global', 'states'];

  source = [
    { label: 'Role: Admin', value: 'admin' },
    { label: 'Role: Editor', value: 'editor' },
    { label: 'Role: Viewer', value: 'viewer' },
    { label: 'Role: Manager', value: 'manager' },
  ];

  target = [{ label: 'Role: Contributor', value: 'contributor' }];

  sourceJson = JSON.stringify(this.source);
  targetJson = JSON.stringify(this.target);

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      searchPlaceholder: 'Search items...',
      disabled: false,
      showSearch: true,
    };
  }

  updateConfig() {
    let code = '<ui-transfer-list\n';
    code += `  [source]="availableRoles"\n`;
    code += `  [target]="assignedRoles"\n`;
    if (this.pgConfig.showSearch) code += `  show-search\n`;
    if (this.pgConfig.disabled) code += `  disabled\n`;
    code += '></ui-transfer-list>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onTransferChange(event: any) {
    this.logEvent(`Transfer list updated: ${event.detail?.items?.length} items transferred`);
  }
}



