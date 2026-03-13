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
  ];

  get exampleVariants() {
    return this.variants;
  }

  playgroundCode = `<ui-switch label="Enable Feature" checked variant="primary"></ui-switch>`;

  colorsCode = `<ui-switch label="Primary" variant="primary" checked></ui-switch>
<ui-switch label="Secondary" variant="secondary" checked></ui-switch>
<ui-switch label="Success" variant="success" checked></ui-switch>
<ui-switch label="Warning" variant="warning" checked></ui-switch>
<ui-switch label="Danger" variant="danger" checked></ui-switch>
<ui-switch label="Info" variant="info" checked></ui-switch>`;

  sizesCode = `<ui-switch label="XXXS" size="xxxs" checked></ui-switch>
<ui-switch label="Extra Small" size="xs" checked></ui-switch>
<ui-switch label="Small" size="small" checked></ui-switch>
<ui-switch label="Medium" size="medium" checked></ui-switch>
<ui-switch label="Large" size="large" checked></ui-switch>
<ui-switch label="XL" size="xl" checked></ui-switch>
<ui-switch label="XXXL" size="xxxl" checked></ui-switch>`;

  shapesCode = `<ui-switch label="Default" shape="default" checked></ui-switch>
<ui-switch label="Rounded" shape="rounded" checked></ui-switch>
<ui-switch label="Pill" shape="pill" checked></ui-switch>
<ui-switch label="Square" shape="square" checked></ui-switch>
<div style="margin-top: 10px;">
  <ui-switch label="Square Thumb" thumb-shape="square" checked></ui-switch>
</div>`;

  iconsCode = `<ui-switch show-icons icon-on="moon" icon-off="sun" icon-library="lucide" checked></ui-switch>
<ui-switch show-icons icon-on="volume-2" icon-off="volume-x" icon-library="lucide" checked></ui-switch>
<ui-switch show-default-icons checked></ui-switch>
<ui-switch show-track-text checked-text="YES" unchecked-text="NO" checked></ui-switch>`;

  statesCode = `<ui-switch label="Disabled" disabled checked></ui-switch>
<ui-switch label="Readonly" readonly checked></ui-switch>
<ui-switch label="Loading" loading checked></ui-switch>
<ui-switch label="Indeterminate" indeterminate></ui-switch>
<ui-switch label="Required" required></ui-switch>
<ui-switch label="Invalid State" invalid error-message="Selection required"></ui-switch>`;

  visualsCode = `<ui-switch label="Elevation" elevation="3" checked></ui-switch>
<ui-switch label="Gradient" gradient checked></ui-switch>
<ui-switch label="Custom Gradient" gradient gradient-colors='["#f43f5e", "#fb923c"]' checked></ui-switch>
<ui-switch label="Confirmation Required" require-confirmation confirmation-message="Are you really sure?"></ui-switch>
<ui-switch label="Success Feedback" show-success-feedback></ui-switch>
<ui-switch label="Tooltip" show-tooltip tooltip-text="This is a tooltip"></ui-switch>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
