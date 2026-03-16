import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmSpeedDialPlaygroundComponent } from '../../../playground/common/speed-dial-playground/speed-dial-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-speed-dial-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSpeedDialPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './speed-dial-demo.component.html',
  styleUrl: './speed-dial-demo.component.scss',
})
export class DmSpeedDialDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Usage', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'positions', title: 'Positions & Direction', icon: 'crosshair', iconLibrary: 'lucide' },
    { id: 'trigger', title: 'Trigger & Tooltips', icon: 'mouse-pointer-2', iconLibrary: 'lucide' },
    { id: 'styles', title: 'Sizes & Colors', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'custom-icons', title: 'Custom Icons', icon: 'star', iconLibrary: 'lucide' },
  ];

  actions = JSON.stringify([
    { id: 'copy', icon: 'copy', label: 'Copy Link' },
    { id: 'edit', icon: 'edit-2', label: 'Edit Post' },
    { id: 'delete', icon: 'trash-2', label: 'Delete', color: '#ef4444' }
  ]);

  lucideActions = JSON.stringify([
    { id: 'share', icon: 'share-2', label: 'Share', iconLibrary: 'lucide' },
    { id: 'download', icon: 'download', label: 'Download', iconLibrary: 'lucide' },
    { id: 'flag', icon: 'flag', label: 'Report', color: '#ef4444', iconLibrary: 'lucide' }
  ]);

  basicCode = `<ui-speed-dial [actions]="actions" icon="plus" icon-library="lucide"></ui-speed-dial>`;
  
  positionsCode = `<div style="position: relative; height: 300px;">
  <!-- Render absolute speed dials inside container -->
  <ui-speed-dial strategy="absolute" position="top-left" direction="right" [actions]="actions"></ui-speed-dial>
  <ui-speed-dial strategy="absolute" position="top-right" direction="down" [actions]="actions"></ui-speed-dial>
  <ui-speed-dial strategy="absolute" position="bottom-left" direction="up" [actions]="actions"></ui-speed-dial>
  <ui-speed-dial strategy="absolute" position="bottom-right" direction="left" [actions]="actions"></ui-speed-dial>
  <ui-speed-dial strategy="absolute" position="center" direction="up" [actions]="actions"></ui-speed-dial>
</div>`;

  triggerCode = `<ui-speed-dial strategy="absolute" position="center" trigger="hover" tooltip-position="bottom" [actions]="actions"></ui-speed-dial>`;

  stylesCode = `<ui-speed-dial strategy="absolute" position="top-left" size="sm" color="success" [actions]="actions"></ui-speed-dial>
<ui-speed-dial strategy="absolute" position="bottom-right" size="lg" color="danger" [actions]="actions"></ui-speed-dial>`;

  customIconsCode = `<ui-speed-dial strategy="absolute" position="center" icon="menu" icon-library="lucide" [actions]="lucideActions"></ui-speed-dial>`;

  handleActionClick(ev: any) {
    console.log(`Action Clicked: ${ev.detail}`);
  }
}
