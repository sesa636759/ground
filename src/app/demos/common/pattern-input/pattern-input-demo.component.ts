import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmPatternInputPlaygroundComponent } from '../../../playground/common/pattern-input-playground/pattern-input-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-pattern-input-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmPatternInputPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pattern-input-demo.component.html',
  styleUrl: './pattern-input-demo.component.scss',
})
export class DmPatternInputDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Common Patterns', icon: 'binary', iconLibrary: 'lucide' },
    { id: 'identity', title: 'Contact & Identity', icon: 'user-square', iconLibrary: 'lucide' },
    { id: 'temporal', title: 'Date & Time', icon: 'clock', iconLibrary: 'lucide' },
    { id: 'tech', title: 'Tech & Network', icon: 'network', iconLibrary: 'lucide' },
    { id: 'business', title: 'Business & SKU', icon: 'shopping-bag', iconLibrary: 'lucide' },
    { id: 'finance', title: 'Finance & Banking', icon: 'landmark', iconLibrary: 'lucide' },
    {
      id: 'restrictions',
      title: 'Strict Restrictions',
      icon: 'shield-alert',
      iconLibrary: 'lucide',
    },
    { id: 'validation', title: 'Validation & States', icon: 'shield-check', iconLibrary: 'lucide' },
  ];

  basicCode =
    signal(`<dui-pattern-input pattern="(###) ###-####" label="Phone Number"></dui-pattern-input>
<dui-pattern-input pattern="####-####-####-####" label="Credit Card"></dui-pattern-input>
<dui-pattern-input pattern="##/##/####" placeholder="MM/DD/YYYY" label="Date"></dui-pattern-input>`);

  identityCode =
    signal(`<dui-pattern-input label="Canadian Postal Code" pattern="A#A #A#" input-type="alphanumeric" placeholder="K1A 0B1"></dui-pattern-input>
<dui-pattern-input label="Driver License" pattern="A-####-####-##" input-type="alphanumeric" placeholder="X-1234-5678-90"></dui-pattern-input>
<dui-pattern-input label="Passport ID" pattern="AAAAAAAAA" input-type="alphanumeric" placeholder="A12345678"></dui-pattern-input>`);

  temporalCode =
    signal(`<dui-pattern-input label="Time (24h)" pattern="##:##:##" placeholder="14:30:59"></dui-pattern-input>
<dui-pattern-input label="Month/Year" pattern="##/####" placeholder="12/2025"></dui-pattern-input>
<dui-pattern-input label="YYYY/MM/DD" pattern="####/##/##" placeholder="2024/12/31"></dui-pattern-input>`);

  techCode =
    signal(`<dui-pattern-input label="IPv4 Address" pattern="###.###.###.###" placeholder="192.168.001.001"></dui-pattern-input>
<dui-pattern-input label="MAC Address" pattern="AA:AA:AA:AA:AA:AA" placeholder="00:1A:2B:3C:4D:5E"></dui-pattern-input>
<dui-pattern-input label="Hex Color" pattern="#AAAAAA" allowed-chars="[0-9A-Fa-f]" input-type="custom" placeholder="#3B82F6"></dui-pattern-input>
<dui-pattern-input label="UUID / GUID" pattern="AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA" placeholder="550e8400-e29b-..."></dui-pattern-input>`);

  businessCode =
    signal(`<dui-pattern-input label="Product SKU" pattern="AAA-####-AA" input-type="alphanumeric" placeholder="PRD-2024-XL"></dui-pattern-input>
<dui-pattern-input label="Order ID" pattern="#-######-###" placeholder="1-453920-888"></dui-pattern-input>
<dui-pattern-input label="License Key" pattern="AAAA-AAAA-AAAA-AAAA" placeholder="ABCD-EFGH-1234-5678"></dui-pattern-input>`);

  financeCode =
    signal(`<dui-pattern-input label="Bank Routing (US)" pattern="####-####-#" placeholder="1234-5678-9"></dui-pattern-input>
<dui-pattern-input label="IBAN (Short)" pattern="AA## #### #### ####" placeholder="DE89 3704 ..."></dui-pattern-input>
<dui-pattern-input label="CVV / CVC" pattern="###" maxLength="3" placeholder="123"></dui-pattern-input>`);

  variantsCode =
    signal(`<dui-pattern-input size="sm" pattern="#####" label="Small (Zip)"></dui-pattern-input>
<dui-pattern-input size="md" pattern="#####" label="Medium (Zip)"></dui-pattern-input>
<dui-pattern-input size="lg" pattern="#####" label="Large (Zip)"></dui-pattern-input>`);

  validationCode = signal(`<dui-pattern-input 
  required 
  pattern="AAA-###" 
  label="Required Pattern"
  error-message="Format must be 3 letters followed by 3 numbers"
></dui-pattern-input>

<dui-pattern-input 
  disabled 
  value="ABC-123" 
  pattern="AAA-###" 
  label="Disabled State"
></dui-pattern-input>

<dui-pattern-input 
  validation-regex="^\\+1\\d{10}$" 
  auto-format="false"
  placeholder="+12345678901"
  label="Regex Validation (E.164)"
></dui-pattern-input>`);

  restrictionsCode =
    signal(`<dui-pattern-input input-type="numeric" label="Strictly Numeric"></dui-pattern-input>
<dui-pattern-input input-type="alpha" label="Strictly Alphabetic"></dui-pattern-input>
<dui-pattern-input input-type="custom" allowed-chars="[A-F0-9]" label="HEX Restricted"></dui-pattern-input>`);

  formattingCode =
    signal(`<dui-pattern-input mask-char="*" pattern="****-****-****-****" label="Custom Mask Char"></dui-pattern-input>
<dui-pattern-input [auto-format]="false" pattern="###.###.###" label="No Auto-Format"></dui-pattern-input>`);

  feedbackCode = signal(`<dui-pattern-input 
  show-counter 
  max-length="20" 
  label="With Counter"
  helper-text="Maximum 20 raw characters allowed"
></dui-pattern-input>

<dui-pattern-input 
  success-message="Looking good!" 
  pattern="######" 
  label="Success Indicator"
></dui-pattern-input>`);

  onValueChange(event: any) {
    console.log('Value changed:', event.detail);
  }
}
