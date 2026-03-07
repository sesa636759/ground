import type { ComponentInterface } from '../../stencil-public-runtime';
export type Scope = 'col' | 'row';
/**
 * The `<qds-table-head-cell>` element defines a cell as the header of a group
 * of table cells. The exact nature of this group is defined by the `scope`
 * attribute.
 *
 * @see https://quartz.se.com/build/components/table
 */
export declare class TableHeadCell implements ComponentInterface {
    #private;
    /**
     * A short abbreviated description of the cell's content. Some user-agents,
     * such as speech readers, may present this description before the content
     * itself.
     *
     * @webnative
     */
    readonly abbr?: string;
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
    /**
     * Defines the cells that the header element relates to. It may have the
     * following values:
     *
     * - `row`: The header relates to all cells of the row it belongs to.
     * - `col`: The header relates to all cells of the column it belongs to.
     *
     * If the `scope` attribute is not specified, or its value is not `row` or
     * `col`, then browsers automatically select the set of cells to which the
     * header cell applies.
     *
     * @webnative
     */
    readonly scope?: Scope;
    private readonly host;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=table-head-cell.d.ts.map