import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmButtonPlaygroundComponent } from '../../../playground/common/button-playground/button-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'dm-button-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmButtonPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.scss',
})
export class DmButtonDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'visual-variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'icons-badges', title: 'Icons & Badges', icon: 'tag', iconLibrary: 'lucide' },
    { id: 'badge-positions', title: 'Badge Positions', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'icon-libraries', title: 'Icon Libraries', icon: 'library', iconLibrary: 'lucide' },
    { id: 'states', title: 'States', icon: 'toggle-left', iconLibrary: 'lucide' },
    { id: 'elevations', title: 'Elevations', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'link-extra', title: 'Link & Extra', icon: 'external-link', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<dui-button label="Submit" variant="primary" size="md"></dui-button>`;

  variantsCode = `<!-- Core Variants -->
<dui-button label="Primary" variant="primary"></dui-button>
<dui-button label="Secondary" variant="secondary"></dui-button>
<dui-button label="Outline" variant="outline"></dui-button>
<dui-button label="Ghost" variant="ghost"></dui-button>

<!-- Semantic Variants -->
<dui-button label="Success" variant="success"></dui-button>
<dui-button label="Danger" variant="danger"></dui-button>
<dui-button label="Warning" variant="warning"></dui-button>`;

  sizesCode = `<dui-button label="Extra Small" size="xs"></dui-button>
<dui-button label="Small" size="sm"></dui-button>
<dui-button label="Medium" size="md"></dui-button>
<dui-button label="Large" size="lg"></dui-button>
<dui-button label="Extra Large" size="xl"></dui-button>`;

  iconsBadgesCode = `<dui-button label="Settings" icon="⚙️"></dui-button>
<dui-button label="Cart" icon="🛒" badge="5" variant="success"></dui-button>
<dui-button icon="🔍" icon-only pill></dui-button>
<dui-button label="Profile" icon="👤" icon-position="right"></dui-button>`;

  badgePositionsCode = `<!-- Absolute Positions -->
<dui-button label="Notifications" icon="🔔" badge="9" badge-position="top-right"></dui-button>
<dui-button label="Messages" icon="✉️" badge="5" badge-position="top-left"></dui-button>
<dui-button label="Alerts" icon="⚠️" badge="!" badge-position="bottom-right"></dui-button>

<!-- Inline Positions -->
<dui-button label="Inbox" badge="12" badge-position="inline-right" variant="outline"></dui-button>
<dui-button label="Tasks" badge="4" badge-position="inline-left" variant="outline"></dui-button>`;

  iconLibrariesCode = `<!-- SVG Path -->
<dui-button label="SVG Path" icon="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" icon-library="default" variant="primary"></dui-button>

<!-- Material Icons -->
<dui-button label="Material" icon="face" icon-library="default"></dui-button>

<!-- Lucide Icons -->
<dui-button label="Lucide" icon="search" icon-library="lucide" variant="success"></dui-button>

<!-- Ionicons -->
<dui-button label="Ionicons" icon="heart" icon-library="ionicons" variant="danger"></dui-button>

<!-- Bootstrap (via SVG Path) -->
<dui-button label="Bootstrap" icon="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" variant="warning"></dui-button>

<!-- Emoji -->
<dui-button label="Emoji" icon="🚀" variant="info"></dui-button>`;

  statesCode = `<dui-button label="Normal"></dui-button>
<dui-button label="Disabled" disabled></dui-button>
<dui-button label="Loading" loading></dui-button>
<dui-button label="Full Width" full-width></dui-button>`;

  elevationsCode = `<dui-button label="Elevation 1" elevation="1"></dui-button>
<dui-button label="Elevation 2" elevation="2"></dui-button>
<dui-button label="Elevation 3" elevation="3"></dui-button>
<dui-button label="Elevation 4" elevation="4"></dui-button>
<dui-button label="Elevation 5" elevation="5"></dui-button>`;

  linkExtraCode = `<!-- Link Button -->
<dui-button label="Go to Google" href="https://google.com" target="_blank"></dui-button>

<!-- RTL Support -->
<dui-button label="RTL Button" icon="🚀" rtl></dui-button>

<!-- Loading Positions -->
<dui-button label="Loading Top" loading loading-position="top"></dui-button>
<dui-button label="Loading Right" loading loading-position="right"></dui-button>`;
}
