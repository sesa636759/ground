import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioPlaygroundComponent } from './components/radio-playground/radio-playground.component';

@Component({
  selector: 'app-set-radio-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RadioPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-radio-demo.component.html',
  styleUrl: './set-radio-demo.component.scss',
})
export class SetRadioDemoComponent implements OnInit {
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

  ngOnInit() {}

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
