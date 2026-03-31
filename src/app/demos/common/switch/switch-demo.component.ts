import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmSwitchPlaygroundComponent } from '../../../playground/common/switch-playground/switch-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-switch-demo',
  imports: [
    ...PLAYGROUND_IMPORTS,
    ExampleSectionComponent,
    
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
    { id: 'elite', name: 'Elite Specimens', icon: 'trophy', iconLibrary: 'lucide' },
    { id: 'physics', name: 'Physics Gallery', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'image-icons', name: 'Image Icons', icon: 'image', iconLibrary: 'lucide' },
    { id: 'groups', name: 'Toggle Groups', icon: 'layout', iconLibrary: 'lucide' },
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

  formsCode = `<form action="/submit" method="POST">
  <ui-switch 
    name="marketing_emails" 
    value="subscribed" 
    label="Subscribe to newsletter"
    checked
  ></ui-switch>

  <ui-switch 
    name="auto_save" 
    label="Auto-submit on change" 
    auto-submit
  ></ui-switch>
</form>`;

  eliteCode = `<!-- Glassmorphism material archetype -->
<ui-switch label="Frosted Control" material="glass" color="info" glow checked description="Refractive backdrop-filter substrate"></ui-switch>

<!-- Raised neomorphic archetype -->
<ui-switch label="Tactile Relief" material="raised" color="primary" glow checked description="Multi-layered skeletal shadows"></ui-switch>

<!-- Outlined archetype -->
<ui-switch label="Outlined Style" material="outlined" color="danger" checked></ui-switch>

<!-- With haptic feedback -->
<ui-switch label="Haptic Enabled" haptic checked color="success"></ui-switch>`;

  physicsCode = `<!-- Liquid (smooth spring, default) -->
<ui-switch label="Liquid Flow" physics="liquid" checked></ui-switch>

<!-- Stiff (rapid response) -->
<ui-switch label="Stiff Response" physics="stiff" checked color="warning"></ui-switch>

<!-- Bouncy (elastic overshoot) -->
<ui-switch label="Bouncy Elastic" physics="bouncy" checked color="success"></ui-switch>

<!-- Linear (industrial no-frills) -->
<ui-switch label="Linear Motion" physics="linear" checked color="secondary"></ui-switch>`;

  imageIconsCode = `<!-- Checked image (sun) + unchecked image (moon) -->
<ui-switch
  label="Day / Night Mode"
  checked-image="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/2600.svg"
  unchecked-image="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f319.svg"
  checked
></ui-switch>

<!-- Standard icons with library -->
<ui-switch show-icons icon-on="wifi" icon-off="wifi-off" icon-library="lucide" checked></ui-switch>
<ui-switch show-icons icon-on="bell" icon-off="bell-off" icon-library="lucide" checked variant="success"></ui-switch>`;

  groupsCode = `<!-- Toggle group (radio-style, one selected) -->
<ui-toggle-group label="Theme" value="system">
  <ui-toggle value="light" label="Light"></ui-toggle>
  <ui-toggle value="dark" label="Dark"></ui-toggle>
  <ui-toggle value="system" label="System"></ui-toggle>
</ui-toggle-group>

<!-- Multi-select toggle group -->
<ui-toggle-group label="Filters" multi>
  <ui-toggle value="bold" label="Bold"></ui-toggle>
  <ui-toggle value="italic" label="Italic"></ui-toggle>
  <ui-toggle value="underline" label="Underline"></ui-toggle>
</ui-toggle-group>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
