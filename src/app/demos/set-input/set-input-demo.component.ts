import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { InputPlaygroundComponent } from './components/input-playground/input-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-input-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-input-demo.component.html',
  styleUrl: './set-input-demo.component.scss',
})
export class SetInputDemoComponent {
  variants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'basic-types', title: 'Basic Input Types', icon: '📋' },
    { id: 'variants', title: 'Input Variants', icon: '🎭' },
    { id: 'sizes', title: 'Input Sizes', icon: '📏' },
    { id: 'validation', title: 'Validation States', icon: '✅' },
    { id: 'prefix-suffix', title: 'Prefix & Suffix', icon: '🎯' },
    { id: 'advanced', title: 'Advanced Features', icon: '🚀' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
    { id: 'floating-labels', title: 'Floating Labels', icon: '🏷️' },
    { id: 'multiline', title: 'Multiline Input', icon: '📝' },
    { id: 'input-states', title: 'Input States', icon: '🔄' },
    { id: 'advanced-more', title: 'More Features', icon: '⚡' },
    { id: 'premium-more', title: 'Premium UX', icon: '✨' },
  ];

  get exampleVariants() {
    return this.variants.filter(v => v.id !== 'playground');
  }

  skeletonState = false;

  currencyFormatter = (val: string) => {
    if (!val) return '';
    return '$ ' + val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  currencyParser = (val: string) => {
    return val.replace(/\$\s?|(,*)/g, '');
  };

  playgroundCode = `<app-input
  placeholder="Enter text"
  type="text"
  [disabled]="false"
></app-input>`;

  basicInputsCode = `<app-input label="Username" placeholder="Enter your username" full-width></app-input>

<app-input
  type="email"
  label="Email Address"
  placeholder="user@example.com"
  full-width
></app-input>

<app-input
  type="password"
  label="Password"
  placeholder="Enter password"
  show-password-toggle
  full-width
></app-input>`;

  variantsCode = `<!-- Available variants: outlined, filled, underlined, soft, ghost -->
<app-input label="Outlined" variant="outlined" full-width></app-input>
<app-input label="Filled" variant="filled" full-width></app-input>
<app-input label="Underlined" variant="underlined" full-width></app-input>`;

  sizesCode = `<app-input label="Small" size="small" full-width></app-input>
<app-input label="Medium" size="medium" full-width></app-input>
<app-input label="Large" size="large" full-width></app-input>`;

  validationCode = `<app-input
  label="Error State"
  validation-state="error"
  error-text="Please enter a valid email address"
  full-width
></app-input>

<app-input
  label="Success State"
  validation-state="success"
  success-text="Username is available!"
  full-width
></app-input>

<app-input
  label="With Helper Text"
  helper-text="Must be 3-20 characters"
  full-width
></app-input>`;

  prefixSuffixCode = `<app-input
  label="Website"
  prefix-text="https://"
  full-width
></app-input>

<app-input
  label="Price"
  prefix-text="$"
  suffix-text="USD"
  type="number"
  full-width
></app-input>`;

  advancedCode = `<app-input
  type="number"
  label="Quantity"
  show-steppers
  min="0"
  max="100"
  full-width
></app-input>

<app-input
  multiline
  auto-resize
  label="Smart Textarea"
  placeholder="Type multiple lines..."
  full-width
></app-input>`;

  addonsCode = `<app-input placeholder="example" full-width>
  <span slot="addon-before" class="addon">https://</span>
  <span slot="addon-after" class="addon">.com</span>
</app-input>

<app-input placeholder="Search..." full-width>
  <ui-button slot="addon-after" class="btn-addon" label="Search"></ui-button>
</app-input>`;

  premiumCode = `<app-input
  variant="ghost"
  placeholder="Subtle input style"
  full-width
></app-input>

<app-input
  label="Loading State"
  placeholder="Content..."
  [skeleton]="skeletonState"
  full-width
></app-input>`;

  floatingLabelsCode = `<app-input
  variant="outlined"
  label="Full Name"
  floating-label
  full-width
></app-input>

<app-input
  variant="filled"
  label="Email Address"
  floating-label
  full-width
></app-input>`;

  multilineCode = `<app-input
  multiline
  label="Description"
  placeholder="Enter description..."
  rows="3"
  full-width
></app-input>

<app-input
  multiline
  auto-resize
  label="Comments"
  placeholder="Type to expand..."
  max-rows="5"
  full-width
></app-input>

<app-input
  multiline
  label="Bio"
  max-length="200"
  show-char-count
  rows="3"
  full-width
></app-input>`;

  inputStatesCode = `<app-input
  label="Disabled Input"
  value="Cannot edit this"
  disabled
  full-width
></app-input>

<app-input
  label="Read-only Input"
  value="View only, no edit"
  readonly
  full-width
></app-input>

<app-input
  label="Required Field*"
  placeholder="This field is required"
  required
  full-width
></app-input>`;

  advancedMoreCode = `<app-input
  label="Tweet"
  placeholder="What's happening?"
  max-length="280"
  show-char-count
  full-width
></app-input>

<app-input
  label="Search (500ms debounce)"
  placeholder="Type to search..."
  debounce="500"
  full-width
></app-input>

<app-input
  label="Hex Color"
  placeholder="#000000"
  pattern="^#[0-9A-Fa-f]{6}$"
  helper-text="Enter a valid hex color (e.g., #FF5733)"
  full-width
></app-input>`;

  premiumMoreCode = `<app-input
  label="Login"
  placeholder="Username"
  shake-on-error
  full-width
></app-input>

<app-input
  label="Card Number"
  placeholder="0000 0000 0000 0000"
  adaptive-type="credit-card"
  full-width
></app-input>

<app-input
  type="password"
  label="New Password"
  placeholder="Enter password"
  show-strength-meter
  show-caps-warning
  show-password-toggle
  full-width
></app-input>`;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleSkeleton() {
    this.skeletonState = !this.skeletonState;
  }
}
