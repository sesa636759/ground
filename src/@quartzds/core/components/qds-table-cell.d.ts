import type { Components, JSX } from "../dist/types/components";

interface QdsTableCell extends Components.QdsTableCell, HTMLElement {}
export const QdsTableCell: {
    prototype: QdsTableCell;
    new (): QdsTableCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
