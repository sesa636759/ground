import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmAsidePlaygroundComponent } from '../../../playground/common/aside-playground/aside-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-aside-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmAsidePlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aside-demo.component.html',
  styleUrl: './aside-demo.component.scss',
})
export class DmAsideDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'directions', title: 'Directions', icon: '🧭' },
    { id: 'visual-styles', title: 'Visual Styles', icon: '🎨' },
    { id: 'resizable', title: 'Resizable', icon: '↔️' },
    { id: 'close-behavior', title: 'Close Behavior', icon: '🚪' },
  ];

  sidebars = {
    left: false,
    right: false,
    top: false,
    bottom: false,
    glass: false,
    default: false,
    resizable: false,
    escClose: false,
    overlayClose: false,
  };

  // Code Snippets
  directionsCode = `<!-- Left (default) -->
<ui-aside-panel direction="left" [open]="leftOpen" (asideClosed)="leftOpen = false">
  <div slot="header"><h3>Left Panel</h3></div>
  <div slot="content">Navigation links or profile info.</div>
 </ui-aside-panel>

<!-- Right -->
<ui-aside-panel direction="right" [open]="rightOpen" (asideClosed)="rightOpen = false">
  <div slot="header"><h3>Right Panel</h3></div>
  <div slot="content">Details, filters, or settings.</div>
 </ui-aside-panel>

<!-- Top -->
<ui-aside-panel direction="top" size="200px" [open]="topOpen" (asideClosed)="topOpen = false">
  <div slot="header"><h3>Announcement</h3></div>
  <div slot="content">A top bar for notices or notifications.</div>
 </ui-aside-panel>

<!-- Bottom -->
<ui-aside-panel direction="bottom" size="300px" [open]="bottomOpen" (asideClosed)="bottomOpen = false">
  <div slot="header"><h3>Media Player</h3></div>
  <div slot="content">Bottom panels for media controls or mobile menus.</div>
 </ui-aside-panel>`;

  visualStylesCode = `<!-- Default solid panel -->
<ui-aside-panel [open]="defaultOpen" (asideClosed)="defaultOpen = false">
  <div slot="header"><h3>Default Panel</h3></div>
  <div slot="content">Clean, solid background with standard styling.</div>
 </ui-aside-panel>

<!-- Glassmorphism panel -->
<ui-aside-panel variant="glass" backdrop-blur="12px" [open]="glassOpen" (asideClosed)="glassOpen = false">
  <div slot="header"><h3>Glass Panel</h3></div>
  <div slot="content">Translucent with blur backdrop for a premium feel.</div>
 </ui-aside-panel>`;

  resizableCode = `<!-- Resizable panel with min/max constraints -->
<ui-aside-panel
  resizable
  min-size="200"
  max-size="700"
  size="400px"
  [open]="resizableOpen"
  (asideClosed)="resizableOpen = false"
>
  <div slot="header"><h3>Resizable Panel</h3></div>
  <div slot="content">Drag the edge to resize between 200px and 700px.</div>
 </ui-aside-panel>`;

  closeBehaviorCode = `<!-- Close on Escape key -->
<ui-aside-panel close-on-escape [open]="escOpen" (asideClosed)="escOpen = false">
  <div slot="content">Press Escape to dismiss.</div>
 </ui-aside-panel>

<!-- Close on overlay click -->
<ui-aside-panel close-on-overlay-click [open]="overlayOpen" (asideClosed)="overlayOpen = false">
  <div slot="content">Click outside the panel to close.</div>
 </ui-aside-panel>`;

  togglePanel(key: keyof typeof DmAsideDemoComponent.prototype.sidebars) {
    const currentState = this.sidebars[key];
    // Close all first
    Object.entries(this.sidebars).forEach(([k]) => {
      this.sidebars[k as keyof typeof DmAsideDemoComponent.prototype.sidebars] = false;
    });
    // Set the one we want
    this.sidebars[key] = !currentState;
  }
}
