import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxPlaygroundComponent } from './components/checkbox-playground/checkbox-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-checkbox-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxPlaygroundComponent, CodeBlockComponent],
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

  playgroundCode = `<app-checkbox
  [(ngModel)]="checked"
  label="Accept terms"
></app-checkbox>`;

  colorVariantsCode = `<!-- Available colors: primary, secondary, success, danger, warning, info -->
<app-checkbox label="Primary" color="primary" checked></app-checkbox>
<app-checkbox label="Success" color="success" checked></app-checkbox>
<app-checkbox label="Danger" color="danger" checked></app-checkbox>`;

  premiumVariantsCode = `<app-checkbox label="Button Variant" variant="button" color="primary" checked></app-checkbox>

<app-checkbox label="Chip Variant" variant="chip" color="info" checked></app-checkbox>`;

  skeletonCode = `<app-checkbox skeleton size="small"></app-checkbox>
<app-checkbox skeleton size="medium"></app-checkbox>
<app-checkbox skeleton size="large"></app-checkbox>`;

  sizesVariantsCode = `<app-checkbox label="Small" size="small"></app-checkbox>
<app-checkbox label="Medium" size="medium"></app-checkbox>
<app-checkbox label="Large" size="large"></app-checkbox>

<app-checkbox label="Rounded" variant="rounded"></app-checkbox>
<app-checkbox label="Square" variant="square"></app-checkbox>`;

  statesCode = `<app-checkbox label="Checked" checked></app-checkbox>
<app-checkbox label="Indeterminate" indeterminate></app-checkbox>
<app-checkbox label="Disabled" disabled></app-checkbox>

<app-checkbox
  label="With Helper"
  helper-text="Additional information"
></app-checkbox>

<app-checkbox
  label="Error State"
  invalid
  error-message="This field is required"
></app-checkbox>

<app-checkbox label="Readonly" readonly checked></app-checkbox>`;

  formExampleCode = `<app-checkbox
  [(ngModel)]="termsAccepted"
  label="I accept the terms"
  required
  [invalid]="isInvalid"
  error-message="You must accept the terms"
></app-checkbox>

<app-checkbox
  [(ngModel)]="newsletter"
  label="Subscribe to newsletter"
  helper-text="Get updates"
  color="success"
></app-checkbox>`;

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
