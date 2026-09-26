/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename ButtonActionFlag
 * @see https://repentogon.com/
 */
declare const ButtonActionFlagInternal: {
    readonly ACTION_LEFT: number;
    readonly ACTION_RIGHT: number;
    readonly ACTION_UP: number;
    readonly ACTION_DOWN: number;
    readonly ACTION_SHOOT__LEFT: number;
    readonly ACTION_SHOOT_RIGHT: number;
    readonly ACTION_SHOOT_UP: number;
    readonly ACTION_SHOOT_DOWN: number;
    readonly ACTION_BOMB: number;
    readonly ACTION_ITEM: number;
    readonly ACTION_PILL_CARD: number;
    readonly ACTION_DROP: number;
    readonly ACTION_PAUSE: number;
    readonly ACTION_MAP: number;
    readonly ACTION_MENU__CONFIRM: number;
    readonly ACTION_MENU_BACK: number;
    readonly ACTION_RESTART: number;
    readonly ACTION_FULLSCREEN: number;
    readonly ACTION_MUTE: number;
    readonly ACTION_JOIN_MULTIPLAYER: number;
    readonly ACTION_MENU_LEFT: number;
    readonly ACTION_MENU_RIGHT: number;
    readonly ACTION_MENU_UP: number;
    readonly ACTION_MENU_DOWN: number;
    readonly ACTION_MENU_LT: number;
    readonly ACTION_MENU_RT: number;
    readonly ACTION_MENU_TAB: number;
    readonly ACTION_CONSOLE: number;
};
type ButtonActionFlagValue = BitFlag & {
    readonly __buttonActionFlagBrand: symbol;
};
type ButtonActionFlagType = {
    readonly [K in keyof typeof ButtonActionFlagInternal]: ButtonActionFlagValue;
};
export declare const ButtonActionFlag: ButtonActionFlagType;
export type ButtonActionFlag = ButtonActionFlagType[keyof ButtonActionFlagType];
export declare const ButtonActionFlagZero: BitFlags<ButtonActionFlag>;
export {};
//# sourceMappingURL=ButtonActionFlag.d.ts.map