import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { PillPlaygroundComponent } from './components/pill-playground/pill-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-pill-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PillPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-pill-demo.component.html',
  styleUrl: './app-pill-demo.component.scss',
})
export class AppPillDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'styling', name: 'Styling Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'features', name: 'Special Features', icon: '🚀', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-pill label="New Tag" variant="soft" color="primary"></ui-pill>`;

  stylingCode = `<!-- Filled (Default) -->
<ui-pill label="Success" color="success" variant="filled"></ui-pill>

<!-- Soft Style -->
<ui-pill label="Info" color="info" variant="soft"></ui-pill>

<!-- Bordered Style -->
<ui-pill label="Warning" color="warning" variant="bordered"></ui-pill>`;

  featuresCode = `<!-- With Counters -->
<ui-pill label="Messages" counter="5" color="primary"></ui-pill>

<!-- Removable -->
<ui-pill label="Removable Item" removable (pillRemove)="handleRemove()"></ui-pill>

<!-- Loading State -->
<ui-pill loading label="Saving..."></ui-pill>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
