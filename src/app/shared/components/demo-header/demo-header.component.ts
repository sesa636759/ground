import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="demo-header">
      <!-- Soft radial background blobs -->
      <span class="bg-orb bg-orb-1" aria-hidden="true"></span>
      <span class="bg-orb bg-orb-2" aria-hidden="true"></span>

      <div class="header-body">
        <!-- Gradient icon badge -->
        <div class="icon-badge" *ngIf="icon">
          <span class="icon-halo" aria-hidden="true"></span>
          <span class="icon-emoji">{{ icon }}</span>
        </div>

        <!-- Text block -->
        <div class="header-text">
          <div class="eyebrow">
            <span class="eyebrow-pip"></span>
            <span class="eyebrow-label">Component</span>
          </div>
          <h2 class="header-title">{{ title }}</h2>
          <p class="header-desc" *ngIf="description">{{ description }}</p>
        </div>

        <!-- Decorative concentric rings -->
        <div class="deco-circles" aria-hidden="true">
          <span class="deco-ring deco-ring-sm"></span>
          <span class="deco-ring deco-ring-md"></span>
          <span class="deco-ring deco-ring-lg"></span>
        </div>
      </div>

      <!-- Bottom gradient accent bar -->
      <div class="header-accent-bar"></div>
    </header>
  `,
  styles: [
    `
      /* -- Demo Header --------------------------------------- */
      .demo-header {
        position: relative;
        margin-bottom: var(--space-xl);
        border-radius: 18px;
        overflow: hidden;
        background: linear-gradient(
          135deg,
          var(--bg-accent, #f0f4ff) 0%,
          var(--surface-1, #fff) 65%
        );
        border: 1px solid var(--border-color, #e2e8f0);
        box-shadow:
          0 1px 3px rgba(0, 0, 0, 0.04),
          0 6px 24px -6px rgba(79, 70, 229, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.85);
      }

      /* -- Background decorative radial blobs ---------------- */
      .bg-orb {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
      }
      .bg-orb-1 {
        width: 300px;
        height: 300px;
        top: -100px;
        left: -70px;
        background: radial-gradient(
          circle,
          rgba(79, 70, 229, 0.1) 0%,
          transparent 65%
        );
      }
      .bg-orb-2 {
        width: 220px;
        height: 220px;
        top: -50px;
        right: 60px;
        background: radial-gradient(
          circle,
          rgba(139, 92, 246, 0.07) 0%,
          transparent 65%
        );
      }

      /* -- Header body row ----------------------------------- */
      .header-body {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 1.625rem 2rem;
      }

      /* -- Icon badge ---------------------------------------- */
      .icon-badge {
        position: relative;
        flex-shrink: 0;
        width: 62px;
        height: 62px;
        border-radius: 16px;
        background: linear-gradient(
          135deg,
          var(--primary, #4f46e5) 0%,
          var(--primary-light, #6366f1) 100%
        );
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow:
          0 4px 16px -2px var(--primary-glow, rgba(79, 70, 229, 0.35)),
          inset 0 1px 0 rgba(255, 255, 255, 0.25);
        transition:
          transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
          box-shadow 0.28s ease;
      }
      .icon-badge:hover {
        transform: translateY(-4px) rotate(-4deg);
        box-shadow:
          0 12px 28px -4px var(--primary-glow, rgba(79, 70, 229, 0.5)),
          inset 0 1px 0 rgba(255, 255, 255, 0.25);
      }
      .icon-halo {
        position: absolute;
        inset: -8px;
        border-radius: 22px;
        background: radial-gradient(
          circle at center,
          var(--primary-glow, rgba(79, 70, 229, 0.2)) 0%,
          transparent 70%
        );
        z-index: -1;
      }
      .icon-emoji {
        font-size: 1.875rem;
        line-height: 1;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
      }

      /* -- Text block ---------------------------------------- */
      .header-text {
        flex: 1;
        min-width: 0;
      }

      /* Eyebrow badge */
      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 7px;
        padding: 3px 10px 3px 7px;
        border-radius: 99px;
        background: rgba(79, 70, 229, 0.08);
        border: 1px solid rgba(79, 70, 229, 0.18);
      }
      .eyebrow-pip {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--primary, #4f46e5);
        box-shadow: 0 0 6px var(--primary-glow, rgba(79, 70, 229, 0.5));
      }
      .eyebrow-label {
        font-size: 0.67rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.09em;
        color: var(--primary, #4f46e5);
      }

      /* Title */
      .header-title {
        margin: 0 0 8px;
        font-size: 1.875rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1.2;
        background: linear-gradient(
          135deg,
          var(--text-primary, #0f172a) 20%,
          var(--primary, #4f46e5) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* Description */
      .header-desc {
        margin: 0;
        font-size: 0.9375rem;
        color: var(--text-secondary, #475569);
        line-height: 1.65;
        font-weight: 400;
      }

      /* -- Decorative concentric rings ----------------------- */
      .deco-circles {
        position: relative;
        flex-shrink: 0;
        width: 72px;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .deco-ring {
        position: absolute;
        border-radius: 50%;
        border: 1.5px solid var(--primary, #4f46e5);
      }
      .deco-ring-sm  { width: 18px; height: 18px; opacity: 0.5;  }
      .deco-ring-md  { width: 38px; height: 38px; opacity: 0.25; }
      .deco-ring-lg  { width: 62px; height: 62px; opacity: 0.12; }

      /* -- Bottom accent bar --------------------------------- */
      .header-accent-bar {
        height: 3px;
        background: linear-gradient(
          90deg,
          var(--primary, #4f46e5) 0%,
          var(--primary-light, #6366f1) 35%,
          transparent 100%
        );
        opacity: 0.55;
      }

      /* -- Responsive tweaks --------------------------------- */
      @media (max-width: 600px) {
        .header-body {
          padding: 1.25rem 1.25rem;
          gap: 1rem;
        }
        .deco-circles {
          display: none;
        }
        .header-title {
          font-size: 1.5rem;
        }
      }
    `,
  ],
})
export class DemoHeaderComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
