import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-tabs',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './demo-tabs.component.html',
  styleUrl: './demo-tabs.component.scss',
})
export class DemoTabsComponent {
  active: string = 'examples';

  onTabChange(event: any) {
    // Handle CustomEvent details which might be direct value or object
    const detail = event.detail !== undefined ? event.detail : event;
    this.active =
      typeof detail === 'object' && detail !== null
        ? detail.id || detail.value || detail.tabId || detail
        : detail;
  }
}
