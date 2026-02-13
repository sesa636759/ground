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
          <ui-accordion [items]="accordionItems"></ui-accordion>
          
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
<ui-accordion 
  [items]="items" 
  enable-search 
  search-placeholder="Search items...">
</ui-accordion>`,
          `<!-- Drag & Drop with Persistence -->
<ui-accordion 
  [items]="items" 
  enable-drag-drop 
  enable-persistence 
  persistence-key="my-accordion-v1"
  (accordionReorder)="handleReorder($event)">
</ui-accordion>`,
          `<!-- Nested Accordion -->
<ui-accordion 
  [items]="nestedItems" 
  enable-nested>
</ui-accordion>`,
          `<!-- With Actions and Events -->
<ui-accordion 
  [items]="items" 
  (accordionAction)="handleAction($event)"
  (afterOpen)="onItemOpen($event)">
</ui-accordion>`,
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
        usage: `<ui-button label="Click Me" variant="primary"></ui-button>`,
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
          '<ui-button label="Primary" variant="primary"></ui-button>',
          '<ui-button label="Loading" loading variant="secondary"></ui-button>',
          '<ui-button icon="⚙️" label="Settings" icon-position="right"></ui-button>',
          '<ui-button label="Notifications" icon="🔔" badge="9" variant="warning"></ui-button>',
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
        shortDescription:
          'A modal dialog component for displaying important information or user actions.',
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
    [
      'checkbox',
      {
        id: 'checkbox',
        name: 'Checkbox',
        shortDescription: 'Selection control for binary or multiple choices',
        detailedDescription:
          'Versatile checkbox component with color variants (primary, secondary, success, danger, warning, info), premium styles (button, chip), multiple sizes, shape variants (default, rounded, square), indeterminate state support, validation states, helper text, and skeleton loading states.',
        usage: `<app-checkbox label="Accept terms" checked></app-checkbox>`,
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
          '<app-checkbox label="Subscribe" color="primary" checked></app-checkbox>',
          '<app-checkbox label="Frontend" variant="button" color="info"></app-checkbox>',
          '<app-checkbox label="React" variant="chip" color="success" checked></app-checkbox>',
          '<app-checkbox label="Agree to terms" required invalid error-message="Required field"></app-checkbox>',
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
        usage: `<ui-avatar name="John Doe" size="64px"></ui-avatar>`,
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
          '<ui-avatar src="https://i.pravatar.cc/150" name="User" size="64px"></ui-avatar>',
          '<ui-avatar name="John Doe" status="online" size="64px"></ui-avatar>',
          '<ui-avatar icon="⭐" shape="hexagon" size="64px"></ui-avatar>',
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
        usage: `<ui-badge value="5" color="danger"><div>Icon</div></ui-badge>`,
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
          '<ui-badge value="1" color="primary"><div class="icon">👤</div></ui-badge>',
          '<ui-badge value="999" max="99" color="danger"><div class="icon">📧</div></ui-badge>',
          '<ui-badge dot color="success"><div class="icon">🟢</div></ui-badge>',
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
        usage: `<ui-chip label="JavaScript" icon="js" color="warning"></ui-chip>`,
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
          '<ui-chip label="Filled" variant="filled" color="primary"></ui-chip>',
          '<ui-chip label="Vue.js" icon="🟢" color="success"></ui-chip>',
          '<ui-chip label="Removable" removable variant="soft" color="danger"></ui-chip>',
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
        usage: `<ui-dropdown [options]="options" placeholder="Select option"></ui-dropdown>`,
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
          '<ui-dropdown [options]="basicOptions" placeholder="Select item"></ui-dropdown>',
          '<ui-dropdown multi-select [options]="options" placeholder="Select multiple"></ui-dropdown>',
          '<ui-dropdown cascading [options]="cascadingOptions" placeholder="Explore"></ui-dropdown>',
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
        usage: `<app-tooltip content="Helpful text" position="top">
  <ui-button slot="target" label="Hover Me"></ui-button>
