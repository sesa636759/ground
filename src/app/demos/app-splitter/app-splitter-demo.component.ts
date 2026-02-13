import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SplitterPlaygroundComponent } from './components/splitter-playground/splitter-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-app-splitter-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    SplitterPlaygroundComponent,
    DemoTabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-splitter-demo.component.html',
  styleUrl: './app-splitter-demo.component.scss',
})
export class AppSplitterDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'layouts', name: 'Orientations', icon: '📐', color: '#3b82f6' },
    { id: 'nested', name: 'Nested Panels', icon: '📦', color: '#10b981' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-splitter layout="horizontal">
  <ui-panel [size]="30"> Left </ui-panel>
  <ui-panel [size]="70"> Right </ui-panel>
</ui-splitter>`;

  layoutsCode = `<!-- Vertical Layout -->
<ui-splitter layout="vertical" style="height: 400px">
  <ui-panel> Top </ui-panel>
  <ui-panel> Bottom </ui-panel>
</ui-splitter>`;

  nestedCode = `<ui-splitter layout="horizontal">
  <ui-panel [size]="20"> Sidebar </ui-panel>
  <ui-panel [size]="80">
     <ui-splitter layout="vertical">
        <ui-panel> Inner Top </ui-panel>
        <ui-panel> Inner Bottom </ui-panel>
     </ui-splitter>
  </ui-panel>
</ui-splitter>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
