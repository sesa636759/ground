import type { Components, JSX } from "../dist/types/components";

interface QdsDropdown extends Components.QdsDropdown, HTMLElement {}
export const QdsDropdown: {
    prototype: QdsDropdown;
    new (): QdsDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
