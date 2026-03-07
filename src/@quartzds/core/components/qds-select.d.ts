import type { Components, JSX } from "../dist/types/components";

interface QdsSelect extends Components.QdsSelect, HTMLElement {}
export const QdsSelect: {
    prototype: QdsSelect;
    new (): QdsSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
