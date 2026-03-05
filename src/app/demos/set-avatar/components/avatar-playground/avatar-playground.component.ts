import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-avatar-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-playground.component.html',
  styleUrl: './avatar-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AvatarPlaygroundComponent extends BasePlaygroundComponent {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'status', title: 'Status & Badges', icon: '⚡' },
    { id: 'visual', title: 'Visual Enhancements', icon: '✨' },
  ]);

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
    { label: 'Rounded', value: 'rounded' },
    { label: 'Squircle', value: 'squircle' },
  ];

  statusOptions = [
    { label: 'Online', value: 'online' },
    { label: 'Offline', value: 'offline' },
    { label: 'Away', value: 'away' },
    { label: 'Busy', value: 'busy' },
    { label: 'DND', value: 'dnd' },
    { label: 'Streaming', value: 'streaming' },
  ];

  fitOptions = [
    { label: 'Cover', value: 'cover' },
    { label: 'Contain', value: 'contain' },
    { label: 'Fill', value: 'fill' },
    { label: 'None', value: 'none' },
    { label: 'Scale Down', value: 'scale-down' },
  ];

  animationOptions = [
    { label: 'None', value: 'none' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Shake', value: 'shake' },
    { label: 'Spin', value: 'spin' },
    { label: 'Flip', value: 'flip' },
  ];

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      src: '',
      name: 'John Doe',
      size: '64px',
      shape: 'circle',
      bgColor: '',
      textColor: '',
      icon: '',
      tooltipText: '',
      showStatus: false,
      status: 'online',
      statusPosition: 'bottom-right',
      badge: '',
      badgeColor: '',
      badgePosition: 'top-right',
      verified: false,
      loading: false,
      editable: false,
      autoColor: false,
      gradient: false,
      gradientColors: '',
      animation: 'none',
      border: '',
      ringColor: '',
      fit: 'cover',
      clickable: false,
      lazyLoad: false,
      storyRing: false,
      storySeen: false,
      activeSpeaker: false,
      statusPulse: false,
      smartInitials: false,
      skeleton: false,
      shimmer: false,
      glassmorphism: false,
      effect3d: false,
      storySegments: '',
    };
  }

  updateConfig() {
    let code = `<app-avatar\n`;

    if (this.pgConfig.name) code += `  name="${this.pgConfig.name}"\n`;
    if (this.pgConfig.src) code += `  src="${this.pgConfig.src}"\n`;
    if (this.pgConfig.icon) code += `  icon="${this.pgConfig.icon}"\n`;

    if (this.pgConfig.size) code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.shape !== 'circle') code += `  shape="${this.pgConfig.shape}"\n`;

    if (this.pgConfig.bgColor) code += `  bg-color="${this.pgConfig.bgColor}"\n`;
    if (this.pgConfig.textColor) code += `  text-color="${this.pgConfig.textColor}"\n`;
    if (this.pgConfig.tooltipText) code += `  tooltip="${this.pgConfig.tooltipText}"\n`;

    if (this.pgConfig.showStatus) {
      code += `  status="${this.pgConfig.status}"\n`;
      if (this.pgConfig.statusPosition !== 'bottom-right')
        code += `  status-position="${this.pgConfig.statusPosition}"\n`;
    }

    if (this.pgConfig.badge) {
      code += `  badge="${this.pgConfig.badge}"\n`;
      if (this.pgConfig.badgeColor) code += `  badge-color="${this.pgConfig.badgeColor}"\n`;
      if (this.pgConfig.badgePosition !== 'top-right')
        code += `  badge-position="${this.pgConfig.badgePosition}"\n`;
    }

    if (this.pgConfig.verified) code += `  verified\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.editable) code += `  editable\n`;
    if (this.pgConfig.autoColor) code += `  auto-color\n`;

    if (this.pgConfig.gradient) {
      code += `  gradient="${this.pgConfig.gradient}"\n`;
      if (this.pgConfig.gradientColors)
        code += `  gradient-colors="${this.pgConfig.gradientColors}"\n`;
    }

    if (this.pgConfig.animation !== 'none') code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.border) code += `  border="${this.pgConfig.border}"\n`;
    if (this.pgConfig.ringColor) code += `  ring-color="${this.pgConfig.ringColor}"\n`;
    if (this.pgConfig.fit !== 'cover') code += `  fit="${this.pgConfig.fit}"\n`;
    if (this.pgConfig.clickable) code += `  clickable\n`;
    if (this.pgConfig.lazyLoad) code += `  lazy-load\n`;

    if (this.pgConfig.storyRing) code += `  story-ring\n`;
    if (this.pgConfig.storySeen) code += `  story-seen\n`;
    if (this.pgConfig.activeSpeaker) code += `  active-speaker\n`;
    if (this.pgConfig.statusPulse) code += `  status-pulse\n`;
    if (this.pgConfig.smartInitials) code += `  smart-initials\n`;

    if (this.pgConfig.skeleton) code += `  skeleton\n`;
    if (this.pgConfig.shimmer) code += `  shimmer\n`;
    if (this.pgConfig.glassmorphism) code += `  glassmorphism\n`;
    if (this.pgConfig.effect3d) code += `  effect-3d\n`;
    if (this.pgConfig.storySegments) code += `  story-segments="${this.pgConfig.storySegments}"\n`;

    code += `></app-avatar>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onUpload(_event: any) {
    this.logEvent('Upload triggered');
  }

  onAction(event: any) {
    this.logEvent(`Event: ${event.type}`);
  }
}
