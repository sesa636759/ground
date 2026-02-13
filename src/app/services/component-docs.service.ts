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
        shortDescription: 'Collapsible content panels for organizing information in a compact format.',
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
          { name: 'label', type: 'string', description: 'Text displayed on the button', defaultValue: '', required: true },
          { name: 'variant', type: 'string', description: 'Visual style variant', defaultValue: 'primary', required: false },
          { name: 'size', type: 'string', description: 'Button size (xs, sm, md, lg, xl)', defaultValue: 'md', required: false },
          { name: 'icon', type: 'string', description: 'Icon to display (emoji or icon class)', defaultValue: '', required: false },
          { name: 'icon-position', type: 'string', description: 'Icon position (left, right)', defaultValue: 'left', required: false },
          { name: 'icon-only', type: 'boolean', description: 'Display only icon without label', defaultValue: 'false', required: false },
          { name: 'badge', type: 'string', description: 'Badge value to display', defaultValue: '', required: false },
          { name: 'disabled', type: 'boolean', description: 'Disable button interactions', defaultValue: 'false', required: false },
          { name: 'loading', type: 'boolean', description: 'Show loading state', defaultValue: 'false', required: false },
          { name: 'pill', type: 'boolean', description: 'Apply pill-shaped styling', defaultValue: 'false', required: false },
          { name: 'rounded', type: 'boolean', description: 'Apply rounded corners', defaultValue: 'false', required: false },
          { name: 'full-width', type: 'boolean', description: 'Expand to full container width', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'click', description: 'Fired when button is clicked', payloadType: 'MouseEvent', payloadDescription: 'Standard mouse event object' },
        ],
        limitations: ['Loading state prevents interaction but maintains layout', 'Icon-only buttons require explicit aria-label for accessibility'],
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
          { name: 'label', type: 'string', description: 'Checkbox label text', defaultValue: '', required: false },
          { name: 'checked', type: 'boolean', description: 'Checked state', defaultValue: 'false', required: false },
          { name: 'indeterminate', type: 'boolean', description: 'Indeterminate state', defaultValue: 'false', required: false },
          { name: 'color', type: 'string', description: 'Color variant (primary, secondary, success, danger, warning, info)', defaultValue: 'primary', required: false },
          { name: 'variant', type: 'string', description: 'Visual variant (default, button, chip, rounded, square)', defaultValue: 'default', required: false },
          { name: 'size', type: 'string', description: 'Checkbox size (small, medium, large)', defaultValue: 'medium', required: false },
          { name: 'disabled', type: 'boolean', description: 'Disable checkbox', defaultValue: 'false', required: false },
          { name: 'readonly', type: 'boolean', description: 'Make checkbox readonly', defaultValue: 'false', required: false },
          { name: 'required', type: 'boolean', description: 'Mark as required field', defaultValue: 'false', required: false },
          { name: 'invalid', type: 'boolean', description: 'Show error state', defaultValue: 'false', required: false },
          { name: 'helper-text', type: 'string', description: 'Helper text below checkbox', defaultValue: '', required: false },
          { name: 'error-message', type: 'string', description: 'Error message text', defaultValue: '', required: false },
          { name: 'label-position', type: 'string', description: 'Label position (left, right)', defaultValue: 'right', required: false },
          { name: 'skeleton', type: 'boolean', description: 'Show skeleton loading state', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'change', description: 'Fired when checked state changes', payloadType: 'CustomEvent', payloadDescription: 'Contains checked state (boolean)' },
        ],
        limitations: ['Indeterminate state is visual only and does not affect form submission', 'Button and chip variants work best in groups'],
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
          { name: 'variant', type: 'string', description: 'Visual style (underline, pills, enclosed)', defaultValue: 'underline', required: false },
          { name: 'orientation', type: 'string', description: 'Tab layout (horizontal, vertical)', defaultValue: 'horizontal', required: false },
          { name: 'active-tab', type: 'string', description: 'Currently active tab value', defaultValue: '', required: false },
          { name: 'color', type: 'string', description: 'Active tab color (primary, success, warning, info, danger)', defaultValue: 'primary', required: false },
          { name: 'closable', type: 'boolean', description: 'Enable tab close buttons', defaultValue: 'false', required: false },
          { name: 'show-add-button', type: 'boolean', description: 'Show add new tab button', defaultValue: 'false', required: false },
          { name: 'show-close-all-button', type: 'boolean', description: 'Show close all tabs button', defaultValue: 'false', required: false },
          { name: 'drag-enabled', type: 'boolean', description: 'Enable drag-and-drop reordering', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'tabChange', description: 'Fired when active tab changes', payloadType: 'CustomEvent', payloadDescription: 'Contains tab value' },
          { name: 'tabClose', description: 'Fired when tab is closed', payloadType: 'CustomEvent', payloadDescription: 'Contains closed tab value' },
          { name: 'tabAdd', description: 'Fired when add button is clicked', payloadType: 'CustomEvent', payloadDescription: 'Empty event' },
          { name: 'tabReorder', description: 'Fired when tabs are reordered', payloadType: 'CustomEvent', payloadDescription: 'Contains new tab order' },
        ],
        limitations: ['Vertical orientation requires explicit height container', 'Drag-enabled tabs may conflict with scroll containers'],
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
          { name: 'name', type: 'string', description: 'User name (used for initials if no src)', defaultValue: '', required: false },
          { name: 'src', type: 'string', description: 'Avatar image URL', defaultValue: '', required: false },
          { name: 'content', type: 'string', description: 'Custom text content', defaultValue: '', required: false },
          { name: 'icon', type: 'string', description: 'Icon to display', defaultValue: '', required: false },
          { name: 'shape', type: 'string', description: 'Avatar shape (circle, square, hexagon, squircle)', defaultValue: 'circle', required: false },
          { name: 'size', type: 'string', description: 'Avatar size in pixels', defaultValue: '48px', required: false },
          { name: 'status', type: 'string', description: 'Status indicator (online, away, busy, offline)', defaultValue: '', required: false },
          { name: 'badge', type: 'string', description: 'Badge content (number or "dot")', defaultValue: '', required: false },
          { name: 'badge-color', type: 'string', description: 'Badge background color', defaultValue: '#ef4444', required: false },
        ],
        events: [
          { name: 'click', description: 'Fired when avatar is clicked', payloadType: 'MouseEvent', payloadDescription: 'Standard click event' },
        ],
        limitations: ['Hexagon shape may clip content at certain sizes', 'Status indicators have fixed positions'],
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
          { name: 'value', type: 'string | number', description: 'Badge content', defaultValue: '', required: false },
          { name: 'color', type: 'string', description: 'Semantic color (primary, success, warning, danger, info)', defaultValue: 'primary', required: false },
          { name: 'variant', type: 'string', description: 'Visual style (standard, soft, outlined)', defaultValue: 'standard', required: false },
          { name: 'dot', type: 'boolean', description: 'Show as dot indicator', defaultValue: 'false', required: false },
          { name: 'position', type: 'string', description: 'Badge position (top-right, top-left, bottom-right, bottom-left)', defaultValue: 'top-right', required: false },
          { name: 'max', type: 'number', description: 'Maximum value to display (shows "99+" if exceeded)', defaultValue: 'Infinity', required: false },
          { name: 'animation', type: 'string', description: 'Animation type (pulse, none)', defaultValue: 'none', required: false },
          { name: 'glow', type: 'boolean', description: 'Enable glow effect', defaultValue: 'false', required: false },
        ],
        events: [],
        limitations: ['Badge positioning requires parent with position: relative', 'Dot variant ignores value prop'],
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
          { name: 'label', type: 'string', description: 'Chip text content', defaultValue: '', required: true },
          { name: 'variant', type: 'string', description: 'Visual style (filled, outlined, soft, gradient, text)', defaultValue: 'filled', required: false },
          { name: 'color', type: 'string', description: 'Color theme (primary, secondary, success, danger, warning, info)', defaultValue: 'primary', required: false },
          { name: 'shape', type: 'string', description: 'Chip shape (pill, rounded, square, circle)', defaultValue: 'pill', required: false },
          { name: 'size', type: 'string', description: 'Chip size (sm, md, lg)', defaultValue: 'md', required: false },
          { name: 'icon', type: 'string', description: 'Icon to display', defaultValue: '', required: false },
          { name: 'clickable', type: 'boolean', description: 'Make chip clickable', defaultValue: 'false', required: false },
          { name: 'removable', type: 'boolean', description: 'Show remove button', defaultValue: 'false', required: false },
          { name: 'selected', type: 'boolean', description: 'Selected state', defaultValue: 'false', required: false },
          { name: 'disabled', type: 'boolean', description: 'Disabled state', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'click', description: 'Fired when chip is clicked (if clickable)', payloadType: 'MouseEvent', payloadDescription: 'Click event' },
          { name: 'remove', description: 'Fired when remove button is clicked', payloadType: 'CustomEvent', payloadDescription: 'Chip data' },
        ],
        limitations: ['Circle shape works best with icon-only chips', 'Avatar and icon props are mutually exclusive'],
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
          { name: 'options', type: 'array', description: 'Array of option objects {label, value, children?}', defaultValue: '[]', required: true },
          { name: 'placeholder', type: 'string', description: 'Placeholder text', defaultValue: 'Select...', required: false },
          { name: 'multi-select', type: 'boolean', description: 'Enable multiple selection', defaultValue: 'false', required: false },
          { name: 'cascading', type: 'boolean', description: 'Enable hierarchical cascading', defaultValue: 'false', required: false },
          { name: 'size', type: 'string', description: 'Dropdown size (sm, md, lg)', defaultValue: 'md', required: false },
          { name: 'disabled', type: 'boolean', description: 'Disable dropdown', defaultValue: 'false', required: false },
          { name: 'searchable', type: 'boolean', description: 'Enable search filtering', defaultValue: 'true', required: false },
        ],
        events: [
          { name: 'change', description: 'Fired when selection changes', payloadType: 'CustomEvent', payloadDescription: 'Contains selected value(s)' },
          { name: 'search', description: 'Fired when search input changes', payloadType: 'CustomEvent', payloadDescription: 'Contains search term' },
        ],
        limitations: ['Cascading requires nested children arrays in options', 'Multi-select shows checkboxes automatically'],
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
          { name: 'content', type: 'string', description: 'Tooltip text content', defaultValue: '', required: true },
          { name: 'position', type: 'string', description: 'Tooltip position (top, bottom, left, right, auto)', defaultValue: 'top', required: false },
          { name: 'variant', type: 'string', description: 'Visual theme (dark, light, glass, success, warning, error)', defaultValue: 'dark', required: false },
          { name: 'shape', type: 'string', description: 'Tooltip shape (default, pill)', defaultValue: 'default', required: false },
          { name: 'animation', type: 'string', description: 'Entry animation (fade, bounce, scale)', defaultValue: 'fade', required: false },
          { name: 'delay', type: 'number', description: 'Show delay in milliseconds', defaultValue: '200', required: false },
        ],
        events: [
          { name: 'show', description: 'Fired when tooltip appears', payloadType: 'CustomEvent', payloadDescription: 'Empty event' },
          { name: 'hide', description: 'Fired when tooltip disappears', payloadType: 'CustomEvent', payloadDescription: 'Empty event' },
        ],
        limitations: ['Auto position requires viewport detection', 'Glass variant needs background context'],
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
          { name: 'steps', type: 'array', description: 'Array of step objects {label, description?, status?}', defaultValue: '[]', required: true },
          { name: 'active-step', type: 'number', description: 'Currently active step index', defaultValue: '0', required: false },
          { name: 'orientation', type: 'string', description: 'Layout orientation (horizontal, vertical)', defaultValue: 'horizontal', required: false },
          { name: 'flow', type: 'string', description: 'Navigation flow (linear, non-linear)', defaultValue: 'linear', required: false },
          { name: 'progress-dot', type: 'boolean', description: 'Use dots instead of numbers', defaultValue: 'false', required: false },
          { name: 'show-descriptions', type: 'boolean', description: 'Display step descriptions', defaultValue: 'false', required: false },
          { name: 'show-controls', type: 'boolean', description: 'Show next/previous buttons', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'stepChange', description: 'Fired when active step changes', payloadType: 'CustomEvent', payloadDescription: 'Contains new step index' },
          { name: 'complete', description: 'Fired when all steps are completed', payloadType: 'CustomEvent', payloadDescription: 'Empty event' },
        ],
        limitations: ['Vertical orientation requires explicit container height', 'Non-linear flow allows skipping validation'],
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
          'Comprehensive progress component supporting line, circle, and dashboard types. Features status states (active, success, exception), step segmentation, gradient colors, custom stroke widths and line caps, premium effects (liquid wave, glassmorphism, glow), size variants, and percentage display.',
        usage: `<app-progress percent="70" status="active"></app-progress>`,
        props: [
          { name: 'percent', type: 'number', description: 'Progress percentage (0-100)', defaultValue: '0', required: true },
          { name: 'type', type: 'string', description: 'Progress type (line, circle, dashboard)', defaultValue: 'line', required: false },
          { name: 'status', type: 'string', description: 'Status state (active, success, exception)', defaultValue: '', required: false },
          { name: 'steps', type: 'number', description: 'Number of step segments', defaultValue: '0', required: false },
          { name: 'stroke-color', type: 'string', description: 'Progress bar color', defaultValue: '', required: false },
          { name: 'stroke-width', type: 'number', description: 'Progress bar thickness', defaultValue: '8', required: false },
          { name: 'liquid', type: 'boolean', description: 'Enable liquid wave effect', defaultValue: 'false', required: false },
          { name: 'glass', type: 'boolean', description: 'Enable glassmorphism effect', defaultValue: 'false', required: false },
          { name: 'glow', type: 'boolean', description: 'Enable glow effect', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'complete', description: 'Fired when progress reaches 100%', payloadType: 'CustomEvent', payloadDescription: 'Empty event' },
        ],
        limitations: ['Liquid effect is CPU intensive', 'Glass variant requires background context'],
        examples: [
          '<app-progress percent="30"></app-progress>',
          '<app-progress percent="70" status="active"></app-progress>',
          '<app-progress type="circle" percent="75"></app-progress>',
          '<app-progress percent="65" liquid="true" stroke-color="#3DCD58"></app-progress>',
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
          { name: 'selection-mode', type: 'string', description: 'Selection behavior (single, multiple, none)', defaultValue: 'none', required: false },
          { name: 'orientation', type: 'string', description: 'Layout direction (horizontal, vertical)', defaultValue: 'horizontal', required: false },
          { name: 'attached', type: 'boolean', description: 'Remove gaps between buttons', defaultValue: 'true', required: false },
        ],
        events: [
          { name: 'selectionChange', description: 'Fired when selection changes', payloadType: 'CustomEvent', payloadDescription: 'Contains selected button indices or values' },
        ],
        limitations: ['Selection mode requires buttons to have value attributes', 'Attached mode modifies button border radii'],
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
          { name: 'value', type: 'string', description: 'Currently selected option value', defaultValue: '', required: false },
          { name: 'options', type: 'array', description: 'Array of option objects {value, label, icon?, avatar?, status?}', defaultValue: '[]', required: true },
          { name: 'color', type: 'string', description: 'Color theme (primary, secondary, success, danger, warning, info)', defaultValue: 'primary', required: false },
          { name: 'variant', type: 'string', description: 'Style variant (filled, outlined, text, soft, classic, solid, surface)', defaultValue: 'filled', required: false },
          { name: 'size', type: 'string', description: 'Button size (small, medium, large)', defaultValue: 'medium', required: false },
          { name: 'orientation', type: 'string', description: 'Layout orientation (horizontal, vertical)', defaultValue: 'horizontal', required: false },
        ],
        events: [
          { name: 'valueChange', description: 'Fired when selection changes', payloadType: 'CustomEvent', payloadDescription: 'Contains new value' },
        ],
        limitations: ['Gliding animation requires CSS transitions support', 'Avatar options require avatar URLs in data'],
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
          { name: 'items', type: 'array', description: 'Array of breadcrumb items {label, link}', defaultValue: '[]', required: true },
          { name: 'separator', type: 'string', description: 'Separator character or text', defaultValue: '/', required: false },
          { name: 'separator-icon', type: 'string', description: 'Separator icon', defaultValue: '', required: false },
          { name: 'max-items', type: 'number', description: 'Maximum items to show before collapsing', defaultValue: 'Infinity', required: false },
          { name: 'variant', type: 'string', description: 'Visual variant (standard, pills, glass)', defaultValue: 'standard', required: false },
          { name: 'show-home', type: 'boolean', description: 'Show home icon as first item', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'itemClick', description: 'Fired when breadcrumb item is clicked', payloadType: 'CustomEvent', payloadDescription: 'Contains clicked item data' },
        ],
        limitations: ['Glass variant requires background gradient context', 'Collapsed items shown in dropdown on ellipsis click'],
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
          { name: 'total-records', type: 'number', description: 'Total number of records', defaultValue: '0', required: true },
          { name: 'rows', type: 'number', description: 'Records per page', defaultValue: '10', required: false },
          { name: 'variant', type: 'string', description: 'Visual style (modern, compact)', defaultValue: 'modern', required: false },
          { name: 'show-jump-controls', type: 'boolean', description: 'Show first/last page buttons', defaultValue: 'true', required: false },
          { name: 'show-report', type: 'boolean', description: 'Show page info summary', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'pageChange', description: 'Fired when page changes', payloadType: 'CustomEvent', payloadDescription: 'Contains new page number' },
          { name: 'rowsChange', description: 'Fired when rows per page changes', payloadType: 'CustomEvent', payloadDescription: 'Contains new rows value' },
        ],
        limitations: ['Requires manual data fetching on page change', 'Compact variant may hide some controls on mobile'],
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
          { name: 'trigger', type: 'string', description: 'Trigger event (click, hover, focus)', defaultValue: 'click', required: false },
          { name: 'placement', type: 'string', description: 'Popover position (top, bottom, left, right)', defaultValue: 'top', required: false },
          { name: 'heading', type: 'string', description: 'Popover heading text', defaultValue: '', required: false },
          { name: 'content', type: 'string', description: 'Popover content text', defaultValue: '', required: false },
          { name: 'variant', type: 'string', description: 'Visual theme (light, dark, glass)', defaultValue: 'light', required: false },
          { name: 'backdrop', type: 'boolean', description: 'Show backdrop dimming', defaultValue: 'false', required: false },
          { name: 'show-close-button', type: 'boolean', description: 'Show close button', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'show', description: 'Fired when popover opens', payloadType: 'CustomEvent', payloadDescription: 'Empty event' },
          { name: 'hide', description: 'Fired when popover closes', payloadType: 'CustomEvent', payloadDescription: 'Empty event' },
        ],
        limitations: ['Glass variant requires background context', 'Hover trigger may conflict with touch devices'],
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
          { name: 'type', type: 'string', description: 'Rating visual type (star, smiley, thumb)', defaultValue: 'star', required: false },
          { name: 'value', type: 'number', description: 'Current rating value', defaultValue: '0', required: false },
          { name: 'max', type: 'number', description: 'Maximum rating value', defaultValue: '5', required: false },
          { name: 'size', type: 'string', description: 'Icon size (sm, md, lg)', defaultValue: 'md', required: false },
          { name: 'color', type: 'string', description: 'Active color (success, warning, danger, primary)', defaultValue: 'warning', required: false },
          { name: 'labels', type: 'array', description: 'Custom label for each rating level', defaultValue: '[]', required: false },
          { name: 'show-value', type: 'boolean', description: 'Display current value text', defaultValue: 'false', required: false },
          { name: 'readonly', type: 'boolean', description: 'Readonly mode (no interaction)', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'change', description: 'Fired when rating value changes', payloadType: 'CustomEvent', payloadDescription: 'Contains new rating value' },
        ],
        limitations: ['Thumb type typically uses max=1 (binary)', 'Labels array should match max value'],
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
          { name: 'label', type: 'string', description: 'Switch label text', defaultValue: '', required: false },
          { name: 'checked', type: 'boolean', description: 'Checked state', defaultValue: 'false', required: false },
          { name: 'variant', type: 'string', description: 'Color variant (primary, success, warning, danger, info, secondary)', defaultValue: 'primary', required: false },
          { name: 'size', type: 'string', description: 'Switch size (xs, sm, md, lg, xl)', defaultValue: 'md', required: false },
          { name: 'icon-on', type: 'string', description: 'Icon shown when ON', defaultValue: '', required: false },
          { name: 'icon-off', type: 'string', description: 'Icon shown when OFF', defaultValue: '', required: false },
          { name: 'show-default-icons', type: 'boolean', description: 'Show default checkmark icons', defaultValue: 'false', required: false },
          { name: 'label-position', type: 'string', description: 'Label position (left, right)', defaultValue: 'right', required: false },
          { name: 'disabled', type: 'boolean', description: 'Disable switch', defaultValue: 'false', required: false },
          { name: 'loading', type: 'boolean', description: 'Show loading spinner', defaultValue: 'false', required: false },
          { name: 'required', type: 'boolean', description: 'Mark as required field', defaultValue: 'false', required: false },
          { name: 'shape', type: 'string', description: 'Shape variant (default, pill)', defaultValue: 'default', required: false },
        ],
        events: [
          { name: 'change', description: 'Fired when switch state changes', payloadType: 'CustomEvent', payloadDescription: 'Contains checked state (boolean)' },
        ],
        limitations: ['Loading state prevents interaction', 'Icons work best with small emoji or icon fonts'],
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
          { name: 'value', type: 'string', description: 'Tag text content', defaultValue: '', required: true },
          { name: 'severity', type: 'string', description: 'Status severity (info, success, warning, danger)', defaultValue: 'info', required: false },
          { name: 'size', type: 'string', description: 'Tag size (default, large)', defaultValue: 'default', required: false },
          { name: 'rounded', type: 'boolean', description: 'Apply rounded corners', defaultValue: 'false', required: false },
          { name: 'icon', type: 'string', description: 'Icon to display', defaultValue: '', required: false },
        ],
        events: [
          { name: 'click', description: 'Fired when tag is clicked', payloadType: 'MouseEvent', payloadDescription: 'Click event' },
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
          { name: 'value', type: 'array', description: 'Array of timeline event objects', defaultValue: '[]', required: true },
          { name: 'align', type: 'string', description: 'Content alignment (left, right, alternate)', defaultValue: 'left', required: false },
          { name: 'orientation', type: 'string', description: 'Timeline orientation (horizontal, vertical)', defaultValue: 'vertical', required: false },
          { name: 'marker-color', type: 'string', description: 'Default marker color', defaultValue: '', required: false },
        ],
        events: [
          { name: 'itemClick', description: 'Fired when timeline item is clicked', payloadType: 'CustomEvent', payloadDescription: 'Contains event data' },
        ],
        limitations: ['Horizontal orientation needs adequate width', 'Alternating alignment only works in vertical mode'],
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
          { name: 'data', type: 'array', description: 'Hierarchical data array with children', defaultValue: '[]', required: true },
          { name: 'layout', type: 'string', description: 'Tree layout (default, org-chart)', defaultValue: 'default', required: false },
          { name: 'variant', type: 'string', description: 'Visual style (default, minimal, rounded, bordered, glass)', defaultValue: 'default', required: false },
          { name: 'show-lines', type: 'boolean', description: 'Show connecting lines', defaultValue: 'true', required: false },
          { name: 'checkboxes', type: 'boolean', description: 'Enable checkboxes for selection', defaultValue: 'false', required: false },
          { name: 'selectable', type: 'boolean', description: 'Enable node selection', defaultValue: 'false', required: false },
          { name: 'theme', type: 'string', description: 'Color theme (light, dark)', defaultValue: 'light', required: false },
          { name: 'showGlow', type: 'boolean', description: 'Enable glow effects', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'nodeSelect', description: 'Fired when node is selected', payloadType: 'CustomEvent', payloadDescription: 'Contains node data' },
          { name: 'nodeExpand', description: 'Fired when node is expanded', payloadType: 'CustomEvent', payloadDescription: 'Contains node data' },
          { name: 'nodeCollapse', description: 'Fired when node is collapsed', payloadType: 'CustomEvent', payloadDescription: 'Contains node data' },
        ],
        limitations: ['Org-chart layout requires adequate horizontal space', 'Glass variant needs background gradient'],
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
          { name: 'effect', type: 'string', description: 'Transition effect (slide, fade)', defaultValue: 'slide', required: false },
          { name: 'autoplay', type: 'boolean', description: 'Enable autoplay', defaultValue: 'false', required: false },
          { name: 'autoplay-interval', type: 'number', description: 'Autoplay interval in milliseconds', defaultValue: '3000', required: false },
          { name: 'infinite', type: 'boolean', description: 'Enable infinite loop', defaultValue: 'false', required: false },
          { name: 'arrows', type: 'boolean', description: 'Show navigation arrows', defaultValue: 'false', required: false },
          { name: 'indicators', type: 'boolean', description: 'Show dot indicators', defaultValue: 'false', required: false },
          { name: 'show-progress', type: 'boolean', description: 'Show progress bar', defaultValue: 'false', required: false },
          { name: 'center-mode', type: 'boolean', description: 'Enable center mode with partial slides', defaultValue: 'false', required: false },
          { name: 'slides-to-show', type: 'number', description: 'Number of slides to display', defaultValue: '1', required: false },
        ],
        events: [
          { name: 'slideChange', description: 'Fired when active slide changes', payloadType: 'CustomEvent', payloadDescription: 'Contains new slide index' },
          { name: 'beforeChange', description: 'Fired before slide transition', payloadType: 'CustomEvent', payloadDescription: 'Contains current and next indices' },
        ],
        limitations: ['Center mode requires adequate container width', 'Autoplay pauses on user interaction'],
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
          { name: 'name', type: 'string', description: 'Radio group name', defaultValue: '', required: true },
          { name: 'value', type: 'string', description: 'Selected value', defaultValue: '', required: false },
          { name: 'options', type: 'array', description: 'Array of option objects {value, label, description?}', defaultValue: '[]', required: false },
          { name: 'variant', type: 'string', description: 'Visual variant (default, card, bordered, underlined)', defaultValue: 'default', required: false },
          { name: 'layout', type: 'string', description: 'Layout mode (vertical, horizontal, grid)', defaultValue: 'vertical', required: false },
          { name: 'columns', type: 'number', description: 'Number of grid columns', defaultValue: '2', required: false },
          { name: 'button-group', type: 'boolean', description: 'Style as button group', defaultValue: 'false', required: false },
          { name: 'color', type: 'string', description: 'Color theme (primary, success, danger, etc)', defaultValue: 'primary', required: false },
          { name: 'disabled', type: 'boolean', description: 'Disable all radios', defaultValue: 'false', required: false },
          { name: 'required', type: 'boolean', description: 'Mark as required', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'change', description: 'Fired when selection changes', payloadType: 'CustomEvent', payloadDescription: 'Contains selected value' },
        ],
        limitations: ['Card variant works best with grid layout', 'Button group requires layout horizontal or vertical'],
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
          { name: 'label', type: 'string', description: 'Toggle label text', defaultValue: '', required: false },
          { name: 'checked', type: 'boolean', description: 'Checked state', defaultValue: 'false', required: false },
          { name: 'variant', type: 'string', description: 'Visual variant (default, rounded, outlined, glass)', defaultValue: 'default', required: false },
          { name: 'color', type: 'string', description: 'Color theme (primary, success, info, etc)', defaultValue: 'primary', required: false },
          { name: 'elevation', type: 'number', description: 'Shadow elevation level (1-5)', defaultValue: '0', required: false },
          { name: 'thumb-shape', type: 'string', description: 'Thumb shape (circle, square)', defaultValue: 'circle', required: false },
          { name: 'disabled', type: 'boolean', description: 'Disable toggle', defaultValue: 'false', required: false },
        ],
        events: [
          { name: 'change', description: 'Fired when toggle state changes', payloadType: 'CustomEvent', payloadDescription: 'Contains checked state' },
        ],
        limitations: ['Glass variant requires gradient background', 'Elevation may conflict with some layouts'],
        examples: [
          '<app-toggle label="Default Style" variant="default" checked color="primary"></app-toggle>',
          '<app-toggle label="Rounded Style" variant="rounded" checked color="success"></app-toggle>',
          '<app-toggle label="Glass Variant" variant="glass" checked color="success"></app-toggle>',
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
