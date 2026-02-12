import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DropdownPlaygroundComponent } from './components/dropdown-playground/dropdown-playground.component';

@Component({
  selector: 'app-app-dropdown-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, DropdownPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-dropdown-demo.component.html',
  styleUrl: './app-dropdown-demo.component.scss',
})
export class AppDropdownDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'multi-select', name: 'Multi Selection', icon: '📝', color: '#3b82f6' },
    { id: 'cascading', name: 'Hierarchical', icon: '🌳', color: '#10b981' },
    { id: 'sizes', name: 'Size Scaling', icon: '📏', color: '#f59e0b' },
  ];

  basicOptions = JSON.stringify([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
  ]);

  cascadingOptions = JSON.stringify([
    {
      label: 'Cars',
      value: 'cars',
      children: [
        { label: 'Tesla', value: 'tesla' },
        { label: 'BMW', value: 'bmw' },
      ],
    },
    {
      label: 'Bikes',
      value: 'bikes',
      children: [
        { label: 'Ducati', value: 'ducati' },
        { label: 'Honda', value: 'honda' },
      ],
    },
  ]);

  playgroundCode = `<ui-dropdown [options]="options" placeholder="Select..."></ui-dropdown>`;

  multiSelectCode = `<!-- Enable multiple selection -->
<ui-dropdown multi-select [options]="options"></ui-dropdown>`;

  cascadingCode = `<!-- Hierarchical structure with expandable groups -->
<ui-dropdown cascading [options]="hierarchicalOptions"></ui-dropdown>`;

  sizesCode = `<ui-dropdown size="sm"></ui-dropdown>
<ui-dropdown size="md"></ui-dropdown>
<ui-dropdown size="lg"></ui-dropdown>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
