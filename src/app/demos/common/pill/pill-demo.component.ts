import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';

import { DmPillPlaygroundComponent } from '../../../playground/common/pill-playground/pill-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-pill-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
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

  playgroundCode = `<dui-pill label="New Tag" variant="soft" color="primary"></dui-pill>`;

  variantsCode = `<dui-pill label="Filled" variant="filled"></dui-pill>
<dui-pill label="Outlined" variant="outlined"></dui-pill>
<dui-pill label="Soft" variant="soft" color="success"></dui-pill>
<dui-pill label="Bordered" variant="bordered" color="danger"></dui-pill>
<dui-pill label="Gradient" variant="gradient" gradient="blue-purple"></dui-pill>`;

  colorsCode = `<dui-pill label="Primary" color="primary"></dui-pill>
<dui-pill label="Success" color="success"></dui-pill>
<dui-pill label="Custom Color" custom-color="#ff00ff" custom-text-color="#ffffff"></dui-pill>

<dui-pill label="Small" size="sm"></dui-pill>
<dui-pill label="Medium" size="md"></dui-pill>
<dui-pill label="Large" size="lg"></dui-pill>`;

  mediaCode = `<dui-pill label="Start Icon" icon="star" icon-library="lucide"></dui-pill>
<dui-pill label="End Icon" icon="check-circle" icon-library="lucide" icon-position="end"></dui-pill>
<dui-pill label="John Doe" avatar="https://i.pravatar.cc/150?u=1"></dui-pill>
<dui-pill label="Analytics" icon="bar-chart" icon-library="lucide" counter="24"></dui-pill>`;

  orientationsCode = `<dui-pill label="Horizontal" orientation="horizontal"></dui-pill>
<dui-pill label="Vertical" orientation="vertical" icon="move-vertical" icon-library="lucide"></dui-pill>
<dui-pill label="Vertical Text" orientation="vertical-text"></dui-pill>
<dui-pill label="Vertical Rotated" orientation="vertical-rotated"></dui-pill>`;

  actionsCode = `<dui-pill label="Clickable" clickable (pillClick)="onPillClick()"></dui-pill>
<dui-pill label="Selectable" clickable selected (pillSelect)="onPillSelect($event)"></dui-pill>
<dui-pill label="Removable" removable (pillRemove)="onPillRemove()"></dui-pill>
<dui-pill label="Loading" loading></dui-pill>
<dui-pill label="Disabled" disabled></dui-pill>
<dui-pill label="With Tooltip" tooltip="Important information!"></dui-pill>`;

  animationsCode = `<dui-pill label="Scale" animation="scale"></dui-pill>
<dui-pill label="Fade" animation="fade"></dui-pill>
<dui-pill label="Slide" animation="slide"></dui-pill>
<dui-pill label="None" animation="none"></dui-pill>`;

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
