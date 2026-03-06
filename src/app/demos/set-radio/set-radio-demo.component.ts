import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioPlaygroundComponent } from './components/radio-playground/radio-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { AppRadioGroupValueAccessorDirective } from '../../directives/app-radio-group-value-accessor.directive';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-set-radio-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RadioPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    AppRadioGroupValueAccessorDirective,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-radio-demo.component.html',
  styleUrl: './set-radio-demo.component.scss',
})
export class SetRadioDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'premium-variants', title: 'Premium Variants', icon: '✨' },
    { id: 'button-groups', title: 'Button Groups', icon: '🔲' },
    { id: 'loading-skeleton', title: 'Loading Skeleton', icon: '⏳' },
    { id: 'color-variants', title: 'Color Variants', icon: '🎨' },
    { id: 'layouts', title: 'Layouts', icon: '📐' },
    { id: 'sizes', title: 'Sizes', icon: '📏' },
    { id: 'states', title: 'States', icon: '🔄' },
    { id: 'form-example', title: 'Form Example', icon: '📋' },
  ];

  basicOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  deliveryOptions = [
    { value: 'standard', label: 'Standard', description: '5-7 business days, Free' },
    { value: 'express', label: 'Express', description: '2-3 business days, $10' },
    { value: 'overnight', label: 'Overnight', description: 'Next day, $25' },
  ];

  planOptions = [
    { value: 'basic', label: 'Basic', description: '$9/month - Essential features' },
    { value: 'pro', label: 'Pro', description: '$29/month - Advanced features' },
  ];

  paymentOptions = [
    { value: 'card', label: 'Credit Card', description: 'Visa, MasterCard' },
    { value: 'paypal', label: 'PayPal', description: 'Pay with PayPal' },
  ];

  // Form State
  formShipping = '';
  formPayment = '';
  formMessage = '';
  formMessageColor = 'inherit';
  shippingInvalid = false;
  paymentInvalid = false;

  // Code snippets
  premiumVariantsCode = `<app-radio-group
  variant="card"
  layout="grid"
  columns="2"
  [options]="planOptions"
></app-radio-group>`;

  buttonGroupsCode = `<app-radio-group
  button-group="true"
  layout="horizontal"
  [options]="basicOptions"
></app-radio-group>`;

  layoutsCode = `<app-radio-group layout="vertical" [options]="basicOptions"></app-radio-group>
<app-radio-group layout="horizontal" [options]="basicOptions"></app-radio-group>`;

  loadingSkeletonCode = `<app-radio-group skeleton [options]="basicOptions"></app-radio-group>`;

  colorVariantsCode = `<app-radio-group color="primary" [options]="basicOptions"></app-radio-group>
<app-radio-group color="success" [options]="basicOptions"></app-radio-group>`;

  sizesCode = `<app-radio-group size="small" [options]="basicOptions"></app-radio-group>
<app-radio-group size="large" [options]="basicOptions"></app-radio-group>`;

  statesCode = `<app-radio-group disabled [options]="basicOptions"></app-radio-group>
<app-radio-group invalid error-message="Selection required" [options]="basicOptions"></app-radio-group>`;

  formExampleCode = `<app-radio-group
  [(ngModel)]="shipping"
  name="shipping"
  required
  [options]="deliveryOptions"
></app-radio-group>`;

  onSubmit() {
    if (!this.formShipping || !this.formPayment) {
      this.formMessage = '⚠️ Please select both shipping and payment methods';
      this.formMessageColor = '#dc2626';
      this.shippingInvalid = !this.formShipping;
      this.paymentInvalid = !this.formPayment;
    } else {
      this.formMessage = '✅ Order placed successfully!';
      this.formMessageColor = '#16a34a';
      this.shippingInvalid = false;
      this.paymentInvalid = false;
    }
  }
}
