import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarGroupPlaygroundComponent } from './components/avatar-group-playground/avatar-group-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-set-avatar-group-demo',
  standalone: true,
  imports: [
    CommonModule,
    AvatarGroupPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-group-demo.component.html',
  styleUrl: './set-avatar-group-demo.component.scss',
})
export class SetAvatarGroupDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'basic', title: 'Basic Group', icon: '👥' },
    { id: 'sizes', title: 'Sizes', icon: '📏' },
    { id: 'max-display', title: 'Max Display', icon: '🔢' },
    { id: 'layouts', title: 'Layouts', icon: '📐' },
    { id: 'shapes', title: 'Shapes', icon: '⬜' },
    { id: 'spacing', title: 'Spacing', icon: '📏' },
    { id: 'borders', title: 'Borders', icon: '🎨' },
    { id: 'tooltips', title: 'Tooltips', icon: '💬' },
    { id: 'status', title: 'Status', icon: '🟢' },
    { id: 'interaction', title: 'Interaction', icon: '🖱️' },
    { id: 'grid', title: 'Grid Layout', icon: '⊞' },
    { id: 'overflow', title: 'Overflow', icon: '🔢' },
    { id: 'combined', title: 'Combined', icon: '💎' },
  ];

  users = [
    { name: 'John Doe', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bob Johnson', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Alice Williams', image: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Charlie Brown', image: 'https://i.pravatar.cc/150?img=5' },
    { name: 'David Miller', image: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Emma Davis', image: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Frank Wilson', image: 'https://i.pravatar.cc/150?img=8' },
  ];

  basicCode = `<app-avatar-group>
  <app-avatar name="John Doe" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="Jane Smith" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="Bob Johnson" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`;

  sizesCode = `<app-avatar-group size="small" max="3">...</app-avatar-group>
<app-avatar-group size="medium" max="3">...</app-avatar-group>
<app-avatar-group size="large" max="3">...</app-avatar-group>`;

  maxDisplayCode = `<app-avatar-group max="2">...</app-avatar-group>
<app-avatar-group max="3">...</app-avatar-group>
<app-avatar-group max="4">...</app-avatar-group>
<app-avatar-group max="5">...</app-avatar-group>`;

  layoutsCode = `<app-avatar-group layout="stacked">...</app-avatar-group>
<app-avatar-group layout="spaced">...</app-avatar-group>`;

  shapesCode = `<app-avatar-group shape="circle">...</app-avatar-group>
<app-avatar-group shape="square">...</app-avatar-group>
<app-avatar-group shape="rounded">...</app-avatar-group>`;

  spacingCode = `<app-avatar-group spacing="2">...</app-avatar-group>
<app-avatar-group spacing="8">...</app-avatar-group>
<app-avatar-group spacing="16">...</app-avatar-group>`;

  bordersCode = `<app-avatar-group border="1px solid #e0e0e0">...</app-avatar-group>
<app-avatar-group border="2px solid #3b82f6">...</app-avatar-group>
<app-avatar-group border="3px solid #10b981">...</app-avatar-group>`;

  tooltipsCode = `<app-avatar-group show-tooltips>
  <app-avatar name="John Doe" tooltip="Software Engineer"></app-avatar>
</app-avatar-group>`;

  statusCode = `<app-avatar-group>
  <app-avatar name="User 1" status="online"></app-avatar>
  <app-avatar name="User 2" status="away"></app-avatar>
</app-avatar-group>`;

  interactionCode = `<app-avatar-group clickable animated hover-effect="zoom">
  <app-avatar name="User 1"></app-avatar>
</app-avatar-group>`;

  gridCode = `<app-avatar-group layout="grid" columns="3">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  ...
</app-avatar-group>`;

  overflowCode = `<app-avatar-group max="3" show-overflow-counter>
  <app-avatar *ngFor="let user of users" ...></app-avatar>
</app-avatar-group>`;

  combinedCode = `<app-avatar-group
  size="large"
  max="4"
  layout="stacked"
  shape="circle"
  show-tooltips
  animated
  hover-effect="zoom"
  clickable>
  <app-avatar name="User 1" status="online" tooltip="Lead Developer"></app-avatar>
  ...
</app-avatar-group>`;

  ngOnInit() {}
}
