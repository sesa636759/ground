import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmSkeletonPlaygroundComponent } from '../../../playground/common/skeleton-playground/skeleton-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'dm-skeleton-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSkeletonPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skeleton-demo.component.html',
  styleUrl: './skeleton-demo.component.scss',
})
export class DmSkeletonDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'shapes', title: 'Shapes & Animations', icon: '🌀' },
    { id: 'card-layout', title: 'Card Layout', icon: '🃏' },
    { id: 'list-layout', title: 'List Layout', icon: '📋' },
    { id: 'profile-layout', title: 'Profile Layout', icon: '👤' },
  ];

  shapesCode = `<!-- Circle (avatar) -->
<skeleton-loader shape="circle" width="48px" height="48px"></skeleton-loader>

<!-- Avatar (uses size prop) -->
<skeleton-loader shape="avatar" size="lg"></skeleton-loader>

<!-- Text line with pulse -->
<skeleton-loader shape="text" width="60%" animation-type="pulse"></skeleton-loader>

<!-- Rectangle with wave -->
<skeleton-loader shape="rectangle" width="100%" height="150px" animation-type="wave"></skeleton-loader>

<!-- Built-in card shape -->
<skeleton-loader shape="card" width="100%"></skeleton-loader>

<!-- Built-in list-item shape -->
<skeleton-loader shape="list-item" width="100%"></skeleton-loader>

<!-- Button shape -->
<skeleton-loader shape="button" width="100px" size="md"></skeleton-loader>`;

  cardLayoutCode = `<div style="display:flex;gap:12px;padding:16px;border:1px solid #e2e8f0;border-radius:8px">
  <skeleton-loader shape="rectangle" width="80px" height="80px"></skeleton-loader>
  <div style="flex:1">
    <skeleton-loader shape="text" width="70%" height="18px"></skeleton-loader>
    <skeleton-loader shape="text" width="40%" height="14px" style="margin-top:8px"></skeleton-loader>
    <skeleton-loader shape="text" width="55%" height="14px" style="margin-top:6px"></skeleton-loader>
  </div>
</div>`;

  listLayoutCode = `<div style="display:flex;flex-direction:column;gap:12px">
  @for (item of [1,2,3,4]; track item) {
    <skeleton-loader shape="list-item" width="100%"></skeleton-loader>
  }
</div>`;

  profileLayoutCode = `<div style="text-align:center;padding:24px">
  <skeleton-loader shape="avatar" size="2xl" style="margin:0 auto;display:block"></skeleton-loader>
  <skeleton-loader shape="text"  width="120px" height="20px" style="margin:12px auto 0;display:block"></skeleton-loader>
  <skeleton-loader shape="text"  width="80px"  height="14px" style="margin:8px auto 0;display:block"></skeleton-loader>
  <skeleton-loader shape="button" width="160px" size="lg" style="margin:16px auto 0;display:block"></skeleton-loader>
</div>`;
}
