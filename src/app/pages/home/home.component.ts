import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { categoryNavItems } from '../../data/navigation.data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCode,
  faLayerGroup,
  faGaugeHigh,
  faBookOpen,
  faMobileScreenButton,
  faCheckDouble,
  faRocket,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],

  template: `
    <div class="home-container">
      <!-- Hero Section with Animated Background -->
      <section class="hero-section">
        <div class="hero-background">
          <div class="gradient-orb orb-1"></div>
          <div class="gradient-orb orb-2"></div>
          <div class="gradient-orb orb-3"></div>
        </div>

        <div class="hero-content">
          <div class="badge-container">
            <span class="status-dot"></span>
            <span class="badge-text">Version 1.0.0 • Production Ready</span>
          </div>

          <h1 class="hero-title">
            Build Exceptional
            <span class="gradient-text">User Experiences</span>
            <br />With Enterprise Components
          </h1>

          <p class="hero-description">
            A comprehensive library of 53+ production-ready components designed for modern
            enterprise applications. Built with accessibility, performance, and developer experience
            in mind.
          </p>

          <div class="hero-actions">
            <button class="btn-primary" (click)="navigateTo('overview')">
              <span>Explore Components</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="btn-secondary" (click)="navigateTo('documentation')">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M10 6V10L13 13"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span>View Documentation</span>
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-value">53+</div>
              <div class="stat-label">Components</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">100%</div>
              <div class="stat-label">Accessible</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">5</div>
              <div class="stat-label">Categories</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">TypeScript</div>
              <div class="stat-label">First-Class Support</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="features-section">
        <div class="section-header">
          <h2>Why Choose Our Component Library</h2>
          <p>Enterprise-grade features built for scale and performance</p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Modular Architecture</h3>
            <p>
              Tree-shakeable components that keep your bundle size minimal. Import only what you
              need.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                <path
                  d="M12 6V12L16 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h3>Performance First</h3>
            <p>
              Optimized for speed with lazy loading, virtual scrolling, and efficient rendering.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V21"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M4 21H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M9 7H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M9 11H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <h3>Comprehensive Docs</h3>
            <p>Detailed documentation with live examples, API references, and best practices.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <circle cx="12" cy="8" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3>Accessibility Built-in</h3>
            <p>WCAG 2.1 AA compliant with full keyboard navigation and screen reader support.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path d="M3 9H21" stroke="currentColor" stroke-width="2" />
                <path d="M9 21V9" stroke="currentColor" stroke-width="2" />
              </svg>
            </div>
            <h3>Responsive Design</h3>
            <p>Mobile-first components that adapt seamlessly to any screen size or device.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Customizable Themes</h3>
            <p>Light, dark, and custom themes with CSS variables for complete design control.</p>
          </div>
        </div>
      </section>

      <!-- FontAwesome Icons Showcase -->
      <section class="icons-section">
        <div class="section-header">
          <h2>Premium Icon Support</h2>
          <p>Integrated with FontAwesome for beautiful, scalable vector icons</p>
        </div>

        <div class="icons-grid">
          <div class="icon-demo-card">
            <fa-icon [icon]="faCode" size="2x"></fa-icon>
            <span>faCode</span>
          </div>
          <div class="icon-demo-card">
            <fa-icon [icon]="faLayerGroup" size="2x"></fa-icon>
            <span>faLayerGroup</span>
          </div>
          <div class="icon-demo-card">
            <fa-icon [icon]="faGaugeHigh" size="2x"></fa-icon>
            <span>faGaugeHigh</span>
          </div>
          <div class="icon-demo-card">
            <fa-icon [icon]="faBookOpen" size="2x"></fa-icon>
            <span>faBookOpen</span>
          </div>
          <div class="icon-demo-card">
            <fa-icon [icon]="faMobileScreenButton" size="2x"></fa-icon>
            <span>faMobileScreenButton</span>
          </div>
          <div class="icon-demo-card">
            <fa-icon [icon]="faCheckDouble" size="2x"></fa-icon>
            <span>faCheckDouble</span>
          </div>
          <div class="icon-demo-card">
            <fa-icon [icon]="faRocket" size="2x"></fa-icon>
            <span>faRocket</span>
          </div>
          <div class="icon-demo-card">
            <fa-icon [icon]="faTerminal" size="2x"></fa-icon>
            <span>faTerminal</span>
          </div>
        </div>
      </section>

      <!-- Categories Showcase -->
      <section class="categories-section">
        <div class="section-header">
          <h2>Explore by Category</h2>
          <p>Organized components for every use case</p>
        </div>

        <div class="categories-grid">
          <div
            *ngFor="let category of categories"
            class="category-card"
            (click)="navigateTo('playground')"
          >
            <div class="category-header">
              <div class="category-icon" [innerHTML]="category.icon"></div>
              <span class="component-count">{{ category.children?.length || 0 }}</span>
            </div>
            <h3>{{ category.label }}</h3>
            <p>{{ getCategoryDescription(category.id) }}</p>
            <div class="category-footer">
              <span class="explore-link">Explore →</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Start exploring our component library and accelerate your development workflow</p>
          <button class="btn-cta" (click)="navigateTo('overview')">
            Get Started Now
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .home-container {
        min-height: 100%;
        overflow-y: auto;
      }

      /* Icons Section */
      .icons-section {
        padding: 80px 60px;
        background: var(--surface-2);
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
      }

      .icons-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .icon-demo-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 24px;
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        transition: all 0.3s;
        color: var(--text-secondary);
      }

      .icon-demo-card:hover {
        transform: translateY(-4px);
        border-color: var(--primary);
        color: var(--primary);
        box-shadow: var(--shadow-md);
      }

      .icon-demo-card fa-icon {
        transition: transform 0.3s;
      }

      .icon-demo-card:hover fa-icon {
        transform: scale(1.1);
      }

      .icon-demo-card span {
        font-size: 0.8rem;
        font-weight: 500;
      }

      /* Hero Section */
      .hero-section {
        position: relative;
        padding: 120px 60px;
        overflow: hidden;
        min-height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hero-background {
        position: absolute;
        inset: 0;
        overflow: hidden;
        opacity: 0.4;
      }

      .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        animation: float 20s infinite ease-in-out;
      }

      .orb-1 {
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
        top: -250px;
        left: -100px;
        animation-delay: 0s;
      }

      .orb-2 {
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
        bottom: -200px;
        right: -100px;
        animation-delay: 7s;
      }

      .orb-3 {
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
        top: 50%;
        right: 20%;
        animation-delay: 14s;
      }

      @keyframes float {
        0%,
        100% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(30px, -30px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
      }

      .hero-content {
        position: relative;
        z-index: 1;
        max-width: 900px;
        text-align: center;
      }

      .badge-container {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 20px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 100px;
        margin-bottom: 32px;
        animation: slideDown 0.6s ease-out;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        background: var(--primary);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      .badge-text {
        color: var(--primary);
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.02em;
      }

      .hero-title {
        font-size: 4rem;
        font-weight: 900;
        line-height: 1.1;
        color: var(--text-primary);
        margin-bottom: 24px;
        letter-spacing: -0.03em;
        animation: slideUp 0.8s ease-out 0.2s both;
      }

      .gradient-text {
        background: var(--gradient-premium);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: inline-block;
        animation: gradientShift 3s ease infinite;
        background-size: 200% 200%;
      }

      @keyframes gradientShift {
        0%,
        100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      .hero-description {
        font-size: 1.25rem;
        line-height: 1.7;
        color: var(--text-secondary);
        margin-bottom: 40px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        animation: slideUp 0.8s ease-out 0.4s both;
      }

      .hero-actions {
        display: flex;
        gap: 16px;
        justify-content: center;
        margin-bottom: 60px;
        animation: slideUp 0.8s ease-out 0.6s both;
      }

      .btn-primary,
      .btn-secondary {
        display: inline-flex;
        align-items: center;
        gap: 14px;
        padding: 16px 36px;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 16px;
        cursor: pointer;
        transition: all var(--transition-base);
        border: none;
      }

      .btn-primary {
        background: var(--gradient-premium);
        color: white;
        box-shadow: 0 10px 40px -10px var(--primary-glow);
      }

      .btn-primary:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 50px -10px var(--primary-glow);
      }

      .btn-primary svg {
        transition: transform 0.3s;
      }

      .btn-primary:hover svg {
        transform: translateX(4px);
      }

      .btn-secondary {
        background: var(--surface-1);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-sm);
      }

      .btn-secondary:hover {
        background: var(--bg-secondary);
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }

      .hero-stats {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        padding: 32px 48px;
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 24px;
        box-shadow: var(--shadow-lg);
        animation: slideUp 0.8s ease-out 0.8s both;
      }

      .stat-item {
        text-align: center;
      }

      .stat-value {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--primary);
        margin-bottom: 4px;
      }

      .stat-label {
        font-size: 0.85rem;
        color: var(--text-tertiary);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .stat-divider {
        width: 1px;
        height: 48px;
        background: var(--border-color);
      }

      /* Features Section */
      .features-section,
      .categories-section {
        padding: 100px 60px;
        background: var(--bg-primary);
      }

      .section-header {
        text-align: center;
        margin-bottom: 60px;
      }

      .section-header h2 {
        font-size: 2.75rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 16px;
      }

      .section-header p {
        font-size: 1.25rem;
        color: var(--text-secondary);
        max-width: 600px;
        margin: 0 auto;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 32px;
        max-width: 1300px;
        margin: 0 auto;
      }

      .feature-card {
        padding: 40px;
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 24px;
        transition: all var(--transition-base);
        box-shadow: var(--shadow-sm);
      }

      .feature-card:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-premium);
        border-color: var(--primary);
      }

      .feature-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-secondary);
        border-radius: 18px;
        margin-bottom: 24px;
        color: var(--primary);
        border: 1px solid var(--border-color);
      }

      .feature-card h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 12px;
      }

      .feature-card p {
        color: var(--text-secondary);
        line-height: 1.6;
        font-size: 1.05rem;
      }

      /* Categories Section */
      .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
        max-width: 1300px;
        margin: 0 auto;
      }

      .category-card {
        padding: 32px;
        background: var(--surface-1);
        border: 1px solid var(--border-color);
        border-radius: 24px;
        cursor: pointer;
        transition: all var(--transition-base);
        position: relative;
        overflow: hidden;
        box-shadow: var(--shadow-sm);
      }

      .category-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--gradient-premium);
        opacity: 0;
        transition: opacity 0.4s;
      }

      .category-card:hover::before {
        opacity: 0.05;
      }

      .category-card:hover {
        transform: translateY(-8px);
        border-color: var(--primary);
        box-shadow: var(--shadow-lg);
      }

      .category-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        position: relative;
      }

      .category-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-secondary);
        border-radius: 14px;
        color: var(--primary);
        border: 1px solid var(--border-color);
      }

      .component-count {
        padding: 6px 14px;
        background: var(--bg-secondary);
        color: var(--primary);
        border-radius: 100px;
        font-size: 0.85rem;
        font-weight: 700;
        border: 1px solid var(--border-color);
      }

      .category-card h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 8px;
        position: relative;
      }

      .category-card p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.5;
        margin-bottom: 20px;
        position: relative;
      }

      .category-footer {
        position: relative;
      }

      .explore-link {
        color: var(--primary);
        font-weight: 700;
        font-size: 0.95rem;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .category-card:hover .explore-link {
        transform: translateX(8px);
      }

      /* CTA Section */
      .cta-section {
        padding: 120px 60px;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
        position: relative;
        overflow: hidden;
      }

      .cta-content {
        max-width: 700px;
        margin: 0 auto;
        text-align: center;
      }

      .cta-content h2 {
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 16px;
      }

      .cta-content p {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 32px;
      }

      .btn-cta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 18px 40px;
        font-size: 1.125rem;
        font-weight: 600;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 10px 40px -10px rgba(99, 102, 241, 0.5);
      }

      .btn-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 50px -10px rgba(99, 102, 241, 0.6);
      }

      /* Animations */
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.5;
          transform: scale(0.95);
        }
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero-section {
          padding: 80px 24px;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .hero-description {
          font-size: 1.125rem;
        }

        .hero-actions {
          flex-direction: column;
        }

        .hero-stats {
          flex-wrap: wrap;
          gap: 16px;
        }

        .features-section,
        .categories-section,
        .cta-section {
          padding: 60px 24px;
        }

        .section-header h2 {
          font-size: 2rem;
        }
      }
    `,
  ],
})
export class HomeComponent {
  faCheckDouble = faCheckDouble;
  faRocket = faRocket;
  faTerminal = faTerminal;
  faCode = faCode;
  faLayerGroup = faLayerGroup;
  faGaugeHigh = faGaugeHigh;
  faBookOpen = faBookOpen;
  faMobileScreenButton = faMobileScreenButton;

  categories = categoryNavItems;

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  getCategoryDescription(id: string): string {
    const descriptions: Record<string, string> = {
      foundation: 'Essential building blocks for layouts and structure',
      navigation: 'Intuitive navigation patterns for seamless user journeys',
      inputs: 'Rich form controls for data collection and interaction',
      'data-display': 'Powerful components for presenting complex data',
      feedback: 'User feedback and overlay components for better UX',
    };
    return descriptions[id] || 'Explore components in this category';
  }
}
