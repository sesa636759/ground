import { Injectable } from '@angular/core';

export interface ComponentProp {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
  required?: boolean;
}

export interface ComponentEvent {
  name: string;
  description: string;
  payloadType?: string;
  payloadDescription?: string;
}

export interface ComponentDocumentation {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  usage: string;
  props: ComponentProp[];
  events: ComponentEvent[];
  limitations: string[];
  examples?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ComponentDocsService {
  private componentDocs: Map<string, ComponentDocumentation> = new Map([
    [
      'button',
      {
        id: 'button',
        name: 'Button',
        shortDescription: 'A versatile button component with multiple variants and states.',
        detailedDescription:
          'The Button component is a fundamental UI element that provides user interaction. It supports multiple variants (primary, secondary, danger, success), sizes, and states (loading, disabled). It can display icons, badges, and custom content.',
        usage: `
          <ui-button variant="primary">Click Me</ui-button>
          <ui-button variant="secondary" size="large" [icon]="faCheck">Save</ui-button>
          <ui-button [disabled]="isDisabled" (click)="handleClick()">Submit</ui-button>
        `,
        props: [
          {
            name: 'variant',
            type: "'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'ghost'",
            description: 'Visual style variant of the button',
            defaultValue: "'primary'",
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            description: 'Size of the button',
            defaultValue: "'medium'",
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disables the button and prevents interaction',
            defaultValue: 'false',
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Shows loading spinner and disables interaction',
            defaultValue: 'false',
          },
          {
            name: 'icon',
            type: 'IconDefinition',
            description: 'FontAwesome icon to display in the button',
          },
          {
            name: 'fullWidth',
            type: 'boolean',
            description: 'Makes button expand to full width of parent',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'click',
            description: 'Emitted when button is clicked',
            payloadType: 'MouseEvent',
            payloadDescription: 'Native mouse event object',
          },
          {
            name: 'focus',
            description: 'Emitted when button receives focus',
          },
          {
            name: 'blur',
            description: 'Emitted when button loses focus',
          },
        ],
        limitations: [
          'Button text should be kept concise (1-3 words)',
          'Loading state duration should not exceed 30 seconds',
          'Cannot be nested inside another button element',
        ],
      },
    ],
    [
      'card',
      {
        id: 'card',
        name: 'Card',
        shortDescription: 'A container component for grouping related content.',
        detailedDescription:
          'The Card component is used to group related content together. It provides a clean container with optional header, footer, and shadow effects. Supports elevation levels and hover effects.',
        usage: `
          <ui-card>
            <ui-card-header>Card Title</ui-card-header>
            <ui-card-content>
              Card content goes here
            </ui-card-content>
            <ui-card-footer>Card footer</ui-card-footer>
          </ui-card>
        `,
        props: [
          {
            name: 'elevation',
            type: '0 | 1 | 2 | 3 | 4',
            description: 'Shadow elevation level',
            defaultValue: '1',
          },
          {
            name: 'hoverable',
            type: 'boolean',
            description: 'Adds hover effect to the card',
            defaultValue: 'false',
          },
          {
            name: 'clickable',
            type: 'boolean',
            description: 'Makes card clickable with pointer cursor',
            defaultValue: 'false',
          },
          {
            name: 'padding',
            type: "'small' | 'medium' | 'large'",
            description: 'Internal padding of the card',
            defaultValue: "'medium'",
          },
        ],
        events: [
          {
            name: 'cardClick',
            description: 'Emitted when clickable card is clicked',
            payloadType: 'MouseEvent',
          },
        ],
        limitations: [
          'Card should contain related content only',
          'Maximum nesting depth of 3 levels recommended',
        ],
      },
    ],
    [
      'input',
      {
        id: 'input',
        name: 'Input',
        shortDescription: 'A flexible text input component with validation and formatting.',
        detailedDescription:
          'The Input component provides a user-friendly text input field with support for validation, error messages, labels, placeholders, and various input types. It integrates with Angular forms and includes accessibility features.',
        usage: `
          <ui-input 
            placeholder="Enter text"
            [(ngModel)]="inputValue"
            [error]="isInvalid"
            errorMessage="Invalid input">
          </ui-input>
        `,
        props: [
          {
            name: 'type',
            type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url'",
            description: 'Input field type',
            defaultValue: "'text'",
          },
          {
            name: 'placeholder',
            type: 'string',
            description: 'Placeholder text when input is empty',
          },
          {
            name: 'label',
            type: 'string',
            description: 'Label for the input field',
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disables the input',
            defaultValue: 'false',
          },
          {
            name: 'error',
            type: 'boolean',
            description: 'Shows error state',
            defaultValue: 'false',
          },
          {
            name: 'errorMessage',
            type: 'string',
            description: 'Error message to display',
          },
          {
            name: 'required',
            type: 'boolean',
            description: 'Marks field as required',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'valueChange',
            description: 'Emitted when input value changes',
            payloadType: 'string',
          },
          {
            name: 'blur',
            description: 'Emitted when input loses focus',
          },
          {
            name: 'focus',
            description: 'Emitted when input receives focus',
          },
        ],
        limitations: [
          'Maximum length varies by input type',
          'File input not supported (use separate file input component)',
          'Real-time validation may impact performance with large datasets',
        ],
      },
    ],
    [
      'dialog',
      {
        id: 'dialog',
        name: 'Dialog',
        shortDescription: 'A modal dialog component for displaying important information or user actions.',
        detailedDescription:
          'The Dialog component displays content in a modal overlay. It can be used for confirmations, forms, alerts, or complex interactions. Supports custom sizes, animation, and backdrop interaction control.',
        usage: `
          <ui-dialog 
            [open]="isDialogOpen"
            title="Confirm Action"
            (close)="closeDialog()">
            <p>Are you sure you want to proceed?</p>
            <ui-dialog-footer>
              <ui-button (click)="closeDialog()">Cancel</ui-button>
              <ui-button variant="primary" (click)="confirm()">Confirm</ui-button>
            </ui-dialog-footer>
          </ui-dialog>
        `,
        props: [
          {
            name: 'open',
            type: 'boolean',
            description: 'Controls dialog visibility',
            defaultValue: 'false',
            required: true,
          },
          {
            name: 'title',
            type: 'string',
            description: 'Dialog title',
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            description: 'Dialog size',
            defaultValue: "'medium'",
          },
          {
            name: 'closeable',
            type: 'boolean',
            description: 'Shows close button in header',
            defaultValue: 'true',
          },
          {
            name: 'backdropCloseable',
            type: 'boolean',
            description: 'Allows closing by clicking backdrop',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'close',
            description: 'Emitted when dialog should close',
          },
          {
            name: 'confirm',
            description: 'Emitted when user confirms action',
          },
        ],
        limitations: [
          'Only one dialog can be open at a time (recommended)',
          'Avoid nesting dialogs',
          'Large content should be scrollable',
        ],
      },
    ],
  ]);

  getComponentDocs(componentId: string): ComponentDocumentation | undefined {
    return this.componentDocs.get(componentId);
  }

  getAllComponents(): ComponentDocumentation[] {
    return Array.from(this.componentDocs.values());
  }

  getComponentList(): Array<{ id: string; name: string }> {
    return Array.from(this.componentDocs.values()).map((doc) => ({
      id: doc.id,
      name: doc.name,
    }));
  }
}
