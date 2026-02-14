import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarGroupPlaygroundComponent } from './components/avatar-group-playground/avatar-group-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-avatar-group-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AvatarGroupPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-group-demo.component.html',
  styleUrl: './set-avatar-group-demo.component.scss',
})
export class SetAvatarGroupDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Group', icon: '👥' },
    { id: 'sizes-small', title: 'Small Size', icon: '🔹' },
    { id: 'sizes-medium', title: 'Medium Size', icon: '🔸' },
    { id: 'sizes-large', title: 'Large Size', icon: '🔶' },
    { id: 'max-2', title: 'Max 2 Display', icon: '2️⃣' },
    { id: 'max-3', title: 'Max 3 Display', icon: '3️⃣' },
    { id: 'max-4', title: 'Max 4 Display', icon: '4️⃣' },
    { id: 'max-5', title: 'Max 5 Display', icon: '5️⃣' },
    { id: 'layout-stacked', title: 'Stacked Layout', icon: '📚' },
    { id: 'layout-spaced', title: 'Spaced Layout', icon: '↔️' },
    { id: 'shape-circle', title: 'Circle Shape', icon: '⭕' },
    { id: 'shape-square', title: 'Square Shape', icon: '⬜' },
    { id: 'shape-rounded', title: 'Rounded Square', icon: '▢' },
    { id: 'spacing-tight', title: 'Tight Spacing', icon: '📏' },
    { id: 'spacing-normal', title: 'Normal Spacing', icon: '📐' },
    { id: 'spacing-wide', title: 'Wide Spacing', icon: '↕️' },
    { id: 'border-simple', title: 'Simple Border', icon: '⭕' },
    { id: 'border-colored', title: 'Colored Border', icon: '🎨' },
    { id: 'border-thick', title: 'Thick Border', icon: '⭕' },
    { id: 'tooltips', title: 'With Tooltips', icon: '💬' },
    { id: 'status-online', title: 'Status - Online', icon: '🟢' },
    { id: 'status-mixed', title: 'Status - Mixed', icon: '🔴' },
    { id: 'clickable', title: 'Clickable Group', icon: '🖱️' },
    { id: 'animated', title: 'Animated Group', icon: '✨' },
    { id: 'hover-effects', title: 'Hover Effects', icon: '⚡' },
    { id: 'vertical', title: 'Vertical Layout', icon: '↕️' },
    { id: 'grid-2col', title: 'Grid 2 Columns', icon: '▦' },
    { id: 'grid-3col', title: 'Grid 3 Columns', icon: '⊞' },
    { id: 'grid-4col', title: 'Grid 4 Columns', icon: '▣' },
    { id: 'overflow-counter', title: 'Overflow Counter', icon: '🔢' },
    { id: 'combined-features', title: 'Combined Features', icon: '💎' },
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

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  basicCode = signal(`<app-avatar-group>
  <app-avatar name="John Doe" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="Jane Smith" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="Bob Johnson" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`);

  sizeSmallCode = signal(`<app-avatar-group size="small" max="3">
  <app-avatar name="John Doe" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="Jane Smith" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="Bob Johnson" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="Alice Williams" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  sizeMediumCode = signal(`<app-avatar-group size="medium" max="3">
  <app-avatar name="John Doe" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="Jane Smith" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="Bob Johnson" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="Alice Williams" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  sizeLargeCode = signal(`<app-avatar-group size="large" max="3">
  <app-avatar name="John Doe" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="Jane Smith" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="Bob Johnson" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="Alice Williams" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  max2Code = signal(`<app-avatar-group max="2">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
  <app-avatar name="User 5" image="https://i.pravatar.cc/150?img=5"></app-avatar>
  <app-avatar name="User 6" image="https://i.pravatar.cc/150?img=6"></app-avatar>
</app-avatar-group>`);

  max3Code = signal(`<app-avatar-group max="3">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
  <app-avatar name="User 5" image="https://i.pravatar.cc/150?img=5"></app-avatar>
  <app-avatar name="User 6" image="https://i.pravatar.cc/150?img=6"></app-avatar>
</app-avatar-group>`);

  max4Code = signal(`<app-avatar-group max="4">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
  <app-avatar name="User 5" image="https://i.pravatar.cc/150?img=5"></app-avatar>
  <app-avatar name="User 6" image="https://i.pravatar.cc/150?img=6"></app-avatar>
</app-avatar-group>`);

  max5Code = signal(`<app-avatar-group max="5">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
  <app-avatar name="User 5" image="https://i.pravatar.cc/150?img=5"></app-avatar>
  <app-avatar name="User 6" image="https://i.pravatar.cc/150?img=6"></app-avatar>
  <app-avatar name="User 7" image="https://i.pravatar.cc/150?img=7"></app-avatar>
  <app-avatar name="User 8" image="https://i.pravatar.cc/150?img=8"></app-avatar>
</app-avatar-group>`);

  layoutStackedCode = signal(`<app-avatar-group layout="stacked" max="3">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  layoutSpacedCode = signal(`<app-avatar-group layout="spaced" max="3">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  shapeCircleCode = signal(`<app-avatar-group shape="circle" max="3">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  shapeSquareCode = signal(`<app-avatar-group shape="square" max="3">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  shapeRoundedCode = signal(`<app-avatar-group shape="rounded" max="3">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  spacingTightCode = signal(`<app-avatar-group spacing="2">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  spacingNormalCode = signal(`<app-avatar-group spacing="8">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  spacingWideCode = signal(`<app-avatar-group spacing="16">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  borderSimpleCode = signal(`<app-avatar-group border="1px solid #e0e0e0">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`);

  borderColoredCode = signal(`<app-avatar-group border="2px solid #3b82f6">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`);

  borderThickCode = signal(`<app-avatar-group border="3px solid #10b981">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`);

  tooltipsCode = signal(`<app-avatar-group show-tooltips>
  <app-avatar name="John Doe" image="https://i.pravatar.cc/150?img=1" tooltip="Software Engineer"></app-avatar>
  <app-avatar name="Jane Smith" image="https://i.pravatar.cc/150?img=2" tooltip="Product Manager"></app-avatar>
  <app-avatar name="Bob Johnson" image="https://i.pravatar.cc/150?img=3" tooltip="Designer"></app-avatar>
</app-avatar-group>`);

  statusOnlineCode = signal(`<app-avatar-group>
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1" status="online"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2" status="online"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3" status="online"></app-avatar>
</app-avatar-group>`);

  statusMixedCode = signal(`<app-avatar-group>
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1" status="online"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2" status="away"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3" status="busy"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4" status="offline"></app-avatar>
</app-avatar-group>`);

  clickableCode = signal(`<app-avatar-group clickable (click)="handleGroupClick($event)">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`);

  animatedCode = signal(`<app-avatar-group animated>
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`);

  hoverEffectsCode = signal(`<app-avatar-group hover-effect="zoom">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`);

  verticalCode = signal(`<app-avatar-group direction="vertical">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
</app-avatar-group>`);

  grid2colCode = signal(`<app-avatar-group layout="grid" columns="2">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
</app-avatar-group>`);

  grid3colCode = signal(`<app-avatar-group layout="grid" columns="3">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
  <app-avatar name="User 5" image="https://i.pravatar.cc/150?img=5"></app-avatar>
  <app-avatar name="User 6" image="https://i.pravatar.cc/150?img=6"></app-avatar>
</app-avatar-group>`);

  grid4colCode = signal(`<app-avatar-group layout="grid" columns="4">
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
  <app-avatar name="User 5" image="https://i.pravatar.cc/150?img=5"></app-avatar>
  <app-avatar name="User 6" image="https://i.pravatar.cc/150?img=6"></app-avatar>
  <app-avatar name="User 7" image="https://i.pravatar.cc/150?img=7"></app-avatar>
  <app-avatar name="User 8" image="https://i.pravatar.cc/150?img=8"></app-avatar>
</app-avatar-group>`);

  overflowCounterCode = signal(`<app-avatar-group max="3" show-overflow-counter>
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4"></app-avatar>
  <app-avatar name="User 5" image="https://i.pravatar.cc/150?img=5"></app-avatar>
  <app-avatar name="User 6" image="https://i.pravatar.cc/150?img=6"></app-avatar>
  <app-avatar name="User 7" image="https://i.pravatar.cc/150?img=7"></app-avatar>
  <app-avatar name="User 8" image="https://i.pravatar.cc/150?img=8"></app-avatar>
</app-avatar-group>`);

  combinedFeaturesCode = signal(`<app-avatar-group
  size="large"
  max="4"
  layout="stacked"
  shape="circle"
  show-tooltips
  animated
  hover-effect="zoom"
  clickable>
  <app-avatar name="User 1" image="https://i.pravatar.cc/150?img=1" status="online" tooltip="Lead Developer"></app-avatar>
  <app-avatar name="User 2" image="https://i.pravatar.cc/150?img=2" status="away" tooltip="Product Manager"></app-avatar>
  <app-avatar name="User 3" image="https://i.pravatar.cc/150?img=3" status="busy" tooltip="UX Designer"></app-avatar>
  <app-avatar name="User 4" image="https://i.pravatar.cc/150?img=4" status="online" tooltip="Backend Engineer"></app-avatar>
  <app-avatar name="User 5" image="https://i.pravatar.cc/150?img=5" status="online" tooltip="Frontend Engineer"></app-avatar>
  <app-avatar name="User 6" image="https://i.pravatar.cc/150?img=6" status="offline" tooltip="QA Engineer"></app-avatar>
</app-avatar-group>`);
}
