import type { Components, JSX } from "../dist/types/components";

interface QdsSwitch extends Components.QdsSwitch, HTMLElement {}
export const QdsSwitch: {
    prototype: QdsSwitch;
    new (): QdsSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
