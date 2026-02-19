import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-set-layout-manager-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DemoTabsComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-layout-manager-demo.component.html',
  styleUrl: './set-layout-manager-demo.component.scss',
})
export class SetLayoutManagerDemoComponent implements AfterViewInit {
  exampleVariants = [
    { id: 'basic', title: 'Basic Three-Column Layout', icon: '📏' },
    { id: 'ide', title: 'IDE-Style Layout', icon: '💻' },
    { id: 'dashboard', title: 'Dashboard Layout', icon: '📊' },
    { id: 'features', title: 'Key Features', icon: '✨' },
    { id: 'api', title: 'API Methods', icon: '🔧' },
  ];

  playgroundCode = `<app-layout-manager
  [regions]="regions"
  (layoutChange)="onLayoutChange($event)"
></app-layout-manager>`;

  @ViewChild('basicLayout') basicLayout!: ElementRef;
  @ViewChild('ideLayout') ideLayout!: ElementRef;
  @ViewChild('dashboardLayout') dashboardLayout!: ElementRef;
  @ViewChild('customLayout') customLayout!: ElementRef;

  basicRegions = [
    { id: 'left', title: 'Sidebar', size: 25, minSize: 15, collapsible: true },
    { id: 'center', title: 'Main Content', size: 50 },
    { id: 'right', title: 'Properties', size: 25, minSize: 15, collapsible: true },
  ];

  ideRegions = [
    { id: 'explorer', title: 'Explorer', size: 20, minSize: 10, collapsible: true },
    { id: 'editor', title: 'Editor', size: 60 },
    { id: 'terminal', title: 'Terminal', size: 20, minSize: 10, collapsible: true },
  ];

  dashboardRegions = [
    { id: 'nav', title: 'Navigation', size: 15, minSize: 10, collapsible: true },
    { id: 'main', title: 'Dashboard', size: 60 },
    { id: 'widgets', title: 'Widgets', size: 25, minSize: 15, collapsible: true },
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupBasicLayout();
      this.setupIDELayout();
      this.setupDashboardLayout();
    }, 100);
  }

  async setupBasicLayout() {
    const layout = this.basicLayout?.nativeElement;
    if (!layout) return;

    await layout.addPanel({
      regionId: 'left',
      title: 'File Explorer',
      icon: 'fas fa-folder-tree',
      html: '<div class="panel-content"><h3>📁 Files</h3><ul><li>src/</li><li>public/</li><li>package.json</li></ul></div>',
    });

    await layout.addPanel({
      regionId: 'center',
      title: 'Welcome',
      icon: 'fas fa-home',
      html: '<div class="panel-content"><h2>Welcome to Layout Manager</h2><p>This is a powerful layout management system.</p></div>',
    });

    await layout.addPanel({
      regionId: 'right',
      title: 'Properties',
      icon: 'fas fa-sliders',
      html: '<div class="panel-content"><h3>⚙️ Properties</h3><p>Configure your settings here.</p></div>',
    });
  }

  async setupIDELayout() {
    const layout = this.ideLayout?.nativeElement;
    if (!layout) return;

    await layout.addPanel({
      regionId: 'explorer',
      title: 'Project',
      icon: 'fas fa-folder-open',
      html: '<div class="panel-content"><h4>Project Explorer</h4><ul><li>components/</li><li>services/</li><li>models/</li></ul></div>',
    });

    await layout.addPanel({
      regionId: 'explorer',
      title: 'Search',
      icon: 'fas fa-search',
      html: '<div class="panel-content"><h4>Search Results</h4><p>No results found.</p></div>',
    });

    await layout.addPanel({
      regionId: 'editor',
      title: 'app.component.ts',
      icon: 'fab fa-js',
      html: '<div class="panel-content code-editor"><pre>import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  template: `<h1>Hello World</h1>`\n})\nexport class AppComponent {}</pre></div>',
    });

    await layout.addPanel({
      regionId: 'terminal',
      title: 'Terminal',
      icon: 'fas fa-terminal',
      html: '<div class="panel-content terminal"><pre>$ npm run dev\n> Starting development server...\n> Server running at http://localhost:4200</pre></div>',
    });
  }

  async setupDashboardLayout() {
    const layout = this.dashboardLayout?.nativeElement;
    if (!layout) return;

    await layout.addPanel({
      regionId: 'nav',
      title: 'Menu',
      icon: 'fas fa-bars',
      html: '<div class="panel-content"><nav><ul><li>📊 Dashboard</li><li>📈 Analytics</li><li>⚙️ Settings</li></ul></nav></div>',
    });

    await layout.addPanel({
      regionId: 'main',
      title: 'Overview',
      icon: 'fas fa-chart-line',
      html: '<div class="panel-content"><h2>Dashboard Overview</h2><div class="stats"><div class="stat">Users: 1,234</div><div class="stat">Revenue: $45,678</div></div></div>',
    });

    await layout.addPanel({
      regionId: 'widgets',
      title: 'Quick Stats',
      icon: 'fas fa-tachometer-alt',
      html: '<div class="panel-content"><h4>Quick Stats</h4><p>Active Users: 42</p><p>New Orders: 15</p></div>',
    });
  }

  handleLayoutChange(event: CustomEvent) {}

  handlePanelAdded(event: CustomEvent) {}

  handlePanelRemoved(event: CustomEvent) {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
