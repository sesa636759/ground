import type { Components, JSX } from "../dist/types/components";

interface QdsButton extends Components.QdsButton, HTMLElement {}
export const QdsButton: {
    prototype: QdsButton;
    new (): QdsButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
