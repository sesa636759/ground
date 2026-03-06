import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdvancedDataTablePlaygroundComponent } from './components/advanced-data-table-playground/advanced-data-table-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

@Component({
  selector: 'app-app-advanced-data-table-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AdvancedDataTablePlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-advanced-data-table-demo.component.html',
  styleUrl: './app-advanced-data-table-demo.component.scss',
})
export class AppAdvancedDataTableDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'features', title: 'Key Features', icon: '💎', color: '#3b82f6' },
  ];

  sampleData = [
    { id: 1, name: 'Service A', load: '45%', uptime: '99.9%' },
    { id: 2, name: 'Service B', load: '12%', uptime: '100%' },
    { id: 3, name: 'Service C', load: '89%', uptime: '94.2%' },
  ];

  sampleCols = [
    { field: 'name', header: 'Service Name' },
    { field: 'load', header: 'Server Load' },
    { field: 'uptime', header: 'Availability' },
  ];

  playgroundCode = `<ui-advanced-data-table
  [data]="data"
  [columns]="cols"
  pagination
  [pageSize]="10"
  searchable
  sortable
></ui-advanced-data-table>`;

  featuresCode = `<!-- Custom Templates -->
  <ui-advanced-data-table ...>
    <ng-template let-row let-col="column">
      @if (col.field === 'status') {
        <span>
          {{ row.status === 'Active' ? '✅' : '❌' }}
        </span>
      }
    </ng-template>
  </ui-advanced-data-table>`;
}
