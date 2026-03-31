import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmPillPlaygroundComponent } from '../../../playground/common/pill-playground/pill-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';

@Component({
  selector: 'dm-pill-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    ExampleSectionComponent,
    
    DmPillPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pill-demo.component.html',
  styleUrl: './pill-demo.component.scss',
})
export class DmPillDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'colors', title: 'Colors & Gradients', icon: 'droplet', iconLibrary: 'lucide' },
    { id: 'media', title: 'Icons & Avatars', icon: 'user', iconLibrary: 'lucide' },
    { id: 'orientations', title: 'Vertical Layouts', icon: 'move-vertical', iconLibrary: 'lucide' },
    { id: 'actions', title: 'Actions & States', icon: 'zap', iconLibrary: 'lucide' },
    { id: 'animations', title: 'Animations', icon: 'sparkles', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<ui-pill label="New Tag" variant="soft" color="primary"></ui-pill>`;

  variantsCode = `<ui-pill label="Filled" variant="filled"></ui-pill>
<ui-pill label="Outlined" variant="outlined"></ui-pill>
<ui-pill label="Soft" variant="soft" color="success"></ui-pill>
<ui-pill label="Bordered" variant="bordered" color="danger"></ui-pill>
<ui-pill label="Gradient" variant="gradient" gradient="blue-purple"></ui-pill>`;

  colorsCode = `<ui-pill label="Primary" color="primary"></ui-pill>
<ui-pill label="Success" color="success"></ui-pill>
<ui-pill label="Custom Color" custom-color="#ff00ff" custom-text-color="#ffffff"></ui-pill>

<ui-pill label="Small" size="sm"></ui-pill>
<ui-pill label="Medium" size="md"></ui-pill>
<ui-pill label="Large" size="lg"></ui-pill>`;

  mediaCode = `<ui-pill label="Start Icon" icon="star" icon-library="lucide"></ui-pill>
<ui-pill label="End Icon" icon="check-circle" icon-library="lucide" icon-position="end"></ui-pill>
<ui-pill label="John Doe" avatar="https://i.pravatar.cc/150?u=1"></ui-pill>
<ui-pill label="Analytics" icon="bar-chart" icon-library="lucide" counter="24"></ui-pill>`;

  orientationsCode = `<ui-pill label="Horizontal" orientation="horizontal"></ui-pill>
<ui-pill label="Vertical" orientation="vertical" icon="move-vertical" icon-library="lucide"></ui-pill>
<ui-pill label="Vertical Text" orientation="vertical-text"></ui-pill>
<ui-pill label="Vertical Rotated" orientation="vertical-rotated"></ui-pill>`;

  actionsCode = `<ui-pill label="Clickable" clickable (pillClick)="onPillClick()"></ui-pill>
<ui-pill label="Selectable" clickable selected (pillSelect)="onPillSelect($event)"></ui-pill>
<ui-pill label="Removable" removable (pillRemove)="onPillRemove()"></ui-pill>
<ui-pill label="Loading" loading></ui-pill>
<ui-pill label="Disabled" disabled></ui-pill>
<ui-pill label="With Tooltip" tooltip="Important information!"></ui-pill>`;

  animationsCode = `<ui-pill label="Scale" animation="scale"></ui-pill>
<ui-pill label="Fade" animation="fade"></ui-pill>
<ui-pill label="Slide" animation="slide"></ui-pill>
<ui-pill label="None" animation="none"></ui-pill>`;

  onPillClick() {
    console.log('Pill clicked');
  }

  onPillRemove() {
    console.log('Pill removed');
  }

  onPillSelect(ev: any) {
    console.log('Pill selected:', ev.detail);
  }
}
