import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmBadgePlaygroundComponent } from '../../../playground/common/badge-playground/badge-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

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
<dui-badge value="4">
  <dui-icon name="bell" library="lucide" size="2em"></dui-icon>
</dui-badge>

<!-- With Max Value (overflows to 99+) -->
<dui-badge value="120" max="99">
  <dui-icon name="mail" library="lucide" size="2em"></dui-icon>
</dui-badge>

<!-- Dot Badge (no value) -->
<dui-badge dot>
  <dui-icon name="message-square" library="lucide" size="2em"></dui-icon>
</dui-badge>`;

  colorsCode = `<dui-badge color="primary" value="New"></dui-badge>
<dui-badge color="success" value="Success"></dui-badge>
<dui-badge color="warning" value="Warn"></dui-badge>
<dui-badge color="danger" value="Error"></dui-badge>
<dui-badge gradient="blue-purple" value="Pro"></dui-badge>
<dui-badge custom-color="#ff00ff" custom-text-color="#ffffff" value="Custom"></dui-badge>`;

  variantsCode = `<dui-badge variant="standard" value="Standard"></dui-badge>
<dui-badge variant="soft" color="success" value="Soft"></dui-badge>
<dui-badge variant="outlined" color="primary" value="Outlined"></dui-badge>
<dui-badge variant="bordered" color="danger" value="Bordered"></dui-badge>`;

  shapesCode = `<dui-badge size="sm" value="Small"></dui-badge>
<dui-badge size="md" value="Medium"></dui-badge>
<dui-badge size="lg" value="Large"></dui-badge>

<dui-badge shape="square" value="Square"></dui-badge>
<dui-badge shape="circle" value="9"></dui-badge>
<dui-badge shape="default" value="Pill Default"></dui-badge>`;

  positioningCode = `<!-- Top Right (Default) -->
<dui-badge value="1" position="top-right">
  <div class="box"></div>
</dui-badge>

<!-- With Custom Offset -->
<dui-badge value="2" position="top-right" [offset-x]="-10" [offset-y]="10">
  <div class="box"></div>
</dui-badge>

<!-- Bottom Left -->
<dui-badge value="3" position="bottom-left">
  <div class="box"></div>
</dui-badge>`;

  animationsCode = `<dui-badge value="Alert" animation="pulse" color="danger"></dui-badge>
<dui-badge value="New" animation="bounce" color="primary"></dui-badge>
<dui-badge value="Error" animation="shake" color="warning"></dui-badge>
<dui-badge value="Glowing" glow color="success"></dui-badge>`;

  interactiveCode = `<!-- Clickable Badge -->
<dui-badge value="Click Me" interactive (badgeClick)="handleBadgeClick()"></dui-badge>

<!-- With Close Button -->
<dui-badge value="Removable" closeable (badgeClose)="handleBadgeClose()"></dui-badge>

<!-- With Icon -->
<dui-badge value="Approved" icon="check" icon-library="lucide" color="success"></dui-badge>`;

  handleBadgeClick() {
    console.log(`Badge Clicked!`);
  }

  handleBadgeClose() {
    console.log(`Badge Closed!`);
  }
}
