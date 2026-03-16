import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmChipPlaygroundComponent } from '../../../playground/common/chip-playground/chip-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

@Component({
  selector: 'dm-chip-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmChipPlaygroundComponent,
    DemoTabsComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
    DemoHeaderComponent,
    ExampleSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chip-demo.component.html',
  styleUrl: './chip-demo.component.scss',
})
export class DmChipDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'variants', title: 'Visual Variants', icon: 'palette', iconLibrary: 'lucide' },
    { id: 'shapes-sizes', title: 'Shapes & Sizes', icon: 'ruler', iconLibrary: 'lucide' },
    { id: 'media', title: 'Icons, Avatars & Media', icon: 'image', iconLibrary: 'lucide' },
    { id: 'indicators', title: 'Badges & Counters', icon: 'alert-circle', iconLibrary: 'lucide' },
    { id: 'orientations', title: 'Vertical & Rotated', icon: 'move-vertical', iconLibrary: 'lucide' },
    { id: 'actions', title: 'Actions & States', icon: 'mouse-pointer-2', iconLibrary: 'lucide' },
    { id: 'animations', title: 'Animations', icon: 'zap', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<ui-chip label="Web Development" color="primary" removable></ui-chip>`;

  variantsCode = `<ui-chip label="Filled" variant="filled"></ui-chip>
<ui-chip label="Outlined" variant="outlined"></ui-chip>
<ui-chip label="Soft" variant="soft" color="success"></ui-chip>
<ui-chip label="Gradient" variant="gradient" color="primary"></ui-chip>
<ui-chip label="Text Only" variant="text"></ui-chip>`;

  shapesSizesCode = `<ui-chip label="Pill (Default)" shape="pill"></ui-chip>
<ui-chip label="Rounded" shape="rounded"></ui-chip>
<ui-chip label="Square" shape="square"></ui-chip>
<ui-chip label="Circle" shape="circle" icon="star" icon-library="lucide"></ui-chip>

<ui-chip label="Small" size="sm"></ui-chip>
<ui-chip label="Medium" size="md"></ui-chip>
<ui-chip label="Large" size="lg"></ui-chip>`;

  mediaCode = `<ui-chip label="Lucide Icon" icon="github" icon-library="lucide"></ui-chip>
<ui-chip label="Avatar" user-avatar="https://i.pravatar.cc/150?u=1"></ui-chip>
<ui-chip label="Image" image="https://picsum.photos/20/20"></ui-chip>`;

  indicatorsCode = `<ui-chip label="With Badge" badge="99" color="danger"></ui-chip>
<ui-chip label="With Counter" counter="5" color="warning"></ui-chip>
<ui-chip label="Messages" counter="New" variant="soft" color="info"></ui-chip>`;

  orientationsCode = `<ui-chip label="Horizontal" orientation="horizontal"></ui-chip>
<ui-chip label="Vertical" orientation="vertical" icon="move-vertical" icon-library="lucide"></ui-chip>
<ui-chip label="Vertical Text" orientation="vertical-text"></ui-chip>
<ui-chip label="Vertical Rotated" orientation="vertical-rotated"></ui-chip>`;

  actionsCode = `<ui-chip label="Clickable" clickable color="info" (chipClick)="onChipClick()"></ui-chip>
<ui-chip label="Removable" removable variant="soft" (chipRemove)="onChipRemove()"></ui-chip>
<ui-chip label="Custom Close" removable close-icon="close" (chipRemove)="onChipRemove()"></ui-chip>
<ui-chip label="Selectable" clickable selected color="primary" (chipSelect)="onChipSelect($event)"></ui-chip>
<ui-chip label="Loading" loading></ui-chip>
<ui-chip label="Disabled" disabled></ui-chip>
<ui-chip label="With Tooltip" tooltip="This is a helpful tooltip"></ui-chip>`;

  animationsCode = `<ui-chip label="Scale (Default)" animation="scale"></ui-chip>
<ui-chip label="Fade" animation="fade"></ui-chip>
<ui-chip label="Slide" animation="slide"></ui-chip>
<ui-chip label="Bounce" animation="bounce"></ui-chip>
<ui-chip label="None" animation="none"></ui-chip>`;

  onChipClick() {
    console.log('Chip clicked');
  }

  onChipRemove() {
    console.log('Chip removed');
  }

  onChipSelect(event: any) {
    console.log('Chip selection changed:', event.detail);
  }
}
