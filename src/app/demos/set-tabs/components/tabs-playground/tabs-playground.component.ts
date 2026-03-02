import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-tabs-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs-playground.component.html',
  styleUrl: './tabs-playground.component.scss',
})
export class TabsPlaygroundComponent implements OnInit {
  public eventLog: Array<any> = [];
  // Playground State
  pgConfig = {
    orientation: 'horizontal',
    variant: 'default',
    size: 'medium',
    color: 'primary',
    align: 'start',
    indicatorPosition: 'bottom',
    fullWidth: false,
    scrollable: true,
    showAddButton: true,
    animated: true,
    closable: false,
    showCloseAllButton: false,
    editableLabels: false,
    dragEnabled: true,
    showOverflowButton: true,
  };

  tabs = [
    { label: 'Overview', value: 'tab1', icon: 'fas fa-cube', badge: '', badgeColor: 'primary' },
    { label: 'Analytics', value: 'tab2', icon: 'fas fa-bolt', badge: '', badgeColor: 'primary' },
    { label: 'Config', value: 'tab3', icon: 'fas fa-star', badge: 'New', badgeColor: 'success' },
    { label: 'History', value: 'tab4', icon: 'fas fa-history', badge: '', badgeColor: 'primary' },
  ];

  eventMessage = signal('Switch tabs or adjust controls...');
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-tab-stack\n`;
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.color !== 'primary') code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.align !== 'start') code += `  align="${this.pgConfig.align}"\n`;
    if (this.pgConfig.indicatorPosition !== 'bottom')
      code += `  indicator-position="${this.pgConfig.indicatorPosition}"\n`;
    if (this.pgConfig.fullWidth) code += `  full-width\n`;
    if (this.pgConfig.scrollable) code += `  scrollable\n`;
    if (this.pgConfig.showAddButton) code += `  show-add-button\n`;
    if (!this.pgConfig.animated) code += `  animated="false"\n`;
    if (this.pgConfig.closable) code += `  closable\n`;
    if (this.pgConfig.showCloseAllButton) code += `  show-close-all-button\n`;
    if (this.pgConfig.editableLabels) code += `  editable-labels\n`;
    if (this.pgConfig.dragEnabled) code += `  drag-enabled\n`;
    if (this.pgConfig.showOverflowButton) code += `  show-overflow-button\n`;
    code += `  active-tab="tab1"\n`;
    code += `>\n`;
    this.tabs.forEach((tab) => {
      code += `  <app-tab label="${tab.label}" value="${tab.value}" icon="${tab.icon}"`;
      if (tab.badge) code += ` badge="${tab.badge}" badge-color="${tab.badgeColor}"`;
      code += `>\n    <!-- Tab Content -->\n  </app-tab>\n`;
    });
    code += `</app-tab-stack>`;
    this.generatedCode.set(code);
  }

  onTabChange(event: any) {
    this.eventMessage.set(
      `Active tab: "${event.detail.value}" at ${new Date().toLocaleTimeString()}`,
    );
  }

  onTabAdd() {
    const newId = `tab${this.tabs.length + 1}`;
    this.tabs.push({
      label: `Dynamic ${this.tabs.length + 1}`,
      value: newId,
      icon: 'fas fa-plus-circle',
      badge: '',
      badgeColor: 'primary',
    });
    this.logEvent(`Added new tab: ${newId}`);
    this.updateConfig();
  }

  onTabRemove(event: any) {
    this.tabs = this.tabs.filter((t) => t.value !== event.detail.value);
    this.logEvent(`Removed tab: ${event.detail.value}`);
    this.updateConfig();
  }

  logEvent(msg: string) {
    this.eventMessage.set(msg);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
