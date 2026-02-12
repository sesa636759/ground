import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { ButtonPlaygroundComponent } from './components/button-playground/button-playground.component';

@Component({
  selector: 'app-app-button-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, ButtonPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-button-demo.component.html',
  styleUrl: './app-button-demo.component.scss',
})
export class AppButtonDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'visual-variants', name: 'Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'sizes', name: 'Sizes', icon: '📏', color: '#10b981' },
    { id: 'icons-badges', name: 'Icons & Badges', icon: '🏷️', color: '#f59e0b' },
    { id: 'states', name: 'States', icon: '⚙️', color: '#ec4899' },
  ];

  playgroundCode = `<ui-button label="Submit" variant="primary" size="md"></ui-button>`;

  variantsCode = `<!-- Core Variants -->
<ui-button label="Primary" variant="primary"></ui-button>
<ui-button label="Secondary" variant="secondary"></ui-button>
<ui-button label="Outline" variant="outline"></ui-button>
<ui-button label="Ghost" variant="ghost"></ui-button>

<!-- Semantic Variants -->
<ui-button label="Success" variant="success"></ui-button>
<ui-button label="Danger" variant="danger"></ui-button>
<ui-button label="Warning" variant="warning"></ui-button>`;

  sizesCode = `<ui-button label="Extra Small" size="xs"></ui-button>
<ui-button label="Small" size="sm"></ui-button>
<ui-button label="Medium" size="md"></ui-button>
<ui-button label="Large" size="lg"></ui-button>
<ui-button label="Extra Large" size="xl"></ui-button>`;

  iconsBadgesCode = `<ui-button label="Settings" icon="⚙️"></ui-button>
<ui-button label="Cart" icon="🛒" badge="5" variant="success"></ui-button>
<ui-button icon="🔍" icon-only pill></ui-button>
<ui-button label="Profile" icon="👤" icon-position="right"></ui-button>`;

  statesCode = `<ui-button label="Normal"></ui-button>
<ui-button label="Disabled" disabled></ui-button>
<ui-button label="Loading" loading></ui-button>
<ui-button label="Full Width" full-width></ui-button>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
