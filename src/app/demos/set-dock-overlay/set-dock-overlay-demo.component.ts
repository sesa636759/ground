import { DemoTabsComponent } from '../../shared/demo-tabs/demo-tabs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DockOverlayPlaygroundComponent } from './components/dock-overlay-playground/dock-overlay-playground.component';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-set-dock-overlay-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, DockOverlayPlaygroundComponent, CodeBlockComponent, DemoTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-dock-overlay-demo.component.html',
  styleUrl: './set-dock-overlay-demo.component.scss',
})
export class SetDockOverlayDemoComponent implements OnInit {
  playgroundCode = `<app-dock-overlay
  [position]="bottom"
  [height]="300"
></app-dock-overlay>`;

  ngOnInit() {}
}
