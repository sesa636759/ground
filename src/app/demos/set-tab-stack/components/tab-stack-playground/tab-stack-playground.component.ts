import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';

import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-tab-stack-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tab-stack-playground.component.html',

  styles: [
    `
      @use '../../../../../styles/playground-base.scss';
    `,
  ],
})
export class TabStackPlaygroundComponent implements OnInit {
  pgConfig = {
    orientation: 'horizontal',
    variant: 'default',
    size: 'medium',
    closable: false,
    draggable: false,
    scrollable: false,
    grouped: false,
  };
  tabs = [
    { id: 'tab1', label: 'Dashboard', icon: 'fas fa-home' },
    { id: 'tab2', label: 'Analytics', icon: 'fas fa-chart-line' },
    { id: 'tab3', label: 'Settings', icon: 'fas fa-cog' },
  ];
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-tab-stack orientation="${this.pgConfig.orientation}" variant="${this.pgConfig.variant}" size="${this.pgConfig.size}"`;
    if (this.pgConfig.closable) code += ` closable="true"`;
    if (this.pgConfig.draggable) code += ` draggable="true"`;
    if (this.pgConfig.scrollable) code += ` scrollable="true"`;
    if (this.pgConfig.grouped) code += ` grouped="true"`;
    code += ` [tabs]="tabs"></app-tab-stack>`;
    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
