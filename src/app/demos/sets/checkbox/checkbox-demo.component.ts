import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmCheckboxPlaygroundComponent } from '../../../playground/sets/checkbox-playground/checkbox-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'ds-checkbox-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmCheckboxPlaygroundComponent,
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
    { id: 'color-variants', title: 'Color Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'premium-styles', title: 'Premium Styles', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'shapes-sizes', title: 'Shapes & Sizes', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'label-positions', title: 'Label Positions', icon: 'align-left', iconLibrary: 'lucide' },
    { id: 'custom-icons', title: 'Custom Icons', icon: 'star', iconLibrary: 'lucide' },
    { id: 'badges-tooltips', title: 'Badges & Tooltips', icon: 'info', iconLibrary: 'lucide' },
    { id: 'states', title: 'Component States', icon: 'list-checks', iconLibrary: 'lucide' },
    { id: 'groups', title: 'Checkbox Groups', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'form', title: 'Form Integration', icon: 'clipboard-list', iconLibrary: 'lucide' },
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
<dui-checkbox label="Primary" color="primary" checked></dui-checkbox>
<dui-checkbox label="Success" color="success" checked></dui-checkbox>
<dui-checkbox label="Danger" color="danger" checked></dui-checkbox>
<dui-checkbox label="Indigo" color="indigo" checked></dui-checkbox>`;

  premiumStylesCode = `<dui-checkbox label="Filled Variant" variant="filled" color="primary" checked></dui-checkbox>
<dui-checkbox label="Tick Only" variant="tick" color="success" checked></dui-checkbox>
<dui-checkbox label="Soft Variant" variant="soft" color="info" checked></dui-checkbox>
<dui-checkbox label="Button Style" variant="button" color="danger" checked></dui-checkbox>
<dui-checkbox label="Chip Style" variant="chip" color="warning" checked></dui-checkbox>`;

  shapesSizesCode = `<dui-checkbox label="Rounded" variant="rounded" checked></dui-checkbox>
<dui-checkbox label="Square" variant="square" checked></dui-checkbox>
<dui-checkbox label="Round Color" variant="round-color" checked></dui-checkbox>

<dui-checkbox label="Small" size="small" checked></dui-checkbox>
<dui-checkbox label="Medium" size="medium" checked></dui-checkbox>
<dui-checkbox label="Large" size="large" checked></dui-checkbox>`;

  labelPositionsCode = `<dui-checkbox label="Right (Default)" label-position="right"></dui-checkbox>
<dui-checkbox label="Left Position" label-position="left"></dui-checkbox>
<dui-checkbox label="Top Position" label-position="top"></dui-checkbox>
<dui-checkbox label="Bottom Position" label-position="bottom"></dui-checkbox>`;

  customIconsCode = `<dui-checkbox 
  label="Star Icon" 
  custom-check-icon="star" 
  checked
></dui-checkbox>

<dui-checkbox 
  label="Heart Icon" 
  custom-check-icon="heart" 
  color="danger" 
  checked
></dui-checkbox>

<dui-checkbox 
  label="Custom Indeterminate" 
  custom-indeterminate-icon="help-circle" 
  indeterminate
></dui-checkbox>`;

  badgesTooltipsCode = `<dui-checkbox 
  label="With Badge" 
  badge="New" 
  color="primary"
></dui-checkbox>

<dui-checkbox 
  label="With Tooltip" 
  tooltip="Extra helpful information" 
  tooltip-position="right"
></dui-checkbox>`;

  statesCode = `<dui-checkbox label="Checked" checked></dui-checkbox>
<dui-checkbox label="Indeterminate" indeterminate></dui-checkbox>
<dui-checkbox label="Disabled" disabled></dui-checkbox>
<dui-checkbox label="Error State" invalid error-message="Required"></dui-checkbox>`;

  groupExampleCode = `<!-- Master checkbox logic -->
<dui-checkbox 
  label="Select All" 
  [checked]="masterChecked" 
  [indeterminate]="masterIndeterminate"
  (checkboxChange)="onMasterChange($event)">
</dui-checkbox>`;

  formExampleCode = `<dui-checkbox
  [(ngModel)]="formTerms"
  label="Accept Terms"
  [invalid]="termsInvalid"
  error-message="Required"
></dui-checkbox>`;

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
      this.formMessage = 'Please accept the required terms to continue';
      this.formMessageColor = '#dc2626';
      this.termsInvalid = !this.formTerms;
      this.privacyInvalid = !this.formPrivacy;
    } else {
      this.formMessage = 'Account created successfully!';
      this.formMessageColor = '#16a34a';
      this.termsInvalid = false;
      this.privacyInvalid = false;
    }
  }
}
