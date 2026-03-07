import type { AutoUpdateOptions, DetectOverflowOptions, FlipOptions, Placement, ReferenceElement, ShiftOptions, Strategy } from '@floating-ui/dom';
import type { ComponentInterface } from '../../stencil-public-runtime';
import type { OffsetOptions } from '../../helpers';
/**
 * @slot Content to display in the dropdown.
 * @see https://quartz.se.com/build/components/dropdown
 */
export declare class Dropdown implements ComponentInterface {
    #private;
    /**
     * Options to pass to Floating UI's
     * [`autoUpdate()` function](https://floating-ui.com/docs/autoUpdate).
     *
     * @see https://floating-ui.com/docs/autoupdate#options
     */
    readonly autoUpdateOptions?: AutoUpdateOptions;
    /**
     * Prevents the dropdown from being shown by user interaction. The dropdown
     * can still be displayed by calling the `show()` method.
     */
    readonly disabled: boolean;
    /**
     * Options to pass to Floating UI's
     * [`flip` middleware](https://floating-ui.com/docs/flip).
     *
     * The [`crossAxis` option](https://floating-ui.com/docs/flip#crossaxis) is
     * set to the value of the `noShift` property by default for interoperability
     * with the [`shift` middleware](https://floating-ui.com/docs/shift).
     *
     * @see https://floating-ui.com/docs/flip#options
     */
    readonly flipOptions?: Partial<DetectOverflowOptions & FlipOptions>;
    /**
     * Disable Floating UI's
     * [`flip` middleware](https://floating-ui.com/docs/flip).
     */
    readonly noFlip: boolean;
    /**
     * Disable Floating UI's
     * [`shift` middleware](https://floating-ui.com/docs/shift).
     */
    readonly noShift: boolean;
    /**
     * Options to pass to Floating UI's
     * [`offset` middleware](https://floating-ui.com/docs/offset).
     *
     * The [`mainAxis` option](https://floating-ui.com/docs/offset#mainaxis) is
     * not supported.
     *
     * @see https://floating-ui.com/docs/offset#options
     */
    readonly offsetOptions?: OffsetOptions;
    /**
     * Where to place the dropdown relative to the `target`.
     *
     * @see https://floating-ui.com/docs/tutorial#placements
     */
    readonly placement: Placement;
    /**
     * Options to pass to Floating UI's
     * [`shift` middleware](https://floating-ui.com/docs/shift).
     *
     * @see https://floating-ui.com/docs/shift#options
     */
    readonly shiftOptions?: Partial<DetectOverflowOptions & ShiftOptions>;
    /**
     * The CSS position strategy to use.
     *
     * @see https://floating-ui.com/docs/computeposition#strategy
     */
    readonly strategy?: Strategy;
    /**
     * The trigger element that will trigger the dropdown. The target specified
     * can be any of the following:
     *
     * - A CSS selector string
     * - A reference to an [`Element`][] or [Virtual Element][]
     * - A function returning a reference to an [`Element`][],
     * [Virtual Element][], or a CSS selector string
     *
     * [`Element`]: https://developer.mozilla.org/docs/Web/API/Element
     * [Virtual Element]: https://floating-ui.com/docs/virtual-elements
     */
    readonly target: ReferenceElement | string | (() => ReferenceElement | string);
    /**
     * Emitted when the user instructs the browser that they wish to dismiss the
     * current open dropdown by pressing the `Esc` key.
     *
     * When a dropdown is dismissed with the `Esc` key, both the `qdsCancel` and
     * `qdsClose` events are emitted.
     */
    private readonly cancelEmitter;
    /**
     * Emitted when the dropdown is closed.
     */
    private readonly closeEmitter;
    private readonly host;
    private hostAriaLabelledBy?;
    private hostDisplay?;
    private hostPosition?;
    private hostTransform?;
    /**
     * Update the dropdown's middleware and position.
     */
    update(): Promise<void>;
    protected handleMouseDown(event: MouseEvent): void;
    protected updateReferenceElement(): Promise<void>;
    protected updateMiddleware(): Promise<void>;
    protected updatePosition(): Promise<void>;
    protected startAutoUpdate(): void;
    componentWillLoad(): Promise<void>;
    disconnectedCallback(): void;
    render(): any;
    show(): void;
    close(): void;
}
//# sourceMappingURL=dropdown.d.ts.map