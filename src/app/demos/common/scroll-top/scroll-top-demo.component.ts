import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmScrollTopPlaygroundComponent } from '../../../playground/common/scroll-top-playground/scroll-top-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'dm-scroll-top-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmScrollTopPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scroll-top-demo.component.html',
  styleUrl: './scroll-top-demo.component.scss',
})
export class DmScrollTopDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'shapes', title: 'Shapes & Icons', icon: 'square-arrow-up', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<dui-scroll-top threshold="400" icon="↑"></dui-scroll-top>`;

  shapesCode = `<!-- Square Shape -->
<dui-scroll-top shape="square" icon="TOP"></dui-scroll-top>

<!-- Circle with Custom Icon -->
<dui-scroll-top shape="circle" icon="🚀"></dui-scroll-top>`;
}
