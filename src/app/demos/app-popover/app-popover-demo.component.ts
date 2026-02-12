import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { PopoverPlaygroundComponent } from './components/popover-playground/popover-playground.component';

@Component({
  selector: 'app-app-popover-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, PopoverPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-popover-demo.component.html',
  styleUrl: './app-popover-demo.component.scss',
})
export class AppPopoverDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'triggers', name: 'Triggers', icon: '⚡', color: '#3b82f6' },
    { id: 'placements', name: 'Placements', icon: '📍', color: '#10b981' },
    { id: 'styles', name: 'Styles', icon: '🎨', color: '#f59e0b' },
  ];

  playgroundCode = `<ui-popover heading="Help" content="Click for more info">
  <ui-button label="Need Help?"></ui-button>
</ui-popover>`;

  triggersCode = `<ui-popover trigger="click" heading="Click Trigger" content="Visible until clicked outside">
  <ui-button label="Click Me"></ui-button>
</ui-popover>

<ui-popover trigger="hover" heading="Hover Trigger" content="Visible on mouse enter">
  <ui-button label="Hover Me"></ui-button>
</ui-popover>

<ui-popover trigger="focus" heading="Focus Trigger" content="Visible on focus">
  <app-input type="text" placeholder="Focus Me" />
</ui-popover>`;

  placementsCode = `<ui-popover placement="top" content="Top Popover">...</ui-popover>
<ui-popover placement="bottom" content="Bottom Popover">...</ui-popover>
<ui-popover placement="left" content="Left Popover">...</ui-popover>
<ui-popover placement="right" content="Right Popover">...</ui-popover>`;

  stylesCode = `<ui-popover variant="light" heading="Light Theme" content="...">...</ui-popover>
<ui-popover variant="dark" heading="Dark Theme" content="...">...</ui-popover>
<ui-popover backdrop heading="With Backdrop" content="...">...</ui-popover>
<ui-popover show-close-button heading="With Close Button" content="...">...</ui-popover>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
