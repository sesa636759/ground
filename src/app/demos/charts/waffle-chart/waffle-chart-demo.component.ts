import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DmWaffleChartPlaygroundComponent } from '../../../playground/common/waffle-chart-playground/waffle-chart-playground.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-waffle-chart-demo',
  standalone: true,
  imports: [
    ExampleSectionComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DmWaffleChartPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './waffle-chart-demo.component.html',
  styleUrl: './waffle-chart-demo.component.scss',
})
export class DmWaffleChartDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic', icon: 'grid-3x3', iconLibrary: 'lucide' },
    { id: 'colors', title: 'Colors', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'grid-sizes', title: 'Grid Sizes', icon: 'ruler', iconLibrary: 'lucide' },
  ];

  basicCode = `<chart-waffle
  value="72"
  total="100"
  chart-title="Task Completion"
  fill-color="#6366f1"
></chart-waffle>`;

  colorsCode = `<!-- Indigo -->
<chart-waffle value="72" total="100" fill-color="#6366f1" chart-title="Engineering"></chart-waffle>

<!-- Amber -->
<chart-waffle value="55" total="100" fill-color="#f59e0b" chart-title="Marketing"></chart-waffle>

<!-- Emerald -->
<chart-waffle value="88" total="100" fill-color="#10b981" chart-title="Operations"></chart-waffle>

<!-- Rose -->
<chart-waffle value="40" total="100" fill-color="#f43f5e" chart-title="HR"></chart-waffle>`;

  gridCode = `<!-- Default 10x10 -->
<chart-waffle value="65" total="100" chart-title="Default (10x10)"></chart-waffle>

<!-- Compact 5x10 -->
<chart-waffle value="65" total="100" rows="5" columns="10" cell-size="22"
  chart-title="Compact (5x10)"></chart-waffle>

<!-- Wide 5x20 -->
<chart-waffle value="65" total="100" rows="5" columns="20" cell-size="18"
  chart-title="Wide (5x20)"></chart-waffle>`;
}
