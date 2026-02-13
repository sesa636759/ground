import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipPlaygroundComponent } from './components/tooltip-playground/tooltip-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-tooltip-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TooltipPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tooltip-demo.component.html',
  styleUrl: './set-tooltip-demo.component.scss',
})
export class SetTooltipDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'positioning', title: 'Positioning', icon: '📍' },
    { id: 'variants', title: 'Variants & Themes', icon: '🎨' },
    { id: 'shapes-animations', title: 'Shapes & Animations', icon: '✨' },
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
