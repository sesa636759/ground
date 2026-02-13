import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarGroupPlaygroundComponent } from './components/avatar-group-playground/avatar-group-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-avatar-group-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AvatarGroupPlaygroundComponent,
    CodeBlockComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-group-demo.component.html',
  styleUrl: './set-avatar-group-demo.component.scss',
})
export class SetAvatarGroupDemoComponent {
  variants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'basic', title: 'Basic Usage', icon: '📐' },
    { id: 'sizes', title: 'Size Variants', icon: '📏' },
    { id: 'max-display', title: 'Max Display', icon: '🔢' },
    { id: 'layouts', title: 'Layout Options', icon: '📋' },
    { id: 'shapes', title: 'Shape Variants', icon: '⬡' },
    { id: 'spacing', title: 'Spacing Control', icon: '↔️' },
    { id: 'borders', title: 'Border Styles', icon: '⭕' },
    { id: 'tooltips', title: 'Tooltips & Popovers', icon: '💬' },
    { id: 'status', title: 'Status Indicators', icon: '🟢' },
    { id: 'clickable', title: 'Clickable Groups', icon: '🖱️' },
    { id: 'animated', title: 'Animated Groups', icon: '✨' },
    { id: 'vertical', title: 'Vertical Layout', icon: '↕️' },
    { id: 'grid', title: 'Grid Layout', icon: '▦' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
  ];

  get exampleVariants() {
    return this.variants.filter(v => v.id !== 'playground');
  }

  users = [
    { name: 'John Doe', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bob Johnson', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Alice Williams', image: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Charlie Brown', image: 'https://i.pravatar.cc/150?img=5' },
    { name: 'David Miller', image: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Emma Davis', image: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Frank Wilson', image: 'https://i.pravatar.cc/150?img=8' },
  ];

  playgroundCode = `<app-avatar-group max="3">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  <app-avatar name="User 3"></app-avatar>
  <app-avatar name="User 4"></app-avatar>
</app-avatar-group>`;

  basicCode = `<!-- Simple Avatar Group -->
<app-avatar-group>
  <app-avatar name="John Doe"></app-avatar>
  <app-avatar name="Jane Smith"></app-avatar>
  <app-avatar name="Bob Johnson"></app-avatar>
</app-avatar-group>`;

  sizesCode = `<!-- Small Group -->
<app-avatar-group size="small">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>

<!-- Medium Group -->
<app-avatar-group size="medium">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>

<!-- Large Group -->
<app-avatar-group size="large">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>`;

  maxDisplayCode = `<!-- Show max 3 avatars -->
<app-avatar-group max="3">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  <app-avatar name="User 3"></app-avatar>
  <app-avatar name="User 4"></app-avatar>
  <app-avatar name="User 5"></app-avatar>
</app-avatar-group>`;

  layoutsCode = `<!-- Stacked Layout -->
<app-avatar-group layout="stacked">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>

<!-- Spaced Layout -->
<app-avatar-group layout="spaced">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>`;

  shapesCode = `<!-- Circle Shape -->
<app-avatar-group shape="circle">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>

<!-- Square Shape -->
<app-avatar-group shape="square">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>`;

  spacingCode = `<!-- Custom Spacing -->
<app-avatar-group spacing="4">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>

<app-avatar-group spacing="12">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>`;

  bordersCode = `<!-- Bordered Group -->
<app-avatar-group border="2px solid #3b82f6">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>`;

  tooltipsCode = `<!-- Group with Tooltips -->
<app-avatar-group show-tooltips>
  <app-avatar name="John Doe" tooltip="Software Engineer"></app-avatar>
  <app-avatar name="Jane Smith" tooltip="Product Manager"></app-avatar>
</app-avatar-group>`;

  statusCode = `<!-- Group with Status -->
<app-avatar-group>
  <app-avatar name="User 1" status="online"></app-avatar>
  <app-avatar name="User 2" status="away"></app-avatar>
  <app-avatar name="User 3" status="busy"></app-avatar>
</app-avatar-group>`;

  clickableCode = `<!-- Clickable Group -->
<app-avatar-group clickable (click)="handleClick($event)">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
</app-avatar-group>`;

  animatedCode = `<!-- Animated Group -->
<app-avatar-group animated>
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  <app-avatar name="User 3"></app-avatar>
</app-avatar-group>`;

  verticalCode = `<!-- Vertical Layout -->
<app-avatar-group direction="vertical">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  <app-avatar name="User 3"></app-avatar>
</app-avatar-group>`;

  gridCode = `<!-- Grid Layout -->
<app-avatar-group layout="grid" columns="3">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  <app-avatar name="User 3"></app-avatar>
  <app-avatar name="User 4"></app-avatar>
  <app-avatar name="User 5"></app-avatar>
  <app-avatar name="User 6"></app-avatar>
</app-avatar-group>`;

  premiumCode = `<!-- Premium Features -->
<app-avatar-group show-popover hover-effect="zoom">
  <app-avatar name="User 1"></app-avatar>
  <app-avatar name="User 2"></app-avatar>
  <app-avatar name="User 3"></app-avatar>
</app-avatar-group>`;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