</app-tooltip>`,
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
          '<app-tooltip content="Dark Theme" variant="dark"><ui-button label="Dark"></ui-button></app-tooltip>',
          '<app-tooltip content="Light Theme" variant="light"><ui-button label="Light"></ui-button></app-tooltip>',
          '<app-tooltip content="Glass Effect" variant="glass"><ui-button label="Glass"></ui-button></app-tooltip>',
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
        usage: `<ui-stepper [steps]="steps" active-step="1" orientation="horizontal"></ui-stepper>`,
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
          '<ui-stepper orientation="horizontal" [steps]="steps" active-step="1"></ui-stepper>',
          '<ui-stepper orientation="vertical" [steps]="steps" active-step="1" show-descriptions></ui-stepper>',
          '<ui-stepper progress-dot [steps]="steps" active-step="1"></ui-stepper>',
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
        usage: `<app-progress [percent]="70" status="active"></app-progress>`,
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
            defaultValue: "''",
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
          '<app-progress [percent]="30"></app-progress>',
          '<app-progress type="circle" [percent]="75" size="small"></app-progress>',
          '<app-progress [multiProgress]="[{percent: 20, color: \'#f50\'}, {percent: 30}]"></app-progress>',
          '<app-progress [percent]="50" [buffer]="80" [showBuffer]="true"></app-progress>',
        ],
      },
    ],
    [
      'button-group',
      {
        id: 'button-group',
        name: 'Button Group',
        shortDescription: 'Group multiple buttons with consistent layout and selection behavior',
        detailedDescription:
          'Container component for grouping related buttons with support for single/multiple selection modes, horizontal/vertical orientations, attached or spaced layouts, and consistent styling across grouped buttons. Ideal for toolbars, toggle sets, and segmented controls.',
        usage: `<ui-button-group selection-mode="single">
  <ui-button label="Option 1" variant="outline"></ui-button>
  <ui-button label="Option 2" variant="outline"></ui-button>
</ui-button-group>`,
        props: [
          {
            name: 'selection-mode',
            type: 'string',
            description: 'Selection behavior (single, multiple, none)',
            defaultValue: 'none',
            required: false,
          },
          {
            name: 'orientation',
            type: 'string',
            description: 'Layout direction (horizontal, vertical)',
            defaultValue: 'horizontal',
            required: false,
          },
          {
            name: 'attached',
            type: 'boolean',
            description: 'Remove gaps between buttons',
            defaultValue: 'true',
            required: false,
          },
        ],
        events: [
          {
            name: 'selectionChange',
            description: 'Fired when selection changes',
            payloadType: 'CustomEvent',
            payloadDescription: 'Contains selected button indices or values',
          },
        ],
        limitations: [
          'Selection mode requires buttons to have value attributes',
          'Attached mode modifies button border radii',
        ],
        examples: [
          '<ui-button-group selection-mode="single"><ui-button label="Day"></ui-button><ui-button label="Night"></ui-button></ui-button-group>',
          '<ui-button-group selection-mode="multiple"><ui-button label="Bold" icon="B"></ui-button><ui-button label="Italic" icon="I"></ui-button></ui-button-group>',
          '<ui-button-group orientation="vertical"><ui-button label="Home"></ui-button><ui-button label="Profile"></ui-button></ui-button-group>',
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
        usage: `<app-button-toggle-group value="option1" color="primary" [attr.options]="jsonOptions(options)"></app-button-toggle-group>`,
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
          '<app-button-toggle-group value="day" color="info" variant="soft" [attr.options]="timeOptions"></app-button-toggle-group>',
          '<app-button-toggle-group value="user1" color="primary" [attr.options]="avatarOptions"></app-button-toggle-group>',
          '<app-button-toggle-group value="high" color="danger" orientation="vertical" [attr.options]="priorityOptions"></app-button-toggle-group>',
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
        usage: `<ui-breadcrumb [items]="items" separator=">>"></ui-breadcrumb>`,
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
          '<ui-breadcrumb [items]="items" separator=">>"></ui-breadcrumb>',
          '<ui-breadcrumb [items]="collapsibleItems" max-items="4"></ui-breadcrumb>',
          '<ui-breadcrumb [items]="items" variant="pills" show-home></ui-breadcrumb>',
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
        usage: `<ui-pagination [total-records]="100" [rows]="10" show-report></ui-pagination>`,
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
          '<ui-pagination variant="modern" [total-records]="50" [rows]="10" show-report></ui-pagination>',
          '<ui-pagination variant="compact" [total-records]="100" [rows]="10"></ui-pagination>',
          '<ui-pagination [show-jump-controls]="false" [total-records]="100" [rows]="10"></ui-pagination>',
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
        usage: `<ui-popover trigger="click" heading="Title" content="Description">
  <ui-button slot="target" label="Click Me"></ui-button>
