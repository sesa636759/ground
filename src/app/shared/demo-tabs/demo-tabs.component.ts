import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pg-demo-tabs',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './demo-tabs.component.html',
  styleUrl: './demo-tabs.component.scss',
})
export class DemoTabsComponent {
  active = signal('playground');
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Tab definitions passed to <dui-tabs [items]="tabItems"> */
  readonly tabItems = [
    {
      id: 'playground',
      title: 'Playground',
      icon: 'gamepad-2',
      iconLibrary: 'lucide',
      useSlot: true,
      slot: 'playground',
      actions: true,
    },
    {
      id: 'examples',
      title: 'Examples',
      icon: 'layers',
      iconLibrary: 'lucide',
      useSlot: true,
      slot: 'examples',
      actions: true,
    },
    {
      id: 'docs',
      title: 'Documentation',
      icon: 'book-open',
      iconLibrary: 'lucide',
      useSlot: true,
      slot: 'docs',
      actions: true,
    },
  ];

  onTabChange(event: any) {
    // ui-tabs emits { tabId: previousTab, activeTab: newTab }
    const detail = event.detail !== undefined ? event.detail : event;

    let newValue: string;
    if (typeof detail === 'object' && detail !== null) {
      // activeTab holds the newly selected tab id; tabId holds the previous one
      newValue = detail.activeTab || detail.value || detail.id || detail.tabId || detail;
    } else {
      newValue = detail;
    }

    if (typeof newValue === 'string' && newValue) {
      this.active.set(newValue);
    } else {
      console.warn('Invalid tab value received: ', newValue);
    }
  }

  handleTabEdit(event: any) {
    console.log('Tab Edit action:', event.detail);
    // Add logic for editing tab...
  }

  handleTabOpenPanel(event: any) {
    console.log('Tab Open Panel action:', event.detail);
    // Add logic for opening panel...
  }

  handleTabDelete(event: any) {
    console.log('Tab Delete action:', event.detail);
    // Add logic for deleting tab...
  }
}
