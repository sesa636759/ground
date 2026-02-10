import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PlaygroundControlsComponent,
  PlaygroundConfig,
} from '../../shared/playground-controls.component';
import { CodeViewerComponent } from '../../shared/code-viewer.component';

@Component({
  selector: 'app-button-playground',
  standalone: true,
  imports: [CommonModule, PlaygroundControlsComponent, CodeViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-playground.component.html',
  styleUrl: './button-playground.component.scss',
})
export class ButtonPlaygroundComponent implements AfterViewInit {
  activeTab = signal<'preview' | 'code' | 'props'>('preview');

  // Playground configuration
  playgroundConfig: PlaygroundConfig = {
    title: 'Interactive Button Playground',
    description: 'Customize the button properties and see changes in real-time',
    controls: [
      {
        name: 'variant',
        label: 'Variant',
        type: 'select',
        defaultValue: 'primary',
        options: [
          { label: 'Primary', value: 'primary' },
          { label: 'Secondary', value: 'secondary' },
          { label: 'Outline', value: 'outline' },
          { label: 'Ghost', value: 'ghost' },
          { label: 'Link', value: 'link' },
        ],
      },
      {
        name: 'size',
        label: 'Size',
        type: 'select',
        defaultValue: 'md',
        options: [
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
        ],
      },
      {
        name: 'label',
        label: 'Button Text',
        type: 'text',
        defaultValue: 'Click Me',
      },
      {
        name: 'disabled',
        label: 'Disabled',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'loading',
        label: 'Loading State',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'fullWidth',
        label: 'Full Width',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'icon',
        label: 'Icon',
        type: 'text',
        defaultValue: '🚀',
      },
      {
        name: 'iconPosition',
        label: 'Icon Position',
        type: 'select',
        defaultValue: 'start',
        options: [
          { label: 'Start', value: 'start' },
          { label: 'End', value: 'end' },
        ],
      },
    ],
  };

  // Current values
  values: Record<string, any> = {};

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateButton();
    }, 100);
  }

  onValuesChange(values: Record<string, any>) {
    this.values = values;
    this.updateButton();
  }

  updateButton() {
    const button = document.getElementById('playgroundButton') as any;
    if (!button) return;

    // Update attributes
    button.setAttribute('variant', this.values['variant'] || 'primary');
    button.setAttribute('size', this.values['size'] || 'md');
    button.setAttribute('disabled', this.values['disabled'] || false);
    button.setAttribute('loading', this.values['loading'] || false);
    button.setAttribute('full-width', this.values['fullWidth'] || false);

    // Update content
    const icon = this.values['icon'] || '';
    const label = this.values['label'] || 'Click Me';
    const iconPosition = this.values['iconPosition'] || 'start';

    if (icon && iconPosition === 'start') {
      button.innerHTML = `${icon} ${label}`;
    } else if (icon && iconPosition === 'end') {
      button.innerHTML = `${label} ${icon}`;
    } else {
      button.innerHTML = label;
    }
  }

  get generatedCode(): string {
    const variant = this.values['variant'] || 'primary';
    const size = this.values['size'] || 'md';
    const disabled = this.values['disabled'];
    const loading = this.values['loading'];
    const fullWidth = this.values['fullWidth'];
    const icon = this.values['icon'] || '';
    const label = this.values['label'] || 'Click Me';
    const iconPosition = this.values['iconPosition'] || 'start';

    let attrs = `variant="${variant}" size="${size}"`;
    if (disabled) attrs += ' disabled';
    if (loading) attrs += ' loading';
    if (fullWidth) attrs += ' full-width';

    let content = label;
    if (icon && iconPosition === 'start') {
      content = `${icon} ${label}`;
    } else if (icon && iconPosition === 'end') {
      content = `${label} ${icon}`;
    }

    return `<ui-button ${attrs}>${content}</ui-button>`;
  }

  get propsDocumentation(): Array<{
    name: string;
    type: string;
    default: string;
    description: string;
  }> {
    return [
      { name: 'variant', type: 'string', default: 'primary', description: 'Button style variant' },
      { name: 'size', type: 'string', default: 'md', description: 'Button size (sm, md, lg)' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Show loading state' },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Make button full width',
      },
    ];
  }

  get usageExample(): string {
    return `import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <ui-button
      variant="${this.values['variant'] || 'primary'}"
      size="${this.values['size'] || 'md'}"
      ${this.values['disabled'] ? 'disabled' : ''}
      ${this.values['loading'] ? 'loading' : ''}
      (click)="handleClick()">
      ${this.values['label'] || 'Click Me'}
    </ui-button>
  \`
})
export class MyComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}`;
  }
}
