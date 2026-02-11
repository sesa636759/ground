import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmptyStatePlaygroundComponent } from './components/empty-state-playground/empty-state-playground.component';

@Component({
  selector: 'app-set-empty-state-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, EmptyStatePlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-empty-state-demo.component.html',
  styleUrl: './set-empty-state-demo.component.scss',
})
export class SetEmptyStateDemoComponent implements OnInit {
  ngOnInit() {}

  suggestions = JSON.stringify([
    { icon: 'fas fa-search', label: 'Check your spelling', value: 'spelling' },
    { icon: 'fas fa-filter', label: 'Try different filters', value: 'filters' },
  ]);

  multiActions = JSON.stringify([
    { label: 'Create New Project', value: 'create', variant: 'primary', icon: 'fas fa-plus' },
    { label: 'Import Project', value: 'import', variant: 'secondary', icon: 'fas fa-file-import' },
  ]);
}
