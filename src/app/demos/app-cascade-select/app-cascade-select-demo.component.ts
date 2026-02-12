import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { CascadeSelectPlaygroundComponent } from './components/cascade-select-playground/cascade-select-playground.component';

@Component({
  selector: 'app-app-cascade-select-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, CascadeSelectPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-cascade-select-demo.component.html',
  styleUrl: './app-cascade-select-demo.component.scss',
})
export class AppCascadeSelectDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'triggers', name: 'Triggers & Display', icon: '⚡', color: '#3b82f6' },
    { id: 'selection', name: 'Selection Logic', icon: '🎯', color: '#10b981' },
  ];

  fileSystemOptions = JSON.stringify([
    {
      label: 'Documents',
      value: 'docs',
      children: [
        { label: 'Work', value: 'work', children: [{ label: 'Resume.pdf', value: 'resume' }] },
        { label: 'Personal', value: 'personal' },
      ],
    },
    { label: 'Images', value: 'img', children: [{ label: 'Nature.jpg', value: 'nature' }] },
  ]);

  playgroundCode = `<ui-cascade-select [options]="options" placeholder="Select item"></ui-cascade-select>`;

  triggersCode = `<!-- Expand on Click -->
<ui-cascade-select expand-trigger="click" [options]="options"></ui-cascade-select>

<!-- Show only leaf label (No path) -->
<ui-cascade-select [show-full-path]="false" [options]="options"></ui-cascade-select>`;

  selectionCode = `<!-- Select path at any level -->
<ui-cascade-select change-on-select [options]="options"></ui-cascade-select>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
