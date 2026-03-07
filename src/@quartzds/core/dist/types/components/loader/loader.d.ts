import type { ComponentInterface } from '../../stencil-public-runtime';
import type { Size } from '../shared';
export type LoaderSize = Size | 'jumbo';
export type LoaderStatus = 'error' | 'success' | 'warning';
/**
 * The `<qds-loader>` element displays an indicator showing that content is
 * being loaded or processed.
 *
 * @see https://quartz.se.com/build/components/loader
 */
export declare class Loader implements ComponentInterface {
    #private;
    /**
     * The loader's size.
     */
    readonly size?: LoaderSize;
    /**
     * The loader's status.
     */
    readonly status?: LoaderStatus;
    private readonly host;
    private readonly internals;
    protected statusChanged(): void;
    componentWillLoad(): void;
    render(): any;
}
//# sourceMappingURL=loader.d.ts.map