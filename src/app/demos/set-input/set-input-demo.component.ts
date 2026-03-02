import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputPlaygroundComponent } from './components/input-playground/input-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-set-input-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-input-demo.component.html',
  styleUrl: './set-input-demo.component.scss',
})
export class SetInputDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'basic-types', title: 'Basic Input Types', icon: '📋' },
    { id: 'variants', title: 'Input Variants', icon: '🎭' },
    { id: 'sizes', title: 'Input Sizes', icon: '📏' },
    { id: 'validation', title: 'Validation States', icon: '✅' },
    { id: 'prefix-suffix', title: 'Prefix & Suffix', icon: '🎯' },
    { id: 'advanced', title: 'Advanced Features', icon: '🚀' },
    { id: 'floating-labels', title: 'Floating Labels', icon: '🏷️' },
    { id: 'multiline', title: 'Multiline Input', icon: '📝' },
    { id: 'input-states', title: 'Input States', icon: '🔄' },
  ];

  anchorLinks = JSON.stringify(
    this.variants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  get exampleVariants() {
    return this.variants;
  }

  skeletonState = false;

  // Code snippets
  basicInputsCode = `<ui-input label="Username" placeholder="Enter username" full-width></app-input>
<ui-input type="email" label="Email" placeholder="user@example.com" full-width></app-input>
<ui-input type="password" label="Password" show-password-toggle full-width></app-input>`;

  variantsCode = `<ui-input label="Outlined" variant="outlined" full-width></app-input>
<ui-input label="Filled" variant="filled" full-width></app-input>
<ui-input label="Underlined" variant="underlined" full-width></app-input>`;

  sizesCode = `<ui-input label="Small" size="small" full-width></app-input>
<ui-input label="Medium" size="medium" full-width></app-input>
<ui-input label="Large" size="large" full-width></app-input>`;

  validationCode = `<ui-input label="Error" validation-state="error" error-text="Invalid email" full-width></app-input>
<ui-input label="Success" validation-state="success" success-text="Available!" full-width></app-input>`;

  prefixSuffixCode = `<ui-input label="Website" prefix-text="https://" full-width></app-input>
<ui-input label="Price" prefix-text="$" suffix-text="USD" type="number" full-width></app-input>`;

  advancedCode = `<ui-input type="number" label="Quantity" show-steppers full-width></app-input>
<ui-input multiline auto-resize label="Auto-resize Area" full-width></app-input>`;

  floatingLabelsCode = `<ui-input variant="outlined" label="Full Name" floating-label full-width></app-input>
<ui-input variant="filled" label="Email" floating-label full-width></app-input>`;

  multilineCode = `<ui-input multiline label="Description" rows="3" full-width></app-input>
<ui-input multiline max-length="200" show-char-count label="Bio" full-width></app-input>`;

  inputStatesCode = `<ui-input label="Disabled" value="Locked" disabled full-width></app-input>
<ui-input label="Readonly" value="View only" readonly full-width></app-input>`;

  ngOnInit() {}

  toggleSkeleton() {
    this.skeletonState = !this.skeletonState;
  }
}
