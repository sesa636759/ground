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
    { id: 'basic', title: 'Basic Usage', icon: 'hash', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'grouping', title: 'Grouping & Layout', icon: 'grid-3x3', iconLibrary: 'lucide' },
    { id: 'validation', title: 'Feedback & States', icon: 'check-circle', iconLibrary: 'lucide' },
    { id: 'types', title: 'Input Types', icon: 'type', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes & Colors', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'advanced', title: 'Advanced States', icon: 'zap', iconLibrary: 'lucide' },
  ];

  basicCode = signal(`<ui-otp-input label="Verification Code" length="4"></ui-otp-input>
<ui-otp-input length="6" placeholder="0"></ui-otp-input>`);

  variantsCode = signal(`<ui-otp-input variant="default" label="Default"></ui-otp-input>
<ui-otp-input variant="underlined" label="Underlined"></ui-otp-input>
<ui-otp-input variant="flushed" label="Flushed"></ui-otp-input>
<ui-otp-input variant="separated" label="Separated"></ui-otp-input>`);

  groupingCode = signal(`<ui-otp-input length="6" group-size="3" label="Grouped (3-3)"></ui-otp-input>
<ui-otp-input length="8" group-size="4" label="Grouped (4-4)"></ui-otp-input>`);

  validationCode = signal(`<ui-otp-input validation-state="error" invalid error-text="Invalid code" label="Error State"></ui-otp-input>
<ui-otp-input color="success" helper-text="Check your phone" label="Success Theme"></ui-otp-input>`);

  typesCode = signal(`<ui-otp-input type="number" label="Numeric Only"></ui-otp-input>
<ui-otp-input type="alphanumeric" label="Alphanumeric"></ui-otp-input>
<ui-otp-input secure label="Secure (PIN)"></ui-otp-input>`);

  sizesCode = signal(`<ui-otp-input size="small" label="Small"></ui-otp-input>
<ui-otp-input size="large" label="Large"></ui-otp-input>
<ui-otp-input color="warning" label="Warning Color"></ui-otp-input>`);

  advancedCode = signal(`<ui-otp-input disabled value="1234" label="Disabled"></ui-otp-input>
<ui-otp-input readonly value="5678" label="Readonly"></ui-otp-input>
<ui-otp-input skeleton label="Skeleton"></ui-otp-input>`);

  onOtpChange(event: any) {
    console.log('OTP Changed:', event.detail);
  }

  onOtpComplete(event: any) {
    console.log('OTP Complete:', event.detail);
    alert(`Code entered: ${event.detail.value}`);
  }
}
