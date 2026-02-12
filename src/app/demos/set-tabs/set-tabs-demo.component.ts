import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPlaygroundComponent } from './components/tabs-playground/tabs-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-tabs-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TabsPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-tabs-demo.component.html',
  styleUrl: './set-tabs-demo.component.scss',
})
export class SetTabsDemoComponent implements OnInit {
  playgroundCode = `<app-tabs>
  <app-tab label="Tab 1">
    Content for tab 1
  </app-tab>
  <app-tab label="Tab 2">
    Content for tab 2
  </app-tab>
</app-tabs>`;

  ngOnInit() {}
}
