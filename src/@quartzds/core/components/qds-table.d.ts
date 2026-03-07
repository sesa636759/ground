import type { Components, JSX } from "../dist/types/components";

interface QdsTable extends Components.QdsTable, HTMLElement {}
export const QdsTable: {
    prototype: QdsTable;
    new (): QdsTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
