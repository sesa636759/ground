import type { ComponentInterface } from '../../stencil-public-runtime';
import type { AutoComplete, EnterKeyHint, InputMode, Value } from '../controls';
import type { Size } from '../shared';
export type Capture = '' | 'environment' | 'user';
export type InputType = 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
/**
 * The `<qds-input>` element is used to create interactive controls for
 * web-based forms in order to accept data from the user; a wide variety of
 * types of input data and control widgets are available, depending on the
 * device and
 * [user agent](https://developer.mozilla.org/docs/Glossary/User_agent).
 *
 * @see https://quartz.se.com/build/components/input
 */
export declare class Input implements ComponentInterface {
    #private;
    /**
     * Hide the input type's icon.
     *
     * > **_NOTE:_** Due to browser limitations, the icon may not be hidden in
     * all browsers.
     */
    readonly noIcon?: boolean;
    /**
     * The input's size.
     *
     * > **_NOTE:_** The native [`size` HTML attribute][size] is not supported.
     * CSS `width` should be used instead if this functionality is needed.
     *
     * [size]: https://developer.mozilla.org/docs/Web/HTML/Attributes/size
     */
    readonly size?: Size;
    /**
     * Defines the file types the `file` type input should accept. This is a
     * comma-separated list of [unique file type specifiers][]. Because a given
     * file type may be identified in more than one manner, it's useful to
     * provide a thorough set of type specifiers when you files of a given format
     * are needed.
     *
     * For instance, there are a number of ways Microsoft Word files can be
     * identified, so a site that accepts Word files might use a `<qds-input>`
     * like this:
     *
     * @example
     * <qds-input
     *   type="file"
     *   accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
     * ></qds-input>
     *
     * [unique file type specifiers]: https://developer.mozilla.org/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
     *
     * @webnative
     */
    readonly accept?: string;
    /**
     * Provides a hint for a [user agent's][] autocomplete feature. See
     * [the HTML `autocomplete` attribute][autocomplete] for a complete list of
     * values and details on how to use `autoComplete`.
     *
     * [user agent's]: https://developer.mozilla.org/docs/Glossary/User_agent
     * [autocomplete]: https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete
     *
     * @webnative
     */
    readonly autoComplete?: AutoComplete;
    /**
     * Specifies that a new file should be captured and which device should be
     * used to capture that new media of the type defined by `accept`.
     *
     * Values include `user`, `environment`, and `''`:
     *
     * - `user`: The user-facing camera and/or microphone should be used.
     * - `environment`: The outward-facing camera and/or microphone should be
     * used.
     * - `''`: The implementation-specific capture state.
     *
     * @webnative
     */
    readonly capture?: Capture;
    /**
     * Prevents the input from being interacted with: it cannot be pressed or
     * focused.
     *
     * @webnative
     */
    readonly disabled?: boolean;
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
     * Returns a file list for a `file` type input.
     *
     * @readonly
     * @webnative
     */
    readonly files: HTMLInputElement['files'];
    /**
     * The [`<form>`][] element to associate the input with (its form owner).
     *
     * The value of this attribute must be the id of a `<form>` in the same
     * document. If this attribute is not set, the `<qds-input>` is associated
     * with its ancestor `<form>` element, if any.
     *
     * This attribute lets you associate `<qds-input>` elements to `<form>`s
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
     * `qds-input` element.
     *
     * [`<label>`]: https://developer.mozilla.org/docs/Web/HTML/Element/label
     *
     * @readonly
     * @webnative
     */
    readonly labels: ElementInternals['labels'];
    /**
     * Defines the greatest value in the range of permitted values. If the
     * `value` entered into the input exceeds this, the input fails
     * [constraint validation][]. Only valid for `date`, `datetime-local`,
     * `month`, `time`, and `week` inputs.
     *
     * If this value isn't a valid number, then the input has no maximum value.
     *
     * [constraint validation]: https://developer.mozilla.org/docs/Web/Guide/HTML/Constraint_validation
     *
     * @webnative
     */
    readonly max?: number | string;
    /**
     * The maximum number of characters (as UTF-16 code units) the user can enter
     * into the input. This must be an non-negative integer value. If no
     * `maxlength` is specified, or an invalid value is specified, the input has
     * no maximum length. Only valid for `email`, `password`, `search`, `tel`,
     * `text`, and `url` inputs.
     *
     * The input will fail [constraint validation][] if the length of the text
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
     * Defines the most negative value in the range of permitted values. If the
     * `value` entered into the input is less than this, the input fails
     * [constraint validation][]. Only valid for `date`, `datetime-local`,
     * `month`, `time`, and `week` inputs.
     *
     * This value must be less than or equal to the value of the `max` attribute.
     * If this value isn't a valid number, then the input has no minimum value.
     *
     * [constraint validation]: https://developer.mozilla.org/docs/Web/Guide/HTML/Constraint_validation
     *
     * @webnative
     */
    readonly min?: number | string;
    /**
     * The minimum number of characters (as UTF-16 code units) the user can enter
     * into the input. This must be an non-negative integer value smaller than or
     * equal to the value specified by `maxlength`. If no `minlength` is
     * specified, or an invalid value is specified, the input has no minimum
     * length. Only valid for `email`, `password`, `search`, `tel`, `text`, and
     * `url` inputs.
     *
     * The input will fail [constraint validation][] if the length of the text
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
     * For `email` inputs, specifies if multiple comma-separated email addresses
     * can be entered. For `file` inputs, specifies if the user is allowed to
     * select more than one file.
     *
     * Only valid for `email` or `file` inputs.
     *
     * @webnative
     */
    readonly multiple?: boolean;
    /**
     * The name of the input, which is submitted with the form data.
     *
     * @webnative
     */
    readonly name?: string;
    /**
     * Defines a regular expression that the input's `value` must match in order
     * for the value to pass [constraint validation][]. It must be a valid
     * JavaScript regular expression, as used by the [`RegExp`][] type, and as
     * documented in MDN's [guide on regular expressions][]; the `'u'` flag is
     * specified when compiling the regular expression, so that the pattern is
     * treated as a sequence of Unicode code points, instead of as ASCII. No
     * forward slashes should be specified around the pattern text. Only valid
     * for `email`, `password`, `search`, `tel`, `text`, and `url` inputs.
     *
     * If the `pattern` is invalid, no regular expression is applied and this
     * property is ignored. If the pattern is valid and a non-empty value does
     * not match the pattern, constraint validation will prevent form submission.
     *
     * [constraint validation]: https://developer.mozilla.org/docs/Web/Guide/HTML/Constraint_validation
     * [`RegExp`]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp
     * [guide on regular expressions]: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions
     *
     * @webnative
     */
    readonly pattern?: string;
    /**
     * Text that appears in the input when it has no value set. Only valid for
     * `email`, `number`, `password`, `search`, `tel`, `text`, and `url` inputs.
     *
     * @webnative
     */
    readonly placeholder?: string;
    /**
     * A value must be specified for the input before the owning form can be
     * submitted. Not valid for `color` inputs.
     *
     * See [Client-side validation][] and the
     * [HTML attribute: `required`][required] for more information.
     *
     * [Client-side validation]: https://developer.mozilla.org/docs/Web/HTML/Element/input#client-side_validation
     * [required]: https://developer.mozilla.org/docs/Web/HTML/Attributes/required
     *
     * @webnative
     */
    readonly required?: boolean;
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
     * Specifies the granularity that the `value` must adhere to. Only valid for
     * `date`, `datetime-local`, `month`, `number`, `time`, and `week` inputs.
     *
     * The value must be a positive number—integer or float—or the special value
     * `any`, which means no stepping is implied, and any value is allowed
     * (barring other constraints, such as `min` and `max`).
     *
     * If `any` is not explicitly set, valid values for the `number` are the
     * basis for stepping — the `min` value and increments of the step value, up
     * to the `max` value, if specified.
     *
     * @webnative
     */
    readonly step?: number | 'any';
    /**
     * The type of input to render:
     *
     * - `"date"`: An input for entering a date (year, month, and day, with no
     * time). Opens a date picker or numeric wheels for year, month, day when
     * active in supporting browsers.
     * - `"datetime-local"`: An input for entering a date and time, with no time
     * zone. Opens a date picker or numeric wheels for date and time components
     * when active in supporting browsers.
     * - `"email"`: An input for editing an email address. Looks like a `"text"`
     * input, but has validation parameters and relevant keyboard in supporting
     * browsers and devices with dynamic keyboards.
     * - `"month"`: An input for entering a month and year, with no time zone.
     * - `"number"`: An input for entering a number. Displays a spinner and adds
     * default validation when supported. Displays a numeric keypad in some
     * devices with dynamic keypads.
     * - `"password"`: A single-line text input whose value is obscured. Will
     * alert user if site is not secure.
     * - `"search"`: A single-line text input for entering search strings.
     * Line-breaks are automatically removed from the input value. May include a
     * delete icon in supporting browsers that can be used to clear the input.
     * Displays a search icon instead of enter key on some devices with dynamic
     * keypads.
     * - `"tel"`: An input for entering a telephone number. Displays a telephone
     * keypad in some devices with dynamic keypads.
     * - `"text"`: A single-line text input. Line-breaks are automatically
     * removed from the input value.
     * - `"time"`: An input for entering a time value with no time zone.
     * - `"url"`: An input for entering a URL. Looks like a `"text"` input, but
     * has validation parameters and relevant keyboard in supporting browsers and
     * devices with dynamic keyboards.
     * - `"week"`: An input for entering a date consisting of a week-year number
     * and a week number with no time zone.
     *
     * @webnative
     */
    readonly type?: InputType;
    /**
     * The error message that would be shown to the user if the `<qds-input>`
     * was to be checked for validity.
     *
     * @readonly
     * @webnative
     */
    readonly validationMessage: ElementInternals['validationMessage'];
    /**
     * The [`ValidityState`][] object for this `<qds-input>`.
     *
     * [`ValidityState`]: https://developer.mozilla.org/docs/Web/API/ValidityState
     *
     * @readonly
     * @webnative
     */
    readonly validity: ElementInternals['validity'];
    /**
     * The value of the input.
     *
     * @webnative
     */
    value?: Value;
    /**
     * True if `<qds-input>` will be validated when the form is submitted; false
     * otherwise.
     *
     * @readonly
     * @webnative
     */
    readonly willValidate: ElementInternals['willValidate'];
    private readonly internals;
    /**
     * Emitted when the input loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when the user cancels the file picker via the <kbd>Esc</kbd> key
     * or the cancel button and when the user re-selects the same files that were
     * previously selected.
     */
    private readonly cancelEmitter;
    /**
     * Emitted when an alteration to the input's value is committed by the user.
     */
    private readonly changeEmitter;
    /**
     * Emitted when the input gains focus.
     */
    private readonly focusEmitter;
    /**
     * Emitted when the input's value changes.
     */
    private readonly inputEmitter;
    private readonly host;
    private tabIndex?;
    protected onClick(event: MouseEvent): void;
    protected onKeydown(event: KeyboardEvent): void;
    protected disabledChanged(): void;
    protected selectionDirectionChanged(): void;
    protected selectionEndChanged(): void;
    protected selectionStartChanged(): void;
    protected tabindexChanged(newValue: string): void;
    protected validationChanged(): void;
    protected valueChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
    checkValidity: ElementInternals['checkValidity'];
    reportValidity: ElementInternals['reportValidity'];
    setCustomValidity: HTMLInputElement['setCustomValidity'];
    select: HTMLInputElement['select'];
    getSelectionDirection: () => HTMLInputElement['selectionDirection'];
    getSelectionStart: () => HTMLInputElement['selectionStart'];
    getSelectionEnd: () => HTMLInputElement['selectionEnd'];
    setRangeText: (replacement: string, start: number, end: number, selectionMode?: SelectionMode) => void;
    setSelectionRange: HTMLInputElement['setSelectionRange'];
    stepDown: HTMLInputElement['stepDown'];
    stepUp: HTMLInputElement['stepUp'];
    showPicker: HTMLInputElement['showPicker'];
}
//# sourceMappingURL=input.d.ts.map