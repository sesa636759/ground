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

  basicCode = signal(`<dui-radio-group label="Choose Plan">
  <dui-radio value="free" label="Free Trial"></dui-radio>
  <dui-radio value="pro" label="Pro Monthly"></dui-radio>
  <dui-radio value="ent" label="Enterprise"></dui-radio>
</dui-radio-group>`);

  layoutsCode = signal(`<!-- Horizontal -->
<dui-radio-group layout="horizontal" label="Select Gender">
  <dui-radio value="m" label="Male"></dui-radio>
  <dui-radio value="f" label="Female"></dui-radio>
</dui-radio-group>

<!-- Grid (2 Columns) -->
<dui-radio-group layout="grid" columns="2" label="Preferred Days">
  <dui-radio value="mon" label="Monday"></dui-radio>
  <dui-radio value="tue" label="Tuesday"></dui-radio>
  <dui-radio value="wed" label="Wednesday"></dui-radio>
  <dui-radio value="thu" label="Thursday"></dui-radio>
</dui-radio-group>`);

  variantsCode = signal(`<dui-radio-group variant="bordered" label="Bordered Variant">
  <dui-radio value="a" label="Option A"></dui-radio>
  <dui-radio value="b" label="Option B"></dui-radio>
</dui-radio-group>

<dui-radio-group variant="underlined" label="Underlined Style">
  <dui-radio value="1" label="Selection 1"></dui-radio>
  <dui-radio value="2" label="Selection 2"></dui-radio>
</dui-radio-group>`);

  richCode = signal(`<dui-radio-group label="Shipping Method">
  <dui-radio 
    value="standard" 
    label="Standard Shipping" 
    description="3-5 business days delivery"
    badge="$5.00"
  ></dui-radio>
  <dui-radio 
    value="express" 
    label="Express Shipping" 
    description="Next day guaranteed"
    badge="$15.00"
    custom-icon="zap"
  ></dui-radio>
</dui-radio-group>`);

  buttonsCode = signal(`<dui-radio-group button-group label="Selection Mode">
  <dui-radio value="view" label="View Mode"></dui-radio>
  <dui-radio value="edit" label="Edit Mode"></dui-radio>
  <dui-radio value="admin" label="Admin Mode"></dui-radio>
</dui-radio-group>`);

  validationCode = signal(`<dui-radio-group 
  required 
  invalid 
  label="Required Selection"
  error-message="Please select at least one option to proceed."
>
  <dui-radio value="1" label="Accept terms"></dui-radio>
  <dui-radio value="0" label="Decline"></dui-radio>
</dui-radio-group>`);

  optionsPropCode = signal(`<dui-radio-group 
  label="Dynamic Options" 
  [options]="[
    { value: 'low', label: 'Low priority' },
    { value: 'med', label: 'Medium priority' },
    { value: 'high', label: 'High priority' }
  ]"
></dui-radio-group>`);

  miscCode = signal(`<!-- Allow Empty (Deselectable) -->
<dui-radio-group allow-empty label="Can Deselect" value="1">
  <dui-radio value="1" label="Selection (Click again to clear)"></dui-radio>
</dui-radio-group>

<!-- No Dot Style -->
<dui-radio-group [show-dot]="false" label="Hiding the Dot Indicator">
  <dui-radio value="A" label="Option A"></dui-radio>
  <dui-radio value="B" label="Option B"></dui-radio>
</dui-radio-group>

<!-- Label Position Left -->
<dui-radio-group label-position="left" label="Labels on Left Side">
  <dui-radio value="left" label="Choice A"></dui-radio>
  <dui-radio value="right" label="Choice B"></dui-radio>
</dui-radio-group>

<!-- Skeleton Mode -->
<dui-radio-group skeleton label="Loading choices...">
  <dui-radio label="Hidden Label"></dui-radio>
  <dui-radio label="Hidden Label"></dui-radio>
</dui-radio-group>`);

  onRadioChange(event: any) {
    console.log('Value changed:', event.detail);
  }
}
