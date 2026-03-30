import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmOtpInputPlaygroundComponent } from '../../../playground/sets/otp-input-playground/otp-input-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'ds-otp-input-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmOtpInputPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './otp-input-demo.component.html',
  styleUrl: './otp-input-demo.component.scss',
})
export class DmOtpInputDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Digits', icon: 'hash', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizing Options', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'colors', title: 'Color Palette', icon: 'droplet', iconLibrary: 'lucide' },
    { id: 'grouping', title: 'Grouping Logic', icon: 'grid-3x3', iconLibrary: 'lucide' },
    { id: 'secure', title: 'Secure PIN Mode', icon: 'lock', iconLibrary: 'lucide' },
    { id: 'numeric', title: 'Numeric Type', icon: 'binary', iconLibrary: 'lucide' },
    { id: 'alphanumeric', title: 'Alphanumeric Type', icon: 'at-sign', iconLibrary: 'lucide' },
    { id: 'placeholders', title: 'Placeholders', icon: 'type', iconLibrary: 'lucide' },
    { id: 'invalid', title: 'Error State', icon: 'alert-circle', iconLibrary: 'lucide' },
    { id: 'feedback', title: 'Rich Feedback', icon: 'info', iconLibrary: 'lucide' },
    { id: 'behaviors', title: 'Auto Behaviors', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'disabled', title: 'Disabled State', icon: 'ban', iconLibrary: 'lucide' },
    { id: 'readonly', title: 'Read-only State', icon: 'eye', iconLibrary: 'lucide' },
    { id: 'skeleton', title: 'Skeleton Loader', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'prefilled', title: 'Initial Values', icon: 'key-round', iconLibrary: 'lucide' },
  ];

  basicCode = signal(`<ui-otp-input label="4-Digit Code" length="4"></ui-otp-input>
<ui-otp-input label="6-Digit Code" length="6"></ui-otp-input>
<ui-otp-input label="8-Digit Code" length="8"></ui-otp-input>`);

  variantsCode = signal(`<ui-otp-input variant="default" label="Default"></ui-otp-input>
<ui-otp-input variant="underlined" label="Underlined"></ui-otp-input>
<ui-otp-input variant="flushed" label="Flushed"></ui-otp-input>
<ui-otp-input variant="separated" label="Separated"></ui-otp-input>`);

  sizesCode = signal(`<ui-otp-input size="small" label="Small"></ui-otp-input>
<ui-otp-input size="medium" label="Medium"></ui-otp-input>
<ui-otp-input size="large" label="Large"></ui-otp-input>`);

  colorsCode = signal(`<ui-otp-input color="primary" label="Primary"></ui-otp-input>
<ui-otp-input color="secondary" label="Secondary"></ui-otp-input>
<ui-otp-input color="success" label="Success"></ui-otp-input>
<ui-otp-input color="danger" label="Danger"></ui-otp-input>
<ui-otp-input color="warning" label="Warning"></ui-otp-input>
<ui-otp-input color="info" label="Info"></ui-otp-input>`);

  groupingCode =
    signal(`<ui-otp-input length="6" group-size="3" label="Grouped (3-3)"></ui-otp-input>
<ui-otp-input length="8" group-size="2" label="Grouped (2-2-2-2)"></ui-otp-input>
<ui-otp-input length="4" group-size="2" label="Grouped (2-2)"></ui-otp-input>`);

  secureCode = signal(`<ui-otp-input secure label="Masked Entry" length="4"></ui-otp-input>`);

  numericCode = signal(`<ui-otp-input type="number" label="Strict Numeric"></ui-otp-input>`);

  alphanumericCode = signal(
    `<ui-otp-input type="alphanumeric" label="Alphanumeric"></ui-otp-input>`,
  );

  placeholderCode = signal(`<ui-otp-input placeholder="-" label="Dash"></ui-otp-input>
<ui-otp-input placeholder="•" label="Bullet"></ui-otp-input>
<ui-otp-input placeholder="*" label="Star"></ui-otp-input>`);

  invalidCode = signal(
    `<ui-otp-input invalid error-text="Verification failed" label="Error State"></ui-otp-input>`,
  );

  feedbackCode = signal(
    `<ui-otp-input helper-text="Check your registration email" label="Helper Text"></ui-otp-input>`,
  );

  behaviorsCode = signal(`<ui-otp-input auto-focus label="Auto Focused"></ui-otp-input>
<ui-otp-input auto-submit label="Auto Submit on Complete"></ui-otp-input>`);

  disabledCode = signal(`<ui-otp-input disabled value="1234" label="Disabled"></ui-otp-input>`);

  readonlyCode = signal(`<ui-otp-input readonly value="5678" label="Read-only"></ui-otp-input>`);

  skeletonCode = signal(`<ui-otp-input skeleton label="Loading..."></ui-otp-input>`);

  prefilledCode = signal(`<ui-otp-input value="123456" label="Pre-filled PIN"></ui-otp-input>`);

  onOtpChange(event: any) {
    console.log('OTP Changed:', event.detail);
  }

  onOtpComplete(event: any) {
    console.log('OTP Complete:', event.detail);
  }
}
