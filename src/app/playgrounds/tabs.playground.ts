import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-playground',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="playground-page">
      <div class="playground-header">
        <h2>Tabs</h2>
        <p>
          Comprehensive tabs component with multiple variants, orientations, and advanced features.
        </p>
      </div>

      <!-- Demo Controls -->
      <div class="demo-controls">
        <button class="btn-control active" (click)="showPlayground()">🎮 Playground</button>
        <button class="btn-control" (click)="showVariants()">Variants</button>
        <button class="btn-control" (click)="showOrientations()">Orientations</button>
        <button class="btn-control" (click)="showAdvanced()">Advanced</button>
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
export class TabsPlayground {
  demoContent = signal('');

  constructor() {
    this.showPlayground();
  }

  showPlayground() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <p>Configure tab properties and see the results in real-time</p>
        
        <div class="playground-settings">
          <label><span>Variant:</span>
            <select id="tabVariant" onchange="window.updateTabsPlayground()">
              <option value="line">Line</option>
              <option value="card">Card</option>
              <option value="pill">Pill</option>
              <option value="subtle">Subtle</option>
              <option value="glass">Glass</option>
              <option value="folder">Folder</option>
              <option value="enclosed">Enclosed</option>
            </select>
          </label>
          <label><span>Size:</span>
            <select id="tabSize" onchange="window.updateTabsPlayground()">
              <option value="sm">Small</option>
              <option value="md" selected>Medium</option>
              <option value="lg">Large</option>
            </select>
          </label>
          <label><span>Orientation:</span>
            <select id="tabOrientation" onchange="window.updateTabsPlayground()">
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </label>
          <label><span>Position:</span>
            <select id="tabPosition" onchange="window.updateTabsPlayground()">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="full-width">Full Width</option>
            </select>
          </label>
          <label style="flex-direction: row; align-items: center; gap: 10px;">
            <input type="checkbox" id="tabClosable" onchange="window.updateTabsPlayground()">
            <span>Closable Tabs</span>
          </label>
          <label style="flex-direction: row; align-items: center; gap: 10px;">
            <input type="checkbox" id="tabShowMenu" onchange="window.updateTabsPlayground()">
            <span>Show Tab List</span>
          </label>
        </div>

        <div id="tabsPlaygroundContainer" style="min-height: 300px; background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 40px;"></div>

