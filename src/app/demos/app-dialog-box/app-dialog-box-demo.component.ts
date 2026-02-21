import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogBoxPlaygroundComponent } from './components/dialog-box-playground/dialog-box-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../shared/base-demo.component';

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
    ComponentDocumentationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app-dialog-box-demo.component.html',
  styleUrl: './app-dialog-box-demo.component.scss',
})
export class AppDialogBoxDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'types', title: 'Modal Modes', icon: '🔳' },
    { id: 'interactions', title: 'Interactions', icon: '🖱️' },
  ];

  anchorLinks = JSON.stringify([
    { id: 'types', label: 'Modal Modes', target: 'types', icon: '🔳' },
    { id: 'interactions', label: 'Interactions', target: 'interactions', icon: '🖱️' },
  ]);

  dialogVisible = {
    standard: false,
    modal: false,
    draggable: false,
  };

  playgroundCode = `<ui-dialog-box header="Title" [visible]="visible" (uiHide)="visible=false">
  Content...
</ui-dialog-box>`;

  typesCode = `<!-- Non-Modal (Overlay) -->
<ui-dialog-box [modal]="false" [visible]="true"></ui-dialog-box>

<!-- Full Modal -->
<ui-dialog-box modal [visible]="true"></ui-dialog-box>`;

  interactionsCode = `<!-- Draggable & Resizable -->
<ui-dialog-box draggable resizable [visible]="true"></ui-dialog-box>`;

  toggle(id: string) {
    this.dialogVisible[id as keyof typeof this.dialogVisible] =
      !this.dialogVisible[id as keyof typeof this.dialogVisible];
  }
}
