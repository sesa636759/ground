import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogBoxPlaygroundComponent } from './components/dialog-box-playground/dialog-box-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';

@Component({
  selector: 'app-app-dialog-box-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogBoxPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-dialog-box-demo.component.html',
  styleUrl: './app-dialog-box-demo.component.scss',
})
export class AppDialogBoxDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'basic', title: 'Basic Dialog', icon: '📝' },
    { id: 'slots', title: 'Custom Slots', icon: '🧩' },
    { id: 'sizes', title: 'Predefined Sizes', icon: '📏' },
    { id: 'variants', title: 'Variants & Status', icon: '🎨' },
    { id: 'positions', title: 'Positions', icon: '📍' },
    { id: 'scroll', title: 'Scroll Behaviors', icon: '📜' },
    { id: 'advanced', title: 'Advanced Behaviors', icon: '🛠️' },
    { id: 'premium', title: 'Premium Capabilities', icon: '💎' },
  ];

  anchorLinks = JSON.stringify(
    this.exampleVariants.map((v) => ({
      id: v.id,
      label: v.title,
      target: v.id,
      icon: v.icon,
    })),
  );

  dialogVisible: { [key: string]: boolean } = {};

  toggle(id: string, state?: boolean) {
    if (state !== undefined) {
      this.dialogVisible[id] = state;
    } else {
      this.dialogVisible[id] = !this.dialogVisible[id];
    }
  }

  // --- Code Snippets ---
  basicCode = `<!-- Basic Dialog -->
<ui-button label="Open Basic Dialog" variant="primary" (click)="toggle('basic')"></ui-button>

<ui-dialog-box 
  [open]="dialogVisible['basic']" 
  (dialogClosed)="toggle('basic', false)"
  icon-library="lucide">
  <h3 slot="header">Welcome</h3>
  <div><p>This is a basic dialog with header, content, and footer sections.</p></div>
  <div slot="footer">
    <ui-button label="Close" variant="secondary" (click)="toggle('basic', false)"></ui-button>
    <ui-button label="Confirm" variant="primary" (click)="toggle('basic', false)"></ui-button>
  </div>
</ui-dialog-box>`;

  slotsCode = `<!-- Custom Slots Dialog -->
<ui-dialog-box 
  [open]="dialogVisible['slots']" 
  (dialogClosed)="toggle('slots', false)"
  width="500px" icon-library="lucide">
  <div slot="header" style="display:flex; align-items:center; gap:8px;">
    <ui-icon name="palette" library="lucide" size="24px" style="color: #10b981;"></ui-icon>
    <div>
      <h3 style="margin:0; color:#10b981; font-size:18px;">Custom Header</h3>
      <span style="font-size:12px; color:#666;">With subtitle</span>
    </div>
  </div>
  <button slot="header-actions" title="Star" style="background:transparent; border:none; cursor:pointer;">
    <ui-icon name="star" library="lucide" size="16px"></ui-icon>
  </button>
  <div style="padding:16px; background:#f0fdf4; border:1px dashed #10b981; border-radius:6px;">
    <h4 style="margin-top:0;">Slot Content Area</h4>
    <p>This content is injected via the default slot. It is fully customizable.</p>
  </div>
  <div slot="footer" style="display:flex; justify-content:space-between; width:100%; align-items:center;">
    <span style="font-size:12px; color:#6b7280;">Auto-saved: 2m ago</span>
    <div style="display:flex; gap:8px;">
      <ui-button label="Cancel" variant="secondary" (click)="toggle('slots', false)"></ui-button>
      <ui-button label="Save" variant="success" (click)="toggle('slots', false)"></ui-button>
    </div>
  </div>
</ui-dialog-box>`;

  sizesCode = `<!-- Size Variants -->
<ui-dialog-box [open]="dialogVisible['sXS']" size="xs" dialog-title="Size XS (320px)"><div>Content</div></ui-dialog-box>
<ui-dialog-box [open]="dialogVisible['sSM']" size="sm" dialog-title="Size SM (480px)"><div>Content</div></ui-dialog-box>
<ui-dialog-box [open]="dialogVisible['sMD']" size="md" dialog-title="Size MD (768px)"><div>Content</div></ui-dialog-box>
<ui-dialog-box [open]="dialogVisible['sLG']" size="lg" dialog-title="Size LG (1024px)"><div>Content</div></ui-dialog-box>
<ui-dialog-box [open]="dialogVisible['sXL']" size="xl" dialog-title="Size XL (1280px)"><div>Content</div></ui-dialog-box>
<ui-dialog-box [open]="dialogVisible['sFill']" size="fill" dialog-title="Fill (90% viewport)"><div>Content</div></ui-dialog-box>`;

  variantsCode = `<!-- Dialog Variants & Status -->
<ui-dialog-box [open]="dialogVisible['vInfo']" variant="filled" status="info" dialog-title="Info"><div><p>Info content</p></div></ui-dialog-box>
<ui-dialog-box [open]="dialogVisible['vSuccess']" variant="filled" status="success" dialog-title="Success"><div><p>Success content</p></div></ui-dialog-box>
<ui-dialog-box [open]="dialogVisible['vWarning']" variant="filled" status="warning" dialog-title="Warning"><div><p>Warning content</p></div></ui-dialog-box>
<ui-dialog-box [open]="dialogVisible['vError']" variant="filled" status="error" dialog-title="Error"><div><p>Error content</p></div></ui-dialog-box>`;

  positionsCode = `<!-- Positions -->
<ui-dialog-box position="center" dialog-title="Center" width="400px"><div>Content</div></ui-dialog-box>
<ui-dialog-box position="top" dialog-title="Top" width="400px"><div>Content</div></ui-dialog-box>
<ui-dialog-box position="bottom" dialog-title="Bottom" width="400px"><div>Content</div></ui-dialog-box>
<ui-dialog-box position="right" dialog-title="Right Side" width="400px" height="100vh"><div>Side Panel Style</div></ui-dialog-box>
<ui-dialog-box position="top-right" dialog-title="Top Right" width="400px"><div>Content</div></ui-dialog-box>`;

  scrollCode = `<!-- Scroll Behaviors -->
<ui-dialog-box [open]="dialogVisible['sPaper']" scroll-behavior="paper" dialog-title="Paper Scroll (Inside)" width="400px">
    <div>... Long Content ...</div>
</ui-dialog-box>

<ui-dialog-box [open]="dialogVisible['sWindow']" scroll-behavior="body" dialog-title="Body Scroll (Window)" width="400px">
    <div>... Long Content ...</div>
</ui-dialog-box>`;

  advancedCode = `<!-- Advanced Behaviors -->
<ui-dialog-box [open]="dialogVisible['aStatic']" backdrop="static" dialog-title="Static Backdrop">
    <div><p>Try clicking outside. I won't close!</p></div>
</ui-dialog-box>

<ui-dialog-box [open]="dialogVisible['aDrag']" is-draggable dialog-title="Draggable Dialog">
    <div><p>Grab the header to move me around.</p></div>
</ui-dialog-box>

<ui-dialog-box [open]="dialogVisible['aResize']" resizable dialog-title="Resizable Dialog">
    <div><p>Grab the bottom-right corner to resize me.</p></div>
</ui-dialog-box>`;

  premiumCode = `<!-- Animation Dialogs -->
<ui-dialog-box [open]="dialogVisible['anScale']" animation="scale" dialog-title="Scale Animation" width="400px">
   <div>Standard modern dialog entrance.</div>
</ui-dialog-box>

<ui-dialog-box [open]="dialogVisible['anSlideR']" animation="slide-right" position="right" height="100vh" dialog-title="Side Drawer">
   <div>Moves in from the side.</div>
</ui-dialog-box>

<!-- Widget Dialog (Persistent Notepad) -->
<ui-dialog-box [open]="dialogVisible['wNote']" dialog-title="📝 Sticky Notes" backdrop="none" is-draggable resizable keep-mounted width="300px" height="300px">
   <div style="height: 100%; display: flex; flex-direction: column;">
      <textarea placeholder="Type your notes here... I won't lose them if you close me!" style="flex: 1; border: none; outline: none; resize: none; width: 100%; padding: 4px;"></textarea>
   </div>
</ui-dialog-box>`;
}
