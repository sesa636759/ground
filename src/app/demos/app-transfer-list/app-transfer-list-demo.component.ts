import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferListPlaygroundComponent } from './components/transfer-list-playground/transfer-list-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-transfer-list-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TransferListPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-transfer-list-demo.component.html',
  styleUrl: './app-transfer-list-demo.component.scss',
})
export class AppTransferListDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'features', name: 'UI Controls', icon: '⚙️', color: '#3b82f6' },
  ];

  get exampleVariants() {
    return this.variants.filter((v) => v.id !== 'playground');
  }

  sourceItems = JSON.stringify([
    { label: 'Standard User', value: 'std' },
    { label: 'Admin User', value: 'adm' },
    { label: 'Power User', value: 'pwr' },
  ]);

  targetItems = JSON.stringify([{ label: 'Guest User', value: 'gst' }]);

  playgroundCode = `<ui-transfer-list [source]="available" [target]="assigned"></ui-transfer-list>`;

  featuresCode = `<!-- With Search Enabled -->
<ui-transfer-list show-search [source]="available"></ui-transfer-list>

<!-- Disabled State -->
<ui-transfer-list disabled [source]="available"></ui-transfer-list>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
