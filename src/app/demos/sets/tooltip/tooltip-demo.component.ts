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

  hoverCode = `<ui-tooltip content="I appear on hover" position="top">
  <ui-button slot="target" label="Hover Me"></ui-button>
</ui-tooltip>`;

  clickCode = `<ui-tooltip content="I appear on click" position="top" trigger="click">
  <ui-button slot="target" label="Click Me"></ui-button>
</ui-tooltip>`;

  focusCode = `<ui-tooltip content="I appear on focus" position="top" trigger="focus">
  <ui-input type="text" placeholder="Focus me" slot="target" ></ui-input>
</ui-tooltip>`;

  positionCode = `<!-- Top Left -->
<ui-tooltip content="Top Left" position="top-left">
  <ui-button slot="target" label="Top Left"></ui-button>
</ui-tooltip>

<!-- Right -->
<ui-tooltip content="Right" position="right">
  <ui-button slot="target" label="Right"></ui-button>
</ui-tooltip>

<!-- Auto Position -->
<ui-tooltip content="Auto Position" position="auto">
  <ui-button slot="target" class="accent" variant="primary" label="Auto"></ui-button>
</ui-tooltip>`;

  darkVariantCode = `<ui-tooltip content="Dark Theme" variant="dark">
  <ui-button slot="target" class="dark" variant="dark" label="Dark"></ui-button>
</ui-tooltip>`;

  lightVariantCode = `<ui-tooltip content="Light Theme" variant="light">
  <ui-button slot="target" class="light" variant="light" label="Light"></ui-button>
</ui-tooltip>`;

  glassVariantCode = `<ui-tooltip content="Glass Effect" variant="glass">
  <ui-button slot="target" class="glass" variant="ghost" label="Glass"></ui-button>
</ui-tooltip>`;

  successVariantCode = `<ui-tooltip content="Operation Successful" variant="success">
  <ui-button slot="target" class="success" variant="success" label="Success"></ui-button>
</ui-tooltip>`;

  warningVariantCode = `<ui-tooltip content="Warning Message" variant="warning">
  <ui-button slot="target" class="warning" variant="warning" label="Warning"></ui-button>
</ui-tooltip>`;

  errorVariantCode = `<ui-tooltip content="Error Occurred" variant="error">
  <ui-button slot="target" class="error" variant="danger" label="Error"></ui-button>
</ui-tooltip>`;

  elevationCode = `<ui-tooltip content="High Elevation" elevation="5" variant="light" position="top">
  <ui-button slot="target" label="Elevation 5" variant="secondary"></ui-button>
</ui-tooltip>`;

  glowCode = `<ui-tooltip content="Premium Glow" show-glow="true" variant="primary" position="top">
  <ui-button slot="target" label="Starting Glow"></ui-button>
</ui-tooltip>`;

  pillShapeCode = `<ui-tooltip content="Pill Shape" shape="pill" position="top">
  <ui-button slot="target" class="rounded-full" label="Pill Button"></ui-button>
</ui-tooltip>`;

  bounceAnimationCode = `<ui-tooltip content="Boing!" animation="bounce" position="top">
  <ui-button slot="target" label="Bounce"></ui-button>
</ui-tooltip>`;

  scaleAnimationCode = `<ui-tooltip content="Scale Up" animation="scale" position="top">
  <ui-button slot="target" label="Scale"></ui-button>
</ui-tooltip>`;

  noArrowCode = `<ui-tooltip content="Tooltip without arrow" position="top" arrow="false">
  <ui-button slot="target" label="No Arrow"></ui-button>
</ui-tooltip>`;

  showDelayCode = `<ui-tooltip content="Shows after 500ms" position="top" show-delay="500">
  <ui-button slot="target" label="Show Delay"></ui-button>
</ui-tooltip>`;

  hideDelayCode = `<ui-tooltip content="Hides after 1000ms" position="top" hide-delay="1000">
  <ui-button slot="target" label="Hide Delay"></ui-button>
</ui-tooltip>`;

  followCursorCode = `<ui-tooltip content="Follows cursor smoothly" position="top" follow-cursor="true">
  <ui-button slot="target" label="Follow Cursor"></ui-button>
</ui-tooltip>`;

  interactiveCode = `<ui-tooltip position="top" interactive="true" variant="light">
  <ui-button slot="target" label="Interactive"></ui-button>
  <div class="interactive-content">
    <strong>Interactive Tooltip!</strong><br />
    <a href="#" onclick="...">Click me</a>
  </div>
</ui-tooltip>`;

  maxWidthCode = `<ui-tooltip content="Wide tooltip..." position="top" max-width="400">
  <ui-button slot="target" label="Max Width"></ui-button>
</ui-tooltip>`;

  htmlContentCode = `<ui-tooltip
  content="<strong>Bold text</strong><br><em>Italic text</em><br><code>Code snippet</code>"
  position="top"
  html="true"
  variant="light"
>
  <ui-button slot="target" label="Formatted"></ui-button>
</ui-tooltip>`;

  listContentCode = `<ui-tooltip
  content="<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
  position="top"
  html="true"
  variant="light"
>
  <ui-button slot="target" label="List"></ui-button>
</ui-tooltip>`;

  useCasesCode = `<p>
  Welcome to our platform!
  <ui-tooltip content="Click here to learn more" variant="info" position="top">
    <span slot="target" class="cursor-help underline">Details</span>
  </ui-tooltip>
</p>`;

  customSlotCode = `<ui-tooltip position="top" variant="light" interactive="true" max-width="350">
  <ui-button slot="target" label="User Profile"></ui-button>
  <div class="display-flex gap-16 p-16">
    <img src="..." class="h-40 w-40 rounded-full" />
    <div class="text-left">
      <strong>Praveen Kumar</strong>
      <span>Lead Architect</span>
    </div>
  </div>
</ui-tooltip>`;

  customPurpleCode = `<ui-tooltip
  content="Custom purple"
  position="top"
  custom-color="#9333ea"
  text-color="#ffffff"
>
  <ui-button slot="target" label="Purple"></ui-button>
</ui-tooltip>`;

  customGradientCode = `<ui-tooltip
  content="Gradient Background"
  position="top"
  custom-color="linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)"
  text-color="#ffffff"
>
  <ui-button slot="target" label="Gradient"></ui-button>
</ui-tooltip>`;

  smallArrowCode = `<ui-tooltip content="Small arrow" position="top" arrow-size="4">
  <ui-button slot="target" label="Small"></ui-button>
</ui-tooltip>`;

  largeArrowCode = `<ui-tooltip content="Large arrow" position="top" arrow-size="16">
  <ui-button slot="target" label="Large"></ui-button>
</ui-tooltip>`;

  trackMouseCode = `<ui-tooltip
  content="Tracks mouse movement!"
  position="top"
  track-mouse="true"
  variant="primary"
>
  <ui-button slot="target" label="Track Mouse"></ui-button>
</ui-tooltip>`;

  startAtMouseCode = `<ui-tooltip
  content="Opens at mouse position"
  position="top"
  trigger="click"
  open-at-mouse-position="true"
  variant="info"
>
  <ui-button slot="target" label="Click Position"></ui-button>
</ui-tooltip>`;

  autoShiftCode = `<ui-tooltip
  content="Auto-shifts and flips to stay visible"
  position="top"
  auto-shift="true"
  auto-flip="true"
  variant="primary"
>
  <ui-button slot="target" label="Auto Shift"></ui-button>
</ui-tooltip>`;

  playgroundCode = `<ui-tooltip
  content="Tooltip text"
  position="top"
>
  <ui-button label="Hover me"></ui-button>
</ui-tooltip>`;
}
