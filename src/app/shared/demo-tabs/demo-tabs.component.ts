import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DemoVariant {
  id: string;
  title: string;
  icon?: string;
  description?: string;
}

@Component({
  selector: 'demo-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="demo-master-container animate-in">
      <div class="demo-tabs-navbar">
        <div class="tabs-list">
          <button
            type="button"
            class="tab-item"
            [class.active]="active === 'examples'"
            (click)="active = 'examples'"
          >
            <i class="fas fa-layer-group"></i>
            <span>Examples</span>
          </button>

          <button
            type="button"
            class="tab-item"
            [class.active]="active === 'playground'"
            (click)="active = 'playground'"
          >
            <i class="fas fa-gamepad"></i>
            <span>Playground</span>
          </button>

          <button
            type="button"
            class="tab-item"
            [class.active]="active === 'docs'"
            (click)="active = 'docs'"
          >
            <i class="fas fa-book"></i>
            <span>Documentation</span>
          </button>
        </div>

        <div class="navbar-actions">
          <div class="badge-premium">ENTERPRISE EDITION</div>
        </div>
      </div>

      <div class="demo-main-viewport">
        <!-- Examples View -->
        <div *ngIf="active === 'examples'" class="viewport-pane pane-examples">
          <div class="examples-layout">
            <aside class="examples-sidebar" *ngIf="variants && variants.length > 0">
              <div class="sidebar-header">Variations</div>
              <nav>
                <a *ngFor="let v of variants" (click)="onVariantClick(v.id)" class="sidebar-item">
                  <span class="v-icon" *ngIf="v.icon">{{ v.icon }}</span>
                  <div class="v-text">
                    <div class="v-title">{{ v.title }}</div>
                    <div class="v-desc" *ngIf="v.description">{{ v.description }}</div>
                  </div>
                </a>
              </nav>
            </aside>
            <main class="examples-content js-scroll-container">
              <ng-content select="[slot=examples]"></ng-content>
              <!-- Default content fallback if slot not used -->
              <ng-content></ng-content>
            </main>
          </div>
        </div>

        <!-- Playground View -->
        <div *ngIf="active === 'playground'" class="viewport-pane pane-playground animate-scale-in">
          <ng-content select="[slot=playground]"></ng-content>
        </div>

        <!-- Documentation View -->
        <div *ngIf="active === 'docs'" class="viewport-pane pane-docs animate-slide-in">
          <ng-content select="[slot=docs]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        background: #ffffff;
      }

      .demo-master-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: #ffffff;
        border-radius: var(--radius-2xl);
        border: 1px solid var(--border-color);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
        overflow: hidden;
      }

      .demo-tabs-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 var(--space-xl);
        background: linear-gradient(to bottom, #f8fafc, #ffffff);
        border-bottom: 1px solid var(--border-color);
        height: 70px;
        flex-shrink: 0;
      }

      .tabs-list {
        display: flex;
        height: 100%;
        gap: var(--space-xl);
      }

      .tab-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0 var(--space-md);
        border: none;
        background: transparent;
        color: var(--text-tertiary);
        font-weight: 700;
        font-size: 0.9rem;
        cursor: pointer;
        position: relative;
        transition: all var(--transition-base);
        letter-spacing: 0.02em;

        i {
          font-size: 1.1rem;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 3px;
          background: var(--primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          border-radius: var(--radius-full) var(--radius-full) 0 0;
        }

        &:hover {
          color: var(--text-primary);
          i {
            transform: translateY(-2px);
          }
        }

        &.active {
          color: var(--primary);
          &::after {
            transform: scaleX(1);
          }
          i {
            transform: translateY(-2px);
          }
        }
      }

      .badge-premium {
        font-size: 0.65rem;
        font-weight: 900;
        background: #f1f5f9;
        color: var(--text-tertiary);
        padding: 0.4rem 1rem;
        border-radius: var(--radius-full);
        letter-spacing: 0.1em;
        border: 1px solid var(--border-color);
      }

      .demo-main-viewport {
        flex: 1;
        min-height: 0;
        overflow: hidden;
      }

      .viewport-pane {
        height: 100%;
        overflow: hidden;
      }

      /* Examples Layout */
      .examples-layout {
        display: flex;
        height: 100%;
      }

      .examples-sidebar {
        width: 280px;
        border-right: 1px solid var(--border-color);
        background: #fcfdfe;
        padding: var(--space-lg);
        overflow-y: auto;
        flex-shrink: 0;

        @media (max-width: 1200px) {
          display: none;
        }

        .sidebar-header {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: var(--space-lg);
          padding-left: 0.5rem;
        }

        .sidebar-item {
          display: flex;
          gap: 1rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-xl);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-bottom: 4px;
          border: 1px solid transparent;

          &:hover {
            background: #ffffff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
            border-color: #f1f5f9;
            color: var(--primary);
            transform: translateX(4px);
          }

          .v-icon {
            font-size: 1.25rem;
          }
          .v-title {
            font-weight: 700;
            font-size: 0.9rem;
          }
          .v-desc {
            font-size: 0.7rem;
            opacity: 0.7;
            margin-top: 2px;
          }
        }
      }

      .examples-content {
        flex: 1;
        overflow-y: auto;
        padding: var(--space-2xl);
        background: #ffffff;
        scroll-behavior: smooth;
      }

      .pane-playground,
      .pane-docs {
        overflow-y: auto;
        padding: var(--space-2xl);
        background: #ffffff;
      }
    `,
  ],
})
export class DemoTabsComponent {
  @Input() variants: DemoVariant[] = [];
  @Output() variantChange = new EventEmitter<string>();

  active: 'playground' | 'examples' | 'docs' = 'examples';

  onVariantClick(id: string) {
    this.variantChange.emit(id);
  }
}
