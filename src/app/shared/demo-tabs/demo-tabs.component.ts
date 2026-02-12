import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-tabs',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./demo-tabs.component.scss'],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        overflow: hidden;
      }
    `,
  ],
  template: `
    <div class="demo-tabs">
      <div class="tab-bar">
        <button
          type="button"
          [class.active]="active === 'playground'"
          (click)="active = 'playground'"
        >
          <span class="material-icons">play_circle</span>
          Playground
        </button>
        <button type="button" [class.active]="active === 'examples'" (click)="active = 'examples'">
          <span class="material-icons">dashboard</span>
          Examples
        </button>
        <button type="button" [class.active]="active === 'docs'" (click)="active = 'docs'">
          <span class="material-icons">description</span>
          Documentation
        </button>
      </div>

      <div class="tab-content js-scroll-container">
        <div *ngIf="active === 'examples'" class="tab-pane">
          <ng-content select="[slot=examples]"></ng-content>
        </div>
        <div *ngIf="active === 'playground'" class="tab-pane">
          <ng-content select="[slot=playground]"></ng-content>
        </div>

        <div *ngIf="active === 'docs'" class="tab-pane">
          <ng-content select="[slot=docs]"></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class DemoTabsComponent {
  active: 'playground' | 'examples' | 'docs' = 'examples';
}
