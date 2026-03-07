import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Size } from '../shared';
export type CheckboxValue = number | string | null;
/**
 * `<qds-checkbox>` elements are rendered as boxes that are checked (ticked)
 * when activated, like you might see in an official government paper form. A
 * checkbox allows you to select single values for submission in a form (or not).
 *
 * @see https://quartz.se.com/build/components/checkbox
 */
export declare class Checkbox implements ComponentInterface {
    #private;
    /**
     * Adds vertical margin to the checkbox for alignment.
     *
     * This is useful when creating inline layouts so that the first lines have
     * the correct vertical centering.
     */
    readonly inline: boolean;
    /**
     * The checkbox's size.
     */
    readonly size?: Size;
    /**
     * The checkbox's text.
     */
    readonly text?: string;
    /**
     * Sets the checkbox's state.
     *
     * @webnative
     */
    checked?: boolean;
    /**
     * Prevents the checkbox from being interacted with: it cannot be pressed or
     * focused.
     *
     * @webnative
     */
    readonly disabled?: boolean;
    /**
     * The [`<form>`][] element to associate the checkbox with (its form owner).
     *
     * The value of this attribute must be the id of a `<form>` in the same
     * document. If this attribute is not set, the `<qds-checkbox>` is associated
     * with its ancestor `<form>` element, if any.
     *
     * This attribute lets you associate `<qds-checkbox>` elements to `<form>`s
     * anywhere in the document, not just inside a `<form>`. It can also override
     * an ancestor `<form>` element.
     *
     * [`<form>`]: https://developer.mozilla.org/docs/Web/HTML/Element/form
     *
     * @readonly
     * @webnative
     */
    readonly form: ElementInternals['form'] | string;
    /**
     * Sets the checkbox to an indeterminate state. This is usually applied to
     * checkboxes that represent a "select all/none" behavior when associated
     * checkboxes have a mix of checked and unchecked states.
     *
     * @webnative
     */
    indeterminate?: boolean;
    /**
     * The name of the checkbox, which is submitted with the form data.
     *
     * @webnative
     */
    readonly name?: string;
    /**
     * A value must be specified for the checkbox before the owning form can be
     * submitted.
     *
     * See
     * [Client-side validation](https://developer.mozilla.org/docs/Web/HTML/Element/input#client-side_validation)
     * and the
     * [HTML attribute: `required`](https://developer.mozilla.org/docs/Web/HTML/Attributes/required)
     * for more information.
     *
     * @webnative
     */
    readonly required?: boolean;
    /**
     * The error message that would be shown to the user if the `<qds-checkbox>`
     * was to be checked for validity.
     *
     * @readonly
     * @webnative
     */
    readonly validationMessage: ElementInternals['validationMessage'];
    /**
     * The [`ValidityState`][] object for this `<qds-checkbox>`.
     *
     * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
     *
     * @readonly
     * @webnative
     */
    readonly validity: ElementInternals['validity'];
    /**
     * The value of the checkbox, submitted as a name/value pair with form data.
     *
     * @webnative
     */
    readonly value?: CheckboxValue;
    /**
     * True if `<qds-checkbox>` will be validated when the form is submitted;
     * false otherwise.
     *
     * @readonly
     * @webnative
     */
    readonly willValidate: ElementInternals['willValidate'];
    private readonly internals;
    /**
     * Emitted when the checkbox loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when a change to the checkbox's state is committed by the user.
     */
    private readonly changeEmitter;
    /**
     * Emitted when the checkbox gains focus.
     */
    private readonly focusEmitter;
    private readonly host;
    private tabIndex?;
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
//# sourceMappingURL=checkbox.d.ts.map