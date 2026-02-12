import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { AdvancedDataTablePlaygroundComponent } from './components/advanced-data-table-playground/advanced-data-table-playground.component';

@Component({
  selector: 'app-app-advanced-data-table-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, AdvancedDataTablePlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-advanced-data-table-demo.component.html',
  styleUrl: './app-advanced-data-table-demo.component.scss',
})
export class AppAdvancedDataTableDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'features', name: 'Key Features', icon: '💎', color: '#3b82f6' },
  ];

  sampleData = JSON.stringify([
    { id: 1, name: 'Service A', load: '45%', uptime: '99.9%' },
    { id: 2, name: 'Service B', load: '12%', uptime: '100%' },
    { id: 3, name: 'Service C', load: '89%', uptime: '94.2%' },
  ]);

  sampleCols = JSON.stringify([
    { field: 'name', header: 'Service Name' },
    { field: 'load', header: 'Server Load' },
    { field: 'uptime', header: 'Availability' },
  ]);

  playgroundCode = `<ui-advanced-data-table [value]="data" [columns]="cols" paginator [rows]="10"></ui-advanced-data-table>`;

  featuresCode = `<!-- Custom Templates -->
<ui-advanced-data-table ...>
    <ng-template let-row let-col="column">
        <span *ngIf="col.field === 'status'">
            {{ row.status === 'Active' ? '✅' : '❌' }}
        </span>
    </ng-template>
</ui-advanced-data-table>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
