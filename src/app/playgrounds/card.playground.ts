import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-page">
      <div class="playground-header">
        <h2>Card</h2>
        <p>Versatile card component with multiple variants, states, and interactive features.</p>
      </div>

      <!-- Demo Controls -->
      <div class="demo-controls">
        <button class="btn-control active" (click)="showPlayground()">🎮 Playground</button>
        <button class="btn-control" (click)="showVariants()">Variants</button>
        <button class="btn-control" (click)="showFeatures()">Features</button>
        <button class="btn-control" (click)="showLayouts()">Layouts</button>
      </div>

      <!-- Dynamic Demo Container -->
      <div [innerHTML]="demoContent()" class="demo-container-wrapper"></div>
    </div>
  `,
  styles: [
    `
      .playground-page {
        padding: 0;
      }
      .playground-header {
        margin-bottom: 32px;
        h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
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
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 24px;
          h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 16px;
          }
          h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #cbd5e1;
            margin: 24px 0 12px;
          }
          p {
            color: #94a3b8;
            margin-bottom: 16px;
          }
        }
        ::ng-deep .playground-settings {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 24px;
          label {
            display: flex;
            flex-direction: column;
            gap: 8px;
            span {
              color: #cbd5e1;
              font-weight: 600;
              font-size: 0.9rem;
            }
            input,
            select {
              padding: 10px;
              background: rgba(15, 23, 42, 0.8);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 8px;
              color: white;
              font-size: 0.9rem;
              &:focus {
                outline: none;
                border-color: #6366f1;
              }
            }
            input[type='checkbox'] {
              width: auto;
            }
          }
        }
        ::ng-deep .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 16px;
        }
        ::ng-deep .code-block {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 24px;
          position: relative;
          margin-top: 20px;
          pre {
            margin: 0;
            overflow-x: auto;
            code {
              color: #cbd5e1;
              font-family: 'Courier New', monospace;
              font-size: 0.9rem;
              line-height: 1.6;
            }
          }
          button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background: rgba(99, 102, 241, 0.3);
            }
          }
        }
      }
    `,
  ],
})
export class CardPlayground {
  demoContent = signal('');

  constructor() {
    this.showPlayground();
  }

  showPlayground() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <p>Configure card properties and see the results in real-time</p>
        
        <div class="playground-settings">
          <label><span>Variant:</span>
            <select id="cardVariant" onchange="window.updateCardPlayground()">
              <option value="default">Default</option>
              <option value="elevated">Elevated</option>
              <option value="outlined">Outlined</option>
              <option value="filled">Filled</option>
            </select>
          </label>
          <label><span>Width:</span>
            <input type="text" id="cardWidth" value="400px" onchange="window.updateCardPlayground()">
          </label>
          <label style="flex-direction: row; align-items: center; gap: 10px;">
            <input type="checkbox" id="cardHoverable" onchange="window.updateCardPlayground()">
            <span>Hoverable</span>
          </label>
          <label style="flex-direction: row; align-items: center; gap: 10px;">
            <input type="checkbox" id="cardFlippable" onchange="window.updateCardPlayground()">
            <span>Flippable</span>
          </label>
          <label style="flex-direction: row; align-items: center; gap: 10px;">
            <input type="checkbox" id="cardSelectable" onchange="window.updateCardPlayground()">
            <span>Selectable</span>
          </label>
          <label style="flex-direction: row; align-items: center; gap: 10px;">
            <input type="checkbox" id="cardShowMenu" onchange="window.updateCardPlayground()">
            <span>Show Menu</span>
          </label>
        </div>

        <div id="cardPlaygroundContainer" style="min-height: 300px; background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 40px; display: flex; justify-content: center; align-items: center;"></div>

        <div class="code-block">
          <button onclick="window.copyCardCode()">Copy</button>
          <pre><code id="cardCodeBlock"></code></pre>
        </div>
      </div>
    `);

    setTimeout(() => this.initPlayground(), 100);
  }

  showVariants() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Card Variants</h3>
        <p>Available in 4 different visual styles</p>
        
        <div class="card-grid">
          <ui-card variant="default" width="100%">
            <div slot="header" style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h3 style="margin: 0; color: white; font-size: 1.2rem;">Default Card</h3>
              <p style="margin: 4px 0 0; color: #94a3b8; font-size: 0.9rem;">Standard card style</p>
            </div>
            <div slot="content" style="padding: 16px; color: #cbd5e1;">
              This is the default card variant with subtle styling and clean appearance.
            </div>
            <div slot="footer" style="padding: 16px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; gap: 8px;">
              <button style="padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer;">Action</button>
              <button style="padding: 8px 16px; background: transparent; color: #94a3b8; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; cursor: pointer;">Cancel</button>
            </div>
          </ui-card>

          <ui-card variant="elevated" width="100%">
            <div slot="header" style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h3 style="margin: 0; color: white; font-size: 1.2rem;">Elevated Card</h3>
              <p style="margin: 4px 0 0; color: #94a3b8; font-size: 0.9rem;">With shadow depth</p>
            </div>
            <div slot="content" style="padding: 16px; color: #cbd5e1;">
              Elevated variant adds depth with shadow effects for a floating appearance.
            </div>
          </ui-card>

          <ui-card variant="outlined" width="100%">
            <div slot="header" style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h3 style="margin: 0; color: white; font-size: 1.2rem;">Outlined Card</h3>
              <p style="margin: 4px 0 0; color: #94a3b8; font-size: 0.9rem;">Border emphasis</p>
            </div>
            <div slot="content" style="padding: 16px; color: #cbd5e1;">
              Outlined variant emphasizes the border for clear separation.
            </div>
          </ui-card>

          <ui-card variant="filled" width="100%">
            <div slot="header" style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h3 style="margin: 0; color: white; font-size: 1.2rem;">Filled Card</h3>
              <p style="margin: 4px 0 0; color: #94a3b8; font-size: 0.9rem;">Solid background</p>
            </div>
            <div slot="content" style="padding: 16px; color: #cbd5e1;">
              Filled variant uses a solid background color for strong visual presence.
            </div>
          </ui-card>
        </div>
      </div>
    `);
  }

  showFeatures() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Interactive Features</h3>
        
        <h4>Hoverable Cards</h4>
        <div class="card-grid">
          <ui-card variant="elevated" hoverable="true" width="100%">
            <div slot="content" style="padding: 24px; text-align: center; color: #cbd5e1;">
              <div style="font-size: 3rem; margin-bottom: 12px;">🎯</div>
              <h3 style="margin: 0 0 8px; color: white;">Hover Me!</h3>
              <p style="margin: 0; color: #94a3b8;">Card with hover effect</p>
            </div>
          </ui-card>

          <ui-card variant="outlined" hoverable="true" width="100%">
            <div slot="content" style="padding: 24px; text-align: center; color: #cbd5e1;">
              <div style="font-size: 3rem; margin-bottom: 12px;">✨</div>
              <h3 style="margin: 0 0 8px; color: white;">Interactive</h3>
              <p style="margin: 0; color: #94a3b8;">Responds to hover</p>
            </div>
          </ui-card>
        </div>

        <h4>Flippable Cards</h4>
        <div class="card-grid">
          <ui-card variant="elevated" flippable="true" width="100%">
            <div slot="content" style="padding: 24px; text-align: center; color: #cbd5e1;">
              <div style="font-size: 3rem; margin-bottom: 12px;">🔄</div>
              <h3 style="margin: 0 0 8px; color: white;">Click to Flip</h3>
              <p style="margin: 0; color: #94a3b8;">Front side content</p>
            </div>
            <div slot="back-content" style="padding: 24px; text-align: center; color: #cbd5e1;">
              <div style="font-size: 3rem; margin-bottom: 12px;">🎉</div>
              <h3 style="margin: 0 0 8px; color: white;">Back Side!</h3>
              <p style="margin: 0; color: #94a3b8;">Hidden content revealed</p>
            </div>
          </ui-card>
        </div>

        <h4>Selectable Cards</h4>
        <div class="card-grid">
          <ui-card variant="outlined" selectable="true" width="100%">
            <div slot="content" style="padding: 24px; text-align: center; color: #cbd5e1;">
              <div style="font-size: 3rem; margin-bottom: 12px;">☑️</div>
              <h3 style="margin: 0 0 8px; color: white;">Option A</h3>
              <p style="margin: 0; color: #94a3b8;">Click to select</p>
            </div>
          </ui-card>

          <ui-card variant="outlined" selectable="true" width="100%">
            <div slot="content" style="padding: 24px; text-align: center; color: #cbd5e1;">
              <div style="font-size: 3rem; margin-bottom: 12px;">☑️</div>
              <h3 style="margin: 0 0 8px; color: white;">Option B</h3>
              <p style="margin: 0; color: #94a3b8;">Click to select</p>
            </div>
          </ui-card>
        </div>

        <h4>With Menu</h4>
        <ui-card variant="elevated" show-menu="true" menu-items='[{"id":"edit","label":"Edit","icon":"✏️"},{"id":"share","label":"Share","icon":"📤"},{"id":"delete","label":"Delete","icon":"🗑️"}]' width="400px">
          <div slot="header" style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <h3 style="margin: 0; color: white; font-size: 1.2rem;">Card with Menu</h3>
            <p style="margin: 4px 0 0; color: #94a3b8; font-size: 0.9rem;">Click the menu button</p>
          </div>
          <div slot="content" style="padding: 16px; color: #cbd5e1;">
            This card has an action menu in the header with multiple options.
          </div>
        </ui-card>

        <h4>Loading State</h4>
        <ui-card variant="elevated" loading="true" width="400px"></ui-card>
      </div>
    `);
  }

  showLayouts() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Card Layouts</h3>
        
        <h4>With Cover Image</h4>
        <div class="card-grid">
          <ui-card variant="elevated" width="100%">
            <div slot="cover" style="height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
              🖼️
            </div>
            <div slot="header" style="padding: 16px;">
              <h3 style="margin: 0; color: white; font-size: 1.2rem;">Beautiful Landscape</h3>
              <p style="margin: 4px 0 0; color: #94a3b8; font-size: 0.9rem;">Photo by John Doe</p>
            </div>
            <div slot="content" style="padding: 0 16px 16px; color: #cbd5e1;">
              A stunning view captured at sunset with vibrant colors.
            </div>
            <div slot="footer" style="padding: 16px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
              <span style="color: #94a3b8; font-size: 0.9rem;">2 hours ago</span>
              <div style="display: flex; gap: 8px;">
                <button style="padding: 6px 12px; background: transparent; color: #6366f1; border: none; cursor: pointer;">❤️ 42</button>
                <button style="padding: 6px 12px; background: transparent; color: #6366f1; border: none; cursor: pointer;">💬 8</button>
              </div>
            </div>
          </ui-card>

          <ui-card variant="outlined" width="100%">
            <div slot="cover" style="height: 200px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
              🎨
            </div>
            <div slot="header" style="padding: 16px;">
              <h3 style="margin: 0; color: white; font-size: 1.2rem;">Abstract Art</h3>
              <p style="margin: 4px 0 0; color: #94a3b8; font-size: 0.9rem;">Digital creation</p>
            </div>
            <div slot="content" style="padding: 0 16px 16px; color: #cbd5e1;">
              Modern abstract design with bold colors and shapes.
            </div>
          </ui-card>
        </div>

        <h4>Product Cards</h4>
        <div class="card-grid">
          <ui-card variant="elevated" hoverable="true" width="100%">
            <div slot="cover" style="height: 180px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">
              💻
            </div>
            <div slot="content" style="padding: 16px;">
              <h3 style="margin: 0 0 8px; color: white; font-size: 1.1rem;">Premium Laptop</h3>
              <p style="margin: 0 0 12px; color: #94a3b8; font-size: 0.9rem;">High-performance computing</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #6366f1; font-size: 1.5rem; font-weight: 700;">$1,299</span>
                <button style="padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>
          </ui-card>

          <ui-card variant="elevated" hoverable="true" width="100%">
            <div slot="cover" style="height: 180px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">
              🎧
            </div>
            <div slot="content" style="padding: 16px;">
              <h3 style="margin: 0 0 8px; color: white; font-size: 1.1rem;">Wireless Headphones</h3>
              <p style="margin: 0 0 12px; color: #94a3b8; font-size: 0.9rem;">Crystal clear audio</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #6366f1; font-size: 1.5rem; font-weight: 700;">$299</span>
                <button style="padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>
          </ui-card>
        </div>
      </div>
    `);
  }

  private initPlayground() {
    (window as any).updateCardPlayground = () => {
      const variant =
        (document.getElementById('cardVariant') as HTMLSelectElement)?.value || 'default';
      const width = (document.getElementById('cardWidth') as HTMLInputElement)?.value || '400px';
      const hoverable =
        (document.getElementById('cardHoverable') as HTMLInputElement)?.checked || false;
      const flippable =
        (document.getElementById('cardFlippable') as HTMLInputElement)?.checked || false;
      const selectable =
        (document.getElementById('cardSelectable') as HTMLInputElement)?.checked || false;
      const showMenu =
        (document.getElementById('cardShowMenu') as HTMLInputElement)?.checked || false;

      const menuItems = [
        { id: 'edit', label: 'Edit', icon: '✏️' },
        { id: 'share', label: 'Share', icon: '📤' },
        { id: 'delete', label: 'Delete', icon: '🗑️' },
      ];

      const container = document.getElementById('cardPlaygroundContainer');
      if (container) {
        let cardHTML = `<ui-card variant="${variant}" width="${width}"`;
        if (hoverable) cardHTML += ` hoverable="true"`;
        if (flippable) cardHTML += ` flippable="true"`;
        if (selectable) cardHTML += ` selectable="true"`;
        if (showMenu) cardHTML += ` show-menu="true" menu-items='${JSON.stringify(menuItems)}'`;
        cardHTML += `>`;

        cardHTML += `
          <div slot="header" style="padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <h3 style="margin: 0; color: white; font-size: 1.2rem;">Card Title</h3>
            <p style="margin: 4px 0 0; color: #94a3b8; font-size: 0.9rem;">Subtitle or description</p>
          </div>
          <div slot="content" style="padding: 16px; color: #cbd5e1;">
            This is the main content area of the card. You can add any content here including text, images, or other components.
          </div>
          <div slot="footer" style="padding: 16px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; gap: 8px;">
            <button style="padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer;">Primary</button>
            <button style="padding: 8px 16px; background: transparent; color: #94a3b8; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; cursor: pointer;">Secondary</button>
          </div>
        `;

        if (flippable) {
          cardHTML += `
            <div slot="back-content" style="padding: 24px; text-align: center; color: #cbd5e1;">
              <div style="font-size: 3rem; margin-bottom: 16px;">🎉</div>
              <h3 style="margin: 0 0 8px; color: white;">Back Side Content</h3>
              <p style="margin: 0; color: #94a3b8;">This is the back of the flippable card!</p>
            </div>
          `;
        }

        cardHTML += `</ui-card>`;
        container.innerHTML = cardHTML;
      }

      // Update code block
      const codeBlock = document.getElementById('cardCodeBlock');
      if (codeBlock) {
        let code = `<ui-card\n  variant="${variant}"\n  width="${width}"`;
        if (hoverable) code += `\n  hoverable="true"`;
        if (flippable) code += `\n  flippable="true"`;
        if (selectable) code += `\n  selectable="true"`;
        if (showMenu) code += `\n  show-menu="true"\n  menu-items='${JSON.stringify(menuItems)}'`;
        code += `>\n  <div slot="header">...</div>\n  <div slot="content">...</div>\n  <div slot="footer">...</div>`;
        if (flippable) code += `\n  <div slot="back-content">...</div>`;
        code += `\n</ui-card>`;
        codeBlock.textContent = code;
      }
    };

    (window as any).copyCardCode = () => {
      const code = document.getElementById('cardCodeBlock')?.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
      });
    };

    (window as any).updateCardPlayground();
  }
}
