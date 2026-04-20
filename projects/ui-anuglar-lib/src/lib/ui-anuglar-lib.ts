import { UiButton } from './directives/ui-button.directive';
import { UiCard } from './directives/ui-card.directive';
import { UiCheckbox } from './directives/ui-checkbox.directive';
import { UiDropdown } from './directives/ui-dropdown.directive';
import { UiInput } from './directives/ui-input.directive';
import { UiTabs } from './directives/ui-tabs.directive';

export const GROUND_UI_DIRECTIVES = [
  UiButton,
  UiCard,
  UiCheckbox,
  UiDropdown,
  UiInput,
  UiTabs,
] as const;
