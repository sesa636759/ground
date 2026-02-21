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
  variants = [
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

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  get exampleVariants() {
    return this.variants;
  }

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

  sizeSmallCode = `<app-avatar-group size="small" [max]="3"> ... </app-avatar-group>`;
  sizeMediumCode = `<app-avatar-group size="medium" [max]="3"> ... </app-avatar-group>`;
  sizeLargeCode = `<app-avatar-group size="large" [max]="3"> ... </app-avatar-group>`;

  max2Code = `<app-avatar-group [max]="2"> ... </app-avatar-group>`;
  max3Code = `<app-avatar-group [max]="3"> ... </app-avatar-group>`;
  max4Code = `<app-avatar-group [max]="4"> ... </app-avatar-group>`;
  max5Code = `<app-avatar-group [max]="5"> ... </app-avatar-group>`;

  layoutStackedCode = `<app-avatar-group layout="stacked" [max]="3"> ... </app-avatar-group>`;
  layoutSpacedCode = `<app-avatar-group layout="spaced" [max]="3"> ... </app-avatar-group>`;

  shapeCircleCode = `<app-avatar-group shape="circle" [max]="3"> ... </app-avatar-group>`;
  shapeSquareCode = `<app-avatar-group shape="square" [max]="3"> ... </app-avatar-group>`;
  shapeRoundedCode = `<app-avatar-group shape="rounded" [max]="3"> ... </app-avatar-group>`;

  spacingTightCode = `<app-avatar-group spacing="2"> ... </app-avatar-group>`;
  spacingNormalCode = `<app-avatar-group spacing="8"> ... </app-avatar-group>`;
  spacingWideCode = `<app-avatar-group spacing="16"> ... </app-avatar-group>`;

  borderSimpleCode = `<app-avatar-group border="1px solid #e0e0e0"> ... </app-avatar-group>`;
  borderColoredCode = `<app-avatar-group border="2px solid #3b82f6"> ... </app-avatar-group>`;
  borderThickCode = `<app-avatar-group border="3px solid #10b981"> ... </app-avatar-group>`;

  tooltipsCode = `<app-avatar-group [showTooltips]="true">
  <app-avatar name="John Doe" tooltip="Software Engineer"></app-avatar>
  ...
</app-avatar-group>`;

  statusOnlineCode = `<app-avatar-group>
  <app-avatar name="User 1" status="online"></app-avatar>
  ...
</app-avatar-group>`;

  statusMixedCode = `<app-avatar-group>
  <app-avatar name="User 1" status="online"></app-avatar>
  <app-avatar name="User 2" status="away"></app-avatar>
  ...
</app-avatar-group>`;

  clickableCode = `<app-avatar-group [clickable]="true"> ... </app-avatar-group>`;
  animatedCode = `<app-avatar-group [animated]="true"> ... </app-avatar-group>`;
  hoverEffectsCode = `<app-avatar-group hover-effect="zoom"> ... </app-avatar-group>`;

  verticalCode = `<app-avatar-group direction="vertical"> ... </app-avatar-group>`;
  grid2colCode = `<app-avatar-group layout="grid" columns="2"> ... </app-avatar-group>`;
  grid3colCode = `<app-avatar-group layout="grid" columns="3"> ... </app-avatar-group>`;
  grid4colCode = `<app-avatar-group layout="grid" columns="4"> ... </app-avatar-group>`;

  overflowCounterCode = `<app-avatar-group [max]="3" show-overflow-counter="true"> ... </app-avatar-group>`;

  combinedFeaturesCode = `<app-avatar-group
  size="large"
  [max]="4"
  layout="stacked"
  shape="circle"
  [showTooltips]="true"
  [animated]="true"
  hover-effect="zoom"
  [clickable]="true"
>
  ...
</app-avatar-group>`;

  ngOnInit() {}
}
