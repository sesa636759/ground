import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';

@Component({
  selector: 'app-dock-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dock-playground.component.html',
  styleUrl: './dock-playground.component.scss',
})
export class DockPlaygroundComponent implements AfterViewInit {
  @ViewChild('dock') dock!: ElementRef;
  pgConfig = {
    position: 'bottom',
    breakpoint: '960px',
    autoZIndex: true,
    magnify: true,
    blurEffect: false,
    showLabels: true,
  };

  positionOptions = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  model = [
    { label: 'Finder', icon: 'search', command: () => this.logAction('Finder') },
    { label: 'App Store', icon: 'shopping-bag', command: () => this.logAction('App Store') },
    { label: 'Photos', icon: 'image', command: () => this.logAction('Photos') },
    { label: 'Settings', icon: 'settings', command: () => this.logAction('Settings') },
    { label: 'Trash', icon: 'trash-2', command: () => this.logAction('Trash') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCodeSignal = signal('');
  lastAction = '';
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
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
    if (!this.dock) return '';

    return generatePlaygroundCode(this.dock.nativeElement as Element, 'ui-dock');
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  logAction(action: string) {
    this.lastAction = action;
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
  }

  resetConfig() {
    this.pgConfig = {
      position: 'bottom',
      breakpoint: '960px',
      autoZIndex: true,
      magnify: true,
      blurEffect: false,
      showLabels: true,
    };
    this.updateConfig();
  }
}
