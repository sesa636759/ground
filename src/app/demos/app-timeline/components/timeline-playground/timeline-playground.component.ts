import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeline-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-layout">
      <div class="playground-controls">
        <div class="control-grid">
          <div class="control-section">
            <h3>Layout</h3>
            <div class="control-group">
              <label>Orientation</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.orientation"
                (change)="updateConfig()"
                [options]="[
                  { label: 'Horizontal', value: 'horizontal' },
                  { label: 'Vertical', value: 'vertical' },
                ]"
              ></ui-dropdown>
            </div>
            <div class="control-group">
              <label>Alignment</label>
              <ui-dropdown
                [(ngModel)]="pgConfig.align"
                (change)="updateConfig()"
                [options]="[
                  { label: 'Left', value: 'left' },
                  { label: 'Right', value: 'right' },
                  { label: 'Alternate', value: 'alternate' },
                ]"
              ></ui-dropdown>
            </div>
          </div>

          <div class="control-section">
            <h3>Content</h3>
            <div class="checkbox-group">
              <app-checkbox
                id="opposite"
                [(ngModel)]="pgConfig.showOpposite"
                (change)="updateConfig()"
              />
              <label for="opposite">Show Opposite Side</label>
            </div>
            <div class="checkbox-group">
              <app-checkbox
                id="customMarker"
                [(ngModel)]="pgConfig.customMarker"
                (change)="updateConfig()"
              />
              <label for="customMarker">Custom Markers</label>
            </div>
          </div>
        </div>

        <div class="code-output">
          <pre>{{ generatedCode() }}</pre>
        </div>

        <div class="action-buttons">
          <ui-button (click)="copyCode()" label="Copy Code"></ui-button>
          <ui-button
            class="btn-secondary"
            variant="secondary"
            (click)="resetConfig()"
            label="Reset"
          ></ui-button>
        </div>
      </div>

      <div class="playground-preview">
        <div class="timeline-container">
          <ui-timeline
            [attr.orientation]="pgConfig.orientation"
            [attr.align]="pgConfig.align"
            [value]="valueJson"
          >
            <ng-template let-item>
              <div style="font-weight: 600;">{{ item.status }}</div>
              <div style="font-size: 0.85rem; color: #64748b;">{{ item.date }}</div>
              <div *ngIf="pgConfig.showOpposite" slot="opposite">{{ item.description }}</div>
              <div
                *ngIf="pgConfig.customMarker"
                slot="marker"
                [style.background]="item.color"
                style="width: 12px; height: 12px; border-radius: 50%;"
              ></div>
            </ng-template>
          </ui-timeline>
        </div>
      </div>
    </div>
  `,
  styleUrl: './timeline-playground.component.scss',
})
export class TimelinePlaygroundComponent {
  pgConfig = {
    orientation: 'vertical',
    align: 'left',
    showOpposite: true,
    customMarker: false,
  };

  events = [
    {
      status: 'Ordered',
      date: '15/10/2023 10:30',
      icon: 'shopping_cart',
      color: '#9C27B0',
      description: 'Transaction processed',
    },
    {
      status: 'Processing',
      date: '15/10/2023 14:00',
      icon: 'cog',
      color: '#673AB7',
      description: 'Item picked for shipment',
    },
    {
      status: 'Shipped',
      date: '15/10/2023 16:15',
      icon: 'local_shipping',
      color: '#FF9800',
      description: 'En route to destination',
    },
    {
      status: 'Delivered',
      date: '16/10/2023 10:00',
      icon: 'check_circle',
      color: '#607D8B',
      description: 'Package handed over',
    },
  ];

  valueJson = JSON.stringify(this.events);
  generatedCode = signal('');

  constructor() {
    this.updateConfig();
  }

  updateConfig() {
    let code = '<ui-timeline\n';
    code += `  orientation="${this.pgConfig.orientation}"\n`;
    code += `  align="${this.pgConfig.align}"\n`;
    code += `  [value]="events"\n`;
    code += '>\n';
    code += '  <ng-template let-item>\n';
    code += '    <div>{{ item.status }}</div>\n';
    if (this.pgConfig.showOpposite) code += '    <div slot="opposite">{{ item.date }}</div>\n';
    code += '  </ng-template>\n';
    code += '</ui-timeline>';

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      orientation: 'vertical',
      align: 'left',
      showOpposite: true,
      customMarker: false,
    };
    this.updateConfig();
  }
}
