import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { PlaygroundEventLogComponent } from '../../../../shared/components/playground-event-log/playground-event-log.component';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-modern-sidebar-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    PlaygroundEventLogComponent,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modern-sidebar-playground.component.html',
  styleUrl: './modern-sidebar-playground.component.scss',
})
export class ModernSidebarPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebarElement') sidebarElement!: ElementRef;

  // Playground State
  pgConfig = {
    brandName: 'Set UI Lib',
    selectedId: 'dashboard',
    accentColor: '#6366f1',
    userName: 'John Doe',
    userRole: 'Administrator',
    userAvatar: 'https://i.pravatar.cc/100?img=11',
    collapsed: false,
    theme: 'light',
  };

  pgAccordionItems = [
    { id: 'brand', title: 'Brand & Identity', icon: '🏢' },
    { id: 'user', title: 'User Profile', icon: '👤' },
    { id: 'style', title: 'Visual Style', icon: '🎨' },
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

  sidebarItemsJson = JSON.stringify(this.sidebarItems);
  eventLog = signal<string[]>([]);
  generatedCodeSignal = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  getCleanFormatedDom(): string {
    if (!this.sidebarElement) return '';
    let code = generatePlaygroundCode(
      this.sidebarElement.nativeElement as Element,
      'app-modern-sidebar',
    );
    // Add items prop to the string manually since it's not a DOM attribute
    code = code.replace(
      '></app-modern-sidebar>',
      '\n  [items]="sidebarItems"\n></app-modern-sidebar>',
    );
    return code;
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
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

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      brandName: 'Set UI Lib',
      selectedId: 'dashboard',
      accentColor: '#6366f1',
      userName: 'John Doe',
      userRole: 'Administrator',
      userAvatar: 'https://i.pravatar.cc/100?img=11',
      collapsed: false,
      theme: 'light',
    };
    this.updateConfig();
  }
}
