import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { BadgePlaygroundComponent } from './components/badge-playground/badge-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-badge-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    BadgePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './badge-demo.component.html',
  styleUrl: './badge-demo.component.scss',
})
export class DmBadgeDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'colors', title: 'Colors', icon: 'ðŸŒˆ', color: '#3b82f6' },
    { id: 'styles', title: 'Styles', icon: 'ðŸŽ¨', color: '#10b981' },
    { id: 'positions', title: 'Positions', icon: 'ðŸ“', color: '#f59e0b' },
    { id: 'special', title: 'Special Features', icon: 'âœ¨', color: '#ef4444' },
  ];

  playgroundCode = `<ui-badge value="5" color="danger">
  <div class="target">Icon</div>
</ui-badge>`;

  colorsCode = `<ui-badge value="1" color="primary">...</ui-badge>
<ui-badge value="2" color="success">...</ui-badge>
<ui-badge value="3" color="warning">...</ui-badge>
<ui-badge value="4" color="danger">...</ui-badge>
<ui-badge value="5" color="info">...</ui-badge>`;

  stylesCode = `<ui-badge value="New" variant="standard"></ui-badge>
<ui-badge value="Hot" variant="soft"></ui-badge>
<ui-badge value="99" variant="outlined"></ui-badge>
<ui-badge dot color="success"></ui-badge>`;

  positionsCode = `<ui-badge position="top-right">...</ui-badge>
<ui-badge position="top-left">...</ui-badge>
<ui-badge position="bottom-right">...</ui-badge>
<ui-badge position="bottom-left">...</ui-badge>`;

  specialCode = `<ui-badge value="100" max="99"></ui-badge>
<ui-badge glow animation="pulse" value="!"></ui-badge>
<ui-badge icon="â­" value="PRO"></ui-badge>`;
}

