import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DockPlaygroundComponent } from './components/dock-playground/dock-playground.component';

@Component({
  selector: 'app-app-dock-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, DockPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-dock-demo.component.html',
  styleUrl: './app-dock-demo.component.scss',
})
export class AppDockDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'positions', name: 'Positions', icon: '📍', color: '#3b82f6' },
  ];

  dockItems = JSON.stringify([
    { label: 'Finder', icon: '🔍' },
    { label: 'Messages', icon: '💬' },
    { label: 'Mail', icon: '📧' },
    { label: 'Terminal', icon: '💻' },
  ]);

  playgroundCode = `<ui-dock [model]="items" position="bottom"></ui-dock>`;

  positionsCode = `<!-- Top Dock -->
<ui-dock position="top" [model]="items"></ui-dock>

<!-- Side Dock (Left) -->
<ui-dock position="left" [model]="items"></ui-dock>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
