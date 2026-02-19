import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { CodeBlockComponent } from '../../../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-anchor-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CodeBlockComponent,
    AppInputValueAccessorDirective,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anchor-playground.component.html',
  styleUrl: './anchor-playground.component.scss',
})
export class AnchorPlaygroundComponent implements OnInit {
  // Playground State
  pgConfig = {
    mode: 'vertical',
    position: 'left',
    alignment: 'left',
    size: 'medium',
    theme: 'light',
    scrollOffset: 80,
    showTooltip: true,
    showIndicator: true,
    showProgress: false,
    showNumbers: false,
    numberStyle: 'numeric',
    sticky: true,
    affix: false,
    affixOffset: 50,
    smoothScroll: true,
    targetType: 'container', // 'window' or 'container'
  };

  modeOptions = [
    { label: 'Vertical', value: 'vertical' },
    { label: 'Horizontal', value: 'horizontal' },
  ];

  positionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  alignmentOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  numberStyleOptions = [
    { label: 'Numeric (1, 2)', value: 'numeric' },
    { label: 'Decimal (01, 02)', value: 'decimal' },
    { label: 'Alpha (a, b)', value: 'alpha' },
    { label: 'Roman (i, ii)', value: 'roman' },
  ];

  anchorItems = JSON.stringify([
    { id: 'section-1', label: 'Introduction', icon: 'fas fa-home', tooltip: 'Start here' },
    {
      id: 'section-2',
      label: 'Features',
      icon: 'fas fa-star',
      badge: 'New',
      tooltip: 'Key features',
    },
    { id: 'section-3', label: 'Configuration', icon: 'fas fa-cog', tooltip: 'Setup guide' },
    { id: 'section-4', label: 'API', icon: 'fas fa-code', tooltip: 'Reference' },
    { id: 'section-5', label: 'Examples', icon: 'fas fa-book', tooltip: 'See more' },
  ]);

  eventLog = signal<string[]>([]);
  generatedCode = signal('');

  ngOnInit() {
    this.updateConfig();
  }

  updateConfig() {
    let code = `<app-anchor\n`;
    code += `  mode="${this.pgConfig.mode}"\n`;
    if (this.pgConfig.position !== 'left') code += `  position="${this.pgConfig.position}"\n`;
    if (this.pgConfig.alignment !== 'left') code += `  alignment="${this.pgConfig.alignment}"\n`;
    if (this.pgConfig.size !== 'medium') code += `  size="${this.pgConfig.size}"\n`;
    if (this.pgConfig.theme !== 'light') code += `  theme="${this.pgConfig.theme}"\n`;

    code += `  [items]="anchorItems"\n`;
    code += `  [scrollOffset]="${this.pgConfig.scrollOffset}"\n`;

    if (this.pgConfig.showTooltip) code += `  show-tooltip="true"\n`;
    if (this.pgConfig.showIndicator) code += `  show-indicator="true"\n`;
    if (this.pgConfig.showProgress) code += `  show-progress="true"\n`;

    if (this.pgConfig.showNumbers) {
      code += `  show-numbers="true"\n`;
      code += `  number-style="${this.pgConfig.numberStyle}"\n`;
    }

    if (!this.pgConfig.sticky) code += `  [sticky]="false"\n`;
    if (this.pgConfig.affix) {
      code += `  affix="true"\n`;
      code += `  [affixOffset]="${this.pgConfig.affixOffset}"\n`;
    }
    if (!this.pgConfig.smoothScroll) code += `  [smoothScroll]="false"\n`;

    if (this.pgConfig.targetType === 'container') {
      code += `  scroll-container="#playground-scroll-content"\n`;
    }

    code += `></app-anchor>`;

    this.generatedCode.set(code);
  }

  logEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [`[${time}] ${msg}`, ...log.slice(0, 9)]);
  }

  onAnchorSelect(event: any) {
    this.logEvent(`Selected: ${event.detail.id}`);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }
}
