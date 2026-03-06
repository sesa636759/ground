import { AppInputValueAccessorDirective } from '../../../../directives/ui-input-value-accessor.directive';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../../shared/components/app-playground/playground.constants';

import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { BasePlaygroundComponent } from '../../../../shared/components/app-playground/base-playground.component';

@Component({
  selector: 'app-modern-sidebar-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    ...PLAYGROUND_IMPORTS,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modern-sidebar-playground.component.html',
  styleUrl: './modern-sidebar-playground.component.scss',
})
export class ModernSidebarPlaygroundComponent
  extends BasePlaygroundComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('sidebarElement') sidebarElement!: ElementRef;

  // Playground State
  pgConfig = this.getDefaultConfig();

  override pgAccordionItems = [
    { id: 'brand', title: 'Brand & Identity', icon: 'award', iconLibrary: 'lucide' },
    { id: 'user', title: 'User Profile', icon: 'user', iconLibrary: 'lucide' },
    { id: 'style', title: 'Visual Style', icon: 'palette', iconLibrary: 'lucide' },
  ];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  accentColorOptions = [
    { label: 'Indigo', value: '#6366f1' },
    { label: 'Blue', value: '#3b82f6' },
    { label: 'Green', value: '#10b981' },
    { label: 'Teal', value: '#14b8a6' },
    { label: 'Purple', value: '#8b5cf6' },
    { label: 'Pink', value: '#ec4899' },
    { label: 'Orange', value: '#f59e0b' },
    { label: 'Red', value: '#ef4444' },
  ];

  sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-home' },
    { id: 'analytics', label: 'Analytics', icon: 'fas fa-chart-line', badge: 3 },
    {
      id: 'projects',
      label: 'Projects',
      icon: 'fas fa-folder',
      badge: 12,
      children: [
        { id: 'active', label: 'Active Projects', icon: 'fas fa-circle', badge: 8 },
        { id: 'paused', label: 'Paused', icon: 'fas fa-pause-circle', badge: 2 },
        { id: 'completed', label: 'Completed', icon: 'fas fa-check-circle', badge: 2 },
      ],
    },
    {
      id: 'tasks',
      label: 'Tasks',
      icon: 'fas fa-tasks',
      badge: 15,
      children: [
        { id: 'active-tasks', label: 'Active', icon: 'fas fa-play', badge: 10 },
        { id: 'pending', label: 'Pending', icon: 'fas fa-clock', badge: 5 },
      ],
    },
    { id: 'calendar', label: 'Calendar', icon: 'fas fa-calendar' },
    { id: 'messages', label: 'Messages', icon: 'fas fa-envelope', badge: 'New' },
    { id: 'team', label: 'Team', icon: 'fas fa-users' },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'fas fa-cog',
      children: [
        { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
        { id: 'security', label: 'Security', icon: 'fas fa-lock' },
        { id: 'notifications', label: 'Notifications', icon: 'fas fa-bell' },
      ],
    },
    { id: 'help', label: 'Help & Support', icon: 'fas fa-question-circle' },
  ];

  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  getDefaultConfig() {
    return {
      brandName: 'Set UI Lib',
      selectedId: 'dashboard',
      accentColor: '#6366f1',
      userName: 'John Doe',
      userRole: 'Administrator',
      userAvatar: 'https://i.pravatar.cc/100?img=11',
      collapsed: false,
      theme: 'light',
    };
  }

  updateConfig() {
    this.updateConfigFromDom(this.sidebarElement, 'app-modern-sidebar');
    // Note: Items property will be handled manually in the getCleanFormattedDom override if needed
    // or we can just rely on the base class and add the items property to the generated string.
  }

  override getCleanFormattedDom(
    element: ElementRef | undefined,
    tagName: string,
    innerContent: string = '',
  ): string {
    let code = super.getCleanFormattedDom(element, tagName, innerContent);
    // Add items prop to the string manually since it's not a DOM attribute
    code = code.replace(
      '></app-modern-sidebar>',
      '\n  [items]="sidebarItems"\n></app-modern-sidebar>',
    );
    return code;
  }

  onItemSelected(event: any) {
    const detail = event.detail;
    this.logEvent(`Item selected: ${detail.label} (${detail.id})`);
    this.pgConfig.selectedId = detail.id;
    this.updateConfig();
  }

  onSidebarToggled(event: any) {
    const detail = event.detail;
    const collapsed = typeof detail === 'boolean' ? detail : detail.collapsed;
    this.logEvent(`Sidebar ${collapsed ? 'collapsed' : 'expanded'}`);
    this.pgConfig.collapsed = collapsed;
    this.updateConfig();
  }

  onProfileClick() {
    this.logEvent(`Profile clicked`);
  }
}
