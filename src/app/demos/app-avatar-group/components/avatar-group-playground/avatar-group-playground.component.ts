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

  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Configuration', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'style', title: 'Visual Styles', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = JSON.stringify(['layout']);

  shapeOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Square', value: 'square' },
  ];

  getDefaultConfig() {
    return {
      size: 'medium',
      max: 3,
      shape: 'circle',
    };
  }

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
}
