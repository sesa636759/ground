import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './card-playground.component.html',

  styleUrl: './card-playground.component.scss',
})
export class CardPlaygroundComponent {
  pgConfig = {
    variant: 'elevated',
    hoverable: true,
    flippable: false,
    loading: false,
    showMenu: true,
    borderRadius: '16px',
    width: '340px',
    closable: false,
    selectable: false,
    collapsible: false,
    glass: false,
    layout: 'vertical',
    size: 'medium',
    type: 'default',
    ribbon: '',
    ribbonColor: 'blue',
  };

  pgAccordionItems = JSON.stringify([{ id: 'config', title: 'Configuration', icon: '⚙️' }]);
  accordionDefaultOpen = JSON.stringify(['config']);

  variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Elevated', value: 'elevated' },
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  menuItems = [
    { id: 'save', label: 'Save trip', icon: 'bookmark', iconLibrary: 'lucide' },
    { id: 'share', label: 'Share', icon: 'share-2', iconLibrary: 'lucide' },
    { separator: true },
    { id: 'report', label: 'Report', icon: 'flag', iconLibrary: 'lucide', disabled: true },
  ];

  menuJson = JSON.stringify(this.menuItems);
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
    let code = '<ui-card\n';
    code += `  variant="${this.pgConfig.variant}"\n`;
    if (this.pgConfig.hoverable) code += `  hoverable\n`;
    if (this.pgConfig.flippable) code += `  flippable\n`;
    if (this.pgConfig.loading) code += `  loading\n`;
    if (this.pgConfig.showMenu) code += `  show-menu [menuItems]="menu"\n`;
    if (this.pgConfig.closable) code += `  closable\n`;
    if (this.pgConfig.selectable) code += `  selectable\n`;
    if (this.pgConfig.collapsible) code += `  collapsible\n`;
    if (this.pgConfig.glass) code += `  glass="true"\n`;
    if (this.pgConfig.layout !== 'vertical') code += `  layout="${this.pgConfig.layout}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.type !== 'default') code += `  type="${this.pgConfig.type}"\n`;
    if (this.pgConfig.ribbon)
      code += `  ribbon="${this.pgConfig.ribbon}" ribbon-color="${this.pgConfig.ribbonColor}"\n`;
    code += `  border-radius="${this.pgConfig.borderRadius}"\n`;
    code += `  width="${this.pgConfig.width}"\n`;
    code += '>\n';
    code += '  <img slot="cover" src="..." />\n';
    code += '  <div slot="header"><h3>Card Title</h3></div>\n';
    code += '  <div slot="content">Card body here...</div>\n';
    code += '  <div slot="footer"><ui-button label="Action"></ui-button></div>\n';
    if (this.pgConfig.flippable) {
      code += '  <div slot="back-content">Back side content...</div>\n';
    }
    code += '</ui-card>';

    this.generatedCode.set(code);
    this.refreshCode();
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = {
      variant: 'elevated',
      hoverable: true,
      flippable: false,
      loading: false,
      showMenu: true,
      borderRadius: '16px',
      width: '340px',
      closable: false,
      selectable: false,
      collapsible: false,
      glass: false,
      layout: 'vertical',
      size: 'medium',
      type: 'default',
      ribbon: '',
      ribbonColor: 'blue',
    };
    this.updateConfig();
  }
}
