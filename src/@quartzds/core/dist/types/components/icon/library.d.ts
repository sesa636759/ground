import type { Except } from 'type-fest';
export type IconLibraryResolver = (name: string) => string;
export interface IconLibrary {
    name: string;
    resolver: IconLibraryResolver;
}
/**
 * Returns a library from the registry.
 */
export declare const getIconLibrary: (name: string) => IconLibrary | undefined;
/**
 * Removes an icon library from the registry.
 */
export declare const unregisterIconLibrary: (name: string) => void;
/**
 * Adds an icon library to the registry or overrides an existing one.
 */
export declare const registerIconLibrary: (name: string, options: Except<IconLibrary, "name">) => void;
//# sourceMappingURL=library.d.ts.map