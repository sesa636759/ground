import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { RadioPlaygroundComponent } from './components/radio-playground/radio-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-radio-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RadioPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-radio-demo.component.html',
  styleUrl: './set-radio-demo.component.scss',
})
export class SetRadioDemoComponent implements OnInit {
  variants = [
    { id: 'playground', name: 'Interactive Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'premium-variants', name: 'Premium Variants', icon: '✨', color: '#3b82f6' },
    { id: 'button-groups', name: 'Button Groups', icon: '🔲', color: '#10b981' },
    { id: 'loading-skeleton', name: 'Loading Skeleton', icon: '⏳', color: '#f59e0b' },
    { id: 'slotted-clearable', name: 'Slotted & Clearable', icon: '🧩', color: '#ef4444' },
    { id: 'color-variants', name: 'Color Variants', icon: '🎨', color: '#6366f1' },
    { id: 'layouts', name: 'Layouts', icon: '📐', color: '#ec4899' },
    { id: 'sizes', name: 'Sizes', icon: '📏', color: '#14b8a6' },
    { id: 'states', name: 'States', icon: '🔄', color: '#a855f7' },
    { id: 'form-example', name: 'Form Example', icon: '📋', color: '#06b6d4' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

 

  basicOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  sizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  deliveryOptions = [
    { value: 'standard', label: 'Standard', description: '5-7 business days, Free' },
    { value: 'express', label: 'Express', description: '2-3 business days, $10' },
    { value: 'overnight', label: 'Overnight', description: 'Next day, $25' },
  ];

  planOptions = [
    { value: 'basic', label: 'Basic', description: '$9/month - Essential features' },
    { value: 'pro', label: 'Pro', description: '$29/month - Advanced features' },
    { value: 'premium', label: 'Premium', description: '$99/month - All features' },
    { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing' },
  ];

  subscriptionOptions = [
    { value: 'monthly', label: 'Monthly', description: '$19.99 per month' },
    { value: 'yearly', label: 'Yearly', description: '$199.99 per year (save 17%)' },
    { value: 'lifetime', label: 'Lifetime', description: '$499.99 one-time payment' },
  ];

  paymentOptions = [
    { value: 'card', label: 'Credit Card', description: 'Visa, MasterCard' },
    { value: 'paypal', label: 'PayPal', description: 'Pay with your PayPal account' },
    { value: 'crypto', label: 'Crypto', description: 'Bitcoin, Ethereum' },
  ];

  // Form State
  formShipping = '';
  formPayment = '';
  formMessage = signal('');
  formMessageColor = signal('inherit');
  shippingInvalid = false;
  paymentInvalid = false;

  playgroundCode = `<app-radio
  name="options"
  [(ngModel)]="selected"
  [options]="options"
></app-radio>`;

  premiumVariantsCode = `<app-radio-group
  name="premium-cards"
  variant="card"
  layout="grid"
  columns="2"
  [options]="planOptions"
></app-radio-group>

<app-radio-group
  name="bordered"
  variant="bordered"
  [options]="options"
></app-radio-group>

<app-radio-group
  name="underlined"
  variant="underlined"
  color="success"
  [options]="options"
></app-radio-group>`;

  buttonGroupsCode = `<app-radio-group
  name="h-buttons"
  button-group="true"
  layout="horizontal"
  [options]="options"
></app-radio-group>

<app-radio-group
  name="v-buttons"
  button-group="true"
  layout="vertical"
  color="danger"
  [options]="options"
></app-radio-group>`;

  layoutsCode = `<app-radio-group
  layout="vertical"
  [options]="options"
></app-radio-group>

<app-radio-group
  layout="horizontal"
  [options]="options"
></app-radio-group>

<app-radio-group
  layout="grid"
  columns="2"
  [options]="options"
></app-radio-group>`;

  slottedRadioCode = `<app-radio-group name="custom-group">
  <app-radio value="1" label="Option 1"></app-radio>
  <app-radio value="2" label="Option 2"></app-radio>
  <app-radio value="3" label="Option 3"></app-radio>
</app-radio-group>`;

  statesCode = `<app-radio-group disabled [options]="options"></app-radio-group>

<app-radio-group readonly [options]="options"></app-radio-group>

<app-radio-group
  required
  invalid
  error-message="Selection required"
  [options]="options"
></app-radio-group>`;

  formExampleCode = `<app-radio-group
  [(ngModel)]="shipping"
  name="shipping"
  required
  helper-text="Select delivery speed"
  [options]="deliveryOptions"
></app-radio-group>

<app-radio-group
  [(ngModel)]="payment"
  name="payment"
  layout="grid"
  columns="2"
  [options]="paymentOptions"
></app-radio-group>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  onSubmit() {
    if (!this.formShipping || !this.formPayment) {
      this.formMessage.set('⚠️ Please select both shipping and payment methods');
      this.formMessageColor.set('#dc2626');
      this.shippingInvalid = !this.formShipping;
      this.paymentInvalid = !this.formPayment;
    } else {
      this.formMessage.set('✅ Order placed successfully!');
      this.formMessageColor.set('#16a34a');
      this.shippingInvalid = false;
      this.paymentInvalid = false;
    }
  }
}
