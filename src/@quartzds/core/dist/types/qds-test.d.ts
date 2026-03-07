import type { Locator, Page } from '@playwright/test';
import type { EventSpy } from '@stencil/playwright/dist/page/event-spy';
declare module '@playwright/test' {
    interface Locator {
        /**
         * Creates a new EventSpy and listens on the window for an event.
         * The test will timeout if the event never fires.
         *
         * Usage:
         * ```ts
         * const ionChange = await page.spyOnEvent('ionChange');
         * ...
         * await ionChange.next();
         * ```
         */
        spyOnEvent: (eventName: string) => Promise<EventSpy>;
    }
}
interface QuartzPageOptions {
    addBrandFont?: boolean;
    content?: string;
    platform?: 'desktop' | 'mobile';
    theme?: 'dark' | 'light';
}
export declare const setupQuartzPage: (page: Page, options?: QuartzPageOptions) => Promise<void>;
export declare const press: (locator: Locator) => Promise<void>;
export { expect } from '@playwright/test';
export { test } from '@stencil/playwright';
//# sourceMappingURL=qds-test.d.ts.map