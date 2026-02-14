import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { BadgePlaygroundComponent } from './components/badge-playground/badge-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-app-badge-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    BadgePlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-badge-demo.component.html',
  styleUrl: './app-badge-demo.component.scss',
})
export class AppBadgeDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'colors', title: 'Colors', icon: '🌈' },
    { id: 'styles', title: 'Styles', icon: '🎨' },
    { id: 'positions', title: 'Positions', icon: '📍' },
    { id: 'special', title: 'Special Features', icon: '✨' },
  ];

  ngOnInit() {}

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
<ui-badge icon="⭐" value="PRO"></ui-badge>`;
}
