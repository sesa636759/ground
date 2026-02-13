import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { AnchorPlaygroundComponent } from './components/anchor-playground/anchor-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-anchor-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnchorPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-anchor-demo.component.html',
  styleUrl: './set-anchor-demo.component.scss',
})
export class SetAnchorDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'orientation', title: 'Orientation & Layout', icon: '🧭' },
    { id: 'styles', title: 'Styles & Features', icon: '🎨' },
  ];

  // Data for static examples
  verticalItems = JSON.stringify([
    { id: 'v-start', label: 'Start' },
    { id: 'v-mid', label: 'Middle' },
    { id: 'v-end', label: 'End' },
  ]);

  horizontalItems = JSON.stringify([
    { id: 'h-left', label: 'Left' },
    { id: 'h-center', label: 'Center' },
    { id: 'h-right', label: 'Right' },
  ]);

  iconItems = JSON.stringify([
    { id: 'icon-1', label: 'Home', icon: 'fas fa-home' },
    { id: 'icon-2', label: 'Settings', icon: 'fas fa-cog' },
    { id: 'icon-3', label: 'Profile', icon: 'fas fa-user' },
  ]);

  numberedItems = JSON.stringify([
    { id: 'num-1', label: 'Introduction' },
    { id: 'num-2', label: 'Setup Guide' },
    { id: 'num-3', label: 'Advanced Usage' },
  ]);

  // Additional items for inline examples (to replace inline arrays in HTML)
  numberedItemsShort = JSON.stringify([
    { id: 'n-1', label: 'First' },
    { id: 'n-2', label: 'Second' },
    { id: 'n-3', label: 'Third' },
  ]);

  darkThemeItems = JSON.stringify([
    { id: 'd-start', label: 'Start' },
    { id: 'd-mid', label: 'Middle' },
    { id: 'd-end', label: 'End' },
  ]);

  playgroundCode = `<app-anchor
  href="#section"
  [smooth]="true"
>
  Jump to section
</app-anchor>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
