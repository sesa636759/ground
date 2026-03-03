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
    { id: 'color-input', title: 'Color Input', icon: '🎨' },
    { id: 'file-upload', title: 'File Upload', icon: '📁' },
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
  basicInputsCode = `<ui-input label="Username" placeholder="Enter username" full-width></ui-input>
<ui-input type="email" label="Email" placeholder="user@example.com" full-width></ui-input>
<ui-input type="password" label="Password" show-password-toggle full-width></ui-input>`;

  variantsCode = `<ui-input label="Outlined" variant="outlined" full-width></ui-input>
<ui-input label="Filled" variant="filled" full-width></ui-input>
<ui-input label="Underlined" variant="underlined" full-width></ui-input>`;

  sizesCode = `<ui-input label="Small" size="small" full-width></ui-input>
<ui-input label="Medium" size="medium" full-width></ui-input>
<ui-input label="Large" size="large" full-width></ui-input>`;

  validationCode = `<ui-input label="Error" validation-state="error" error-text="Invalid email" full-width></ui-input>
<ui-input label="Success" validation-state="success" success-text="Available!" full-width></ui-input>`;

  prefixSuffixCode = `<ui-input label="Website" prefix-text="https://" full-width></ui-input>
<ui-input label="Price" prefix-text="$" suffix-text="USD" type="number" full-width></ui-input>`;

  advancedCode = `<ui-input type="number" label="Quantity" show-steppers full-width></ui-input>
<ui-input multiline auto-resize label="Auto-resize Area" full-width></ui-input>`;

  floatingLabelsCode = `<ui-input variant="outlined" label="Full Name" floating-label full-width></ui-input>
<ui-input variant="filled" label="Email" floating-label full-width></ui-input>`;

  multilineCode = `<ui-input multiline label="Description" rows="3" full-width></ui-input>
<ui-input multiline max-length="200" show-char-count label="Bio" full-width></ui-input>`;

  inputStatesCode = `<ui-input label="Disabled" value="Locked" disabled full-width></ui-input>
<ui-input label="Readonly" value="View only" readonly full-width></ui-input>`;

  colorInputCode = `<!-- Basic color picker -->
<ui-input type="color" label="Accent Color" full-width></ui-input>

<!-- Color picker with default value -->
<ui-input type="color" label="Brand Color" value="#6366f1" full-width></ui-input>

<!-- Color picker with copy button -->
<ui-input type="color" label="Background Color" show-copy full-width></ui-input>`;

  fileUploadCode = `<!-- Single file -->
<ui-input type="file" label="Upload Document" full-width></ui-input>

<!-- Accept specific types -->
<ui-input type="file" label="Upload Image" accept="image/*" full-width></ui-input>

<!-- Accept PDF only -->
<ui-input type="file" label="Upload PDF" accept=".pdf" full-width></ui-input>

<!-- Multiple file selection -->
<ui-input type="file" label="Upload Files" accept="image/*,.pdf,.docx" multiple full-width></ui-input>`;

  ngOnInit() {}

  toggleSkeleton() {
    this.skeletonState = !this.skeletonState;
  }
}
