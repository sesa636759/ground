import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxPlaygroundComponent } from './components/checkbox-playground/checkbox-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

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
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-checkbox-demo.component.html',
  styleUrl: './set-checkbox-demo.component.scss',
})
export class SetCheckboxDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'color-variants', title: 'Color Variants', icon: '🎨' },
    { id: 'premium-variants', title: 'Premium Variants', icon: '✨' },
    { id: 'skeleton', title: 'Skeleton State', icon: '⏳' },
    { id: 'sizes-variants', title: 'Sizes & Variants', icon: '📏' },
    { id: 'states', title: 'States', icon: '🔄' },
    { id: 'groups', title: 'Checkbox Groups', icon: '📁' },
    { id: 'form', title: 'Form Example', icon: '📋' },
  ];

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  get exampleVariants() {
    return this.variants;
  }

  // Select All Group State
  masterChecked = false;
  masterIndeterminate = false;
  groupItems = [
    { label: 'Frontend', checked: false },
    { label: 'Backend', checked: true },
    { label: 'Design', checked: false },
    { label: 'Marketing', checked: false },
  ];

  // Form State
  formTerms = false;
  formPrivacy = false;
  formNewsletter = false;
  formMarketing = false;

  formMessage = '';
  formMessageColor = 'inherit';

  // Interactive Refs
  termsInvalid = false;
  privacyInvalid = false;

  // Code snippets
  colorVariantsCode = `<!-- Diverse color palette -->
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
<app-checkbox label="Large" size="large"></app-checkbox>`;

  statesCode = `<app-checkbox label="Checked" checked></app-checkbox>
<app-checkbox label="Indeterminate" indeterminate></app-checkbox>
<app-checkbox label="Disabled" disabled></app-checkbox>
<app-checkbox label="Error State" invalid error-message="Required"></app-checkbox>`;

  groupExampleCode = `<!-- Master checkbox logic -->
<app-checkbox 
  label="Select All" 
  [checked]="masterChecked" 
  [indeterminate]="masterIndeterminate"
  (checkboxChange)="onMasterChange($event)">
</app-checkbox>`;

  formExampleCode = `<app-checkbox
  [(ngModel)]="formTerms"
  label="Accept Terms"
  [invalid]="termsInvalid"
  error-message="Required"
></app-checkbox>`;

  ngOnInit() {
    this.updateMasterState();
  }

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

  onSubmit() {
    if (!this.formTerms || !this.formPrivacy) {
      this.formMessage = '⚠️ Please accept the required terms to continue';
      this.formMessageColor = '#dc2626';
      this.termsInvalid = !this.formTerms;
      this.privacyInvalid = !this.formPrivacy;
    } else {
      this.formMessage = '✅ Account created successfully!';
      this.formMessageColor = '#16a34a';
      this.termsInvalid = false;
      this.privacyInvalid = false;
    }
  }
}
