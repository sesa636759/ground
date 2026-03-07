import type { Components, JSX } from "../dist/types/components";

interface QdsTitle extends Components.QdsTitle, HTMLElement {}
export const QdsTitle: {
    prototype: QdsTitle;
    new (): QdsTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
