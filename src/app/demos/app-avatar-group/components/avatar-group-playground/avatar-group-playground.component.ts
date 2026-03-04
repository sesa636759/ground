import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-avatar-group-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './avatar-group-playground.component.html',
  styleUrl: './avatar-group-playground.component.scss',
})
export class AvatarGroupPlaygroundComponent extends BasePlaygroundComponent {
  @ViewChild('avatarGroupElement') avatarGroupElement!: ElementRef;

  pgConfig = {
    size: 'medium',
    max: 3,
    shape: 'circle',
  };

  pgAccordionItems = JSON.stringify([
    { id: 'layout', title: 'Layout Configuration', icon: '📏' },
    { id: 'style', title: 'Visual Styles', icon: '✨' },
  ]);

  accordionDefaultOpen = JSON.stringify(['layout']);

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  updateConfig() {
    setTimeout(() => {
      if (!this.avatarGroupElement) return;
      const innerContent = `
  <ui-avatar label="JD"></ui-avatar>
  <ui-avatar label="AB"></ui-avatar>
  <ui-avatar label="CD"></ui-avatar>
  <ui-avatar label="EF"></ui-avatar>`;
      const code = generatePlaygroundCode(
        this.avatarGroupElement.nativeElement as Element,
        'ui-avatar-group',
        innerContent,
      );
      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }

  override resetConfig() {
    this.pgConfig = {
      size: 'medium',
      max: 3,
      shape: 'circle',
    };
    this.updateConfig();
  }
}
