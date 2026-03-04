import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-smart-menu-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-menu-playground.component.html',
  styleUrl: './smart-menu-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SmartMenuPlaygroundComponent extends BasePlaygroundComponent {
  updateConfig(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('smartMenu') smartMenuEl!: ElementRef;

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'props', title: 'Component Props', icon: '⚙️' },
    { id: 'fields', title: 'MenuItem Fields', icon: '📋' },
  ]);

  accordionDefaultOpen = JSON.stringify(['props', 'fields']);

  iconLibraryOpts = [
    { label: 'lucide', value: 'lucide' },
    { label: 'fontawesome', value: 'fontawesome' },
    { label: 'bootstrap', value: 'bootstrap' },
    { label: 'iconoir', value: 'iconoir' },
    { label: 'icons8', value: 'icons8' },
    { label: 'ionicons', value: 'ionicons' },
    { label: 'se', value: 'se' },
    { label: 'default', value: 'default' },
  ];

  triggerModeOpts = [
    { label: 'Right-click zone', value: 'zone' },
    { label: 'Button click', value: 'button' },
    { label: 'Whole document', value: 'no-target' },
  ];

  presetOpts = [
    { label: 'File / Edit / View', value: 'file' },
    { label: 'Dashboard Actions', value: 'dashboard' },
    { label: 'Cut / Copy / Paste', value: 'edit' },
    { label: 'Browser Context', value: 'browser' },
  ];

  basePresets: Record<string, any[]> = {
    file: [
      {
        label: 'New File',
        icon: 'file-plus',
        description: 'Create a new empty file',
        submenu: [
          { label: 'TypeScript (.ts)', icon: 'file-code' },
          { label: 'HTML (.html)', icon: 'file-text' },
          { label: 'Stylesheet (.css)', icon: 'file-code-2' },
        ],
      },
      { label: 'Open...', icon: 'folder-open', description: 'Open existing file' },
      {
        label: 'Save',
        icon: 'save',
        description: 'Save current file',
        submenu: [
          { label: 'Save', icon: 'save' },
          { label: 'Save As...', icon: 'save-all' },
          { label: 'Save All', icon: 'hard-drive' },
        ],
      },
      { label: 'Export', icon: 'download', description: 'Export to a format' },
    ],
    dashboard: [
      { label: 'Dashboard', icon: 'layout-dashboard', description: 'Go to dashboard' },
      { label: 'Analytics', icon: 'bar-chart-2', description: 'View metrics' },
      {
        label: 'Reports',
        icon: 'file-bar-chart',
        description: 'Generate reports',
        submenu: [
          { label: 'Weekly', icon: 'calendar' },
          { label: 'Monthly', icon: 'calendar-range' },
          { label: 'Custom', icon: 'calendar-search' },
        ],
      },
      { label: 'Settings', icon: 'settings', description: 'Configure app' },
      { label: 'Logout', icon: 'log-out', description: 'Sign out' },
    ],
    edit: [
      { label: 'Cut', icon: 'scissors', description: 'Cut selection' },
      { label: 'Copy', icon: 'copy', description: 'Copy to clipboard' },
      { label: 'Paste', icon: 'clipboard', description: 'Paste from clipboard' },
      { label: 'Select All', icon: 'check-square', description: 'Select all content' },
      {
        label: 'Find',
        icon: 'search',
        description: 'Find in document',
        submenu: [
          { label: 'Find Next', icon: 'arrow-down' },
          { label: 'Find Previous', icon: 'arrow-up' },
          { label: 'Replace...', icon: 'replace' },
        ],
      },
    ],
    browser: [
      { label: 'Back', icon: 'arrow-left', description: 'Previous page' },
      { label: 'Forward', icon: 'arrow-right', description: 'Next page' },
      { label: 'Reload', icon: 'refresh-cw', description: 'Reload this page' },
      { label: 'Save Page As...', icon: 'download', description: 'Save to disk' },
      { label: 'View Page Source', icon: 'code', description: 'Show HTML source' },
      { label: 'Inspect', icon: 'terminal', description: 'Open DevTools' },
    ],
  };

  menuJson = '';

  constructor() {
    super();
    this.rebuild();
  }

  getDefaultConfig() {
    return {
      iconLibrary: 'lucide',
      preset: 'file',
      triggerMode: 'zone',
      showIcons: true,
      showDescriptions: false,
      showNested: true,
      showDividers: true,
      showDisabled: false,
      showAction: false,
    };
  }

  rebuild() {
    const rows: any[] = JSON.parse(JSON.stringify(this.basePresets[this.pgConfig.preset] ?? []));
    const items: any[] = [];

    rows.forEach((row, i) => {
      const item: any = { label: row.label };
      if (this.pgConfig.showIcons) item.icon = row.icon;
      if (this.pgConfig.showDescriptions) item.description = row.description;
      if (this.pgConfig.showNested && row.submenu?.length) item.submenu = row.submenu;
      if (this.pgConfig.showAction) item.action = `() => console.log('Clicked: ${row.label}')`;
      items.push(item);

      if (this.pgConfig.showDividers && i === 1 && rows.length > 2) {
        items.push({ divider: true });
      }
    });

    if (this.pgConfig.showDisabled) {
      items.splice(2, 0, {
        label: 'Disabled Action',
        icon: this.pgConfig.showIcons ? 'ban' : undefined,
        disabled: true,
      });
    }

    this.menuJson = JSON.stringify(items);

    const targetAttr =
      this.pgConfig.triggerMode === 'zone'
        ? `  target="#pg-zone"`
        : this.pgConfig.triggerMode === 'no-target'
          ? `  <!-- listens on whole document -->`
          : `  <!-- programmatically opened -->`;

    const codeLines = [
      `<ui-smart-context-menu`,
      targetAttr,
      `  icon-library="${this.pgConfig.iconLibrary}"`,
      `  [items]="menuItems"`,
      `></ui-smart-context-menu>`,
    ];

    this.generatedCode.set(codeLines.join('\n'));
    this.refreshCode();
  }

  async openViaButton(event: MouseEvent) {
    const el = this.smartMenuEl?.nativeElement;
    if (el && typeof el.show === 'function') {
      const btn = event.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      await el.show(rect.left, rect.bottom + 4);
    }
  }

  onItemClick(event: any) {
    const label = event.detail?.label ?? event.detail?.item?.label ?? 'Unknown';
    this.logEvent(`Menu Item Clicked: ${label}`);
  }

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.rebuild();
    this.eventLog.set([]);
  }
}
