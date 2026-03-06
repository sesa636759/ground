import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from 'src/app/directives/ui-checkbox-value-accessor.directive';

@Component({
  selector: 'app-animate-on-scroll-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    ...PLAYGROUND_IMPORTS,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
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
    mirror: false,
    threshold: 0.1,
    blurAmount: 0,
    perspective: 1000,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    stagger: 0,
    scrub: false,
    textMode: 'none',
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
    { label: 'Flip In', value: 'flip-in' },
    { label: 'Rotate 3D', value: 'rotate-3d' },
    { label: 'Shake', value: 'shake' },
    { label: 'Scrub', value: 'scrub' },
    { label: 'Text Reveal', value: 'text-reveal' },
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
    { label: 'Elastic', value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
  ];

  textModeOptions = [
    { label: 'None', value: 'none' },
    { label: 'Character', value: 'char' },
    { label: 'Word', value: 'word' },
  ];

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-animate-on-scroll\n`;
    code += `  animation="${this.pgConfig.animation}"\n`;
    if (this.pgConfig.direction !== 'up') code += `  direction="${this.pgConfig.direction}"\n`;
    code += `  duration="${this.pgConfig.duration}"\n`;
    if (this.pgConfig.delay > 0) code += `  delay="${this.pgConfig.delay}"\n`;
    if (this.pgConfig.offset !== 100) code += `  offset="${this.pgConfig.offset}"\n`;
    code += `  easing="${this.pgConfig.easing}"\n`;
    if (this.pgConfig.threshold !== 0.1) code += `  threshold="${this.pgConfig.threshold}"\n`;

    if (this.pgConfig.blurAmount > 0) code += `  blur-amount="${this.pgConfig.blurAmount}"\n`;
    if (this.pgConfig.perspective !== 1000)
      code += `  perspective="${this.pgConfig.perspective}"\n`;
    if (this.pgConfig.rotateX !== 0) code += `  rotate-x="${this.pgConfig.rotateX}"\n`;
    if (this.pgConfig.rotateY !== 0) code += `  rotate-y="${this.pgConfig.rotateY}"\n`;
    if (this.pgConfig.rotateZ !== 0) code += `  rotate-z="${this.pgConfig.rotateZ}"\n`;
    if (this.pgConfig.scale !== 1) code += `  scale="${this.pgConfig.scale}"\n`;
    if (this.pgConfig.stagger > 0) code += `  stagger="${this.pgConfig.stagger}"\n`;

    if (this.pgConfig.repeat) code += `  repeat="true"\n`;
    if (!this.pgConfig.once) code += `  once="false"\n`;
    if (this.pgConfig.mirror) code += `  mirror="true"\n`;
    if (this.pgConfig.scrub) code += `  scrub="true"\n`;
    if (this.pgConfig.textMode !== 'none') code += `  text-mode="${this.pgConfig.textMode}"\n`;

    code += `>\n  <div>Your content here</div>\n</app-animate-on-scroll>`;

    this.generatedCode.set(code);
  }

  onAnimate() {
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
