import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OtpInputPlaygroundComponent } from './components/otp-input-playground/otp-input-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-otp-input-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OtpInputPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-otp-input-demo.component.html',
  styleUrl: './set-otp-input-demo.component.scss',
})
export class SetOtpInputDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Layouts', icon: '📐' },
    { id: 'variants', title: 'Variants & Styles', icon: '✨' },
    { id: 'features', title: 'Features', icon: '⚙️' },
    { id: 'advanced', title: 'Advanced', icon: '🚀' },
  ];

  // Signal-based code examples
  defaultCode = signal(
    `<app-otp-input
  length="6"
  [autofocus]="true"
  (complete)="onOtpComplete($event)"
></app-otp-input>`
  );

  fourDigitCode = signal(
    `<app-otp-input
  length="4"
  type="numeric"
  label="Enter PIN"
></app-otp-input>`
  );

  sixDigitCode = signal(
    `<app-otp-input
  length="6"
  type="numeric"
  label="Verification Code"
></app-otp-input>`
  );

  customLengthCode = signal(
    `<app-otp-input
  length="8"
  type="alphanumeric"
  label="Long Code"
></app-otp-input>`
  );

  defaultVariantCode = signal(
    `<app-otp-input
  variant="default"
  length="6"
  label="Default Style"
></app-otp-input>`
  );

  underlinedCode = signal(
    `<app-otp-input
  variant="underlined"
  length="6"
  label="Underlined"
></app-otp-input>`
  );

  flushedCode = signal(
    `<app-otp-input
  variant="flushed"
  length="6"
  label="Flushed Style"
></app-otp-input>`
  );

  separatedCode = signal(
    `<app-otp-input
  variant="separated"
  length="6"
  label="Separated"
  [spacing]="8"
></app-otp-input>`
  );

  successColorCode = signal(
    `<app-otp-input
  length="6"
  color="success"
  label="Success State"
  helper-text="Code accepted"
></app-otp-input>`
  );

  errorColorCode = signal(
    `<app-otp-input
  length="6"
  color="error"
  invalid="true"
  error-text="Invalid code"
></app-otp-input>`
  );

  warningColorCode = signal(
    `<app-otp-input
  length="6"
  color="warning"
  label="Warning State"
></app-otp-input>`
  );

  infoColorCode = signal(
    `<app-otp-input
  length="6"
  color="info"
  label="Info Message"
  helper-text="Check your email"
></app-otp-input>`
  );

  grouping3Code = signal(
    `<app-otp-input
  length="6"
  group-size="3"
  [show-group-divider]="true"
  label="Grouped 3-3"
></app-otp-input>`
  );

  grouping222Code = signal(
    `<app-otp-input
  length="6"
  group-divider="-"
  label="Grouped 2-2-2"
></app-otp-input>`
  );

  grouping44Code = signal(
    `<app-otp-input
  length="8"
  group-size="4"
  [show-group-divider]="true"
  label="Grouped 4-4"
></app-otp-input>`
  );

  smallCode = signal(
    `<app-otp-input
  size="small"
  length="4"
></app-otp-input>`
  );

  mediumCode = signal(
    `<app-otp-input
  size="medium"
  length="4"
></app-otp-input>`
  );

  largeCode = signal(
    `<app-otp-input
  size="large"
  length="4"
></app-otp-input>`
  );

  secureCode = signal(
    `<app-otp-input
  length="4"
  [secure]="true"
  label="Secure PIN"
></app-otp-input>`
  );

  readonlyCode = signal(
    `<app-otp-input
  length="6"
  [readonly]="true"
  value="123456"
></app-otp-input>`
  );

  disabledCode = signal(
    `<app-otp-input
  length="6"
  [disabled]="true"
></app-otp-input>`
  );

  maskedCode = signal(
    `<app-otp-input
  length="6"
  [mask]="true"
  mask-char="*"
></app-otp-input>`
  );

  validationCode = signal(
    `<app-otp-input
  length="6"
  [required]="true"
  [validate]="validateOtp"
  (validate)="onValidate($event)"
></app-otp-input>`
  );

  autoFocusCode = signal(
    `<app-otp-input
  length="6"
  [autofocus]="true"
  auto-submit="true"
  (complete)="onComplete($event)"
></app-otp-input>`
  );

  pasteableCode = signal(
    `<app-otp-input
  length="6"
  [allow-paste]="true"
  [paste-separator]="true"
></app-otp-input>`
  );

  numericOnlyCode = signal(
    `<app-otp-input
  length="6"
  type="numeric"
  placeholder="0"
></app-otp-input>`
  );

  alphanumericCode = signal(
    `<app-otp-input
  length="8"
  type="alphanumeric"
  placeholder="A"
></app-otp-input>`
  );

  playgroundCode = signal(
    `<app-otp-input
  length="6"
  [autofocus]="true"
  (complete)="onOtpComplete($event)"
></app-otp-input>`
  );

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

