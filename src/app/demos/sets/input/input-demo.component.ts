import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmInputPlaygroundComponent } from '../../../playground/sets/input-playground/input-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'ds-input-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmInputPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './input-demo.component.html',
  styleUrl: './input-demo.component.scss',
})
export class DmInputDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Types', icon: 'type', iconLibrary: 'lucide' },
    { id: 'passwords', title: 'Password Features', icon: 'lock', iconLibrary: 'lucide' },
    { id: 'numbers', title: 'Numbers & Steppers', icon: 'hash', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Input Sizes', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'floating', title: 'Floating Labels', icon: 'arrow-up-circle', iconLibrary: 'lucide' },
    { id: 'decorators', title: 'Prefix & Suffix', icon: 'tags', iconLibrary: 'lucide' },
    {
      id: 'multiline',
      title: 'Multiline & Auto-resize',
      icon: 'align-left',
      iconLibrary: 'lucide',
    },
    { id: 'validation', title: 'Rich Feedback', icon: 'check-circle', iconLibrary: 'lucide' },
    { id: 'constraints', title: 'Length Constraints', icon: 'scissors', iconLibrary: 'lucide' },
    { id: 'masking', title: 'Input Masking', icon: 'shield-check', iconLibrary: 'lucide' },
    { id: 'multimedia', title: 'Pickers & Sliders', icon: 'pipette', iconLibrary: 'lucide' },
    { id: 'files', title: 'File Uploads', icon: 'file-up', iconLibrary: 'lucide' },
    {
      id: 'interaction',
      title: 'Interaction Kits',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
    { id: 'suggestions', title: 'Autocomplete', icon: 'list-start', iconLibrary: 'lucide' },
    { id: 'states', title: 'Component States', icon: 'info', iconLibrary: 'lucide' },
  ];

  basicCode = `<dui-input label="Full Name" placeholder="John Doe"></dui-input>
<dui-input type="email" label="Email Address"></dui-input>
<dui-input type="search" placeholder="Search product..."></dui-input>
<dui-input type="tel" label="Telephone"></dui-input>`;

  passwordsCode = `<!-- Password with toggle and strength meter -->
<dui-input type="password" label="Password" show-password-toggle></dui-input>

<!-- Password strength is calculated automatically based on common rules -->`;

  numbersCode = `<!-- Continuous number input with steppers -->
<dui-input type="number" label="Quantity" show-steppers value="10"></dui-input>

<!-- Number with min/max -->
<dui-input type="number" label="Score" min="0" max="100"></dui-input>`;

  variantsCode = `<dui-input variant="outlined" label="Outlined (Standard)"></dui-input>
<dui-input variant="filled" label="Filled (Soft fill)"></dui-input>
<dui-input variant="soft" label="Soft (Secondary)"></dui-input>
<dui-input variant="underlined" label="Underlined (Sleek)"></dui-input>
<dui-input variant="ghost" label="Ghost (Minimalist)"></dui-input>`;

  sizesCode = `<dui-input size="small" label="Compact"></dui-input>
<dui-input size="medium" label="Standard"></dui-input>
<dui-input size="large" label="Prominent"></dui-input>`;

  floatingCode = `<dui-input floating-label label="Quick Search" variant="outlined"></dui-input>
<dui-input floating-label label="Email" variant="filled" prefix-icon="mail"></dui-input>`;

  decoratorsCode = `<dui-input prefix-text="https://" label="Website"></dui-input>
<dui-input suffix-text=".com" label="Domain"></dui-input>
<dui-input prefix-icon="search" suffix-icon="mic" placeholder="Speak to search"></dui-input>
<dui-input badge="99+" label="Notifications" suffix-icon="bell"></dui-input>`;

  multilineCode = `<dui-input multiline rows="3" label="Fixed Area"></dui-input>
<dui-input multiline auto-resize label="Auto-expanding Area"></dui-input>`;

  validationCode = `<dui-input validation-state="error" error-text="Username already taken" label="Username"></dui-input>
<dui-input validation-state="success" success-text="Strong password" type="password" label="Password"></dui-input>
<dui-input validation-state="warning" warning-text="Weak connection" label="Sync Status"></dui-input>
<dui-input validation-state="info" info-text="Optional field" label="Comment"></dui-input>`;

  constraintsCode = `<dui-input max-length="20" show-counter label="Character Limit"></dui-input>
<dui-input min-length-indicator="10" label="Minimum Required"></dui-input>`;

  maskingCode = `<dui-input mask="phone" label="Phone" placeholder="(000) 000-0000"></dui-input>
<dui-input mask="credit-card" label="Credit Card" prefix-icon="credit-card"></dui-input>
<dui-input mask="currency" label="Salary Deposit" value="5000"></dui-input>`;

  multimediaCode = `<dui-input type="color" value="#4f46e5" label="Primary Color"></dui-input>
<dui-input type="range" min="0" max="100" value="75" label="System Volume"></dui-input>
<dui-input type="date" label="Release Date"></dui-input>`;

  filesCode = `<dui-input type="file" label="Standard Upload"></dui-input>
<dui-input type="file" multiple label="Batch Gallery" accept="image/*"></dui-input>
<dui-input type="file" accept=".pdf,.doc" label="Resume Picker"></dui-input>`;

  interactionCode = `<dui-input show-clear placeholder="Type to clear" label="Clearable"></dui-input>
<dui-input show-copy value="TOKEN_XYZ" label="Token (Copy-able)"></dui-input>
<dui-input loading label="Processing..."></dui-input>
<dui-input skeleton label="Loading Skeleton"></dui-input>`;

  suggestionsCode = `<dui-input [suggestions]="['Angular', 'React', 'Vue', 'Svelte']" placeholder="Pick framework..."></dui-input>`;

  statesCode = `<dui-input disabled value="Not editable" label="Disabled"></dui-input>
<dui-input readonly value="View only data" label="Readonly"></dui-input>
<dui-input rtl value="امتحان نص مكتوب للعرب" label="RTL Support"></dui-input>`;
}
