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
    { id: 'all-types', title: 'All Input Types', icon: 'list', iconLibrary: 'lucide' },
    { id: 'basic', title: 'Basic Types', icon: 'type', iconLibrary: 'lucide' },
    { id: 'passwords', title: 'Password Features', icon: 'lock', iconLibrary: 'lucide' },
    { id: 'numbers', title: 'Numbers & Steppers', icon: 'hash', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Input Sizes', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'color-variants', title: 'Color Variants', icon: 'droplets', iconLibrary: 'lucide' },
    { id: 'floating', title: 'Floating Labels', icon: 'arrow-up-circle', iconLibrary: 'lucide' },
    { id: 'decorators', title: 'Prefix & Suffix', icon: 'tags', iconLibrary: 'lucide' },
    {
      id: 'color-decorators',
      title: 'Chromatic Decorators',
      icon: 'paintbrush',
      iconLibrary: 'lucide',
    },
    {
      id: 'multiline',
      title: 'Multiline & Auto-resize',
      icon: 'align-left',
      iconLibrary: 'lucide',
    },
    { id: 'validation', title: 'Rich Feedback', icon: 'check-circle', iconLibrary: 'lucide' },
    { id: 'constraints', title: 'Length Constraints', icon: 'scissors', iconLibrary: 'lucide' },
    { id: 'masking', title: 'Input Masking', icon: 'shield-check', iconLibrary: 'lucide' },
    { id: 'range', title: 'Range Sliders', icon: 'sliders', iconLibrary: 'lucide' },
    { id: 'multimedia', title: 'Pickers & Sliders', icon: 'pipette', iconLibrary: 'lucide' },
    { id: 'files', title: 'File Uploads', icon: 'file-up', iconLibrary: 'lucide' },
    { id: 'otp-pin', title: 'OTP & PIN', icon: 'shield-check', iconLibrary: 'lucide' },
    { id: 'voice-status', title: 'Voice & Status', icon: 'mic', iconLibrary: 'lucide' },
    { id: 'master-tier', title: 'Master Tier', icon: 'sparkles', iconLibrary: 'lucide' },
    {
      id: 'interaction',
      title: 'Interaction Kits',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
    { id: 'suggestions', title: 'Autocomplete', icon: 'list-start', iconLibrary: 'lucide' },
    { id: 'input-pair', title: 'Input Pair', icon: 'columns-2', iconLibrary: 'lucide' },
    { id: 'states', title: 'Component States', icon: 'info', iconLibrary: 'lucide' },
  ];

  basicCode = `<ui-input label="Full Name" placeholder="John Doe"></ui-input>
<ui-input type="email" label="Email Address"></ui-input>
<ui-input type="search" placeholder="Search product..."></ui-input>
<ui-input type="tel" label="Telephone"></ui-input>`;

  allTypesCode = `<!-- Standard Text Inputs -->
<ui-input type="text" label="Text" placeholder="Basic text input"></ui-input>
<ui-input type="password" label="Password" show-password-toggle></ui-input>
<ui-input type="email" label="Email" placeholder="user@example.com"></ui-input>
<ui-input type="tel" label="Tel" placeholder="(555) 555-5555"></ui-input>
<ui-input type="url" label="URL" placeholder="https://example.com"></ui-input>
<ui-input type="search" label="Search" show-clear></ui-input>

<!-- Numbers & Range -->
<ui-input type="number" label="Number"></ui-input>
<ui-input type="number" label="Number + Steppers" show-steppers value="10"></ui-input>
<ui-input type="range" label="Range" min="0" max="100" value="45"></ui-input>

<!-- Date & Time -->
<ui-input type="date" label="Date"></ui-input>
<ui-input type="time" label="Time"></ui-input>
<ui-input type="datetime-local" label="DateTime Local"></ui-input>
<ui-input type="month" label="Month"></ui-input>
<ui-input type="week" label="Week"></ui-input>

<!-- Specialized -->
<ui-input type="color" label="Color Picker" value="#3b82f6"></ui-input>
<ui-input type="file" label="File Upload"></ui-input>
<ui-input type="otp" otp-length="6" label="OTP Code"></ui-input>
<ui-input type="pin" otp-length="4" label="PIN Code"></ui-input>`;

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

  colorVariantsCode = `<!-- Outlined per color -->
<ui-input color="primary" variant="outlined" label="Primary" prefix-icon="zap"></ui-input>
<ui-input color="success" variant="outlined" label="Success" prefix-icon="check-circle"></ui-input>
<ui-input color="danger" variant="outlined" label="Danger" prefix-icon="alert-circle"></ui-input>
<ui-input color="warning" variant="outlined" label="Warning" prefix-icon="alert-triangle"></ui-input>
<ui-input color="info" variant="outlined" label="Info" prefix-icon="info"></ui-input>
<ui-input color="secondary" variant="outlined" label="Secondary" prefix-icon="box"></ui-input>

<!-- Soft variant per color -->
<ui-input color="primary" variant="soft" label="Primary Soft" prefix-icon="zap"></ui-input>
<ui-input color="success" variant="soft" label="Success Soft" prefix-icon="check-circle"></ui-input>`;

  floatingCode = `<ui-input floating-label label="Quick Search" variant="outlined"></ui-input>
<ui-input floating-label label="Email" variant="filled" prefix-icon="mail"></ui-input>`;

  decoratorsCode = `<ui-input prefix-text="https://" label="Website"></ui-input>
<ui-input suffix-text=".com" label="Domain"></ui-input>
<ui-input prefix-icon="search" suffix-icon="mic" placeholder="Speak to search"></ui-input>
<ui-input badge="99+" label="Notifications" suffix-icon="bell"></ui-input>`;

  colorDecoratorsCode = `<!-- Prefix color blocks -->
<ui-input label="Secure Domain" prefix-text="https://" prefix-color="success" placeholder="example.com"></ui-input>
<ui-input label="Access Token" prefix-icon="shield-check" prefix-color="primary" placeholder="Enter token..."></ui-input>

<!-- Suffix color blocks -->
<ui-input label="Global Search" suffix-icon="search" suffix-color="primary" suffix-clickable placeholder="Search cloud..."></ui-input>
<ui-input label="System Clear" suffix-text="RESET" suffix-color="danger" suffix-clickable placeholder="Warning: Irreversible"></ui-input>

<!-- Utility blocks -->
<ui-input label="Subdomain" suffix-text=".dream.io" suffix-color="secondary" placeholder="myspace"></ui-input>
<ui-input label="Currency" prefix-text="USD" prefix-color="info" type="number" placeholder="0.00"></ui-input>`;

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

  rangeCode = `<!-- Default range slider -->
<ui-input type="range" label="Volume Control" min="0" max="100" value="65"></ui-input>

<!-- Soft variant with icon -->
<ui-input type="range" label="Brightness" variant="soft" min="0" max="100" value="40" prefix-icon="sun"></ui-input>

<!-- XL size -->
<ui-input type="range" label="Opacity" size="xl" min="0" max="1" step="0.01" value="0.85"></ui-input>

<!-- Disabled -->
<ui-input type="range" label="Locked Setting" disabled value="50"></ui-input>`;

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

  otpPinCode = `<!-- 6-digit OTP verification -->
<ui-input type="otp" otp-length="6" label="Verification Code" helper-text="Check your email for the 6-digit code"></ui-input>

<!-- 4-digit PIN -->
<ui-input type="pin" otp-length="4" label="Security PIN" helper-text="Enter your 4-digit PIN"></ui-input>`;

  voiceStatusCode = `<!-- Voice dictation (mic button) -->
<ui-input label="Voice Messenger" voice-enabled placeholder="Click the mic to speak..." status-indicator="online"></ui-input>

<!-- Status indicator states -->
<ui-input label="Online" status-indicator="online" placeholder="Available"></ui-input>
<ui-input label="Typing..." status-indicator="typing" placeholder="Someone is typing"></ui-input>
<ui-input label="Away" status-indicator="away" placeholder="Be right back"></ui-input>
<ui-input label="Offline" status-indicator="offline" placeholder="Currently unavailable"></ui-input>`;

  masterTierCode = `<!-- Gradient border focus animation -->
<ui-input label="Gradient Horizon" gradient-border variant="outlined" placeholder="Animated focus boundary"></ui-input>

<!-- Backdrop sheen glass effect -->
<ui-input label="Deep Sheen" backdrop-sheen variant="glass" placeholder="Interactive depth field"></ui-input>

<!-- Animated underline on focus -->
<ui-input label="Animated Line" animated-line variant="underlined" placeholder="Animated line on focus"></ui-input>

<!-- Character density progress ring -->
<ui-input label="Content Velocity" show-progress-circle max-length="50" value="Tracking character density..."></ui-input>

<!-- Dirty tracking (unsaved change dot) -->
<ui-input label="Dirty Tracking" dirty-tracking default-value="Original State" value="Modified state"></ui-input>

<!-- AI ghost text completion -->
<ui-input label="AI Smart Search" value="how to " suggested-value="how to build elite stencil components" prefix-icon="sparkles" variant="glass"></ui-input>`;

  inputPairCode = `<!-- Connected price range -->
<ui-input-pair type="currency" label-left="Minimum" label-right="Maximum" placeholder-left="0.00" placeholder-right="No limit" gap="0"></ui-input-pair>

<!-- Profile name pair with gap -->
<ui-input-pair label-left="First Name" label-right="Last Name" placeholder-left="John" placeholder-right="Doe" gap="12px"></ui-input-pair>

<!-- Number range pair (soft variant) -->
<ui-input-pair type="number" label-left="From" label-right="To" gap="0" variant="soft"></ui-input-pair>`;
}
