import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmTagPlaygroundComponent } from '../../../playground/common/tag-playground/tag-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-tag-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmTagPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag-demo.component.html',
  styleUrl: './tag-demo.component.scss',
})
export class DmTagDemoComponent extends BaseDemoComponent implements OnInit {
  variants = [
    { id: 'variants', title: 'Variants', icon: 'shapes',
      iconLibrary: 'lucide', color: '#3b82f6' },
    { id: 'sizes', title: 'Sizes & Shapes', icon: 'maximize',
      iconLibrary: 'lucide', color: '#10b981' },
    { id: 'media', title: 'Media & Icons', icon: 'circle',
      iconLibrary: 'lucide', color: '#f59e0b' },
    { id: 'interactive', title: 'Interactive', icon: 'mouse-pointer-click',
      iconLibrary: 'lucide', color: '#8b5cf6' },
    { id: 'removable', title: 'Removable', icon: 'circle',
      iconLibrary: 'lucide', color: '#ec4899' },
    { id: 'visuals', title: 'Visual Enhancements', icon: 'eye',
      iconLibrary: 'lucide', color: '#06b6d4' },
  ];

  get exampleVariants() {
    return this.variants;
  }

  playgroundCode = `<ui-tag label="New" color="primary" variant="light" rounded></ui-tag>`;

  variantsCode = `<!-- Default -->
<ui-tag label="Default"></ui-tag>
<!-- Light (soft background) -->
<ui-tag label="Success" color="success" variant="light"></ui-tag>
<!-- Outlined border only -->
<ui-tag label="Error" color="danger" variant="outlined"></ui-tag>
<!-- Solid filled -->
<ui-tag label="Active" color="primary" variant="filled" rounded></ui-tag>
<!-- Dot indicator -->
<ui-tag label="New" variant="dot" color="primary"></ui-tag>`;

  sizesCode = `<!-- Sizes -->
<ui-tag label="Small" color="primary" size="sm"></ui-tag>
<ui-tag label="Medium" color="primary" size="md"></ui-tag>
<ui-tag label="Large" color="primary" size="lg"></ui-tag>

<!-- Shapes -->
<ui-tag label="Square" color="info" variant="filled"></ui-tag>
<ui-tag label="Rounded" color="info" variant="filled" rounded></ui-tag>`;

  mediaCode = `<!-- Icon at start -->
<ui-tag label="Premium" icon="star" color="warning" variant="light"></ui-tag>
<ui-tag label="Verified" icon="check-circle" color="success" variant="light" rounded></ui-tag>
<ui-tag label="Danger" icon="alert-triangle" color="danger" variant="filled"></ui-tag>

<!-- Icon at end -->
<ui-tag label="Next Page" icon="arrow-right" icon-pos="end" color="primary"></ui-tag>

<!-- Image logo -->
<ui-tag label="Stencil" image="https://stenciljs.com/assets/img/logo.png" color="primary" variant="light"></ui-tag>

<!-- User avatar -->
<ui-tag label="John Doe" user-avatar="https://i.pravatar.cc/150?u=1" variant="light" rounded></ui-tag>
<ui-tag label="Alice Smith" user-avatar="https://i.pravatar.cc/150?u=2" color="info" variant="outlined" rounded></ui-tag>`;

  interactiveCode = `<!-- Checkable tags (selectable) -->
<ui-tag label="Selectable 1" checkable color="primary"></ui-tag>
<ui-tag label="Selectable 2" checkable color="success"></ui-tag>
<ui-tag label="Pre-checked" checkable checked color="warning" variant="filled"></ui-tag>`;

  removableCode = `<!-- Removable tags -->
<ui-tag label="JavaScript" removable color="primary" variant="light"></ui-tag>
<ui-tag label="TypeScript" removable color="info" variant="light" rounded></ui-tag>
<ui-tag label="Angular" removable color="danger" variant="outlined"></ui-tag>`;

  visualsCode = `<!-- With counter badge -->
<ui-tag label="Messages" counter="5" color="danger" variant="light"></ui-tag>
<ui-tag label="Notifications" counter="12" color="warning" variant="filled"></ui-tag>

<!-- Combined features -->
<ui-tag label="Full Feature" icon="star" color="primary" variant="filled"
  rounded counter="3" removable></ui-tag>`;

  ngOnInit() {}
}
