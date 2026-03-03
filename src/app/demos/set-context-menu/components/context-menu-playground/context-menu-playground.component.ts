import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-set-context-menu-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './context-menu-playground.component.html',
  styleUrl: './context-menu-playground.component.scss',
})
export class ContextMenuPlaygroundComponent implements AfterViewInit {
  @ViewChild('contextMenuElement') contextMenuElement!: ElementRef;

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

  pgAccordionItems = JSON.stringify([
    { id: 'core', title: 'Core Configuration', icon: '??' },
    { id: 'visuals', title: 'Visual & Animation', icon: '??' },
    { id: 'behavior', title: 'Advanced Behavior', icon: '?' },
  ]);

  accordionDefaultOpen = JSON.stringify(['core']);

  demoItems = [
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
  ];

  eventMessage = signal('Click the trigger to see the menu...');
  generatedCodeSignal = signal<string>('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  getCleanFormatedDom(): string {
    if (!this.contextMenuElement) return '';
    return generatePlaygroundCode(
      this.contextMenuElement.nativeElement as Element,
      'app-context-menu',
    );
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
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
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
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
    this.updateConfig();
  }
}

