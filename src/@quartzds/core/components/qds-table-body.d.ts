import type { Components, JSX } from "../dist/types/components";

interface QdsTableBody extends Components.QdsTableBody, HTMLElement {}
export const QdsTableBody: {
    prototype: QdsTableBody;
    new (): QdsTableBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
