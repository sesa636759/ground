import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-context-menu-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCheckboxValueAccessorDirective, AppPlaygroundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './context-menu-playground.component.html',
  styleUrl: './context-menu-playground.component.scss',
})
export class ContextMenuPlaygroundComponent implements AfterViewInit {
  @ViewChild('contextMenuElement') contextMenuElement!: ElementRef;
  @ViewChild('targetElement') targetElement!: ElementRef;

  pgConfig = {
    breakpoint: 960,
    autoZIndex: true,
    baseZIndex: 0,
    theme: 'light',
  };

  pgAccordionItems = JSON.stringify([
    { id: 'settings', title: 'Menu Configuration', icon: '⚙️' },
    { id: 'visuals', title: 'Visual Styles', icon: '🎨' },
  ]);

  accordionDefaultOpen = JSON.stringify(['settings']);

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Green', value: 'green' },
  ];

  model = [
    { label: 'View Details', icon: '👁️', command: () => this.logAction('View') },
    { label: 'Edit Entry', icon: '✏️', command: () => this.logAction('Edit') },
    { separator: true },
    { label: 'Delete', icon: '🗑️', command: () => this.logAction('Delete') },
  ];

  modelJson = JSON.stringify(this.model);
  generatedCodeSignal = signal<string>('');
  showCode = true;
  lastAction = '';

  constructor(private cd: ChangeDetectorRef) {}

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

  getCleanFormattedDom(): string {
    if (!this.contextMenuElement) return '';
    return generatePlaygroundCode(
      this.contextMenuElement.nativeElement as Element,
      'ui-context-menu',
    );
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormattedDom());
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
      breakpoint: 960,
      autoZIndex: true,
      baseZIndex: 0,
      theme: 'light',
    };
    this.updateConfig();
  }
}
