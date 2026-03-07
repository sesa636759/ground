import type { Components, JSX } from "../dist/types/components";

interface QdsLoader extends Components.QdsLoader, HTMLElement {}
export const QdsLoader: {
    prototype: QdsLoader;
    new (): QdsLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
