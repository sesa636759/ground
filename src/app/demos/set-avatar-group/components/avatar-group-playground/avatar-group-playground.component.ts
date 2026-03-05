import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-set-avatar-group-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './avatar-group-playground.component.html',
  styleUrl: './avatar-group-playground.component.scss',
})
export class SetAvatarGroupPlaygroundComponent
  extends BasePlaygroundComponent
  implements AfterViewInit
{
  @ViewChild('avatarGroupElement') avatarGroupElement!: ElementRef;

  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'layout', title: 'Layout Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'visuals', title: 'Visual Styles', icon: 'sparkles', iconLibrary: 'lucide' },
    { id: 'behavior', title: 'Interaction Behavior', icon: 'settings', iconLibrary: 'lucide' },
  ];

  accordionDefaultOpen = ['layout'];

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

  constructor() {
    super();
  }

  getDefaultConfig() {
    return {
      size: 'medium',
      max: 4,
      layout: 'stacked',
      shape: 'circle',
      showTooltips: true,
      clickable: false,
      spacing: 8,
      borderWidth: 2,
      borderColor: '#ffffff',
      direction: 'horizontal',
      showPopover: false,
      animated: false,
      hoverEffect: 'none',
      columns: 3,
    };
  }

  ngAfterViewInit() {
    this.updateConfig();
  }

  updateConfig() {
    setTimeout(() => {
      if (!this.avatarGroupElement) return;
      let code = this.getCleanFormattedDom(this.avatarGroupElement, 'app-avatar-group');
      // Add users prop to code manually
      code = code.replace(
        '></app-avatar-group>',
        '\n  [users]="avatarUsers"\n></app-avatar-group>',
      );

      this.generatedCode.set(code);
      this.refreshCode();
    }, 50);
  }
}
