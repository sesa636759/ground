import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-context-menu-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './context-menu-playground.component.html',
  styleUrl: './context-menu-playground.component.scss',
})
export class ContextMenuPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    trigger: 'click',
    searchable: true,
    animated: true,
    maxHeight: '400px',
    minWidth: '220px',
    closeOnSelect: true,
    staggered: true,
    animationType: 'slide',
    variant: 'default',
    reflection: false,
    backdropBlur: '8px',
    backdrop: false,
    keyboardNavigation: true,
    commandPalette: false,
    multiSelect: false,
    showGroups: true,
    highlightSearch: true,
  };

  demoItems = JSON.stringify([
    {
      id: 'file',
      label: 'File Operations',
      icon: 'fas fa-file',
      group: 'General',
      children: [
        { id: 'new', label: 'New File', icon: 'fas fa-plus', shortcut: 'Ctrl+N' },
        { id: 'open', label: 'Open File', icon: 'fas fa-folder-open', shortcut: 'Ctrl+O' },
        { id: 'save', label: 'Save', icon: 'fas fa-save', shortcut: 'Ctrl+S' },
        { divider: true },
        { id: 'print', label: 'Print...', icon: 'fas fa-print', disabled: true },
      ],
    },
    {
      id: 'edit',
      label: 'Edit',
      icon: 'fas fa-edit',
      group: 'General',
      children: [
        { id: 'undo', label: 'Undo', icon: 'fas fa-undo', shortcut: 'Ctrl+Z' },
        { id: 'redo', label: 'Redo', icon: 'fas fa-redo', shortcut: 'Ctrl+Y' },
        { divider: true },
        { id: 'cut', label: 'Cut', icon: 'fas fa-cut', shortcut: 'Ctrl+X' },
        { id: 'copy', label: 'Copy', icon: 'fas fa-copy', shortcut: 'Ctrl+C' },
        { id: 'paste', label: 'Paste', icon: 'fas fa-paste', shortcut: 'Ctrl+V' },
      ],
    },
    {
      id: 'view',
      label: 'View',
      icon: 'fas fa-eye',
      group: 'Display',
      children: [
        { id: 'zoom-in', label: 'Zoom In', icon: 'fas fa-search-plus' },
        { id: 'zoom-out', label: 'Zoom Out', icon: 'fas fa-search-minus' },
        { divider: true },
        {
          id: 'full-screen',
          label: 'Full Screen',
          icon: 'fas fa-expand',
          type: 'checkbox',
          checked: false,
        },
      ],
    },
    { divider: true },
    { id: 'delete', label: 'Delete Item', icon: 'fas fa-trash', color: 'danger', group: 'Danger' },
    { id: 'archive', label: 'Archive', icon: 'fas fa-archive', color: 'warning', group: 'Danger' },
  ]);

  eventMessage = signal('Click the trigger to see the menu...');
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-context-menu\n`;
    code += `  trigger="${this.pgConfig.trigger}"\n`;
    if (this.pgConfig.searchable) code += `  searchable\n`;
    if (this.pgConfig.animated) code += `  animated\n`;
    if (this.pgConfig.animationType !== 'slide')
      code += `  animation-type="${this.pgConfig.animationType}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.staggered) code += `  staggered\n`;
    if (this.pgConfig.backdrop) code += `  backdrop\n`;
    if (this.pgConfig.commandPalette) code += `  command-palette\n`;
    if (this.pgConfig.multiSelect) code += `  multi-select\n`;
    if (!this.pgConfig.closeOnSelect) code += `  close-on-select="false"\n`;
    if (this.pgConfig.showGroups) code += `  show-groups\n`;
    if (this.pgConfig.highlightSearch) code += `  highlight-search\n`;
    code += `  [items]="menuItems"\n`;
    code += `>\n`;
    code += `</app-context-menu>`;
    this.generatedCode.set(code);
  }

  onMenuSelect(event: any) {
    this.eventMessage.set(
      `Selected item: "${event.detail.id}" at ${new Date().toLocaleTimeString()}`,
    );
  }

  onMenuOpen() {
    this.eventMessage.set(`Menu opened at ${new Date().toLocaleTimeString()}`);
  }

  onMenuClose() {
    this.eventMessage.set(`Menu closed at ${new Date().toLocaleTimeString()}`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  jsonItems = () => JSON.stringify(this.demoItems);
}
