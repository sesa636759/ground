import type { ComponentInterface } from '../../stencil-public-runtime';
/**
 * The `<qds-table-cell>` element defines a cell of a table that contains data.
 * It participates in the *table model*.
 *
 * @see https://quartz.se.com/build/components/table
 */
export declare class TableCell implements ComponentInterface {
    #private;
    /**
     * Non-negative integer value that indicates for how many columns the cell
     * extends. Its default value is `1`. Values higher than 1000 will be
     * considered as incorrect and will be set to the default value (1).
     *
     * @webnative
     */
    readonly colSpan?: number;
    /**
     * Non-negative integer value that indicates for how many rows the cell
     * extends. Its default value is `1`; if its value is set to `0`, it extends
     * until the end of the table section (`<qds-table-head>` or
     * `<qds-table-body>`, even if implicitly defined), that the cell belongs to.
     * Values higher than 65534 are clipped down to 65534.
     *
     * @webnative
     */
    readonly rowSpan?: number;
    private readonly host;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=table-cell.d.ts.map