import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { DmSnackbarPlaygroundComponent } from '../../../playground/common/snackbar-playground/snackbar-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ExampleSectionComponent } from '../../../shared/components/example-section/example-section.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { BaseDemoComponent } from '../../../shared/base-demo.component';

import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'dm-snackbar-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    DmSnackbarPlaygroundComponent,
    DemoTabsComponent,
    ExampleSectionComponent,
    DemoHeaderComponent,
    ComponentDocumentationComponent,
    DemoSidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './snackbar-demo.component.html',
  styleUrl: './snackbar-demo.component.scss',
})
export class DmSnackbarDemoComponent extends BaseDemoComponent {
  @ViewChild('snackbarGlobal') snackbarGlobal!: ElementRef;
  @ViewChild('snackbarTopLeft') snackbarTopLeft!: ElementRef;
  @ViewChild('snackbarTopCenter') snackbarTopCenter!: ElementRef;
  @ViewChild('snackbarBottomLeft') snackbarBottomLeft!: ElementRef;
  @ViewChild('snackbarBottomCenter') snackbarBottomCenter!: ElementRef;
  @ViewChild('snackbarBottomRight') snackbarBottomRight!: ElementRef;

  exampleVariants = [
    { id: 'types', title: 'Types', icon: '📊' },
    { id: 'positions', title: 'Positions', icon: '📍' },
    { id: 'card-stack', title: 'Card Stacking', icon: '📚' },
  ];

  typesCode = `// Add different notification types
snackbar.add({ type: 'success', title: 'Saved!', message: 'Project pushed to main.' });
snackbar.add({ type: 'error',   title: 'Failed', message: 'Unable to connect.' });
snackbar.add({ type: 'warning', title: 'Warning', message: 'Memory usage is high.' });
snackbar.add({ type: 'info',    title: 'Info', message: 'You have a new invite.' });`;

  positionsCode = `<!-- Six position options -->
<ui-snackbar position="top-right"></ui-snackbar>
<ui-snackbar position="top-center"></ui-snackbar>
<ui-snackbar position="top-left"></ui-snackbar>
<ui-snackbar position="bottom-right"></ui-snackbar>
<ui-snackbar position="bottom-center"></ui-snackbar>
<ui-snackbar position="bottom-left"></ui-snackbar>`;

  cardStackCode = `<!-- Enable visual stack mode -->
<ui-snackbar card-stack position="bottom-right" max-visible="5"></ui-snackbar>`;

  async notify(type: string) {
    await this.notifyAt(type, 'top-right');
  }

  async notifyAt(type: string, position: string) {
    const refMap: Record<string, ElementRef> = {
      'top-right': this.snackbarGlobal,
      'top-left': this.snackbarTopLeft,
      'top-center': this.snackbarTopCenter,
      'bottom-left': this.snackbarBottomLeft,
      'bottom-center': this.snackbarBottomCenter,
      'bottom-right': this.snackbarBottomRight,
    };
    const el = refMap[position]?.nativeElement;
    if (el && typeof el.add === 'function') {
      const titles: any = {
        success: 'Successfully Saved',
        error: 'Update Failed',
        warning: 'Memory Warning',
        info: 'New Message',
      };
      const messages: any = {
        success: 'Project changes pushed to main.',
        error: 'Unable to connect to cloud.',
        warning: 'Memory usage is reaching high levels.',
        info: 'You have been invited to a new workspace.',
      };
      await el.add({ type, title: titles[type], message: messages[type], duration: 4000 });
    }
  }
}
