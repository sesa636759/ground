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
    { id: 'gradients', title: 'Gradients', icon: 'sunset', iconLibrary: 'lucide' },
    { id: 'soft-variants', title: 'Soft Variants', icon: 'cloud', iconLibrary: 'lucide' },
    { id: 'sizes', title: 'Sizes', icon: 'scaling', iconLibrary: 'lucide' },
    { id: 'shapes', title: 'Shapes', icon: 'square', iconLibrary: 'lucide' },
    { id: 'icons-badges', title: 'Icons & Badges', icon: 'tag', iconLibrary: 'lucide' },
    { id: 'icon-positions', title: 'Icon Positions', icon: 'move', iconLibrary: 'lucide' },
    { id: 'badge-positions', title: 'Badge Positions', icon: 'layout', iconLibrary: 'lucide' },
    { id: 'icon-libraries', title: 'Icon Libraries', icon: 'library', iconLibrary: 'lucide' },
    { id: 'states', title: 'States', icon: 'toggle-left', iconLibrary: 'lucide' },
    { id: 'counters', title: 'Counters & Loading', icon: 'hash', iconLibrary: 'lucide' },
    { id: 'elevations', title: 'Elevations', icon: 'layers', iconLibrary: 'lucide' },
    { id: 'avatar', title: 'Avatar Buttons', icon: 'user-circle', iconLibrary: 'lucide' },
    { id: 'image-type', title: 'Image Type', icon: 'image', iconLibrary: 'lucide' },
    { id: 'auto-width', title: 'Auto Width', icon: 'move-horizontal', iconLibrary: 'lucide' },
    { id: 'premium', title: 'Premium Features', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'god-mode', title: 'God Mode', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'link-extra', title: 'Link & Extra', icon: 'external-link', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<ui-button label="Submit" variant="primary" size="md"></ui-button>`;

  variantsCode = `<!-- Core Variants -->
<ui-button label="Primary" variant="primary"></ui-button>
<ui-button label="Secondary" variant="secondary"></ui-button>
<ui-button label="Outline" variant="outline"></ui-button>
<ui-button label="Ghost" variant="ghost"></ui-button>
<ui-button label="Glass" variant="glass"></ui-button>

<!-- Semantic Variants -->
<ui-button label="Success" variant="success"></ui-button>
<ui-button label="Danger" variant="danger"></ui-button>
<ui-button label="Warning" variant="warning"></ui-button>
<ui-button label="Dark" variant="dark"></ui-button>
<ui-button label="Raised" variant="raised"></ui-button>`;

  gradientsCode = `<ui-button label="Brand" variant="gradient"></ui-button>
<ui-button label="Blue Purple" variant="gradient-blue"></ui-button>
<ui-button label="Purple Pink" variant="gradient-purple"></ui-button>
<ui-button label="Orange Red" variant="gradient-orange"></ui-button>
<ui-button label="Ocean" variant="gradient-ocean"></ui-button>
<ui-button label="Sunset" variant="gradient-sunset"></ui-button>
<ui-button label="Candy" variant="gradient-candy"></ui-button>
<ui-button label="Gold" variant="gradient-gold"></ui-button>`;

  softVariantsCode = `<ui-button label="Primary" variant="soft" color="primary"></ui-button>
<ui-button label="Success" variant="soft" color="success"></ui-button>
<ui-button label="Danger" variant="soft" color="danger"></ui-button>
<ui-button label="Info" variant="soft" color="info"></ui-button>`;

  sizesCode = `<!-- All sizes from xxxs (20px) to xxxl (80px) -->
<ui-button size="xxxs" label="xxxs"></ui-button>
<ui-button size="xxs" label="xxs"></ui-button>
<ui-button size="xs" label="xs"></ui-button>
<ui-button size="small" label="small"></ui-button>
<ui-button size="medium" label="medium"></ui-button>
<ui-button size="large" label="large"></ui-button>
<ui-button size="xl" label="xl"></ui-button>
<ui-button size="xxl" label="xxl"></ui-button>
<ui-button size="xxxl" label="xxxl"></ui-button>`;

  shapesCode = `<ui-button variant="secondary" label="Square (default)"></ui-button>
<ui-button variant="secondary" shape="rounded" label="Rounded"></ui-button>
<ui-button variant="secondary" shape="pill" label="Pill"></ui-button>
<ui-button variant="secondary" shape="chip" label="Chip"></ui-button>
<ui-button variant="primary" shape="circle" icon="plus" icon-library="lucide" icon-only></ui-button>`;

  iconsBadgesCode = `<ui-button label="Settings" icon="⚙️"></ui-button>
<ui-button label="Cart" icon="🛒" badge="5" variant="success"></ui-button>
<ui-button icon="🔍" icon-only pill></ui-button>
<ui-button label="Profile" icon="👤" icon-position="right"></ui-button>`;

  iconPositionsCode = `<ui-button label="Left Icon" icon="arrow-left" icon-library="lucide" icon-position="left" variant="outline"></ui-button>
<ui-button label="Right Icon" icon="arrow-right" icon-library="lucide" icon-position="right" variant="outline"></ui-button>
<ui-button label="Top Icon" icon="arrow-up" icon-library="lucide" icon-position="top" variant="outline"></ui-button>
<ui-button label="Bottom Icon" icon="arrow-down" icon-library="lucide" icon-position="bottom" variant="outline"></ui-button>`;

  badgePositionsCode = `<!-- Absolute Positions -->
<ui-button label="Notifications" icon="🔔" badge="9" badge-position="top-right"></ui-button>
<ui-button label="Messages" icon="✉️" badge="5" badge-position="top-left"></ui-button>
<ui-button label="Alerts" icon="⚠️" badge="!" badge-position="bottom-right"></ui-button>

<!-- Inline Positions -->
<ui-button label="Inbox" badge="12" badge-position="inline-right" variant="outline"></ui-button>
<ui-button label="Tasks" badge="4" badge-position="inline-left" variant="outline"></ui-button>`;

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

  countersCode = `<!-- Inline counters -->
<ui-button label="Messages" counter="5" variant="primary"></ui-button>
<ui-button label="Tasks" counter="12" counter-color="success" counter-variant="soft" variant="outline"></ui-button>
<ui-button label="Alerts" counter="!" counter-color="warning" variant="glass"></ui-button>

<!-- Loading positions -->
<ui-button label="Loading Left" loading loading-position="left" variant="primary"></ui-button>
<ui-button label="Loading Right" loading loading-position="right" variant="success"></ui-button>`;

  elevationsCode = `<ui-button label="Elevation 1" elevation="1"></ui-button>
<ui-button label="Elevation 2" elevation="2"></ui-button>
<ui-button label="Elevation 3" elevation="3"></ui-button>
<ui-button label="Elevation 4" elevation="4"></ui-button>
<ui-button label="Elevation 5" elevation="5"></ui-button>`;

  avatarCode = `<!-- User profile button with online status -->
<ui-button label="Praveen" avatar-src="https://i.pravatar.cc/100?u=praveen" status="online" variant="outline" shape="pill"></ui-button>
<ui-button label="Sarah Chen" avatar-src="https://i.pravatar.cc/100?u=sarah" status="busy" variant="soft" shape="rounded"></ui-button>

<!-- Avatar only (quick select) -->
<ui-button avatar-src="https://i.pravatar.cc/100?u=1" status="online" variant="ghost"></ui-button>`;

  imageTypeCode = `<ui-button type="image" img-src="https://picsum.photos/id/237/64/64" img-alt="Puppy" label="Adopt Me" variant="primary"></ui-button>
<ui-button type="image" img-src="https://picsum.photos/id/1025/64/64" img-alt="Pug" label="Pug Life" variant="outline"></ui-button>
<ui-button type="image" img-src="https://picsum.photos/id/200/64/64" img-alt="Beach" label="Vacation" variant="info" shape="pill"></ui-button>`;

  autoWidthCode = `<!-- ui-button-group with fill distributes width automatically -->
<ui-button-group fill gap="12px">
  <ui-button variant="outline" label="Cancel"></ui-button>
  <ui-button variant="primary" label="Submit"></ui-button>
</ui-button-group>`;

  premiumCode = `<!-- Copy to clipboard -->
<ui-button label="Copy API ID" icon="copy" icon-library="lucide" copy-value="ID_45920-X" variant="outline" full-width></ui-button>

<!-- Keyboard shortcut hint -->
<ui-button label="Quick Search" icon="search" icon-library="lucide" shortcut="/" variant="soft" full-width></ui-button>

<!-- Skeleton loading state -->
<ui-button label="Loading..." skeleton variant="primary" width="120px"></ui-button>

<!-- Active/selected state -->
<ui-button label="Active Mode" active variant="success" icon="check" icon-library="lucide"></ui-button>

<!-- Hide label on mobile -->
<ui-button label="Edit Profile" icon="user" icon-library="lucide" hide-label-on-mobile variant="primary"></ui-button>`;

  godModeCode = `<!-- Hold-to-confirm for destructive actions -->
<ui-button label="Purge Memory" variant="danger" hold-time="2000" shake audio="error" haptic full-width></ui-button>

<!-- Bubble confirm dialog -->
<ui-button label="Delete Cloud" variant="outline" color="danger" confirm-bubble confirm-label="Permanent Delete?" audio="error" full-width></ui-button>

<!-- Cooldown timer after action -->
<ui-button label="Resend OTP" timer="15" shake variant="soft" color="primary" full-width></ui-button>

<!-- Rainbow glow + glossy -->
<ui-button label="VIP Rainbow Glow" variant="dark" glow rainbow glossy audio="click" full-width></ui-button>

<!-- Liquid wave progress -->
<ui-button label="Liquid Wave Progress" variant="primary" progress="45" liquid audio="click" full-width></ui-button>`;

  linkExtraCode = `<!-- Link Button -->
<ui-button label="Go to Google" href="https://google.com" target="_blank"></ui-button>

<!-- RTL Support -->
<ui-button label="RTL Button" icon="🚀" rtl></ui-button>

<!-- Loading Positions -->
<ui-button label="Loading Top" loading loading-position="top"></ui-button>
<ui-button label="Loading Right" loading loading-position="right"></ui-button>`;
}
