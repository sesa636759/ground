import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { OtpInputPlaygroundComponent } from './components/otp-input-playground/otp-input-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-set-otp-input-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    OtpInputPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-otp-input-demo.component.html',
  styleUrl: './set-otp-input-demo.component.scss',
})
export class SetOtpInputDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', category: 'General' },
    // Basic Layouts (1)
    {
      id: 'length-variants',
      title: 'Length Variants',
      icon: '📐',
      category: 'Basic Layouts',
      tab: 'basic',
    },

    // Variants & Styles (1)
    {
      id: 'variants',
      title: 'Variants & Styles',
      icon: '✨',
      category: 'Variants & Styles',
      tab: 'variants',
    },

    // Features (8)
    {
      id: 'validation-states',
      title: 'Validation States',
      icon: '✅',
      category: 'Validation',
      tab: 'validation',
    },
    {
      id: 'grouping-variants',
      title: 'Groupings',
      icon: '⚙️',
      category: 'Features',
      tab: 'features',
    },
    { id: 'masking', title: 'Masked Input', icon: '⚙️', category: 'Features', tab: 'features' },

    // Advanced (12)
    { id: 'size-variants', title: 'Sizes', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'secure-pin', title: 'Secure PIN', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'readonly', title: 'Read-only State', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'disabled', title: 'Disabled State', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    {
      id: 'validation',
      title: 'With Validation',
      icon: '🚀',
      category: 'Advanced',
      tab: 'advanced',
    },
    { id: 'autofocus', title: 'Auto Focus', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    { id: 'pasteable', title: 'Paste Support', icon: '🚀', category: 'Advanced', tab: 'advanced' },
    {
      id: 'numeric-only',
      title: 'Numeric Only',
      icon: '🚀',
      category: 'Advanced',
      tab: 'advanced',
    },
    {
      id: 'alphanumeric',
      title: 'Alphanumeric',
      icon: '🚀',
      category: 'Advanced',
      tab: 'advanced',
    },
  ];

  // Signal-based code examples
  lengthVariantsCode = signal(
    `<!-- 4-Digit -->
<ui-otp-input
  length="4"
  type="numeric"
  label="Enter PIN"
></ui-otp-input>

<!-- 6-Digit -->
<ui-otp-input
  length="6"
  type="numeric"
  label="Verification Code"
></ui-otp-input>

<!-- 8-Digit Alphanumeric -->
<ui-otp-input
  length="8"
  type="alphanumeric"
  label="Long Code"
></ui-otp-input>`,
  );

  variantsCode = signal(
    `<!-- Default -->
<ui-otp-input
  variant="default"
  length="6"
  label="Default Style"
></ui-otp-input>

<!-- Underlined -->
<ui-otp-input
  variant="underlined"
  length="6"
  label="Underlined"
></ui-otp-input>

<!-- Flushed -->
<ui-otp-input
  variant="flushed"
  length="6"
  label="Flushed Style"
></ui-otp-input>

<!-- Separated -->
<ui-otp-input
  variant="separated"
  length="6"
  label="Separated"
  [spacing]="8"
></ui-otp-input>`,
  );

  validationStatesCode = signal(
    `<!-- Success -->
<ui-otp-input
  length="6"
  color="success"
  label="Success State"
  helper-text="Code accepted"
></ui-otp-input>

<!-- Error -->
<ui-otp-input
  length="6"
  color="error"
  invalid="true"
  error-text="Invalid code"
></ui-otp-input>

<!-- Warning -->
<ui-otp-input
  length="6"
  color="warning"
  label="Warning State"
></ui-otp-input>

<!-- Info -->
<ui-otp-input
  length="6"
  color="info"
  label="Info Message"
  helper-text="Check your email"
></ui-otp-input>`,
  );

  groupingVariantsCode = signal(
    `<!-- 3-3 -->
<ui-otp-input
  length="6"
  group-size="3"
  [show-group-divider]="true"
  label="Grouped 3-3"
></ui-otp-input>

<!-- 2-2-2 -->
<ui-otp-input
  length="6"
  group-divider="-"
  label="Grouped 2-2-2"
></ui-otp-input>

<!-- 4-4 -->
<ui-otp-input
  length="8"
  group-size="4"
  [show-group-divider]="true"
  label="Grouped 4-4"
></ui-otp-input>`,
  );

  sizeVariantsCode = signal(
    `<!-- Small -->
<ui-otp-input
  size="small"
  length="4"
></ui-otp-input>

<!-- Medium -->
<ui-otp-input
  size="medium"
  length="4"
></ui-otp-input>

<!-- Large -->
<ui-otp-input
  size="large"
  length="4"
></ui-otp-input>`,
  );

  secureCode = signal(
    `<ui-otp-input
  length="4"
  [secure]="true"
  label="Secure PIN"
></ui-otp-input>`,
  );

  readonlyCode = signal(
    `<ui-otp-input
  length="6"
  [readonly]="true"
  value="123456"
></ui-otp-input>`,
  );

  disabledCode = signal(
    `<ui-otp-input
  length="6"
  [disabled]="true"
></ui-otp-input>`,
  );

  maskedCode = signal(
    `<ui-otp-input
  length="6"
  [mask]="true"
  mask-char="*"
></ui-otp-input>`,
  );

  validationCode = signal(
    `<ui-otp-input
  length="6"
  [required]="true"
  [validate]="validateOtp"
  (validate)="onValidate($event)"
></ui-otp-input>`,
  );

  autoFocusCode = signal(
    `<ui-otp-input
  length="6"
  [autofocus]="true"
  auto-submit="true"
  (complete)="onComplete($event)"
></ui-otp-input>`,
  );

  pasteableCode = signal(
    `<ui-otp-input
  length="6"
  [allow-paste]="true"
  [paste-separator]="true"
></ui-otp-input>`,
  );

  numericOnlyCode = signal(
    `<ui-otp-input
  length="6"
  type="numeric"
  placeholder="0"
></ui-otp-input>`,
  );

  alphanumericCode = signal(
    `<ui-otp-input
  length="8"
  type="alphanumeric"
  placeholder="A"
></ui-otp-input>`,
  );

  playgroundCode = signal(
    `<ui-otp-input
  length="6"
  [autofocus]="true"
  (complete)="onOtpComplete($event)"
></ui-otp-input>`,
  );
}
