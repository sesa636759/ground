import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-page">
      <div class="playground-header">
        <h2>Button</h2>
        <p>Comprehensive button component with multiple variants, sizes, states, and features.</p>
      </div>

      <!-- Demo Controls -->
      <div class="demo-controls">
        <button
          class="btn-control"
          [class.active]="activeSection() === 'variants'"
          (click)="showVariants()"
        >
          Variants
        </button>
        <button
          class="btn-control"
          [class.active]="activeSection() === 'sizes'"
          (click)="showSizes()"
        >
          Sizes & Shapes
        </button>
        <button
          class="btn-control"
          [class.active]="activeSection() === 'icons'"
          (click)="showIcons()"
        >
          Icons & Layouts
        </button>
        <button
          class="btn-control"
          [class.active]="activeSection() === 'states'"
          (click)="showStates()"
        >
          States
        </button>
      </div>

      <!-- Variants Section (Direct Angular Template) -->
      <div *ngIf="activeSection() === 'variants'" class="demo-container-wrapper">
        <div class="demo-block">
          <h3>All Button Variants</h3>
          <p>8 different visual styles with multiple states and sizes</p>

          <h4>Primary Variant</h4>
          <div
            style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; padding: 16px; background: rgba(255,255,255,0.02); border-radius: 12px;"
          >
            <ui-button label="Primary" variant="primary"></ui-button>
            <ui-button label="With Icon" icon="🚀" variant="primary"></ui-button>
            <ui-button label="Loading" loading variant="primary"></ui-button>
            <ui-button label="Disabled" disabled variant="primary"></ui-button>
            <ui-button label="Small" size="sm" variant="primary"></ui-button>
            <ui-button label="Large" size="lg" variant="primary"></ui-button>
          </div>

          <h4>Secondary Variant</h4>
          <div
            style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; padding: 16px; background: rgba(255,255,255,0.02); border-radius: 12px;"
          >
            <ui-button label="Secondary" variant="secondary"></ui-button>
            <ui-button label="With Icon" icon="⚙️" variant="secondary"></ui-button>
            <ui-button label="Loading" loading variant="secondary"></ui-button>
            <ui-button label="Disabled" disabled variant="secondary"></ui-button>
            <ui-button label="Rounded" rounded variant="secondary"></ui-button>
            <ui-button label="Pill" pill variant="secondary"></ui-button>
          </div>

          <h4>Success Variant</h4>
          <div
            style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; padding: 16px; background: rgba(255,255,255,0.02); border-radius: 12px;"
          >
            <ui-button label="Success" variant="success"></ui-button>
            <ui-button label="Save" icon="💾" variant="success"></ui-button>
            <ui-button label="Loading" loading variant="success"></ui-button>
            <ui-button label="Disabled" disabled variant="success"></ui-button>
            <ui-button icon="✓" icon-only variant="success"></ui-button>
            <ui-button label="With Badge" badge="3" variant="success"></ui-button>
          </div>

          <h4>Danger Variant</h4>
          <div
            style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; padding: 16px; background: rgba(255,255,255,0.02); border-radius: 12px;"
          >
            <ui-button label="Danger" variant="danger"></ui-button>
            <ui-button label="Delete" icon="🗑️" variant="danger"></ui-button>
            <ui-button label="Loading" loading variant="danger"></ui-button>
            <ui-button label="Disabled" disabled variant="danger"></ui-button>
            <ui-button icon="✕" icon-only rounded variant="danger"></ui-button>
            <ui-button label="Remove" size="sm" variant="danger"></ui-button>
          </div>

          <h4>Warning Variant</h4>
          <div
            style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; padding: 16px; background: rgba(255,255,255,0.02); border-radius: 12px;"
          >
            <ui-button label="Warning" variant="warning"></ui-button>
            <ui-button label="Alert" icon="⚠️" variant="warning"></ui-button>
            <ui-button label="Loading" loading variant="warning"></ui-button>
            <ui-button label="Disabled" disabled variant="warning"></ui-button>
            <ui-button label="Caution" pill variant="warning"></ui-button>
            <ui-button icon="!" icon-only variant="warning"></ui-button>
          </div>

          <h4>Info Variant</h4>
          <div
            style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; padding: 16px; background: rgba(255,255,255,0.02); border-radius: 12px;"
          >
            <ui-button label="Info" variant="info"></ui-button>
            <ui-button label="Details" icon="ℹ️" variant="info"></ui-button>
            <ui-button label="Loading" loading variant="info"></ui-button>
            <ui-button label="Disabled" disabled variant="info"></ui-button>
            <ui-button label="Learn More" size="lg" variant="info"></ui-button>
            <ui-button icon="?" icon-only rounded variant="info"></ui-button>
          </div>

          <h4>Outline Variant</h4>
          <div
            style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; padding: 16px; background: rgba(255,255,255,0.02); border-radius: 12px;"
          >
            <ui-button label="Outline" variant="outline"></ui-button>
            <ui-button label="With Icon" icon="📋" variant="outline"></ui-button>
            <ui-button label="Loading" loading variant="outline"></ui-button>
            <ui-button label="Disabled" disabled variant="outline"></ui-button>
            <ui-button label="Rounded" rounded variant="outline"></ui-button>
            <ui-button icon="+" icon-only variant="outline"></ui-button>
          </div>

          <h4>Ghost Variant</h4>
          <div
            style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; padding: 16px; background: rgba(255,255,255,0.02); border-radius: 12px;"
          >
            <ui-button label="Ghost" variant="ghost"></ui-button>
            <ui-button label="Subtle" icon="👻" variant="ghost"></ui-button>
            <ui-button label="Loading" loading variant="ghost"></ui-button>
            <ui-button label="Disabled" disabled variant="ghost"></ui-button>
            <ui-button icon="⋮" icon-only variant="ghost"></ui-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>Variant Comparison</h3>
          <p>All variants side by side for easy comparison</p>
          <div
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin: 16px 0;"
          >
            <ui-button label="Primary" variant="primary"></ui-button>
            <ui-button label="Secondary" variant="secondary"></ui-button>
            <ui-button label="Success" variant="success"></ui-button>
            <ui-button label="Danger" variant="danger"></ui-button>
            <ui-button label="Warning" variant="warning"></ui-button>
            <ui-button label="Info" variant="info"></ui-button>
            <ui-button label="Outline" variant="outline"></ui-button>
            <ui-button label="Ghost" variant="ghost"></ui-button>
          </div>
        </div>
      </div>

      <!-- Other sections use innerHTML -->
      <div
        *ngIf="activeSection() !== 'variants'"
        [innerHTML]="demoContent()"
        class="demo-container-wrapper"
      ></div>
    </div>
  `,
  styles: [
    `
      .playground-page {
        padding: 0;
      }
      .playground-header {
        margin-bottom: 24px;
        h2 {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
        }
        p {
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.6;
        }
      }
      .demo-controls {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 24px;
        .btn-control {
          padding: 10px 20px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 10px;
          color: #818cf8;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          &:hover,
          &.active {
            background: rgba(99, 102, 241, 0.2);
          }
        }
      }
      .demo-container-wrapper {
        ::ng-deep .demo-block {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 20px;
          h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: white;
            margin-bottom: 12px;
          }
          h4 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #cbd5e1;
            margin: 16px 0 8px;
          }
          p {
            color: #94a3b8;
            margin-bottom: 12px;
            font-size: 0.95rem;
          }
        }
      }
    `,
  ],
})
export class ButtonPlayground {
  demoContent = signal('');
  activeSection = signal('variants');

  constructor() {
    this.showVariants();
  }

  showVariants() {
    this.activeSection.set('variants');
  }

  showSizes() {
    this.activeSection.set('sizes');
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Sizes</h3>
        <p>Available in 5 sizes: xs, sm, md, lg, xl</p>
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <ui-button label="Extra Small" size="xs" variant="primary"></ui-button>
          <ui-button label="Small" size="sm" variant="primary"></ui-button>
          <ui-button label="Medium" size="md" variant="primary"></ui-button>
          <ui-button label="Large" size="lg" variant="primary"></ui-button>
          <ui-button label="Extra Large" size="xl" variant="primary"></ui-button>
        </div>
      </div>

      <div class="demo-block">
        <h3>Shapes</h3>
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <ui-button label="Default" variant="secondary"></ui-button>
          <ui-button label="Rounded" rounded variant="secondary"></ui-button>
          <ui-button label="Pill" pill variant="secondary"></ui-button>
        </div>
      </div>
    `);
  }

  showIcons() {
    this.activeSection.set('icons');
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Icon Positions</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-button label="Left Icon" icon="⬅️" icon-position="left" variant="outline"></ui-button>
          <ui-button label="Right Icon" icon="➡️" icon-position="right" variant="outline"></ui-button>
        </div>
      </div>

      <div class="demo-block">
        <h3>Icon Only</h3>
        <div style="display: flex; gap: 12px; align-items: center;">
          <ui-button icon="✏️" icon-only variant="ghost"></ui-button>
          <ui-button icon="🗑️" icon-only variant="danger" rounded></ui-button>
          <ui-button icon="💾" icon-only variant="primary" pill></ui-button>
        </div>
      </div>

      <div class="demo-block">
        <h3>Badges</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ui-button label="Inbox" icon="📥" badge="3" variant="primary"></ui-button>
          <ui-button icon="🔔" icon-only badge="9+" variant="secondary" rounded></ui-button>
          <ui-button label="Updates" badge="New" variant="success" size="sm"></ui-button>
        </div>
      </div>
    `);
  }

  showStates() {
    this.activeSection.set('states');
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Loading States</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
          <ui-button label="Loading Left" loading loading-position="left" variant="primary"></ui-button>
          <ui-button label="Loading Right" loading loading-position="right" variant="success"></ui-button>
        </div>
      </div>

      <div class="demo-block">
        <h3>Disabled States</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
          <ui-button label="Primary" disabled variant="primary"></ui-button>
          <ui-button label="Success" disabled variant="success"></ui-button>
          <ui-button label="Danger" disabled variant="danger"></ui-button>
        </div>
      </div>
    `);
  }
}
