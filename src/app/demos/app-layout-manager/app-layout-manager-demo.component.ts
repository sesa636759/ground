import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { LayoutManagerPlaygroundComponent } from './components/layout-manager-playground/layout-manager-playground.component';

@Component({
  selector: 'app-app-layout-manager-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, LayoutManagerPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-layout-manager-demo.component.html',
  styleUrl: './app-layout-manager-demo.component.scss',
})
export class AppLayoutManagerDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'modes', name: 'Layout Modes', icon: '🗂️', color: '#3b82f6' },
  ];

  playgroundCode = `<ui-layout-manager mode="docking" resizable closable>
  <div slot="panel-1">Main Content</div>
  <div slot="panel-2">Sidebar</div>
</ui-layout-manager>`;

  modesCode = `<!-- Docking Mode -->
<ui-layout-manager mode="docking">
  <!-- Panels can be docked and rearranged -->
</ui-layout-manager>

<!-- Grid Mode -->
<ui-layout-manager mode="grid">
  <!-- Panels arranged in a grid -->
</ui-layout-manager>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
