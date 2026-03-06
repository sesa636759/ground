import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BaseDemoComponent } from '../../shared/base-demo.component';
import { PLAYGROUND_IMPORTS } from '../../shared/components/app-playground/playground.constants';
import { AppInputValueAccessorDirective } from '../../directives/ui-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../directives/ui-checkbox-value-accessor.directive';
import { KnobPlaygroundComponent } from './components/knob-playground/knob-playground.component';
import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../shared/components/demo-header/demo-header.component';
import { DemoSidebarComponent } from '../../shared/components/demo-sidebar/demo-sidebar.component';

@Component({
  selector: 'dm-knob-demo',
  standalone: true,
  imports: [
    ...PLAYGROUND_IMPORTS,
    KnobPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './knob-demo.component.html',
  styleUrl: './knob-demo.component.scss',
})
export class DmKnobDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: 'ðŸŽ®', color: '#8b5cf6' },
    { id: 'styles', title: 'Visual Styles', icon: 'ðŸŽ¨', color: '#3b82f6' },
    { id: 'readonly', title: 'States', icon: 'ðŸ”’', color: '#10b981' },
  ];

  playgroundCode = `<ui-knob [value]="50" [size]="150" value-color="#3b82f6"></ui-knob>`;

  stylesCode = `<!-- Custom Colors & Stroke -->
<ui-knob value-color="#10b981" [stroke-width]="20"></ui-knob>

<!-- Small Compact Knob -->
<ui-knob [size]="80" [show-value]="false"></ui-knob>`;

  readonlyCode = `<!-- Readonly Display -->
<ui-knob [value]="75" readonly></ui-knob>`;
}

