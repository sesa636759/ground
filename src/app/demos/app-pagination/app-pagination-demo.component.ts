import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { PaginationPlaygroundComponent } from './components/pagination-playground/pagination-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'app-app-pagination-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    PaginationPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-pagination-demo.component.html',
  styleUrl: './app-pagination-demo.component.scss',
})
export class AppPaginationDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮' },
    { id: 'basic', title: 'Basic & Compact', icon: '📄' },
    { id: 'detailed', title: 'Detailed', icon: '📋' },
    { id: 'minimal', title: 'Minimal', icon: '➖' },
    { id: 'dropdown', title: 'Dropdown', icon: '⬇️' },
    { id: 'input', title: 'Input', icon: '✍️' },
    { id: 'indicator', title: 'Indicator', icon: '🔵' },
    { id: 'themes', title: 'Themes & Shapes', icon: '🎨' },
    { id: 'sizes', title: 'Sizes & Variations', icon: '📏' },
    { id: 'features', title: 'Advanced & Smart', icon: '🧠' },
  ];

  basicCode = `<!-- Basic Pagination -->
<ui-pagination total-items="100" items-per-page="10" current-page="1"></ui-pagination>

<!-- Compact Style -->
<ui-pagination type="compact" total-items="50" items-per-page="5" current-page="3"></ui-pagination>`;

  detailedCode = `<!-- With Page Size Selector & Total -->
<ui-pagination type="detailed" total-items="200" items-per-page="20" show-page-size="true" show-total="true" current-page="3"></ui-pagination>

<!-- With Jump To Page -->
<ui-pagination type="detailed" total-items="500" items-per-page="25" show-jump-to="true" show-total="true" current-page="5"></ui-pagination>

<!-- All Features Combined -->
<ui-pagination type="detailed" total-items="1000" items-per-page="50" show-page-size="true" show-total="true" show-jump-to="true" current-page="10"></ui-pagination>`;

  minimalCode = `<!-- Minimal -->
<ui-pagination type="minimal" total-items="100" items-per-page="10" current-page="5"></ui-pagination>

<!-- Small Minimal -->
<ui-pagination type="minimal" size="sm" total-items="80" items-per-page="10" current-page="3"></ui-pagination>

<!-- Medium Minimal -->
<ui-pagination type="minimal" size="md" total-items="80" items-per-page="10" current-page="3"></ui-pagination>

<!-- Large Minimal -->
<ui-pagination type="minimal" size="lg" total-items="80" items-per-page="10" current-page="3"></ui-pagination>`;

  dropdownCode = `<!-- Dropdown Pagination -->
<ui-pagination type="dropdown" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Compact Dropdown -->
<ui-pagination type="dropdown" compact="true" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Dropdown With Total Count -->
<ui-pagination type="dropdown" total-items="250" items-per-page="25" show-total="true" current-page="5"></ui-pagination>

<!-- Icon-Only Dropdown -->
<ui-pagination type="dropdown" icon-only="true" total-items="150" items-per-page="15" current-page="2"></ui-pagination>

<!-- Small Dropdown -->
<ui-pagination type="dropdown" size="sm" total-items="80" items-per-page="10" current-page="3"></ui-pagination>
<!-- Medium Dropdown -->
<ui-pagination type="dropdown" size="md" total-items="80" items-per-page="10" current-page="3"></ui-pagination>
<!-- Large Dropdown -->
<ui-pagination type="dropdown" size="lg" total-items="80" items-per-page="10" current-page="3"></ui-pagination>`;

  inputCode = `<!-- Input Pagination -->
<ui-pagination type="input" total-items="100" items-per-page="10" current-page="5"></ui-pagination>

<!-- Compact Input -->
<ui-pagination type="input" compact="true" total-items="100" items-per-page="10" current-page="5"></ui-pagination>

<!-- Input With Total Count -->
<ui-pagination type="input" total-items="500" items-per-page="20" show-total="true" current-page="10"></ui-pagination>

<!-- Icon-Only Input -->
<ui-pagination type="input" icon-only="true" total-items="200" items-per-page="25" current-page="3"></ui-pagination>

<!-- Small Input -->
<ui-pagination type="input" size="sm" total-items="120" items-per-page="10" current-page="4"></ui-pagination>
<!-- Medium Input -->
<ui-pagination type="input" size="md" total-items="120" items-per-page="10" current-page="4"></ui-pagination>
<!-- Large Input -->
<ui-pagination type="input" size="lg" total-items="120" items-per-page="10" current-page="4"></ui-pagination>`;

  indicatorCode = `<!-- Indicator Pagination -->
<ui-pagination type="indicator" total-items="50" items-per-page="10" current-page="3"></ui-pagination>

<!-- Without Navigation Buttons -->
<ui-pagination type="indicator" total-items="50" items-per-page="10" show-prev-next="false" current-page="2"></ui-pagination>

<!-- Primary Theme Indicator -->
<ui-pagination type="indicator" theme="primary" total-items="60" items-per-page="10" current-page="2"></ui-pagination>
<!-- Success Theme Indicator -->
<ui-pagination type="indicator" theme="success" total-items="60" items-per-page="10" current-page="3"></ui-pagination>
<!-- Danger Theme Indicator -->
<ui-pagination type="indicator" theme="danger" total-items="60" items-per-page="10" current-page="4"></ui-pagination>`;

  themesCode = `<!-- Primary Theme -->
<ui-pagination theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Success Theme -->
<ui-pagination theme="success" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Danger Theme -->
<ui-pagination theme="danger" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Warning Theme -->
<ui-pagination theme="warning" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Info Theme -->
<ui-pagination theme="info" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Default Shape (4px radius) -->
<ui-pagination shape="default" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Rounded Shape (12px radius) -->
<ui-pagination shape="rounded" theme="success" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Pill Shape (24px radius) -->
<ui-pagination shape="pill" theme="warning" total-items="100" items-per-page="10" current-page="3"></ui-pagination>`;

  sizesCode = `<!-- Small -->
<ui-pagination size="sm" total-items="50" items-per-page="10"></ui-pagination>

<!-- Medium -->
<ui-pagination size="md" total-items="50" items-per-page="10"></ui-pagination>

<!-- Large -->
<ui-pagination size="lg" total-items="50" items-per-page="10"></ui-pagination>

<!-- Outlined Variant -->
<ui-pagination variant="outlined" total-items="80" items-per-page="10" current-page="2"></ui-pagination>

<!-- Icon-Only Pagination -->
<ui-pagination icon-only="true" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Icon-Only with Dropdown -->
<ui-pagination icon-only="true" total-items="150" items-per-page="15" show-page-size="true" current-page="2"></ui-pagination>

<!-- Icon-Only with Page Input Jump -->
<ui-pagination icon-only="true" total-items="200" items-per-page="20" show-jump-to="true" show-total="true" current-page="5"></ui-pagination>`;

  featuresCode = `<!-- Keyboard Navigation Enabled -->
<ui-pagination keyboard-nav="true" theme="primary" total-items="100" items-per-page="10" current-page="5"></ui-pagination>

<!-- Keyboard Navigation Disabled -->
<ui-pagination keyboard-nav="false" total-items="100" items-per-page="10" current-page="5"></ui-pagination>

<!-- Responsive Mode (Auto-adapts) -->
<ui-pagination responsive-mode="true" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Fixed Mode (No auto-adapt) -->
<ui-pagination responsive-mode="false" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Custom Mobile Breakpoint (1024px) -->
<ui-pagination responsive-mode="true" mobile-breakpoint="1024" theme="success" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Quick Jump Enabled (Step: 5) -->
<ui-pagination quick-jump="true" quick-jump-step="5" total-items="500" items-per-page="10" current-page="15"></ui-pagination>

<!-- Custom Step Size (Step: 10) -->
<ui-pagination quick-jump="true" quick-jump-step="10" total-items="1000" items-per-page="10" current-page="25"></ui-pagination>

<!-- With Progress Bar -->
<ui-pagination show-progress="true" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Progress with Different Themes -->
<ui-pagination show-progress="true" theme="primary" total-items="100" items-per-page="10" current-page="5"></ui-pagination>
<ui-pagination show-progress="true" theme="success" total-items="100" items-per-page="10" current-page="7"></ui-pagination>
<ui-pagination show-progress="true" theme="danger" total-items="100" items-per-page="10" current-page="9"></ui-pagination>

<!-- Sticky Bottom (Default) -->
<ui-pagination sticky="true" sticky-position="bottom" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- Sticky Top -->
<ui-pagination sticky="true" sticky-position="top" total-items="100" items-per-page="10" current-page="5"></ui-pagination>

<!-- Auto-Hide (Single Page) -->
<ui-pagination auto-hide="true" total-items="5" items-per-page="10" current-page="1"></ui-pagination>

<!-- Smart Compact Mode -->
<ui-pagination smart-compact="true" smart-compact-threshold="20" total-items="500" items-per-page="10" current-page="15"></ui-pagination>

<!-- URL Sync -->
<ui-pagination url-sync="true" url-param="page" total-items="100" items-per-page="10" current-page="3"></ui-pagination>

<!-- LocalStorage Persistence -->
<ui-pagination persist-page="true" storage-key="demo-page" total-items="100" items-per-page="10" current-page="1"></ui-pagination>`;

  playgroundCode = `<ui-pagination total-items="100" items-per-page="10" current-page="1"></ui-pagination>`;
}
