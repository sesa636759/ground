import type { Components, JSX } from "../dist/types/components";

interface QdsInput extends Components.QdsInput, HTMLElement {}
export const QdsInput: {
    prototype: QdsInput;
    new (): QdsInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
