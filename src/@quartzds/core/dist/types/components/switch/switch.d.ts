import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Value } from '../controls';
import type { Size } from '../shared';
/**
 * @see https://quartz.se.com/build/components/switch
 */
export declare class Switch implements ComponentInterface {
    #private;
    /**
     * Adds vertical margin to the switch for alignment.
     *
     * This is useful when creating inline layouts so that the first lines have
     * the correct vertical centering.
     */
    readonly inline: boolean;
    /**
     * The switches's size.
     */
    readonly size?: Size;
    /**
     *Sets the switch's state.
     *
     * @webnative
     */
    checked?: boolean;
    /**
     * Prevents the switch from being interacted with: it cannot be pressed or
     * focused.
     *
     * @webnative
     */
    readonly disabled?: boolean;
    /**
     * The [`<form>`](https://developer.mozilla.org/docs/Web/HTML/Element/form)
     * element to associate the switch with (its form owner).
     *
     * The value of this property must be the id of a `<form>` in the same
     * document. If this property is not set, the `<qds-switch>` is associated
     * with its ancestor `<form>` element, if any.
     *
     * This property lets you associate `<qds-switch>` elements to `<form>`s
     * anywhere in the document, not just inside a `<form>`. It can also override
     *an ancestor `<form>` element.
     *
     * @webnative
     */
    readonly form: ElementInternals['form'] | string;
    /**
     * Returns a list of the [`<label>`][] elements associated with the
     * `qds-switch` element.
     *
     * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
     *
     * @readonly
     * @webnative
     */
    readonly labels: HTMLInputElement['labels'];
    /**
     * The name of the switch, which is submitted with the form data.
     *
     * @webnative
     */
    readonly name?: string;
    /**
     * The value of the switch, submitted as a name/value pair with form data.
     *
     * @webnative
     */
    readonly value?: Value;
    /**
     * The error message that would be shown to the user if the `<qds-switch>`
     * was to be checked for validity.
     *
     * @readonly
     * @webnative
     */
    readonly validationMessage: ElementInternals['validationMessage'];
    /**
     * The [`ValidityState`][] object for this `<qds-switch>`.
     *
     * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
     *
     * @readonly
     * @webnative
     */
    readonly validity: ElementInternals['validity'];
    /**
     * True if `<qds-switch>` will be validated when the form is submitted;
     * false otherwise.
     *
     * @readonly
     * @webnative
     */
    readonly willValidate: ElementInternals['willValidate'];
    private readonly internals;
    /**
     * Emitted when the switch loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when a change to the switch's state is committed by the user.
     */
    private readonly changeEmitter;
    /**
     * Emitted when the switch gains focus.
     */
    private readonly focusEmitter;
    private readonly host;
    private tabIndex?;
    private inheritedAttributes;
    protected onClick(event: MouseEvent): void;
    protected checkedChanged(): void;
    protected disabledChanged(): void;
    protected tabindexChanged(newValue: string): void;
    protected valueChanged(): void;
    componentWillLoad(): void;
    render(): any;
    checkValidity: ElementInternals['checkValidity'];
    reportValidity: ElementInternals['reportValidity'];
    setCustomValidity: HTMLInputElement['setCustomValidity'];
}
//# sourceMappingURL=switch.d.ts.map