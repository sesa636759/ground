import type { Components, JSX } from "../dist/types/components";

interface QdsFormMessage extends Components.QdsFormMessage, HTMLElement {}
export const QdsFormMessage: {
    prototype: QdsFormMessage;
    new (): QdsFormMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
