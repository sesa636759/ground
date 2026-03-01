import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckboxValueAccessorDirective } from '../../../../directives/ui-checkbox-value-accessor.directive';
import { UiDropdownValueAccessorDirective } from '../../../../directives/ui-dropdown-value-accessor.directive';
import { PlaygroundEventLogComponent } from '../../../../shared/components/playground-event-log/playground-event-log.component';
import { AppPlaygroundComponent } from '../../../../shared/components/app-playground/app-playground.component';
import { generatePlaygroundCode } from '../../../../shared/utils/playground-utils';

@Component({
  selector: 'app-button-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppCheckboxValueAccessorDirective,
    UiDropdownValueAccessorDirective,
    PlaygroundEventLogComponent,
    AppPlaygroundComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button-playground.component.html',
  styleUrl: './button-playground.component.scss',
})
export class ButtonPlaygroundComponent implements OnInit, AfterViewInit {
  @ViewChild('demoElement') demoElement!: ElementRef;
  showCode = true;

  pgAccordionItems = JSON.stringify([
    { id: 'content', title: 'Content & Text', icon: '✍️' },
    { id: 'appearance', title: 'Appearance & Size', icon: '🎨' },
    { id: 'states', title: 'Behavioral States', icon: '⚡' },
    { id: 'link', title: 'Link & Type', icon: '🔗' },
  ]);

  defaultOpen = JSON.stringify(['content']);

  pgConfig = {
    label: 'Explore Components',
    icon: '🚀',
    iconLibrary: 'default',
    iconPosition: 'left',
    iconSize: '',
    badge: '',
    variant: 'primary',
    size: 'md',
    elevation: 2,
    iconOnly: false,
    loading: false,
    loadingPosition: 'left',
    disabled: false,
    pill: false,
    rounded: false,
    fullWidth: false,
    selected: false,
    noRipple: false,
    type: 'button',
    href: '',
    target: '',
    rel: '',
  };

  variantOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
    { label: 'Outline', value: 'outline' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Dark', value: 'dark' },
  ];

  sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
  ];

  iconLibraryOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Lucide', value: 'lucide' },
    { label: 'FontAwesome', value: 'fontawesome' },
    { label: 'Icons8', value: 'icons8' },
    { label: 'Iconoir', value: 'iconoir' },
    { label: 'Ionicons', value: 'ionicons' },
    { label: 'Bootstrap', value: 'bootstrap' },
    { label: 'QuartzDS (SE)', value: 'se' },
  ];

  positionOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
  ];

  typeOptions = [
    { label: 'Button', value: 'button' },
    { label: 'Submit', value: 'submit' },
    { label: 'Reset', value: 'reset' },
  ];

  generatedCodeSignal = signal('');
  eventLog: { time: string; msg: string }[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateConfig();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.generatedCodeSignal.set(this.getCleanFormatedDom());
      this.refreshCode();
    }, 50);
  }

  getCleanFormatedDom(): string {
    if (!this.demoElement) return '';
    return generatePlaygroundCode(this.demoElement.nativeElement as Element, 'ui-button');
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
      label: 'Explore Components',
      icon: '🚀',
      iconLibrary: 'default',
      iconPosition: 'left',
      iconSize: '',
      badge: '',
      variant: 'primary',
      size: 'md',
      elevation: 2,
      iconOnly: false,
      loading: false,
      loadingPosition: 'left',
      disabled: false,
      pill: false,
      rounded: false,
      fullWidth: false,
      selected: false,
      noRipple: false,
      type: 'button',
      href: '',
      target: '',
      rel: '',
    };
    this.updateConfig();
    this.eventLog = [];
  }

  onEvent(msg: string) {
    const time = new Date().toLocaleTimeString();
    this.eventLog.unshift({ time, msg });
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}
