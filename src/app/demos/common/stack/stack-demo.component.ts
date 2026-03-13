import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmStackPlaygroundComponent } from '../../../playground/common/stack-playground/stack-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-stack-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmStackPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stack-demo.component.html',
  styleUrl: './stack-demo.component.scss',
})
export class DmStackDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'horizontal', title: 'Horizontal Flow', icon: 'arrow-right', iconLibrary: 'lucide' },
    { id: 'vertical', title: 'Vertical Stack', icon: 'arrow-down', iconLibrary: 'lucide' },
    { id: 'wrap', title: 'Flow Wrapping', icon: 'wrap-text', iconLibrary: 'lucide' },
    { id: 'spacing', title: 'Variable Spacing', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'alignment', title: 'Align & Justify', icon: 'align-center', iconLibrary: 'lucide' },
    { id: 'dividers', title: 'Dividers & Borders', icon: 'separator-horizontal', iconLibrary: 'lucide' },
    { id: 'overlap', title: 'Overlapping Items', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'avatars', title: 'Avatar Facepile', icon: 'users', iconLibrary: 'lucide' },
    { id: 'max', title: 'Overflow (+N)', icon: 'plus-circle', iconLibrary: 'lucide' },
  ];

  boxes = [1, 2, 3, 4, 5];
  avatars = ['JD', 'AS', 'MK', 'TH', 'BW', 'CL'];

  directionCode = `<ui-stack direction="horizontal">...</ui-stack>
<ui-stack direction="vertical">...</ui-stack>`;
  wrapCode = `<ui-stack wrap="wrap" spacing="12px">...</ui-stack>`;
  dividersCode = `<ui-stack show-dividers divider-type="dashed" spacing="24px">...</ui-stack>`;
  overlapCode = `<ui-stack overlap spacing="-15px">...</ui-stack>`;
  maxCode = `<ui-stack [max]="4">...</ui-stack>`;
}
