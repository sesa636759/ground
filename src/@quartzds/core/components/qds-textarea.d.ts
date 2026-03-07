import type { Components, JSX } from "../dist/types/components";

interface QdsTextarea extends Components.QdsTextarea, HTMLElement {}
export const QdsTextarea: {
    prototype: QdsTextarea;
    new (): QdsTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
