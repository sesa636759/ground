import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmRadioSetPlaygroundComponent } from '../../../playground/sets/radio-playground/radio-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { RadioGroupValueAccessorDirective } from '../../../directives/radio-group-value-accessor.directive';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-radio-set-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmRadioSetPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    RadioGroupValueAccessorDirective,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-demo.component.html',
  styleUrl: './radio-demo.component.scss',
})
export class DmRadioDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '??' },
    { id: 'premium-variants', title: 'Premium Variants', icon: '?' },
    { id: 'button-groups', title: 'Button Groups', icon: '??' },
    { id: 'loading-skeleton', title: 'Loading Skeleton', icon: '?' },
    { id: 'color-variants', title: 'Color Variants', icon: '??' },
    { id: 'layouts', title: 'Layouts', icon: '??' },
    { id: 'sizes', title: 'Sizes', icon: '??' },
    { id: 'states', title: 'States', icon: '??' },
    { id: 'slotted-clearable', title: 'Slotted & Clearable', icon: '??' },
    { id: 'form-example', title: 'Form Example', icon: '??' },
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

  clearableOptions = [
    { value: 'active', label: 'Active Only' },
    { value: 'archived', label: 'Archived Only' },
  ];

  // Form State
  formShipping = '';
  formPayment = '';
  formMessage = '';
  formMessageColor = 'inherit';
  shippingInvalid = false;
  paymentInvalid = false;

  // Code snippets
  premiumVariantsCode = `<ui-radio-group
  variant="card"
  layout="grid"
  columns="2"
  [options]="planOptions"
></ui-radio-group>`;

  buttonGroupsCode = `<ui-radio-group
  button-group="true"
  layout="horizontal"
  [options]="basicOptions"
></ui-radio-group>`;

  layoutsCode = `<ui-radio-group layout="vertical" [options]="basicOptions"></ui-radio-group>
<ui-radio-group layout="horizontal" [options]="basicOptions"></ui-radio-group>`;

  loadingSkeletonCode = `<ui-radio-group skeleton [options]="basicOptions"></ui-radio-group>`;

  colorVariantsCode = `<ui-radio-group color="primary" [options]="basicOptions"></ui-radio-group>
<ui-radio-group color="success" [options]="basicOptions"></ui-radio-group>`;

  sizesCode = `<ui-radio-group size="small" [options]="basicOptions"></ui-radio-group>
<ui-radio-group size="large" [options]="basicOptions"></ui-radio-group>`;

  statesCode = `<ui-radio-group disabled [options]="basicOptions"></ui-radio-group>
<ui-radio-group invalid error-message="Selection required" [options]="basicOptions"></ui-radio-group>`;

  formExampleCode = `<ui-radio-group
  [(ngModel)]="shipping"
  name="shipping"
  required
  [options]="deliveryOptions"
></ui-radio-group>`;

  slottedClearableCode = `<ui-radio-group name="slots" label="Manual Composition">
  <ui-radio value="1" label="Option 1"></ui-radio>
  <ui-radio value="2" label="Option 2"></ui-radio>
</ui-radio-group>

<ui-radio-group 
  allow-empty="true" 
  [options]="clearableOptions"
></ui-radio-group>`;

  onSubmit() {
    if (!this.formShipping || !this.formPayment) {
      this.formMessage = '?? Please select both shipping and payment methods';
      this.formMessageColor = '#dc2626';
      this.shippingInvalid = !this.formShipping;
      this.paymentInvalid = !this.formPayment;
    } else {
      this.formMessage = '? Order placed successfully!';
      this.formMessageColor = '#16a34a';
      this.shippingInvalid = false;
      this.paymentInvalid = false;
    }
  }
}
