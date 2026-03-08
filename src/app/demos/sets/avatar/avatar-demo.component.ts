import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmAvatarPlaygroundComponent } from '../../../playground/sets/avatar-playground/avatar-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-avatar-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmAvatarPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-demo.component.html',
  styleUrl: './avatar-demo.component.scss',
})
export class DmAvatarDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'basic', title: 'Basic Shapes & Sizes', icon: '??' },
    { id: 'types', title: 'Avatar Types', icon: '??' },
    { id: 'sizes', title: 'Sizes', icon: '??' },
    { id: 'auto-scale', title: 'Auto-scale Font', icon: '??' },
    { id: 'badge', title: 'With Badge', icon: '??' },
    { id: 'avatar-group', title: 'Avatar Groups', icon: '??' },
    { id: 'custom-colors', title: 'Custom Colors', icon: '??' },
    { id: 'responsive', title: 'Responsive Size', icon: '??' },
    { id: 'status', title: 'Status Indicators', icon: '??' },
    { id: 'borders', title: 'Custom Borders', icon: '?' },
    { id: 'tooltips', title: 'Tooltips & Popovers', icon: '??' },
    { id: 'icons', title: 'Different Icons', icon: '?' },
    { id: 'badge-overlay', title: 'Badge Overlay', icon: '?' },
    { id: 'verified', title: 'Verified Badge', icon: '?' },
    { id: 'editable', title: 'Editable/Upload', icon: '??' },
    { id: 'loading', title: 'Loading State', icon: '?' },
    { id: 'image-fit', title: 'Image Fit Options', icon: '???' },
    { id: 'auto-color', title: 'Auto Color from Name', icon: '??' },
    { id: 'gradients', title: 'Gradient Backgrounds', icon: '??' },
    { id: 'animations', title: 'Animations', icon: '?' },
    { id: 'clickable', title: 'Clickable Avatars', icon: '???' },
    { id: 'ring-color', title: 'Ring Color', icon: '??' },
    { id: 'lazy-loading', title: 'Lazy Loading', icon: '?' },
    { id: 'premium', title: 'Premium Features', icon: '??' },
    { id: 'premium-showcase', title: 'Premium Showcase', icon: '??' },
    { id: 'animated-groups', title: 'Animated Groups', icon: '??' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  basicCode = `<!-- Sizes and Shapes -->
<app-avatar name="LC" size="large" shape="circle"></app-avatar>
<app-avatar name="DC" size="default" shape="circle"></app-avatar>
<app-avatar name="SC" size="small" shape="circle"></app-avatar>
<app-avatar name="LS" size="large" shape="square"></app-avatar>
<app-avatar name="DS" size="default" shape="square"></app-avatar>
<app-avatar name="SS" size="small" shape="square"></app-avatar>`;

  typesCode = `<!-- Image, Icon and Letter Types -->
<app-avatar icon="fa fa-user" name="Icon with Tooltip"></app-avatar>
<app-avatar name="John Doe"></app-avatar>
<app-avatar name="Christopher Alexander"></app-avatar>
<app-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" name="Image"></app-avatar>`;

  sizesCode = `<!-- Standard and Custom Sizes -->
<app-avatar name="XS" size="xs"></app-avatar>
<app-avatar name="S" size="s"></app-avatar>
<app-avatar name="M" size="m"></app-avatar>
<app-avatar name="L" size="l"></app-avatar>
<app-avatar name="XL" size="xl"></app-avatar>
<app-avatar name="C" size="80px"></app-avatar>`;

  autoScaleCode = `<!-- Auto-scaling for long text -->
<app-avatar name="A"></app-avatar>
<app-avatar name="AB"></app-avatar>
<app-avatar name="ABC"></app-avatar>
<app-avatar name="ABCD"></app-avatar>`;

  badgeCode = `<!-- Badges for notifications -->
<app-avatar name="User" badge="1"></app-avatar>
<app-avatar name="User" badge="99+"></app-avatar>
<app-avatar name="User" badge="dot" badge-color="green"></app-avatar>`;

  avatarGroupCode = `<!-- Avatar groups with overlap -->
<app-avatar-group max="3">
  <app-avatar src="https://i.pravatar.cc/150?u=a" name="Member A"></app-avatar>
  <app-avatar src="https://i.pravatar.cc/150?u=b" name="Member B"></app-avatar>
  <app-avatar src="https://i.pravatar.cc/150?u=c" name="Member C"></app-avatar>
  <app-avatar src="https://i.pravatar.cc/150?u=d" name="Member D"></app-avatar>
  <app-avatar src="https://i.pravatar.cc/150?u=e" name="Member E"></app-avatar>
</app-avatar-group>`;

  customColorsCode = `<!-- Custom background and text colors -->
<app-avatar name="Red" bg-color="#ef4444" text-color="white"></app-avatar>
<app-avatar name="Blue" bg-color="#3b82f6" text-color="white"></app-avatar>
<app-avatar name="Green" bg-color="#10b981" text-color="white"></app-avatar>`;

  responsiveCode = `<!-- Responsive sizing -->
<app-avatar name="Responsive" size="responsive"></app-avatar>`;

  statusCode = `<!-- Status indicators -->
<app-avatar name="Online" status="online"></app-avatar>
<app-avatar name="Offline" status="offline"></app-avatar>
<app-avatar name="Away" status="away"></app-avatar>
<app-avatar name="Busy" status="busy"></app-avatar>
<app-avatar name="DND" status="dnd"></app-avatar>`;

  bordersCode = `<!-- Custom borders -->
<app-avatar name="User" border="2px solid #3b82f6"></app-avatar>
<app-avatar name="User" border="3px dashed #ef4444"></app-avatar>`;

  tooltipsCode = `<!-- Tooltips and popovers -->
<app-avatar name="John Doe" tooltip="Software Engineer"></app-avatar>
<app-avatar-group max="3" show-popover>
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  <app-avatar name="User 3"></app-avatar>
  <app-avatar name="User 4"></app-avatar>
</app-avatar-group>`;

  iconsCode = `<!-- Different icon types -->
<app-avatar icon="fa fa-user"></app-avatar>
<app-avatar icon="fa fa-star"></app-avatar>
<app-avatar icon="fa fa-heart"></app-avatar>
<app-avatar icon="??"></app-avatar>`;

  badgeOverlayCode = `<!-- Badge with custom positions -->
<app-avatar name="User" badge="3" badge-position="top-right"></app-avatar>
<app-avatar name="User" badge="99+" badge-position="bottom-right"></app-avatar>
<app-avatar name="User" badge="NEW" badge-position="top-left" badge-color="#10b981"></app-avatar>
<app-avatar name="User" badge="!" badge-position="bottom-left" badge-color="#ef4444"></app-avatar>`;

  verifiedCode = `<!-- Verified badge -->
<app-avatar name="Verified User" verified></app-avatar>
<app-avatar src="https://i.pravatar.cc/150?u=verified" name="Verified" verified></app-avatar>`;

  editableCode = `<!-- Editable avatar with upload -->
<app-avatar name="User" editable (upload)="handleUpload($event)"></app-avatar>`;

  loadingCode = `<!-- Loading state -->
<app-avatar name="Loading" loading></app-avatar>`;

  imageFitCode = `<!-- Image fit options -->
<app-avatar src="image.jpg" fit="cover"></app-avatar>
<app-avatar src="image.jpg" fit="contain"></app-avatar>
<app-avatar src="image.jpg" fit="fill"></app-avatar>
<app-avatar src="image.jpg" fit="scale-down"></app-avatar>`;

  autoColorCode = `<!-- Auto-generate color from name -->
<app-avatar name="Alice Anderson" auto-color></app-avatar>
<app-avatar name="Bob Baker" auto-color></app-avatar>
<app-avatar name="Charlie Clark" auto-color></app-avatar>
<app-avatar name="Diana Davis" auto-color></app-avatar>`;

  gradientsCode = `<!-- Gradient backgrounds -->
<app-avatar name="User" gradient="default"></app-avatar>
<app-avatar name="User" gradient="custom" gradient-colors="#667eea,#764ba2"></app-avatar>
<app-avatar name="User" gradient="blue" gradient-colors="#4facfe,#00f2fe"></app-avatar>`;

  animationsCode = `<!-- Animated avatars -->
<app-avatar name="Pulse" animation="pulse"></app-avatar>
<app-avatar name="Ring" animation="ring"></app-avatar>
<app-avatar name="Glow" animation="glow"></app-avatar>`;

  clickableCode = `<!-- Clickable avatars -->
<app-avatar name="Click Me" clickable (click)="handleClick()"></app-avatar>`;

  ringColorCode = `<!-- Custom ring colors -->
<app-avatar name="User" ring-color="#3b82f6"></app-avatar>
<app-avatar name="User" ring-color="#ef4444"></app-avatar>
<app-avatar name="User" ring-color="#10b981"></app-avatar>`;

  lazyLoadingCode = `<!-- Lazy loaded images -->
<app-avatar src="large-image.jpg" lazy-load></app-avatar>`;

  premiumCode = `<!-- Premium features -->
<app-avatar name="User" story-ring></app-avatar>
<app-avatar name="User" story-seen></app-avatar>
<app-avatar name="User" active-speaker></app-avatar>
<app-avatar name="User" status="online" status-pulse></app-avatar>
<app-avatar name="John Doe" smart-initials></app-avatar>`;

  premiumShowcaseCode = `<!-- Premium effects -->
<app-avatar name="User" skeleton shimmer></app-avatar>
<app-avatar name="User" glassmorphism></app-avatar>
<app-avatar name="User" effect-3d></app-avatar>
<app-avatar name="User" story-segments="4"></app-avatar>`;

  animatedGroupsCode = `<!-- Animated avatar groups -->
<app-avatar-group animated>
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  <app-avatar name="User 3"></app-avatar>
  <app-avatar name="User 4"></app-avatar>
</app-avatar-group>`;

  // scrollToSection(id: string) {
  //   const element = document.getElementById(id);
  //   const container = document.querySelector('.pane-examples');
  //   if (element && container) {
  //     container.scrollTo({
  //       top: (element as HTMLElement).offsetTop - 20,
  //       behavior: 'smooth',
  //     });
  //   }
  // }

  playgroundCode = `<app-avatar name="John Doe" status="online" size="64px"></app-avatar>`;

  ngOnInit() {}
}
