import {
  signal,
  ChangeDetectorRef,
  OnInit,
  Component,
  inject,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { generatePlaygroundCode } from '../../utils/playground-utils';

@Component({ template: '', standalone: true })
export abstract class BasePlaygroundComponent implements OnInit, AfterViewInit {
  protected cd = inject(ChangeDetectorRef);

  accordionDefaultOpen = ['global'];
  defaultOpen = ['global'];
  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
  ];

  // Playground State
  generatedCode = signal('');
  showCode = true;
  eventLog = signal<string[]>([]);

  ngOnInit() {
    // Initial configuration update
    this.updateConfig();
  }

  ngAfterViewInit() {
    // Refresh after view is initialized to capture any DOM-based code generation
    setTimeout(() => {
      this.updateConfig();
    }, 150);
  }

  /**
   * Abstract method to be implemented by child components to handle
   * their specific configuration logic and code generation.
   */
  abstract updateConfig(): void;

  /**
   * Optional method to return default configuration.
   * If implemented, resetConfig will use this.
   */
  abstract getDefaultConfig(): any;

  /**
   * Shared options used across multiple playgrounds.
   */
  protected iconLibraryOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Icons8', value: 'icons8' },
    { label: 'Iconoir', value: 'iconoir' },
    { label: 'Ionicons', value: 'ionicons' },
    { label: 'Bootstrap', value: 'bootstrap' },
    { label: 'QuartzDS (SE)', value: 'se' },
  ];

  protected standardSizeOptions = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  protected fullSizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  protected standardColorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  protected standardOrientationOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  protected standardDirectionOptions = [
    { label: 'Up', value: 'up' },
    { label: 'Down', value: 'down' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  protected standardPlacementOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top Start', value: 'top-start' },
    { label: 'Top End', value: 'top-end' },
    { label: 'Bottom Start', value: 'bottom-start' },
    { label: 'Bottom End', value: 'bottom-end' },
    { label: 'Left Start', value: 'left-start' },
    { label: 'Left End', value: 'left-end' },
    { label: 'Right Start', value: 'right-start' },
    { label: 'Right End', value: 'right-end' },
  ];

  protected standardAlignmentOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ];

  protected standardTriggerOptions = [
    { label: 'Click', value: 'click' },
    { label: 'Hover', value: 'hover' },
    { label: 'Focus', value: 'focus' },
    { label: 'ContextMenu', value: 'contextmenu' },
  ];

  /**
   * Default implementation to reset configuration.
   */
  resetConfig(): void {
    const config = (this as any).pgConfig;
    if (config) {
      Object.assign(config, this.getDefaultConfig());
      this.updateConfig();
      this.eventLog.set([]);
    }
  }

  /**
   * Refreshes the code preview by temporarily hiding and showing it.
   * This triggers Angular's change detection and ensures the preview is updated.
   */
  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  /**
   * Helper to generate code from a DOM element using playground-utils.
   * This is a standard pattern for many of our playgrounds.
   */
  getCleanFormattedDom(
    element: ElementRef | undefined,
    tagName: string,
    innerContent: string = '',
  ): string {
    if (!element?.nativeElement) return '';
    return generatePlaygroundCode(element.nativeElement as Element, tagName, innerContent);
  }

  /**
   * Standardized update logic that uses DOM-based generation.
   */
  updateConfigFromDom(element: ElementRef | undefined, tagName: string, innerContent: string = '') {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormattedDom(element, tagName, innerContent));
      this.refreshCode();
    }, 50);
  }

  /**
   * Logs an event with a timestamp to the playground event log.
   */
  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  /**
   * Copies the current generated code to the clipboard.
   */
  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  /**
   * Helper utility to stringify options for attribute binding.
   */
  jsonOptions = (opts: any) => JSON.stringify(opts);
}
