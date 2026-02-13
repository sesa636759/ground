import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SmartMenuPlaygroundComponent } from './components/smart-menu-playground/smart-menu-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-smart-menu-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    SmartMenuPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-smart-menu-demo.component.html',
  styleUrl: './app-smart-menu-demo.component.scss',
})
export class AppSmartMenuDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'nested', name: 'Nested Menus', icon: '🗂️', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  menuItems = JSON.stringify([
    {
      label: 'File',
      items: [
        { label: 'New', command: () => {} },
        { label: 'Open', command: () => {} },
      ],
    },
    { label: 'Edit', items: [] },
  ]);

  playgroundCode = `<ui-smart-menu [model]="items"></ui-smart-menu>`;

  nestedCode = `const menuModel = [
  { 
    label: 'File',
    items: [
      { label: 'New', command: () => {} },
      { label: 'Open', command: () => {} },
      { 
        label: 'Recent',
        items: [
          { label: 'Project 1' },
          { label: 'Project 2' }
        ]
      }
    ]
  }
];`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
