import type { Components, JSX } from "../dist/types/components";

interface QdsCheckbox extends Components.QdsCheckbox, HTMLElement {}
export const QdsCheckbox: {
    prototype: QdsCheckbox;
    new (): QdsCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
