import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarPlaygroundComponent } from './components/avatar-playground/avatar-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-app-avatar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, AvatarPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-avatar-demo.component.html',
  styleUrl: './app-avatar-demo.component.scss',
})
export class AppAvatarDemoComponent {
  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  variants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'shapes', title: 'Shapes', icon: '📐', color: '#3b82f6' },
    { id: 'types', title: 'Types', icon: '👤', color: '#10b981' },
    { id: 'status', title: 'Status & Badges', icon: '📍', color: '#f59e0b' },
    { id: 'avatar-group', title: 'Groups', icon: '👥', color: '#ec4899' },
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
<ui-avatar icon="👤"></ui-avatar>
<ui-avatar icon="fa fa-user"></ui-avatar>`;

  statusCode = `<!-- Status Indicators -->
<ui-avatar name="Online" status="online"></ui-avatar>
<ui-avatar name="Away" status="away"></ui-avatar>
<ui-avatar name="Busy" status="busy"></ui-avatar>
<ui-avatar name="Offline" status="offline"></ui-avatar>

<!-- Badges -->
<ui-avatar name="Notifications" badge="5" badge-color="danger"></ui-avatar>
<ui-avatar name="Verified" badge="dot" badge-color="#3b82f6"></ui-avatar>`;

  groupCode = `<ui-avatar-group max="4">
  <ui-avatar src="https://i.pravatar.cc/150?u=a" name="Member A"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?u=b" name="Member B"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?u=c" name="Member C"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?u=d" name="Member D"></ui-avatar>
  <ui-avatar src="https://i.pravatar.cc/150?u=e" name="Member E"></ui-avatar>
</ui-avatar-group>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    const container = document.querySelector('.pane-examples');
    if (element && container) {
      container.scrollTo({
        top: (element as HTMLElement).offsetTop - 20,
        behavior: 'smooth',
      });
    }
  }
}
