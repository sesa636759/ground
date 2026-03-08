import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmCheckboxSetPlaygroundComponent } from '../../../playground/sets/checkbox-playground/checkbox-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-checkbox-set-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmCheckboxSetPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './checkbox-demo.component.html',
  styleUrl: './checkbox-demo.component.scss',
})
export class DmCheckboxDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '??', color: '#8b5cf6' },
    { id: 'color-variants', title: 'Color Variants', icon: '??' },
    { id: 'premium-variants', title: 'Premium Variants', icon: '?' },
    { id: 'skeleton', title: 'Skeleton State', icon: '?' },
    { id: 'sizes-variants', title: 'Sizes & Variants', icon: '??' },
    { id: 'states', title: 'States', icon: '??' },
    { id: 'groups', title: 'Checkbox Groups', icon: '??' },
    { id: 'form', title: 'Form Example', icon: '??' },
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
<ui-checkbox label="Primary" color="primary" checked></ui-checkbox>
<ui-checkbox label="Success" color="success" checked></ui-checkbox>
<ui-checkbox label="Danger" color="danger" checked></ui-checkbox>
<ui-checkbox label="Indigo" color="indigo" checked></ui-checkbox>`;

  premiumVariantsCode = `<ui-checkbox label="Button Variant" variant="button" color="primary" checked></ui-checkbox>
<ui-checkbox label="Chip Variant" variant="chip" color="info" checked></ui-checkbox>
<ui-checkbox label="Soft Variant" variant="soft" color="success" checked></ui-checkbox>`;

  skeletonCode = `<ui-checkbox skeleton size="small"></ui-checkbox>
<ui-checkbox skeleton size="medium"></ui-checkbox>
<ui-checkbox skeleton size="large"></ui-checkbox>`;

  sizesVariantsCode = `<ui-checkbox label="Small" size="small"></ui-checkbox>
<ui-checkbox label="Medium" size="medium"></ui-checkbox>
<ui-checkbox label="Large" size="large"></ui-checkbox>`;

  statesCode = `<ui-checkbox label="Checked" checked></ui-checkbox>
<ui-checkbox label="Indeterminate" indeterminate></ui-checkbox>
<ui-checkbox label="Disabled" disabled></ui-checkbox>
<ui-checkbox label="Error State" invalid error-message="Required"></ui-checkbox>`;

  groupExampleCode = `<!-- Master checkbox logic -->
<ui-checkbox 
  label="Select All" 
  [checked]="masterChecked" 
  [indeterminate]="masterIndeterminate"
  (checkboxChange)="onMasterChange($event)">
</ui-checkbox>`;

  formExampleCode = `<ui-checkbox
  [(ngModel)]="formTerms"
  label="Accept Terms"
  [invalid]="termsInvalid"
  error-message="Required"
></ui-checkbox>`;

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
      this.formMessage = '?? Please accept the required terms to continue';
      this.formMessageColor = '#dc2626';
      this.termsInvalid = !this.formTerms;
      this.privacyInvalid = !this.formPrivacy;
    } else {
      this.formMessage = '? Account created successfully!';
      this.formMessageColor = '#16a34a';
      this.termsInvalid = false;
      this.privacyInvalid = false;
    }
  }
}
