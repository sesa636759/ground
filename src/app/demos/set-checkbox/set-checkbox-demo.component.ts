import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxPlaygroundComponent } from './components/checkbox-playground/checkbox-playground.component';

@Component({
  selector: 'app-set-checkbox-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-checkbox-demo.component.html',
  styleUrl: './set-checkbox-demo.component.scss',
})
export class SetCheckboxDemoComponent implements OnInit {
  // Form State
  formTerms = false;
  formPrivacy = false;
  formNewsletter = false;
  formMarketing = false;

  formMessage = signal('');
  formMessageColor = signal('inherit');

  // Interactive Refs (for setting properties manually if needed)
  termsInvalid = false;
  privacyInvalid = false;

  ngOnInit() {}

  onSubmit() {
    if (!this.formTerms || !this.formPrivacy) {
      this.formMessage.set('⚠️ Please accept the required terms to continue');
      this.formMessageColor.set('#dc2626');
      this.termsInvalid = !this.formTerms;
      this.privacyInvalid = !this.formPrivacy;
    } else {
      this.formMessage.set('✅ Account created successfully!');
      this.formMessageColor.set('#16a34a');
      this.termsInvalid = false;
      this.privacyInvalid = false;
    }
  }
}
