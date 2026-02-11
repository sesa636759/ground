import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avatar-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-playground.component.html',
  styleUrl: './avatar-playground.component.scss',
})
export class AvatarPlaygroundComponent implements OnInit {
  pgConfig = {
    src: '',
    name: 'User Name',
    size: 'medium', // Default mapped to 'm'
    shape: 'circle',
    bgColor: '',
    textColor: '',
    icon: '',
    tooltipText: '',
    showStatus: false,
    status: 'online',
    statusPosition: 'bottom-right',
    verified: false,
    loading: false,
    editable: false,
    autoColor: false,
    gradient: false,
    animation: 'none',
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-avatar\n`;

    if (this.pgConfig.name) code += `  name="${this.pgConfig.name}"\n`;
    if (this.pgConfig.src) code += `  src="${this.pgConfig.src}"\n`;

    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.shape !== 'circle') code += `  shape="${this.pgConfig.shape}"\n`;

    if (this.pgConfig.bgColor) code += `  bg-color="${this.pgConfig.bgColor}"\n`;
    if (this.pgConfig.textColor) code += `  color="${this.pgConfig.textColor}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;
    if (this.pgConfig.tooltipText) code += `  tooltip-text="${this.pgConfig.tooltipText}"\n`;

    if (this.pgConfig.showStatus) {
      code += `  show-status="true"\n`;
      code += `  status="${this.pgConfig.status}"\n`;
      if (this.pgConfig.statusPosition !== 'bottom-right')
        code += `  status-position="${this.pgConfig.statusPosition}"\n`;
    }

    if (this.pgConfig.verified) code += `  verified="true"\n`;
    if (this.pgConfig.loading) code += `  loading="true"\n`;
    if (this.pgConfig.editable) code += `  editable="true"\n`;
    if (this.pgConfig.autoColor) code += `  auto-color="true"\n`;
    if (this.pgConfig.gradient) code += `  gradient="true"\n`;
    if (this.pgConfig.animation !== 'none') code += `  animation="${this.pgConfig.animation}"\n`;

    code += `></app-avatar>`;

    this.generatedCode.set(code);
  }

  onUpload(event: any) {
    this.logEvent('Upload triggered');
  }

  onAction(event: any) {
    // Generic catch-all if other events exist
    this.logEvent(`Event: ${event.type}`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
