import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { AsidePlaygroundComponent } from './components/aside-playground/aside-playground.component';

@Component({
  selector: 'app-app-aside-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, AsidePlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-aside-demo.component.html',
  styleUrl: './app-aside-demo.component.scss',
})
export class AppAsideDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'directions', name: 'Directions', icon: '🧭', color: '#3b82f6' },
    { id: 'variants', name: 'Visual Styles', icon: '🎨', color: '#10b981' },
    { id: 'resizable', name: 'Resizability', icon: '↔️', color: '#f59e0b' },
  ];

  sidebars = {
    left: false,
    right: false,
    top: false,
    bottom: false,
    glass: false,
    resizable: false,
  };

  playgroundCode = `<aside-panel [open]="isOpen" direction="right" size="400px">
  <div slot="header"><h3>Header</h3></div>
  <div slot="content">Content</div>
  <div slot="footer">Footer</div>
</aside-panel>`;

  directionsCode = `<!-- Slides in from the left -->
<aside-panel direction="left" [open]="leftOpen"> ... </aside-panel>

<!-- Slides in from the top -->
<aside-panel direction="top" [open]="topOpen"> ... </aside-panel>`;

  glassCode = `<!-- Glassmorphism variant with backdrop blur -->
<aside-panel variant="glass" backdrop-blur="12px" [open]="glassOpen">
   ...
</aside-panel>`;

  resizableCode = `<!-- Enable dynamic resizing -->
<aside-panel resizable min-size="200" max-size="600" [open]="resOpen">
   ...
</aside-panel>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  togglePanel(key: keyof typeof AppAsideDemoComponent.prototype.sidebars) {
    this.sidebars[key] = !this.sidebars[key];
  }
}
