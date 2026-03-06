import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { DmPopoverPlaygroundComponent } from '../../playground/common/popover-playground/popover-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'dm-popover-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmPopoverPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './popover-demo.component.html',
  styleUrl: './popover-demo.component.scss',
})
export class DmPopoverDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®' },
    { id: 'triggers', title: 'Triggers', icon: 'âš¡' },
    { id: 'placements', title: 'Placements', icon: 'ðŸ“' },
    { id: 'styles', title: 'Styles & Themes', icon: 'ðŸŽ¨' },
    { id: 'rich-content', title: 'Rich Content', icon: 'ðŸ“' },
  ];

  triggersCode = `<!-- Click trigger (default) -->
<ui-popover trigger="click" heading="Click Trigger" content="Stays open until clicked outside">
  <ui-button label="Click Me"></ui-button>
</ui-popover>

<!-- Hover trigger -->
<ui-popover trigger="hover" heading="Hover Trigger" content="Visible on mouse enter">
  <ui-button label="Hover Me"></ui-button>
</ui-popover>

<!-- Focus trigger -->
<ui-popover trigger="focus" heading="Focus Trigger" content="Visible on focus">
  <ui-input type="text" placeholder="Focus Me" ></ui-input>
</ui-popover>`;

  placementsCode = `<ui-popover placement="top"    content="Top Popover">...<ui-popover>
<ui-popover placement="bottom" content="Bottom Popover">...<ui-popover>
<ui-popover placement="left"   content="Left Popover">...<ui-popover>
<ui-popover placement="right"  content="Right Popover">...<ui-popover>`;

  stylesCode = `<ui-popover variant="light" heading="Light Theme" content="Clean light style">...</ui-popover>
<ui-popover variant="dark"  heading="Dark Theme"  content="Rich dark style">...</ui-popover>
<ui-popover backdrop heading="With Backdrop" content="Dims background">...</ui-popover>
<ui-popover show-close-button heading="Close Button" content="Has dismiss X">...</ui-popover>`;

  richContentCode = `<ui-popover heading="User Profile" interactive>
  <ui-button label="View Profile"></ui-button>
  <div slot="content" style="display:flex;gap:12px;align-items:center;padding:4px">
    <img src="..." style="width:40px;height:40px;border-radius:50%" />
    <div>
      <strong>Praveen Kumar</strong>
      <span style="display:block;font-size:12px;color:#6b7280">Lead Architect</span>
    </div>
  </div>
</ui-popover>`;
}
