import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-timer-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppInputValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './timer-playground.component.html',
  styleUrl: './timer-playground.component.scss',
})
export class TimerPlaygroundComponent {
  pgConfig = {
    duration: 60,
    mode: 'countdown',
    format: 'mm:ss',
    autoStart: false,
  };

  modeOptions = [
    { label: 'Countdown', value: 'countdown' },
    { label: 'Stopwatch', value: 'stopwatch' },
  ];

  formatOptions = [
    { label: 'HH:mm:ss', value: 'HH:mm:ss' },
    { label: 'mm:ss', value: 'mm:ss' },
    { label: 'ss', value: 'ss' },
  ];

  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  timerStart(el: HTMLElement): void {
    (el as any).start?.();
  }

  timerPause(el: HTMLElement): void {
    (el as any).pause?.();
  }

  timerReset(el: HTMLElement): void {
    (el as any).reset?.();
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

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      duration: 60,
      mode: 'countdown',
      format: 'mm:ss',
      autoStart: false,
    };
    this.updateConfig();
  }
}
