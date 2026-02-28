import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/app-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { AppInputValueAccessorDirective } from '../../../../directives/app-input-value-accessor.directive';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-dialog-box-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    AppInputValueAccessorDirective,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dialog-box-playground.component.html',
  styleUrl: './dialog-box-playground.component.scss',
})
export class DialogBoxPlaygroundComponent implements AfterViewInit {
  @ViewChild('dialogBoxElement') dialogBoxElement!: ElementRef;

  pgConfig = this.getDefaultConfig();

  visible = false;
  generatedCode = signal<string>('');
  showCode = true;

  pgAccordionItems = JSON.stringify([
    { id: 'appearance', title: 'Appearance & Styles', icon: '🎨' },
    { id: 'behavior', title: 'Behavior & Logic', icon: '⚡' },
    { id: 'visibility', title: 'Header & Footer Controls', icon: '👁️' },
  ]);

  accordionDefaultOpen = JSON.stringify(['appearance']);

  sizeOptions = [
    { label: 'XS (320px)', value: 'xs' },
    { label: 'SM (480px)', value: 'sm' },
    { label: 'MD (768px)', value: 'md' },
    { label: 'LG (1024px)', value: 'lg' },
    { label: 'XL (1280px)', value: 'xl' },
    { label: 'Fill (90%)', value: 'fill' },
  ];

  variantOptions = [
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' },
  ];

  statusOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Error', value: 'error' },
  ];

  backdropOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Static', value: 'static' },
    { label: 'None', value: 'none' },
  ];

  positionOptions = [
    { label: 'Center', value: 'center' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top Right', value: 'top-right' },
  ];

  menuItems = JSON.stringify([
    { label: 'Action 1', id: 'act1', icon: 'zap' },
    { label: 'Action 2', id: 'act2', icon: 'flag' },
    { type: 'separator' },
    { label: 'Close', id: 'close', icon: 'x', variant: 'danger' },
  ]);

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateConfig();
  }

  getDefaultConfig() {
    return {
      size: 'sm',
      variant: 'outlined',
      status: 'default',
      backdrop: 'default',
      position: 'center',
      okText: '',
      cancelText: '',
      draggable: false,
      resizable: false,
      showHeader: true,
      showFooter: true,
      showMenu: false,
      showMin: true,
      showMax: true,
      showClose: true,
    };
  }

  openDialog() {
    this.visible = true;
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
    if (!this.dialogBoxElement) return '';
    const innerContent = `
  <div style="padding: 20px">
    <p>This is the content of the dialog.</p>
  </div>`;
    return generatePlaygroundCode(
      this.dialogBoxElement.nativeElement as Element,
      'ui-dialog-box',
      innerContent,
    );
  }

  updateConfig() {
    setTimeout(() => {
      this.generatedCode.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode());
  }

  resetConfig() {
    this.pgConfig = this.getDefaultConfig();
    this.updateConfig();
  }
}
