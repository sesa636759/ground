import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { ButtonPlaygroundComponent } from './components/button-playground/button-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';

@Component({
  selector: 'app-app-button-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    ButtonPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-button-demo.component.html',
  styleUrl: './app-button-demo.component.scss',
})
export class AppButtonDemoComponent extends BaseDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'visual-variants', title: 'Visual Variants', icon: '🎨' },
    { id: 'sizes', title: 'Sizes', icon: '📏' },
    { id: 'icons-badges', title: 'Icons & Badges', icon: '🏷️' },
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

  statesCode = `<ui-button label="Normal"></ui-button>
<ui-button label="Disabled" disabled></ui-button>
<ui-button label="Loading" loading></ui-button>
<ui-button label="Full Width" full-width></ui-button>`;

  ngOnInit() {}
}
