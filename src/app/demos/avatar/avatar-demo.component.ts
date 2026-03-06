import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/demo-playground/playground.constants';
import { DmAvatarPlaygroundComponent } from '../../playground/common/avatar-playground/avatar-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'dm-avatar-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmAvatarPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-demo.component.html',
  styleUrl: './avatar-demo.component.scss',
})
export class DmAvatarDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'shapes', title: 'Shapes', icon: 'ðŸ“', color: '#3b82f6' },
    { id: 'types', title: 'Types', icon: 'ðŸ‘¤', color: '#10b981' },
    { id: 'status', title: 'Status & Badges', icon: 'ðŸ“', color: '#f59e0b' },
    { id: 'animations', title: 'Animations & Stories', icon: 'âœ¨', color: '#14b8a6' },
    { id: 'avatar-group', title: 'Groups', icon: 'ðŸ‘¥', color: '#ec4899' },
  ];

  playgroundCode = `<ui-avatar name="John Doe" status="online" size="64px"></ui-avatar>`;

  shapesCode = `<!-- Core Shapes -->
<ui-avatar name="Circle" shape="circle"></ui-avatar>
<ui-avatar name="Square" shape="square"></ui-avatar>
<ui-avatar name="Hexagon" shape="hexagon"></ui-avatar>
<ui-avatar name="Squircle" shape="squircle"></ui-avatar>`;

  typesCode = `<!-- Content Types -->
<ui-avatar src="https://i.pravatar.cc/150?u=1" name="User Image"></ui-avatar>
<ui-avatar name="User Initials"></ui-avatar>
<ui-avatar content="JD" name="Custom Text"></ui-avatar>
<ui-avatar icon="ðŸ‘¤"></ui-avatar>
<ui-avatar icon="fa fa-user"></ui-avatar>`;

  statusCode = `<!-- Status Indicators -->
<ui-avatar name="Online" status="online" status-pulse="true"></ui-avatar>
<ui-avatar name="Away" status="away"></ui-avatar>
<ui-avatar name="Busy" status="busy"></ui-avatar>
<ui-avatar name="Offline" status="offline"></ui-avatar>

<!-- Badges -->
<ui-avatar name="Notifications" badge="5" badge-color="danger" badge-position="top-right"></ui-avatar>
<ui-avatar name="Verified" badge="dot" badge-color="#3b82f6" badge-position="bottom-left"></ui-avatar>

<ui-avatar name="Verified User" verified="true"></ui-avatar>`;

  animationsCode = `<!-- Story Rings -->
<ui-avatar name="New Story" story="true"></ui-avatar>
<ui-avatar name="Seen Story" story="true" story-seen="true"></ui-avatar>

<!-- Animations -->
<ui-avatar name="Pulse" animation="pulse"></ui-avatar>
<ui-avatar name="Ring" animation="ring"></ui-avatar>
<ui-avatar name="Glow" animation="glow"></ui-avatar>

<!-- Active Speaker -->
<ui-avatar name="Speaker" active-speaker="true"></ui-avatar>`;

  groupCode = `<ui-avatar-group max="4">
  <ui-avatar src="https://i.pravatar.cc/150?u=a" name="Member A"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?u=b" name="Member B"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?u=c" name="Member C"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?u=d" name="Member D"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?u=e" name="Member E"></ui-avatar>
</ui-avatar-group>`;
}
