import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmSwitchPlaygroundComponent } from '../../../playground/common/switch-playground/switch-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-switch-demo',
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSwitchPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './switch-demo.component.html',
  styleUrl: './switch-demo.component.scss',
})
export class DmSwitchDemoComponent {
  variants = [
    { id: 'colors', name: 'Colors', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', name: 'Sizes', icon: 'maximize', iconLibrary: 'lucide' },
    { id: 'shapes', name: 'Shapes', icon: 'shapes', iconLibrary: 'lucide' },
    { id: 'icons', name: 'Icons & Text', icon: 'image', iconLibrary: 'lucide' },
    { id: 'states', name: 'Behavior & States', icon: 'activity', iconLibrary: 'lucide' },
    { id: 'visuals', name: 'Visual Enhancements', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'forms', name: 'Form Integration', icon: 'file-text', iconLibrary: 'lucide' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  playgroundCode = `<dui-switch label="Enable Feature" checked variant="primary"></dui-switch>`;

  colorsCode = `<dui-switch label="Primary" variant="primary" checked></dui-switch>
<dui-switch label="Secondary" variant="secondary" checked></dui-switch>
<dui-switch label="Success" variant="success" checked></dui-switch>
<dui-switch label="Warning" variant="warning" checked></dui-switch>
<dui-switch label="Danger" variant="danger" checked></dui-switch>
<dui-switch label="Info" variant="info" checked></dui-switch>`;

  sizesCode = `<dui-switch label="XXXS" size="xxxs" checked></dui-switch>
<dui-switch label="Extra Small" size="xs" checked></dui-switch>
<dui-switch label="Small" size="small" checked></dui-switch>
<dui-switch label="Medium" size="medium" checked></dui-switch>
<dui-switch label="Large" size="large" checked></dui-switch>
<dui-switch label="XL" size="xl" checked></dui-switch>
<dui-switch label="XXXL" size="xxxl" checked></dui-switch>`;

  shapesCode = `<dui-switch label="Default" shape="default" checked></dui-switch>
<dui-switch label="Rounded" shape="rounded" checked></dui-switch>
<dui-switch label="Pill" shape="pill" checked></dui-switch>
<dui-switch label="Square" shape="square" checked></dui-switch>
<div style="margin-top: 10px;">
  <dui-switch label="Square Thumb" thumb-shape="square" checked></dui-switch>
</div>`;

  iconsCode = `<dui-switch show-icons icon-on="moon" icon-off="sun" icon-library="lucide" checked></dui-switch>
<dui-switch show-icons icon-on="volume-2" icon-off="volume-x" icon-library="lucide" checked></dui-switch>
<dui-switch show-default-icons checked></dui-switch>
<dui-switch show-track-text checked-text="YES" unchecked-text="NO" checked></dui-switch>`;

  statesCode = `<dui-switch label="Disabled" disabled checked></dui-switch>
<dui-switch label="Readonly" readonly checked></dui-switch>
<dui-switch label="Loading" loading checked></dui-switch>
<dui-switch label="Indeterminate" indeterminate></dui-switch>
<dui-switch label="Required" required></dui-switch>
<dui-switch label="Invalid State" invalid error-message="Selection required"></dui-switch>`;

  visualsCode = `<dui-switch label="Elevation" elevation="3" checked></dui-switch>
<dui-switch label="Gradient" gradient checked></dui-switch>
<dui-switch label="Custom Gradient" gradient gradient-colors='["#f43f5e", "#fb923c"]' checked></dui-switch>
<dui-switch label="Confirmation Required" require-confirmation confirmation-message="Are you really sure?"></dui-switch>
<dui-switch label="Success Feedback" show-success-feedback></dui-switch>
<dui-switch label="Tooltip" show-tooltip tooltip-text="This is a tooltip"></dui-switch>`;

  formsCode = `<form action="/submit" method="POST">
  <dui-switch 
    name="marketing_emails" 
    value="subscribed" 
    label="Subscribe to newsletter"
    checked
  ></dui-switch>

  <dui-switch 
    name="auto_save" 
    label="Auto-submit on change" 
    auto-submit
  ></dui-switch>
</form>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
