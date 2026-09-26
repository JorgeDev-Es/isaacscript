/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename ImGuiWindowFlag
 * @see https://repentogon.com/
 */
declare const ImGuiWindowFlagInternal: {
    readonly NONE: 0;
    /** Disables the title bar. */
    readonly NO_TITLE_BAR: number;
    readonly NO_RESIZE: number;
    /** Disables moving the window. */
    readonly NO_MOVE: number;
    /** Disable scrollbars. The window can still scroll with the mouse or programmatically. */
    readonly NO_SCROLLBAR: number;
    /**
     * Disable user vertically scrolling with mouse wheel. On child window, mouse wheel will be
     * forwarded to the parent unless `ImGuiWindowFlag.NO_SCROLLBAR` is also set.
     */
    readonly NO_SCROLL_WITH_MOUSE: number;
    /** Disable user collapsing window by double-clicking on it. */
    readonly NO_COLLAPSE: number;
    /** Resize every window to its content every frame. */
    readonly ALWAYS_AUTO_RESIZE: number;
    /** Disable drawing background colors and outside borders. */
    readonly NO_BACKGROUND: number;
    /** Never load/save settings in an `.ini` file. */
    readonly NO_SAVED_SETTINGS: number;
    /** Disable catching mouse inputs. */
    readonly NO_MOUSE_INPUTS: number;
    /** Has a menu-bar. */
    readonly MENU_BAR: number;
    /** Allow horizontal scrollbar to appear (off by default). */
    readonly HORIZONTAL_SCROLLBAR: number;
    /** Disable taking focus when transitioning from hidden to visible state. */
    readonly NO_FOCUS_ON_APPEARING: number;
    /**
     * Disable bringing window to front when taking focus (e.g. clicking on it or programmatically
     * giving it focus).
     */
    readonly NO_BRING_TO_FRONT_ON_FOCUS: number;
    /** Always show vertical scrollbar. */
    readonly ALWAYS_VERTICAL_SCROLLBAR: number;
    /** Always show horizontal scrollbar. */
    readonly ALWAYS_HORIZONTAL_SCROLLBAR: number;
    /** No gamepad/keyboard navigation within the window. */
    readonly NO_NAV_INPUTS: number;
    /** No focusing toward this window with gamepad/keyboard navigation (e.g. skipped by CTRL+TAB). */
    readonly NO_NAV_FOCUS: number;
    /**
     * Display a dot next to the title. When used in a tab/docking context, tab is selected when
     * clicking the X + closure is not assumed (will wait for user to stop submitting the tab).
     * Otherwise closure is assumed.
     */
    readonly UNSAVED_DOCUMENT: number;
};
type ImGuiWindowFlagValue = BitFlag & {
    readonly __imGuiWindowFlagBrand: symbol;
};
type ImGuiWindowFlagType = {
    readonly [K in keyof typeof ImGuiWindowFlagInternal]: ImGuiWindowFlagValue;
};
export declare const ImGuiWindowFlag: ImGuiWindowFlagType;
export type ImGuiWindowFlag = ImGuiWindowFlagType[keyof ImGuiWindowFlagType];
export declare const ImGuiWindowFlagZero: BitFlags<ImGuiWindowFlag>;
export {};
//# sourceMappingURL=ImGuiWindowFlags.d.ts.map