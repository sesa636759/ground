import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  signal,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-smart-menu-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './smart-menu-playground.component.html',
  styleUrl: './smart-menu-playground.component.scss',
})
export class SmartMenuPlaygroundComponent {
  @ViewChild('smartMenu') smartMenuEl!: ElementRef;

  cfg = {
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
    { label: 'Right-click zone (target="#pg-zone")', value: 'zone' },
    { label: 'Button → show(x, y)', value: 'button' },
    { label: 'Whole document (no target)', value: 'no-target' },
  ];

  presetOpts = [
    { label: 'File / Edit / View', value: 'file' },
    { label: 'Dashboard Actions', value: 'dashboard' },
    { label: 'Cut / Copy / Paste', value: 'edit' },
    { label: 'Browser Context', value: 'browser' },
  ];

  // Full item definitions with all supported fields
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
  generatedCodeSignal = signal('');
  clickLog = signal<string[]>([]);
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.rebuild();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  rebuild() {
    const rows: any[] = JSON.parse(JSON.stringify(this.basePresets[this.cfg.preset] ?? []));
    const items: any[] = [];

    rows.forEach((row, i) => {
      const item: any = { label: row.label };
      if (this.cfg.showIcons) item.icon = row.icon;
      if (this.cfg.showDescriptions) item.description = row.description;
      if (this.cfg.showNested && row.submenu?.length) item.submenu = row.submenu;
      if (this.cfg.showAction) item.action = `() => console.log('Clicked: ${row.label}')`;
      items.push(item);

      if (this.cfg.showDividers && i === 1 && rows.length > 2) {
        items.push({ divider: true });
      }
    });

    if (this.cfg.showDisabled) {
      items.splice(2, 0, {
        label: 'Disabled Action',
        icon: this.cfg.showIcons ? 'ban' : undefined,
        disabled: true,
      });
    }

    this.menuJson = JSON.stringify(items);

    const targetAttr =
      this.cfg.triggerMode === 'zone'
        ? `  target="#pg-zone"   <!-- CSS selector for right-click target -->`
        : this.cfg.triggerMode === 'no-target'
          ? `  <!-- no target: right-click anywhere on page -->`
          : `  <!-- show/hide programmatically via el.show(x,y) / el.hide() -->`;

    this.generatedCodeSignal.set(
      [
        `<!-- Trigger element (only needed for right-click mode) -->`,
        `<div id="pg-zone">Right-click here</div>`,
        ``,
        `<!-- All component attributes: items, target, icon-library -->`,
        `<ui-smart-context-menu`,
        targetAttr,
        `  icon-library="${this.cfg.iconLibrary}"`,
        `  [items]="menuItems"`,
        `  (menuItemClick)="onItemClick($event)"`,
        `></ui-smart-context-menu>`,
        ``,
        `<!-- MenuItems shape (all supported fields): -->`,
        `menuItems = [`,
        `  { label: 'Open',  icon: 'folder',  description: 'Open a file',`,
        `    submenu: [{ label: 'Recent', icon: 'clock' }] },`,
        `  { divider: true },`,
        `  { label: 'Save',  icon: 'save',    disabled: false },`,
        `  { label: 'Close', icon: 'x',       disabled: true  },`,
        `];`,
      ].join('\n'),
    );
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
    this.clickLog.update((log) =>
      [`${label} — ${new Date().toLocaleTimeString()}`, ...log].slice(0, 5),
    );
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  reset() {
    this.cfg = {
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
    this.clickLog.set([]);
    this.rebuild();
  }
}
