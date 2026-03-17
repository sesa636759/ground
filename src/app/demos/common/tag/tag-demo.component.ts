import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmTagPlaygroundComponent } from '../../../playground/common/tag-playground/tag-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-tag-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTagPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag-demo.component.html',
  styleUrl: './tag-demo.component.scss',
})
export class DmTagDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'severities', title: 'Severities', icon: '🚨', color: '#3b82f6' },
    { id: 'styles', title: 'Styles & Sizes', icon: '🎨', color: '#10b981' },
    { id: 'visuals', title: 'Visual Enhancements', icon: '✨', color: '#f59e0b' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  playgroundCode = `<dui-tag value="New" severity="info" rounded></dui-tag>`;

  severitiesCode = `<dui-tag severity="primary" value="Primary"></dui-tag>
<dui-tag severity="success" value="Success"></dui-tag>
<dui-tag severity="info" value="Info"></dui-tag>
<dui-tag severity="warning" value="Warning"></dui-tag>
<dui-tag severity="danger" value="Danger"></dui-tag>`;

  stylesCode = `<dui-tag value="Square" [rounded]="false"></dui-tag>
<dui-tag value="Rounded" rounded></dui-tag>
<dui-tag value="Small" size="small"></dui-tag>
<dui-tag value="Large" size="large"></dui-tag>`;

  visualsCode = `<dui-tag icon="⭐" value="Starred"></dui-tag>
<dui-tag value="Tag with Counter" counter="5"></dui-tag>
<dui-tag value="Removable" removable></dui-tag>`;

  ngOnInit() {}
}
