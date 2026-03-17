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

  basicCode = signal(`<dui-otp-input label="4-Digit Code" length="4"></dui-otp-input>
<dui-otp-input label="6-Digit Code" length="6"></dui-otp-input>
<dui-otp-input label="8-Digit Code" length="8"></dui-otp-input>`);

  variantsCode = signal(`<dui-otp-input variant="default" label="Default"></dui-otp-input>
<dui-otp-input variant="underlined" label="Underlined"></dui-otp-input>
<dui-otp-input variant="flushed" label="Flushed"></dui-otp-input>
<dui-otp-input variant="separated" label="Separated"></dui-otp-input>`);

  sizesCode = signal(`<dui-otp-input size="small" label="Small"></dui-otp-input>
<dui-otp-input size="medium" label="Medium"></dui-otp-input>
<dui-otp-input size="large" label="Large"></dui-otp-input>`);

  colorsCode = signal(`<dui-otp-input color="primary" label="Primary"></dui-otp-input>
<dui-otp-input color="secondary" label="Secondary"></dui-otp-input>
<dui-otp-input color="success" label="Success"></dui-otp-input>
<dui-otp-input color="danger" label="Danger"></dui-otp-input>
<dui-otp-input color="warning" label="Warning"></dui-otp-input>
<dui-otp-input color="info" label="Info"></dui-otp-input>`);

  groupingCode =
    signal(`<dui-otp-input length="6" group-size="3" label="Grouped (3-3)"></dui-otp-input>
<dui-otp-input length="8" group-size="2" label="Grouped (2-2-2-2)"></dui-otp-input>
<dui-otp-input length="4" group-size="2" label="Grouped (2-2)"></dui-otp-input>`);

  secureCode = signal(`<dui-otp-input secure label="Masked Entry" length="4"></dui-otp-input>`);

  numericCode = signal(`<dui-otp-input type="number" label="Strict Numeric"></dui-otp-input>`);

  alphanumericCode = signal(
    `<dui-otp-input type="alphanumeric" label="Alphanumeric"></dui-otp-input>`,
  );

  placeholderCode = signal(`<dui-otp-input placeholder="-" label="Dash"></dui-otp-input>
<dui-otp-input placeholder="•" label="Bullet"></dui-otp-input>
<dui-otp-input placeholder="*" label="Star"></dui-otp-input>`);

  invalidCode = signal(
    `<dui-otp-input invalid error-text="Verification failed" label="Error State"></dui-otp-input>`,
  );

  feedbackCode = signal(
    `<dui-otp-input helper-text="Check your registration email" label="Helper Text"></dui-otp-input>`,
  );

  behaviorsCode = signal(`<dui-otp-input auto-focus label="Auto Focused"></dui-otp-input>
<dui-otp-input auto-submit label="Auto Submit on Complete"></dui-otp-input>`);

  disabledCode = signal(`<dui-otp-input disabled value="1234" label="Disabled"></dui-otp-input>`);

  readonlyCode = signal(`<dui-otp-input readonly value="5678" label="Read-only"></dui-otp-input>`);

  skeletonCode = signal(`<dui-otp-input skeleton label="Loading..."></dui-otp-input>`);

  prefilledCode = signal(`<dui-otp-input value="123456" label="Pre-filled PIN"></dui-otp-input>`);

  onOtpChange(event: any) {
    console.log('OTP Changed:', event.detail);
  }

  onOtpComplete(event: any) {
    console.log('OTP Complete:', event.detail);
  }
}
