import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>🎨 Appearance</h3>
            <div class="control-group">
              <label>Design Variant</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.variant"
                (change)="updateConfig()"
                [options]="variantOptions"
              ></ui-dropdown>
            </div>

            <div
              class="control-grid"
              style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0;"
            >
              <div class="control-group">
                <label>Width</label>
                <input type="text" [(ngModel)]="pgConfig.width" (ngModelChange)="updateConfig()" />
              </div>
              <div class="control-group">
                <label>Radius</label>
                <input
                  type="text"
                  [(ngModel)]="pgConfig.borderRadius"
                  (ngModelChange)="updateConfig()"
                />
              </div>
            </div>

            <div class="control-group">
              <label>Content Layout</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.layout"
                (change)="updateConfig()"
                [options]="[
                  { label: 'Vertical stacking', value: 'vertical' },
                  { label: 'Horizontal flow', value: 'horizontal' },
                ]"
              ></ui-dropdown>
            </div>

            <div class="control-group">
              <label>Special Effects</label>
              <div class="checkbox-grid">
                <app-checkbox
                  id="glass"
                  [(ngModel)]="pgConfig.glass"
                  (change)="updateConfig()"
                  label="Glassmorphism"
                ></app-checkbox>
                <app-checkbox
                  id="hoverable"
                  [(ngModel)]="pgConfig.hoverable"
                  (change)="updateConfig()"
                  label="Raise on hover"
                ></app-checkbox>
              </div>
            </div>
          </div>

          <div class="control-section">
            <h3>⚡ Functional Features</h3>
            <div class="checkbox-grid">
              <div class="checkbox-group">
                <app-checkbox
                  id="flippable"
                  [(ngModel)]="pgConfig.flippable"
                  (change)="updateConfig()"
                  label="Flippable"
                ></app-checkbox>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="loading"
                  [(ngModel)]="pgConfig.loading"
                  (change)="updateConfig()"
                  label="Skeleton"
                ></app-checkbox>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="showMenu"
                  [(ngModel)]="pgConfig.showMenu"
                  (change)="updateConfig()"
                  label="Menu"
                ></app-checkbox>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="closable"
                  [(ngModel)]="pgConfig.closable"
                  (change)="updateConfig()"
                  label="Closable"
                ></app-checkbox>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="selectable"
                  [(ngModel)]="pgConfig.selectable"
                  (change)="updateConfig()"
                  label="Selectable"
                ></app-checkbox>
              </div>
              <div class="checkbox-group">
                <app-checkbox
                  id="collapsible"
                  [(ngModel)]="pgConfig.collapsible"
                  (change)="updateConfig()"
                  label="Collapsible"
                ></app-checkbox>
              </div>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <ui-button variant="ghost" (click)="resetConfig()" label="Reset"></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <ui-card
          [attr.variant]="pgConfig.variant"
          [attr.hoverable]="pgConfig.hoverable ? '' : null"
          [attr.flippable]="pgConfig.flippable ? '' : null"
          [attr.loading]="pgConfig.loading ? '' : null"
          [attr.show-menu]="pgConfig.showMenu ? '' : null"
          [attr.closable]="pgConfig.closable ? '' : null"
          [attr.selectable]="pgConfig.selectable ? '' : null"
          [attr.collapsible]="pgConfig.collapsible ? '' : null"
          [attr.glass]="pgConfig.glass ? '' : null"
          [attr.layout]="pgConfig.layout"
          [attr.size]="pgConfig.size"
          [attr.type]="pgConfig.type"
          [attr.ribbon]="pgConfig.ribbon || null"
          [attr.ribbon-color]="pgConfig.ribbon ? pgConfig.ribbonColor : null"
          [attr.border-radius]="pgConfig.borderRadius"
          [attr.width]="pgConfig.width"
          [menuItems]="menuJson"
        >
          <div slot="cover" class="demo-cover-image">
            <i class="fas fa-mountain"></i>
          </div>
          <div slot="header">
            <h3 style="margin: 0; font-weight: 700;">Exploring the Alps</h3>
          </div>
          <div slot="content" class="demo-card-content">
            <p>
              Experience the breathtaking views and serene landscapes of the highest mountain range
              in Europe. Perfect for adventure seekers!
            </p>
          </div>
          <div slot="footer" style="display: flex; gap: 12px; width: 100%;">
            <ui-button variant="primary" style="flex: 1;" label="Book Now"></ui-button>
            <ui-button
              variant="primary"
              label="Details"
              icon="fa-solid fa-circle-info"
              iconLibrary="fontawesome"
            ></ui-button>
            <ui-button
              label="With Icon"
              icon="fa fa-circle-info"
              iconLibrary="fontawesome"
              size="xs"
              variant="primary"
            ></ui-button>
          </div>
          <div slot="back-content" style="padding: 24px;">
            <h3 style="color: var(--primary); margin-bottom: 16px;">Tour Statistics</h3>
            <ul style="padding-left: 20px; color: var(--text-secondary); line-height: 2;">
              <li>Elevation: 4,808m</li>
              <li>Length: 1,200km</li>
              <li>Area: 200,000 km²</li>
              <li>Duration: 5-7 Days</li>
            </ul>
          </div>
        </ui-card>

        <div class="code-output">
          <ui-code-preview
            *ngIf="showCode"
            [htmlCode]="generatedCode()"
            label="Generated Code"
            activeLang="html"
            expanded="true"
          ></ui-code-preview>
        </div>
      </div>
    </div>
  `,
  styleUrl: './card-playground.component.scss',
})
export class CardPlaygroundComponent {
  pgConfig = {
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

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Elevated', value: 'elevated' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  menuItems = [
    { id: 'save', label: 'Save trip', icon: '🔖' },
    { id: 'share', label: 'Share', icon: '📤' },
    { separator: true },
    { id: 'report', label: 'Report', icon: '🚩', disabled: true },
  ];

  menuJson = JSON.stringify(this.menuItems);
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
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

  updateConfig() {
    let code = '<ui-card\n';
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.hoverable) code += `  hoverable\n`;
    if (this.pgConfig.flippable) code += `  flippable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.showMenu) code += `  show-menu [menuItems]="menu"\n`;
    if (this.pgConfig.closable) code += `  closable\n`;
    if (this.pgConfig.selectable) code += `  selectable\n`;
    if (this.pgConfig.collapsible) code += `  collapsible\n`;
    if (this.pgConfig.glass) code += `  glass="true"\n`;
    if (this.pgConfig.layout !== 'vertical') code += `  layout="${this.pgConfig.layout}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.type !== 'default') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.ribbon)
      code += `  ribbon="${this.pgConfig.ribbon}" ribbon-color="${this.pgConfig.ribbonColor}"\n`;
    code += `  border-radius="${this.pgConfig.borderRadius}"\n`;
    code += `  width="${this.pgConfig.width}"\n`;
    code += '>\n';
    code += '  <img slot="cover" src="..." />\n';
    code += '  <div slot="header"><h3>Card Title</h3></div>\n';
    code += '  <div slot="content">Card body here...</div>\n';
    code += '  <div slot="footer"><ui-button label="Action"></ui-button></div>\n';
    if (this.pgConfig.flippable) {
      code += '  <div slot="back-content">Back side content...</div>\n';
    }
    code += '</ui-card>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
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
    this.updateConfig();
  }
}
