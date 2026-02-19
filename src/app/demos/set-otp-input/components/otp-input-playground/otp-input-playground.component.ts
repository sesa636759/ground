import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { CodeBlockComponent } from '../../../../shared/components/code-block/code-block.component';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-otp-input-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    CodeBlockComponent,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './otp-input-playground.component.html',
  styleUrl: './otp-input-playground.component.scss',
})
export class OtpInputPlaygroundComponent implements OnInit {
  pgConfig = {
    length: 6,
    size: 'medium',
    color: 'primary',
    variant: 'default',
    groupSize: 0,
    secure: false,
    skeleton: false,
    invalid: false,
    label: 'Verification Code',
    helperText: 'We sent a code to your phone',
    errorText: 'Verification failed. Please try again.',
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-otp-input\n`;
    if (this.pgConfig.length !== 6) code += `  length="${this.pgConfig.length}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.color !== 'primary') code += `  color="${this.pgConfig.color}"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.groupSize > 0) code += `  group-size="${this.pgConfig.groupSize}"\n`;

    if (this.pgConfig.label) code += `  label="${this.pgConfig.label}"\n`;
    if (this.pgConfig.helperText) code += `  helper-text="${this.pgConfig.helperText}"\n`;

    if (this.pgConfig.secure) code += `  secure="true"\n`;
    if (this.pgConfig.skeleton) code += `  skeleton="true"\n`;
    if (this.pgConfig.invalid) {
      code += `  invalid="true"\n`;
      if (this.pgConfig.errorText) code += `  error-text="${this.pgConfig.errorText}"\n`;
    }

    code += `></app-otp-input>`;

    this.generatedCode.set(code);
  }

  onOtpChange(event: any) {
    this.logEvent(`Typing: ${event.detail.value} (Complete: ${event.detail.complete})`);
  }

  onOtpComplete(event: any) {
    this.logEvent(`Completed: ${event.detail.value}`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
