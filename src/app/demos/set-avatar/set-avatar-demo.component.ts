import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarPlaygroundComponent } from './components/avatar-playground/avatar-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-avatar-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AvatarPlaygroundComponent,
    CodeBlockComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-avatar-demo.component.html',
  styleUrl: './set-avatar-demo.component.scss',
})
export class SetAvatarDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'basic-types', title: 'Basic Types', icon: '📋' },
    { id: 'sizes-shapes', title: 'Sizes & Shapes', icon: '📏' },
    { id: 'status', title: 'Status Indicators', icon: '🟢' },
    { id: 'groups', title: 'Avatar Groups', icon: '👥' },
    { id: 'premium', title: 'Premium Features', icon: '✨' },
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
