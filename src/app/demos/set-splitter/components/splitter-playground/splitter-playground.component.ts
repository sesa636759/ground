import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-splitter-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './splitter-playground.component.html',
  styleUrl: './splitter-playground.component.scss',
})
export class SplitterPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    direction: 'horizontal',
    gutterSize: 8,
    snapThreshold: 20,
    theme: 'light',
    animated: true,
    rounded: false,
    elevated: false,
    showGutterIcon: true,
    doubleClickCollapse: true,
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  refreshCode() {
    setTimeout(() => {
      this.showCode = false;
      this.cd.detectChanges();
      this.showCode = true;
      this.cd.detectChanges();
    }, 0);
  }

  updateConfig() {
    let code = `<app-splitter\n`;
    code += `  direction="${this.pgConfig.direction}"\n`;
    if (this.pgConfig.gutterSize !== 8) code += `  [gutterSize]="${this.pgConfig.gutterSize}"\n`;
    if (this.pgConfig.snapThreshold !== 20)
      code += `  [snapThreshold]="${this.pgConfig.snapThreshold}"\n`;
    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;
    if (!this.pgConfig.animated) code += `  [animated]="false"\n`;
    if (this.pgConfig.rounded) code += `  rounded="true"\n`;
    if (this.pgConfig.elevated) code += `  elevated="true"\n`;
    if (!this.pgConfig.showGutterIcon) code += `  [showGutterIcon]="false"\n`;
    if (this.pgConfig.doubleClickCollapse) code += `  double-click-collapse\n`;
    code += `>\n`;
    code += `  <div slot="panel-0">Panel 1 Content</div>\n`;
    code += `  <div slot="panel-1">Panel 2 Content</div>\n`;
    code += `</app-splitter>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  onSizeChange(event: any) {
    const sizes = event.detail.sizes.map((s: any) => `${s.toFixed(1)}%`).join(', ');
    this.logEvent(`Sizes changed: [${sizes}]`);
  }

  onPanelCollapse(event: any) {
    this.logEvent(
      `Panel ${event.detail.index} ${event.detail.collapsed ? 'collapsed' : 'expanded'}`,
    );
  }

  onDragStart(event: any) {
    this.logEvent(`Drag started on gutter ${event.detail.index}`);
  }

  onDragEnd(event: any) {
    this.logEvent(`Drag ended`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
