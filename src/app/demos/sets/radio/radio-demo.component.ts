import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmRadioPlaygroundComponent } from '../../../playground/sets/radio-playground/radio-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-radio-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmRadioPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-demo.component.html',
  styleUrl: './radio-demo.component.scss',
})
export class DmRadioDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Usage', icon: 'list', iconLibrary: 'lucide' },
    { id: 'layouts', title: 'Layout Options', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'rich', title: 'Rich Content', icon: 'file-text', iconLibrary: 'lucide' },
    { id: 'buttons', title: 'Button Groups', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'validation', title: 'Validation', icon: 'shield-check', iconLibrary: 'lucide' },
    { id: 'options-prop', title: 'Options Prop', icon: 'list-plus', iconLibrary: 'lucide' },
    { id: 'misc', title: 'Special Features', icon: 'plus-circle', iconLibrary: 'lucide' },
  ];

  basicCode = signal(`<ui-radio-group label="Choose Plan">
  <ui-radio value="free" label="Free Trial"></ui-radio>
  <ui-radio value="pro" label="Pro Monthly"></ui-radio>
  <ui-radio value="ent" label="Enterprise"></ui-radio>
</ui-radio-group>`);

  layoutsCode = signal(`<!-- Horizontal -->
<ui-radio-group layout="horizontal" label="Select Gender">
  <ui-radio value="m" label="Male"></ui-radio>
  <ui-radio value="f" label="Female"></ui-radio>
</ui-radio-group>

<!-- Grid (2 Columns) -->
<ui-radio-group layout="grid" columns="2" label="Preferred Days">
  <ui-radio value="mon" label="Monday"></ui-radio>
  <ui-radio value="tue" label="Tuesday"></ui-radio>
  <ui-radio value="wed" label="Wednesday"></ui-radio>
  <ui-radio value="thu" label="Thursday"></ui-radio>
</ui-radio-group>`);

  variantsCode = signal(`<ui-radio-group variant="bordered" label="Bordered Variant">
  <ui-radio value="a" label="Option A"></ui-radio>
  <ui-radio value="b" label="Option B"></ui-radio>
</ui-radio-group>

<ui-radio-group variant="underlined" label="Underlined Style">
  <ui-radio value="1" label="Selection 1"></ui-radio>
  <ui-radio value="2" label="Selection 2"></ui-radio>
</ui-radio-group>`);

  richCode = signal(`<ui-radio-group label="Shipping Method">
  <ui-radio 
    value="standard" 
    label="Standard Shipping" 
    description="3-5 business days delivery"
    badge="$5.00"
  ></ui-radio>
  <ui-radio 
    value="express" 
    label="Express Shipping" 
    description="Next day guaranteed"
    badge="$15.00"
    custom-icon="zap"
  ></ui-radio>
</ui-radio-group>`);

  buttonsCode = signal(`<ui-radio-group button-group label="Selection Mode">
  <ui-radio value="view" label="View Mode"></ui-radio>
  <ui-radio value="edit" label="Edit Mode"></ui-radio>
  <ui-radio value="admin" label="Admin Mode"></ui-radio>
</ui-radio-group>`);

  validationCode = signal(`<ui-radio-group 
  required 
  invalid 
  label="Required Selection"
  error-message="Please select at least one option to proceed."
>
  <ui-radio value="1" label="Accept terms"></ui-radio>
  <ui-radio value="0" label="Decline"></ui-radio>
</ui-radio-group>`);

  optionsPropCode = signal(`<ui-radio-group 
  label="Dynamic Options" 
  [options]="[
    { value: 'low', label: 'Low priority' },
    { value: 'med', label: 'Medium priority' },
    { value: 'high', label: 'High priority' }
  ]"
></ui-radio-group>`);

  miscCode = signal(`<!-- Allow Empty (Deselectable) -->
<ui-radio-group allow-empty label="Can Deselect" value="1">
  <ui-radio value="1" label="Selection (Click again to clear)"></ui-radio>
</ui-radio-group>

<!-- No Dot Style -->
<ui-radio-group [show-dot]="false" label="Hiding the Dot Indicator">
  <ui-radio value="A" label="Option A"></ui-radio>
  <ui-radio value="B" label="Option B"></ui-radio>
</ui-radio-group>

<!-- Label Position Left -->
<ui-radio-group label-position="left" label="Labels on Left Side">
  <ui-radio value="left" label="Choice A"></ui-radio>
  <ui-radio value="right" label="Choice B"></ui-radio>
</ui-radio-group>

<!-- Skeleton Mode -->
<ui-radio-group skeleton label="Loading choices...">
  <ui-radio label="Hidden Label"></ui-radio>
  <ui-radio label="Hidden Label"></ui-radio>
</ui-radio-group>`);

  onRadioChange(event: any) {
    console.log('Value changed:', event.detail);
  }
}
