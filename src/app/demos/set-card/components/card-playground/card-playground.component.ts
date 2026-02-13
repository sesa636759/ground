import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-playground.component.html',
  styleUrl: './card-playground.component.scss',
})
export class CardPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    title: 'Card Title',
    extra: 'More',
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    actions: 'Settings,Edit,More',
    hoverable: true,
    size: 'default',
    bordered: true,
    type: 'default',
    loading: false,
    flippable: false,
    flipTrigger: 'click',
    closable: false,
    menuActions: '',
    layout: 'vertical',
    glass: false,
    variant: 'default',
    ribbon: '',
    ribbonPosition: 'top-right',
    ribbonColor: '#1890ff',
    collapsible: false,
    collapsed: false,
    selectable: false,
    selected: false,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    avatarIcon: '',
  };

  eventMessage = signal('Interact with the card...');
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-card\n`;
    if (this.pgConfig.title) code += `  card-title="${this.pgConfig.title}"\n`;
    if (this.pgConfig.extra) code += `  extra="${this.pgConfig.extra}"\n`;
    if (this.pgConfig.cover) code += `  cover="${this.pgConfig.cover}"\n`;
    if (this.pgConfig.actions) code += `  actions="${this.pgConfig.actions}"\n`;
    if (this.pgConfig.hoverable) code += `  hoverable="true"\n`;
    if (this.pgConfig.size !== 'default') code += `  size="${this.pgConfig.size}"\n`;
    if (!this.pgConfig.bordered) code += `  bordered="false"\n`;
    if (this.pgConfig.type !== 'default') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.loading) code += `  loading="true"\n`;
    if (this.pgConfig.flippable)
      code += `  flippable="true" flip-trigger="${this.pgConfig.flipTrigger}"\n`;
    if (this.pgConfig.closable) code += `  closable="true"\n`;
    if (this.pgConfig.menuActions) code += `  menu-actions="${this.pgConfig.menuActions}"\n`;
    if (this.pgConfig.layout !== 'vertical') code += `  layout="${this.pgConfig.layout}"\n`;
    if (this.pgConfig.glass) code += `  glass="true"\n`;
    if (this.pgConfig.variant !== 'default') code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.ribbon) {
      code += `  ribbon="${this.pgConfig.ribbon}"\n`;
      code += `  ribbon-position="${this.pgConfig.ribbonPosition}"\n`;
      code += `  ribbon-color="${this.pgConfig.ribbonColor}"\n`;
    }
    if (this.pgConfig.collapsible) code += `  collapsible="true"\n`;
    if (this.pgConfig.collapsed) code += `  collapsed="true"\n`;
    if (this.pgConfig.selectable) code += `  selectable="true"\n`;
    if (this.pgConfig.selected) code += `  selected="true"\n`;
    if (this.pgConfig.avatar) code += `  avatar="${this.pgConfig.avatar}"\n`;
    if (this.pgConfig.avatarIcon) code += `  avatar-icon="${this.pgConfig.avatarIcon}"\n`;

    code += `>\n`;
    code += `  <p>Card content goes here...</p>\n`;
    if (this.pgConfig.flippable) {
      code += `  <div slot="back">Back side content</div>\n`;
    }
    code += `</app-card>`;
    this.generatedCode.set(code);
  }

  onCardAction(event: any) {
    this.eventMessage.set(`Action clicked: "${event.detail.action}"`);
  }

  onCardClose() {
    this.eventMessage.set(`Card closed`);
  }

  onCardCollapse(event: any) {
    this.eventMessage.set(`Card ${event.detail.collapsed ? 'collapsed' : 'expanded'}`);
    this.pgConfig.collapsed = event.detail.collapsed;
    this.updateConfig();
  }

  onCardSelect(event: any) {
    this.eventMessage.set(`Card ${event.detail.selected ? 'selected' : 'deselected'}`);
    this.pgConfig.selected = event.detail.selected;
    this.updateConfig();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
