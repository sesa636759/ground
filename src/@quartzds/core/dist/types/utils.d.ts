type NonEmpty<T extends string = string> = T extends '' ? never : T;
/**
 * Calls all exported `defineCustomElementQds*` functions in the provided
 * module.
 *
 * @param module The module to call the exported functions from.
 */
export declare const defineCustomElements: (module: Record<string, unknown>) => void;
/**
 * Get the currently set platform.
 *
 * @param element The element where the platform will be retrieved from. Can be
 * either:
 *
 * - A non-empty CSS selector string
 * - A reference to an
 * [`Element`](https://developer.mozilla.org/docs/Web/API/Element)
 *
 * By default, this is the root node of the current document.
 *
 * @returns The currently set platform if one is set, `undefined` otherwise.
 */
export declare const getPlatform: <S extends string, E extends Element = Element>(element?: E | NonEmpty<S>) => string | undefined;
/**
 * Sets the current platform.
 *
 * The current platform represented by a `qds-platform-`-prefixed CSS class
 * will be removed.
 *
 * @param platform The platform to set. Must be a non-empty value.
 * @param element The element where the platform will be set. Can be either:
 *
 * - A non-empty CSS selector string
 * - A reference to an
 * [`Element`](https://developer.mozilla.org/docs/Web/API/Element)
 *
 * By default, this is the root node of the current document.
 */
export declare const setPlatform: <P extends string, S extends string = string, E extends Element = Element>(platform: NonEmpty<P>, element?: E | NonEmpty<S>) => void;
/**
 * Get the currently set theme.
 *
 * @param element The element where the theme will be retrieved from. Can be
 * either:
 *
 * - A non-empty CSS selector string
 * - A reference to an
 * [`Element`](https://developer.mozilla.org/docs/Web/API/Element)
 *
 * By default, this is the root node of the current document.
 *
 * @returns The currently set theme if one is set, `undefined` otherwise.
 */
export declare const getTheme: <S extends string, E extends Element = Element>(element?: E | NonEmpty<S>) => string | undefined;
/**
 * Sets the current theme.
 *
 * The current theme represented by a `qds-theme-`-prefixed CSS class will be
 * removed.
 *
 * @param theme The theme to set. Must be a non-empty value.
 * @param element The element where the theme will be set. Can be either:
 *
 * - A non-empty CSS selector string
 * - A reference to an
 * [`Element`](https://developer.mozilla.org/docs/Web/API/Element)
 *
 * By default, this is the root node of the current document.
 */
export declare const setTheme: <T extends string, S extends string = string, E extends Element = Element>(theme: NonEmpty<T>, element?: E | NonEmpty<S>) => void;
export {};
//# sourceMappingURL=utils.d.ts.map