import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DialogBoxPlaygroundComponent } from './components/dialog-box-playground/dialog-box-playground.component';

@Component({
  selector: 'app-app-dialog-box-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, DialogBoxPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-dialog-box-demo.component.html',
  styleUrl: './app-dialog-box-demo.component.scss',
})
export class AppDialogBoxDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'types', name: 'Modal Modes', icon: '🔳', color: '#3b82f6' },
    { id: 'interactions', name: 'Interactions', icon: '🖱️', color: '#10b981' },
  ];

  dialogVisible = {
    standard: false,
    modal: false,
    draggable: false,
  };

  playgroundCode = `<ui-dialog-box header="Title" [visible]="visible" (uiHide)="visible=false">
  Content...
</ui-dialog-box>`;

  typesCode = `<!-- Non-Modal (Overlay) -->
<ui-dialog-box [modal]="false" [visible]="true"></ui-dialog-box>

<!-- Full Modal -->
<ui-dialog-box modal [visible]="true"></ui-dialog-box>`;

  interactionsCode = `<!-- Draggable & Resizable -->
<ui-dialog-box draggable resizable [visible]="true"></ui-dialog-box>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggle(id: string) {
    this.dialogVisible[id as keyof typeof this.dialogVisible] =
      !this.dialogVisible[id as keyof typeof this.dialogVisible];
  }
}
