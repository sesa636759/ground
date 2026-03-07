import type { Components, JSX } from "../dist/types/components";

interface QdsChip extends Components.QdsChip, HTMLElement {}
export const QdsChip: {
    prototype: QdsChip;
    new (): QdsChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
