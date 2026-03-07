import type { Components, JSX } from "../dist/types/components";

interface QdsDialog extends Components.QdsDialog, HTMLElement {}
export const QdsDialog: {
    prototype: QdsDialog;
    new (): QdsDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
