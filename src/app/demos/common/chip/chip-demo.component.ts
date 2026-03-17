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
    {
      id: 'orientations',
      title: 'Vertical & Rotated',
      icon: 'move-vertical',
      iconLibrary: 'lucide',
    },
    { id: 'actions', title: 'Actions & States', icon: 'mouse-pointer-2', iconLibrary: 'lucide' },
    { id: 'animations', title: 'Animations', icon: 'zap', iconLibrary: 'lucide' },
  ];

  playgroundCode = `<dui-chip label="Web Development" color="primary" removable></dui-chip>`;

  variantsCode = `<dui-chip label="Filled" variant="filled"></dui-chip>
<dui-chip label="Outlined" variant="outlined"></dui-chip>
<dui-chip label="Soft" variant="soft" color="success"></dui-chip>
<dui-chip label="Gradient" variant="gradient" color="primary"></dui-chip>
<dui-chip label="Text Only" variant="text"></dui-chip>`;

  shapesSizesCode = `<dui-chip label="Pill (Default)" shape="pill"></dui-chip>
<dui-chip label="Rounded" shape="rounded"></dui-chip>
<dui-chip label="Square" shape="square"></dui-chip>
<dui-chip label="Circle" shape="circle" icon="star" icon-library="lucide"></dui-chip>

<dui-chip label="Small" size="sm"></dui-chip>
<dui-chip label="Medium" size="md"></dui-chip>
<dui-chip label="Large" size="lg"></dui-chip>`;

  mediaCode = `<dui-chip label="Lucide Icon" icon="github" icon-library="lucide"></dui-chip>
<dui-chip label="Avatar" user-avatar="https://i.pravatar.cc/150?u=1"></dui-chip>
<dui-chip label="Image" image="https://picsum.photos/20/20"></dui-chip>`;

  indicatorsCode = `<dui-chip label="With Badge" badge="99" color="danger"></dui-chip>
<dui-chip label="With Counter" counter="5" color="warning"></dui-chip>
<dui-chip label="Messages" counter="New" variant="soft" color="info"></dui-chip>`;

  orientationsCode = `<dui-chip label="Horizontal" orientation="horizontal"></dui-chip>
<dui-chip label="Vertical" orientation="vertical" icon="move-vertical" icon-library="lucide"></dui-chip>
<dui-chip label="Vertical Text" orientation="vertical-text"></dui-chip>
<dui-chip label="Vertical Rotated" orientation="vertical-rotated"></dui-chip>`;

  actionsCode = `<dui-chip label="Clickable" clickable color="info" (chipClick)="onChipClick()"></dui-chip>
<dui-chip label="Removable" removable variant="soft" (chipRemove)="onChipRemove()"></dui-chip>
<dui-chip label="Custom Close" removable close-icon="close" (chipRemove)="onChipRemove()"></dui-chip>
<dui-chip label="Selectable" clickable selected color="primary" (chipSelect)="onChipSelect($event)"></dui-chip>
<dui-chip label="Loading" loading></dui-chip>
<dui-chip label="Disabled" disabled></dui-chip>
<dui-chip label="With Tooltip" tooltip="This is a helpful tooltip"></dui-chip>`;

  animationsCode = `<dui-chip label="Scale (Default)" animation="scale"></dui-chip>
<dui-chip label="Fade" animation="fade"></dui-chip>
<dui-chip label="Slide" animation="slide"></dui-chip>
<dui-chip label="Bounce" animation="bounce"></dui-chip>
<dui-chip label="None" animation="none"></dui-chip>`;

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
