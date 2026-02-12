import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { ChipPlaygroundComponent } from './components/chip-playground/chip-playground.component';

@Component({
  selector: 'app-app-chip-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeBlockComponent, ChipPlaygroundComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-chip-demo.component.html',
  styleUrl: './app-chip-demo.component.scss',
})
export class AppChipDemoComponent {
  variants = [
    { id: 'playground', name: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'variants', name: 'Variants', icon: '🎨', color: '#3b82f6' },
    { id: 'shapes-sizes', name: 'Shapes & Sizes', icon: '📏', color: '#10b981' },
    { id: 'avatars-icons', name: 'Avatars & Icons', icon: '👤', color: '#f59e0b' },
    { id: 'actions', name: 'Actions', icon: '⚡', color: '#ec4899' },
  ];

  playgroundCode = `<ui-chip label="Web Development" color="primary" removable></ui-chip>`;

  variantsCode = `<!-- Filled (Default) -->
<ui-chip label="Filled" variant="filled"></ui-chip>
<!-- Outlined -->
<ui-chip label="Outlined" variant="outlined"></ui-chip>
<!-- Soft -->
<ui-chip label="Soft" variant="soft" color="success"></ui-chip>
<!-- Gradient -->
<ui-chip label="Gradient" variant="gradient"></ui-chip>
<!-- Text -->
<ui-chip label="Text Only" variant="text"></ui-chip>`;

  shapesSizesCode = `<!-- Shapes -->
<ui-chip label="Pill" shape="pill"></ui-chip>
<ui-chip label="Rounded" shape="rounded"></ui-chip>
<ui-chip label="Square" shape="square"></ui-chip>
<ui-chip label="Circle" shape="circle" icon="🚀"></ui-chip>

<!-- Sizes -->
<ui-chip label="Small" size="sm"></ui-chip>
<ui-chip label="Medium" size="md"></ui-chip>
<ui-chip label="Large" size="lg"></ui-chip>`;

  avatarsIconsCode = `<ui-chip label="React" icon="⚛️"></ui-chip>
<ui-chip label="John Doe" user-avatar="https://i.pravatar.cc/150?u=john"></ui-chip>
<ui-chip label="Status" badge="99" color="danger"></ui-chip>
<ui-chip label="In Progress" counter="5" color="warning"></ui-chip>`;

  actionsCode = `<ui-chip label="Clickable" clickable color="info"></ui-chip>
<ui-chip label="Removable" removable variant="soft"></ui-chip>
<ui-chip label="Selected" selected color="primary"></ui-chip>
<ui-chip label="Loading" loading></ui-chip>
<ui-chip label="Disabled" disabled></ui-chip>`;

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
