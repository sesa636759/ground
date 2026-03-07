import type { Components, JSX } from "../dist/types/components";

interface QdsTableRow extends Components.QdsTableRow, HTMLElement {}
export const QdsTableRow: {
    prototype: QdsTableRow;
    new (): QdsTableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
