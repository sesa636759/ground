import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { TooltipPlaygroundComponent } from './components/tooltip-playground/tooltip-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-set-tooltip-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    TooltipPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tooltip-demo.component.html',
  styleUrl: './set-tooltip-demo.component.scss',
})
export class DmSetTooltipDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'triggers', title: 'Triggers', icon: 'âš¡' },
    { id: 'positioning', title: 'Positioning', icon: 'ðŸ“' },
    { id: 'variants', title: 'Variants & Themes', icon: 'ðŸŽ¨' },
    { id: 'shapes-animations', title: 'Shapes & Animations', icon: 'âœ¨' },
    { id: 'advanced-features', title: 'Advanced Features', icon: 'âš™ï¸' },
    { id: 'rich-content', title: 'Rich HTML Content', icon: 'ðŸ“' },
    { id: 'use-cases', title: 'Practical Use Cases', icon: 'ðŸ’¼' },
    { id: 'custom-content', title: 'Custom Content & Slots', icon: 'ðŸ§©' },
    { id: 'custom-colors', title: 'Custom Colors', icon: 'ðŸŒˆ' },
    { id: 'arrow-customization', title: 'Arrow Customization', icon: 'â¬†ï¸' },
    { id: 'mouse-tracking', title: 'Mouse Tracking', icon: 'ðŸ–±ï¸' },
    { id: 'auto-shift', title: 'Auto-Shift', icon: 'ðŸ”„' },
  ];

  hoverCode = `<app-tooltip content="I appear on hover" position="top">
  <ui-button slot="target" label="Hover Me"></ui-button>
</app-tooltip>`;

  clickCode = `<app-tooltip content="I appear on click" position="top" trigger="click">
  <ui-button slot="target" label="Click Me"></ui-button>
</app-tooltip>`;

  focusCode = `<app-tooltip content="I appear on focus" position="top" trigger="focus">
  <ui-input type="text" placeholder="Focus me" slot="target" ></ui-input>
</app-tooltip>`;

  positionCode = `<!-- Top Left -->
<app-tooltip content="Top Left" position="top-left">
  <ui-button slot="target" label="Top Left"></ui-button>
</app-tooltip>

<!-- Right -->
<app-tooltip content="Right" position="right">
  <ui-button slot="target" label="Right"></ui-button>
</app-tooltip>

<!-- Auto Position -->
<app-tooltip content="Auto Position" position="auto">
  <ui-button slot="target" class="accent" variant="primary" label="Auto"></ui-button>
</app-tooltip>`;

  darkVariantCode = `<app-tooltip content="Dark Theme" variant="dark">
  <ui-button slot="target" class="dark" variant="dark" label="Dark"></ui-button>
</app-tooltip>`;

  lightVariantCode = `<app-tooltip content="Light Theme" variant="light">
  <ui-button slot="target" class="light" variant="light" label="Light"></ui-button>
</app-tooltip>`;

  glassVariantCode = `<app-tooltip content="Glass Effect" variant="glass">
  <ui-button slot="target" class="glass" variant="ghost" label="Glass"></ui-button>
</app-tooltip>`;

  successVariantCode = `<app-tooltip content="Operation Successful" variant="success">
  <ui-button slot="target" class="success" variant="success" label="Success"></ui-button>
</app-tooltip>`;

  warningVariantCode = `<app-tooltip content="Warning Message" variant="warning">
  <ui-button slot="target" class="warning" variant="warning" label="Warning"></ui-button>
</app-tooltip>`;

  errorVariantCode = `<app-tooltip content="Error Occurred" variant="error">
  <ui-button slot="target" class="error" variant="danger" label="Error"></ui-button>
</app-tooltip>`;

  elevationCode = `<app-tooltip content="High Elevation" elevation="5" variant="light" position="top">
  <ui-button slot="target" label="Elevation 5" variant="secondary"></ui-button>
</app-tooltip>`;

  glowCode = `<app-tooltip content="Premium Glow" show-glow="true" variant="primary" position="top">
  <ui-button slot="target" label="Starting Glow"></ui-button>
</app-tooltip>`;

  pillShapeCode = `<app-tooltip content="Pill Shape" shape="pill" position="top">
  <ui-button slot="target" style="border-radius: 99px" label="Pill Button"></ui-button>
</app-tooltip>`;

  bounceAnimationCode = `<app-tooltip content="Boing!" animation="bounce" position="top">
  <ui-button slot="target" label="Bounce"></ui-button>
</app-tooltip>`;

  scaleAnimationCode = `<app-tooltip content="Scale Up" animation="scale" position="top">
  <ui-button slot="target" label="Scale"></ui-button>
</app-tooltip>`;

  noArrowCode = `<app-tooltip content="Tooltip without arrow" position="top" arrow="false">
  <ui-button slot="target" label="No Arrow"></ui-button>
</app-tooltip>`;

  showDelayCode = `<app-tooltip content="Shows after 500ms" position="top" show-delay="500">
  <ui-button slot="target" label="Show Delay"></ui-button>
</app-tooltip>`;

  hideDelayCode = `<app-tooltip content="Hides after 1000ms" position="top" hide-delay="1000">
  <ui-button slot="target" label="Hide Delay"></ui-button>
</app-tooltip>`;

  followCursorCode = `<app-tooltip content="Follows cursor smoothly" position="top" follow-cursor="true">
  <ui-button slot="target" label="Follow Cursor"></ui-button>
</app-tooltip>`;

  interactiveCode = `<app-tooltip position="top" interactive="true" variant="light">
  <ui-button slot="target" label="Interactive"></ui-button>
  <div class="interactive-content">
    <strong>Interactive Tooltip!</strong><br />
    <a href="#" onclick="...">Click me</a>
  </div>
</app-tooltip>`;

  maxWidthCode = `<app-tooltip content="Wide tooltip..." position="top" max-width="400">
  <ui-button slot="target" label="Max Width"></ui-button>
</app-tooltip>`;

  htmlContentCode = `<app-tooltip
  content="<strong>Bold text</strong><br><em>Italic text</em><br><code>Code snippet</code>"
  position="top"
  html="true"
  variant="light"
>
  <ui-button slot="target" label="Formatted"></ui-button>
</app-tooltip>`;

  listContentCode = `<app-tooltip
  content="<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
  position="top"
  html="true"
  variant="light"
>
  <ui-button slot="target" label="List"></ui-button>
</app-tooltip>`;

  useCasesCode = `<p>
  Welcome to our platform!
  <app-tooltip content="Click here to learn more" variant="info" position="top">
    <span slot="target" style="cursor: help; text-decoration: underline;">Details</span>
  </app-tooltip>
</p>`;

  customSlotCode = `<app-tooltip position="top" variant="light" interactive="true" max-width="350">
  <ui-button slot="target" label="User Profile"></ui-button>
  <div style="display: flex; gap: 15px; padding: 10px;">
    <img src="..." style="width: 50px; height: 50px; border-radius: 50%" />
    <div style="text-align: left">
      <strong>Praveen Kumar</strong>
      <span>Lead Architect</span>
    </div>
  </div>
</app-tooltip>`;

  customPurpleCode = `<app-tooltip
  content="Custom purple"
  position="top"
  custom-color="#9333ea"
  text-color="#ffffff"
>
  <ui-button slot="target" label="Purple"></ui-button>
</app-tooltip>`;

  customGradientCode = `<app-tooltip
  content="Gradient Background"
  position="top"
  custom-color="linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)"
  text-color="#ffffff"
>
  <ui-button slot="target" label="Gradient"></ui-button>
</app-tooltip>`;

  smallArrowCode = `<app-tooltip content="Small arrow" position="top" arrow-size="4">
  <ui-button slot="target" label="Small"></ui-button>
</app-tooltip>`;

  largeArrowCode = `<app-tooltip content="Large arrow" position="top" arrow-size="16">
  <ui-button slot="target" label="Large"></ui-button>
</app-tooltip>`;

  trackMouseCode = `<app-tooltip
  content="Tracks mouse movement!"
  position="top"
  track-mouse="true"
  variant="primary"
>
  <ui-button slot="target" label="Track Mouse"></ui-button>
</app-tooltip>`;

  startAtMouseCode = `<app-tooltip
  content="Opens at mouse position"
  position="top"
  trigger="click"
  open-at-mouse-position="true"
  variant="info"
>
  <ui-button slot="target" label="Click Position"></ui-button>
</app-tooltip>`;

  autoShiftCode = `<app-tooltip
  content="Auto-shifts and flips to stay visible"
  position="top"
  auto-shift="true"
  auto-flip="true"
  variant="primary"
>
  <ui-button slot="target" label="Auto Shift"></ui-button>
</app-tooltip>`;

  playgroundCode = `<app-tooltip
  content="Tooltip text"
  position="top"
>
  <ui-button label="Hover me"></ui-button>
</app-tooltip>`;
}


