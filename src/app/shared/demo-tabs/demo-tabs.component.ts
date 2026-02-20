import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, signal } from '@angular/core';
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
  active = signal('examples');
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

  onTabChange(event: any) {
    // Handle CustomEvent details which might be direct value or object
    const detail = event.detail !== undefined ? event.detail : event;

    let newValue: string;
    if (typeof detail === 'object' && detail !== null) {
      // Prioritize activeTab (from ui-tabs) or value (from app-tab-stack)
      // tabId in ui-tabs represents the previous tab, so we should check for activeTab first
      newValue = detail.activeTab || detail.value || detail.id || detail.tabId || detail;
    } else {
      newValue = detail;
    }

    if (typeof newValue === 'string' && newValue) {
      this.active.set(newValue);
    } else {
      console.warn('Invalid tab value received:', newValue);
    }
  }
}