        <div class="code-block">
          <button onclick="window.copyTabsCode()">Copy</button>
          <pre><code id="tabsCodeBlock"></code></pre>
        </div>
      </div>
    `);

    setTimeout(() => this.initPlayground(), 100);
  }

  showVariants() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Tab Variants</h3>
        <p>Available in 7 different visual styles</p>
        
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <div>
            <h4 style="color: #cbd5e1; margin-bottom: 12px;">Line (Default)</h4>
            <ui-tabs variant="line" items='[{"id":"1","title":"Home","content":"Home content"},{"id":"2","title":"Profile","content":"Profile content"},{"id":"3","title":"Settings","content":"Settings content"}]'></ui-tabs>
          </div>
          
          <div>
            <h4 style="color: #cbd5e1; margin-bottom: 12px;">Card</h4>
            <ui-tabs variant="card" items='[{"id":"1","title":"Dashboard","content":"Dashboard content"},{"id":"2","title":"Analytics","content":"Analytics content"},{"id":"3","title":"Reports","content":"Reports content"}]'></ui-tabs>
          </div>
          
          <div>
            <h4 style="color: #cbd5e1; margin-bottom: 12px;">Pill</h4>
            <ui-tabs variant="pill" items='[{"id":"1","title":"Overview","content":"Overview content"},{"id":"2","title":"Details","content":"Details content"},{"id":"3","title":"History","content":"History content"}]'></ui-tabs>
          </div>
          
          <div>
            <h4 style="color: #cbd5e1; margin-bottom: 12px;">Glass</h4>
            <ui-tabs variant="glass" items='[{"id":"1","title":"Photos","content":"Photos content"},{"id":"2","title":"Videos","content":"Videos content"},{"id":"3","title":"Documents","content":"Documents content"}]'></ui-tabs>
          </div>
        </div>
      </div>
    `);
  }

  showOrientations() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Orientations & Positions</h3>
        
        <div style="margin-bottom: 32px;">
          <h4 style="color: #cbd5e1; margin-bottom: 12px;">Horizontal (Default)</h4>
          <ui-tabs orientation="horizontal" items='[{"id":"1","title":"Tab 1","icon":"🏠","content":"Content 1"},{"id":"2","title":"Tab 2","icon":"📊","content":"Content 2"},{"id":"3","title":"Tab 3","icon":"⚙️","content":"Content 3"}]'></ui-tabs>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="color: #cbd5e1; margin-bottom: 12px;">Vertical</h4>
          <ui-tabs orientation="vertical" items='[{"id":"1","title":"Dashboard","icon":"📊","content":"Dashboard content here"},{"id":"2","title":"Users","icon":"👥","content":"Users content here"},{"id":"3","title":"Settings","icon":"⚙️","content":"Settings content here"}]'></ui-tabs>
        </div>
        
        <div>
          <h4 style="color: #cbd5e1; margin-bottom: 12px;">Full Width</h4>
          <ui-tabs position="full-width" items='[{"id":"1","title":"Option A","content":"Content A"},{"id":"2","title":"Option B","content":"Content B"},{"id":"3","title":"Option C","content":"Content C"}]'></ui-tabs>
        </div>
      </div>
    `);
  }

  showAdvanced() {
    this.demoContent.set(`
      <div class="demo-block">
        <h3>Advanced Features</h3>
        
        <div style="margin-bottom: 32px;">
          <h4 style="color: #cbd5e1; margin-bottom: 12px;">With Badges & Icons</h4>
          <ui-tabs items='[{"id":"1","title":"Inbox","icon":"📥","badge":5,"content":"Inbox messages"},{"id":"2","title":"Drafts","icon":"📝","badge":2,"content":"Draft messages"},{"id":"3","title":"Sent","icon":"📤","content":"Sent messages"}]'></ui-tabs>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="color: #cbd5e1; margin-bottom: 12px;">Closable Tabs</h4>
          <ui-tabs items='[{"id":"1","title":"Document 1","closable":true,"content":"Document 1 content"},{"id":"2","title":"Document 2","closable":true,"content":"Document 2 content"},{"id":"3","title":"Document 3","closable":true,"content":"Document 3 content"}]' show-close-all="true"></ui-tabs>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h4 style="color: #cbd5e1; margin-bottom: 12px;">With Actions Menu</h4>
          <ui-tabs items='[{"id":"1","title":"Project A","actions":true,"content":"Project A details"},{"id":"2","title":"Project B","actions":true,"content":"Project B details"},{"id":"3","title":"Project C","actions":true,"content":"Project C details"}]'></ui-tabs>
        </div>
        
        <div>
          <h4 style="color: #cbd5e1; margin-bottom: 12px;">Icon Only</h4>
          <ui-tabs icon-only="true" items='[{"id":"1","title":"Home","icon":"🏠","content":"Home content"},{"id":"2","title":"Search","icon":"🔍","content":"Search content"},{"id":"3","title":"Settings","icon":"⚙️","content":"Settings content"},{"id":"4","title":"Profile","icon":"👤","content":"Profile content"}]'></ui-tabs>
        </div>
      </div>
    `);
  }

  private initPlayground() {
    (window as any).updateTabsPlayground = () => {
      const variant = (document.getElementById('tabVariant') as HTMLSelectElement)?.value || 'line';
      const size = (document.getElementById('tabSize') as HTMLSelectElement)?.value || 'md';
      const orientation =
        (document.getElementById('tabOrientation') as HTMLSelectElement)?.value || 'horizontal';
      const position =
        (document.getElementById('tabPosition') as HTMLSelectElement)?.value || 'left';
      const closable =
        (document.getElementById('tabClosable') as HTMLInputElement)?.checked || false;
      const showMenu =
        (document.getElementById('tabShowMenu') as HTMLInputElement)?.checked || false;

      const items = [
        {
          id: '1',
          title: 'Home',
          icon: '🏠',
          content:
            '<div style="padding: 20px; color: #cbd5e1;">Home tab content goes here...</div>',
          closable,
        },
        {
          id: '2',
          title: 'Profile',
          icon: '👤',
          content:
            '<div style="padding: 20px; color: #cbd5e1;">Profile information and settings...</div>',
          closable,
          badge: 3,
        },
        {
          id: '3',
          title: 'Messages',
          icon: '💬',
          content: '<div style="padding: 20px; color: #cbd5e1;">Your messages appear here...</div>',
          closable,
          badge: 12,
        },
        {
          id: '4',
          title: 'Settings',
          icon: '⚙️',
          content: '<div style="padding: 20px; color: #cbd5e1;">Application settings...</div>',
          closable,
        },
      ];

      const container = document.getElementById('tabsPlaygroundContainer');
      if (container) {
        container.innerHTML = `
          <ui-tabs
            variant="${variant}"
            size="${size}"
            orientation="${orientation}"
            position="${position}"
            ${showMenu ? 'show-tab-list="true"' : ''}
            ${closable ? 'show-close-all="true"' : ''}
            items='${JSON.stringify(items)}'
          ></ui-tabs>
        `;
      }

      // Update code block
      const codeBlock = document.getElementById('tabsCodeBlock');
      if (codeBlock) {
        let code = `<ui-tabs\n  variant="${variant}"\n  size="${size}"\n  orientation="${orientation}"\n  position="${position}"`;
        if (showMenu) code += `\n  show-tab-list="true"`;
        if (closable) code += `\n  show-close-all="true"`;
        code += `\n  items='${JSON.stringify(items, null, 2)}'\n></ui-tabs>`;
        codeBlock.textContent = code;
      }
    };

    (window as any).copyTabsCode = () => {
      const code = document.getElementById('tabsCodeBlock')?.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
      });
    };

    (window as any).updateTabsPlayground();
  }
}
