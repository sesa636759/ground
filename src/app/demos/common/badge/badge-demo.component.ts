import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmBadgePlaygroundComponent } from '../../../playground/common/badge-playground/badge-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-badge-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmBadgePlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './badge-demo.component.html',
  styleUrl: './badge-demo.component.scss',
})
export class DmBadgeDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Usage', icon: 'tag', iconLibrary: 'lucide' },
    { id: 'colors', title: 'Colors & Gradients', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'variants', title: 'Style Variants', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'shapes', title: 'Size & Shapes', icon: 'box', iconLibrary: 'lucide' },
    { id: 'positioning', title: 'Position & Offset', icon: 'target', iconLibrary: 'lucide' },
    { id: 'animations', title: 'Animations & Glow', icon: 'zap', iconLibrary: 'lucide' },
    {
      id: 'interactive',
      title: 'Interactive & Icons',
      icon: 'mouse-pointer-2',
      iconLibrary: 'lucide',
    },
  ];

  basicCode = `<!-- Number Badge -->
<ui-badge value="4">
  <ui-icon name="bell" library="lucide" size="2em"></ui-icon>
</ui-badge>

<!-- With Max Value (overflows to 99+) -->
<ui-badge value="120" max="99">
  <ui-icon name="mail" library="lucide" size="2em"></ui-icon>
</ui-badge>

<!-- Dot Badge (no value) -->
<ui-badge dot>
  <ui-icon name="message-square" library="lucide" size="2em"></ui-icon>
</ui-badge>`;

  colorsCode = `<ui-badge color="primary" value="New"></ui-badge>
<ui-badge color="success" value="Success"></ui-badge>
<ui-badge color="warning" value="Warn"></ui-badge>
<ui-badge color="danger" value="Error"></ui-badge>
<ui-badge gradient="blue-purple" value="Pro"></ui-badge>
<ui-badge custom-color="#ff00ff" custom-text-color="#ffffff" value="Custom"></ui-badge>`;

  variantsCode = `<ui-badge variant="standard" value="Standard"></ui-badge>
<ui-badge variant="soft" color="success" value="Soft"></ui-badge>
<ui-badge variant="outlined" color="primary" value="Outlined"></ui-badge>
<ui-badge variant="bordered" color="danger" value="Bordered"></ui-badge>`;

  shapesCode = `<ui-badge size="sm" value="Small"></ui-badge>
<ui-badge size="md" value="Medium"></ui-badge>
<ui-badge size="lg" value="Large"></ui-badge>

<ui-badge shape="square" value="Square"></ui-badge>
<ui-badge shape="circle" value="9"></ui-badge>
<ui-badge shape="default" value="Pill Default"></ui-badge>`;

  positioningCode = `<!-- Top Right (Default) -->
<ui-badge value="1" position="top-right">
  <div class="box"></div>
</ui-badge>

<!-- With Custom Offset -->
<ui-badge value="2" position="top-right" [offset-x]="-10" [offset-y]="10">
  <div class="box"></div>
</ui-badge>

<!-- Bottom Left -->
<ui-badge value="3" position="bottom-left">
  <div class="box"></div>
</ui-badge>`;

  animationsCode = `<ui-badge value="Alert" animation="pulse" color="danger"></ui-badge>
<ui-badge value="New" animation="bounce" color="primary"></ui-badge>
<ui-badge value="Error" animation="shake" color="warning"></ui-badge>
<ui-badge value="Glowing" glow color="success"></ui-badge>`;

  interactiveCode = `<!-- Clickable Badge -->
<ui-badge value="Click Me" interactive (badgeClick)="handleBadgeClick()"></ui-badge>

<!-- With Close Button -->
<ui-badge value="Removable" closeable (badgeClose)="handleBadgeClose()"></ui-badge>

<!-- With Icon -->
<ui-badge value="Approved" icon="check" icon-library="lucide" color="success"></ui-badge>`;

  handleBadgeClick() {
    console.log(`Badge Clicked!`);
  }

  handleBadgeClose() {
    console.log(`Badge Closed!`);
  }
}
