import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { CardPlaygroundComponent } from './components/card-playground/card-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-app-card-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    CardPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-card-demo.component.html',
  styleUrl: './app-card-demo.component.scss',
})
export class AppCardDemoComponent {
  variants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'basic', title: 'Basic Card', icon: '📋' },
    { id: 'cover', title: 'Card with Cover', icon: '🖼️' },
    { id: 'actions', title: 'Card with Actions', icon: '⚡' },
    { id: 'hoverable', title: 'Hoverable Cards', icon: '✨' },
    { id: 'sizes', title: 'Card Sizes', icon: '📏' },
    { id: 'types', title: 'Card Types', icon: '🎨' },
    { id: 'loading', title: 'Loading State', icon: '⏳' },
    { id: 'grid', title: 'Grid Cards', icon: '📊' },
    { id: 'custom', title: 'Custom Styling', icon: '🎭' },
    { id: 'flipping', title: 'Flipping Cards', icon: '🔄' },
    { id: 'closable', title: 'Closable & Menu', icon: '✖️' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
    { id: 'variants', title: 'Card Variants', icon: '🌈' },
    { id: 'ribbons', title: 'Card Ribbons', icon: '🎀' },
    { id: 'collapsible', title: 'Collapsible Cards', icon: '📦' },
    { id: 'selectable', title: 'Selectable Cards', icon: '✅' },
    { id: 'avatars', title: 'Cards with Avatars', icon: '👤' },
    { id: 'combined', title: 'Combined Features', icon: '🚀' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-card variant="elevated" hoverable width="340px">
  <div slot="cover">...</div>
  <div slot="header"><h3>Card Title</h3></div>
  <div slot="content">...</div>
  <div slot="footer">...</div>
</ui-card>`;

  stylesCode = `<!-- Core Variants -->
<ui-card variant="default"></ui-card>
<ui-card variant="elevated"></ui-card>
<ui-card variant="outlined"></ui-card>
<ui-card variant="filled"></ui-card>`;

  interactionCode = `<!-- Flipping Interaction -->
<ui-card flippable>
  <div slot="content">Front Content</div>
  <div slot="back-content">Back Content</div>
</ui-card>

<!-- Selection Mode -->
<ui-card selectable [selected]="isSelected"></ui-card>`;

  statesCode = `<!-- Loading State with Skeleton -->
<ui-card loading></ui-card>

<!-- Clickable Card as Link -->
<ui-card clickable href="/details"></ui-card>`;

  basicCode = `<ui-card>
  <div slot="header"><h3>Card Title</h3></div>
  <div slot="content">Card content goes here.</div>
</ui-card>`;

  coverCode = `<ui-card>
  <div slot="cover">
    <img src="image.jpg" alt="Cover" />
  </div>
  <div slot="header"><h3>Card Title</h3></div>
  <div slot="content">Content with cover image.</div>
</ui-card>`;

  actionsCode = `<ui-card>
  <div slot="header"><h3>Card Title</h3></div>
  <div slot="content">Card with action buttons.</div>
  <div slot="footer">
    <ui-button label="Action"></ui-button>
  </div>
</ui-card>`;

  hoverableCode = `<ui-card hoverable>
  <div slot="content">Hover over this card</div>
</ui-card>`;

  sizesCode = `<ui-card size="small"></ui-card>
<ui-card size="medium"></ui-card>
<ui-card size="large"></ui-card>`;

  typesCode = `<ui-card type="borderless"></ui-card>
<ui-card type="inner"></ui-card>`;

  gridCode = `<div class="card-grid">
  <ui-card></ui-card>
  <ui-card></ui-card>
  <ui-card></ui-card>
</div>`;

  customCode = `<ui-card head-style="background: linear-gradient(...)">
  <div slot="header">Custom Header</div>
</ui-card>`;

  flippingCode = `<ui-card flippable flip-trigger="click">
  <div slot="content">Front</div>
  <div slot="back-content">Back</div>
</ui-card>

<ui-card flippable flip-trigger="hover">
  <div slot="content">Hover to flip</div>
  <div slot="back-content">Back side</div>
</ui-card>`;

  closableCode = `<ui-card closable>
  <div slot="header">Closable Card</div>
</ui-card>

<ui-card show-menu [menuItems]="menuItems">
  <div slot="header">Card with Menu</div>
</ui-card>`;

  premiumCode = `<ui-card layout="horizontal">
  <div slot="cover"><img src="..." /></div>
  <div slot="content">Media card content</div>
</ui-card>

<ui-card glass="true">
  <div slot="content">Glassmorphism effect</div>
</ui-card>`;

  variantsCode = `<ui-card variant="primary"></ui-card>
<ui-card variant="success"></ui-card>
<ui-card variant="warning"></ui-card>
<ui-card variant="danger"></ui-card>
<ui-card variant="info"></ui-card>`;

  ribbonsCode = `<ui-card ribbon="NEW" ribbon-color="blue">
  <div slot="content">Card with ribbon</div>
</ui-card>`;

  collapsibleCode = `<ui-card collapsible collapsed="false">
  <div slot="header">Collapsible Card</div>
  <div slot="content">Collapsible content</div>
</ui-card>`;

  selectableCode = `<ui-card selectable [selected]="isSelected">
  <div slot="content">Selectable card</div>
</ui-card>`;

  avatarsCode = `<ui-card>
  <div slot="avatar">
    <img src="avatar.jpg" alt="User" />
  </div>
  <div slot="header">User Name</div>
  <div slot="content">Card with avatar</div>
</ui-card>`;

  combinedCode = `<ui-card 
  variant="primary" 
  ribbon="PRO" 
  selectable 
  collapsible>
  <div slot="avatar"><img src="..." /></div>
  <div slot="header">Combined Features</div>
  <div slot="content">Multiple features together</div>
</ui-card>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
