import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { TopBarPlaygroundComponent } from './components/top-bar-playground/top-bar-playground.component';

@Component({
  selector: 'app-app-top-bar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, TopBarPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-top-bar-demo.component.html',
  styleUrl: './app-top-bar-demo.component.scss',
})
export class AppTopBarDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'layouts', name: 'Layouts', icon: '📐', color: '#3b82f6' },
  ];

  playgroundCode = `<ui-top-bar sticky>
  <div slot="start">Logo</div>
  <div slot="end">User Menu</div>
</ui-top-bar>`;

  layoutsCode = `<!-- With Search Bar -->
<ui-top-bar>
  <div slot="start">Brand</div>
  <div slot="center"><input type="search" placeholder="Search..." /></div>
  <div slot="end">Actions</div>
</ui-top-bar>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
