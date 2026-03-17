import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmPopoverPlaygroundComponent } from '../../../playground/common/popover-playground/popover-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';

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
    { id: 'triggers', title: 'Triggers', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'placements', title: 'Placements', icon: 'map-pin', iconLibrary: 'lucide' },
    { id: 'styles', title: 'Styles & Themes', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'rich-content', title: 'Rich Content', icon: 'file-text', iconLibrary: 'lucide' },
  ];

  triggersCode = `<!-- Click trigger (default) -->
<dui-popover trigger="click" heading="Click Trigger" content="Stays open until clicked outside">
  <dui-button label="Click Me"></dui-button>
</dui-popover>

<!-- Hover trigger -->
<dui-popover trigger="hover" heading="Hover Trigger" content="Visible on mouse enter">
  <dui-button label="Hover Me"></dui-button>
</dui-popover>

<!-- Focus trigger -->
<dui-popover trigger="focus" heading="Focus Trigger" content="Visible on focus">
  <dui-input type="text" placeholder="Focus Me" ></dui-input>
</dui-popover>`;

  placementsCode = `<dui-popover placement="top"    content="Top Popover">...<dui-popover>
<dui-popover placement="bottom" content="Bottom Popover">...<dui-popover>
<dui-popover placement="left"   content="Left Popover">...<dui-popover>
<dui-popover placement="right"  content="Right Popover">...<dui-popover>`;

  stylesCode = `<dui-popover variant="light" heading="Light Theme" content="Clean light style">...</dui-popover>
<dui-popover variant="dark"  heading="Dark Theme"  content="Rich dark style">...</dui-popover>
<dui-popover backdrop heading="With Backdrop" content="Dims background">...</dui-popover>
<dui-popover show-close-button heading="Close Button" content="Has dismiss X">...</dui-popover>`;

  richContentCode = `<dui-popover heading="User Profile" interactive>
  <dui-button label="View Profile"></dui-button>
  <div slot="content" style="display:flex;gap:12px;align-items:center;padding:4px">
    <img src="..." style="width:40px;height:40px;border-radius:50%" />
    <div>
      <strong>Praveen Kumar</strong>
      <span style="display:block;font-size:12px;color:#6b7280">Lead Architect</span>
    </div>
  </div>
</dui-popover>`;
}
