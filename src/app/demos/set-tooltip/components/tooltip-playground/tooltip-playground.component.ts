import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tooltip-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tooltip-playground.component.html',
  styleUrl: './tooltip-playground.component.scss',
})
export class TooltipPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    content: 'Tooltip Content',
    position: 'top',
    trigger: 'hover',
    variant: 'dark',
    shape: 'rounded',
    animation: 'fade',
    arrow: true,
    showDelay: 0,
    hideDelay: 0,
    maxWidth: 250,
    interactive: false,
    followCursor: false,
    html: false,
    showGlow: false,
    customColor: '',
    textColor: '',
    transitionDuration: 200,
    targetText: 'Hover Me',
    targetIcon: 'fas fa-info-circle',
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-tooltip\n`;
    code += `  content="${this.pgConfig.content}"\n`;
    if (this.pgConfig.position !== 'top') code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.trigger !== 'hover') code += `  trigger="${this.pgConfig.trigger}"\n`;
    if (this.pgConfig.variant !== 'dark') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.shape !== 'rounded') code += `  shape="${this.pgConfig.shape}"\n`;
    if (this.pgConfig.animation !== 'fade') code += `  animation="${this.pgConfig.animation}"\n`;

    if (!this.pgConfig.arrow) code += `  [arrow]="false"\n`;
    if (this.pgConfig.showDelay > 0) code += `  [showDelay]="${this.pgConfig.showDelay}"\n`;
    if (this.pgConfig.hideDelay > 0) code += `  [hideDelay]="${this.pgConfig.hideDelay}"\n`;
    if (this.pgConfig.maxWidth !== 250) code += `  [maxWidth]="${this.pgConfig.maxWidth}"\n`;

    if (this.pgConfig.interactive) code += `  [interactive]="true"\n`;
    if (this.pgConfig.followCursor) code += `  [followCursor]="true"\n`;
    if (this.pgConfig.html) code += `  [html]="true"\n`;
    if (this.pgConfig.showGlow) code += `  [showGlow]="true"\n`;

    if (this.pgConfig.customColor) code += `  custom-color="${this.pgConfig.customColor}"\n`;
    if (this.pgConfig.textColor) code += `  text-color="${this.pgConfig.textColor}"\n`;
    if (this.pgConfig.transitionDuration !== 200)
      code += `  [transitionDuration]="${this.pgConfig.transitionDuration}"\n`;

    code += `>\n`;
    code += `  <ui-button slot="target" class="btn-target">\n`;
    code += `    <i class="${this.pgConfig.targetIcon}"></i> ${this.pgConfig.targetText}\n`;
    code += `  </ui-button>\n`;
    code += `</app-tooltip>`;

    this.generatedCode.set(code);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
