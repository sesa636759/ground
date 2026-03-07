import type { Components, JSX } from "../dist/types/components";

interface QdsProgressBar extends Components.QdsProgressBar, HTMLElement {}
export const QdsProgressBar: {
    prototype: QdsProgressBar;
    new (): QdsProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
