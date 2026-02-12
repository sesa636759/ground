import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipPlaygroundComponent } from './components/tooltip-playground/tooltip-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-tooltip-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TooltipPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tooltip-demo.component.html',
  styleUrl: './set-tooltip-demo.component.scss',
})
export class SetTooltipDemoComponent implements OnInit {
  playgroundCode = `<app-tooltip
  content="Tooltip text"
  position="top"
>
  <ui-button label="Hover me"></ui-button>
</app-tooltip>`;

  ngOnInit() {}
}
