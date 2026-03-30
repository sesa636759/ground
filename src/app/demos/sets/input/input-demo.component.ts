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

  basicCode = `<ui-input label="Full Name" placeholder="John Doe"></ui-input>
<ui-input type="email" label="Email Address"></ui-input>
<ui-input type="search" placeholder="Search product..."></ui-input>
<ui-input type="tel" label="Telephone"></ui-input>`;

  passwordsCode = `<!-- Password with toggle and strength meter -->
<ui-input type="password" label="Password" show-password-toggle></ui-input>

<!-- Password strength is calculated automatically based on common rules -->`;

  numbersCode = `<!-- Continuous number input with steppers -->
<ui-input type="number" label="Quantity" show-steppers value="10"></ui-input>

<!-- Number with min/max -->
<ui-input type="number" label="Score" min="0" max="100"></ui-input>`;

  variantsCode = `<ui-input variant="outlined" label="Outlined (Standard)"></ui-input>
<ui-input variant="filled" label="Filled (Soft fill)"></ui-input>
<ui-input variant="soft" label="Soft (Secondary)"></ui-input>
<ui-input variant="underlined" label="Underlined (Sleek)"></ui-input>
<ui-input variant="ghost" label="Ghost (Minimalist)"></ui-input>`;

  sizesCode = `<ui-input size="small" label="Compact"></ui-input>
<ui-input size="medium" label="Standard"></ui-input>
<ui-input size="large" label="Prominent"></ui-input>`;

  floatingCode = `<ui-input floating-label label="Quick Search" variant="outlined"></ui-input>
<ui-input floating-label label="Email" variant="filled" prefix-icon="mail"></ui-input>`;

  decoratorsCode = `<ui-input prefix-text="https://" label="Website"></ui-input>
<ui-input suffix-text=".com" label="Domain"></ui-input>
<ui-input prefix-icon="search" suffix-icon="mic" placeholder="Speak to search"></ui-input>
<ui-input badge="99+" label="Notifications" suffix-icon="bell"></ui-input>`;

  multilineCode = `<ui-input multiline rows="3" label="Fixed Area"></ui-input>
<ui-input multiline auto-resize label="Auto-expanding Area"></ui-input>`;

  validationCode = `<ui-input validation-state="error" error-text="Username already taken" label="Username"></ui-input>
<ui-input validation-state="success" success-text="Strong password" type="password" label="Password"></ui-input>
<ui-input validation-state="warning" warning-text="Weak connection" label="Sync Status"></ui-input>
<ui-input validation-state="info" info-text="Optional field" label="Comment"></ui-input>`;

  constraintsCode = `<ui-input max-length="20" show-counter label="Character Limit"></ui-input>
<ui-input min-length-indicator="10" label="Minimum Required"></ui-input>`;

  maskingCode = `<ui-input mask="phone" label="Phone" placeholder="(000) 000-0000"></ui-input>
<ui-input mask="credit-card" label="Credit Card" prefix-icon="credit-card"></ui-input>
<ui-input mask="currency" label="Salary Deposit" value="5000"></ui-input>`;

  multimediaCode = `<ui-input type="color" value="#4f46e5" label="Primary Color"></ui-input>
<ui-input type="range" min="0" max="100" value="75" label="System Volume"></ui-input>
<ui-input type="date" label="Release Date"></ui-input>`;

  filesCode = `<ui-input type="file" label="Standard Upload"></ui-input>
<ui-input type="file" multiple label="Batch Gallery" accept="image/*"></ui-input>
<ui-input type="file" accept=".pdf,.doc" label="Resume Picker"></ui-input>`;

  interactionCode = `<ui-input show-clear placeholder="Type to clear" label="Clearable"></ui-input>
<ui-input show-copy value="TOKEN_XYZ" label="Token (Copy-able)"></ui-input>
<ui-input loading label="Processing..."></ui-input>
<ui-input skeleton label="Loading Skeleton"></ui-input>`;

  suggestionsCode = `<ui-input [suggestions]="['Angular', 'React', 'Vue', 'Svelte']" placeholder="Pick framework..."></ui-input>`;

  statesCode = `<ui-input disabled value="Not editable" label="Disabled"></ui-input>
<ui-input readonly value="View only data" label="Readonly"></ui-input>
<ui-input rtl value="امتحان نص مكتوب للعرب" label="RTL Support"></ui-input>`;
}
