import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { PicklistPlaygroundComponent } from './components/picklist-playground/picklist-playground.component';

@Component({
  selector: 'app-app-picklist-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, PicklistPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-picklist-demo.component.html',
  styleUrl: './app-picklist-demo.component.scss',
})
export class AppPicklistDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'features', name: 'UI Controls', icon: '⚙️', color: '#3b82f6' },
  ];

  sourceItems = JSON.stringify([
    { name: 'Red', code: 'rd' },
    { name: 'Blue', code: 'bl' },
    { name: 'Green', code: 'gr' },
  ]);

  targetItems = JSON.stringify([{ name: 'Yellow', code: 'yl' }]);

  playgroundCode = `<ui-picklist [source]="available" [target]="selected" source-header="Source" target-header="Target">
  <ng-template let-item>{{ item.name }}</ng-template>
</ui-picklist>`;

  featuresCode = `<!-- Hide Reorder Controls -->
<ui-picklist [show-source-controls]="false" [show-target-controls]="false" ...></ui-picklist>

<!-- Custom Header Text -->
<ui-picklist source-header="Backlog" target-header="Sprint Items" ...></ui-picklist>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
