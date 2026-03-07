import type { ComponentInterface } from '../../stencil-public-runtime';
import type { AutoComplete } from '../controls';
import type { Size } from '../shared';
export type SelectType = 'select-multiple' | 'select-one';
/**
 * The `<qds-select>` element represents a control that provides a menu of
 * options.
 *
 * @see https://quartz.se.com/build/components/select
 */
export declare class Select implements ComponentInterface {
    #private;
    /**
     * The select's size.
     *
     * > ***NOTE:*** The native [`size` HTML attribute] is not supported. CSS
     * `height` should be used instead if this functionality is needed.
     *
     * [`size` HTML attribute]: https://developer.mozilla.org/docs/Web/HTML/Attributes/size
     */
    readonly size?: Size;
    /**
     * Provides a hint for a [user agent's][] autocomplete feature. See
     * [the HTML `autocomplete` attribute][] for a complete list of values and
     * details on how to use `autoComplete`.
     *
     * [user agent's]: https://developer.mozilla.org/docs/Glossary/User_agent
     * [the HTML `autocomplete` attribute]: https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete
     *
     * @webnative
     */
    readonly autoComplete?: AutoComplete;
    /**
     * Prevents the select from being interacted with: it cannot be pressed or
     * focused.
     *
     * @webnative
     */
    readonly disabled?: boolean;
    /**
     * The [`<form>`][] element to associate the select with (its form owner).
     *
     * The value of this attribute must be the id of a `<form>` in the same
     * document. If this attribute is not set, the `<qds-select>` is associated
     * with its ancestor `<form>` element, if any.
     *
     * This attribute lets you associate `<qds-select>` elements to `<form>`s
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
     * Returns the number of elements in the [`<option>`s collection][].
     *
     * [`<option>`s collection]: https://developer.mozilla.org/docs/Web/API/HTMLOptionsCollection
     *
     * @readonly
     * @webnative
     */
    readonly length: HTMLSelectElement['length'];
    /**
     * Indicates that multiple options can be selected in the list. If it is not
     * specified, then only one option can be selected at a time. When `multiple`
     * is specified, most browsers will show a scrolling list box instead of a
     * single line dropdown.
     *
     * @webnative
     */
    multiple?: boolean;
    /**
     * The name of the select, which is submitted with the form data.
     *
     * @webnative
     */
    readonly name?: string;
    /**
     * An [`HTMLOptionsCollection`][] of the [`<option>`][] elements contained by
     * the `<qds-select>` element.
     *
     * [`HTMLOptionsCollection`]: https://developer.mozilla.org/docs/Web/API/HTMLOptionsCollection
     * [`<option>`]: https://developer.mozilla.org/docs/Web/HTML/Element/option
     *
     * @readonly
     * @webnative
     */
    readonly options: HTMLSelectElement['options'];
    /**
     * An `<option>` with a non-empty string value must be selected before this
     * select can be submitted.
     *
     * See [Client-side validation] and the [HTML attribute: `required`] for more
     * information.
     *
     * [Client-side validation]: https://developer.mozilla.org/docs/Web/HTML/Element/input#client-side_validation
     * [HTML attribute: `required`]: https://developer.mozilla.org/docs/Web/HTML/Attributes/required
     *
     * @webnative
     */
    readonly required?: boolean;
    /**
     * The index of the first or last selected [`<option>`][] element, depending
     * on the value of `multiple`. The value `-1` indicates that no element is
     * selected.
     *
     * [`<option>`]: https://developer.mozilla.org/docs/Web/HTML/Element/option
     *
     * @webnative
     */
    selectedIndex: HTMLSelectElement['selectedIndex'];
    /**
     * Collection of the [`<option>`][] elements contained within the
     * `<qds-select>` element that are currently selected.
     *
     * [`<option>`]: https://developer.mozilla.org/docs/Web/HTML/Element/option
     *
     * @readonly
     * @webnative
     */
    readonly selectedOptions: HTMLSelectElement['selectedOptions'];
    /**
     * Returns `select-multiple` if the `multiple` attribute is true;
     * `select-one` otherwise.
     *
     * @readonly
     * @webnative
     */
    readonly type: SelectType;
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
     * The `value` property of the first selected [`<option>`][] element, or the
     * empty string if no options are selected.
     *
     * [`<option>`]: https://developer.mozilla.org/docs/Web/HTML/Element/option
     *
     * @webnative
     */
    value?: string | undefined;
    /**
     * True if `<qds-select>` will be validated when the form is submitted;
     * false otherwise.
     *
     * @readonly
     * @webnative
     */
    readonly willValidate: ElementInternals['willValidate'];
    private readonly internals;
    /**
     * Emitted when the select loses focus.
     */
    private readonly blurEmitter;
    /**
     * Emitted when an alteration to the select's value is committed by the
     * user.
     */
    private readonly changeEmitter;
    /**
     * Emitted when the select gains focus.
     */
    private readonly focusEmitter;
    /**
     * Emitted when the select's value changes.
     */
    private readonly inputEmitter;
    private readonly host;
    private tabIndex?;
    protected onClick(event: MouseEvent): void;
    protected disabledChanged(): void;
    protected selectedIndexChanged(): void;
    protected tabindexChanged(newValue: string): void;
    protected validationChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
    checkValidity: ElementInternals['checkValidity'];
    reportValidity: ElementInternals['reportValidity'];
    setCustomValidity: HTMLSelectElement['setCustomValidity'];
    addItem: HTMLSelectElement['add'];
    removeItem: (index: number) => void;
    item: HTMLSelectElement['item'];
    namedItem: HTMLSelectElement['namedItem'];
}
//# sourceMappingURL=select.d.ts.map