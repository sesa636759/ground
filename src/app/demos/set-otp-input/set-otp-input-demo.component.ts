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
    // Basic Layouts (4)
    { id: 'default', title: 'Default OTP', icon: '📐', category: 'Basic Layouts', tab: 'basic' },
    { id: 'four-digit', title: '4-Digit PIN', icon: '📐', category: 'Basic Layouts', tab: 'basic' },
    { id: 'six-digit', title: '6-Digit Code', icon: '📐', category: 'Basic Layouts', tab: 'basic' },
    { id: 'custom-length', title: '8-Digit Code', icon: '📐', category: 'Basic Layouts', tab: 'basic' },

    // Variants & Styles (4)
    { id: 'default-variant', title: 'Default Style', icon: '✨', category: 'Variants & Styles', tab: 'variants' },
    { id: 'underlined', title: 'Underlined', icon: '✨', category: 'Variants & Styles', tab: 'variants' },
    { id: 'flushed', title: 'Flushed', icon: '✨', category: 'Variants & Styles', tab: 'variants' },
    { id: 'separated', title: 'Separated', icon: '✨', category: 'Variants & Styles', tab: 'variants' },

    // Features (8)
    { id: 'success-color', title: 'Success State', icon: '⚙️', category: 'Features', tab: 'features' },
    { id: 'error-color', title: 'Error State', icon: '⚙️', category: 'Features', tab: 'features' },
    { id: 'warning-color', title: 'Warning State', icon: '⚙️', category: 'Features', tab: 'features' },
    { id: 'info-color', title: 'Info State', icon: '⚙️', category: 'Features', tab: 'features' },
    { id: 'grouping-3', title: 'Grouped 3-3', icon: '⚙️', category: 'Features', tab: 'features' },
    { id: 'grouping-222', title: 'Grouped 2-2-2', icon: '⚙️', category: 'Features', tab: 'features' },
    { id: 'grouping-44', title: 'Grouped 4-4', icon: '⚙️', category: 'Features', tab: 'features' },
    { id: 'masking', title: 'Masked Input', icon: '⚙️', category: 'Features', tab: 'features' },

    // Advanced (12)
    { id: 'small-size', title: 'Small Size', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'medium-size', title: 'Medium Size', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'large-size', title: 'Large Size', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'secure-pin', title: 'Secure PIN', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'readonly', title: 'Read-only State', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'disabled', title: 'Disabled State', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'validation', title: 'With Validation', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'autofocus', title: 'Auto Focus', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'pasteable', title: 'Paste Support', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'numeric-only', title: 'Numeric Only', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'alphanumeric', title: 'Alphanumeric', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'playground', title: 'Playground', icon: '🚀', category: 'Advanced', tab: 'advanced' },
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