</ui-popover>`,
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
          '<ui-popover trigger="click" heading="Info" content="Details"><ui-button label="Click"></ui-button></ui-popover>',
          '<ui-popover trigger="hover" content="Quick info"><ui-button label="Hover"></ui-button></ui-popover>',
          '<ui-popover variant="dark" heading="Dark" content="Content"><ui-button label="Dark"></ui-button></ui-popover>',
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
        usage: `<ui-rating type="star" [value]="4"></ui-rating>`,
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
          '<ui-rating type="star" [value]="4" color="warning"></ui-rating>',
          '<ui-rating type="smiley" [value]="4" size="lg"></ui-rating>',
          '<ui-rating type="thumb" [value]="1" color="success"></ui-rating>',
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
        usage: `<ui-switch label="Dark Mode" checked></ui-switch>`,
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
          '<ui-switch label="Primary" variant="primary" checked></ui-switch>',
          '<ui-switch label="Dark Mode" icon-on="🌙" icon-off="☀️" checked></ui-switch>',
          '<ui-switch label="Sound" icon-on="🔊" icon-off="🔇" checked variant="info"></ui-switch>',
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
        usage: `<ui-tag severity="info" value="Information"></ui-tag>`,
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
          '<ui-tag severity="info" value="Information"></ui-tag>',
          '<ui-tag severity="success" value="Completed"></ui-tag>',
          '<ui-tag severity="warning" value="Pending"></ui-tag>',
          '<ui-tag severity="danger" value="Error" icon="⚠"></ui-tag>',
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
        usage: `<ui-timeline align="alternate" [value]="events">
  <ng-template let-item>
    <div>{{ item.status }}</div>
  </ng-template>
