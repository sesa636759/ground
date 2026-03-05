import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopoverPlaygroundComponent } from './components/popover-playground/popover-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'app-app-popover-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PopoverPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-popover-demo.component.html',
  styleUrl: './app-popover-demo.component.scss',
})
export class AppPopoverDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'triggers', title: 'Triggers', icon: '⚡' },
    { id: 'placements', title: 'Placements', icon: '📍' },
    { id: 'styles', title: 'Styles & Themes', icon: '🎨' },
    { id: 'rich-content', title: 'Rich Content', icon: '📝' },
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
