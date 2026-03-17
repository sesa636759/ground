import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DmTooltipPlaygroundComponent } from '../../../playground/sets/tooltip-playground/tooltip-playground.component';

@Component({
  selector: 'dm-tooltip-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTooltipPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tooltip-demo.component.html',
  styleUrl: './tooltip-demo.component.scss',
})
export class DmTooltipDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'triggers', title: 'Triggers', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'positioning', title: 'Positioning', icon: 'move', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Variants & Themes', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'shapes-animations', title: 'Shapes & Animations', icon: 'box', iconLibrary: 'lucide' },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      icon: 'settings-2',
      iconLibrary: 'lucide',
    },
    { id: 'rich-content', title: 'Rich HTML Content', icon: 'file-text', iconLibrary: 'lucide' },
    { id: 'use-cases', title: 'Practical Use Cases', icon: 'briefcase', iconLibrary: 'lucide' },
    {
      id: 'custom-content',
      title: 'Custom Content & Slots',
      icon: 'layout-template',
      iconLibrary: 'lucide',
    },
    { id: 'custom-colors', title: 'Custom Colors', icon: 'brush', iconLibrary: 'lucide' },
    {
      id: 'arrow-customization',
      title: 'Arrow Customization',
      icon: 'navigation',
      iconLibrary: 'lucide',
    },
    {
      id: 'mouse-tracking',
      title: 'Mouse Tracking',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
    { id: 'auto-shift', title: 'Auto-Shift', icon: 'refresh-ccw', iconLibrary: 'lucide' },
  ];

  hoverCode = `<dui-tooltip content="I appear on hover" position="top">
  <dui-button slot="target" label="Hover Me"></dui-button>
</dui-tooltip>`;

  clickCode = `<dui-tooltip content="I appear on click" position="top" trigger="click">
  <dui-button slot="target" label="Click Me"></dui-button>
</dui-tooltip>`;

  focusCode = `<dui-tooltip content="I appear on focus" position="top" trigger="focus">
  <dui-input type="text" placeholder="Focus me" slot="target" ></dui-input>
</dui-tooltip>`;

  positionCode = `<!-- Top Left -->
<dui-tooltip content="Top Left" position="top-left">
  <dui-button slot="target" label="Top Left"></dui-button>
</dui-tooltip>

<!-- Right -->
<dui-tooltip content="Right" position="right">
  <dui-button slot="target" label="Right"></dui-button>
</dui-tooltip>

<!-- Auto Position -->
<dui-tooltip content="Auto Position" position="auto">
  <dui-button slot="target" class="accent" variant="primary" label="Auto"></dui-button>
</dui-tooltip>`;

  darkVariantCode = `<dui-tooltip content="Dark Theme" variant="dark">
  <dui-button slot="target" class="dark" variant="dark" label="Dark"></dui-button>
</dui-tooltip>`;

  lightVariantCode = `<dui-tooltip content="Light Theme" variant="light">
  <dui-button slot="target" class="light" variant="light" label="Light"></dui-button>
</dui-tooltip>`;

  glassVariantCode = `<dui-tooltip content="Glass Effect" variant="glass">
  <dui-button slot="target" class="glass" variant="ghost" label="Glass"></dui-button>
</dui-tooltip>`;

  successVariantCode = `<dui-tooltip content="Operation Successful" variant="success">
  <dui-button slot="target" class="success" variant="success" label="Success"></dui-button>
</dui-tooltip>`;

  warningVariantCode = `<dui-tooltip content="Warning Message" variant="warning">
  <dui-button slot="target" class="warning" variant="warning" label="Warning"></dui-button>
</dui-tooltip>`;

  errorVariantCode = `<dui-tooltip content="Error Occurred" variant="error">
  <dui-button slot="target" class="error" variant="danger" label="Error"></dui-button>
</dui-tooltip>`;

  elevationCode = `<dui-tooltip content="High Elevation" elevation="5" variant="light" position="top">
  <dui-button slot="target" label="Elevation 5" variant="secondary"></dui-button>
</dui-tooltip>`;

  glowCode = `<dui-tooltip content="Premium Glow" show-glow="true" variant="primary" position="top">
  <dui-button slot="target" label="Starting Glow"></dui-button>
</dui-tooltip>`;

  pillShapeCode = `<dui-tooltip content="Pill Shape" shape="pill" position="top">
  <dui-button slot="target" class="rounded-full" label="Pill Button"></dui-button>
</dui-tooltip>`;

  bounceAnimationCode = `<dui-tooltip content="Boing!" animation="bounce" position="top">
  <dui-button slot="target" label="Bounce"></dui-button>
</dui-tooltip>`;

  scaleAnimationCode = `<dui-tooltip content="Scale Up" animation="scale" position="top">
  <dui-button slot="target" label="Scale"></dui-button>
</dui-tooltip>`;

  noArrowCode = `<dui-tooltip content="Tooltip without arrow" position="top" arrow="false">
  <dui-button slot="target" label="No Arrow"></dui-button>
</dui-tooltip>`;

  showDelayCode = `<dui-tooltip content="Shows after 500ms" position="top" show-delay="500">
  <dui-button slot="target" label="Show Delay"></dui-button>
</dui-tooltip>`;

  hideDelayCode = `<dui-tooltip content="Hides after 1000ms" position="top" hide-delay="1000">
  <dui-button slot="target" label="Hide Delay"></dui-button>
</dui-tooltip>`;

  followCursorCode = `<dui-tooltip content="Follows cursor smoothly" position="top" follow-cursor="true">
  <dui-button slot="target" label="Follow Cursor"></dui-button>
</dui-tooltip>`;

  interactiveCode = `<dui-tooltip position="top" interactive="true" variant="light">
  <dui-button slot="target" label="Interactive"></dui-button>
  <div class="interactive-content">
    <strong>Interactive Tooltip!</strong><br />
    <a href="#" onclick="...">Click me</a>
  </div>
</dui-tooltip>`;

  maxWidthCode = `<dui-tooltip content="Wide tooltip..." position="top" max-width="400">
  <dui-button slot="target" label="Max Width"></dui-button>
</dui-tooltip>`;

  htmlContentCode = `<dui-tooltip
  content="<strong>Bold text</strong><br><em>Italic text</em><br><code>Code snippet</code>"
  position="top"
  html="true"
  variant="light"
>
  <dui-button slot="target" label="Formatted"></dui-button>
</dui-tooltip>`;

  listContentCode = `<dui-tooltip
  content="<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
  position="top"
  html="true"
  variant="light"
>
  <dui-button slot="target" label="List"></dui-button>
</dui-tooltip>`;

  useCasesCode = `<p>
  Welcome to our platform!
  <dui-tooltip content="Click here to learn more" variant="info" position="top">
    <span slot="target" class="cursor-help underline">Details</span>
  </dui-tooltip>
</p>`;

  customSlotCode = `<dui-tooltip position="top" variant="light" interactive="true" max-width="350">
  <dui-button slot="target" label="User Profile"></dui-button>
  <div class="display-flex gap-16 p-16">
    <img src="..." class="h-40 w-40 rounded-full" />
    <div class="text-left">
      <strong>Praveen Kumar</strong>
      <span>Lead Architect</span>
    </div>
  </div>
</dui-tooltip>`;

  customPurpleCode = `<dui-tooltip
  content="Custom purple"
  position="top"
  custom-color="#9333ea"
  text-color="#ffffff"
>
  <dui-button slot="target" label="Purple"></dui-button>
</dui-tooltip>`;

  customGradientCode = `<dui-tooltip
  content="Gradient Background"
  position="top"
  custom-color="linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)"
  text-color="#ffffff"
>
  <dui-button slot="target" label="Gradient"></dui-button>
</dui-tooltip>`;

  smallArrowCode = `<dui-tooltip content="Small arrow" position="top" arrow-size="4">
  <dui-button slot="target" label="Small"></dui-button>
</dui-tooltip>`;

  largeArrowCode = `<dui-tooltip content="Large arrow" position="top" arrow-size="16">
  <dui-button slot="target" label="Large"></dui-button>
</dui-tooltip>`;

  trackMouseCode = `<dui-tooltip
  content="Tracks mouse movement!"
  position="top"
  track-mouse="true"
  variant="primary"
>
  <dui-button slot="target" label="Track Mouse"></dui-button>
</dui-tooltip>`;

  startAtMouseCode = `<dui-tooltip
  content="Opens at mouse position"
  position="top"
  trigger="click"
  open-at-mouse-position="true"
  variant="info"
>
  <dui-button slot="target" label="Click Position"></dui-button>
</dui-tooltip>`;

  autoShiftCode = `<dui-tooltip
  content="Auto-shifts and flips to stay visible"
  position="top"
  auto-shift="true"
  auto-flip="true"
  variant="primary"
>
  <dui-button slot="target" label="Auto Shift"></dui-button>
</dui-tooltip>`;

  playgroundCode = `<dui-tooltip
  content="Tooltip text"
  position="top"
>
  <dui-button label="Hover me"></dui-button>
</dui-tooltip>`;
}
