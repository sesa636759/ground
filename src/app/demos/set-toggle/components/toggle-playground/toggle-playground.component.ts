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
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { AppToggleGroupValueAccessorDirective } from '../../../../directives/app-toggle-group-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-toggle-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    AppToggleGroupValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './toggle-playground.component.html',
  styleUrl: './toggle-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TogglePlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('toggleGroup') toggleGroup!: ElementRef;
  pgAccordionItems = JSON.stringify([
    { id: 'global', title: 'Global Configuration', icon: '⚙️' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
  ]);

  defaultOpen = JSON.stringify(['global']);
  showCode = true;
  // Playground State
  pgConfig = {
    layout: 'horizontal',
    selectionMode: 'multiple',
    size: 'medium',
    color: 'primary',
    variant: 'default',
    elevation: 0,
    thumbShape: 'circle',
    skeleton: false,
    labelPosition: 'right',
    label: 'Feature Settings',
    helperText: 'Select your preferences',
    orientation: 'horizontal',
    showIcons: false,
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    animation: true,
    columns: 3,
  };

  playgroundOptions = [
    { value: 'notifications', label: 'Notifications', icon: 'fas fa-bell' },
    { value: 'dark-mode', label: 'Dark Mode', icon: 'fas fa-moon' },
    { value: 'auto-save', label: 'Auto Save', icon: 'fas fa-save' },
    { value: 'sync', label: 'Sync', icon: 'fas fa-sync' },
    { value: 'offline-mode', label: 'Offline Mode', icon: 'fas fa-wifi' },
  ];

  eventLog = signal<string[]>([]);
  generatedCode: string = '';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
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
    if (!this.toggleGroup) return '';

    return generatePlaygroundCode(this.toggleGroup.nativeElement as Element, 'app-toggle-group');
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode = this.getCleanFormatedDom();
      this.refreshCode();
    }, 50);
  }

  onToggleChange(event: any) {
    const value = event.detail.value;
    const displayValue = Array.isArray(value) ? value.join(', ') : value;
    this.logEvent(`Selection changed: ${displayValue}`);
    this.updateConfig();
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode);
  }

  jsonOptions = JSON.stringify(this.playgroundOptions);
}
