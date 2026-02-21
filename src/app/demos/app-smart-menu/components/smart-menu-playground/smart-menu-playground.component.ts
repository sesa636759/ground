import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-menu-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <!-- ── Component Props ── -->
          <div class="control-section">
            <h3>Component Props</h3>

            <!-- icon-library -->
            <div class="control-group">
              <label>icon-library</label>
              <ui-dropdown
                [(ngModel)]="cfg.iconLibrary"
                (change)="rebuild()"
                [options]="iconLibraryOpts"
              ></ui-dropdown>
              <span class="control-hint">Changes how item icons are resolved</span>
            </div>

            <!-- target mode -->
            <div class="control-group">
              <label>target / trigger mode</label>
              <ui-dropdown
                [(ngModel)]="cfg.triggerMode"
                (change)="rebuild()"
                [options]="triggerModeOpts"
              ></ui-dropdown>
              <span class="control-hint">
                "right-click zone" binds target="#pg-zone"<br />
                "button click" calls show(x,y) programmatically<br />
                "no target" listens on the whole document
              </span>
            </div>
          </div>

          <!-- ── MenuItem structure ── -->
          <div class="control-section">
            <h3>MenuItem Fields</h3>

            <div class="control-group">
              <label>Preset</label>
              <ui-dropdown
                [(ngModel)]="cfg.preset"
                (change)="rebuild()"
                [options]="presetOpts"
              ></ui-dropdown>
            </div>

            <div class="checkbox-group">
              <app-checkbox
                id="pg-icons"
                [(ngModel)]="cfg.showIcons"
                (change)="rebuild()"
                label="item.icon — show icons"
              ></app-checkbox>

              <app-checkbox
                id="pg-desc"
                [(ngModel)]="cfg.showDescriptions"
                (change)="rebuild()"
                label="item.description — secondary text"
              ></app-checkbox>

              <app-checkbox
                id="pg-nested"
                [(ngModel)]="cfg.showNested"
                (change)="rebuild()"
                label="item.submenu — nested sub-menu (hover ▶)"
              ></app-checkbox>

              <app-checkbox
                id="pg-dividers"
                [(ngModel)]="cfg.showDividers"
                (change)="rebuild()"
                label="item.divider — separator line"
              ></app-checkbox>

              <app-checkbox
                id="pg-disabled"
                [(ngModel)]="cfg.showDisabled"
                (change)="rebuild()"
                label="item.disabled — greyed-out item"
              ></app-checkbox>

              <app-checkbox
                id="pg-action"
                [(ngModel)]="cfg.showAction"
                (change)="rebuild()"
                label="item.action — callback on click (see console)"
              ></app-checkbox>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button variant="secondary" (click)="reset()" label="Reset"></ui-button>
        </div>
      </div>

      <!-- ── Preview ── -->
      <div
        class="playground-preview"
        style="display:flex;flex-direction:column;gap:16px;align-items:stretch"
      >
        <!-- Right-click zone (used when triggerMode = 'zone') -->
        @if (cfg.triggerMode === 'zone' || cfg.triggerMode === 'no-target') {
          <div
            id="pg-zone"
            style="padding:64px 24px;border:2px dashed var(--color-border,#ccc);border-radius:12px;
                   text-align:center;cursor:context-menu;user-select:none;
                   color:var(--color-text-secondary,#6b7280);box-sizing:border-box"
          >
            @if (cfg.triggerMode === 'zone') {
              🖱️ <strong>Right-click anywhere in this area</strong> to open the menu
            } @else {
              🌐 <strong>Right-click anywhere on the page</strong> to open the menu<br />
              <small>(no target set — listens on whole document)</small>
            }
          </div>
        }

        <!-- Button trigger (used when triggerMode = 'button') -->
        @if (cfg.triggerMode === 'button') {
          <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-start">
            <p style="margin:0;color:var(--color-text-secondary,#6b7280);font-size:0.875rem">
              Click the button to open the menu at its position via <code>el.show(x, y)</code>
            </p>
            <ui-button
              id="pg-open-btn"
              label="Open Context Menu"
              icon="menu"
              icon-library="lucide"
              (click)="openViaButton($event)"
            ></ui-button>
          </div>
        }

        <!-- The context menu element -->
        <ui-smart-context-menu
          #smartMenu
          [attr.target]="
            cfg.triggerMode === 'zone' ? '#pg-zone' : cfg.triggerMode === 'no-target' ? null : null
          "
          icon-library="{{ cfg.iconLibrary }}"
          [items]="menuJson"
          (menuItemClick)="onItemClick($event)"
        ></ui-smart-context-menu>

        <div class="code-output">
          <ui-code-preview
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>

        <!-- Event log -->
        @if (clickLog().length) {
          <div
            style="padding:10px 14px;background:var(--color-surface-2,#f1f5f9);border-radius:8px;
                      font-size:0.8rem;color:var(--color-text-secondary,#6b7280)"
          >
            <strong>Last clicked:</strong>
            @for (entry of clickLog(); track entry) {
              <div>• {{ entry }}</div>
            }
          </div>
        }
      </div>
    </div>
  `,
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
  generatedCode = signal('');
  clickLog = signal<string[]>([]);

  constructor() {
    this.rebuild();
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

    this.generatedCode.set(
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
    navigator.clipboard.writeText(this.generatedCode());
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
