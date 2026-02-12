import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { TagPlaygroundComponent } from './components/tag-playground/tag-playground.component';

@Component({
  selector: 'app-app-tag-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, TagPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-tag-demo.component.html',
  styleUrl: './app-tag-demo.component.scss',
})
export class AppTagDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'severities', name: 'Severities', icon: '🚨', color: '#3b82f6' },
    { id: 'styles', name: 'Styles & Sizes', icon: '🎨', color: '#10b981' },
  ];

  playgroundCode = `<ui-tag value="New" severity="info" rounded></ui-tag>`;

  severitiesCode = `<!-- Error/Danger -->
<ui-tag severity="danger" value="Error"></ui-tag>

<!-- Success -->
<ui-tag severity="success" value="Completed"></ui-tag>

<!-- Warning -->
<ui-tag severity="warning" value="Low Battery"></ui-tag>`;

  stylesCode = `<!-- With Icons -->
<ui-tag icon="pi pi-check" value="Standard"></ui-tag>

<!-- Large Rounded Tag -->
<ui-tag value="PRO" rounded size="large"></ui-tag>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
