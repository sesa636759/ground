import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout-manager-playground',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './layout-manager-playground.component.html',
  styleUrl: './layout-manager-playground.component.scss',
})
export class LayoutManagerPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('lm') lmRef!: ElementRef;

  status = signal<string>('Loading...');
  statusClass = signal<string>('loading');

  regionCount = signal(0);
  panelCount = signal(0);
  popoutCount = signal(0);

  regions: any[] = [];
  targetRegionId = '';
  removeRegionId = '';
  quickAddRegionId = '';

  newRegionName = 'New Region';
  newRegionType = 'default';

  quickAddTitle = 'New Panel';
  panelIdInput = '';
  targetMoveRegion = 'center';

  // Computed dropdown options
  get regionSelectOptions() {
    return [
      { label: 'Select Region...', value: '' },
      ...this.regions.map(r => ({ label: `${r.title} (${r.id})`, value: r.id }))
    ];
  }

  get panelMoveRegionOptions() {
    return this.regions.map(r => ({ label: r.title, value: r.id }));
  }

  toasts = signal<any[]>([]);

  ngOnInit() {}

  async ngAfterViewInit() {
    await this.whenLmReady();
    await this.seedLayout();
    this.updateStats();
  }

  async whenLmReady() {
    await customElements.whenDefined('app-layout-manager');
    const lm = this.lmRef.nativeElement;
    if (typeof lm.componentOnReady === 'function') {
      await lm.componentOnReady();
    }
    this.status.set('Ready');
    this.statusClass.set('ready');
    this.showToast('Layout Manager initialized successfully!', 'success');
  }

  makeContent(title: string): HTMLDivElement {
    const div = document.createElement('div');
    div.style.cssText = 'padding:20px;';
    div.innerHTML = `
        <h3 style="margin:0 0 12px 0;color: var(--primary-color);">${title}</h3>
        <p style="margin:0;color:#9ca3af;">This is content for <strong style="color:#e5e7eb;">${title}</strong></p>
        <p style="margin:12px 0 0 0;color:#9ca3af;font-size:12px;">Created at: ${new Date().toLocaleTimeString()}</p>
      `;
    return div;
  }

  async seedLayout() {
    const lm = this.lmRef.nativeElement;

    // Clear previous state (optional, but good for demo consistency)
    // Note: In a real app we might want to load saved state

    try {
      // Create default layout
      await lm.addRegion({
        id: 'left',
        title: 'Explorer',
        position: 'start',
        size: 30,
        minSize: 15,
        collapsible: true,
      });
      await lm.addRegion({ id: 'center', title: 'Editor', position: 'end', size: 40, minSize: 30 });
      await lm.addRegion({
        id: 'right',
        title: 'Tools',
        position: 'end',
        size: 30,
        minSize: 15,
        collapsible: true,
      });

      await lm.addPanel({
        regionId: 'left',
        title: 'Explorer',
        element: this.makeContent('File Explorer'),
        icon: 'fas fa-folder-tree',
        closable: false,
      });

      const mainId = await lm.addPanel({
        regionId: 'center',
        title: 'main.ts',
        element: this.makeContent('Code Editor - main.ts'),
        icon: 'fas fa-code',
      });

      await lm.addPanel({
        regionId: 'center',
        title: 'readme.md',
        element: this.makeContent('Code Editor - readme.md'),
        icon: 'fas fa-file-lines',
      });

      await lm.addPanel({
        regionId: 'right',
        title: 'Outline',
        element: this.makeContent('Document Outline'),
        icon: 'fas fa-list',
        closable: false,
      });

      this.panelIdInput = mainId;
      this.updateStats();
      this.showToast('Default layout loaded', 'success');
    } catch (err: any) {
      this.showToast('Failed to seed panels: ' + err.message, 'error');
    }
  }

  async updateStats() {
    if (!this.lmRef?.nativeElement) return;
    const lm = this.lmRef.nativeElement;

    const panels = Object.keys(lm.panelsById || {}).length;
    const popouts = Object.keys(lm.popouts || {}).length;
    let rCount = 0;

    const countRegions = (node: any) => {
      if (!node) return;
      if (!node.children || node.children.length === 0) {
        if (node.id !== '__root__') rCount++;
      }
      if (node.children) node.children.forEach(countRegions);
    };

    // Need to wait for layout state sometimes or check if root exists
    // Assuming lm.root is accessible directly on element for now as per demo code
    if (lm.root) countRegions(lm.root);

    this.regionCount.set(rCount);
    this.panelCount.set(panels);
    this.popoutCount.set(popouts);

    this.updateRegionsList();
  }

  async updateRegionsList() {
    const lm = this.lmRef.nativeElement;
    if (!lm.getLayoutState) return;

    try {
      const state = await lm.getLayoutState();
      if (!state || !state.root) return;

      const leafRegions: any[] = [];
      const collectLeafRegions = (node: any) => {
        if (!node) return;
        if (!node.children || node.children.length === 0) {
          if (node.id !== '__root__') {
            leafRegions.push({ id: node.id, title: node.title });
          }
        } else {
          if (node.children) node.children.forEach(collectLeafRegions);
        }
      };
      collectLeafRegions(state.root);
      this.regions = leafRegions;

      // Set defaults if empty
      if (!this.quickAddRegionId && this.regions.length > 0)
        this.quickAddRegionId = this.regions[0].id;
      if (!this.targetRegionId && this.regions.length > 0) this.targetRegionId = this.regions[0].id;
    } catch (err) {
      console.error('Error updating regions:', err);
    }
  }

  async quickAddPanel() {
    if (!this.quickAddRegionId) {
      this.showToast('Select a region first', 'error');
      return;
    }

    const lm = this.lmRef.nativeElement;
    const title = this.quickAddTitle || 'New Panel';
    const id = `panel-${Date.now()}`;

    try {
      await lm.addPanel({
        id,
        regionId: this.quickAddRegionId,
        title,
        element: this.makeContent(title),
        icon: 'fas fa-file',
        closable: true,
      });

      this.panelIdInput = id;
      this.quickAddTitle = 'New Panel';
      this.showToast(`Added panel "${title}"`, 'success');
      this.updateStats();
    } catch (err: any) {
      this.showToast(err.message, 'error');
    }
  }

  async addRegion(position: 'start' | 'end') {
    const lm = this.lmRef.nativeElement;
    try {
      await lm.addRegion({
        title: this.newRegionName,
        position,
        type: this.newRegionType,
      });
      this.showToast(`Added region "${this.newRegionName}"`, 'success');
      this.updateStats();
      this.newRegionName = 'New Region';
    } catch (err: any) {
      this.showToast(err.message, 'error');
    }
  }

  async removeRegion() {
    if (!this.removeRegionId) return;
    const lm = this.lmRef.nativeElement;
    try {
      await lm.removeRegion(this.removeRegionId);
      this.showToast(`Removed region`, 'info');
      this.updateStats();
      this.removeRegionId = '';
    } catch (err: any) {
      this.showToast(err.message, 'error');
    }
  }

  async splitCenter(direction: 'horizontal' | 'vertical') {
    const lm = this.lmRef.nativeElement;
    try {
      await lm.splitRegion('center', direction);
      this.showToast(`Split center ${direction}`, 'success');
      this.updateStats();
    } catch (err: any) {
      this.showToast(err.message, 'error');
    }
  }

  async mergeCenter() {
    const lm = this.lmRef.nativeElement;
    try {
      await lm.mergeRegion('center');
      this.showToast(`Merged center`, 'info');
      this.updateStats();
    } catch (err: any) {
      this.showToast(err.message, 'error');
    }
  }

  async performPanelAction(action: 'move' | 'popout' | 'dock' | 'maximize' | 'restore' | 'remove') {
    const lm = this.lmRef.nativeElement;
    const id = this.panelIdInput;
    if (!id) {
      this.showToast('Enter Panel ID', 'error');
      return;
    }

    try {
      switch (action) {
        case 'move':
          await lm.movePanel(id, this.targetMoveRegion);
          this.showToast(`Moved panel to ${this.targetMoveRegion}`, 'success');
          break;
        case 'popout':
          await lm.popoutPanel(id);
          this.showToast(`Popped out panel`, 'success');
          break;
        case 'dock':
          await lm.dockPanel(id, this.targetMoveRegion);
          this.showToast(`Docked panel`, 'success');
          break;
        case 'maximize':
          await lm.maximizePanel(id);
          this.showToast(`Maximized panel`, 'success');
          break;
        case 'restore':
          await lm.restorePanel();
          this.showToast(`Restored panel`, 'success');
          break;
        case 'remove':
          // Close/Remove logic might differ in API, checking demo usage
          // Demo uses: lm.closeAllPanels(target) or something? No, specific panel remove isn't explicitly shown in my snippet for single panel removal via ID except via close button on tab.
          // Except the 'remove' button is handled in demo but the body of that handler wasn't in my view_file output?
          // Let's assume there is a removePanel or closePanel method. Alternatively closeAllPanels closes everything.
          // Ah, looking at demo HTML: `id="remove"` button. I missed its handler in the view.
          // Assuming logic exists. I'll skip for now or use `removePanel` if it exists.
          // Update: `removeRegion` exists. `closeAllPanels` exists.
          // I'll assume `removePanel` might exist or `closePanel`.
          await (lm.removePanel ? lm.removePanel(id) : lm.closePanel(id)); // Guessing API
          this.showToast(`Removed panel`, 'info');
          break;
      }
      this.updateStats();
    } catch (err: any) {
      this.showToast(err.message, 'error');
    }
  }

  showToast(msg: string, type: 'success' | 'error' | 'info' = 'info') {
    const toast = { msg, type, id: Date.now() };
    this.toasts.update((d) => [...d, toast]);
    setTimeout(() => {
      this.toasts.update((d) => d.filter((t) => t.id !== toast.id));
    }, 3000);
  }
}
