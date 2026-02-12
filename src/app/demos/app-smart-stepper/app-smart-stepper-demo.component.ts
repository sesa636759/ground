import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { SmartStepperPlaygroundComponent } from './components/smart-stepper-playground/smart-stepper-playground.component';

@Component({
  selector: 'app-app-smart-stepper-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, SmartStepperPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-smart-stepper-demo.component.html',
  styleUrl: './app-smart-stepper-demo.component.scss',
})
export class AppSmartStepperDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'themes', name: 'Themes', icon: '🎨', color: '#3b82f6' },
  ];

  playgroundCode = `<ui-smart-stepper orientation="horizontal">
  <ui-smart-step label="Profile" value="1">...</ui-smart-step>
  <ui-smart-step label="Verify" value="2">...</ui-smart-step>
</ui-smart-stepper>`;

  themesCode = `<!-- Compact Theme -->
<ui-smart-stepper theme="compact" [model]="steps"></ui-smart-stepper>

<!-- Vertical Orientation -->
<ui-smart-stepper orientation="vertical" [model]="steps"></ui-smart-stepper>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
