import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resizable-panel-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './resizable-panel-playground.component.html',
  styleUrl: './resizable-panel-playground.component.scss',
})
export class ResizablePanelPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    direction: 'horizontal',
    theme: 'light',
    handleSize: 8,
    minPanelSize: 10,
    maxPanelSize: -1,
    snapThreshold: 30,
    animated: true,
    showHandleIcon: true,
    snapToEdge: true,
    saveState: false,
    collapsible1: true,
    collapsible2: false,
    collapsible3: true,
  };

  panelsData = [
    { id: 'panel-1', size: 30, minSize: 15, maxSize: 50, collapsible: true },
    { id: 'panel-2', size: 40, minSize: 20 },
    { id: 'panel-3', size: 30, minSize: 15, maxSize: 50, collapsible: true },
  ];

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    // Sync collapse flags with panel data
    this.panelsData[0].collapsible = this.pgConfig.collapsible1;
    this.panelsData[1].collapsible = this.pgConfig.collapsible2;
    this.panelsData[2].collapsible = this.pgConfig.collapsible3;

    let code = `<app-resizable-panel\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  theme="${this.pgConfig.theme}"\n`;
    if (this.pgConfig.handleSize !== 8) code += `  [handleSize]="${this.pgConfig.handleSize}"\n`;
    if (!this.pgConfig.showHandleIcon) code += `  [showHandleIcon]="false"\n`;
    if (this.pgConfig.snapToEdge) code += `  snap-to-edge="true"\n`;
    if (this.pgConfig.animated) code += `  animated="true"\n`;
    code += `  [panels]="panelsConfig"\n`;
    code += `>\n`;
    code += `  <div slot="panel-1">Panel 1 Content</div>\n`;
    code += `  <div slot="panel-2">Panel 2 Content</div>\n`;
    code += `  <div slot="panel-3">Panel 3 Content</div>\n`;
    code += `</app-resizable-panel>`;

    this.generatedCode.set(code);
    // Trigger CDR/Re-render if needed (In Angular, inputs usually handle this)
    // We recreate the array to trigger change detection for [panels]
    this.panelsData = [...this.panelsData];
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  onPanelResize(event: any) {
    const sizes = event.detail.panels.map((p: any) => `${p.size.toFixed(1)}%`).join(', ');
    this.logEvent(`Resizing: [${sizes}]`);
  }

  onPanelCollapse(event: any) {
    this.logEvent(
      `Panel ${event.detail.panel.id} ${event.detail.collapsed ? 'collapsed' : 'expanded'}`,
    );
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
