import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SnackbarPlaygroundComponent } from './components/snackbar-playground/snackbar-playground.component';

@Component({
  selector: 'app-app-snackbar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, SnackbarPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-snackbar-demo.component.html',
  styleUrl: './app-snackbar-demo.component.scss',
})
export class AppSnackbarDemoComponent {
  @ViewChild('snackbarGlobal') snackbarGlobal!: ElementRef;

  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'types', name: 'Types', icon: '📊', color: '#3b82f6' },
    { id: 'positions', name: 'Positions', icon: '📍', color: '#10b981' },
    { id: 'card-stack', name: 'Card Stacking', icon: '📚', color: '#f59e0b' },
  ];

  playgroundCode = `<ui-snackbar position="top-right" max-visible="5"></ui-snackbar>`;

  typesCode = `// Add different types of notifications
snackbar.add({ type: 'success', title: 'Success', message: 'Operation completed!' });
snackbar.add({ type: 'error', title: 'Error', message: 'Something went wrong.' });
snackbar.add({ type: 'warning', title: 'Warning', message: 'Please check your input.' });
snackbar.add({ type: 'info', title: 'Info', message: 'System update scheduled.' });`;

  positionsCode = `<!-- Define container for specific position -->
<ui-snackbar position="bottom-left"></ui-snackbar>
<ui-snackbar position="top-center"></ui-snackbar>`;

  cardStackCode = `<!-- Enable visual stack mode -->
<ui-snackbar card-stack position="bottom-right"></ui-snackbar>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async notify(type: string) {
    const el = this.snackbarGlobal.nativeElement;
    if (el && typeof el.add === 'function') {
      const titles: any = {
        success: 'Successfully Saved',
        error: 'Update Failed',
        warning: 'Memory Warning',
        info: 'New Message',
      };
      const messages: any = {
        success: 'Project changes have been pushed to main.',
        error: 'Unable to connect to the cloud server.',
        warning: 'Application memory usage is reaching high levels.',
        info: 'You have been invited to a new workspace.',
      };

      await el.add({
        type,
        title: titles[type],
        message: messages[type],
        duration: 4000,
      });
    }
  }
}
