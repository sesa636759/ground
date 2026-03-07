import type { Components, JSX } from "../dist/types/components";

interface QdsTableHeadCell extends Components.QdsTableHeadCell, HTMLElement {}
export const QdsTableHeadCell: {
    prototype: QdsTableHeadCell;
    new (): QdsTableHeadCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
