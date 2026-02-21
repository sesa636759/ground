import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkeletonPlaygroundComponent } from './components/skeleton-playground/skeleton-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-skeleton-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SkeletonPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-skeleton-demo.component.html',
  styleUrl: './app-skeleton-demo.component.scss',
})
export class AppSkeletonDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'shapes', title: 'Shapes & Animations', icon: '🌀' },
    { id: 'card-layout', title: 'Card Layout', icon: '🃏' },
    { id: 'list-layout', title: 'List Layout', icon: '📋' },
    { id: 'profile-layout', title: 'Profile Layout', icon: '👤' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  shapesCode = `<!-- Circle (avatar) -->
<ui-skeleton shape="circle" width="48px" height="48px"></ui-skeleton>

<!-- Text line -->
<ui-skeleton shape="text" width="60%"></ui-skeleton>

<!-- Rectangle -->
<ui-skeleton shape="rectangle" width="100%" height="150px"></ui-skeleton>

<!-- Pulse animation -->
<ui-skeleton animation="pulse" width="80%" height="16px"></ui-skeleton>

<!-- Wave animation -->
<ui-skeleton animation="wave" width="100%" height="16px"></ui-skeleton>`;

  cardLayoutCode = `<div style="display:flex;gap:12px;padding:16px;border:1px solid #e2e8f0;border-radius:8px">
  <ui-skeleton shape="rectangle" width="80px" height="80px"></ui-skeleton>
  <div style="flex:1">
    <ui-skeleton shape="text" width="70%" height="18px"></ui-skeleton>
    <ui-skeleton shape="text" width="40%" height="14px" style="margin-top:8px"></ui-skeleton>
    <ui-skeleton shape="text" width="55%" height="14px" style="margin-top:6px"></ui-skeleton>
  </div>
</div>`;

  listLayoutCode = `<div style="display:flex;flex-direction:column;gap:12px">
  @for (item of [1,2,3]; track item) {
    <div style="display:flex;align-items:center;gap:12px">
      <ui-skeleton shape="circle" width="40px" height="40px"></ui-skeleton>
      <div style="flex:1">
        <ui-skeleton shape="text" width="50%" height="14px"></ui-skeleton>
        <ui-skeleton shape="text" width="30%" height="12px" style="margin-top:6px"></ui-skeleton>
      </div>
    </div>
  }
</div>`;

  profileLayoutCode = `<div style="text-align:center;padding:24px">
  <ui-skeleton shape="circle" width="80px" height="80px" style="margin:0 auto"></ui-skeleton>
  <ui-skeleton shape="text" width="120px" height="20px" style="margin:12px auto 0"></ui-skeleton>
  <ui-skeleton shape="text" width="80px"  height="14px" style="margin:8px auto 0"></ui-skeleton>
  <ui-skeleton shape="rectangle" width="100%" height="48px" style="margin-top:16px;border-radius:8px"></ui-skeleton>
</div>`;
}
