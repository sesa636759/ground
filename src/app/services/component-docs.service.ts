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
      'accordion',
      {
        id: 'accordion',
        name: 'Accordion',
        shortDescription:
          'Collapsible content panels for organizing information in a compact format.',
        detailedDescription:
          'The Accordion component provides a vertically stacked list of collapsible panels for organizing content. It supports advanced features like search, drag-and-drop, nested structures, persistence, and lazy loading. Perfect for FAQs, settings panels, and hierarchical content.',
        usage: `
          <dui-accordion [items]="accordionItems"></dui-accordion>
          
          // Component
          accordionItems = [
            {
              id: 'item1',
              title: 'First Item',
              content: '<p>Content for first item</p>'
            },
            {
              id: 'item2',
              title: 'Second Item',
              subtitle: 'Optional subtitle',
              content: '<p>Content for second item</p>'
            }
          ];
        `,
        props: [
          {
            name: 'items',
            type: 'string | AccordionItem[]',
            description: 'Array of accordion items (can be JSON string or array)',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'enable-search',
            type: 'boolean',
            description: 'Enable built-in search functionality',
            defaultValue: 'false',
          },
          {
            name: 'search-placeholder',
            type: 'string',
            description: 'Placeholder text for search input',
            defaultValue: '"Search..."',
          },
          {
            name: 'enable-nested',
            type: 'boolean',
            description: 'Enable nested accordion structures',
            defaultValue: 'false',
          },
          {
            name: 'enable-drag-drop',
            type: 'boolean',
            description: 'Enable drag-and-drop reordering of items',
            defaultValue: 'false',
          },
          {
            name: 'enable-persistence',
            type: 'boolean',
            description: 'Save expansion state to localStorage',
            defaultValue: 'false',
          },
          {
            name: 'persistence-key',
            type: 'string',
            description: 'Unique key for localStorage persistence',
            defaultValue: '"accordion-state"',
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Show skeleton loading state',
            defaultValue: 'false',
          },
          {
            name: 'rtl',
            type: 'boolean',
            description: 'Enable right-to-left layout support',
            defaultValue: 'false',
          },
          {
            name: 'dense',
            type: 'boolean',
            description: 'Compact layout with reduced padding',
            defaultValue: 'false',
          },
          {
            name: 'lazy',
            type: 'boolean',
            description: 'Lazy render content only when expanded',
            defaultValue: 'false',
          },
          {
            name: 'expandedItems',
            type: 'string[]',
            description: 'Array of item IDs that should be expanded (for controlled mode)',
            defaultValue: '[]',
          },
        ],
        events: [
          {
            name: 'beforeOpen',
            description: 'Fired before an item is expanded',
            payloadType: '{ itemId: string }',
            payloadDescription: 'The ID of the item being opened',
          },
          {
            name: 'afterOpen',
            description: 'Fired after an item is expanded',
            payloadType: '{ itemId: string }',
            payloadDescription: 'The ID of the item that was opened',
          },
          {
            name: 'beforeClose',
            description: 'Fired before an item is collapsed',
            payloadType: '{ itemId: string }',
            payloadDescription: 'The ID of the item being closed',
          },
          {
            name: 'afterClose',
            description: 'Fired after an item is collapsed',
            payloadType: '{ itemId: string }',
            payloadDescription: 'The ID of the item that was closed',
          },
          {
            name: 'accordionAction',
            description: 'Fired when an action button is clicked',
            payloadType: '{ itemId: string, actionId: string }',
            payloadDescription: 'The item ID and action ID that was clicked',
          },
          {
            name: 'accordionReorder',
            description: 'Fired when items are reordered via drag-and-drop',
            payloadType: '{ oldIndex: number, newIndex: number }',
            payloadDescription: 'The old and new positions of the reordered item',
          },
        ],
        limitations: [
          'Always provide unique id values for each item',
          'HTML content should be sanitized when coming from user input',
          'Version persistence keys when changing item structure (e.g., "accordion-v2")',
          'Use lazy mode for large content to improve initial render performance',
          'Maximum recommended nesting depth is 3 levels',
        ],
        examples: [
          `<!-- Search Example -->
<dui-accordion 
  [items]="items" 
  enable-search 
  search-placeholder="Search items...">
</dui-accordion>`,
          `<!-- Drag & Drop with Persistence -->
<dui-accordion 
  [items]="items" 
  enable-drag-drop 
  enable-persistence 
  persistence-key="my-accordion-v1"
  (accordionReorder)="handleReorder($event)">
</dui-accordion>`,
          `<!-- Nested Accordion -->
<dui-accordion 
  [items]="nestedItems" 
  enable-nested>
</dui-accordion>`,
          `<!-- With Actions and Events -->
<dui-accordion 
  [items]="items" 
  (accordionAction)="handleAction($event)"
  (afterOpen)="onItemOpen($event)">
</dui-accordion>`,
        ],
      },
    ],
    [
      'button',
      {
        id: 'button',
        name: 'Button',
        shortDescription: 'Interactive component for triggering actions or navigation',
        detailedDescription:
          'A versatile button component featuring multiple visual styles (primary, secondary, outline, ghost, success, danger, warning, info), flexible sizing from extra small to extra large, and comprehensive state management including loading, disabled, and active states. Supports icons, badges, pill styling, and full-width layouts.',
        usage: `<dui-button label="Click Me" variant="primary"></dui-button>`,
        props: [
          {
            name: 'label',
            type: 'string',
            description: 'Text displayed on the button',
            defaultValue: '',
            required: true,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style variant',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Button size (xs, sm, md, lg, xl)',
            defaultValue: 'md',
            required: false,
          },
          {
            name: 'icon',
            type: 'string',
            description: 'Icon to display (emoji or icon class)',
            defaultValue: '',
            required: false,
          },
          {
            name: 'icon-position',
            type: 'string',
            description: 'Icon position (left, right)',
            defaultValue: 'left',
            required: false,
          },
          {
            name: 'icon-only',
            type: 'boolean',
            description: 'Display only icon without label',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'badge',
            type: 'string',
            description: 'Badge value to display',
            defaultValue: '',
            required: false,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable button interactions',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Show loading state',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'pill',
            type: 'boolean',
            description: 'Apply pill-shaped styling',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'rounded',
            type: 'boolean',
            description: 'Apply rounded corners',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'full-width',
            type: 'boolean',
            description: 'Expand to full container width',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'click',
            description: 'Fired when button is clicked',
            payloadType: 'MouseEvent',
            payloadDescription: 'Standard mouse event object',
          },
        ],
        limitations: [
          'Loading state prevents interaction but maintains layout',
          'Icon-only buttons require explicit aria-label for accessibility',
        ],
        examples: [
          '<dui-button label="Primary" variant="primary"></dui-button>',
          '<dui-button label="Loading" loading variant="secondary"></dui-button>',
          '<dui-button icon="⚙️" label="Settings" icon-position="right"></dui-button>',
          '<dui-button label="Notifications" icon="🔔" badge="9" variant="warning"></dui-button>',
        ],
      },
    ],
    [
      'button-toggle',
      {
        id: 'button-toggle',
        name: 'Button Toggle',
        shortDescription:
          'Configurable interactive button groups for single and multiple selections',
        detailedDescription:
          'The Button Toggle component (ui-button-toggle-group) handles mutually exclusive (or multiple) choices through an intuitive row of buttons. It supports segmented controls, animated gliding indicators, split buttons, comprehensive custom styling, dropdown modes, and custom slots.',
        usage: `<dui-button-toggle-group
  mode="segmented"
  value="list"
  color="primary"
  [options]="[
    { value: 'list', label: 'List', icon: 'fas fa-list' },
    { value: 'grid', label: 'Grid', icon: 'fas fa-th' }
  ]"
></dui-button-toggle-group>`,
        props: [
          {
            name: 'value',
            type: 'any',
            description: 'Currently selected value or array of values',
            defaultValue: 'undefined',
          },
          {
            name: 'options',
            type: 'ToggleOption[]',
            description: 'Array of options: {value, label, icon}',
            defaultValue: '[]',
          },
          {
            name: 'mode',
            type: "'segmented' | 'dropdown' | 'default'",
            description: 'Behavior mode of the toggle group',
            defaultValue: "'default'",
          },
          {
            name: 'label',
            type: 'string',
            description: 'Optional text label for the entire group',
            defaultValue: "'",
          },
          {
            name: 'color',
            type: 'string',
            description: 'Color theme (e.g. primary, secondary, success, danger, warning, info)',
            defaultValue: "'primary'",
          },
          {
            name: 'variant',
            type: "'filled' | 'outlined' | 'text' | 'soft' | 'classic' | 'solid' | 'surface'",
            description: 'Styling variant of the buttons',
            defaultValue: "'filled'",
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            description: 'Size scaling of the buttons',
            defaultValue: "'medium'",
          },
          {
            name: 'display-mode',
            type: "'default' | 'icon-only'",
            description: 'Mode to hide text and show icons only',
            defaultValue: "'default'",
          },
          {
            name: 'keep-button-label',
            type: 'boolean',
            description: 'Whether to keep the original label in split-button setups',
            defaultValue: 'false',
          },
          {
            name: 'orientation',
            type: "'horizontal' | 'vertical'",
            description: 'Layout direction of the toggle buttons',
            defaultValue: "'horizontal'",
          },
          {
            name: 'custom-content',
            type: 'boolean',
            description: 'Use custom HTML slot content instead of data options',
            defaultValue: 'false',
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Renders the group in a visually loading state',
            defaultValue: 'false',
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disables interaction for all inner buttons',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'valueChange / ngModelChange',
            description: 'Fired when the selection is updated',
            payloadType: 'any',
            payloadDescription: 'The newly selected value (or array of values)',
          },
        ],
        limitations: [
          'Gliding Pill Animation is only cleanly supported in mode="segmented".',
          'Responsive collapsing into dropdowns must be handled manually or by using mode="dropdown".',
        ],
        examples: [
          `<dui-button-toggle-group mode="segmented" value="list" color="primary" [options]="viewOptions"></dui-button-toggle-group>`,
          `<dui-button-toggle-group value="option2" color="success" variant="soft" [options]="basicOptions"></dui-button-toggle-group>`,
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
          <dui-card>
            <div slot="header">Card Title</div>
            <div slot="content">
              Card content goes here
            </div>
            <div slot="footer">Card footer</div>
          </dui-card>
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
          <dui-input 
            placeholder="Enter text"
            [(ngModel)]="inputValue"
            [error]="isInvalid"
            errorMessage="Invalid input">
          </dui-input>
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
        shortDescription:
          'A modal dialog component for displaying important information or user actions.',
        detailedDescription:
          'The Dialog component displays content in a modal overlay. It can be used for confirmations, forms, alerts, or complex interactions. Supports custom sizes, animation, and backdrop interaction control.',
        usage: `
          <dui-dialog 
            [open]="isDialogOpen"
            title="Confirm Action"
            (close)="closeDialog()">
            <p>Are you sure you want to proceed?</p>
            <dui-dialog-footer>
              <dui-button (click)="closeDialog()">Cancel</dui-button>
              <dui-button variant="primary" (click)="confirm()">Confirm</dui-button>
            </dui-dialog-footer>
          </dui-dialog>
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
    [
      'checkbox',
      {
        id: 'checkbox',
        name: 'Checkbox',
        shortDescription: 'Selection control for binary or multiple choices',
        detailedDescription:
          'Versatile checkbox component with color variants (primary, secondary, success, danger, warning, info), premium styles (button, chip), multiple sizes, shape variants (default, rounded, square), indeterminate state support, validation states, helper text, and skeleton loading states.',
        usage: `<dui-checkbox label="Accept terms" checked></dui-checkbox>`,
        props: [
          {
            name: 'label',
            type: 'string',
            description: 'Checkbox label text',
            defaultValue: '',
            required: false,
          },
          {
            name: 'checked',
            type: 'boolean',
            description: 'Checked state',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'indeterminate',
            type: 'boolean',
            description: 'Indeterminate state',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'color',
            type: 'string',
            description: 'Color variant (primary, secondary, success, danger, warning, info)',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual variant (default, button, chip, rounded, square)',
            defaultValue: 'default',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Checkbox size (small, medium, large)',
            defaultValue: 'medium',
            required: false,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable checkbox',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'readonly',
            type: 'boolean',
            description: 'Make checkbox readonly',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'required',
            type: 'boolean',
            description: 'Mark as required field',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'invalid',
            type: 'boolean',
            description: 'Show error state',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'helper-text',
            type: 'string',
            description: 'Helper text below checkbox',
            defaultValue: '',
            required: false,
          },
          {
            name: 'error-message',
            type: 'string',
            description: 'Error message text',
            defaultValue: '',
            required: false,
          },
          {
            name: 'label-position',
            type: 'string',
            description: 'Label position (left, right)',
            defaultValue: 'right',
            required: false,
          },
          {
            name: 'skeleton',
            type: 'boolean',
            description: 'Show skeleton loading state',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'change',
            description: 'Fired when checked state changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains checked state (boolean)',
          },
        ],
        limitations: [
          'Indeterminate state is visual only and does not affect form submission',
          'Button and chip variants work best in groups',
        ],
        examples: [
          '<dui-checkbox label="Subscribe" color="primary" checked></dui-checkbox>',
          '<dui-checkbox label="Frontend" variant="button" color="info"></dui-checkbox>',
          '<dui-checkbox label="React" variant="chip" color="success" checked></dui-checkbox>',
          '<dui-checkbox label="Agree to terms" required invalid error-message="Required field"></dui-checkbox>',
        ],
      },
    ],
    [
      'radio',
      {
        id: 'radio',
        name: 'Radio Group',
        shortDescription:
          'Flexible radio group component for selecting a single option from a list',
        detailedDescription:
          'A robust radio group and radio component implementation supporting multiple visual styles (default, bordered, underlined, card), layouts (vertical, horizontal, grid), button group modes, color variations, validation states, and detailed option configuration (icons, badges, descriptions).',
        usage: `<dui-radio-group
  name="payment-method"
  [(ngModel)]="payment"
  variant="card"
  layout="grid"
  columns="2"
  [options]="[
    { value: 'card', label: 'Credit Card', icon: 'fas fa-credit-card' },
    { value: 'paypal', label: 'PayPal', icon: 'fab fa-paypal' }
  ]"
></dui-radio-group>`,
        props: [
          {
            name: 'name',
            type: 'string',
            description: 'Form name for the radio group',
            defaultValue: "'",
          },
          {
            name: 'value',
            type: 'any',
            description: 'Currently selected value',
            defaultValue: 'undefined',
          },
          {
            name: 'options',
            type: 'RadioOption[]',
            description:
              'Array of options: {value, label, description, badge, tooltip, icon, iconPosition, color, size, disabled}',
          },
          {
            name: 'layout',
            type: "'vertical' | 'horizontal' | 'grid'",
            description: 'Layout direction of the radio buttons',
            defaultValue: "'vertical'",
          },
          {
            name: 'columns',
            type: 'number',
            description: 'Number of columns when layout="grid"',
            defaultValue: '1',
          },
          {
            name: 'variant',
            type: "'default' | 'bordered' | 'underlined' | 'card'",
            description: 'Visual style variant of the radio items',
            defaultValue: "'default'",
          },
          {
            name: 'button-group',
            type: 'boolean',
            description: 'Display the group as attached toggle buttons',
            defaultValue: 'false',
          },
          {
            name: 'color',
            type: 'string',
            description: 'Color theme (e.g. primary, success, warning, danger, info)',
            defaultValue: "'primary'",
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            description: 'Overall size of the radio indicators and text',
            defaultValue: "'medium'",
          },
          {
            name: 'label',
            type: 'string',
            description: 'Top label text for the radio group layout',
            defaultValue: "'",
          },
          {
            name: 'helper-text',
            type: 'string',
            description: 'Help text displayed below the group label',
            defaultValue: "'",
          },
          {
            name: 'label-position',
            type: "'left' | 'right'",
            description: 'Position of individual radio labels relative to the indicator',
            defaultValue: "'right'",
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable the entire radio group',
            defaultValue: 'false',
          },
          {
            name: 'readonly',
            type: 'boolean',
            description: 'Make the group strictly read-only',
            defaultValue: 'false',
          },
          {
            name: 'required',
            type: 'boolean',
            description: 'Mark the group as form required',
            defaultValue: 'false',
          },
          {
            name: 'invalid',
            type: 'boolean',
            description: 'Force invalid/error state styling',
            defaultValue: 'false',
          },
          {
            name: 'error-message',
            type: 'string',
            description: 'Error message to display when invalid',
            defaultValue: "'",
          },
          {
            name: 'allow-empty',
            type: 'boolean',
            description: 'If true, clicking a selected radio will deselect it to empty string',
            defaultValue: 'false',
          },
          {
            name: 'skeleton',
            type: 'boolean',
            description: 'Show skeleton loading state placeholder',
            defaultValue: 'false',
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Show a loading indicator instead',
            defaultValue: 'false',
          },
          {
            name: 'show-dot',
            type: 'boolean',
            description: 'Toggle the inner circle dot visual',
            defaultValue: 'true',
          },
          {
            name: 'full-width',
            type: 'boolean',
            description: 'Ensure the group takes 100% width of container',
            defaultValue: 'false',
          },
          {
            name: 'enable-animation',
            type: 'boolean',
            description: 'Enable visual transition animations',
            defaultValue: 'true',
          },
          {
            name: 'ripple-effect',
            type: 'boolean',
            description: 'Enable material-style ripple click effect',
            defaultValue: 'true',
          },
          {
            name: 'elevation',
            type: 'number',
            description: 'Shadow elevation (0-5, primarily used for card variant)',
            defaultValue: '0',
          },
        ],
        events: [
          {
            name: 'radioGroupChange',
            description: 'Fired when the selected value changes',
            payloadType: 'CustomEvent<any>',
            payloadDescription: 'The new value is available in event.detail',
          },
        ],
        limitations: [
          'If you use [options] property instead of slotting child <dui-radio> tags, custom HTML projections inside items are not directly supported.',
          'Button Group layout relies on HTML flexbox behaviors, and may not play nice with external grid systems if not wrapped correctly.',
        ],
        examples: [
          `<dui-radio-group layout="horizontal" [options]="basicOptions"></dui-radio-group>`,
          `<dui-radio-group variant="card" layout="grid" columns="2" [options]="planOptions"></dui-radio-group>`,
          `<dui-radio-group button-group="true" color="danger">\n  <dui-radio value="yes" label="Yes"></dui-radio>\n  <dui-radio value="no" label="No"></dui-radio>\n</dui-radio-group>`,
        ],
      },
    ],
    [
      'tabs',
      {
        id: 'tabs',
        name: 'Tabs',
        shortDescription: 'Organize content into multiple panels with tab navigation',
        detailedDescription:
          'A flexible tabbed interface supporting multiple visual variants (underline, pills, enclosed), horizontal and vertical orientations, closable tabs, drag-and-drop reordering, dynamic tab addition, icons, badges, and color customization. Perfect for organizing related content sections.',
        usage: `<app-tab-stack variant="underline" active-tab="t1">
  <app-tab label="Tab 1" value="t1">Content 1</app-tab>
  <app-tab label="Tab 2" value="t2">Content 2</app-tab>
</app-tab-stack>`,
        props: [
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style (underline, pills, enclosed)',
            defaultValue: 'underline',
            required: false,
          },
          {
            name: 'orientation',
            type: 'string',
            description: 'Tab layout (horizontal, vertical)',
            defaultValue: 'horizontal',
            required: false,
          },
          {
            name: 'active-tab',
            type: 'string',
            description: 'Currently active tab value',
            defaultValue: '',
            required: false,
          },
          {
            name: 'color',
            type: 'string',
            description: 'Active tab color (primary, success, warning, info, danger)',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'closable',
            type: 'boolean',
            description: 'Enable tab close buttons',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'show-add-button',
            type: 'boolean',
            description: 'Show add new tab button',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'show-close-all-button',
            type: 'boolean',
            description: 'Show close all tabs button',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'drag-enabled',
            type: 'boolean',
            description: 'Enable drag-and-drop reordering',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'tabChange',
            description: 'Fired when active tab changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains tab value',
          },
          {
            name: 'tabClose',
            description: 'Fired when tab is closed',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains closed tab value',
          },
          {
            name: 'tabAdd',
            description: 'Fired when add button is clicked',
            payloadType: 'CustomEvent',
            payloadDescription: 'Empty event',
          },
          {
            name: 'tabReorder',
            description: 'Fired when tabs are reordered',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains new tab order',
          },
        ],
        limitations: [
          'Vertical orientation requires explicit height container',
          'Drag-enabled tabs may conflict with scroll containers',
        ],
        examples: [
          '<app-tab-stack variant="pills" active-tab="t1"><app-tab label="Active" value="t1">Content</app-tab></app-tab-stack>',
          '<app-tab-stack orientation="vertical" active-tab="config"><app-tab label="Config" value="config" icon="fas fa-cog">Settings</app-tab></app-tab-stack>',
          '<app-tab-stack closable show-add-button active-tab="f1"><app-tab label="File" value="f1">Content</app-tab></app-tab-stack>',
        ],
      },
    ],
    [
      'avatar',
      {
        id: 'avatar',
        name: 'Avatar',
        shortDescription: 'Display user profiles or entities with multiple shapes and indicators',
        detailedDescription:
          'Versatile avatar component supporting multiple shapes (circle, square, hexagon, squircle), content types (image, initials, text, icons), status indicators (online, away, busy, offline), badge overlays for notifications, and avatar groups with overflow management.',
        usage: `<dui-avatar name="John Doe" size="64px"></dui-avatar>`,
        props: [
          {
            name: 'name',
            type: 'string',
            description: 'User name (used for initials if no src)',
            defaultValue: '',
            required: false,
          },
          {
            name: 'src',
            type: 'string',
            description: 'Avatar image URL',
            defaultValue: '',
            required: false,
          },
          {
            name: 'content',
            type: 'string',
            description: 'Custom text content',
            defaultValue: '',
            required: false,
          },
          {
            name: 'icon',
            type: 'string',
            description: 'Icon to display',
            defaultValue: '',
            required: false,
          },
          {
            name: 'shape',
            type: 'string',
            description: 'Avatar shape (circle, square, hexagon, squircle)',
            defaultValue: 'circle',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Avatar size in pixels',
            defaultValue: '48px',
            required: false,
          },
          {
            name: 'status',
            type: 'string',
            description: 'Status indicator (online, away, busy, offline)',
            defaultValue: '',
            required: false,
          },
          {
            name: 'badge',
            type: 'string',
            description: 'Badge content (number or "dot")',
            defaultValue: '',
            required: false,
          },
          {
            name: 'badge-color',
            type: 'string',
            description: 'Badge background color',
            defaultValue: '#ef4444',
            required: false,
          },
        ],
        events: [
          {
            name: 'click',
            description: 'Fired when avatar is clicked',
            payloadType: 'MouseEvent',
            payloadDescription: 'Standard click event',
          },
        ],
        limitations: [
          'Hexagon shape may clip content at certain sizes',
          'Status indicators have fixed positions',
        ],
        examples: [
          '<dui-avatar src="https://i.pravatar.cc/150" name="User" size="64px"></dui-avatar>',
          '<dui-avatar name="John Doe" status="online" size="64px"></dui-avatar>',
          '<dui-avatar icon="⭐" shape="hexagon" size="64px"></dui-avatar>',
        ],
      },
    ],
    [
      'badge',
      {
        id: 'badge',
        name: 'Badge',
        shortDescription: 'Small status indicator for numerical values or notifications',
        detailedDescription:
          'Compact badge component for displaying counts, status updates, or highlighting UI elements. Supports semantic colors (primary, success, warning, danger, info), visual variants (standard, soft, outlined, dot), flexible positioning, value caps, pulse animations, glow effects, and icon support.',
        usage: `<dui-badge value="5" color="danger"><div>Icon</div></dui-badge>`,
        props: [
          {
            name: 'value',
            type: 'string | number',
            description: 'Badge content',
            defaultValue: '',
            required: false,
          },
          {
            name: 'color',
            type: 'string',
            description: 'Semantic color (primary, success, warning, danger, info)',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style (standard, soft, outlined)',
            defaultValue: 'standard',
            required: false,
          },
          {
            name: 'dot',
            type: 'boolean',
            description: 'Show as dot indicator',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'position',
            type: 'string',
            description: 'Badge position (top-right, top-left, bottom-right, bottom-left)',
            defaultValue: 'top-right',
            required: false,
          },
          {
            name: 'max',
            type: 'number',
            description: 'Maximum value to display (shows "99+" if exceeded)',
            defaultValue: 'Infinity',
            required: false,
          },
          {
            name: 'animation',
            type: 'string',
            description: 'Animation type (pulse, none)',
            defaultValue: 'none',
            required: false,
          },
          {
            name: 'glow',
            type: 'boolean',
            description: 'Enable glow effect',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [],
        limitations: [
          'Badge positioning requires parent with position: relative',
          'Dot variant ignores value prop',
        ],
        examples: [
          '<dui-badge value="1" color="primary"><div class="icon">👤</div></dui-badge>',
          '<dui-badge value="999" max="99" color="danger"><div class="icon">📧</div></dui-badge>',
          '<dui-badge dot color="success"><div class="icon">🟢</div></dui-badge>',
        ],
      },
    ],
    [
      'chip',
      {
        id: 'chip',
        name: 'Chip',
        shortDescription: 'Compact element for tags, filters, or attributes',
        detailedDescription:
          'Versatile chip component for representing input, attributes, selections, or actions. Supports style variants (filled, outlined, soft, gradient, text), shapes (pill, rounded, square, circle), sizes, avatars, icons, badges, counters, interactive states (clickable, removable, selected), loading states, and disabled states.',
        usage: `<dui-chip label="JavaScript" icon="js" color="warning"></dui-chip>`,
        props: [
          {
            name: 'label',
            type: 'string',
            description: 'Chip text content',
            defaultValue: '',
            required: true,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style (filled, outlined, soft, gradient, text)',
            defaultValue: 'filled',
            required: false,
          },
          {
            name: 'color',
            type: 'string',
            description: 'Color theme (primary, secondary, success, danger, warning, info)',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'shape',
            type: 'string',
            description: 'Chip shape (pill, rounded, square, circle)',
            defaultValue: 'pill',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Chip size (sm, md, lg)',
            defaultValue: 'md',
            required: false,
          },
          {
            name: 'icon',
            type: 'string',
            description: 'Icon to display',
            defaultValue: '',
            required: false,
          },
          {
            name: 'clickable',
            type: 'boolean',
            description: 'Make chip clickable',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'removable',
            type: 'boolean',
            description: 'Show remove button',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'selected',
            type: 'boolean',
            description: 'Selected state',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disabled state',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'click',
            description: 'Fired when chip is clicked (if clickable)',
            payloadType: 'MouseEvent',
            payloadDescription: 'Click event',
          },
          {
            name: 'remove',
            description: 'Fired when remove button is clicked',
            payloadType: 'CustomEvent',
            payloadDescription: 'Chip data',
          },
        ],
        limitations: [
          'Circle shape works best with icon-only chips',
          'Avatar and icon props are mutually exclusive',
        ],
        examples: [
          '<dui-chip label="Filled" variant="filled" color="primary"></dui-chip>',
          '<dui-chip label="Vue.js" icon="🟢" color="success"></dui-chip>',
          '<dui-chip label="Removable" removable variant="soft" color="danger"></dui-chip>',
        ],
      },
    ],
    [
      'dropdown',
      {
        id: 'dropdown',
        name: 'Dropdown',
        shortDescription: 'Selection component with search and hierarchy support',
        detailedDescription:
          'Robust dropdown selector supporting single and multi-select modes, searchable filtering, hierarchical cascading data structures, size variants, placeholder text, disabled state, and screen-reader optimizations. Perfect for complex selection scenarios.',
        usage: `<dui-dropdown [options]="options" placeholder="Select option"></dui-dropdown>`,
        props: [
          {
            name: 'options',
            type: 'array',
            description: 'Array of option objects {label, value, children?}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'placeholder',
            type: 'string',
            description: 'Placeholder text',
            defaultValue: 'Select...',
            required: false,
          },
          {
            name: 'multi-select',
            type: 'boolean',
            description: 'Enable multiple selection',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'cascading',
            type: 'boolean',
            description: 'Enable hierarchical cascading',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Dropdown size (sm, md, lg)',
            defaultValue: 'md',
            required: false,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable dropdown',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'searchable',
            type: 'boolean',
            description: 'Enable search filtering',
            defaultValue: 'true',
            required: false,
          },
        ],
        events: [
          {
            name: 'change',
            description: 'Fired when selection changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains selected value(s)',
          },
          {
            name: 'search',
            description: 'Fired when search input changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains search term',
          },
        ],
        limitations: [
          'Cascading requires nested children arrays in options',
          'Multi-select shows checkboxes automatically',
        ],
        examples: [
          '<dui-dropdown [options]="basicOptions" placeholder="Select item"></dui-dropdown>',
          '<dui-dropdown multi-select [options]="options" placeholder="Select multiple"></dui-dropdown>',
          '<dui-dropdown cascading [options]="cascadingOptions" placeholder="Explore"></dui-dropdown>',
        ],
      },
    ],
    [
      'tooltip',
      {
        id: 'tooltip',
        name: 'Tooltip',
        shortDescription: 'Contextual information overlay on hover or focus',
        detailedDescription:
          'Rich tooltip component with 8 positioning options (top, bottom, left, right, and corners), multiple variants (dark, light, glass, success, warning, error), shape options (default, pill), animations (fade, bounce, scale), and trigger customization. Perfect for providing contextual help and additional information.',
        usage: `<dui-tooltip content="Helpful text" position="top">
  <dui-button slot="target" label="Hover Me"></dui-button>
</dui-tooltip>`,
        props: [
          {
            name: 'content',
            type: 'string',
            description: 'Tooltip text content',
            defaultValue: '',
            required: true,
          },
          {
            name: 'position',
            type: 'string',
            description: 'Tooltip position (top, bottom, left, right, auto)',
            defaultValue: 'top',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual theme (dark, light, glass, success, warning, error)',
            defaultValue: 'dark',
            required: false,
          },
          {
            name: 'shape',
            type: 'string',
            description: 'Tooltip shape (default, pill)',
            defaultValue: 'default',
            required: false,
          },
          {
            name: 'animation',
            type: 'string',
            description: 'Entry animation (fade, bounce, scale)',
            defaultValue: 'fade',
            required: false,
          },
          {
            name: 'delay',
            type: 'number',
            description: 'Show delay in milliseconds',
            defaultValue: '200',
            required: false,
          },
        ],
        events: [
          {
            name: 'show',
            description: 'Fired when tooltip appears',
            payloadType: 'CustomEvent',
            payloadDescription: 'Empty event',
          },
          {
            name: 'hide',
            description: 'Fired when tooltip disappears',
            payloadType: 'CustomEvent',
            payloadDescription: 'Empty event',
          },
        ],
        limitations: [
          'Auto position requires viewport detection',
          'Glass variant needs background context',
        ],
        examples: [
          '<dui-tooltip content="Dark Theme" variant="dark"><dui-button label="Dark"></dui-button></dui-tooltip>',
          '<dui-tooltip content="Light Theme" variant="light"><dui-button label="Light"></dui-button></dui-tooltip>',
          '<dui-tooltip content="Glass Effect" variant="glass"><dui-button label="Glass"></dui-button></dui-tooltip>',
        ],
      },
    ],
    [
      'stepper',
      {
        id: 'stepper',
        name: 'Stepper',
        shortDescription: 'Multi-step workflow with progress indication',
        detailedDescription:
          'Guide users through multi-step processes with clear visual feedback. Supports horizontal and vertical orientations, linear and non-linear flows, progress dots or numbered indicators, validation states (completed, error, warning), step descriptions, navigation controls, and customizable styling.',
        usage: `<dui-stepper [steps]="steps" active-step="1" orientation="horizontal"></dui-stepper>`,
        props: [
          {
            name: 'steps',
            type: 'array',
            description: 'Array of step objects {label, description?, status?}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'active-step',
            type: 'number',
            description: 'Currently active step index',
            defaultValue: '0',
            required: false,
          },
          {
            name: 'orientation',
            type: 'string',
            description: 'Layout orientation (horizontal, vertical)',
            defaultValue: 'horizontal',
            required: false,
          },
          {
            name: 'flow',
            type: 'string',
            description: 'Navigation flow (linear, non-linear)',
            defaultValue: 'linear',
            required: false,
          },
          {
            name: 'progress-dot',
            type: 'boolean',
            description: 'Use dots instead of numbers',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'show-descriptions',
            type: 'boolean',
            description: 'Display step descriptions',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'show-controls',
            type: 'boolean',
            description: 'Show next/previous buttons',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'stepChange',
            description: 'Fired when active step changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains new step index',
          },
          {
            name: 'complete',
            description: 'Fired when all steps are completed',
            payloadType: 'CustomEvent',
            payloadDescription: 'Empty event',
          },
        ],
        limitations: [
          'Vertical orientation requires explicit container height',
          'Non-linear flow allows skipping validation',
        ],
        examples: [
          '<dui-stepper orientation="horizontal" [steps]="steps" active-step="1"></dui-stepper>',
          '<dui-stepper orientation="vertical" [steps]="steps" active-step="1" show-descriptions></dui-stepper>',
          '<dui-stepper progress-dot [steps]="steps" active-step="1"></dui-stepper>',
        ],
      },
    ],
    [
      'progress',
      {
        id: 'progress',
        name: 'Progress',
        shortDescription: 'Visual indicator for task completion or loading',
        detailedDescription:
          'Comprehensive progress component supporting line, circle, and dashboard types. Features status states (active, success, exception), buffer support, multiple stacked bars, time estimation, milestone markers, and premium visual effects.',
        usage: `<dui-progress [percent]="70" status="active"></dui-progress>`,
        props: [
          {
            name: 'percent',
            type: 'number',
            description: 'Progress percentage (0-100)',
            defaultValue: '0',
            required: true,
          },
          {
            name: 'type',
            type: "'line' | 'circle' | 'dashboard'",
            description: 'Type of progress indicator',
            defaultValue: "'line'",
          },
          {
            name: 'status',
            type: "'success' | 'exception' | 'normal' | 'active'",
            description: 'Status of progress',
            defaultValue: "'normal'",
          },
          {
            name: 'size',
            type: "'small' | 'default'",
            description: 'Size of progress (circle/dashboard only)',
            defaultValue: "'default'",
          },
          {
            name: 'strokeWidth',
            type: 'number',
            description: 'Width of progress bar stroke',
            defaultValue: '10',
          },
          {
            name: 'strokeColor',
            type: 'string | Gradient',
            description: 'Color of progress bar or gradient object',
            defaultValue: "'#1890ff'",
          },
          {
            name: 'trailColor',
            type: 'string',
            description: 'Color of unfilled part',
            defaultValue: "'#f0f0f0'",
          },
          {
            name: 'showInfo',
            type: 'boolean',
            description: 'Whether to display progress text/status icon',
            defaultValue: 'true',
          },
          {
            name: 'steps',
            type: 'number',
            description: 'Total step count for segmented progress',
            defaultValue: '0',
          },
          {
            name: 'strokeLinecap',
            type: "'round' | 'square'",
            description: 'Shape of progress linecap',
            defaultValue: "'round'",
          },
          {
            name: 'gapDegree',
            type: 'number',
            description: 'Gap degree for dashboard type',
            defaultValue: '0',
          },
          {
            name: 'gapPosition',
            type: "'top' | 'bottom' | 'left' | 'right'",
            description: 'Gap position for dashboard type',
            defaultValue: "'top'",
          },
          { name: 'buffer', type: 'number', description: 'Buffer percentage', defaultValue: '0' },
          {
            name: 'showBuffer',
            type: 'boolean',
            description: 'Show buffer indicator',
            defaultValue: 'false',
          },
          {
            name: 'multiProgress',
            type: 'MultiProgressItem[]',
            description: 'Array of progress segments for stacked display',
            defaultValue: '[]',
          },
          {
            name: 'milestones',
            type: 'Milestone[]',
            description: 'Array of milestone markers',
            defaultValue: '[]',
          },
          {
            name: 'estimatedTime',
            type: 'number',
            description: 'Estimated time remaining in seconds',
            defaultValue: '0',
          },
          {
            name: 'showTimeEstimate',
            type: 'boolean',
            description: 'Show time estimation text',
            defaultValue: 'false',
          },
          {
            name: 'paused',
            type: 'boolean',
            description: 'Whether progress is paused',
            defaultValue: 'false',
          },
          {
            name: 'showPauseButton',
            type: 'boolean',
            description: 'Show pause/resume button',
            defaultValue: 'false',
          },
          {
            name: 'decimalPrecision',
            type: 'number',
            description: 'Decimal precision for percentage display',
            defaultValue: '0',
          },
          {
            name: 'percentageColor',
            type: 'string',
            description: 'Custom color for percentage text',
            defaultValue: "'",
          },
          {
            name: 'labelPosition',
            type: "'inside' | 'outside' | 'top' | 'bottom'",
            description: 'Position of the percentage label',
            defaultValue: "'outside'",
          },
          {
            name: 'indeterminate',
            type: 'boolean',
            description: 'Enable infinite animation',
            defaultValue: 'false',
          },
          {
            name: 'liquid',
            type: 'boolean',
            description: 'Enable premium liquid wave animation',
            defaultValue: 'false',
          },
          {
            name: 'glass',
            type: 'boolean',
            description: 'Enable glassmorphism effect',
            defaultValue: 'false',
          },
          {
            name: 'glow',
            type: 'boolean',
            description: 'Enable dynamic glow effect',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'progressChange',
            description: 'Fired when progress internally changes (e.g., via animation)',
            payloadType: 'number',
          },
        ],
        limitations: [
          'Liquid effect requires high performance and may be disabled on low-end devices',
          'Glass variant requires a background to be visible',
          'MultiProgress overrides the primary percent property',
        ],
        examples: [
          '<dui-progress [percent]="30"></dui-progress>',
          '<dui-progress type="circle" [percent]="75" size="small"></dui-progress>',
          '<dui-progress [multiProgress]="[{percent: 20, color: \'#f50\'}, {percent: 30}]"></dui-progress>',
          '<dui-progress [percent]="50" [buffer]="80" [showBuffer]="true"></dui-progress>',
        ],
      },
    ],

    [
      'button-toggle',
      {
        id: 'button-toggle',
        name: 'Button Toggle',
        shortDescription: 'Segmented control with gliding indicator animation',
        detailedDescription:
          'Premium toggle button group with smooth gliding pill indicator, avatar support, status indicators, multiple color variants, style variants (filled, outlined, text, soft, classic, solid, surface), and support for both horizontal and vertical orientations. Perfect for modern segmented controls.',
        usage: `<dui-button-toggle-group value="option1" color="primary" [attr.options]="jsonOptions(options)"></dui-button-toggle-group>`,
        props: [
          {
            name: 'value',
            type: 'string',
            description: 'Currently selected option value',
            defaultValue: '',
            required: false,
          },
          {
            name: 'options',
            type: 'array',
            description: 'Array of option objects {value, label, icon?, avatar?, status?}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'color',
            type: 'string',
            description: 'Color theme (primary, secondary, success, danger, warning, info)',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Style variant (filled, outlined, text, soft, classic, solid, surface)',
            defaultValue: 'filled',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Button size (small, medium, large)',
            defaultValue: 'medium',
            required: false,
          },
          {
            name: 'orientation',
            type: 'string',
            description: 'Layout orientation (horizontal, vertical)',
            defaultValue: 'horizontal',
            required: false,
          },
        ],
        events: [
          {
            name: 'valueChange',
            description: 'Fired when selection changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains new value',
          },
        ],
        limitations: [
          'Gliding animation requires CSS transitions support',
          'Avatar options require avatar URLs in data',
        ],
        examples: [
          '<dui-button-toggle-group value="day" color="info" variant="soft" [attr.options]="timeOptions"></dui-button-toggle-group>',
          '<dui-button-toggle-group value="user1" color="primary" [attr.options]="avatarOptions"></dui-button-toggle-group>',
          '<dui-button-toggle-group value="high" color="danger" orientation="vertical" [attr.options]="priorityOptions"></dui-button-toggle-group>',
        ],
      },
    ],
    [
      'breadcrumb',
      {
        id: 'breadcrumb',
        name: 'Breadcrumb',
        shortDescription: 'Navigation aid showing hierarchical location',
        detailedDescription:
          'Essential navigation component for displaying user location within hierarchical structures. Features custom separators (characters or icons), smart collapsing with ellipsis dropdowns for deep paths, visual variants (standard, pills, glass), home icon option, and configurable max items display.',
        usage: `<dui-breadcrumb [items]="items" separator=">>"></dui-breadcrumb>`,
        props: [
          {
            name: 'items',
            type: 'array',
            description: 'Array of breadcrumb items {label, link}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'separator',
            type: 'string',
            description: 'Separator character or text',
            defaultValue: '/',
            required: false,
          },
          {
            name: 'separator-icon',
            type: 'string',
            description: 'Separator icon',
            defaultValue: '',
            required: false,
          },
          {
            name: 'max-items',
            type: 'number',
            description: 'Maximum items to show before collapsing',
            defaultValue: 'Infinity',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual variant (standard, pills, glass)',
            defaultValue: 'standard',
            required: false,
          },
          {
            name: 'show-home',
            type: 'boolean',
            description: 'Show home icon as first item',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'itemClick',
            description: 'Fired when breadcrumb item is clicked',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains clicked item data',
          },
        ],
        limitations: [
          'Glass variant requires background gradient context',
          'Collapsed items shown in dropdown on ellipsis click',
        ],
        examples: [
          '<dui-breadcrumb [items]="items" separator=">>"></dui-breadcrumb>',
          '<dui-breadcrumb [items]="collapsibleItems" max-items="4"></dui-breadcrumb>',
          '<dui-breadcrumb [items]="items" variant="pills" show-home></dui-breadcrumb>',
        ],
      },
    ],
    [
      'pagination',
      {
        id: 'pagination',
        name: 'Pagination',
        shortDescription: 'Navigate through paginated data sets',
        detailedDescription:
          'Flexible pagination component for breaking large datasets into manageable pages. Features visual variants (modern, compact), configurable controls (jump to first/last, page info report), customizable rows per page, and total record tracking.',
        usage: `<dui-pagination [total-records]="100" [rows]="10" show-report></dui-pagination>`,
        props: [
          {
            name: 'total-records',
            type: 'number',
            description: 'Total number of records',
            defaultValue: '0',
            required: true,
          },
          {
            name: 'rows',
            type: 'number',
            description: 'Records per page',
            defaultValue: '10',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style (modern, compact)',
            defaultValue: 'modern',
            required: false,
          },
          {
            name: 'show-jump-controls',
            type: 'boolean',
            description: 'Show first/last page buttons',
            defaultValue: 'true',
            required: false,
          },
          {
            name: 'show-report',
            type: 'boolean',
            description: 'Show page info summary',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'pageChange',
            description: 'Fired when page changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains new page number',
          },
          {
            name: 'rowsChange',
            description: 'Fired when rows per page changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains new rows value',
          },
        ],
        limitations: [
          'Requires manual data fetching on page change',
          'Compact variant may hide some controls on mobile',
        ],
        examples: [
          '<dui-pagination variant="modern" [total-records]="50" [rows]="10" show-report></dui-pagination>',
          '<dui-pagination variant="compact" [total-records]="100" [rows]="10"></dui-pagination>',
          '<dui-pagination [show-jump-controls]="false" [total-records]="100" [rows]="10"></dui-pagination>',
        ],
      },
    ],
    [
      'popover',
      {
        id: 'popover',
        name: 'Popover',
        shortDescription: 'Rich content overlay triggered by target element',
        detailedDescription:
          'Flexible popover component for displaying complex content or interactive elements. Supports multiple triggers (click, hover, focus), smart positioning with collision detection (top, bottom, left, right), visual themes (light, dark, glass), backdrop dimming, close button, and customizable content.',
        usage: `<dui-popover trigger="click" heading="Title" content="Description">
  <dui-button slot="target" label="Click Me"></dui-button>
</dui-popover>`,
        props: [
          {
            name: 'trigger',
            type: 'string',
            description: 'Trigger event (click, hover, focus)',
            defaultValue: 'click',
            required: false,
          },
          {
            name: 'placement',
            type: 'string',
            description: 'Popover position (top, bottom, left, right)',
            defaultValue: 'top',
            required: false,
          },
          {
            name: 'heading',
            type: 'string',
            description: 'Popover heading text',
            defaultValue: '',
            required: false,
          },
          {
            name: 'content',
            type: 'string',
            description: 'Popover content text',
            defaultValue: '',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual theme (light, dark, glass)',
            defaultValue: 'light',
            required: false,
          },
          {
            name: 'backdrop',
            type: 'boolean',
            description: 'Show backdrop dimming',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'show-close-button',
            type: 'boolean',
            description: 'Show close button',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'show',
            description: 'Fired when popover opens',
            payloadType: 'CustomEvent',
            payloadDescription: 'Empty event',
          },
          {
            name: 'hide',
            description: 'Fired when popover closes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Empty event',
          },
        ],
        limitations: [
          'Glass variant requires background context',
          'Hover trigger may conflict with touch devices',
        ],
        examples: [
          '<dui-popover trigger="click" heading="Info" content="Details"><dui-button label="Click"></dui-button></dui-popover>',
          '<dui-popover trigger="hover" content="Quick info"><dui-button label="Hover"></dui-button></dui-popover>',
          '<dui-popover variant="dark" heading="Dark" content="Content"><dui-button label="Dark"></dui-button></dui-popover>',
        ],
      },
    ],
    [
      'rating',
      {
        id: 'rating',
        name: 'Rating',
        shortDescription: 'Interactive feedback component with multiple visual metaphors',
        detailedDescription:
          'Intuitive rating component supporting multiple visual types (star, smiley, thumb), color themes, sizes (sm, md, lg), custom descriptive labels for each rating level, value display, and readonly mode. Perfect for collecting user feedback or displaying evaluations.',
        usage: `<dui-rating type="star" [value]="4"></dui-rating>`,
        props: [
          {
            name: 'type',
            type: 'string',
            description: 'Rating visual type (star, smiley, thumb)',
            defaultValue: 'star',
            required: false,
          },
          {
            name: 'value',
            type: 'number',
            description: 'Current rating value',
            defaultValue: '0',
            required: false,
          },
          {
            name: 'max',
            type: 'number',
            description: 'Maximum rating value',
            defaultValue: '5',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Icon size (sm, md, lg)',
            defaultValue: 'md',
            required: false,
          },
          {
            name: 'color',
            type: 'string',
            description: 'Active color (success, warning, danger, primary)',
            defaultValue: 'warning',
            required: false,
          },
          {
            name: 'labels',
            type: 'array',
            description: 'Custom label for each rating level',
            defaultValue: '[]',
            required: false,
          },
          {
            name: 'show-value',
            type: 'boolean',
            description: 'Display current value text',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'readonly',
            type: 'boolean',
            description: 'Readonly mode (no interaction)',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'change',
            description: 'Fired when rating value changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains new rating value',
          },
        ],
        limitations: [
          'Thumb type typically uses max=1 (binary)',
          'Labels array should match max value',
        ],
        examples: [
          '<dui-rating type="star" [value]="4" color="warning"></dui-rating>',
          '<dui-rating type="smiley" [value]="4" size="lg"></dui-rating>',
          '<dui-rating type="thumb" [value]="1" color="success"></dui-rating>',
        ],
      },
    ],
    [
      'switch',
      {
        id: 'switch',
        name: 'Switch',
        shortDescription: 'Toggle control for binary state changes',
        detailedDescription:
          'Modern toggle switch component for immediate binary actions. Features color variants (primary, success, warning, danger, info, secondary), sizes (xs, sm, md, lg, xl), icon support (custom on/off icons or default checkmarks), loading state, shape variants (rounded, pill), label positioning, and required field indicators.',
        usage: `<dui-switch label="Dark Mode" checked></dui-switch>`,
        props: [
          {
            name: 'label',
            type: 'string',
            description: 'Switch label text',
            defaultValue: '',
            required: false,
          },
          {
            name: 'checked',
            type: 'boolean',
            description: 'Checked state',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Color variant (primary, success, warning, danger, info, secondary)',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Switch size (xs, sm, md, lg, xl)',
            defaultValue: 'md',
            required: false,
          },
          {
            name: 'icon-on',
            type: 'string',
            description: 'Icon shown when ON',
            defaultValue: '',
            required: false,
          },
          {
            name: 'icon-off',
            type: 'string',
            description: 'Icon shown when OFF',
            defaultValue: '',
            required: false,
          },
          {
            name: 'show-default-icons',
            type: 'boolean',
            description: 'Show default checkmark icons',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'label-position',
            type: 'string',
            description: 'Label position (left, right)',
            defaultValue: 'right',
            required: false,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable switch',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Show loading spinner',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'required',
            type: 'boolean',
            description: 'Mark as required field',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'shape',
            type: 'string',
            description: 'Shape variant (default, pill)',
            defaultValue: 'default',
            required: false,
          },
        ],
        events: [
          {
            name: 'change',
            description: 'Fired when switch state changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains checked state (boolean)',
          },
        ],
        limitations: [
          'Loading state prevents interaction',
          'Icons work best with small emoji or icon fonts',
        ],
        examples: [
          '<dui-switch label="Primary" variant="primary" checked></dui-switch>',
          '<dui-switch label="Dark Mode" icon-on="🌙" icon-off="☀️" checked></dui-switch>',
          '<dui-switch label="Sound" icon-on="🔊" icon-off="🔇" checked variant="info"></dui-switch>',
        ],
      },
    ],
    [
      'tag',
      {
        id: 'tag',
        name: 'Tag',
        shortDescription: 'Visual label for categorization and status',
        detailedDescription:
          'Compact tag component for labeling and categorization. Supports severity levels (info, success, warning, danger) for status indication, size variants (default, large), rounded styling, and icon support. Perfect for status badges, category labels, and metadata display.',
        usage: `<dui-tag severity="info" value="Information"></dui-tag>`,
        props: [
          {
            name: 'value',
            type: 'string',
            description: 'Tag text content',
            defaultValue: '',
            required: true,
          },
          {
            name: 'severity',
            type: 'string',
            description: 'Status severity (info, success, warning, danger)',
            defaultValue: 'info',
            required: false,
          },
          {
            name: 'size',
            type: 'string',
            description: 'Tag size (default, large)',
            defaultValue: 'default',
            required: false,
          },
          {
            name: 'rounded',
            type: 'boolean',
            description: 'Apply rounded corners',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'icon',
            type: 'string',
            description: 'Icon to display',
            defaultValue: '',
            required: false,
          },
        ],
        events: [
          {
            name: 'click',
            description: 'Fired when tag is clicked',
            payloadType: 'MouseEvent',
            payloadDescription: 'Click event',
          },
        ],
        limitations: ['Severity determines color automatically', 'Icons appear before text'],
        examples: [
          '<dui-tag severity="info" value="Information"></dui-tag>',
          '<dui-tag severity="success" value="Completed"></dui-tag>',
          '<dui-tag severity="warning" value="Pending"></dui-tag>',
          '<dui-tag severity="danger" value="Error" icon="⚠"></dui-tag>',
        ],
      },
    ],
    [
      'timeline',
      {
        id: 'timeline',
        name: 'Timeline',
        shortDescription: 'Chronological visualization of events',
        detailedDescription:
          'Display a series of events in chronological order with flexible layouts. Supports horizontal and vertical orientations, alternating or left/right content alignment, custom markers (colors, icons, images), opposite slot for timestamps or metadata, and templated content areas.',
        usage: `<dui-timeline align="alternate" [value]="events">
  <ng-template let-item>
    <div>{{ item.status }}</div>
  </ng-template>
</dui-timeline>`,
        props: [
          {
            name: 'value',
            type: 'array',
            description: 'Array of timeline event objects',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'align',
            type: 'string',
            description: 'Content alignment (left, right, alternate)',
            defaultValue: 'left',
            required: false,
          },
          {
            name: 'orientation',
            type: 'string',
            description: 'Timeline orientation (horizontal, vertical)',
            defaultValue: 'vertical',
            required: false,
          },
          {
            name: 'marker-color',
            type: 'string',
            description: 'Default marker color',
            defaultValue: '',
            required: false,
          },
        ],
        events: [
          {
            name: 'itemClick',
            description: 'Fired when timeline item is clicked',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains event data',
          },
        ],
        limitations: [
          'Horizontal orientation needs adequate width',
          'Alternating alignment only works in vertical mode',
        ],
        examples: [
          '<dui-timeline align="alternate" [value]="events"><ng-template let-item><div>{{ item.status }}</div></ng-template></dui-timeline>',
          '<dui-timeline orientation="horizontal" [value]="events"><ng-template let-item><div>{{ item.status }}</div></ng-template></dui-timeline>',
        ],
      },
    ],
    [
      'tree',
      {
        id: 'tree',
        name: 'Tree',
        shortDescription: 'Hierarchical data visualization with multiple layouts',
        detailedDescription:
          'Display hierarchical data structures with support for standard tree layout or organization chart mode. Features checkboxes for selection, connecting lines, multiple variants (default, minimal, rounded, bordered, glass), theme options (light, dark), glow effects, custom connector styling, and expandable/collapsible nodes.',
        usage: `<app-tree [data]="treeData" show-lines="true"></app-tree>`,
        props: [
          {
            name: 'data',
            type: 'array',
            description: 'Hierarchical data array with children',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'layout',
            type: 'string',
            description: 'Tree layout (default, org-chart)',
            defaultValue: 'default',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style (default, minimal, rounded, bordered, glass)',
            defaultValue: 'default',
            required: false,
          },
          {
            name: 'show-lines',
            type: 'boolean',
            description: 'Show connecting lines',
            defaultValue: 'true',
            required: false,
          },
          {
            name: 'checkboxes',
            type: 'boolean',
            description: 'Enable checkboxes for selection',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'selectable',
            type: 'boolean',
            description: 'Enable node selection',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'theme',
            type: 'string',
            description: 'Color theme (light, dark)',
            defaultValue: 'light',
            required: false,
          },
          {
            name: 'showGlow',
            type: 'boolean',
            description: 'Enable glow effects',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'nodeSelect',
            description: 'Fired when node is selected',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains node data',
          },
          {
            name: 'nodeExpand',
            description: 'Fired when node is expanded',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains node data',
          },
          {
            name: 'nodeCollapse',
            description: 'Fired when node is collapsed',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains node data',
          },
        ],
        limitations: [
          'Org-chart layout requires adequate horizontal space',
          'Glass variant needs background gradient',
        ],
        examples: [
          '<app-tree [data]="basicTreeData" show-lines="true"></app-tree>',
          '<app-tree [data]="treeData" checkboxes="true" selectable="true"></app-tree>',
          '<app-tree layout="org-chart" [data]="orgData" variant="rounded"></app-tree>',
        ],
      },
    ],
    [
      'carousel',
      {
        id: 'carousel',
        name: 'Carousel',
        shortDescription: 'Interactive slideshow for cycling through content',
        detailedDescription:
          'Versatile carousel component for displaying images, cards, or custom content. Features multiple transition effects (slide, fade), center mode with partial visibility, responsive multi-slide display, infinite loop, autoplay with configurable intervals, navigation arrows, indicators (dots), and touch/swipe support.',
        usage: `<dui-carousel autoplay="true" show-progress="true">
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
</dui-carousel>`,
        props: [
          {
            name: 'effect',
            type: 'string',
            description: 'Transition effect (slide, fade)',
            defaultValue: 'slide',
            required: false,
          },
          {
            name: 'autoplay',
            type: 'boolean',
            description: 'Enable autoplay',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'autoplay-interval',
            type: 'number',
            description: 'Autoplay interval in milliseconds',
            defaultValue: '3000',
            required: false,
          },
          {
            name: 'infinite',
            type: 'boolean',
            description: 'Enable infinite loop',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'arrows',
            type: 'boolean',
            description: 'Show navigation arrows',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'indicators',
            type: 'boolean',
            description: 'Show dot indicators',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'show-progress',
            type: 'boolean',
            description: 'Show progress bar',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'center-mode',
            type: 'boolean',
            description: 'Enable center mode with partial slides',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'slides-to-show',
            type: 'number',
            description: 'Number of slides to display',
            defaultValue: '1',
            required: false,
          },
        ],
        events: [
          {
            name: 'slideChange',
            description: 'Fired when active slide changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains new slide index',
          },
          {
            name: 'beforeChange',
            description: 'Fired before slide transition',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains current and next indices',
          },
        ],
        limitations: [
          'Center mode requires adequate container width',
          'Autoplay pauses on user interaction',
        ],
        examples: [
          '<dui-carousel effect="fade" autoplay="true" autoplay-interval="4000"><div class="slide">1</div></dui-carousel>',
          '<dui-carousel center-mode="true" slides-to-show="1" center-padding="20%"><div class="slide">1</div></dui-carousel>',
        ],
      },
    ],
    [
      'radio',
      {
        id: 'radio',
        name: 'Radio',
        shortDescription: 'Single selection from a group of options',
        detailedDescription:
          'Flexible radio button component with premium variants (card, bordered, underlined), button group styling, multiple layouts (vertical, horizontal, grid), color themes, size options, state management (disabled, readonly, error), helper text, skeleton loading, and both options array or slotted children support.',
        usage: `<dui-radio-group name="choice" [options]="options" value="option1"></dui-radio-group>`,
        props: [
          {
            name: 'name',
            type: 'string',
            description: 'Radio group name',
            defaultValue: '',
            required: true,
          },
          {
            name: 'value',
            type: 'string',
            description: 'Selected value',
            defaultValue: '',
            required: false,
          },
          {
            name: 'options',
            type: 'array',
            description: 'Array of option objects {value, label, description?}',
            defaultValue: '[]',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual variant (default, card, bordered, underlined)',
            defaultValue: 'default',
            required: false,
          },
          {
            name: 'layout',
            type: 'string',
            description: 'Layout mode (vertical, horizontal, grid)',
            defaultValue: 'vertical',
            required: false,
          },
          {
            name: 'columns',
            type: 'number',
            description: 'Number of grid columns',
            defaultValue: '2',
            required: false,
          },

          {
            name: 'color',
            type: 'string',
            description: 'Color theme (primary, success, danger, etc)',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable all radios',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'required',
            type: 'boolean',
            description: 'Mark as required',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'change',
            description: 'Fired when selection changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains selected value',
          },
        ],
        limitations: [
          'Card variant works best with grid layout',
          'Button group requires layout horizontal or vertical',
        ],
        examples: [
          '<dui-radio-group name="size" value="medium" [options]="sizeOptions"></dui-radio-group>',
          '<dui-radio-group name="plan" variant="card" layout="grid" columns="2" [options]="planOptions"></dui-radio-group>',
          '<dui-radio-group name="priority" button-group layout="horizontal" value="medium" [options]="priorityOptions"></dui-radio-group>',
        ],
      },
    ],
    [
      'toggle',
      {
        id: 'toggle',
        name: 'Toggle',
        shortDescription: 'Selection control with grouping and advanced styling',
        detailedDescription:
          'Versatile toggle component supporting single/multiple selection modes, multiple layouts (horizontal, vertical, grid), visual variants (default, rounded, outlined), premium features (glassmorphism, elevation, custom thumb shapes), skeleton loading, color themes, and flexible content options.',
        usage: `<app-toggle label="Feature" checked color="primary"></app-toggle>`,
        props: [
          {
            name: 'label',
            type: 'string',
            description: 'Toggle label text',
            defaultValue: '',
            required: false,
          },
          {
            name: 'checked',
            type: 'boolean',
            description: 'Checked state',
            defaultValue: 'false',
            required: false,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual variant (default, rounded, outlined, glass)',
            defaultValue: 'default',
            required: false,
          },
          {
            name: 'color',
            type: 'string',
            description: 'Color theme (primary, success, info, etc)',
            defaultValue: 'primary',
            required: false,
          },
          {
            name: 'elevation',
            type: 'number',
            description: 'Shadow elevation level (1-5)',
            defaultValue: '0',
            required: false,
          },
          {
            name: 'thumb-shape',
            type: 'string',
            description: 'Thumb shape (circle, square)',
            defaultValue: 'circle',
            required: false,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disable toggle',
            defaultValue: 'false',
            required: false,
          },
        ],
        events: [
          {
            name: 'change',
            description: 'Fired when toggle state changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains checked state',
          },
        ],
        limitations: [
          'Glass variant requires gradient background',
          'Elevation may conflict with some layouts',
        ],
        examples: [
          '<app-toggle label="Default Style" variant="default" checked color="primary"></app-toggle>',
          '<app-toggle label="Rounded Style" variant="rounded" checked color="success"></app-toggle>',
          '<app-toggle label="Glass Variant" variant="glass" checked color="success"></app-toggle>',
        ],
      },
    ],
    [
      'advanced-data-table',
      {
        id: 'advanced-data-table',
        name: 'Advanced Data Table',
        shortDescription: 'High-performance table for large datasets with advanced features',
        detailedDescription:
          'Versatile data table supporting virtualization, multi-column sorting, advanced filtering, row grouping, tree data, inline editing, and state persistence. Includes built-in export (Excel, PDF, CSV), sticky headers, pagination, and responsive mobile card views.',
        usage: `<app-advanced-data-table [columns]="cols" [data]="records" pagination searchable></app-advanced-data-table>`,
        props: [
          {
            name: 'columns',
            type: 'TableColumn[] | string',
            description: 'Column definitions',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'data',
            type: 'TableRow[] | string',
            description: 'Table data array',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'selectable',
            type: 'boolean',
            description: 'Enable row selection',
            defaultValue: 'false',
          },
          {
            name: 'multiSelect',
            type: 'boolean',
            description: 'Enable multiple row selection',
            defaultValue: 'false',
          },
          {
            name: 'editable',
            type: 'boolean',
            description: 'Enable inline editing',
            defaultValue: 'false',
          },
          {
            name: 'pagination',
            type: 'boolean',
            description: 'Enable pagination',
            defaultValue: 'false',
          },
          {
            name: 'pageSize',
            type: 'number',
            description: 'Number of rows per page',
            defaultValue: '10',
          },
          {
            name: 'virtualScroll',
            type: 'boolean',
            description: 'Enable virtual scrolling',
            defaultValue: 'false',
          },
          {
            name: 'searchable',
            type: 'boolean',
            description: 'Enable global searching',
            defaultValue: 'false',
          },
          {
            name: 'sortable',
            type: 'boolean',
            description: 'Enable column sorting',
            defaultValue: 'false',
          },
          {
            name: 'filterable',
            type: 'boolean',
            description: 'Enable column filtering',
            defaultValue: 'false',
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Display loading state',
            defaultValue: 'false',
          },
          {
            name: 'grouping',
            type: 'boolean',
            description: 'Enable row grouping',
            defaultValue: 'false',
          },
          {
            name: 'treeData',
            type: 'boolean',
            description: 'Enable hierarchical tree data',
            defaultValue: 'false',
          },
          {
            name: 'exportable',
            type: 'boolean',
            description: 'Enable data export',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'rowSelect',
            description: 'Fired when rows are selected',
            payloadType: '{selectedRows: (string|number)[]}',
          },
          {
            name: 'cellEdit',
            description: 'Fired after a cell is edited',
            payloadType: '{rowId, field, value}',
          },
          {
            name: 'sortChange',
            description: 'Fired when sorting changes',
            payloadType: 'SortConfig',
          },
          {
            name: 'pageChange',
            description: 'Fired when page changes',
            payloadType: '{page, pageSize}',
          },
          {
            name: 'dataExport',
            description: 'Fired when background export completes',
            payloadType: '{data, format}',
          },
        ],
        limitations: [
          'Virtualization requires fixed container height',
          'Excel export depends on internal worker performance',
          'Multi-sort requires MaxSortColumns configuration',
        ],
        examples: [
          '<app-advanced-data-table [columns]="cols" [data]="data" pagination searchable></app-advanced-data-table>',
          '<app-advanced-data-table [columns]="cols" [data]="data" virtualScroll [virtualRowHeight]="40"></app-advanced-data-table>',
        ],
      },
    ],
    [
      'app-chart',
      {
        id: 'app-chart',
        name: 'General Chart',
        shortDescription: 'Flexible Chart.js wrapper for various visualization types',
        detailedDescription:
          'Universal charting component based on Chart.js. Supports Line, Bar, Pie, Radar, PolarArea, and Bubble charts with full access to underlying options and responsive behavior.',
        usage: `<app-chart [chartType]="'line'" [data]="chartData"></app-chart>`,
        props: [
          {
            name: 'chartType',
            type: 'ChartType',
            description: 'Chart type (line, bar, pie, radar, etc.)',
            defaultValue: "'bar'",
            required: true,
          },
          {
            name: 'data',
            type: 'ChartData',
            description: 'Chart.js data object',
            defaultValue: '{}',
            required: true,
          },
          {
            name: 'options',
            type: 'ChartOptions',
            description: 'Chart.js options object',
            defaultValue: '{}',
          },
          {
            name: 'showLegend',
            type: 'boolean',
            description: 'Toggle legend visibility',
            defaultValue: 'true',
          },
          {
            name: 'responsive',
            type: 'boolean',
            description: 'Enable responsive resizing',
            defaultValue: 'true',
          },
          {
            name: 'chartTitle',
            type: 'string',
            description: 'Chart title text',
            defaultValue: "'",
          },
        ],
        events: [
          {
            name: 'chartClick',
            description: 'Fired when chart elements are clicked',
            payloadType: '{event, active, data}',
          },
        ],
        limitations: ['Requires Chart.js to be available in the environment'],
        examples: [
          '<app-chart chartType="pie" [data]="salesData"></app-chart>',
          '<app-chart chartType="line" [data]="trends" [options]="customOptions"></app-chart>',
        ],
      },
    ],
    [
      'pie-chart',
      {
        id: 'pie-chart',
        name: 'Pie Chart',
        shortDescription: 'Circular charts for proportional data — pie, doughnut and polar area',
        detailedDescription:
          'Powered by Chart.js, the Pie Chart component renders pie, doughnut, and polar area variants from a single API. Ideal for showing part-to-whole relationships with up to 6 segments.',
        usage: `<dui-app-chart chartType="pie" showLegend="true" [data]="chartData"></dui-app-chart>`,
        props: [
          {
            name: 'chartType',
            type: "'pie' | 'doughnut' | 'polarArea'",
            description: 'Chart variant to render',
            defaultValue: "'pie'",
            required: true,
          },
          {
            name: 'data',
            type: 'ChartData | string',
            description: 'Chart.js data object with labels and datasets',
            defaultValue: '—',
            required: true,
          },
          {
            name: 'options',
            type: 'ChartOptions | string',
            description: 'Chart.js options override (e.g. { cutout: "60%" })',
            defaultValue: '{}',
          },
          {
            name: 'showLegend',
            type: "'true' | 'false'",
            description: 'Toggle legend visibility',
            defaultValue: "'true'",
          },
          {
            name: 'legendPosition',
            type: "'top' | 'bottom' | 'left' | 'right'",
            description: 'Legend placement',
            defaultValue: "'top'",
          },
          {
            name: 'responsive',
            type: "'true' | 'false'",
            description: 'Scale with container',
            defaultValue: "'true'",
          },
          {
            name: 'chartTitle',
            type: 'string',
            description: 'Optional title above the chart',
            defaultValue: "'",
          },
        ],
        events: [
          {
            name: 'chartClick',
            description: 'Fired when a segment is clicked',
            payloadType: '{ event, active, data }',
          },
        ],
        limitations: ['Maximum 6 segments recommended for readability', 'Requires Chart.js'],
        examples: [
          '<dui-app-chart chartType="pie" showLegend="true" legendPosition="right" [data]="salesData"></dui-app-chart>',
          '<dui-app-chart chartType="doughnut" showLegend="true" [data]="budgetData" [options]="{ cutout: \'60%\' }"></dui-app-chart>',
        ],
      },
    ],
    [
      'waffle-chart',
      {
        id: 'waffle-chart',
        name: 'Waffle Chart',
        shortDescription: 'Grid-based chart showing part-to-whole percentages',
        detailedDescription:
          'A 10×10 CSS grid where each cell represents 1% of the total. Segments are colour-coded and normalised automatically. Supports rounded cells, legend, gap control, hover tooltips, and side-by-side comparison.',
        usage: `<app-waffle-chart [segments]="segments" [showLegend]="true"></app-waffle-chart>`,
        props: [
          {
            name: 'segments',
            type: 'WaffleSegment[]',
            description: 'Array of { label, value, color } objects',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'cellSize',
            type: 'number',
            description: 'Width/height of each cell in px',
            defaultValue: '28',
          },
          {
            name: 'gap',
            type: 'number',
            description: 'Gap between cells in px',
            defaultValue: '3',
          },
          {
            name: 'rounded',
            type: 'boolean',
            description: 'Apply border-radius to cells',
            defaultValue: 'true',
          },
          {
            name: 'showLegend',
            type: 'boolean',
            description: 'Show colour legend below grid',
            defaultValue: 'true',
          },
          {
            name: 'emptyColor',
            type: 'string',
            description: 'CSS colour for unfilled cells',
            defaultValue: "'#e5e7eb'",
          },
          {
            name: 'title',
            type: 'string',
            description: 'Optional label below the legend',
            defaultValue: "'",
          },
          { name: 'rows', type: 'number', description: 'Grid row count', defaultValue: '10' },
          { name: 'cols', type: 'number', description: 'Grid column count', defaultValue: '10' },
        ],
        events: [],
        limitations: [
          'Keep segments ≤ 5 to avoid visual clutter',
          'Values are normalised — they do not need to sum to 100',
        ],
        examples: [
          "<app-waffle-chart [segments]=\"[{label:'Done',value:72,color:'#6366f1'},{label:'Left',value:28,color:'#e5e7eb'}]\" [showLegend]=\"true\"></app-waffle-chart>",
        ],
      },
    ],
    [
      'bar-chart',
      {
        id: 'bar-chart',
        name: 'Bar Chart',
        shortDescription: 'Specialized bar chart for simple and multi-series data',
        detailedDescription:
          'Feature-rich bar chart with vertical/horizontal orientations, stacked bars, animated transitions, custom color palettes, and interactive tooltips.',
        usage: `<app-bar-chart [data]="simpleData"></app-bar-chart>`,
        props: [
          {
            name: 'data',
            type: 'BarData[]',
            description: 'Simple label/value data array',
            defaultValue: '[]',
          },
          {
            name: 'datasets',
            type: 'BarChartDataset[]',
            description: 'Multi-series dataset array',
            defaultValue: '[]',
          },
          {
            name: 'orientation',
            type: "'vertical' | 'horizontal'",
            description: 'Chart layout direction',
            defaultValue: "'vertical'",
          },
          {
            name: 'stacked',
            type: 'boolean',
            description: 'Enable stacked bar behavior',
            defaultValue: 'false',
          },
          {
            name: 'showValues',
            type: 'boolean',
            description: 'Display values directly on bars',
            defaultValue: 'false',
          },
          {
            name: 'height',
            type: 'number',
            description: 'Fixed height in pixels',
            defaultValue: '400',
          },
          {
            name: 'barColor',
            type: 'string',
            description: 'Default color for bars',
            defaultValue: "'#3b82f6'",
          },
        ],
        events: [],
        limitations: ['Responsive mode may hide labels on small containers'],
        examples: [
          '<app-bar-chart [data]="salesRecords" orientation="horizontal"></app-bar-chart>',
          '<app-bar-chart [datasets]="regionalData" stacked showValues></app-bar-chart>',
        ],
      },
    ],
    [
      'speedometer',
      {
        id: 'speedometer',
        name: 'Speedometer',
        shortDescription: 'Analog gauge for visualizing scalar ranges',
        detailedDescription:
          'High-performance gauge component for displaying progress or values within a set scale. Supports color-coded ranges, needle comparisons (ghost needle), custom tick marks, and interactive "set value" mode.',
        usage: `<app-speedometer [value]="75" [maxValue]="100" label="Performance"></app-speedometer>`,
        props: [
          {
            name: 'value',
            type: 'number',
            description: 'Current value to display',
            defaultValue: '0',
            required: true,
          },
          {
            name: 'secondaryValue',
            type: 'number',
            description: 'Comparison ghost needle value',
            defaultValue: 'undefined',
          },
          { name: 'minValue', type: 'number', description: 'Scale minimum', defaultValue: '0' },
          { name: 'maxValue', type: 'number', description: 'Scale maximum', defaultValue: '100' },
          { name: 'size', type: 'number', description: 'Diameter in pixels', defaultValue: '250' },
          {
            name: 'ranges',
            type: 'string',
            description: 'JSON array of color zones [{min, max, color}]',
            defaultValue: "'",
          },
          {
            name: 'interactive',
            type: 'boolean',
            description: 'Allow dragging the needle',
            defaultValue: 'false',
          },
          {
            name: 'needleShape',
            type: "'triangle' | 'arrow' | 'line'",
            description: 'Visual style of needle',
            defaultValue: "'triangle'",
          },
        ],
        events: [
          {
            name: 'valueChange',
            description: 'Fired when needle is moved in interactive mode',
            payloadType: 'number',
          },
        ],
        limitations: ['Ranges must be provided as valid JSON string if via attributes'],
        examples: [
          '<app-speedometer [value]="80" [maxValue]="120" unit="km/h"></app-speedometer>',
          '<app-speedometer [value]="45" interactive [ranges]="statusRanges"></app-speedometer>',
        ],
      },
    ],
    [
      'knob',
      {
        id: 'knob',
        name: 'Knob',
        shortDescription: 'Industrial-style circular control for selecting values',
        detailedDescription:
          'Precision input component mimicking physical dial controls. Supports snapping, custom ranges, wheel interaction, and manual text input on double-click.',
        usage: `<app-knob [value]="50" [min]="0" [max]="100"></app-knob>`,
        props: [
          {
            name: 'value',
            type: 'number',
            description: 'Current selector value',
            defaultValue: '0',
            required: true,
          },
          { name: 'min', type: 'number', description: 'Minimum allowed value', defaultValue: '0' },
          {
            name: 'max',
            type: 'number',
            description: 'Maximum allowed value',
            defaultValue: '100',
          },
          { name: 'step', type: 'number', description: 'Step increment', defaultValue: '1' },
          { name: 'size', type: 'number', description: 'Diameter in pixels', defaultValue: '150' },
          {
            name: 'color',
            type: 'string',
            description: 'Active arc color',
            defaultValue: "'#3b82f6'",
          },
          {
            name: 'snap',
            type: 'boolean',
            description: 'Snap to step markers',
            defaultValue: 'false',
          },
          {
            name: 'allowInput',
            type: 'boolean',
            description: 'Enable manual typing on double-click',
            defaultValue: 'true',
          },
        ],
        events: [
          {
            name: 'knobChange',
            description: 'Fired when value is committed',
            payloadType: 'number',
          },
          {
            name: 'knobInput',
            description: 'Fired continuously during rotation',
            payloadType: 'number',
          },
        ],
        limitations: ['Touch rotation requires accurate pointer calculation'],
        examples: [
          '<app-knob [value]="15" [min]="0" [max]="30" step="1" showTicks></app-knob>',
          '<app-knob [value]="45" color="#ef4444" [size]="100" valueSuffix="°C"></app-knob>',
        ],
      },
    ],
    [
      'layout-manager',
      {
        id: 'layout-manager',
        name: 'Workspace Layout Manager',
        shortDescription: 'Enterprise-grade dockable window and region management system',
        detailedDescription:
          'Comprehensive workspace manager supporting hierarchical regions, dockable panels, tabbed interfaces, popout windows, split views, and state persistence. Ideal for creating IntelliJ/VSCode-like IDE structures or complex monitoring dashboards.',
        usage: `<app-layout-manager [regions]="layoutConfig" direction="vertical"></app-layout-manager>`,
        props: [
          {
            name: 'regions',
            type: 'LayoutRegionConfig[] | string',
            description: 'Initial region layout structure',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'direction',
            type: "'horizontal' | 'vertical'",
            description: 'Root split direction',
            defaultValue: "'horizontal'",
          },
          {
            name: 'saveState',
            type: 'boolean',
            description: 'Persist layout to localStorage',
            defaultValue: 'true',
          },
          {
            name: 'stateKey',
            type: 'string',
            description: 'Storage key for state persistence',
            defaultValue: "'app-layout-state'",
          },
        ],
        events: [
          {
            name: 'layoutChange',
            description: 'Fired when any region or panel is rearranged',
            payloadType: '{regions}',
          },
          {
            name: 'panelAdded',
            description: 'Fired when a new panel is registered',
            payloadType: 'PanelState',
          },
          {
            name: 'panelMoved',
            description: 'Fired when a panel is dragged to a new region',
            payloadType: '{panelId, from, to}',
          },
          {
            name: 'panelMaximized',
            description: 'Fired when a panel fills the workspace',
            payloadType: '{panelId}',
          },
        ],
        limitations: [
          'Requires unique IDs for all regions and panels',
          'Popout windows are simulated within the viewport overlay',
        ],
        examples: [
          '<app-layout-manager [regions]="ideLayout" saveState></app-layout-manager>',
          '<app-layout-manager direction="vertical" [regions]="dashboardLayout"></app-layout-manager>',
        ],
      },
    ],
    [
      'code-editor',
      {
        id: 'code-editor',
        name: 'Smart Code Editor',
        shortDescription: 'Advanced code editor with syntax highlighting and multi-file tabs',
        detailedDescription:
          'Feature-rich code editor supporting JS, HTML, CSS, JSON, Python, and more. Includes multi-tab file management, syntax highlighting, line numbers, code folding, minimap, integrated terminal/output panels, and ribbon-style toolbars.',
        usage: `<dui-code-editor [files]="projectFiles" language="javascript" theme="vs-dark"></dui-code-editor>`,
        props: [
          {
            name: 'files',
            type: 'EditorFile[]',
            description: 'Array of files {name, content, language}',
            defaultValue: '[]',
          },
          {
            name: 'language',
            type: 'string',
            description: 'Active language highlighting',
            defaultValue: "'javascript'",
          },
          {
            name: 'theme',
            type: "'vs-dark' | 'vs-light'",
            description: 'Visual color theme',
            defaultValue: "'vs-dark'",
          },
          {
            name: 'lineNumbers',
            type: 'boolean',
            description: 'Toggle line number gutter',
            defaultValue: 'true',
          },
          {
            name: 'toolbar',
            type: 'boolean',
            description: 'Show ribbon toolbar',
            defaultValue: 'true',
          },
          {
            name: 'showMinimap',
            type: 'boolean',
            description: 'Toggle code minimap',
            defaultValue: 'true',
          },
        ],
        events: [
          {
            name: 'valueChange',
            description: 'Fired when active file content changes',
            payloadType: 'string',
          },
          {
            name: 'runCode',
            description: 'Fired when ribbon RUN button is clicked',
            payloadType: 'void',
          },
        ],
        limitations: [
          'Syntax highlighting uses internal regex engine, not full LSP',
          'Minimap requires accurate character measurement for sync',
        ],
        examples: [
          '<dui-code-editor [files]="myScript" theme="vs-dark" showSidebar></dui-code-editor>',
          '<dui-code-editor language="json" [value]="configJson" [toolbar]="false"></dui-code-editor>',
        ],
      },
    ],
    [
      'dashboard',
      {
        id: 'dashboard',
        name: 'Interactive Dashboard',
        shortDescription: 'Drag-and-drop grid system for interactive widget boards',
        detailedDescription:
          'Premium grid container for arranging widgets and cards. Supports interactive dragging/resizing, configurable columns, theme variations (glassmorphism, vibrant), and responsive layout adaptation.',
        usage: `<dui-dashboard [columns]="12" [widgets]="widgetList"></dui-dashboard>`,
        props: [
          { name: 'columns', type: 'number', description: 'Grid column count', defaultValue: '12' },
          {
            name: 'widgets',
            type: 'DashboardWidget[]',
            description: 'Array of widget definitions',
            defaultValue: '[]',
          },
          {
            name: 'isEditable',
            type: 'boolean',
            description: 'Enable drag/resize interactions',
            defaultValue: 'false',
          },
          {
            name: 'theme',
            type: "'light' | 'dark' | 'glass'",
            description: 'Dashboard visual style',
            defaultValue: "'light'",
          },
        ],
        events: [
          {
            name: 'layoutChange',
            description: 'Fired when widgets are moved or resized',
            payloadType: 'DashboardWidget[]',
          },
          {
            name: 'widgetAction',
            description: 'Fired on widget-specific custom actions',
            payloadType: '{widgetId, action}',
          },
        ],
        limitations: [
          'Best used with responsive grid units (1-12)',
          'Glass theme requires high-contrast background for readability',
        ],
        examples: [
          '<dui-dashboard [widgets]="myStats" [isEditable]="true" theme="glass"></dui-dashboard>',
          '<dui-dashboard [columns]="4" [widgets]="miniCards" theme="dark"></dui-dashboard>',
        ],
      },
    ],
    [
      'cascade-select',
      {
        id: 'cascade-select',
        name: 'Cascade Select',
        shortDescription: 'Multi-level selection from a hierarchical data structure',
        detailedDescription:
          'Specialized dropdown for selecting items from nested hierarchies (e.g., Category > Subcategory). Supports hover/click expansion, breadcrumb-style path display, custom separators, and clearable selection.',
        usage: `<dui-cascade-select [options]="treeData" placeholder="Select category"></dui-cascade-select>`,
        props: [
          {
            name: 'options',
            type: 'CascadeOption[] | string',
            description: 'Hierarchical data {label, value, children?}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'value',
            type: 'any[] | string',
            description: 'Selected path values',
            defaultValue: '[]',
          },
          {
            name: 'placeholder',
            type: 'string',
            description: 'Placeholder text',
            defaultValue: "'",
          },
          {
            name: 'showFullPath',
            type: 'boolean',
            description: 'Show all levels in the input',
            defaultValue: 'true',
          },
          {
            name: 'separator',
            type: 'string',
            description: 'Path separator character',
            defaultValue: "' / '",
          },
          {
            name: 'expandTrigger',
            type: "'click' | 'hover'",
            description: 'Submenu expansion method',
            defaultValue: "'click'",
          },
          {
            name: 'changeOnSelect',
            type: 'boolean',
            description: 'Allow selecting intermediate nodes',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'cascadeChange',
            description: 'Fired when selection changes',
            payloadType: 'any[]',
          },
          {
            name: 'cascadeToggle',
            description: 'Fired when panel visibility changes',
            payloadType: 'boolean',
          },
        ],
        limitations: ['Requires correctly formatted recursive children arrays'],
        examples: [
          '<dui-cascade-select [options]="categories" showFullPath="false"></dui-cascade-select>',
          '<dui-cascade-select [options]="locations" expandTrigger="hover"></dui-cascade-select>',
        ],
      },
    ],
    [
      'transfer-list',
      {
        id: 'transfer-list',
        name: 'Transfer List',
        shortDescription: 'Dual-pane selector for moving items between two sets',
        detailedDescription:
          'Advanced dual-list component for selecting multiple items from a large source set. Supports search, sorting, drag-and-drop, multi-select, tree/table modes, and one-way copy mode.',
        usage: `<dui-transfer-list [sourceItems]="all" [targetItems]="selected"></dui-transfer-list>`,
        props: [
          {
            name: 'sourceItems',
            type: 'TransferItem[]',
            description: 'Items in the left list',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'targetItems',
            type: 'TransferItem[]',
            description: 'Items in the right list',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'titles',
            type: 'string[]',
            description: 'Panel titles [Source, Target]',
            defaultValue: "['Source', 'Target']",
          },
          {
            name: 'searchable',
            type: 'boolean',
            description: 'Enable search filters',
            defaultValue: 'false',
          },
          {
            name: 'mode',
            type: "'list' | 'tree' | 'table'",
            description: 'Display visualization mode',
            defaultValue: "'list'",
          },
          {
            name: 'oneWay',
            type: 'boolean',
            description: 'Copy items instead of moving them',
            defaultValue: 'false',
          },
          {
            name: 'allowReorder',
            type: 'boolean',
            description: 'Allow manual reordering in target',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'transferChange',
            description: 'Fired when items are moved between lists',
            payloadType: '{source, target}',
          },
          {
            name: 'selectionChanged',
            description: 'Fired when highlight selection changes',
            payloadType: '{sourceSelected, targetSelected}',
          },
        ],
        limitations: ['Drag-and-drop requires browser DragEvent support'],
        examples: [
          '<dui-transfer-list [sourceItems]="users" searchable mode="table"></dui-transfer-list>',
          '<dui-transfer-list [sourceItems]="files" mode="tree" oneWay></dui-transfer-list>',
        ],
      },
    ],
    [
      'picklist',
      {
        id: 'picklist',
        name: 'Picklist',
        shortDescription: 'Advanced dropdown with search, reordering, and multi-selection tags',
        detailedDescription:
          'A premium alternative to standard dropdowns, optimized for larger lists and complex selections. Features built-in search, tag-based multi-selection, drag-and-drop reordering, and option grouping.',
        usage: `<dui-picklist [options]="data" mode="multi" searchable></dui-picklist>`,
        props: [
          {
            name: 'options',
            type: 'Option[]',
            description: 'List of pickable items',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'mode',
            type: "'single' | 'multi'",
            description: 'Selection mode',
            defaultValue: "'single'",
          },
          {
            name: 'searchable',
            type: 'boolean',
            description: 'Show integrated search bar',
            defaultValue: 'false',
          },
          {
            name: 'clearable',
            type: 'boolean',
            description: 'Show clear selection button',
            defaultValue: 'true',
          },
          {
            name: 'reorderable',
            type: 'boolean',
            description: 'Allow reordering multi-select tags',
            defaultValue: 'false',
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Show spinner in dropdown',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'picklistChange',
            description: 'Fired on selection update',
            payloadType: 'ChangeEvent',
          },
          { name: 'picklistOpen', description: 'Fired when dropdown expands', payloadType: 'void' },
        ],
        limitations: ['Reordering is only available in multi-select mode'],
        examples: [
          '<dui-picklist [options]="tags" mode="multi" reorderable></dui-picklist>',
          '<dui-picklist [options]="users" searchable loading="true"></dui-picklist>',
        ],
      },
    ],
    [
      'snackbar',
      {
        id: 'snackbar',
        name: 'Snackbar / Notification Stack',
        shortDescription: 'Non-disruptive feedback messages with stacking capabilities',
        detailedDescription:
          'Dynamic toast notification system supporting auto-dismiss, progress bars, stack/queue behaviors, action buttons, and card stacking visual effects.',
        usage: `<dui-snackbar position="top-right" maxVisible="3"></dui-snackbar>`,
        props: [
          {
            name: 'position',
            type: 'string',
            description: 'Anchor position (top-right, bottom-left, etc.)',
            defaultValue: "'bottom-right'",
          },
          {
            name: 'maxVisible',
            type: 'number',
            description: 'Limit of visible notifications',
            defaultValue: '5',
          },
          {
            name: 'stackMode',
            type: "'stack' | 'queue' | 'lifo'",
            description: 'Ordering behavior',
            defaultValue: "'stack'",
          },
          {
            name: 'cardStack',
            type: 'boolean',
            description: 'Visual card stacking effect on hover',
            defaultValue: 'false',
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Default notification style',
            defaultValue: "'default'",
          },
        ],
        events: [
          {
            name: 'snackbarClosed',
            description: 'Fired when a toast is dismissed',
            payloadType: '{id, item}',
          },
          {
            name: 'snackbarActionClicked',
            description: 'Fired when action button is clicked',
            payloadType: '{id, item}',
          },
        ],
        limitations: ['Use only one snackbar host per application typically'],
        examples: ['<dui-snackbar position="top-center" openMode="slide-down"></dui-snackbar>'],
      },
    ],
    [
      'dialog-box',
      {
        id: 'dialog-box',
        name: 'Dialog Box / Modal',
        shortDescription: 'Highly configurable modal window with advanced window features',
        detailedDescription:
          'Comprehensive modal component supporting dragging, resizing, maximizing, minimizing to tray, glassmorphism backdrops, and confetti celebrations. Features focus trapping and keyboard accessibility.',
        usage: `<dui-dialog-box [open]="isModalOpen" dialogTitle="Confirm Action" size="md"></dui-dialog-box>`,
        props: [
          {
            name: 'open',
            type: 'boolean',
            description: 'Visibility state',
            defaultValue: 'false',
            required: true,
          },
          { name: 'dialogTitle', type: 'string', description: 'Header text', defaultValue: "'" },
          {
            name: 'size',
            type: 'string',
            description: 'Predefined size (xs-xl, fill, custom)',
            defaultValue: "'md'",
          },
          {
            name: 'isDraggable',
            type: 'boolean',
            description: 'Enable window dragging',
            defaultValue: 'false',
          },
          {
            name: 'resizable',
            type: 'boolean',
            description: 'Enable window resizing',
            defaultValue: 'false',
          },
          {
            name: 'status',
            type: 'string',
            description: 'Semantic type (info, success, warning, error)',
            defaultValue: "'default'",
          },
          {
            name: 'glass',
            type: 'boolean',
            description: 'Enable frosted glass backdrop',
            defaultValue: 'false',
          },
          {
            name: 'confetti',
            type: 'boolean',
            description: 'Celebration effect on open',
            defaultValue: 'false',
          },
        ],
        events: [
          { name: 'dialogClosed', description: 'Fired when modal hides', payloadType: 'void' },
          { name: 'ok', description: 'Fired when OK button is clicked', payloadType: 'void' },
          {
            name: 'cancel',
            description: 'Fired when Cancel/Close is clicked',
            payloadType: 'void',
          },
        ],
        limitations: [
          'Dragging requires non-touch pointer typically',
          'Maximize/Minimize requires the component to be direct child of body or relative parent',
        ],
        examples: [
          '<dui-dialog-box [open]="true" dialogTitle="Settings" isDraggable resizable></dui-dialog-box>',
          '<dui-dialog-box [open]="show" status="success" confetti okText="Finish"></dui-dialog-box>',
        ],
      },
    ],
    [
      'range-slider',
      {
        id: 'range-slider',
        name: 'Range Slider',
        shortDescription: 'Interactive slider for selecting single values or ranges',
        detailedDescription:
          'Versatile slider component supporting single-handle and dual-handle modes. Features custom marks, restricted values, non-linear steps, vertical orientation, and real-time tooltips.',
        usage: `<dui-range-slider min="0" max="100" [value]="50"></dui-range-slider>`,
        props: [
          { name: 'min', type: 'number', description: 'Minimum scale value', defaultValue: '0' },
          { name: 'max', type: 'number', description: 'Maximum scale value', defaultValue: '100' },
          { name: 'step', type: 'number', description: 'Incremental step size', defaultValue: '1' },
          {
            name: 'range',
            type: 'boolean',
            description: 'Enable dual-handle range selection',
            defaultValue: 'false',
          },
          {
            name: 'startValue',
            type: 'number',
            description: 'Initial start value (range mode)',
            defaultValue: '0',
          },
          {
            name: 'endValue',
            type: 'number',
            description: 'Initial end value (range mode)',
            defaultValue: '100',
          },
          {
            name: 'showMarks',
            type: 'boolean',
            description: 'Display tick marks and labels',
            defaultValue: 'false',
          },
          {
            name: 'vertical',
            type: 'boolean',
            description: 'Layout in vertical orientation',
            defaultValue: 'false',
          },
          {
            name: 'restrictedValues',
            type: 'number[]',
            description: 'Only allow selection of these specific points',
            defaultValue: '[]',
          },
        ],
        events: [
          {
            name: 'sliderChange',
            description: 'Fired when selection changes',
            payloadType: 'number | {start, end}',
          },
          {
            name: 'sliderDragStart',
            description: 'Fired when user starts dragging',
            payloadType: 'void',
          },
          {
            name: 'sliderDragEnd',
            description: 'Fired when dragging is committed',
            payloadType: 'void',
          },
        ],
        limitations: ['Vertical mode requires a defined container height'],
        examples: [
          '<dui-range-slider range="true" [startValue]="20" [endValue]="80" showMarks="true"></dui-range-slider>',
          '<dui-range-slider vertical="true" [min]="0" [max]="10" size="lg"></dui-range-slider>',
        ],
      },
    ],
    [
      'meter-group',
      {
        id: 'meter-group',
        name: 'Meter Group',
        shortDescription: 'Multi-segmented bar or circle for measuring relative distributions',
        detailedDescription:
          'Visual indicator for displaying multiple values as segments of a whole. Supports linear and circular visualizations, interactive segments, and semantic labeling.',
        usage: `<dui-meter-group [values]="data" shape="line"></dui-meter-group>`,
        props: [
          {
            name: 'values',
            type: 'MeterValue[]',
            description: 'Array of {label, value, color, icon}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'shape',
            type: "'line' | 'circle'",
            description: 'Visualization container style',
            defaultValue: "'line'",
          },
          {
            name: 'size',
            type: 'string',
            description: 'Thickness or diameter variant',
            defaultValue: "'md'",
          },
          {
            name: 'showLabels',
            type: 'boolean',
            description: 'Show text labels below segments',
            defaultValue: 'true',
          },
          {
            name: 'interactive',
            type: 'boolean',
            description: 'Allow segments to be clicked',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'meterClick',
            description: 'Fired when a segment or legend item is clicked',
            payloadType: 'MeterValue',
          },
        ],
        limitations: ['Total values exceeding max will overflow the visual representation'],
        examples: [
          '<dui-meter-group [values]="storageStats" showLegend="true"></dui-meter-group>',
          '<dui-meter-group shape="circle" [values]="usageData" size="lg"></dui-meter-group>',
        ],
      },
    ],
    [
      'speed-dial',
      {
        id: 'speed-dial',
        name: 'Speed Dial',
        shortDescription: 'Floating action button that unfolds into multiple secondary actions',
        detailedDescription:
          'High-visibility action trigger typically anchored at corners. Expands on click or hover to reveal a series of related tasks or navigational shortcuts.',
        usage: `<dui-speed-dial [actions]="myActions" position="bottom-right"></dui-speed-dial>`,
        props: [
          {
            name: 'actions',
            type: 'SpeedDialAction[]',
            description: 'List of actionable items',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'position',
            type: 'string',
            description: 'Screen or container anchor point',
            defaultValue: "'bottom-right'",
          },
          {
            name: 'icon',
            type: 'string',
            description: 'Main button icon name',
            defaultValue: "'fas fa-plus'",
          },
          {
            name: 'trigger',
            type: "'click' | 'hover'",
            description: 'Opening interaction mode',
            defaultValue: "'click'",
          },
          {
            name: 'showTooltips',
            type: 'boolean',
            description: 'Show action labels on expansion',
            defaultValue: 'true',
          },
        ],
        events: [
          {
            name: 'actionClick',
            description: 'Fired when a child action is selected',
            payloadType: 'string',
          },
          {
            name: 'speedDialToggle',
            description: 'Fired when dial opens or closes',
            payloadType: 'boolean',
          },
        ],
        limitations: ['Absolute positioning requires a relative parent container'],
        examples: [
          '<dui-speed-dial [actions]="fileOps" direction="up" color="primary"></dui-speed-dial>',
          '<dui-speed-dial trigger="hover" [actions]="socialLinks" position="top-left"></dui-speed-dial>',
        ],
      },
    ],
    [
      'split-button',
      {
        id: 'split-button',
        name: 'Split Button',
        shortDescription: 'Dual-action button combining a primary task with a dropdown menu',
        detailedDescription:
          'Interactive component with a dominant main button and a secondary chevron for alternate actions. Ideal for "Save" vs "Save and Close" operations.',
        usage: `<dui-split-button label="Save" [options]="moreOptions"></dui-split-button>`,
        props: [
          { name: 'label', type: 'string', description: 'Main button text', defaultValue: "'" },
          { name: 'icon', type: 'string', description: 'Main button icon', defaultValue: "'" },
          {
            name: 'options',
            type: 'any[]',
            description: 'Dropdown menu items',
            defaultValue: '[]',
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Display spinner in main button',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'mainClick',
            description: 'Fired when main button is clicked',
            payloadType: 'void',
          },
          {
            name: 'optionClick',
            description: 'Fired when a dropdown option is selected',
            payloadType: 'string',
          },
        ],
        limitations: ['Chevron and main button are strictly segmented'],
        examples: [
          '<dui-split-button label="Submit" [options]="submitOptions" (mainClick)="doSubmit()"></dui-split-button>',
        ],
      },
    ],
    [
      'pattern-input',
      {
        id: 'pattern-input',
        name: 'Pattern Input',
        shortDescription: 'Masked input field for formatted data like phones or serials',
        detailedDescription:
          'Advanced text input with built-in masking, auto-formatting, and validation. Perfect for phone numbers, CC numbers, or custom ID strings where formatting is required as the user types.',
        usage: `<dui-pattern-input pattern="(###) ###-####" label="Phone"></dui-pattern-input>`,
        props: [
          {
            name: 'pattern',
            type: 'string',
            description: 'Visual mask using placeholder characters',
            defaultValue: "'",
          },
          {
            name: 'maskChar',
            type: 'string',
            description: 'Character used for user input placeholders',
            defaultValue: "'#'",
          },
          {
            name: 'inputType',
            type: 'string',
            description: 'Input filter (text, numeric, alpha, alphanumeric)',
            defaultValue: "'text'",
          },
          {
            name: 'autoFormat',
            type: 'boolean',
            description: 'Format value as typing happens',
            defaultValue: 'true',
          },
          {
            name: 'showCounter',
            type: 'boolean',
            description: 'Show character count indicator',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'patternInputChange',
            description: 'Fired on value commit',
            payloadType: '{value, formatted, isValid}',
          },
          {
            name: 'patternInputValidate',
            description: 'Fired after validation check',
            payloadType: '{isValid, value}',
          },
        ],
        limitations: ['Ensure validationRegex aligns with the visual pattern'],
        examples: [
          '<dui-pattern-input pattern="####-####-####-####" label="Credit Card"></dui-pattern-input>',
          '<dui-pattern-input inputType="numeric" pattern="## / ## / ####" placeholder="DD / MM / YYYY"></dui-pattern-input>',
        ],
      },
    ],
    [
      'timer',
      {
        id: 'timer',
        name: 'Advanced Timer / Countdown',
        shortDescription: 'Multi-stage timer system with progress visualization',
        detailedDescription:
          'Industrial-strength timer supporting countdowns, stopwatches, multi-stage "flows", sound alerts, and browser notifications. Includes persistable state and complex progress rendering.',
        usage: `<dui-timer mode="countdown" [steps]="intervals"></dui-timer>`,
        props: [
          {
            name: 'mode',
            type: "'stopwatch' | 'countdown' | 'laps'",
            description: 'Operational behavior',
            defaultValue: "'countdown'",
          },
          {
            name: 'steps',
            type: 'TimerStep[]',
            description: 'Defined stages or intervals',
            defaultValue: '[]',
          },
          {
            name: 'autoStart',
            type: 'boolean',
            description: 'Start timer immediately on load',
            defaultValue: 'false',
          },
          {
            name: 'progressType',
            type: 'string',
            description: 'Progress UI (bar, circle, path)',
            defaultValue: "'bar'",
          },
          {
            name: 'format',
            type: 'string',
            description: 'Time display formatting style',
            defaultValue: "'HH:mm:ss'",
          },
          {
            name: 'enableSound',
            type: 'boolean',
            description: 'Play alert on completion',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'timerTick',
            description: 'Fired recurringly on tick',
            payloadType: '{remaining, stepIndex}',
          },
          {
            name: 'timerComplete',
            description: 'Fired when a step finishes',
            payloadType: '{stepIndex}',
          },
          {
            name: 'timerAllComplete',
            description: 'Fired when all stages finish',
            payloadType: 'void',
          },
        ],
        limitations: ['Browser notifications require explicit user permission'],
        examples: [
          '<dui-timer mode="stopwatch" progressType="circle" size="lg"></dui-timer>',
          '<dui-timer [steps]="workoutFlow" autoStart="true" enableSound="true"></dui-timer>',
        ],
      },
    ],
    [
      'aside-panel',
      {
        id: 'aside-panel',
        name: 'Aside Panel / Drawer',
        shortDescription: 'Slide-out container for auxiliary content or configuration',
        detailedDescription:
          'Versatile drawer component that slides in from any screen edge. Supports resizable widths, glassmorphism effects, focus trapping, and state persistence to keep panels open across page reloads.',
        usage: `<dui-aside-panel [open]="isOpen" direction="right" size="400px"></dui-aside-panel>`,
        props: [
          {
            name: 'open',
            type: 'boolean',
            description: 'Visibility state',
            defaultValue: 'false',
            required: true,
          },
          {
            name: 'direction',
            type: "'left' | 'right' | 'top' | 'bottom'",
            description: 'Slide-in anchor edge',
            defaultValue: "'right'",
          },
          {
            name: 'size',
            type: 'string',
            description: 'Width/height of the panel (e.g., 20%, 300px)',
            defaultValue: "'300px'",
          },
          {
            name: 'closeable',
            type: 'boolean',
            description: 'Show integrated close button',
            defaultValue: 'true',
          },
          {
            name: 'resizable',
            type: 'boolean',
            description: 'Enable manual resizing via dragging edge',
            defaultValue: 'false',
          },
          {
            name: 'persistKey',
            type: 'string',
            description: 'localStorage key for saving state/size',
            defaultValue: "'",
          },
          {
            name: 'variant',
            type: "'default' | 'glass'",
            description: 'Visual style container',
            defaultValue: "'default'",
          },
        ],
        events: [
          {
            name: 'asideOpened',
            description: 'Fired when panel finishes opening',
            payloadType: 'void',
          },
          {
            name: 'asideClosed',
            description: 'Fired when panel finishes closing',
            payloadType: 'void',
          },
          {
            name: 'asideResized',
            description: 'Fired when user manually resizes panel',
            payloadType: '{size}',
          },
        ],
        limitations: ['Resizing in top/bottom directions targets height instead of width'],
        examples: [
          '<dui-aside-panel [open]="showSettings" direction="left" resizable size="25%"></dui-aside-panel>',
          '<dui-aside-panel [open]="showLogs" direction="bottom" variant="glass" [closeOnOverlayClick]="true"></dui-aside-panel>',
        ],
      },
    ],
    [
      'smart-menu',
      {
        id: 'smart-menu',
        name: 'Smart Navigation Menu',
        shortDescription: 'Intelligent multi-level menu with automatic overflow positioning',
        detailedDescription:
          'Advanced navigational menu supporting nested submenus, custom icons, and smart positioning that prevents menus from opening outside the viewport.',
        usage: `<dui-smart-menu [items]="menuConfig" [visible]="true"></dui-smart-menu>`,
        props: [
          {
            name: 'items',
            type: 'MenuItem[]',
            description: 'Hierarchical item list {label, icon, children?}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'visible',
            type: 'boolean',
            description: 'Force menu visibility',
            defaultValue: 'false',
          },
          {
            name: 'target',
            type: 'string',
            description: 'CSS selector for the trigger element',
            defaultValue: "'",
          },
        ],
        events: [
          {
            name: 'menuItemClick',
            description: 'Fired when a leaf or action item is selected',
            payloadType: '{label, item}',
          },
        ],
        limitations: ['Target must be present in DOM when menu initializes'],
        examples: ['<dui-smart-menu [items]="myNav" target="#nav-trigger"></dui-smart-menu>'],
      },
    ],
    [
      'smart-stepper',
      {
        id: 'smart-stepper',
        name: 'Smart Stepper',
        shortDescription: 'Slot-based wizard for multi-step workflows',
        detailedDescription:
          'Interactive stepper that manages child component visibility. Users can transition between steps programmatically or via navigation controls.',
        usage: `<dui-smart-stepper [activeStep]="0"></dui-smart-stepper>`,
        props: [
          {
            name: 'activeStep',
            type: 'number',
            description: 'Zero-based index of current step',
            defaultValue: '0',
          },
          {
            name: 'orientation',
            type: "'horizontal' | 'vertical'",
            description: 'Visual layout orientation',
            defaultValue: "'horizontal'",
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            description: 'Scale variant',
            defaultValue: "'md'",
          },
        ],
        events: [
          {
            name: 'stepperChange',
            description: 'Fired when the step index changes',
            payloadType: '{index, step}',
          },
        ],
        limitations: ['Steps must be direct children of the component'],
        examples: [
          '<dui-smart-stepper orientation="vertical" [activeStep]="currentStep">...</dui-smart-stepper>',
        ],
      },
    ],
    [
      'dock',
      {
        id: 'dock',
        name: 'Apple-style Dock',
        shortDescription: 'Magnification-enabled action dock for quick application switching',
        detailedDescription:
          'Visual taskbar mimicking the macOS dock. Features magnification on hover, notification badges, drag-and-drop reordering, and blur backdrop effects.',
        usage: `<dui-dock [items]="dockConfig" position="bottom"></dui-dock>`,
        props: [
          {
            name: 'items',
            type: 'DockItem[] | string',
            description: 'List of apps/actions {id, label, icon, badge?}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'position',
            type: "'bottom' | 'top' | 'left' | 'right'",
            description: 'Dock alignment side',
            defaultValue: "'bottom'",
          },
          {
            name: 'magnify',
            type: 'boolean',
            description: 'Enable item scaling on hover',
            defaultValue: 'true',
          },
          {
            name: 'blurEffect',
            type: 'boolean',
            description: 'Enable frosted glass background',
            defaultValue: 'true',
          },
          {
            name: 'showLabels',
            type: 'boolean',
            description: 'Display item labels on hover',
            defaultValue: 'true',
          },
        ],
        events: [
          {
            name: 'dockItemClick',
            description: 'Fired when an icon is clicked',
            payloadType: '{itemId, item}',
          },
          {
            name: 'itemsOrderChange',
            description: 'Fired when items are rearranged via drag',
            payloadType: 'DockItem[]',
          },
        ],
        limitations: ['Recommended for desktop layouts where screen real estate permits'],
        examples: [
          '<dui-dock [items]="apps" magnify="true" size="lg"></dui-dock>',
          '<dui-dock [items]="tools" position="left" [blurEffect]="false"></dui-dock>',
        ],
      },
    ],
    [
      'pill',
      {
        id: 'pill',
        name: 'Premium Pill / Chip',
        shortDescription: 'Rounded indicator with advanced styling and orientation support',
        detailedDescription:
          'Advanced label component with support for vertical text, gradients, avatars, loading states, and removable behaviors. More feature-rich than a standard badge.',
        usage: `<dui-pill label="New Status" color="success" variant="soft"></dui-pill>`,
        props: [
          {
            name: 'label',
            type: 'string',
            description: 'Pill text content',
            defaultValue: "'",
            required: true,
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style (filled, outlined, soft, gradient, bordered)',
            defaultValue: "'filled'",
          },
          {
            name: 'color',
            type: 'string',
            description: 'Semantic color or hex code',
            defaultValue: "'primary'",
          },
          {
            name: 'orientation',
            type: 'string',
            description: 'Layout rotation (horizontal, vertical, rotated)',
            defaultValue: "'horizontal'",
          },
          {
            name: 'removable',
            type: 'boolean',
            description: 'Show close icon',
            defaultValue: 'false',
          },
          {
            name: 'avatar',
            type: 'string',
            description: 'Optional image URL for the pill start',
            defaultValue: "'",
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Display micro-spinner',
            defaultValue: 'false',
          },
        ],
        events: [
          { name: 'pillClick', description: 'Fired on click interaction', payloadType: 'void' },
          {
            name: 'pillRemove',
            description: 'Fired when close icon is clicked',
            payloadType: 'void',
          },
        ],
        limitations: ['Vertical-text orientation might clip in containers without overflow'],
        examples: [
          '<dui-pill label="Admin" [avatar]="photoUrl" color="info"></dui-pill>',
          '<dui-pill label="Priority" variant="gradient" gradient="linear-gradient(#f00, #00f)"></dui-pill>',
        ],
      },
    ],
    [
      'context-menu',
      {
        id: 'context-menu',
        name: 'Context Menu',
        shortDescription: 'Flexible right-click or trigger-based popup menu',
        detailedDescription:
          'Universal context menu that can attach to any target or global right-clicks. Supports shortcuts, checkboxes, radio selections, and nested submenus.',
        usage: `<dui-context-menu [items]="menuData" target="#my-area"></dui-context-menu>`,
        props: [
          {
            name: 'items',
            type: 'ContextMenuItem[]',
            description: 'Menu structure with type awareness',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'openOn',
            type: "'contextmenu' | 'click' | 'hover'",
            description: 'Trigger interaction',
            defaultValue: "'contextmenu'",
          },
          {
            name: 'placement',
            type: 'string',
            description: 'Opening direction relative to target',
            defaultValue: "'bottom'",
          },
          {
            name: 'theme',
            type: "'light' | 'dark' | 'green'",
            description: 'Visual theme preset',
            defaultValue: "'light'",
          },
          {
            name: 'targetOnly',
            type: 'boolean',
            description: 'Only listen for triggers on defined target',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'itemSelect',
            description: 'Fired when an item is selected',
            payloadType: '{item, path}',
          },
          {
            name: 'menuToggle',
            description: 'Fired when menu visibility changes',
            payloadType: 'boolean',
          },
        ],
        limitations: ['Requires absolute positioning relative to the document body'],
        examples: [
          '<dui-context-menu [items]="fileActions" target=".file-row"></dui-context-menu>',
          '<dui-context-menu [items]="viewOps" openOn="click" placement="right"></dui-context-menu>',
        ],
      },
    ],
    [
      'scroll-top',
      {
        id: 'scroll-top',
        name: 'Scroll Top',
        shortDescription: 'Interactive button to quickly scroll back to the top of the page',
        detailedDescription:
          'Sticky button that appears after scrolling a certain distance. Features progress indicators, auto-hide, multiple positions, and smooth scroll behaviors.',
        usage: `<dui-scroll-top threshold="400" behavior="smooth" position="bottom-right"></dui-scroll-top>`,
        props: [
          {
            name: 'threshold',
            type: 'number',
            description: 'Scroll distance in px before showing button',
            defaultValue: '300',
          },
          {
            name: 'behavior',
            type: "'auto' | 'smooth'",
            description: 'Scroll animation behavior',
            defaultValue: "'smooth'",
          },
          {
            name: 'position',
            type: 'string',
            description: 'Screen corner anchor',
            defaultValue: "'bottom-right'",
          },
          {
            name: 'icon',
            type: 'string',
            description: 'Icon content (Emoji or HTML)',
            defaultValue: "'↑'",
          },
          {
            name: 'showProgress',
            type: 'boolean',
            description: 'Render SVG circular progress ring',
            defaultValue: 'false',
          },
          {
            name: 'autoHide',
            type: 'boolean',
            description: 'Hide button after period of inactivity',
            defaultValue: 'false',
          },
        ],
        events: [],
        limitations: ['Requires the parent container or window to have scrollable content'],
        examples: [
          '<dui-scroll-top showProgress="true" color="primary"></dui-scroll-top>',
          '<dui-scroll-top position="bottom-center" label="Back to Top"></dui-scroll-top>',
        ],
      },
    ],
    [
      'avatar-group',
      {
        id: 'avatar-group',
        name: 'Avatar Group',
        shortDescription: 'Sequential list of user avatars with overlap or grid layouts',
        detailedDescription:
          'Container for managing multiple user avatars. Features automatic grouping for overflow (+N), hover tooltips, and integrated roster lists for hidden members.',
        usage: `<dui-avatar-group [avatars]="users" [maxVisible]="5"></dui-avatar-group>`,
        props: [
          {
            name: 'avatars',
            type: 'AvatarProps[]',
            description: 'Array of user data {src, content, label}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'maxVisible',
            type: 'number',
            description: 'Limit displayed avatars before grouping',
            defaultValue: '3',
          },
          {
            name: 'layout',
            type: "'stack' | 'grid'",
            description: 'Visual arrangement of group members',
            defaultValue: "'stack'",
          },
          {
            name: 'size',
            type: 'string',
            description: 'Base size for calculation overlapping',
            defaultValue: "'md'",
          },
          {
            name: 'shape',
            type: 'string',
            description: 'Shape variant for all avatars (circle, square, squircle)',
            defaultValue: "'circle'",
          },
        ],
        events: [],
        limitations: ['Custom size values might require manual adjustment for stack overlapping'],
        examples: [
          '<dui-avatar-group [avatars]="team" maxVisible="3" layout="stack"></dui-avatar-group>',
          '<dui-avatar-group [avatars]="list" shape="hexagon" size="lg"></dui-avatar-group>',
        ],
      },
    ],
    [
      'tag-group',
      {
        id: 'tag-group',
        name: 'Tag Group / Chips Group',
        shortDescription: 'Management container for related tags or filter chips',
        detailedDescription:
          'Layout component for grouping tags. Supports selection modes (single/multiple), bulk styling, collapsible overflow, and integrated search filtering.',
        usage: `<dui-tag-group [max]="10" selectionMode="multiple"></dui-tag-group>`,
        props: [
          {
            name: 'max',
            type: 'number',
            description: 'Limit tags shown before ellipsis',
            defaultValue: '10',
          },
          {
            name: 'selectionMode',
            type: "'none' | 'single' | 'multiple'",
            description: 'Manage tag selection state',
            defaultValue: "'none'",
          },
          {
            name: 'overlap',
            type: 'boolean',
            description: 'Enable slight overlapping (Avatar style)',
            defaultValue: 'false',
          },
          {
            name: 'creatable',
            type: 'boolean',
            description: 'Allow users to type and add new tags',
            defaultValue: 'false',
          },
          {
            name: 'searchable',
            type: 'boolean',
            description: 'Integrated filter bar for existing tags',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'tagGroupChange',
            description: 'Fired when selection changes',
            payloadType: 'string | string[]',
          },
        ],
        limitations: ['Creatable mode requires handling persistency in the parent app'],
        examples: [
          '<dui-tag-group color="info" [max]="5" collapsible="true"></dui-tag-group>',
          '<dui-tag-group creatable="true" selectionMode="multiple"></dui-tag-group>',
        ],
      },
    ],
    [
      'rating',
      {
        id: 'rating',
        name: 'Rating / Review Indicator',
        shortDescription: 'Interactive stars, smileys, or thumbs for user feedback',
        detailedDescription:
          'Input component for collecting numeric reviews. Supports star icons, sentiment-based smileys, or binary thumbs. Includes half-rating support and read-only modes.',
        usage: `<dui-rating type="star" [value]="3.5" allowHalf></dui-rating>`,
        props: [
          {
            name: 'type',
            type: "'star' | 'smiley' | 'thumb'",
            description: 'Icon set to use',
            defaultValue: "'star'",
          },
          { name: 'max', type: 'number', description: 'Maximum score to allow', defaultValue: '5' },
          {
            name: 'allowHalf',
            type: 'boolean',
            description: 'Enable 0.5 step ratings (star only)',
            defaultValue: 'false',
          },
          {
            name: 'showValue',
            type: 'boolean',
            description: 'Display current score as text',
            defaultValue: 'false',
          },
          {
            name: 'readonly',
            type: 'boolean',
            description: 'Disable user interaction',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'ratingChange',
            description: 'Fired when new rating is selected',
            payloadType: 'number',
          },
        ],
        limitations: ['Half-ratings are strictly visual for smileys and thumbs'],
        examples: [
          '<dui-rating type="smiley" color="success" size="lg"></dui-rating>',
          '<dui-rating type="thumb" [value]="1" color="primary"></dui-rating>',
        ],
      },
    ],
    [
      'skeleton',
      {
        id: 'skeleton',
        name: 'Skeleton Loader',
        shortDescription: 'Empty state placeholder for async data loading',
        detailedDescription:
          'Visual placeholder mimicking the structure of UI components. Supports multiple shapes (circle, rect), animation types (pulse, wave), and semantic presets (avatar, post, list).',
        usage: `<dui-skeleton shape="card" animated></dui-skeleton>`,
        props: [
          {
            name: 'shape',
            type: 'SkeletonShape',
            description: 'Container structure',
            defaultValue: "'rectangle'",
          },
          {
            name: 'animationType',
            type: "'pulse' | 'wave'",
            description: 'Visual loading effect',
            defaultValue: "'pulse'",
          },
          {
            name: 'width',
            type: 'string',
            description: 'Custom CSS width',
            defaultValue: "'100%'",
          },
          {
            name: 'height',
            type: 'string',
            description: 'Custom CSS height',
            defaultValue: "'20px'",
          },
          {
            name: 'animated',
            type: 'boolean',
            description: 'Enable motion effects',
            defaultValue: 'true',
          },
        ],
        events: [],
        limitations: [
          'Static sizes from semantic shapes (avatar, button) override width/height props',
        ],
        examples: [
          '<dui-skeleton shape="circle" size="xl"></dui-skeleton>',
          '<dui-skeleton shape="text" [width]="\'60%\'"></dui-skeleton>',
        ],
      },
    ],
    [
      'pagination',
      {
        id: 'pagination',
        name: 'Pagination Control',
        shortDescription: 'Advanced page navigation with multiple modes and URL syncing',
        detailedDescription:
          'Universal pagination system. Supports basic buttons, compact dropdowns, input-based jumping, infinite scroll triggers, and automatic URL parameter synchronization.',
        usage: `<dui-pagination [totalItems]="200" [itemsPerPage]="10"></dui-pagination>`,
        props: [
          {
            name: 'type',
            type: 'PaginationType',
            description: 'Layout mode (basic, detailed, input, dropdown)',
            defaultValue: "'basic'",
          },
          {
            name: 'totalItems',
            type: 'number',
            description: 'Total records to paginate',
            required: true,
          },
          {
            name: 'itemsPerPage',
            type: 'number',
            description: 'Rows per page',
            defaultValue: '10',
          },
          {
            name: 'showJumpTo',
            type: 'boolean',
            description: 'Show text input for page switching',
            defaultValue: 'false',
          },
          {
            name: 'urlSync',
            type: 'boolean',
            description: 'Automatically update browser URL',
            defaultValue: 'false',
          },
          {
            name: 'responsiveMode',
            type: 'boolean',
            description: 'Switch to compact on mobile screens',
            defaultValue: 'true',
          },
        ],
        events: [
          {
            name: 'pageChange',
            description: 'Fired when page or size is modified',
            payloadType: '{page, size}',
          },
        ],
        limitations: ['URL Sync requires a routing-enabled application'],
        examples: [
          '<dui-pagination type="detailed" [totalItems]="500" [pageSizes]="[10, 50, 100]"></dui-pagination>',
          '<dui-pagination type="input" [totalItems]="1000" theme="primary"></dui-pagination>',
        ],
      },
    ],
    [
      'popover',
      {
        id: 'popover',
        name: 'Popover Bubble',
        shortDescription: 'Floating container for interactive content or rich tooltips',
        detailedDescription:
          'Interactive overlay that anchors to elements. More robust than tooltips, supporting HTML content, headings, close buttons, and multiple trigger modes.',
        usage: `<dui-popover heading="Details" content="<b>Bold</b> content here"></dui-popover>`,
        props: [
          {
            name: 'heading',
            type: 'string',
            description: 'Optional header text',
            defaultValue: "'",
          },
          {
            name: 'content',
            type: 'string',
            description: 'Main body (HTML supported)',
            defaultValue: "'",
          },
          {
            name: 'trigger',
            type: "'click' | 'hover' | 'focus'",
            description: 'Activation interaction',
            defaultValue: "'click'",
          },
          {
            name: 'placement',
            type: 'string',
            description: 'Position relative to anchor',
            defaultValue: "'bottom'",
          },
          {
            name: 'showCloseButton',
            type: 'boolean',
            description: 'Render integrated X button',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'popoverShow',
            description: 'Fired when overlay becomes visible',
            payloadType: 'void',
          },
        ],
        limitations: ['Slotted content not supported; use rich HTML in content prop'],
        examples: [
          '<dui-popover heading="Help" trigger="hover" placement="right">...</dui-popover>',
        ],
      },
    ],
    [
      'otp-input',
      {
        id: 'otp-input',
        name: 'One-Time Password Input',
        shortDescription: 'Segmented text fields for secure code verification',
        detailedDescription:
          'Specialized input for 2FA or PIN entry. Features auto-focus management, numeric-only validation, masking for password codes, and completion callbacks.',
        usage: `<dui-otp-input [length]="6" (otpComplete)="onVerify($event)"></dui-otp-input>`,
        props: [
          {
            name: 'length',
            type: 'number',
            description: 'Total number of digits/fields',
            defaultValue: '4',
          },
          {
            name: 'masked',
            type: 'boolean',
            description: 'Hide input values (security)',
            defaultValue: 'false',
          },
          {
            name: 'numericOnly',
            type: 'boolean',
            description: 'Block alpha characters',
            defaultValue: 'true',
          },
          {
            name: 'separator',
            type: 'string',
            description: 'CSV of indices to show gap (e.g. "3")',
            defaultValue: "'",
          },
          {
            name: 'autoFocus',
            type: 'boolean',
            description: 'Focus first field on mount',
            defaultValue: 'true',
          },
        ],
        events: [
          {
            name: 'otpChange',
            description: 'Fired on every keystroke',
            payloadType: '{value, isComplete}',
          },
          {
            name: 'otpComplete',
            description: 'Fired when all fields are filled',
            payloadType: '{value}',
          },
        ],
        limitations: ['Pasting is limited to digits if numericOnly is enabled'],
        examples: [
          '<dui-otp-input [length]="4" size="lg" (otpComplete)="checkPin($event)"></dui-otp-input>',
          '<dui-otp-input [length]="6" separator="3" masked="true"></dui-otp-input>',
        ],
      },
    ],
    [
      'timeline',
      {
        id: 'timeline',
        name: 'Chronological Timeline',
        shortDescription: 'Vertical or horizontal sequence of historical events',
        detailedDescription:
          'Visual record container with support for icons, panels, alternate alignments, and pending states. Features premium search filtering and interactive item clicks.',
        usage: `<dui-timeline [events]="myHistory" mode="vertical" align="alternate"></dui-timeline>`,
        props: [
          {
            name: 'events',
            type: 'TimelineEvent[]',
            description: 'History data {title, description, date, icon}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'mode',
            type: "'vertical' | 'horizontal'",
            description: 'Flow direction',
            defaultValue: "'vertical'",
          },
          {
            name: 'align',
            type: 'string',
            description: 'Item side alignment (left, right, alternate)',
            defaultValue: "'left'",
          },
          {
            name: 'marker',
            type: "'dot' | 'number' | 'icon'",
            description: 'Indicator decoration style',
            defaultValue: "'dot'",
          },
          {
            name: 'pending',
            type: 'boolean',
            description: 'Show dashed line at the end',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'itemClick',
            description: 'Fired when an event block is clicked',
            payloadType: 'TimelineEvent',
          },
        ],
        limitations: ['Horizontal mode requires wrapping container width management'],
        examples: [
          '<dui-timeline [events]="logs" marker="icon" pending="true"></dui-timeline>',
          '<dui-timeline [events]="roadmap" mode="horizontal" variant="panel"></dui-timeline>',
        ],
      },
    ],
    [
      'tree-list',
      {
        id: 'tree-list',
        name: 'Recursive Tree List',
        shortDescription: 'Hierarchical data viewer with checkboxes and drag-drop reordering',
        detailedDescription:
          'Advanced tree component supporting lazy loading, checkbox cascading, search filtering, and drag-and-drop hierarchy management. Ideal for file explorers or org charts.',
        usage: `<dui-tree-list [data]="orgData" showCheckbox cascade></dui-tree-list>`,
        props: [
          {
            name: 'data',
            type: 'TreeNode[]',
            description: 'Nested structure {key, label, children?}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'multiSelect',
            type: 'boolean',
            description: 'Enable multiple leaf selection',
            defaultValue: 'false',
          },
          {
            name: 'showCheckbox',
            type: 'boolean',
            description: 'Enable bulk selection via boxes',
            defaultValue: 'false',
          },
          {
            name: 'cascade',
            type: 'boolean',
            description: 'Toggle parent state based on children',
            defaultValue: 'true',
          },
          {
            name: 'enableDragDrop',
            type: 'boolean',
            description: 'Allow manual rearrangement',
            defaultValue: 'false',
          },
          {
            name: 'lazy',
            type: 'boolean',
            description: 'Trigger event for missing children nodes',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'treeSelect',
            description: 'Fired when a node is highlighted',
            payloadType: '{node, selected}',
          },
          {
            name: 'treeCheck',
            description: 'Fired when checkbox state changes',
            payloadType: '{node, checked}',
          },
          {
            name: 'treeDrop',
            description: 'Fired on drag completion',
            payloadType: '{dragged, target, pos}',
          },
        ],
        limitations: [
          'Lazy loading requires explicitly calling finishLoading() after data arrives',
        ],
        examples: [
          '<dui-tree-list [data]="files" showLines="true" enableDragDrop="true"></dui-tree-list>',
          '<dui-tree-list [data]="config" showCheckbox="true" [cascade]="false"></dui-tree-list>',
        ],
      },
    ],
    [
      'badge',
      {
        id: 'badge',
        name: 'Badge / Notification Indicator',
        shortDescription: 'Small numeric or status indicator for icons and buttons',
        detailedDescription:
          'Versatile overlay component for displaying counts, status dots, or micro-icons. Features multiple positions, animation styles (bounce, pulse), glow effects, and gradient support.',
        usage: `<dui-button icon="notifications"><dui-badge value="5" color="danger"></dui-badge></dui-button>`,
        props: [
          {
            name: 'value',
            type: 'string | number',
            description: 'Content to display inside the badge',
          },
          {
            name: 'max',
            type: 'number',
            description: 'Maximum numeric value before showing "+"',
            defaultValue: '99',
          },
          {
            name: 'dot',
            type: 'boolean',
            description: 'Render as a simple status dot without text',
            defaultValue: 'false',
          },
          {
            name: 'position',
            type: 'string',
            description: 'Corner anchor (top-right, top-left, bottom-right, bottom-left)',
            defaultValue: "'top-right'",
          },
          {
            name: 'glow',
            type: 'boolean',
            description: 'Enable neon shadow effect',
            defaultValue: 'false',
          },
          {
            name: 'animation',
            type: 'string',
            description: 'Entrance/state motion (pulse, bounce, shake)',
            defaultValue: "'none'",
          },
        ],
        events: [
          {
            name: 'badgeClick',
            description: 'Fired when badge is clicked (interactive mode)',
            payloadType: 'void',
          },
        ],
        limitations: ['Requires relative positioning on the parent element for accurate anchoring'],
        examples: [
          '<dui-badge dot color="success" glow="true"></dui-badge>',
          '<dui-badge value="New" variant="soft" animation="pulse"></dui-badge>',
        ],
      },
    ],
    [
      'breadcrumb',
      {
        id: 'breadcrumb',
        name: 'Breadcrumb Navigation',
        shortDescription: 'Hierarchical path indicators for site navigation',
        detailedDescription:
          "Navigational aid that shows the user's current location. Supports custom separators, home icons, collapsible overflow for long paths, and interactive items with badges.",
        usage: `<dui-breadcrumb [items]="navPath" separator=">"></dui-breadcrumb>`,
        props: [
          {
            name: 'items',
            type: 'BreadcrumbItem[]',
            description: 'Hierarchy data {label, href, icon, active}',
            defaultValue: '[]',
            required: true,
          },
          {
            name: 'separator',
            type: 'string',
            description: 'Text character between items',
            defaultValue: "'/'",
          },
          {
            name: 'maxItems',
            type: 'number',
            description: 'Items to show before collapsing into "..." dropdown',
            defaultValue: '4',
          },
          {
            name: 'showHome',
            type: 'boolean',
            description: 'Automatically prepend home icon',
            defaultValue: 'false',
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style (default, pills, glass)',
            defaultValue: "'default'",
          },
        ],
        events: [
          {
            name: 'breadcrumbClick',
            description: 'Fired when a path segment is selected',
            payloadType: 'BreadcrumbItem',
          },
        ],
        limitations: ['Automatic collapsing calculates based on item count, not pixel width'],
        examples: [
          '<dui-breadcrumb [items]="myPath" variant="pills" showHome="true"></dui-breadcrumb>',
        ],
      },
    ],
    [
      'chip',
      {
        id: 'chip',
        name: 'Smart Chip / Choice',
        shortDescription: 'Interactive tag-like component with avatars and selection states',
        detailedDescription:
          'Premium label component that can act as a selection filter, action trigger, or data entity. Features vertical text support, integrated counters, selection indicators, and advanced entry/exit animations.',
        usage: `<dui-chip label="Electronics" variant="soft" clickable></dui-chip>`,
        props: [
          { name: 'label', type: 'string', description: 'Main text content', required: true },
          {
            name: 'variant',
            type: 'string',
            description: 'Visual style (filled, outlined, soft, gradient)',
            defaultValue: "'filled'",
          },
          {
            name: 'orientation',
            type: 'string',
            description: 'Text layout (horizontal, vertical-text, rotated)',
            defaultValue: "'horizontal'",
          },
          {
            name: 'removable',
            type: 'boolean',
            description: 'Show close icon and enable tag removal',
            defaultValue: 'false',
          },
          {
            name: 'selected',
            type: 'boolean',
            description: 'Visual state for choice/filter modes',
            defaultValue: 'false',
          },
          {
            name: 'counter',
            type: 'string | number',
            description: 'Circular numeric count at the end',
            defaultValue: "'",
          },
        ],
        events: [
          { name: 'chipClick', description: 'Fired on interaction', payloadType: 'void' },
          {
            name: 'chipSelect',
            description: 'Fired when selection changes',
            payloadType: 'boolean',
          },
        ],
        limitations: [
          'Vertical-rotated chips may require custom container padding for the text angle',
        ],
        examples: [
          '<dui-chip label="User" [userAvatar]="imgUrl" color="primary"></dui-chip>',
          '<dui-chip label="Count" [counter]="42" variant="outlined"></dui-chip>',
        ],
      },
    ],
    [
      'divider',
      {
        id: 'divider',
        name: 'Advanced Divider',
        shortDescription: 'Layout separator with support for labels, icons, and shapes',
        detailedDescription:
          'Multi-functional separator for visual grouping. Supports text/icon centers, vertical orientation, gradient lines, animated entrances, and unique shape bridges (wave, zigzag, curve).',
        usage: `<dui-divider text="OR" textAlign="center" variant="dashed"></dui-divider>`,
        props: [
          { name: 'text', type: 'string', description: 'Segment label text', defaultValue: "'" },
          {
            name: 'orientation',
            type: "'horizontal' | 'vertical'",
            description: 'Separation plane',
            defaultValue: "'horizontal'",
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Line style (solid, dashed, dotted, gradient)',
            defaultValue: "'solid'",
          },
          {
            name: 'shape',
            type: 'string',
            description: 'Decorative divider bridge (wave, curve, arrow)',
            defaultValue: "'none'",
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Enable shimmering effect for placeholders',
            defaultValue: 'false',
          },
        ],
        events: [],
        limitations: ['Vertical dividers require the parent layout to use Flexbox or Grid'],
        examples: [
          '<dui-divider icon="⭐" textAlign="left" color="info"></dui-divider>',
          '<dui-divider shape="wave" variant="gradient"></dui-divider>',
        ],
      },
    ],
    [
      'panel',
      {
        id: 'panel',
        name: 'Container Panel',
        shortDescription: 'Flexible content block with headers, footers, and window controls',
        detailedDescription:
          'Industrial-strength container component. Features window management (minimize, maximize, close), persistence, resizable edges, draggable headers, glassmorphism, and modal overlays.',
        usage: `<dui-panel panelTitle="Settings" toggleable maximizable></dui-panel>`,
        props: [
          {
            name: 'panelTitle',
            type: 'string',
            description: 'Heading text for the panel',
            defaultValue: "'",
          },
          {
            name: 'toggleable',
            type: 'boolean',
            description: 'Enable collapse/expand via header click',
            defaultValue: 'false',
          },
          {
            name: 'maximizable',
            type: 'boolean',
            description: 'Show fullscreen toggle button',
            defaultValue: 'false',
          },
          {
            name: 'isDraggable',
            type: 'boolean',
            description: 'Allow moving panel via header',
            defaultValue: 'false',
          },
          {
            name: 'glass',
            type: 'boolean',
            description: 'Apply frosted glass styling',
            defaultValue: 'false',
          },
          {
            name: 'persistKey',
            type: 'string',
            description: 'Key for saving size/state in localStorage',
            defaultValue: "'",
          },
        ],
        events: [
          { name: 'toggle', description: 'Fired on collapse/expand', payloadType: '{collapsed}' },
          {
            name: 'panelMaximize',
            description: 'Fired when entering fullscreen',
            payloadType: '{panelId}',
          },
        ],
        limitations: ['Draggable mode requires absolute positioning if used outside normal flow'],
        examples: [
          '<dui-panel panelTitle="Logs" variant="elevated" toggleable="true"></dui-panel>',
          '<dui-panel panelTitle="Workspace" [resizable]="true" glass="true"></dui-panel>',
        ],
      },
    ],
    [
      'switch',
      {
        id: 'switch',
        name: 'Premium Switch / Toggle',
        shortDescription: 'Modern binary selection control with integrated icons and states',
        detailedDescription:
          'Versatile boolean toggle. Supports five size variants, multiple shapes (pill, square), integrated icons for ON/OFF states, loading spinners, and validation markers.',
        usage: `<dui-switch label="Enable Notifications" [checked]="true"></dui-switch>`,
        props: [
          {
            name: 'checked',
            type: 'boolean',
            description: 'Current toggle state',
            defaultValue: 'false',
          },
          {
            name: 'size',
            type: 'string',
            description: 'Switch scale (xs, sm, md, lg, xl)',
            defaultValue: "'md'",
          },
          {
            name: 'iconOn',
            type: 'string',
            description: 'Indicator icon for checked state',
            defaultValue: "'",
          },
          {
            name: 'iconOff',
            type: 'string',
            description: 'Indicator icon for unchecked state',
            defaultValue: "'",
          },
          {
            name: 'loading',
            type: 'boolean',
            description: 'Render micro-spinner inside the toggle',
            defaultValue: 'false',
          },
        ],
        events: [
          {
            name: 'switchChange',
            description: 'Fired when toggle state changes',
            payloadType: '{checked, value}',
          },
        ],
        limitations: ['Requires specific label placement padding in absolute-labeled layouts'],
        examples: [
          '<dui-switch [checked]="true" color="success" iconOn="✔"></dui-switch>',
          '<dui-switch loading variant="info" size="xl"></dui-switch>',
        ],
      },
    ],
    [
      'tag',
      {
        id: 'tag',
        name: 'Advanced Tag',
        shortDescription: 'Indicator label with images, icons, and automated coloring',
        detailedDescription:
          'Visual label for categorization. Supports semantic variants, image/avatar prefixing, checkable states, elevation shadows, pulse animations for attention, and automated color generation via label hashes.',
        usage: `<dui-tag label="Bug" color="danger" [rounded]="true"></dui-tag>`,
        props: [
          { name: 'label', type: 'string', description: 'Tag text content', required: true },
          {
            name: 'variant',
            type: 'string',
            description: 'Style preset (filled, light, dot, outlined)',
            defaultValue: "'filled'",
          },
          {
            name: 'removable',
            type: 'boolean',
            description: 'Show integrated delete button',
            defaultValue: 'false',
          },
          {
            name: 'autoColor',
            type: 'boolean',
            description: 'Generate unique color based on label text',
            defaultValue: 'false',
          },
          {
            name: 'pulse',
            type: 'boolean',
            description: 'Enable attention-grabbing animation',
            defaultValue: 'false',
          },
          {
            name: 'checkable',
            type: 'boolean',
            description: 'Allow selection behavior',
            defaultValue: 'false',
          },
        ],
        events: [
          { name: 'tagRemove', description: 'Fired when X icon is clicked', payloadType: 'void' },
          {
            name: 'tagCheck',
            description: 'Fired when selection state changes',
            payloadType: 'boolean',
          },
        ],
        limitations: [
          'Dot variant is designed for status indicators and minimizes label visibility',
        ],
        examples: [
          '<dui-tag label="Verified" [userAvatar]="userImg" color="success"></dui-tag>',
          '<dui-tag label="Hot" pulse="true" variant="dot" color="danger"></dui-tag>',
        ],
      },
    ],
    [
      'knob',
      {
        id: 'knob',
        name: 'Control Knob',
        shortDescription: 'Circular input for numeric values and hardware-like control',
        detailedDescription:
          'Precision numeric input mimicking hardware knobs. Supports mouse dragging, wheel rotation, numeric labels, tick marks, status arcs, and manual value override via double-click input.',
        usage: `<dui-knob [value]="50" [min]="0" [max]="100" color="primary"></dui-knob>`,
        props: [
          {
            name: 'value',
            type: 'number',
            description: 'Current numeric setting',
            defaultValue: '0',
          },
          {
            name: 'strokeWidth',
            type: 'number',
            description: 'Thickness of the circular track',
            defaultValue: '10',
          },
          {
            name: 'showTicks',
            type: 'boolean',
            description: 'Render measurement lines along the arc',
            defaultValue: 'false',
          },
          {
            name: 'readonly',
            type: 'boolean',
            description: 'Display value without interaction',
            defaultValue: 'false',
          },
          {
            name: 'enableWheel',
            type: 'boolean',
            description: 'Manage value via scroll wheel',
            defaultValue: 'false',
          },
          {
            name: 'allowInput',
            type: 'boolean',
            description: 'Enable double-click to type exact value',
            defaultValue: 'true',
          },
        ],
        events: [
          {
            name: 'knobChange',
            description: 'Fired on final value after interaction',
            payloadType: 'number',
          },
          {
            name: 'knobInput',
            description: 'Fired in real-time while dragging',
            payloadType: 'number',
          },
        ],
        limitations: ['Best for high-precision inputs like audio volume or brightness settings'],
        examples: [
          '<dui-knob [value]="75" showTicks="true" color="#f00"></dui-knob>',
          '<dui-knob [value]="10" size="200" [showLabels]="true" [step]="5"></dui-knob>',
        ],
      },
    ],
    [
      'speedometer',
      {
        id: 'speedometer',
        name: 'High-Performance Gauge',
        shortDescription: 'Industrial-grade speedometer for real-time telemetry display',
        detailedDescription:
          'Advanced data visualization gauge. Features dual-needle поддержкой (comparison), customizable color zones, interactive needle dragging, image exporting (PNG/SVG), and animated value transitions.',
        usage: `<dui-speedometer [value]="80" [minValue]="0" [maxValue]="240" unit="km/h"></dui-speedometer>`,
        props: [
          {
            name: 'value',
            type: 'number',
            description: 'Main numeric measurement',
            required: true,
          },
          {
            name: 'secondaryValue',
            type: 'number',
            description: 'Ghost needle for comparison/history',
            defaultValue: 'undefined',
          },
          {
            name: 'ranges',
            type: 'string',
            description: 'Color zones (JSON): [{min, max, color}]',
            defaultValue: "'",
          },
          {
            name: 'needleShape',
            type: 'string',
            description: 'Aesthetic style (triangle, arrow, line)',
            defaultValue: "'triangle'",
          },
          {
            name: 'interactive',
            type: 'boolean',
            description: 'Allow setting value via needle dragging',
            defaultValue: 'false',
          },
          {
            name: 'showPercentage',
            type: 'boolean',
            description: 'Render value relative to total scale %',
            defaultValue: 'false',
          },
        ],
        events: [
          { name: 'valueChange', description: 'Fired in interactive mode', payloadType: 'number' },
        ],
        limitations: ['Rich custom ranges must be passed as double-quoted JSON strings'],
        examples: [
          '<dui-speedometer [value]="160" [maxValue]="300" unit="km/h" color="warning"></dui-speedometer>',
          '<dui-speedometer [value]="45" label="Load" showPercentage="true" ranges=\'[{"min":0, "max":40, "color": "green"}]\'></dui-speedometer>',
        ],
      },
    ],
    [
      'resizable-panel',
      {
        id: 'resizable-panel',
        name: 'Resizable Panel',
        shortDescription:
          'Flexible layout system with draggable dividers for horizontal and vertical resizing.',
        detailedDescription:
          'The Resizable Panel component provides a powerful split-pane layout system with draggable dividers. It supports horizontal and vertical splits, triple or nested panes, collapsible panels, snap-to-edge behaviour, min/max size constraints on each panel, and dark/light themes. Content is projected via named slots matching the panel id defined in the panels array.',
        usage: `<!-- Horizontal two-panel split -->
<dui-resizable-panel
  [panels]="[
    { id: 'p1', size: 30, minSize: 15 },
    { id: 'p2', size: 70 }
  ]"
  direction="horizontal"
>
  <div slot="p1">Left Panel</div>
  <div slot="p2">Right Panel</div>
</dui-resizable-panel>`,
        props: [
          {
            name: 'panels',
            type: 'PanelConfig[]',
            description:
              'Array of panel configuration objects. Each panel must have a unique id and initial size (%). Content is projected via slot="[id]".',
            required: true,
          },
          {
            name: 'direction',
            type: "'horizontal' | 'vertical'",
            description:
              'Split axis — horizontal places panels side by side; vertical stacks them top to bottom.',
            defaultValue: "'horizontal'",
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            description: 'Visual theme for the divider handle and background.',
            defaultValue: "'light'",
          },
          {
            name: 'animated',
            type: 'boolean',
            description: 'Enable CSS transitions when panels are collapsed or snapped.',
            defaultValue: 'true',
          },
          {
            name: 'snap-to-edge',
            type: 'boolean',
            description:
              'Enable snap-to-edge behaviour. When the user drags a handle within snapThreshold pixels of the container edge, the panel snaps closed.',
            defaultValue: 'false',
          },
          {
            name: 'snapThreshold',
            type: 'number',
            description: 'Distance in pixels from the container edge that triggers snap-to-edge.',
            defaultValue: '50',
          },
          {
            name: 'PanelConfig.id',
            type: 'string',
            description:
              'Unique identifier for the panel. Must match the slot name used for content projection.',
            required: true,
          },
          {
            name: 'PanelConfig.size',
            type: 'number',
            description: 'Initial panel size as a percentage of the total container.',
            defaultValue: '50',
          },
          {
            name: 'PanelConfig.minSize',
            type: 'number',
            description:
              'Minimum panel size as a percentage. The handle cannot be dragged past this limit.',
            defaultValue: '0',
          },
          {
            name: 'PanelConfig.maxSize',
            type: 'number',
            description:
              'Maximum panel size as a percentage. The handle cannot be dragged past this limit.',
            defaultValue: '100',
          },
          {
            name: 'PanelConfig.collapsible',
            type: 'boolean',
            description:
              'When true, a collapse/expand toggle button is shown on the divider for this panel.',
            defaultValue: 'false',
          },
          {
            name: 'PanelConfig.collapseDirection',
            type: "'left' | 'right' | 'top' | 'bottom'",
            description:
              'Direction this panel collapses toward when the collapse button is clicked.',
            defaultValue: "'left'",
          },
        ],
        events: [
          {
            name: 'panelResize',
            description: 'Emitted continuously while a divider is being dragged.',
            payloadType: '{ panelId: string; size: number }',
            payloadDescription:
              'The id of the panel being resized and its new size as a percentage.',
          },
          {
            name: 'panelSnap',
            description: 'Emitted when a panel snaps to edge or is collapsed/expanded.',
            payloadType: '{ panelId: string; snapped: boolean }',
            payloadDescription: 'The id of the panel and whether it is now snapped/collapsed.',
          },
        ],
        limitations: [
          'Panel sizes must sum to 100% — any remainder is distributed to the last panel automatically.',
          'Nested panels require the outer slot element to have height:100% so inner panels fill the space.',
          'snap-to-edge only works reliably when the container has a fixed or known pixel height/width.',
          'Touch drag is supported but may conflict with native scroll on mobile — use direction="vertical" with caution on touch devices.',
          'Maximum recommended nesting depth is 2 levels for performance.',
        ],
        examples: [
          `<!-- Vertical split -->
<dui-resizable-panel [panels]="[{id:'t1',size:50},{id:'t2',size:50}]" direction="vertical">
  <div slot="t1">Top Panel</div>
  <div slot="t2">Bottom Panel</div>
</dui-resizable-panel>`,
          `<!-- Triple horizontal split -->
<dui-resizable-panel [panels]="[
  {id:'p1',size:30,minSize:20},
  {id:'p2',size:40,minSize:20},
  {id:'p3',size:30,minSize:20}
]" direction="horizontal">
  <div slot="p1">Left</div>
  <div slot="p2">Centre</div>
  <div slot="p3">Right</div>
</dui-resizable-panel>`,
          `<!-- Nested panels (IDE layout) -->
<dui-resizable-panel [panels]="nestedOuter" direction="horizontal">
  <div slot="sidebar">Sidebar</div>
  <div slot="main" style="height:100%">
    <dui-resizable-panel [panels]="nestedInner" direction="vertical">
      <div slot="editor">Editor</div>
      <div slot="terminal">Terminal</div>
    </dui-resizable-panel>
  </div>
</dui-resizable-panel>`,
          `<!-- Collapsible + snap -->
<dui-resizable-panel
  [panels]="[{id:'left',size:30,collapsible:true,collapseDirection:'left'},{id:'main',size:70}]"
  direction="horizontal"
  snap-to-edge="true"
  [snapThreshold]="50"
  theme="dark"
>
  <div slot="left">Collapsible Sidebar</div>
  <div slot="main">Main Content</div>
</dui-resizable-panel>`,
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
