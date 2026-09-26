/**
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * This enum is for REPENTOGON, an exe-hack which expands the modding API.
 *
 * @enum
 * @notExported
 * @rename GetCollectibleFlag
 * @see https://repentogon.com/
 */
declare const GetCollectibleFlagInternal: {
    /** Bans active collectibles. */
    readonly BAN_ACTIVE: number;
    /**
     * Ignores attempts to morph the collectible into Magic Skin or Rosary. Does not prevent morphing
     * the collectible into The Bible.
     */
    readonly IGNORE_MODIFIERS: number;
    readonly BAN_PASSIVE: number;
};
type GetCollectibleFlagValue = BitFlag & {
    readonly __getCollectibleFlagBrand: symbol;
};
type GetCollectibleFlagType = {
    readonly [K in keyof typeof GetCollectibleFlagInternal]: GetCollectibleFlagValue;
};
export declare const GetCollectibleFlag: GetCollectibleFlagType;
export type GetCollectibleFlag = GetCollectibleFlagType[keyof GetCollectibleFlagType];
export declare const GetCollectibleFlagZero: BitFlags<GetCollectibleFlag>;
export {};
//# sourceMappingURL=GetCollectibleFlag.d.ts.map