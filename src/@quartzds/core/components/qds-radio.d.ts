import type { Components, JSX } from "../dist/types/components";

interface QdsRadio extends Components.QdsRadio, HTMLElement {}
export const QdsRadio: {
    prototype: QdsRadio;
    new (): QdsRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