</ui-timeline>`,
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
          '<ui-timeline align="alternate" [value]="events"><ng-template let-item><div>{{ item.status }}</div></ng-template></ui-timeline>',
          '<ui-timeline orientation="horizontal" [value]="events"><ng-template let-item><div>{{ item.status }}</div></ng-template></ui-timeline>',
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
        usage: `<app-carousel autoplay="true" show-progress="true">
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
</app-carousel>`,
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
          '<app-carousel effect="fade" autoplay="true" autoplay-interval="4000"><div class="slide">1</div></app-carousel>',
          '<app-carousel center-mode="true" slides-to-show="1" center-padding="20%"><div class="slide">1</div></app-carousel>',
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
        usage: `<app-radio-group name="choice" [options]="options" value="option1"></app-radio-group>`,
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
            name: 'button-group',
            type: 'boolean',
            description: 'Style as button group',
            defaultValue: 'false',
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
          '<app-radio-group name="size" value="medium" [options]="sizeOptions"></app-radio-group>',
          '<app-radio-group name="plan" variant="card" layout="grid" columns="2" [options]="planOptions"></app-radio-group>',
          '<app-radio-group name="priority" button-group layout="horizontal" value="medium" [options]="priorityOptions"></app-radio-group>',
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
            defaultValue: "''",
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
            defaultValue: "''",
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
        usage: `<app-code-editor [files]="projectFiles" language="javascript" theme="vs-dark"></app-code-editor>`,
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
          '<app-code-editor [files]="myScript" theme="vs-dark" showSidebar></app-code-editor>',
          '<app-code-editor language="json" [value]="configJson" [toolbar]="false"></app-code-editor>',
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
        usage: `<app-dashboard [columns]="12" [widgets]="widgetList"></app-dashboard>`,
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
          '<app-dashboard [widgets]="myStats" [isEditable]="true" theme="glass"></app-dashboard>',
          '<app-dashboard [columns]="4" [widgets]="miniCards" theme="dark"></app-dashboard>',
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
        usage: `<ui-cascade-select [options]="treeData" placeholder="Select category"></ui-cascade-select>`,
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
            defaultValue: "''",
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
          '<ui-cascade-select [options]="categories" showFullPath="false"></ui-cascade-select>',
          '<ui-cascade-select [options]="locations" expandTrigger="hover"></ui-cascade-select>',
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
        usage: `<ui-transfer-list [sourceItems]="all" [targetItems]="selected"></ui-transfer-list>`,
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
          '<ui-transfer-list [sourceItems]="users" searchable mode="table"></ui-transfer-list>',
          '<ui-transfer-list [sourceItems]="files" mode="tree" oneWay></ui-transfer-list>',
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
        usage: `<ui-picklist [options]="data" mode="multi" searchable></ui-picklist>`,
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
          '<ui-picklist [options]="tags" mode="multi" reorderable></ui-picklist>',
          '<ui-picklist [options]="users" searchable loading="true"></ui-picklist>',
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
        usage: `<ui-snackbar position="top-right" maxVisible="3"></ui-snackbar>`,
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
        examples: ['<ui-snackbar position="top-center" openMode="slide-down"></ui-snackbar>'],
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
        usage: `<ui-dialog-box [open]="isModalOpen" dialogTitle="Confirm Action" size="md"></ui-dialog-box>`,
        props: [
          {
            name: 'open',
            type: 'boolean',
            description: 'Visibility state',
            defaultValue: 'false',
            required: true,
          },
          { name: 'dialogTitle', type: 'string', description: 'Header text', defaultValue: "''" },
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
          '<ui-dialog-box [open]="true" dialogTitle="Settings" isDraggable resizable></ui-dialog-box>',
          '<ui-dialog-box [open]="show" status="success" confetti okText="Finish"></ui-dialog-box>',
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
        usage: `<ui-range-slider min="0" max="100" [value]="50"></ui-range-slider>`,
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
          '<ui-range-slider range="true" [startValue]="20" [endValue]="80" showMarks="true"></ui-range-slider>',
          '<ui-range-slider vertical="true" [min]="0" [max]="10" size="lg"></ui-range-slider>',
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
        usage: `<ui-meter-group [values]="data" shape="line"></ui-meter-group>`,
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
          '<ui-meter-group [values]="storageStats" showLegend="true"></ui-meter-group>',
          '<ui-meter-group shape="circle" [values]="usageData" size="lg"></ui-meter-group>',
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
        usage: `<ui-speed-dial [actions]="myActions" position="bottom-right"></ui-speed-dial>`,
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
          '<ui-speed-dial [actions]="fileOps" direction="up" color="primary"></ui-speed-dial>',
          '<ui-speed-dial trigger="hover" [actions]="socialLinks" position="top-left"></ui-speed-dial>',
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
        usage: `<ui-split-button label="Save" [options]="moreOptions"></ui-split-button>`,
        props: [
          { name: 'label', type: 'string', description: 'Main button text', defaultValue: "''" },
          { name: 'icon', type: 'string', description: 'Main button icon', defaultValue: "''" },
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
          '<ui-split-button label="Submit" [options]="submitOptions" (mainClick)="doSubmit()"></ui-split-button>',
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
        usage: `<ui-pattern-input pattern="(###) ###-####" label="Phone"></ui-pattern-input>`,
        props: [
          {
            name: 'pattern',
            type: 'string',
            description: 'Visual mask using placeholder characters',
            defaultValue: "''",
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
          '<ui-pattern-input pattern="####-####-####-####" label="Credit Card"></ui-pattern-input>',
          '<ui-pattern-input inputType="numeric" pattern="## / ## / ####" placeholder="DD / MM / YYYY"></ui-pattern-input>',
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
        usage: `<ui-timer mode="countdown" [steps]="intervals"></ui-timer>`,
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
          '<ui-timer mode="stopwatch" progressType="circle" size="lg"></ui-timer>',
          '<ui-timer [steps]="workoutFlow" autoStart="true" enableSound="true"></ui-timer>',
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
        usage: `<ui-aside-panel [open]="isOpen" direction="right" size="400px"></ui-aside-panel>`,
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
            defaultValue: "''",
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
          '<ui-aside-panel [open]="showSettings" direction="left" resizable size="25%"></ui-aside-panel>',
          '<ui-aside-panel [open]="showLogs" direction="bottom" variant="glass" [closeOnOverlayClick]="true"></ui-aside-panel>',
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
        usage: `<ui-smart-menu [items]="menuConfig" [visible]="true"></ui-smart-menu>`,
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
            defaultValue: "''",
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
        examples: ['<ui-smart-menu [items]="myNav" target="#nav-trigger"></ui-smart-menu>'],
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
        usage: `<ui-smart-stepper [activeStep]="0"></ui-smart-stepper>`,
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
          '<ui-smart-stepper orientation="vertical" [activeStep]="currentStep">...</ui-smart-stepper>',
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
        usage: `<ui-dock [items]="dockConfig" position="bottom"></ui-dock>`,
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
          '<ui-dock [items]="apps" magnify="true" size="lg"></ui-dock>',
          '<ui-dock [items]="tools" position="left" [blurEffect]="false"></ui-dock>',
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
        usage: `<ui-pill label="New Status" color="success" variant="soft"></ui-pill>`,
        props: [
          {
            name: 'label',
            type: 'string',
            description: 'Pill text content',
            defaultValue: "''",
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
            defaultValue: "''",
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
          '<ui-pill label="Admin" [avatar]="photoUrl" color="info"></ui-pill>',
          '<ui-pill label="Priority" variant="gradient" gradient="linear-gradient(#f00, #00f)"></ui-pill>',
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
        usage: `<ui-context-menu [items]="menuData" target="#my-area"></ui-context-menu>`,
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
          '<ui-context-menu [items]="fileActions" target=".file-row"></ui-context-menu>',
          '<ui-context-menu [items]="viewOps" openOn="click" placement="right"></ui-context-menu>',
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
