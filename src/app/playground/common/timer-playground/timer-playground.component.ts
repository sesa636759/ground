import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'dm-timer-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timer-playground.component.html',
  styleUrl: './timer-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmTimerPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'settings', title: 'Core Settings', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Display & Visuals', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Behavior & Persist', icon: 'sliders', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['settings'];

  modeOptions = [
    { label: 'Countdown', value: 'countdown' },
    { label: 'Stopwatch', value: 'stopwatch' },
  ];

  formatOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Human', value: 'human' },
    { label: 'Simple', value: 'simple' },
  ];

  precisionOptions = [
    { label: 'Seconds', value: 'seconds' },
    { label: 'Milliseconds', value: 'milliseconds' },
  ];

  progressTypeOptions = [
    { label: 'Circular', value: 'circular' },
    { label: 'Linear', value: 'linear' },
  ];

  variantOptions = [
    { label: 'Full', value: 'full' },
    { label: 'Compact', value: 'compact' },
  ];

  flowOptions = [
    { label: 'Linear', value: 'linear' },
    { label: 'Non-Linear', value: 'non-linear' },
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      duration: 60,
      mode: 'countdown',
      format: 'default',
      autoStart: false,
      loop: false,
      precision: 'seconds',
      variant: 'full',
      progressType: 'circular',
      alertThreshold: 10,
      enableNotifications: false,
      enableSound: false,
      persist: '',
      flow: 'linear',
      steps: '',
      targetDate: '',
    };
  }

  updateConfig() {
    let code = `<ui-timer\n`;
    if (this.pgConfig.duration > 0) code += `  [duration]="${this.pgConfig.duration}"\n`;
    if (this.pgConfig.mode !== 'countdown') code += `  mode="${this.pgConfig.mode}"\n`;
    if (this.pgConfig.format !== 'default') code += `  format="${this.pgConfig.format}"\n`;
    if (this.pgConfig.autoStart) code += `  auto-start\n`;
    if (this.pgConfig.loop) code += `  loop\n`;
    if (this.pgConfig.precision !== 'seconds') code += `  precision="${this.pgConfig.precision}"\n`;
    if (this.pgConfig.variant !== 'full') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.progressType !== 'circular') code += `  progress-type="${this.pgConfig.progressType}"\n`;
    if (this.pgConfig.alertThreshold !== 10) code += `  [alert-threshold]="${this.pgConfig.alertThreshold}"\n`;
    if (this.pgConfig.enableNotifications) code += `  enable-notifications\n`;
    if (this.pgConfig.enableSound) code += `  enable-sound\n`;
    if (this.pgConfig.persist) code += `  persist="${this.pgConfig.persist}"\n`;
    if (this.pgConfig.flow !== 'linear') code += `  flow="${this.pgConfig.flow}"\n`;
    if (this.pgConfig.steps) code += `  steps='${this.pgConfig.steps}'\n`;
    if (this.pgConfig.targetDate) code += `  target-date="${this.pgConfig.targetDate}"\n`;

    code += `></ui-timer>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onStepsChange() {
    try {
      if (this.pgConfig.steps) JSON.parse(this.pgConfig.steps);
      this.updateConfig();
    } catch (e) {}
  }

  // Control Methods
  timerStart(el: any) { el.start?.(); this.logEvent('Started'); }
  timerPause(el: any) { el.pause?.(); this.logEvent('Paused'); }
  timerReset(el: any) { el.reset?.(); this.logEvent('Reset'); }
  timerNext(el: any) { el.next?.(); this.logEvent('Next Step'); }
}
