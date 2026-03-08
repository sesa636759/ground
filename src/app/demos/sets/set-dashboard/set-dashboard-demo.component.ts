import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmDashboardPlaygroundComponent } from '../../../playground/sets/set-dashboard-playground/dashboard-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'dm-set-dashboard-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmDashboardPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-dashboard-demo.component.html',
  styleUrl: './set-dashboard-demo.component.scss',
})
export class DmSetDashboardDemoComponent extends BaseDemoComponent {
  exampleVariants = [{ id: 'features', title: 'Key Features', icon: '🚀' }];

  // Code examples
  playgroundCode = `<ui-dashboard
  [cols]="12"
  [rowHeight]="60"
  [draggable]="true"
  [resizable]="true"
  [compactType]="'vertical'"
>
  <!-- Add your dashboard widgets here -->
</ui-dashboard>`;

  featuresCode = `<!-- Dashboard Key Features:

✓ Drag & Drop: Intuitive drag and drop interface
✓ Resizable: Resize widgets from any corner
✓ Responsive: Custom breakpoints for different screens
✓ State Management: Save, load, undo, and redo
-->`;
}
