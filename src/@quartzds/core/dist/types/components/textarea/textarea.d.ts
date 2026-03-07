import type { ComponentInterface } from '../../stencil-public-runtime';
import type { EnterKeyHint, InputMode, Value } from '../controls';
import type { Size } from '../shared';
export type TextAreaAutoComplete = 'off' | 'on';
export type Wrap = 'off' | 'soft';
/**
 * The `<qds-textarea>` element represents a multi-line plain-text editing
 * control, useful when you want to allow users to enter a sizeable amount of
 * free-form text, for example a comment on a review or feedback form.
 *
 * @see https://quartz.se.com/build/components/textarea
 */
export declare class TextArea implements ComponentInterface {
    #private;
    /**
     * The textarea's size.
     *
     * > **_NOTE:_** The native [`size` HTML attribute][] is not supported. CSS
     * `width` should be used instead if this functionality is needed.
     *
     * [`size` HTML attribute]: https://developer.mozilla.org/docs/Web/HTML/Attributes/size
     */
    readonly size?: Size;
    /**
     * Indicates whether the value of the textarea can be automatically completed
     * by the browser. Possible values:
     *
     * `off`: The user must explicitly enter a value into this field for every
     * use, or the document provides its own auto-completion method; the browser
     * does not automatically complete the entry.
     * `on`: The browser can automatically complete the value based on values
     * that the user has entered during previous uses.
     *
     * If the `autocomplete` attribute is not specified on a `<qds-textarea>`
     * element, then the browser uses the `autocomplete` attribute value of the
     * `<qds-textarea>` element's form owner. The form owner is either the
     * [`<form>`][] element that this `<qds-textarea>` element is a descendant of
     * or the form element whose `id` is specified by the `form` attribute of the
     * `qds-textarea` element. For more information, see the [`autocomplete`]
     * attribute in [`<form>`][].
     *
     * [`<form>`]: https://developer.mozilla.org/docs/Web/HTML/Element/form
     * [`autocomplete`]: https://developer.mozilla.org/docs/Web/HTML/Element/form#autocomplete
     *
     * @webnative
     */
    readonly autoComplete?: TextAreaAutoComplete;
    /**
     * The visible width of the text control, in average character widths. If it
     * is specified, it must be a positive integer. If it is not specified, the
     * default value is `20`.
     *
     * @webnative
     */
    readonly cols?: number;
    /**
     * Prevents the textarea from being interacted with: it cannot be pressed or
     * focused.
     *
     * @webnative
     */
    disabled?: boolean;
    /**
     * What action label (or icon) to present for the enter key on virtual
     * keyboards. Possible values:
     *
     * - `"done"`: Typically meaning there is nothing more to input and the input
     * method editor (IME) will be closed.
     * - `"enter"`:	Typically inserting a new line.
     * - `"go"`: 	Typically meaning to take the user to the target of the text
     * they typed.
     * - `"next"`: 	Typically taking the user to the next field that will accept
     * text.
     * - `"previous"`: Typically taking the user to the previous field that will
     * accept text.
     * - `"search"`: Typically taking the user to the results of searching for
     * the text they have typed.
     * - `"send"`: Typically delivering the text to its target.
     *
     * @webnative
     */
    readonly enterkeyhint?: EnterKeyHint;
    /**
     * The [`<form>`][] element to associate the input with (its form owner).
     *
     * The value of this attribute must be the id of a `<form>` in the same
     * document. If this attribute is not set, the `<qds-textarea>` is associated
     * with its ancestor `<form>` element, if any.
     *
     * This attribute lets you associate `<qds-textarea>` elements to `<form>`s
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
     * Provide a hint to browsers as to the type of virtual keyboard
     * configuration to use when editing this element or its contents.
     *
     * @webnative
     */
    readonly inputmode?: InputMode;
    /**
     * Returns a list of the [`<label>`][] elements associated with the
     * `qds-textarea` element.
     *
     * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
     *
     * @readonly
     * @webnative
     */
    readonly labels: ElementInternals['labels'];
    /**
     * The maximum number of characters (as UTF-16 code units) the user can enter
     * into the textarea. This must be an non-negative integer value. If no
     * `maxlength` is specified, or an invalid value is specified, the textarea
     * has no maximum length.
     *
     * The textarea will fail [constraint validation][] if the length of the text
     * entered into the field is greater than `maxlength` UTF-16 code units long.
     * By default, browsers prevent users from entering more characters than
     * allowed by the `maxlength` attribute. See [Client-side validation][] for
     * more information.
     *
     * [constraint validation]: https://developer.mozilla.org/docs/Web/Guide/HTML/Constraint_validation
     * [Client-side validation]: https://developer.mozilla.org/docs/Web/HTML/Element/input#client-side_validation
     *
     * @webnative
     */
    readonly maxLength?: number;
    /**
     * The minimum number of characters (as UTF-16 code units) the user can enter
     * into the textarea. This must be an non-negative integer value smaller than
     * or equal to the value specified by `maxlength`. If no `minlength` is
     * specified, or an invalid value is specified, the textarea has no minimum
     * length.
     *
     * The textarea will fail [constraint validation][] if the length of the text
     * entered into the field is fewer than `minlength` UTF-16 code units long,
     * preventing form submission. See [Client-side validation][] for more
     * information.
     *
     * [constraint validation]: https://developer.mozilla.org/docs/Web/Guide/HTML/Constraint_validation
     * [Client-side validation]: https://developer.mozilla.org/docs/Web/HTML/Element/input#client-side_validation
     *
     * @webnative
     */
    readonly minLength?: number;
    /**
     * The name of the textarea, which is submitted with the form data.
     *
     * @webnative
     */
    readonly name?: string;
    /**
     * Text that appears in the textarea when it has no value set.
     *
     * @webnative
     */
    readonly placeholder?: string;
    /**
     * A value must be specified for the textarea before the owning form can be
     * submitted.
     *
     * See [Client-side validation][] and the [HTML attribute: `required`][] for
     * more information.
     *
     * [Client-side validation]: https://developer.mozilla.org/docs/Web/HTML/Element/input#client-side_validation
     * [HTML attribute: `required`]: https://developer.mozilla.org/docs/Web/HTML/Attributes/required
     *
     * @webnative
     */
    readonly required?: boolean;
    /**
     * The number of visible text lines for the control. If it is specified, it
     * must be a positive integer. If it is not specified, the default value is
     * `2`.
     *
     * @webnative
     */
    readonly rows?: number;
    /**
     * Get or set the selection direction of a text selection.
     *
     * > **_NOTE:_** This property has no effect when used as an attribute.
     *
     * @webnative
     */
    selectionDirection: HTMLInputElement['selectionDirection'];
    /**
     * Get or set the ending position or offset of a text selection.
     *
     * > **_NOTE:_** This property has no effect when used as an attribute.
     *
     * @webnative
     */
    selectionEnd: HTMLInputElement['selectionEnd'];
    /**
     * Get or set the starting position or offset of a text selection.
     *
     * > **_NOTE:_** This property has no effect when used as an attribute.
     *
     * @webnative
     */
    selectionStart: HTMLInputElement['selectionStart'];
    /**
     * The error message that would be shown to the user if the `<qds-select>`
     * was to be checked for validity.
     *
     * @readonly
     * @webnative
     */
    readonly validationMessage: ElementInternals['validationMessage'];
    /**
     * The [`ValidityState`][] object for this `<qds-select>`.
     *
     * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
     *
     * @readonly
     * @webnative
     */
    readonly validity: ElementInternals['validity'];
    /**
     * The value of the textarea.
     *
     * @webnative
     */
    value?: Value;
    /**
     * True if `<qds-textarea>` will be validated when the form is submitted;
     * false otherwise.
     *
     * @readonly
     * @webnative
     */
    readonly willValidate: ElementInternals['willValidate'];
    /**
     * Indicates how the control should wrap the value for form submission.
     * Possible values are:
     *
     * - `hard`: The browser automatically inserts line breaks (`CR+LF`) so that
     * each line is no longer than the width of the control; the `cols` attribute
     * must be specified for this to take effect
     * - `soft`: The browser ensures that all line breaks in the entered value
     * are a `CR+LF` pair, but no additional line breaks are added to the value.
     * - `off`: Like `soft` but changes appearance to `white-space: pre` so line
     * segments exceeding `cols` are not wrapped and the `<qds-textarea>` becomes
     * horizontally scrollable.
     *
     * If this attribute is not specified, `soft` is its default value.
     *
     * @webnative
     */
    readonly wrap?: Wrap;
    private readonly internals;
    /**
     * Emitted when the textarea loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when an alteration to the textarea's value is committed by the
     * user.
     */
    private readonly changeEmitter;
    /**
     * Emitted when the textarea gains focus.
     */
    private readonly focusEmitter;
    /**
     * Emitted when the textarea's value changes.
     */
    private readonly inputEmitter;
    private readonly host;
    private tabIndex?;
    protected onClick(event: MouseEvent): void;
    protected disabledChanged(): void;
    protected selectionDirectionChanged(): void;
    protected selectionEndChanged(): void;
    protected selectionStartChanged(): void;
    protected tabindexChanged(newValue: string): void;
    protected validationChanged(): void;
    protected valueChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
    checkValidity: ElementInternals['checkValidity'];
    reportValidity: ElementInternals['reportValidity'];
    setCustomValidity: HTMLTextAreaElement['setCustomValidity'];
    select: HTMLTextAreaElement['select'];
    setRangeText: (replacement: string, start: number, end: number, selectionMode?: SelectionMode) => void;
    setSelectionRange: HTMLTextAreaElement['setSelectionRange'];
}
//# sourceMappingURL=textarea.d.ts.map