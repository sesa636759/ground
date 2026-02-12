import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animate-on-scroll-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './animate-on-scroll-playground.component.html',
  styleUrl: './animate-on-scroll-playground.component.scss',
})
export class AnimateOnScrollPlaygroundComponent implements OnInit {
  pgConfig = {
    animation: 'fade-in',
    direction: 'up',
    duration: 600,
    delay: 0,
    offset: 100,
    easing: 'ease',
    repeat: false,
    once: true,
  };

  animationOptions = [
    { label: 'Fade In', value: 'fade-in' },
    { label: 'Fade Out', value: 'fade-out' },
    { label: 'Slide Up', value: 'slide-up' },
    { label: 'Slide Down', value: 'slide-down' },
    { label: 'Slide Left', value: 'slide-left' },
    { label: 'Slide Right', value: 'slide-right' },
    { label: 'Zoom In', value: 'zoom-in' },
    { label: 'Zoom Out', value: 'zoom-out' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Flip', value: 'flip' },
  ];

  directionOptions = [
    { label: 'Up', value: 'up' },
    { label: 'Down', value: 'down' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  easingOptions = [
    { label: 'Ease', value: 'ease' },
    { label: 'Ease In', value: 'ease-in' },
    { label: 'Ease Out', value: 'ease-out' },
    { label: 'Ease In Out', value: 'ease-in-out' },
    { label: 'Linear', value: 'linear' },
  ];

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-animate-on-scroll\n`;
    code += `  animation="${this.pgConfig.animation}"\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  duration="${this.pgConfig.duration}"\n`;
    code += `  delay="${this.pgConfig.delay}"\n`;
    code += `  offset="${this.pgConfig.offset}"\n`;
    code += `  easing="${this.pgConfig.easing}"\n`;

    if (this.pgConfig.repeat) code += `  repeat="true"\n`;
    if (!this.pgConfig.once) code += `  once="false"\n`;

    code += `>\n  <div>Your content here</div>\n</app-animate-on-scroll>`;

    this.generatedCode.set(code);
  }

  onAnimate(event: any) {
    this.logEvent(`Animation triggered: ${this.pgConfig.animation}`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
