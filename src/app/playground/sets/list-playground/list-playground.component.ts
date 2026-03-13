import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { PLAYGROUND_IMPORTS } from '../../../shared/components/demo-playground/playground.constants';
import { BasePlaygroundComponent } from '../../../shared/components/demo-playground/base-playground.component';

@Component({
  selector: 'ds-list-playground',
  standalone: true,
  imports: [...PLAYGROUND_IMPORTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './list-playground.component.html',
  styleUrl: './list-playground.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DmListPlaygroundComponent extends BasePlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = this.getDefaultConfig();

  pgAccordionItems = [
    { id: 'global', title: 'Global Configuration', icon: 'settings', iconLibrary: 'lucide' },
    { id: 'item', title: 'Item Template', icon: 'list', iconLibrary: 'lucide' },
    { id: 'features', title: 'Advanced Features', icon: 'zap', iconLibrary: 'lucide' },
  ];

  defaultOpen = ['global', 'item'];

  variantOptions = [
    { label: 'Filled', value: 'filled' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Text', value: 'text' },
    { label: 'Soft', value: 'soft' },
  ];

  colorOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  ngOnInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      variant: 'filled',
      color: 'primary',
      size: 'medium',
      dense: false,
      dividers: true,
      flush: false,
      horizontal: false,
      numbered: false,
      selectable: true,
      multiSelect: false,
      rounded: true,
      elevated: false,
      subheader: 'My List Group',
      searchable: false,
      searchPlaceholder: 'Search items...',
      loading: false,
      paginated: false,
      itemsPerPage: 5,
      isDraggable: false,
      checkboxSelection: false,
      // Item Props
      itemLabel: 'List Item',
      itemSublabel: 'Description text',
      itemIcon: 'fas fa-check-circle',
      itemActionIcon: 'fas fa-chevron-right',
      itemBadge: 'New',
      itemBadgeColor: 'success',
      itemCounter: '5',
      itemDisabled: false,
      showCheckbox: false,
    };
  }

  updateConfig() {
    const config = this.pgConfig;
    let code = `<ui-list\n`;
    code += `  variant="${config.variant}"\n`;
    code += `  color="${config.color}"\n`;
    code += `  size="${config.size}"\n`;
    if (config.dense) code += `  dense\n`;
    if (config.dividers) code += `  dividers\n`;
    if (config.flush) code += `  flush\n`;
    if (config.horizontal) code += `  horizontal\n`;
    if (config.numbered) code += `  numbered\n`;
    if (!config.selectable) code += `  [selectable]="false"\n`;
    if (config.multiSelect) code += `  multi-select\n`;
    if (config.rounded) code += `  rounded\n`;
    if (config.elevated) code += `  elevated\n`;
    if (config.subheader) code += `  subheader="${config.subheader}"\n`;
    if (config.searchable) {
      code += `  searchable\n`;
      code += `  search-placeholder="${config.searchPlaceholder}"\n`;
    }
    if (config.loading) code += `  loading\n`;
    if (config.paginated) {
      code += `  paginated\n`;
      code += `  [items-per-page]="${config.itemsPerPage}"\n`;
    }
    if (config.isDraggable) code += `  is-draggable\n`;
    if (config.checkboxSelection) code += `  checkbox-selection\n`;
    code += `>\n`;

    // Sample items
    for (let i = 1; i <= 3; i++) {
      code += `  <ui-list-item\n`;
      code += `    label="${config.itemLabel} ${i}"\n`;
      if (config.itemSublabel) code += `    sublabel="${config.itemSublabel}"\n`;
      if (config.itemIcon) code += `    icon="${config.itemIcon}"\n`;
      if (config.itemActionIcon) code += `    action-icon="${config.itemActionIcon}"\n`;
      if (i === 1 && config.itemBadge)
        code += `    badge="${config.itemBadge}" badge-color="${config.itemBadgeColor}"\n`;
      if (i === 2 && config.itemCounter)
        code += `    counter="${config.itemCounter}"\n`;
      if (i === 3 && config.itemDisabled) code += `    disabled\n`;
      if (config.showCheckbox) code += `    show-checkbox\n`;
      code += `  ></ui-list-item>\n`;
    }

    code += `</ui-list>`;

    this.generatedCode.set(code);
    this.refreshCode();
  }

  onItemClick(_event: any) {
    this.logEvent(`Item clicked`);
  }
}
