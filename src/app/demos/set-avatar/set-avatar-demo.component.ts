import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarPlaygroundComponent } from './components/avatar-playground/avatar-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';

@Component({
  selector: 'app-set-avatar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AvatarPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-demo.component.html',
  styleUrl: './set-avatar-demo.component.scss',
})
export class SetAvatarDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'basic-types', name: 'Basic Types', icon: '📋' },
    { id: 'sizes-shapes', name: 'Sizes & Shapes', icon: '📏' },
    { id: 'status', name: 'Status Indicators', icon: '🟢' },
    { id: 'groups', name: 'Avatar Groups', icon: '👥' },
    { id: 'premium', name: 'Premium Features', icon: '✨' },
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  playgroundCode = `<app-avatar
  src="user.jpg"
  alt="User Name"
  size="medium"
></app-avatar>`;

  ngOnInit() {}
}
