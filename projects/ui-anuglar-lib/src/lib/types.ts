import type {
  CardFlipEvent,
  Components,
  DropdownChangeEvent,
  DropdownOption,
  TabChangeEvent,
  TabItem,
  UiButtonCustomEvent,
  UiCardCustomEvent,
  UiCheckboxCustomEvent,
  UiDropdownCustomEvent,
  UiInputCustomEvent,
  UiTabsCustomEvent,
} from 'app-ui-library/dist/types/components';

export type GroundUiButtonProps = Components.UiButton;
export type GroundUiCardProps = Components.UiCard;
export type GroundUiCheckboxProps = Components.UiCheckbox;
export type GroundUiDropdownProps = Components.UiDropdown;
export type GroundUiInputProps = Components.UiInput;
export type GroundUiTabsProps = Components.UiTabs;

export type GroundUiButtonClickEvent = UiButtonCustomEvent<MouseEvent>;
export type GroundUiCardClickEvent = UiCardCustomEvent<void>;
export type GroundUiCardFlipEvent = UiCardCustomEvent<CardFlipEvent>;
export type GroundUiCardSelectEvent = UiCardCustomEvent<{ selected: boolean }>;
export type GroundUiCheckboxChangeEvent = UiCheckboxCustomEvent<{
  checked: boolean;
  value: string;
  indeterminate: boolean;
}>;
export type GroundUiDropdownChangeEvent = UiDropdownCustomEvent<DropdownChangeEvent>;
export type GroundUiInputChangeEvent = UiInputCustomEvent<string>;
export type GroundUiTabsChangeEvent = UiTabsCustomEvent<TabChangeEvent>;

export type { CardFlipEvent, DropdownChangeEvent, DropdownOption, TabChangeEvent, TabItem };