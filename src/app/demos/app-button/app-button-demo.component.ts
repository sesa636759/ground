import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonPlaygroundComponent } from './components/button-playground/button-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'app-app-button-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-button-demo.component.html',
  styleUrl: './app-button-demo.component.scss',
})
export class AppButtonDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'visual-variants', title: 'Visual Variants', icon: '🎨' },
    { id: 'sizes', title: 'Sizes', icon: '📏' },
    { id: 'icons-badges', title: 'Icons & Badges', icon: '🏷️' },
    { id: 'icon-libraries', title: 'Icon Libraries', icon: '🎨' },
    { id: 'states', title: 'States', icon: '⚙️' },
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

  iconLibrariesCode = `<!-- SVG Path -->
<ui-button label="SVG Path" icon="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" icon-library="default" variant="primary"></ui-button>

<!-- Material Icons -->
<ui-button label="Material" icon="face" icon-library="default"></ui-button>

<!-- Lucide Icons -->
<ui-button label="Lucide" icon="search" icon-library="lucide" variant="success"></ui-button>

<!-- Ionicons -->
<ui-button label="Ionicons" icon="heart" icon-library="ionicons" variant="danger"></ui-button>

<!-- Bootstrap (via SVG Path) -->
<ui-button label="Bootstrap" icon="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" variant="warning"></ui-button>

<!-- Emoji -->
<ui-button label="Emoji" icon="🚀" variant="info"></ui-button>`;

  statesCode = `<ui-button label="Normal"></ui-button>
<ui-button label="Disabled" disabled></ui-button>
<ui-button label="Loading" loading></ui-button>
<ui-button label="Full Width" full-width></ui-button>`;
}
