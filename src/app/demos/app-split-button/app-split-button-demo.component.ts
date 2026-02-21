import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { SplitButtonPlaygroundComponent } from './components/split-button-playground/split-button-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-split-button-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SplitButtonPlaygroundComponent, DemoTabsComponent, DemoSidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-split-button-demo.component.html',
  styleUrl: './app-split-button-demo.component.scss',
})
export class AppSplitButtonDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'colors', name: 'Color Themes', icon: '🎨', color: '#3b82f6' },
    { id: 'states', name: 'Visual States', icon: '⚡', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  menuItems = JSON.stringify([
    { label: 'Update', icon: '🔄' },
    { label: 'Delete', icon: '🗑️' },
    { separator: true },
    { label: 'Home', icon: '🏠' },
  ]);

  playgroundCode = `<ui-split-button label="Save" [model]="items"></ui-split-button>`;

  colorsCode = `<!-- Danger Variant -->
<ui-split-button label="Delete" variant="danger" [model]="items"></ui-split-button>

<!-- Success Variant -->
<ui-split-button label="Approve" variant="success" [model]="items"></ui-split-button>

<!-- Outline Variant -->
<ui-split-button label="More" variant="outline" [model]="items"></ui-split-button>`;

  statesCode = `<!-- Loading State -->
<ui-split-button loading label="Proceed"></ui-split-button>

<!-- Disabled State -->
<ui-split-button disabled label="Actions"></ui-split-button>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
