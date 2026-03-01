import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';
import { PlaygroundEventLogComponent } from '../../../../shared/components/playground-event-log/playground-event-log.component';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';

@Component({
  selector: 'app-empty-state-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
    PlaygroundEventLogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './empty-state-playground.component.html',
  styleUrl: './empty-state-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EmptyStatePlaygroundComponent implements AfterViewInit {
  @ViewChild('emptyStateElement') emptyStateElement!: ElementRef;

  pgConfig = {
    type: 'no-data',
    variant: 'default',
    size: 'medium',
    align: 'center',
    heading: 'No Data Available',
    message: 'There is no data to display at the moment.',
    illustration: '',
    rounded: false,
    elevated: false,
    compact: false,
    animated: false,
    showBackButton: false,
    primaryAction: 'Get Started',
    primaryActionIcon: 'fas fa-plus',
    secondaryAction: 'Learn More',
    secondaryActionIcon: 'fas fa-book',
    loadingAction: false,
  };

  pgAccordionItems = JSON.stringify([
    { id: 'general', title: 'General Configuration', icon: '⚙️' },
    { id: 'content', title: 'Content & Texts', icon: '📝' },
    { id: 'actions', title: 'Action Buttons', icon: '⚡' },
    { id: 'visuals', title: 'Visual Enhancements', icon: '🎨' },
  ]);

  defaultOpen = JSON.stringify(['general']);

  eventLog = signal<string[]>([]);
  generatedCode = signal<string>('');
  showCode = true;

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

  getCleanFormatedDom(): string {
    if (!this.emptyStateElement) return '';
    return generatePlaygroundCode(
      this.emptyStateElement.nativeElement as Element,
      'app-empty-state',
    );
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  onActionClick(event: any) {
    this.logEvent(`Action clicked: ${event.detail.action}`);
  }

  onBackClick(_event: any) {
    this.logEvent('Back button clicked');
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      type: 'no-data',
      variant: 'default',
      size: 'medium',
      align: 'center',
      heading: 'No Data Available',
      message: 'There is no data to display at the moment.',
      illustration: '',
      rounded: false,
      elevated: false,
      compact: false,
      animated: false,
      showBackButton: false,
      primaryAction: 'Get Started',
      primaryActionIcon: 'fas fa-plus',
      secondaryAction: 'Learn More',
      secondaryActionIcon: 'fas fa-book',
      loadingAction: false,
    };
    this.updateConfig();
  }
}
