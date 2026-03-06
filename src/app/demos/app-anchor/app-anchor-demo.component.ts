import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { AnchorPlaygroundComponent } from './components/anchor-playground/anchor-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-app-anchor-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    AnchorPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-anchor-demo.component.html',
  styleUrl: './app-anchor-demo.component.scss',
})
export class AppAnchorDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'types', title: 'Marker Styles', icon: '📝', color: '#3b82f6' },
    { id: 'orientation', title: 'Orientation', icon: '↔️', color: '#10b981' },
    { id: 'auto-gen', title: 'Headings Auto-Detection', icon: '⚙️', color: '#f59e0b' },
  ];

  links = [
    { id: 'intro', label: 'Introduction', target: 'intro-section' },
    { id: 'usage', label: 'Quick Usage', target: 'usage-section' },
    { id: 'props', label: 'Properties', target: 'props-section' },
  ];

  playgroundCode = `<ui-anchor
  orientation="vertical"
  type="line"
  [links]="linksJson"
></ui-anchor>`;

  typesCode = `<ui-anchor type="line" [links]="links"></ui-anchor>
<ui-anchor type="dot" [links]="links"></ui-anchor>`;

  orientationCode = `<ui-anchor orientation="horizontal" [links]="links"></ui-anchor>
<ui-anchor orientation="vertical" [links]="links"></ui-anchor>`;

  autoGenCode = `<ui-anchor auto-gen-container="#auto-gen-box" show-progress></ui-anchor>`;
}
