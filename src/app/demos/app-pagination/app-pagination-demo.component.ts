import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { PaginationPlaygroundComponent } from './components/pagination-playground/pagination-playground.component';

@Component({
  selector: 'app-app-pagination-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, PaginationPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-pagination-demo.component.html',
  styleUrl: './app-pagination-demo.component.scss',
})
export class AppPaginationDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'styles', name: 'Visual Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'features', name: 'UI Controls', icon: '⚙️', color: '#10b981' },
  ];

  playgroundCode = `<ui-pagination [total-records]="100" [rows]="10" show-report></ui-pagination>`;

  stylesCode = `<!-- Modern Style -->
<ui-pagination variant="modern" [total-records]="50" [rows]="10"></ui-pagination>

<!-- Compact Style -->
<ui-pagination variant="compact" [total-records]="50" [rows]="10"></ui-pagination>`;

  featuresCode = `<!-- Without Jump Buttons -->
<ui-pagination [show-jump-controls]="false" [total-records]="100"></ui-pagination>

<!-- Hide Report Summary -->
<ui-pagination [show-report]="false" [total-records]="100"></ui-pagination>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
