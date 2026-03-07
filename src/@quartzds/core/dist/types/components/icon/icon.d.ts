import type { ComponentInterface } from '../../stencil-public-runtime';
/**
 * @experimental
 */
export declare class Icon implements ComponentInterface {
    #private;
    /**
     * The name of the icon to render.
     *
     * Available names depend on the icon library being used.
     */
    readonly name: string;
    /**
     * The name of a registered icon library.
     */
    readonly library: string;
    /**
     * Emitted when the icon has loaded.
     */
    private readonly loadEmitter;
    /**
     * Emitted when the icon fails to load due to an error.
     */
    private readonly errorEmitter;
    private readonly host;
    private svg;
    private setIcon;
    componentWillLoad(): Promise<void>;
    render(): any;
}
//# sourceMappingURL=icon.d.ts.map