import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherPlaygroundComponent } from './components/theme-switcher-playground/theme-switcher-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-theme-switcher-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ThemeSwitcherPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-theme-switcher-demo.component.html',
  styleUrl: './set-theme-switcher-demo.component.scss',
})
export class SetThemeSwitcherDemoComponent implements OnInit {
  exampleVariants = [
    { id: 'variants', title: 'Visual Variants', icon: '🎭' },
    { id: 'sizes', title: 'Size Variants', icon: '📏' },
    { id: 'icons', title: 'Icon Options', icon: '🎯' },
    { id: 'premium', title: 'Premium Features', icon: '💎' },
  ];

  themes = [
    { value: 'light', label: 'Light', icon: 'fas fa-sun' },
    { value: 'dark', label: 'Dark', icon: 'fas fa-moon' },
    { value: 'auto', label: 'Auto', icon: 'fas fa-circle-half-stroke' },
  ];

  playgroundCode = `<app-theme-switcher
  [themes]="themes"
  [(ngModel)]="currentTheme"
></app-theme-switcher>`;

  ngOnInit() {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
