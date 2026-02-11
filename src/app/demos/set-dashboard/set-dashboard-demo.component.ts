import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPlaygroundComponent } from './components/dashboard-playground/dashboard-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-dashboard-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardPlaygroundComponent, CodeBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-dashboard-demo.component.html',
  styleUrl: './set-dashboard-demo.component.scss',
})
export class SetDashboardDemoComponent implements OnInit {
  // Code examples
  playgroundCode = `<app-dashboard
  [cols]="12"
  [rowHeight]="60"
  [draggable]="true"
  [resizable]="true"
  [compactType]="'vertical'"
>
  <!-- Add your dashboard widgets here -->
</app-dashboard>`;

  featuresCode = `<!-- Dashboard Key Features:

✓ Drag & Drop: Intuitive drag and drop interface
✓ Resizable: Resize widgets from any corner
✓ Responsive: Custom breakpoints for different screens
✓ State Management: Save, load, undo, and redo
-->`;

  ngOnInit() {}
}
