import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  NgZone,
  SimpleChanges,
} from '@angular/core';

/**
 * AppMasonryComponent â€” CSS columns masonry container.
 *
 * This component ONLY provides the multi-column layout context via :host.
 * Card-level styles (break-inside:avoid, margin-bottom) are the
 * responsibility of the PARENT component that owns the cards â€” Angular's
 * emulated encapsulation makes it impossible for this component to reliably
 * style projected content without ViewEncapsulation.None side-effects.
 *
 * Usage:
 *   <app-masonry [columns]="4" gap="1.5rem" [rowGap]="20"
 *                [breakpoints]="{ 1400:4, 1000:3, 600:2, 0:1 }">
 *     <div class="card" *ngFor="let item of items">...</div>
 *   </app-masonry>
 *
 *   The parent SCSS must add to cards:
 *     .card { break-inside: avoid; margin-bottom: 1.5rem; }
 */
@Component({
  selector: 'ng-masonry-grid',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
        columns: var(--am-cols, 4);
        column-gap: var(--am-gap, 1.5rem);
      }
    `,
  ],
})
export class AppMasonryComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() columns = 4;
  @Input() gap = '1.5rem';
  @Input() rowGap = 20;
  @Input() breakpoints: Record<number, number> = {};

  private host!: HTMLElement;
  private prevW = 0;
  private ro!: ResizeObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private zone: NgZone,
  ) {}

  ngOnChanges(): void {
    if (!this.host) return;
    this.applyCssVars();
    this.applyCols();
  }

  ngAfterViewInit(): void {
    this.host = this.el.nativeElement;
    this.applyCssVars();
    this.applyCols();

    this.zone.runOutsideAngular(() => {
      this.ro = new ResizeObserver((entries) => {
        const w = Math.round(entries[0]?.contentRect?.width ?? 0);
        if (Math.abs(w - this.prevW) > 1) {
          this.prevW = w;
          this.applyCols();
        }
      });
      this.ro.observe(this.host);
    });
  }

  ngOnDestroy(): void {
    this.ro?.disconnect();
  }

  private applyCssVars(): void {
    this.host.style.setProperty('--am-gap', this.gap);
    this.host.style.setProperty('--am-row-gap', `${this.rowGap}px`);
  }

  private applyCols(): void {
    const bpKeys = Object.keys(this.breakpoints).map(Number);
    if (!bpKeys.length) {
      this.host.style.setProperty('--am-cols', String(this.columns));
      return;
    }
    const w = window.innerWidth;
    const sorted = bpKeys.sort((a, b) => b - a);
    let cols = this.columns;
    for (const min of sorted) {
      if (w >= min) {
        cols = this.breakpoints[min];
        break;
      }
    }
    this.host.style.setProperty('--am-cols', String(cols));
  }
}



