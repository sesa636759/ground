import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

@Component({
  selector: 'dm-dock-overlay-set-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-overlay-playground.component.html',

  styles: [
    `
      @use '../../../../styles/playground-base.scss';
    `,
  ],
})
export class DmDockOverlaySetPlaygroundComponent implements OnInit {
  pgConfig = {
    position: 'left',
    mode: 'docked',
    variant: 'default',
    resizable: true,
    draggable: false,
    collapsible: true,
  };
  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-dock-overlay position="${this.pgConfig.position}" mode="${this.pgConfig.mode}"`;
    if (this.pgConfig.resizable) code += ` resizable="true"`;
    if (this.pgConfig.draggable) code += ` draggable="true"`;
    if (this.pgConfig.collapsible) code += ` collapsible="true"`;
    code += `></app-dock-overlay>`;
    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
