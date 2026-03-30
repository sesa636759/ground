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
<ui-checkbox label="Primary" color="primary" checked></ui-checkbox>
<ui-checkbox label="Success" color="success" checked></ui-checkbox>
<ui-checkbox label="Danger" color="danger" checked></ui-checkbox>
<ui-checkbox label="Indigo" color="indigo" checked></ui-checkbox>`;

  premiumStylesCode = `<ui-checkbox label="Filled Variant" variant="filled" color="primary" checked></ui-checkbox>
<ui-checkbox label="Tick Only" variant="tick" color="success" checked></ui-checkbox>
<ui-checkbox label="Soft Variant" variant="soft" color="info" checked></ui-checkbox>
<ui-checkbox label="Button Style" variant="button" color="danger" checked></ui-checkbox>
<ui-checkbox label="Chip Style" variant="chip" color="warning" checked></ui-checkbox>`;

  shapesSizesCode = `<ui-checkbox label="Rounded" variant="rounded" checked></ui-checkbox>
<ui-checkbox label="Square" variant="square" checked></ui-checkbox>
<ui-checkbox label="Round Color" variant="round-color" checked></ui-checkbox>

<ui-checkbox label="Small" size="small" checked></ui-checkbox>
<ui-checkbox label="Medium" size="medium" checked></ui-checkbox>
<ui-checkbox label="Large" size="large" checked></ui-checkbox>`;

  labelPositionsCode = `<ui-checkbox label="Right (Default)" label-position="right"></ui-checkbox>
<ui-checkbox label="Left Position" label-position="left"></ui-checkbox>
<ui-checkbox label="Top Position" label-position="top"></ui-checkbox>
<ui-checkbox label="Bottom Position" label-position="bottom"></ui-checkbox>`;

  customIconsCode = `<ui-checkbox 
  label="Star Icon" 
  custom-check-icon="star" 
  checked
></ui-checkbox>

<ui-checkbox 
  label="Heart Icon" 
  custom-check-icon="heart" 
  color="danger" 
  checked
></ui-checkbox>

<ui-checkbox 
  label="Custom Indeterminate" 
  custom-indeterminate-icon="help-circle" 
  indeterminate
></ui-checkbox>`;

  badgesTooltipsCode = `<ui-checkbox 
  label="With Badge" 
  badge="New" 
  color="primary"
></ui-checkbox>

<ui-checkbox 
  label="With Tooltip" 
  tooltip="Extra helpful information" 
  tooltip-position="right"
></ui-checkbox>`;

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
