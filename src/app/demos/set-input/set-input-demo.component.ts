import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputPlaygroundComponent } from './components/input-playground/input-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-input-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, InputPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-input-demo.component.html',
  styleUrl: './set-input-demo.component.scss',
})
export class SetInputDemoComponent implements OnInit {
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

  ngOnInit() {}

  toggleSkeleton() {
    this.skeletonState = !this.skeletonState;
  }
}
