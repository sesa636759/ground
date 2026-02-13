import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmptyStatePlaygroundComponent } from './components/empty-state-playground/empty-state-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-empty-state-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    EmptyStatePlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-empty-state-demo.component.html',
  styleUrl: './set-empty-state-demo.component.scss',
})
export class SetEmptyStateDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'playground', title: 'Interactive Playground', icon: '🎮' },
    { id: 'standard-types', title: 'Standard Types', icon: '📋' },
    { id: 'advanced-usage', title: 'Advanced Usage', icon: '🚀' },
  ];

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  suggestions = JSON.stringify([
    { icon: 'fas fa-search', label: 'Check your spelling', value: 'spelling' },
    { icon: 'fas fa-filter', label: 'Try different filters', value: 'filters' },
  ]);

  multiActions = JSON.stringify([
    { label: 'Create New Project', value: 'create', variant: 'primary', icon: 'fas fa-plus' },
    { label: 'Import Project', value: 'import', variant: 'secondary', icon: 'fas fa-file-import' },
  ]);

  playgroundCode = `<app-empty-state
  title="No data found"
  description="Try adjusting your filters"
  icon="fas fa-inbox"
></app-empty-state>`;
}
