import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxPlaygroundComponent } from './components/checkbox-playground/checkbox-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-set-checkbox-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CheckboxPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    AppCheckboxValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-checkbox-demo.component.html',
  styleUrl: './set-checkbox-demo.component.scss',
})
export class SetCheckboxDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'color-variants', title: 'Color Variants', icon: '🎨' },
    { id: 'premium-variants', title: 'Premium Variants', icon: '✨' },
    { id: 'skeleton', title: 'Skeleton State', icon: '⏳' },
    { id: 'sizes-variants', title: 'Sizes & Variants', icon: '📏' },
    { id: 'states', title: 'States', icon: '🔄' },
    { id: 'groups', title: 'Checkbox Groups', icon: '📁' },
    { id: 'form', title: 'Form Example', icon: '📋' },
  ];

  // Select All Group State
  masterChecked = false;
  masterIndeterminate = false;
  groupItems = [
    { label: 'Frontend', checked: false },
    { label: 'Backend', checked: true },
    { label: 'Design', checked: false },
    { label: 'Marketing', checked: false },
  ];

  updateMasterState() {
    const checkedCount = this.groupItems.filter((i) => i.checked).length;
    this.masterChecked = checkedCount === this.groupItems.length;
    this.masterIndeterminate = checkedCount > 0 && checkedCount < this.groupItems.length;
  }

  onMasterChange(event: any) {
    const checked = event.detail.checked;
    this.groupItems.forEach((i) => (i.checked = checked));
    this.masterIndeterminate = false;
  }

  onItemChange() {
    this.updateMasterState();
  }

  // Form State
  formTerms = false;
  formPrivacy = false;
  formNewsletter = false;
  formMarketing = false;

  formMessage = signal('');
  formMessageColor = signal('inherit');

  // Interactive Refs
  termsInvalid = false;
  privacyInvalid = false;

  playgroundCode = `<app-checkbox
  [(ngModel)]="checked"
  label="Accept terms"
></app-checkbox>`;

  colorVariantsCode = `<!-- Available colors: primary, secondary, success, danger, warning, info, indigo, purple, pink, etc. -->
<app-checkbox label="Primary" color="primary" checked></app-checkbox>
<app-checkbox label="Success" color="success" checked></app-checkbox>
<app-checkbox label="Danger" color="danger" checked></app-checkbox>
<app-checkbox label="Indigo" color="indigo" checked></app-checkbox>`;

  premiumVariantsCode = `<app-checkbox label="Button Variant" variant="button" color="primary" checked></app-checkbox>
<app-checkbox label="Chip Variant" variant="chip" color="info" checked></app-checkbox>
<app-checkbox label="Soft Variant" variant="soft" color="success" checked></app-checkbox>`;

  skeletonCode = `<app-checkbox skeleton size="small"></app-checkbox>
<app-checkbox skeleton size="medium"></app-checkbox>
<app-checkbox skeleton size="large"></app-checkbox>`;

  sizesVariantsCode = `<app-checkbox label="Small" size="small"></app-checkbox>
<app-checkbox label="Medium" size="medium"></app-checkbox>
<app-checkbox label="Large" size="large"></app-checkbox>

<app-checkbox label="Rounded" variant="rounded"></app-checkbox>
<app-checkbox label="Square" variant="square"></app-checkbox>
<app-checkbox label="Pill" variant="pill"></app-checkbox>`;

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

  groupExampleCode = `<!-- Select All Indeterminate Example -->
<app-checkbox 
  label="Select All" 
  [checked]="masterChecked" 
  [indeterminate]="masterIndeterminate"
  (checkboxChange)="onMasterChange($event)">
</app-checkbox>

<div class="group-items">
  <app-checkbox 
    *ngFor="let item of items" 
    [label]="item.label" 
    [(ngModel)]="item.checked"
    (change)="onItemChange()">
  </app-checkbox>
</div>`;

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

  ngOnInit() {
    this.updateMasterState();
  }

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
