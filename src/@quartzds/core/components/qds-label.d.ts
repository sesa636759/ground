import type { Components, JSX } from "../dist/types/components";

interface QdsLabel extends Components.QdsLabel, HTMLElement {}
export const QdsLabel: {
    prototype: QdsLabel;
    new (): QdsLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
