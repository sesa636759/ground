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
    { id: 'config', title: 'Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visuals', icon: 'palette', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['config', 'visuals'];

  modeOptions = [
    { label: 'Countdown', value: 'countdown' },
    { label: 'Stopwatch', value: 'stopwatch' },
  ];

  formatOptions = [
    { label: 'HH:mm:ss', value: 'HH:mm:ss' },
    { label: 'mm:ss', value: 'mm:ss' },
    { label: 'ss', value: 'ss' },
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
      format: 'mm:ss',
      autoStart: false,
    };
  }

  timerStart(el: HTMLElement): void {
    (el as any).start?.();
    this.logEvent('Timer Started');
  }

  timerPause(el: HTMLElement): void {
    (el as any).pause?.();
    this.logEvent('Timer Paused');
  }

  timerReset(el: HTMLElement): void {
    (el as any).reset?.();
    this.logEvent('Timer Reset');
  }

  updateConfig() {
    let code = '<ui-timer\n';
    code += `  [duration]="${this.pgConfig.duration}"\n`;
    code += `  mode="${this.pgConfig.mode}"\n`;
    code += `  format="${this.pgConfig.format}"\n`;
    if (this.pgConfig.autoStart) {
      code += '  [autoStart]="true"\n';
    }
    code += '></ui-timer>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  override resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
    this.eventLog.set([]);
  }
}



