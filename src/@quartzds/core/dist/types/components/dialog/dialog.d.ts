import type { ComponentInterface } from '../../stencil-public-runtime';
/**
 * The `<qds-dialog>` element represent a dialog box or other interactive
 * component, such as a dismissible alert, inspector, or subwindow.
 *
 * @see https://quartz.se.com/build/components/dialog
 */
export declare class Dialog implements ComponentInterface {
    #private;
    /**
     * Indicates whether or not the dialog is open. You can toggle this attribute
     * to show and hide the dialog, or you can use the `show()` and `close()`
     * methods and this attribute will reflect the dialog’s open state.
     */
    open: boolean;
    private readonly host;
    /**
     * Emitted when the user instructs the browser that they wish to dismiss the
     * currently open dialog. The browser fires this event when the user presses
     * the `Esc` key.
     *
     * When a dialog is dismissed with the `Esc` key, both the `qdsCancel` and
     * `qdsClose` events are fired.
     */
    private readonly cancelEmitter;
    /** Emitted when the dialog has been closed. */
    private readonly closeEmitter;
    protected openChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
    show(): void;
    close(): void;
}
//# sourceMappingURL=dialog.d.ts.map