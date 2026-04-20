import { Directive, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive()
export abstract class GroundUiDirectiveBase<T extends HTMLElement> implements OnInit, OnChanges {
  protected constructor(protected readonly elementRef: ElementRef<T>) {}

  ngOnInit(): void {
    this.syncProps();
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.syncProps();
  }

  protected abstract get propNames(): readonly string[];

  private syncProps(): void {
    const host = this.elementRef.nativeElement as Record<string, unknown>;

    for (const propName of this.propNames) {
      const value = (this as Record<string, unknown>)[propName];
      if (value !== undefined) {
        host[propName] = value;
      }
    }
  }
}