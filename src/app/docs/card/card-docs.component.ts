import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-docs',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-docs.component.html',
  styleUrls: ['./card-docs.component.scss'],
})
export class CardDocsComponent {
  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  // Example menu items for the card menu demo
  menuItems = JSON.stringify([
    { id: 'edit', label: 'Edit', icon: '✏️' },
    { id: 'delete', label: 'Delete', icon: '🗑️', disabled: true },
    { separator: true },
    { id: 'share', label: 'Share', icon: '🔗' },
  ]);
}
