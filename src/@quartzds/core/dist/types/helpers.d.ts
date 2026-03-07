import type { MiddlewareState, OffsetOptions as LibraryOffsetOptions, ReferenceElement } from '@floating-ui/dom';
import type { Except } from 'type-fest';
import type { LinkIcon } from './components/shared';
export type Attributes = Record<string, string | undefined>;
declare const inheritAttributes: (element: Element, attributes?: string[]) => Attributes;
/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 *
 * @param element The element that the attributes should be copied from.
 */
export declare const inheritAriaAttributes: (element: Element) => ReturnType<typeof inheritAttributes>;
/**
 * Throws an error if the value is falsy.
 *
 * @param value Value to test.
 * @param message Optional message to display in development builds.
 */
export declare function invariant(value: unknown, message?: string): asserts value;
/**
 * From an object pick a set of keys.
 *
 * @param object Object to pick from.
 * @param keys They keys to pick.
 * @returns New object with only the picked keys.
 */
export declare const pick: <T, K extends keyof T>(object: T, ...keys: K[]) => Pick<T, K>;
export type QdsFocusEventDetail = Pick<FocusEvent, 'relatedTarget'>;
export type QdsInputEventDetail = Pick<InputEvent, 'data' | 'inputType' | 'isComposing'>;
export declare const pickFocusEventAttributes: (event: FocusEvent) => QdsFocusEventDetail;
export declare const pickInputEventAttributes: (event: InputEvent) => QdsInputEventDetail;
export declare const propertyToPx: (element: Element, property: string) => number | undefined;
export declare const ignorePromise: <T>(promise: Promise<T>) => void;
export declare const isTouchDevice: () => boolean;
export declare const roundByDPR: (value: number) => number;
/**
 * Checks if an element's content is overflowing.
 *
 * @param element The element to check.
 * @returns `true` if overflowing, `false` otherwise.
 */
export declare const isOverflowing: (element: Element) => boolean;
export declare const determineLinkIcon: (href?: URL | string, target?: string) => LinkIcon | undefined;
export declare function attachInternals(this: unknown): ElementInternals;
export declare const resolveTarget: (target?: ReferenceElement | string | (() => ReferenceElement | string)) => ReferenceElement | undefined;
export type OffsetValue = Except<Exclude<LibraryOffsetOptions, Function | number>, 'mainAxis'>;
export type OffsetFunction = (state: MiddlewareState) => OffsetValue;
export type OffsetOptions = OffsetFunction | OffsetValue;
export {};
//# sourceMappingURL=helpers.d.ts.map