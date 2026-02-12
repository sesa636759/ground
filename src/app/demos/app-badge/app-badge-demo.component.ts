import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { BadgePlaygroundComponent } from './components/badge-playground/badge-playground.component';

@Component({
  selector: 'app-app-badge-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, BadgePlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-badge-demo.component.html',
  styleUrl: './app-badge-demo.component.scss',
})
export class AppBadgeDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'colors', name: 'Colors', icon: '🌈', color: '#3b82f6' },
    { id: 'styles', name: 'Styles', icon: '🎨', color: '#10b981' },
    { id: 'positions', name: 'Positions', icon: '📍', color: '#f59e0b' },
    { id: 'special', name: 'Special', icon: '✨', color: '#ec4899' },
  ];

  playgroundCode = `<ui-badge value="5" color="danger">
  <div class="target">Icon</div>
</ui-badge>`;

  colorsCode = `<ui-badge value="1" color="primary">...</ui-badge>
<ui-badge value="2" color="success">...</ui-badge>
<ui-badge value="3" color="warning">...</ui-badge>
<ui-badge value="4" color="danger">...</ui-badge>
<ui-badge value="5" color="info">...</ui-badge>`;

  stylesCode = `<ui-badge value="New" variant="standard"></ui-badge>
<ui-badge value="Hot" variant="soft"></ui-badge>
<ui-badge value="99" variant="outlined"></ui-badge>
<ui-badge dot color="success"></ui-badge>`;

  positionsCode = `<ui-badge position="top-right">...</ui-badge>
<ui-badge position="top-left">...</ui-badge>
<ui-badge position="bottom-right">...</ui-badge>
<ui-badge position="bottom-left">...</ui-badge>`;

  specialCode = `<ui-badge value="100" max="99"></ui-badge>
<ui-badge glow animation="pulse" value="!"></ui-badge>
<ui-badge icon="⭐" value="PRO"></ui-badge>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
