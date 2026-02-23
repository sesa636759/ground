import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/app-checkbox-value-accessor.directive';
import { AvatarGroupPlaygroundComponent } from './components/avatar-group-playground/avatar-group-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-avatar-group-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AvatarGroupPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-avatar-group-demo.component.html',
  styleUrl: './app-avatar-group-demo.component.scss',
})
export class AppAvatarGroupDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'sizes', name: 'Sizes', icon: '📏', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  playgroundCode = `<ui-avatar-group [max]="3">
  <ui-avatar label="JD"></ui-avatar>
  <ui-avatar label="AB"></ui-avatar>
  <ui-avatar label="CD"></ui-avatar>
  <ui-avatar label="EF"></ui-avatar>
</ui-avatar-group>`;

  sizesCode = `<!-- Small Group -->
<ui-avatar-group size="small">
  <ui-avatar label="A"></ui-avatar>
  <ui-avatar label="B"></ui-avatar>
</ui-avatar-group>

<!-- Large Group -->
<ui-avatar-group size="large">
  <ui-avatar label="X"></ui-avatar>
  <ui-avatar label="Y"></ui-avatar>
</ui-avatar-group>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
