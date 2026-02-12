import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { ButtonGroupPlaygroundComponent } from './components/button-group-playground/button-group-playground.component';

@Component({
  selector: 'app-app-button-group-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, ButtonGroupPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-button-group-demo.component.html',
  styleUrl: './app-button-group-demo.component.scss',
})
export class AppButtonGroupDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'selection', name: 'Selection Modes', icon: '☑️', color: '#3b82f6' },
    { id: 'layout', name: 'Layout Options', icon: '📐', color: '#10b981' },
  ];

  playgroundCode = `<ui-button-group selection-mode="single">
  <ui-button label="Option 1" variant="outline"></ui-button>
  <ui-button label="Option 2" variant="outline"></ui-button>
</ui-button-group>`;

  selectionCode = `<!-- Multi Selection -->
<ui-button-group selection-mode="multiple">
  <ui-button label="Bold" icon="format_bold"></ui-button>
  <ui-button label="Italic" icon="format_italic"></ui-button>
  <ui-button label="Underline" icon="format_underlined"></ui-button>
</ui-button-group>`;

  layoutCode = `<!-- Vertical Attached -->
<ui-button-group orientation="vertical">
  <ui-button label="Top"></ui-button>
  <ui-button label="Middle"></ui-button>
  <ui-button label="Bottom"></ui-button>
</ui-button-group>

<!-- Spaced Buttons (Detached) -->
<ui-button-group [attached]="false">
  <ui-button label="Skip"></ui-button>
  <ui-button label="Continue" variant="primary"></ui-button>
</ui-button-group>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
