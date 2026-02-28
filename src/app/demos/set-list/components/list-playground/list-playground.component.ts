import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { AppCheckboxValueAccessorDirective } from 'src/app/directives/app-checkbox-value-accessor.directive';

@Component({
  selector: 'app-list-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './list-playground.component.html',
  styleUrl: './list-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ListPlaygroundComponent {
  // Playground State
  pgConfig = {
    variant: 'filled',
    color: 'primary',
    size: 'medium',
    dense: false,
    dividers: true,
    flush: false,
    horizontal: false,
    numbered: false,
    grouped: false,
    selectable: false,
    rounded: true,
    elevated: false,
    itemLabel: 'List Item',
    itemSublabel: 'Description text',
    itemIcon: 'fas fa-check-circle',
    itemActionIcon: 'fas fa-chevron-right',
    itemBadge: 'New',
    itemBadgeColor: 'success',
    itemCounter: 5,
    itemDisabled: false,
  };

  eventLog = signal<string[]>([]);
  generatedCode = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {
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
    let code = `<app-list\n`;
    code += `  variant="${this.pgConfig.variant}"\n`;
    code += `  color="${this.pgConfig.color}"\n`;
    code += `  size="${this.pgConfig.size}"\n`;

    if (this.pgConfig.dense) code += `  dense="true"\n`;
    if (this.pgConfig.dividers) code += `  dividers="true"\n`;
    if (this.pgConfig.flush) code += `  flush="true"\n`;
    if (this.pgConfig.horizontal) code += `  horizontal="true"\n`;
    if (this.pgConfig.numbered) code += `  numbered="true"\n`;
    if (this.pgConfig.grouped) code += `  grouped="true"\n`;
    if (this.pgConfig.selectable) code += `  selectable="true"\n`;
    if (this.pgConfig.rounded) code += `  rounded="true"\n`;
    if (this.pgConfig.elevated) code += `  elevated="true"\n`;

    code += `>\n`;

    // Sample items
    for (let i = 1; i <= 3; i++) {
      code += `  <app-list-item\n`;
      code += `    label="${this.pgConfig.itemLabel} ${i}"\n`;
      if (this.pgConfig.itemSublabel) code += `    sublabel="${this.pgConfig.itemSublabel}"\n`;
      if (this.pgConfig.itemIcon) code += `    icon="${this.pgConfig.itemIcon}"\n`;
      if (this.pgConfig.itemActionIcon)
        code += `    action-icon="${this.pgConfig.itemActionIcon}"\n`;
      if (i === 1 && this.pgConfig.itemBadge)
        code += `    badge="${this.pgConfig.itemBadge}" badge-color="${this.pgConfig.itemBadgeColor}"\n`;
      if (i === 2 && this.pgConfig.itemCounter > 0)
        code += `    counter="${this.pgConfig.itemCounter}"\n`;
      if (i === 3 && this.pgConfig.itemDisabled) code += `    disabled="true"\n`;
      code += `  ></app-list-item>\n`;
    }

    code += `</app-list>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onItemClick(_event: any) {
    // const { item, index } = event.detail; // Adjust based on actual event structure if needed
    this.logEvent(`Item clicked`);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
