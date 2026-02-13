import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { TooltipPlaygroundComponent } from './components/tooltip-playground/tooltip-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-tooltip-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputValueAccessorDirective, AppCheckboxValueAccessorDirective, TooltipPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tooltip-demo.component.html',
  styleUrl: './set-tooltip-demo.component.scss',
})
export class SetTooltipDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'positioning', name: 'Positioning', icon: '📍' },
    { id: 'variants', name: 'Variants & Themes', icon: '🎨' },
    { id: 'shapes-animations', name: 'Shapes & Animations', icon: '✨' },
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  playgroundCode = `<app-tooltip
  content="Tooltip text"
  position="top"
>
  <ui-button label="Hover me"></ui-button>
</app-tooltip>`;

  ngOnInit() {}
}
