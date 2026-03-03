import { AppInputValueAccessorDirective } from 'src/app/directives/ui-input-value-accessor.directive';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ViewEncapsulation,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-card-playground',
  standalone: true,
  imports: [
    AppInputValueAccessorDirective,
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './card-playground.component.html',

  styleUrl: './card-playground.component.scss',
})
export class CardPlaygroundComponent implements AfterViewInit {
  @ViewChild('cardElement') cardElement!: ElementRef;

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

  pgAccordionItems = JSON.stringify([{ id: 'config', title: 'Configuration', icon: '??' }]);
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
  generatedCodeSignal = signal('');
  showCode = true;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
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

  getCleanFormatedDom(): string {
    if (!this.cardElement) return '';
    return generatePlaygroundCode(this.cardElement.nativeElement as Element, 'ui-card');
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCodeSignal());
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

