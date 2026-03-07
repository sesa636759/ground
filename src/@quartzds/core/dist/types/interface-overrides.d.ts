export {};
interface ValidationMethods {
    /**
     * Returns true if element has no validity problems; false otherwise.
     * Fires an invalid event at the element in the latter case.
     *
     * @webnative
     */
    readonly checkValidity: ElementInternals['checkValidity'];
    /**
     * Returns true if the element has no validity problems; otherwise, returns
     * false, fires an invalid event at the element, and (if the event isn't
     * canceled) reports the problem to the user.
     *
     * @webnative
     */
    readonly reportValidity: ElementInternals['reportValidity'];
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     *
     * @param error The custom error message to set.
     *
     * @webnative
     */
    readonly setCustomValidity: HTMLInputElement['setCustomValidity'];
}
declare module './components' {
    namespace Components {
        interface QdsCheckbox extends ValidationMethods {
        }
        interface QdsDialog {
            /**
             * Displays the dialog over the top of any other dialogs that might be
             * present. Everything outside of the dialog is [inert][] with interactions
             * outside of the dialog being blocked.
             *
             * [inert]: https://developer.mozilla.org/docs/Web/API/HTMLElement/inert
             */
            show: () => void;
            /**
             * Closes the dialog.
             */
            close: () => void;
        }
        interface QdsDropdown {
            /**
             * Displays the dropdown.
             */
            show: () => void;
            /**
             * Closes the dropdown.
             */
            close: () => void;
        }
        interface QdsInput extends ValidationMethods {
            /**
             * Selects the entire content of the `<qds-input>` element if the
             * element's content is selectable.
             */
            readonly select: HTMLInputElement['select'];
            /**
             * Sets the contents of the specified range of characters in the input element to a given string.
             *
             * @param replacement The string to insert.
             * @param start The 0-based index of the first character to replace. Defaults to the current `selectionStart` value (the start of the user's current selection).
             * @param end The 0-based index of the character _after_ the last character to replace. Defaults to the current `selectionEnd` value (the end of the user's current selection).
             * @param selectionMode A string defining how the selection should be set
             * after the text has been replaced. Possible values:
             * - `"select"` selects the newly inserted text.
             * - `"start"` moves the selection to just before the inserted text.
             * - `"end"` moves the selection to just after the inserted text.
             * - `"preserve"` attempts to preserve the selection.
             *
             * @webnative
             */
            readonly setRangeText: HTMLInputElement['setRangeText'];
            /**
             * Selects the specified range of characters within the input.
             *
             * @param start The offset into the input for the start of the selection.
             * @param end The offset into the input for the end of the selection.
             * @param direction The direction in which the selection is performed.
             *
             * @webnative
             */
            readonly setSelectionRange: HTMLInputElement['setSelectionRange'];
            /**
             * Decrements the `value` by (`step` * n), where n defaults to 1 if not
             * specified.
             *
             * @param n Amount to decrement the value by.
             *
             * @webnative
             */
            readonly stepDown: HTMLInputElement['stepDown'];
            /**
             * Increments the `value` by (`step` * n), where n defaults to 1 if not
             * specified.
             *
             * @param n Amount to increment the value by.
             *
             * @webnative
             */
            readonly stepUp: HTMLInputElement['stepUp'];
            /**
             * Displays the browser picker for a `<qds-input>` element.
             *
             * This is the same picker that would normally be displayed when the
             * element is selected, but can be triggered from a button press or other
             * user interaction.
             *
             * Commonly browsers implement it for inputs of these types: `"date"`,
             * `"month"`, `"week"`, `"time"`, `"datetime-local"`, or `"color"`. It
             * can also be pre-populated with items from a [`<datalist>`][] element
             * or [`autocomplete`][] attribute.
             *
             * More generally, this method should display the picker for any
             * `<qds-input>` element on the platform that has a picker.
             *
             * [`<datalist>`]: https://developer.mozilla.org/docs/Web/HTML/Element/datalist
             * [`autocomplete`]: https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete
             *
             * @webnative
             */
            readonly showPicker: HTMLInputElement['showPicker'];
        }
        interface QdsSelect extends ValidationMethods {
            /**
             * Adds an element to the options collection.
             *
             * @param element The element to add.
             * @param before An element of the options collection or a zero-based
             * index representing the item the element should be added before. If
             * this parameter is not specified or the index does not exist, the new
             * element is appended to the end of the collection.
             */
            readonly addItem: HTMLSelectElement['add'];
            /**
             * Removes an element from the options collection.
             *
             * @param index Zero-based index of the [`HTMLOptionElement`][] to remove
             * from the collection. If the index is not found the method has no
             * effect.
             *
             * [`HTMLOptionElement`]: https://developer.mozilla.org/docs/Web/API/HTMLOptionElement
             */
            readonly removeItem: HTMLSelectElement['remove'];
            /**
             * Retrieves an element from the options collection by its index.
             *
             * @param index Zero-based index of the [`HTMLOptionElement`][] to
             * retrieve.
             *
             * [`HTMLOptionElement`]: https://developer.mozilla.org/docs/Web/API/HTMLOptionElement
             *
             * @webnative
             */
            readonly item: HTMLSelectElement['item'];
            /**
             * Retrieves an element from the options collection by its name.
             *
             * @param name The `name` or `id` property of the [`HTMLOptionElement`][] to
             * retrieve.
             *
             * [`HTMLOptionElement`]: https://developer.mozilla.org/docs/Web/API/HTMLOptionElement
             *
             * @webnative
             */
            readonly namedItem: HTMLSelectElement['namedItem'];
        }
        interface QdsSwitch extends ValidationMethods {
        }
        interface QdsTextarea extends ValidationMethods {
            /**
             * Selects the entire content of the `<qds-textarea>` element if the
             * element's content is selectable.
             *
             * @webnative
             */
            readonly select: HTMLTextAreaElement['select'];
            /**
             * Sets the contents of the specified range of characters in the textarea
             * element to a given string.
             *
             * @param replacement The string to insert.
             * @param start The 0-based index of the first character to replace. Defaults to the current `selectionStart` value (the start of the user's current selection).
             * @param end The 0-based index of the character _after_ the last character to replace. Defaults to the current `selectionEnd` value (the end of the user's current selection).
             * @param selectionMode A string defining how the selection should be set
             * after the text has been replaced. Possible values:
             * - `"select"` selects the newly inserted text.
             * - `"start"` moves the selection to just before the inserted text.
             * - `"end"` moves the selection to just after the inserted text.
             * - `"preserve"` attempts to preserve the selection.
             *
             * @webnative
             */
            readonly setRangeText: HTMLTextAreaElement['setRangeText'];
            /**
             * Selects the specified range of characters within the textarea.
             *
             * @param start The offset into the textarea for the start of the selection.
             * @param end The offset into the textarea for the end of the selection.
             * @param direction The direction in which the selection is performed.
             *
             * @webnative
             */
            readonly setSelectionRange: HTMLTextAreaElement['setSelectionRange'];
        }
    }
}
//# sourceMappingURL=interface-overrides.d.ts.map