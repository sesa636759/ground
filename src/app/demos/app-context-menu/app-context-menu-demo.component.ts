import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { ContextMenuPlaygroundComponent } from './components/context-menu-playground/context-menu-playground.component';

@Component({
  selector: 'app-app-context-menu-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, ContextMenuPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-context-menu-demo.component.html',
  styleUrl: './app-context-menu-demo.component.scss',
})
export class AppContextMenuDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'targets', name: 'Multiple Targets', icon: '🎯', color: '#3b82f6' },
  ];

  fileItems = JSON.stringify([
    { label: 'Open', icon: '📂' },
    { label: 'Download', icon: '⬇️' },
    { separator: true },
    { label: 'Rename', icon: '📝' },
    { label: 'Delete', icon: '🗑️' },
  ]);

  playgroundCode = `<div #trigger> Right Click Me </div>
<ui-context-menu [model]="items" [target]="trigger"></ui-context-menu>`;

  targetsCode = `<!-- Global Menu -->
<ui-context-menu [model]="items" global></ui-context-menu>

<!-- Specific Target -->
<img #img src="..." />
<ui-context-menu [model]="imgItems" [target]="img"></ui-context-menu>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
