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

@Component({ template: '' })
export abstract class BasePlaygroundComponent implements OnInit, AfterViewInit {
  protected cd = inject(ChangeDetectorRef);

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
   * Optional method to reset configuration to defaults.
   */
  resetConfig?(): void;

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
  getCleanFormattedDom(element: ElementRef | undefined, tagName: string): string {
    if (!element?.nativeElement) return '';
    return generatePlaygroundCode(element.nativeElement as Element, tagName);
  }

  /**
   * Standardized update logic that uses DOM-based generation.
   */
  updateConfigFromDom(element: ElementRef | undefined, tagName: string) {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormattedDom(element, tagName));
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
