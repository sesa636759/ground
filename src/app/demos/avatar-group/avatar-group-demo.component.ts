import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DmAvatarGroupPlaygroundComponent } from '../../playground/common/avatar-group-playground/avatar-group-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'dm-avatar-group-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DmAvatarGroupPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-group-demo.component.html',
  styleUrl: './avatar-group-demo.component.scss',
})
export class DmAvatarGroupDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'layout', title: 'Layouts', icon: 'ðŸ“Š', color: '#10b981' },
    { id: 'interactive', title: 'Interactive', icon: 'âœ¨', color: '#f59e0b' },
    { id: 'sizes', title: 'Sizes', icon: 'ðŸ“', color: '#3b82f6' },
  ];

  playgroundCode = `<ui-avatar-group [max]="3">
  <ui-avatar label="JD"></ui-avatar>
  <ui-avatar label="AB"></ui-avatar>
  <ui-avatar label="CD"></ui-avatar>
  <ui-avatar label="EF"></ui-avatar>
</ui-avatar-group>`;

  sizesCode = `<!-- Small Group -->
<ui-avatar-group size="small">
  <ui-avatar label="A"></ui-avatar>
  <ui-avatar label="B"></ui-avatar>
</ui-avatar-group>

<!-- Large Group -->
<ui-avatar-group size="large">
  <ui-avatar label="X"></ui-avatar>
  <ui-avatar label="Y"></ui-avatar>
</ui-avatar-group>`;

  layoutCode = `<!-- Stack Layout (Default) -->
<ui-avatar-group layout="stack" overlap="-8">
  <ui-avatar label="1"></ui-avatar>
  <ui-avatar label="2"></ui-avatar>
  <ui-avatar label="3"></ui-avatar>
</ui-avatar-group>

<!-- Grid Layout -->
<ui-avatar-group layout="grid" spacing="12">
  <ui-avatar label="1"></ui-avatar>
  <ui-avatar label="2"></ui-avatar>
  <ui-avatar label="3"></ui-avatar>
</ui-avatar-group>`;

  interactiveCode = `<!-- Animated Expansion -->
<ui-avatar-group animated max="3">
  <ui-avatar label="AB"></ui-avatar>
  <ui-avatar label="CD"></ui-avatar>
  <ui-avatar label="EF"></ui-avatar>
  <ui-avatar label="GH"></ui-avatar>
  <ui-avatar label="IJ"></ui-avatar>
</ui-avatar-group>

<!-- Clickable Popover on Overflow -->
<ui-avatar-group enable-popover max="3">
  <ui-avatar label="AB"></ui-avatar>
  <ui-avatar label="CD"></ui-avatar>
  <ui-avatar label="EF"></ui-avatar>
  <ui-avatar label="GH"></ui-avatar>
  <ui-avatar label="IJ"></ui-avatar>
</ui-avatar-group>`;
}


