import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaygroundEditorComponent } from '../../pages/playground/editor/playground-editor.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';
import { COMPONENT_CONFIGS } from '../../pages/playground/component-configs';

@Component({
  selector: 'app-snackbar-docs',
  standalone: true,
  imports: [CommonModule, RouterModule, PlaygroundEditorComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './snackbar-docs.component.html',
  styleUrl: './snackbar-docs.component.scss',
})
export class SnackbarDocsComponent {
  @ViewChild('snackbar') snackbar!: ElementRef<any>;

  activeTab: 'examples' | 'playground' | 'documentation' = 'examples';
  activeExample: string = 'basic';
  isCodeVisible: boolean = false;

  // Example codes
  exampleCodes: any = {
    basic: `<ui-snackbar #snackbar></ui-snackbar>

// In Component
@ViewChild('snackbar') snackbar: ElementRef;

triggerBasic() {
  this.snackbar.nativeElement.add({
    message: 'Operation successful',
    type: 'info',
    duration: 3000
  });
}`,
    types: `<ui-snackbar #snackbar></ui-snackbar>

// Trigger Usage
triggerSuccess() {
  this.snackbar.nativeElement.add({
    message: 'Saved successfully',
    type: 'success'
  });
}

triggerError() {
  this.snackbar.nativeElement.add({
    message: 'Failed to save item',
    type: 'error'
  });
}`,
    positions: `<ui-snackbar #snackbar></ui-snackbar>

triggerTopRight() {
  this.snackbar.nativeElement.position = 'top-right';
  this.snackbar.nativeElement.add({
    message: 'Top Right Notification'
  });
}`,
    duration: `<ui-snackbar #snackbar></ui-snackbar>

triggerDuration() {
  this.snackbar.nativeElement.add({
    message: 'I stay for 5 seconds...',
    type: 'info',
    duration: 5000
  });
}`,
  };

  componentConfig = COMPONENT_CONFIGS['snackbar'] || {
    id: 'snackbar',
    tagName: 'ui-snackbar',
    label: 'Snackbar',
    description: 'Provide brief messages about app processes at the bottom of the screen.',
    props: [
      { name: 'message', type: 'string', defaultValue: 'Operation successful' },
      { name: 'duration', type: 'number', defaultValue: 3000 },
      {
        name: 'type',
        type: 'select',
        options: ['success', 'info', 'warning', 'error'],
        defaultValue: 'info',
      },
      {
        name: 'position',
        type: 'select',
        options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
        defaultValue: 'bottom-right',
      },
    ],
  };

  constructor() {}

  setTab(tab: 'examples' | 'playground' | 'documentation') {
    this.activeTab = tab;
  }

  setExample(example: string) {
    this.activeExample = example;
  }

  toggleCode() {
    this.isCodeVisible = !this.isCodeVisible;
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
    // Optional: show a toast that code is copied
  }

  triggerBasic() {
    this.snackbar.nativeElement.add({
      message: 'Operation successful',
      type: 'info',
      duration: 3000,
    });
  }

  triggerType(type: string) {
    let message = 'Notification';
    switch (type) {
      case 'success':
        message = 'Saved successfully';
        break;
      case 'info':
        message = 'Update available';
        break;
      case 'warning':
        message = 'Check your connection';
        break;
      case 'error':
        message = 'Failed to save item';
        break;
      case 'error':
        message = 'Failed to save item';
        break;
    }

    this.snackbar.nativeElement.add({
      message,
      type: type,
      duration: 3000,
    });
  }

  triggerPosition(position: string) {
    this.snackbar.nativeElement.position = position;
    this.snackbar.nativeElement.add({
      message: `${position === 'top-right' ? 'Top Right' : 'Bottom Left'} Notification`,
      type: 'info',
    });
  }

  triggerDuration() {
    this.snackbar.nativeElement.add({
      message: 'I stay for 5 seconds...',
      type: 'info',
      duration: 5000,
    });
  }
}
